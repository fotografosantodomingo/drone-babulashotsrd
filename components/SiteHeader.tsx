"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { allPages, pathFor } from "@/lib/droneData";
import { ThemeLanguageControls } from "@/components/ThemeLanguageControls";

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const mainService = allPages.find((page) => page.slug === "dron-inmobiliario-arquitectura")!;
  const prices = allPages.find((page) => page.slug === "precios-servicio-dron-republica-dominicana")!;
  const construction = allPages.find((page) => page.slug === "dron-construccion-ingenieria")!;

  return (
    <header className="site-header">
      <Link className="brand" href={isEnglish ? "/en/" : "/"} aria-label="Babula Shots Drone">
        Babula Shots <span>Drone</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href={pathFor(mainService, isEnglish ? "en" : "es")}>{isEnglish ? "Real Estate" : "Inmobiliaria"}</Link>
        <Link href={pathFor(construction, isEnglish ? "en" : "es")}>{isEnglish ? "Construction" : "Construccion"}</Link>
        <Link href={isEnglish ? "/en/drone-santo-domingo/" : "/dron-santo-domingo/"}>Santo Domingo</Link>
        <Link href={isEnglish ? "/en/drone-punta-cana/" : "/dron-punta-cana/"}>Punta Cana</Link>
        <Link href={pathFor(prices, isEnglish ? "en" : "es")}>{isEnglish ? "Prices" : "Precios"}</Link>
      </nav>
      <ThemeLanguageControls />
    </header>
  );
}
