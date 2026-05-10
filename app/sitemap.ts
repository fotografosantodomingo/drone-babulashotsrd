import type { MetadataRoute } from "next";
import { allPages, canonicalUrl, pathFor } from "@/lib/droneData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sharedPaths = ["/servicios/", "/en/services/", "/ubicaciones/", "/en/locations/", "/precios/", "/en/prices/", "/faq/", "/en/faq/"];
  const paths = ["/", "/en/", ...sharedPaths, ...allPages.flatMap((page) => [pathFor(page), pathFor(page, "en")])];
  return paths.map((path) => ({ url: canonicalUrl(path), lastModified }));
}
