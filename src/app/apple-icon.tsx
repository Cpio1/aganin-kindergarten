import { renderBrandIcon } from "@/lib/brand-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* iOS не поддерживает прозрачные значки, поэтому логотип лежит на молочном фоне. */
export default function AppleIcon() {
  return renderBrandIcon(size.width, "#FFFDF6");
}
