import { DroneLandingPage } from "@/components/DronePage";
import { canonicalUrl } from "@/lib/droneData";

export const metadata = {
  title: "Drone service in Dominican Republic | Babula Shots",
  description: "Drone pilots for real estate, architecture, construction, industry, agriculture, tourism and inspections in Dominican Republic.",
  alternates: {
    canonical: canonicalUrl("/en/"),
    languages: { "es-DO": canonicalUrl("/"), en: canonicalUrl("/en/"), "x-default": canonicalUrl("/") }
  }
};

export default function Page() {
  return <DroneLandingPage home locale="en" />;
}
