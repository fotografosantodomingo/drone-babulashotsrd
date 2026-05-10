import { DroneLandingPage } from "@/components/DronePage";
import { canonicalUrl } from "@/lib/droneData";

export const metadata = {
  title: "Drone service in Dominican Republic | Babula Shots",
  description:
    "Drone pilots for real estate, architecture, construction, industry, agriculture, tourism and inspections in Dominican Republic. Quote on WhatsApp.",
  alternates: {
    canonical: canonicalUrl("/en/"),
    languages: {
      "es-DO": canonicalUrl("/"),
      es: canonicalUrl("/"),
      en: canonicalUrl("/en/"),
      "x-default": canonicalUrl("/")
    }
  },
  openGraph: {
    url: canonicalUrl("/en/"),
    siteName: "Babula Shots Drone",
    locale: "en_US",
    type: "website",
    images: [
      { url: "/images/drone/social-card-1200x630.webp", width: 1200, height: 630, alt: "Babula Shots Drone" }
    ]
  }
};

export default function Page() {
  return <DroneLandingPage home locale="en" />;
}
