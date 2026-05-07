import type { MetadataRoute } from "next";
import { allPages, canonicalUrl, pathFor } from "@/lib/droneData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = ["/", "/en/", ...allPages.flatMap((page) => [pathFor(page), pathFor(page, "en")])];
  return paths.map((path) => ({ url: canonicalUrl(path), lastModified }));
}
