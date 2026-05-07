"use client";

import { usePathname } from "next/navigation";
import { allPages, pathFor } from "@/lib/droneData";

function languagePaths(pathname: string) {
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const match = allPages.find((page) => pathFor(page) === normalized || pathFor(page, "en") === normalized);
  if (match) return { es: pathFor(match), en: pathFor(match, "en") };
  return normalized.startsWith("/en/") ? { es: "/", en: "/en/" } : { es: "/", en: "/en/" };
}

export function ThemeLanguageControls() {
  const paths = languagePaths(usePathname() || "/");
  return (
    <div className="site-controls">
      <div className="control-group" aria-label="Theme options">
        <button className="control-button icon-button" type="button" aria-label="Light mode" title="Light mode" data-theme-choice="light">L</button>
        <button className="control-button icon-button" type="button" aria-label="Dark mode" title="Dark mode" data-theme-choice="dark">D</button>
      </div>
      <div className="control-group" aria-label="Language options">
        <a className="control-button" href={paths.es} hrefLang="es-DO">ES</a>
        <a className="control-button" href={paths.en} hrefLang="en">EN</a>
      </div>
    </div>
  );
}
