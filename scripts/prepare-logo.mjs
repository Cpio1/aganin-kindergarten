/**
 * Подготавливает логотип: npm run logo [путь-к-файлу]
 *
 * Находит файл с «logo» или «логотип» в имени (public/images, public, корень проекта)
 * и создаёт public/images/logo.png. Пропорции сохраняются, прозрачность оригинала
 * не меняется. Если прозрачности нет, однотонный светлый фон вокруг логотипа удаляется
 * заливкой от краёв, поэтому светлые детали внутри логотипа остаются.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const target = path.join(root, "public/images/logo.png");
const LOGO = /(logo|логотип).*\.(png|jpe?g|webp|svg|avif|heic|heif)$/i;
const TOLERANCE = 28;

function findSource() {
  if (process.argv[2]) return path.resolve(process.argv[2]);
  for (const dir of ["public/images", "public", "."]) {
    const absolute = path.join(root, dir);
    if (!fs.existsSync(absolute)) continue;
    const file = fs.readdirSync(absolute).find((name) => LOGO.test(name));
    if (file) return path.join(absolute, file);
  }
  return null;
}

/** Делает прозрачными пиксели, цвет которых близок к цвету углов и связан с краем. */
function removeEdgeBackground(data, width, height) {
  const at = (x, y) => (y * width + x) * 4;
  const corner = at(0, 0);
  const [r, g, b] = [data[corner], data[corner + 1], data[corner + 2]];
  const isBackground = (i) =>
    Math.abs(data[i] - r) <= TOLERANCE &&
    Math.abs(data[i + 1] - g) <= TOLERANCE &&
    Math.abs(data[i + 2] - b) <= TOLERANCE;

  const seen = new Uint8Array(width * height);
  const stack = [];
  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height || seen[y * width + x]) return;
    seen[y * width + x] = 1;
    if (isBackground(at(x, y))) stack.push([x, y]);
  };
  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  let removed = 0;
  while (stack.length) {
    const [x, y] = stack.pop();
    data[at(x, y) + 3] = 0;
    removed++;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }
  return removed / (width * height);
}

const source = findSource();
if (!source || !fs.existsSync(source)) {
  console.error("Логотип не найден. Укажите путь: npm run logo -- путь/к/файлу.png");
  process.exit(1);
}

const image = sharp(source, { density: 400 }).rotate().ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

let alphaPixels = 0;
for (let i = 3; i < data.length; i += 4) if (data[i] < 250) alphaPixels++;
const hasTransparency = alphaPixels > 0;
const removed = hasTransparency ? 0 : removeEdgeBackground(data, info.width, info.height);

const output = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .trim({ threshold: 1 })
  .resize({ width: 1024, height: 1024, fit: "inside", withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toBuffer();

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, output);

const message = hasTransparency
  ? "прозрачность сохранена"
  : `удалён фон: ${Math.round(removed * 100)}% площади`;
console.log(`Готово: public/images/logo.png из ${path.relative(root, source)} (${message}).`);
console.log("Проверьте результат глазами: фон логотипа должен быть удалён аккуратно.");
