import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, "../public/images/drone/galeria-dron-rd.webp");
const dst = path.resolve(__dirname, "../public/images/drone/social-card-1200x630.webp");

await sharp(src)
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .webp({ quality: 78 })
  .toFile(dst);

const meta = await sharp(dst).metadata();
console.log(`OK ${dst} ${meta.width}x${meta.height} ${meta.size ?? "?"} bytes`);
