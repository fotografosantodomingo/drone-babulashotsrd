import { articles } from "@/lib/articles";
import { allPages, pathFor } from "@/lib/droneData";

type LanguagePaths = { es: string; en: string };

const normalizePath = (pathname: string) => {
  if (!pathname || pathname === "/") return "/";
  const clean = pathname.split("?")[0].split("#")[0];
  return clean.endsWith("/") ? clean : `${clean}/`;
};

const routePairs: LanguagePaths[] = [
  { es: "/", en: "/en/" },
  { es: "/servicios/", en: "/en/services/" },
  { es: "/ubicaciones/", en: "/en/locations/" },
  { es: "/precios/", en: "/en/prices/" },
  { es: "/faq/", en: "/en/faq/" },
  { es: "/blog/", en: "/en/blog/" },
  ...allPages.map((page) => ({ es: pathFor(page, "es"), en: pathFor(page, "en") })),
  // Bilingual articles at /blog/ + /en/blog/ — auto-derived from articles.ts.
  // Adding a new article with an `en` field automatically wires up the language toggle.
  ...articles
    .filter((a) => a.en?.enSlug)
    .map((a) => ({ es: `/blog/${a.slug}/`, en: `/en/blog/${a.en!.enSlug}/` }))
].map((pair) => ({ es: normalizePath(pair.es), en: normalizePath(pair.en) }));

export function languagePathsFor(pathname: string): LanguagePaths {
  const current = normalizePath(pathname);
  const match = routePairs.find((pair) => pair.es === current || pair.en === current);
  if (match) return match;
  return current.startsWith("/en/") ? { es: "/", en: current } : { es: current, en: "/en/" };
}

export function allLanguageRoutePairs() {
  return routePairs;
}
