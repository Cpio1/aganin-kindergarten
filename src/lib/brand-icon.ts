import "server-only";
import sharp from "sharp";
import { findLogoFile } from "./media";

/** Запасной значок (цветные блоки KIDS), пока логотип не загружен. */
const fallbackIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="#FFFFFF"/>
  <rect x="7" y="7" width="23" height="23" rx="6" fill="#7ED957"/>
  <rect x="34" y="7" width="23" height="23" rx="6" fill="#F6C445"/>
  <rect x="7" y="34" width="23" height="23" rx="6" fill="#8DB4FF"/>
  <rect x="34" y="34" width="23" height="23" rx="6" fill="#F47CC3"/>
</svg>`;

/** PNG-значок с логотипом: пропорции и прозрачность сохраняются. */
export async function renderBrandIcon(size: number, background?: string): Promise<Response> {
  const logo = findLogoFile();
  const padding = Math.round(size * (background ? 0.1 : 0.03));
  const inner = size - padding * 2;

  const image = logo
    ? sharp(logo)
        .rotate()
        .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .extend({
          top: padding,
          bottom: padding,
          left: padding,
          right: padding,
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
    : sharp(Buffer.from(fallbackIcon), { density: 300 }).resize(size, size);

  // Заливка идёт вторым шагом: в одном конвейере sharp выполнит её раньше, чем добавит поля.
  const fitted = await image.png().toBuffer();
  const png = background
    ? await sharp(fitted).flatten({ background }).png().toBuffer()
    : fitted;
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
