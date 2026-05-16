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

import { droneUrl, mainBrandUrl, bodaUrl, inmobiliariaUrl, santoDomingoHubUrl, phoneE164, email } from "@/lib/droneData";

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

// Brand-wide aggregate rating (4.9/5 from 91 Google reviews).
export const aggregateRating = {
  "@type": "AggregateRating" as const,
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "91",
  reviewCount: "91"
};

// Santo Domingo center fallback. TODO: replace with actual studio coordinates.
export const geoCoordinates = {
  "@type": "GeoCoordinates" as const,
  latitude: 18.4861,
  longitude: -69.9312
};

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
  // NOTE: NOT using `parentOrganization` — GSC counts the parent's name as a
  // duplicate of the outer name. Brand hierarchy is conveyed by sameAs below.
  sameAs: [mainBrandUrl, bodaUrl, inmobiliariaUrl, droneUrl, santoDomingoHubUrl, "https://www.instagram.com/babulashotsrd/"]
};
