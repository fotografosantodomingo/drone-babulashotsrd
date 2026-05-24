import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { allLanguageRoutePairs } from "@/lib/languageRoutes";
import { canonicalUrl } from "@/lib/droneData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const pairs = allLanguageRoutePairs();
  const pairedEsPaths = new Set(pairs.map((p) => p.es));
  const pairedEnPaths = new Set(pairs.map((p) => p.en));

  // ── 1. Bilingual route pairs (from languageRoutes.ts) ───────────────────
  // Each pair emitted twice (ES + EN URL), both with xhtml:link alternates.
  for (const { es, en } of pairs) {
    entries.push({
      url: canonicalUrl(es),
      lastModified,
      alternates: {
        languages: {
          "es-DO": canonicalUrl(es),
          "es": canonicalUrl(es),
          "en": canonicalUrl(en),
          "x-default": canonicalUrl(es)
        }
      }
    });
    entries.push({
      url: canonicalUrl(en),
      lastModified,
      alternates: {
        languages: {
          "es-DO": canonicalUrl(es),
          "es": canonicalUrl(es),
          "en": canonicalUrl(en),
          "x-default": canonicalUrl(es)
        }
      }
    });
  }

  // ── 2. Spanish-only articles (no EN counterpart) ─────────────────────────
  for (const a of articles) {
    const esPath = `/blog/${a.slug}/`;
    if (pairedEsPaths.has(esPath)) continue;
    entries.push({ url: canonicalUrl(esPath), lastModified });
  }
  for (const a of articles.filter((x) => x.en?.enSlug)) {
    const enPath = `/en/blog/${a.en!.enSlug}/`;
    if (pairedEnPaths.has(enPath)) continue;
    entries.push({ url: canonicalUrl(enPath), lastModified });
  }

  return entries;
}
