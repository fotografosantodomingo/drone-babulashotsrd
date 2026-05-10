import { DroneLandingPage } from "@/components/DronePage";
import { canonicalUrl } from "@/lib/droneData";

export const metadata = {
  title: "Servicio de dron en Republica Dominicana | Babula Shots",
  description:
    "Pilotos de dron para inmobiliaria, arquitectura, construccion, industria, agricultura, turismo e inspecciones en Republica Dominicana. Cotiza por WhatsApp.",
  alternates: {
    canonical: canonicalUrl("/"),
    languages: {
      "es-DO": canonicalUrl("/"),
      es: canonicalUrl("/"),
      en: canonicalUrl("/en/"),
      "x-default": canonicalUrl("/")
    }
  },
  openGraph: {
    url: canonicalUrl("/"),
    siteName: "Babula Shots Drone",
    locale: "es_DO",
    type: "website",
    images: [
      { url: "/images/drone/social-card-1200x630.webp", width: 1200, height: 630, alt: "Babula Shots Drone" }
    ]
  }
};

export default function Page() {
  return <DroneLandingPage home locale="es" />;
}
