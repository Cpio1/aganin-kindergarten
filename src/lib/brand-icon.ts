import "server-only";
import sharp from "sharp";
import { findLogoFile } from "./media";

/** Запасной значок (звезда на мятном фоне), пока логотип не загружен. */
const fallbackIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="18" fill="#A8E6CF"/>
  <path fill="#FFE28A" stroke="#283C46" stroke-width="3" stroke-linejoin="round" d="M32 11l6.3 13.6 14.7 1.8-10.9 10.1 2.9 14.7L32 43.9l-13 7.3 2.9-14.7L11 26.4l14.7-1.8Z"/>
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

  const png = await (background ? image.flatten({ background }) : image).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
