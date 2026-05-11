import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { allPages, canonicalUrl, pathFor } from "@/lib/droneData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sharedPaths = [
    "/servicios/",
    "/en/services/",
    "/ubicaciones/",
    "/en/locations/",
    "/precios/",
    "/en/prices/",
    "/faq/",
    "/en/faq/",
    "/blog/",
    "/en/blog/"
  ];
  const articlePaths = articles.flatMap((a) => {
    const paths = [`/blog/${a.slug}/`];
    if (a.en?.enSlug) paths.push(`/en/blog/${a.en.enSlug}/`);
    return paths;
  });
  const paths = [
    "/",
    "/en/",
    ...sharedPaths,
    ...articlePaths,
    ...allPages.flatMap((page) => [pathFor(page), pathFor(page, "en")])
  ];
  return paths.map((path) => ({ url: canonicalUrl(path), lastModified }));
}
