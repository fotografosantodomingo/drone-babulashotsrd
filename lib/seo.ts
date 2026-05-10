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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Babula Shots Drone",
  url: droneUrl,
  telephone: phoneE164,
  email,
  parentOrganization: { "@type": "Organization", name: "Babula Shots", url: mainBrandUrl },
  sameAs: [mainBrandUrl, bodaUrl, inmobiliariaUrl, droneUrl, santoDomingoHubUrl, "https://www.instagram.com/babulashotsrd/"]
};
