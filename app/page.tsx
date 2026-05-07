import { DroneLandingPage } from "@/components/DronePage";
import { canonicalUrl } from "@/lib/droneData";

export const metadata = {
  title: "Servicio de dron en Republica Dominicana | Babula Shots",
  description: "Pilotos de dron para inmobiliaria, arquitectura, construccion, industria, agricultura, turismo e inspecciones en Republica Dominicana.",
  alternates: {
    canonical: canonicalUrl("/"),
    languages: { "es-DO": canonicalUrl("/"), en: canonicalUrl("/en/"), "x-default": canonicalUrl("/") }
  }
};

export default function Page() {
  return <DroneLandingPage home locale="es" />;
}
