import "server-only";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

/**
 * Находит материалы при сборке. Новый файл подхватывается автоматически:
 * достаточно положить его в папку и задеплоить сайт. Размеры читаются из файла,
 * поэтому фотографии никогда не растягиваются.
 */

const IMAGE_EXT = /\.(png|jpe?g|webp|avif)$/i;
const LOGO_EXT = /\.(png|svg|webp|jpe?g)$/i;
const VIDEO_EXT = /\.(mp4|webm)$/i;
const LOGO_NAME = /logo|логотип|логотипі/i;

/* Пути заданы явно, чтобы трассировка сборки не захватывала весь проект. */
const inImages = (file: string) => path.join(process.cwd(), "public", "images", file);
const inPublic = (file: string) => path.join(process.cwd(), "public", file);
const FOLDERS = [
  { list: () => readFolder(inImages("")), resolve: inImages },
  { list: () => readFolder(inPublic("")), resolve: inPublic },
];

export type SitePhoto = { src: string; width: number; height: number };
export type SiteLogo = SitePhoto & { isVector: boolean };
export type SecondaryMedia =
  | ({ kind: "image" } & SitePhoto)
  | { kind: "video"; src: string; type: string };

export type SiteMedia = {
  logo: SiteLogo | null;
  hero: SitePhoto | null;
  about: SecondaryMedia | null;
  gallery: SitePhoto[];
};

function readFolder(folder: string): string[] {
  if (!fs.existsSync(folder)) return [];
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    if (!entry.isFile() || entry.name.startsWith(".")) return [];
    return fs.statSync(`${folder}/${entry.name}`).size > 0 ? [entry.name] : [];
  });
}

const baseName = (file: string) => path.parse(file).name.toLowerCase();

/** Абсолютный путь к файлу логотипа; PNG приоритетнее, так как хранит прозрачность. */
export function findLogoFile(): string | null {
  for (const folder of FOLDERS) {
    const match = folder
      .list()
      .filter((file) => LOGO_NAME.test(baseName(file)) && LOGO_EXT.test(file))
      .sort((a, b) => Number(/\.png$/i.test(b)) - Number(/\.png$/i.test(a)))[0];
    if (match) return folder.resolve(match);
  }
  return null;
}

/** Файл с точным именем из public/images, а затем из public. */
function findNamed(name: string, ext: RegExp): string | null {
  for (const folder of FOLDERS) {
    const match = folder.list().find((file) => baseName(file) === name && ext.test(file));
    if (match) return folder.resolve(match);
  }
  return null;
}

export function findHeroFile(): string | null {
  return findNamed("main-page", IMAGE_EXT);
}

function publicUrl(absolute: string): string {
  return `/${path.relative(inPublic(""), absolute).split(path.sep).map(encodeURIComponent).join("/")}`;
}

/** Размеры с учётом поворота EXIF: снимки с телефона часто хранятся повёрнутыми. */
async function readPhoto(absolute: string): Promise<SitePhoto | null> {
  try {
    const meta = await sharp(absolute).metadata();
    if (!meta.width || !meta.height) return null;
    const rotated = (meta.orientation ?? 1) >= 5;
    return {
      src: publicUrl(absolute),
      width: rotated ? meta.height : meta.width,
      height: rotated ? meta.width : meta.height,
    };
  } catch {
    return null;
  }
}

async function readAbout(): Promise<SecondaryMedia | null> {
  const video = findNamed("main-page2", VIDEO_EXT);
  if (video) {
    const type = `video/${path.extname(video).slice(1).toLowerCase()}`;
    return { kind: "video", src: publicUrl(video), type };
  }
  const image = findNamed("main-page2", IMAGE_EXT);
  const photo = image ? await readPhoto(image) : null;
  return photo ? { kind: "image", ...photo } : null;
}

async function readLogo(): Promise<SiteLogo | null> {
  const file = findLogoFile();
  const photo = file ? await readPhoto(file) : null;
  return photo && file ? { ...photo, isVector: /\.svg$/i.test(file) } : null;
}

/** Галерея: все снимки из public/images, кроме логотипа и фото первых экранов. */
async function readGallery(): Promise<SitePhoto[]> {
  const files = readFolder(inImages(""))
    .filter((file) => IMAGE_EXT.test(file))
    .filter((file) => {
      const name = baseName(file);
      return !LOGO_NAME.test(name) && name !== "main-page" && name !== "main-page2";
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  const photos = await Promise.all(files.map((file) => readPhoto(inImages(file))));
  return photos.filter((photo): photo is SitePhoto => photo !== null);
}

export async function getSiteMedia(): Promise<SiteMedia> {
  const heroFile = findHeroFile();
  const [logo, hero, about, gallery] = await Promise.all([
    readLogo(),
    heroFile ? readPhoto(heroFile) : null,
    readAbout(),
    readGallery(),
  ]);
  return { logo, hero, about, gallery };
}
