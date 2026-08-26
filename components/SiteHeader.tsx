"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeLanguageControls } from "@/components/ThemeLanguageControls";
import { niche } from "@/lib/droneData";

const navItemsEs: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios/" },
  { label: "Ubicaciones", href: "/ubicaciones/" },
  { label: "Precios", href: "/precios/" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contacto", href: "#contacto" }
];

const navItemsEn: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Home", href: "/en/" },
  { label: "Services", href: "/en/services/" },
  { label: "Locations", href: "/en/locations/" },
  { label: "Prices", href: "/en/prices/" },
  { label: "Blog", href: "/en/blog/" },
  { label: "FAQ", href: "/en/faq/" },
  { label: "Contact", href: "#contacto" }
];

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");
  const navItems = isEn ? navItemsEn : navItemsEs;
  return (
    <header className="site-header" data-drawer-host>
      <div className="header-row">
        <ThemeLanguageControls />
        <Link className="brand" href={isEn ? "/en/" : "/"} aria-label={`Babula Shots ${niche.label}`}>
          <span className="brand-niche">{niche.label}</span>
          <span className="brand-tag">By Babula Shots</span>
        </Link>
        <button
          type="button"
          className="hamburger"
          aria-label={isEn ? "Open menu" : "Abrir menu"}
          aria-controls="site-drawer"
          aria-expanded="false"
          data-drawer-toggle
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.label}
            className="site-nav-link"
            href={item.href}
            {...(item.external ? { rel: "noopener" } : {})}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="site-drawer" id="site-drawer" data-drawer hidden>
        <div className="site-drawer-backdrop" data-drawer-close aria-hidden="true" />
        <aside className="site-drawer-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="site-drawer-header">
            <span className="brand">
              <span className="brand-niche">{niche.label}</span>
              <span className="brand-tag">By Babula Shots</span>
            </span>
            <button type="button" className="drawer-close" aria-label={isEn ? "Close menu" : "Cerrar menu"} data-drawer-close>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <nav className="site-drawer-nav" aria-label="Site navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="site-drawer-link"
                href={item.href}
                {...(item.external ? { rel: "noopener" } : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="site-drawer-footer">
            <p className="brand-tag">Premium photography agency</p>
            <a className="drawer-secondary" href="https://www.fotografosantodomingo.com" rel="noopener">
              fotografosantodomingo.com
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
