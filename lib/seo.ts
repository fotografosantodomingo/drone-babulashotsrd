/**
 * Thin shim that re-exports from droneData.ts so shared components
 * (like NetworkPage) can import from `@/lib/seo` consistently across
 * all four projects.
 */
export {
  siteUrl,
  mainBrandUrl,
  bodaUrl,
  inmobiliariaUrl,
  droneUrl,
  santoDomingoHubUrl,
  phone,
  phoneE164,
  email,
  canonicalUrl,
  whatsappUrl,
  niche
} from "@/lib/droneData";

import { droneUrl, mainBrandUrl, bodaUrl, inmobiliariaUrl, santoDomingoHubUrl, phoneE164, email, canonicalUrl } from "@/lib/droneData";

export const phoneDisplay = "809 720 95 47";

// ──────────────────────────────────────────────────────────────────────────
// Schema standards — see ~/.claude/.../memory/schema_standards.md
// Apply these patterns on every new page to avoid Google Rich Results warnings.
// ──────────────────────────────────────────────────────────────────────────

// Brand logo / image used by Organization + as Publisher inside Article schemas.
export const brandLogoUrl = `${mainBrandUrl}/wp-content/uploads/2023/05/cropped-babulashotslogo-1.png`;

// ISO 8601 datetime helper. Dominican Republic = UTC-4 year-round (no DST).
// Use for datePublished/dateModified — bare "YYYY-MM-DD" fails Rich Results
// validator with "Invalid datetime / Missing timezone" warnings.
export function isoAst(dateString: string, time = "12:00:00"): string {
  const d = dateString.length === 10 ? dateString : dateString.slice(0, 10);
  return `${d}T${time}-04:00`;
}

// Canonical address (no streetAddress / postalCode — those would be invented data;
// see ~/.claude/.../memory/babula_studio_address.md).
export const postalAddress = {
  "@type": "PostalAddress" as const,
  addressLocality: "Santo Domingo",
  addressRegion: "Distrito Nacional",
  addressCountry: "DO"
};

// Brand-wide aggregate rating (4.9/5 from 100 Google reviews).
export const aggregateRating = {
  "@type": "AggregateRating" as const,
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "100",
  reviewCount: "100"
};

// Live Google rating fetch (client-side). ratingCount above is the static
// fallback; this lets the visible badge update to the real-time Google count on
// load. Key is referrer-restricted to babulashotsrd.com domains + Places API
// only, so it's safe to expose client-side. See [[google_reviews_setup]].
export const googlePlaceId = "ChIJwTKDbC2Jr44R_OH44Jzl5-0";
export const googlePlacesKey = "AIzaSyAOW9duWy_e5aidAt0p-Q5Qwnjf2IuP3ds";

// Santo Domingo center fallback. TODO: replace with actual studio coordinates.
export const geoCoordinates = {
  "@type": "GeoCoordinates" as const,
  latitude: 18.4861,
  longitude: -69.9312
};

// Drone coverage cities. Per schema_standards.md rule 6, list specific cities + country.
export const localBusinessAreaServed = [
  { "@type": "City", name: "Santo Domingo" },
  { "@type": "City", name: "Punta Cana" },
  { "@type": "City", name: "La Romana" },
  { "@type": "City", name: "Casa de Campo" },
  { "@type": "City", name: "Cap Cana" },
  { "@type": "City", name: "Samaná" },
  { "@type": "City", name: "Las Terrenas" },
  { "@type": "City", name: "Puerto Plata" },
  { "@type": "City", name: "Santiago" },
  { "@type": "City", name: "Bayahíbe" },
  { "@type": "Country", name: "Dominican Republic" }
];

// Numeric priceRange computed from drone packages (Drone Aéreo → Finca de Lujo).
// Per schema_standards.md rule 5: prefer concrete numeric ranges over "$$".
export const localBusinessPriceRange = "RD$9,540-RD$35,800";

// Canonical Person node — the network founder. Referenced by @id from
// organizationSchema.founder (and anywhere else a Person node is needed)
// instead of being re-declared inline, so there's exactly one #person node
// sitewide.
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${droneUrl}#person`,
  name: "Michal Nikodem Babula",
  sameAs: "https://www.wikidata.org/wiki/Q139892966"
};

// Full, canonical list of the Organization's sameAs links (network sites +
// social + Wikidata). Reuse this everywhere an Organization/LocalBusiness
// node needs sameAs instead of hand-rolling a shorter/partial array.
export const SAME_AS_LINKS = [
  mainBrandUrl,
  bodaUrl,
  inmobiliariaUrl,
  droneUrl,
  santoDomingoHubUrl,
  "https://www.instagram.com/babulashotsrd/",
  "https://www.wikidata.org/wiki/Q139892828"
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // Distinct @id so Google doesn't merge this entity with LocalBusiness/Photographer
  // (which would surface "duplicate url" warnings on Rich Results validator).
  "@id": `${droneUrl}#organization`,
  name: "Babula Shots Drone",
  url: droneUrl,
  telephone: phoneE164,
  email,
  image: brandLogoUrl,
  logo: brandLogoUrl,
  address: postalAddress,
  founder: { "@id": `${droneUrl}#person` },
  // NOTE: NOT using `parentOrganization` — GSC counts the parent's name as a
  // duplicate of the outer name. Brand hierarchy is conveyed by sameAs below.
  sameAs: SAME_AS_LINKS
};

export function breadcrumbSchema(items: Array<{ name: string; path?: string; item?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item ?? canonicalUrl(entry.path ?? "/")
    }))
  };
}
