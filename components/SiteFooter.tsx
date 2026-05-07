import Image from "next/image";
import Link from "next/link";
import { allPages, mainBrandUrl, pathFor, phone, siteUrl } from "@/lib/droneData";

export function SiteFooter() {
  const cities = allPages.filter((page) => page.type === "city").slice(0, 10);

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <Link href="/" aria-label="Babula Shots Drone">
          <Image src="/images/cropped-babulashotslogo-1.png" width={80} height={80} alt="Babula Shots Drone logo" />
        </Link>
        <p>Babula Shots Drone<br /><a href={siteUrl}>{siteUrl.replace("https://", "")}</a></p>
        <p>WhatsApp<br /><a href="tel:+18097209547">{phone}</a></p>
        <p>Brand<br /><a href={mainBrandUrl}>Babula Shots RD</a></p>
      </div>
      <div className="wrap footer-links">
        {cities.map((city) => <Link href={pathFor(city)} key={city.slug}>{city.h1}</Link>)}
      </div>
    </footer>
  );
}
