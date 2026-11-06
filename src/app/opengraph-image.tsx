import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { findHeroFile, findLogoFile } from "@/lib/media";

export const alt = "AGANIN KIDS — балаңыздың бақытты балалық шағы";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function toDataUrl(file: string, width: number, height: number, fit: "cover" | "inside") {
  const png = await sharp(file).rotate().resize(width, height, { fit }).png().toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const font = await fs.readFile(path.join(process.cwd(), "src/assets/og-font.ttf"));
  const logoFile = findLogoFile();
  const heroFile = findHeroFile();
  const logo = logoFile ? await toDataUrl(logoFile, 360, 110, "inside") : null;
  const hero = heroFile ? await toDataUrl(heroFile, 500, 560, "cover") : null;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#FFFFFF",
        color: "#111111",
        fontFamily: "Rubik",
        padding: 64,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -120,
          top: -120,
          width: 520,
          height: 520,
          borderRadius: 999,
          background: "#F6C445",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -160,
          bottom: -300,
          width: 1000,
          height: 460,
          borderRadius: 999,
          background: "#BDF3F3",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 26,
          flex: 1,
        }}
      >
        {logo ? (
          <img alt="" src={logo} style={{ alignSelf: "flex-start", maxHeight: 110, maxWidth: 360 }} />
        ) : null}
        {logo ? null : (
          <div style={{ fontSize: 72, lineHeight: 1.05, textShadow: "4px 4px 0 #BDF3F3" }}>AGANIN KIDS</div>
        )}
        <div style={{ fontSize: 44, lineHeight: 1.2, maxWidth: 640 }}>
          балаңыздың бақытты балалық шағы
        </div>
        <div style={{ fontSize: 28 }}>3–6 жас · 08:00–18:00</div>
      </div>
      {hero ? (
        <img
          alt=""
          src={hero}
          width={460}
          height={502}
          style={{ position: "relative", borderRadius: 48, boxShadow: "16px 16px 0 #BDF3F3", objectFit: "cover" }}
        />
      ) : null}
    </div>,
    { ...size, fonts: [{ name: "Rubik", data: font, weight: 700, style: "normal" }] },
  );
}
