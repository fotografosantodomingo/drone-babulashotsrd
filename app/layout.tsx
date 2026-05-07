import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteUrl } from "@/lib/droneData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Servicio de dron en Republica Dominicana | Babula Shots", template: "%s" },
  description: "Foto, video e inspecciones con dron para inmobiliaria, arquitectura, construccion, industria, agricultura y turismo en RD.",
  openGraph: { siteName: "Babula Shots Drone", locale: "es_DO", type: "website" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/images/cropped-babulashotslogo-1.png", apple: "/images/cropped-babulashotslogo-1.png" }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: "#f5f7f2"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-DO" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}" }} />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script dangerouslySetInnerHTML={{ __html: "try{var d=document;function s(t){d.documentElement.dataset.theme=t;localStorage.setItem('theme',t);d.querySelectorAll('[data-theme-choice]').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-theme-choice')===t))})}s(d.documentElement.dataset.theme||'light');d.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-theme-choice]');if(b)s(b.getAttribute('data-theme-choice'))})}catch(e){}" }} />
      </body>
    </html>
  );
}
