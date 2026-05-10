import Image from "next/image";
import Link from "next/link";
import { CrossSiteCta } from "@/components/CrossSiteCta";
import { HeroImage } from "@/components/HeroImage";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { allPages, bookingUrl, canonicalUrl, dronePackages, findPage, inmobiliariaUrl, Locale, mainBrandUrl, pathFor, phone, phoneE164, pricingSourceUrl, siteUrl, type DronePage as DronePageData, whatsappUrl } from "@/lib/droneData";

function t(locale: Locale, es: string, en: string) {
  return locale === "en" ? en : es;
}

function pageMessage(page: DronePageData, locale: Locale) {
  if (locale === "en") {
    return `Hello, I am visiting the Babula Shots drone website. I need a quote for ${page.enH1}. The location is:`;
  }
  return `Hola, vengo de la web de Babula Shots Drone. Necesito cotizar ${page.h1}. La ubicacion es:`;
}

function typeLabel(type: DronePageData["type"], isEnglish: boolean) {
  if (type === "city") return isEnglish ? "Cities" : "Ciudades";
  if (type === "service") return isEnglish ? "Services" : "Servicios";
  if (type === "guide") return isEnglish ? "Guides" : "Guias";
  if (type === "pricing") return isEnglish ? "Prices" : "Precios";
  return isEnglish ? "Drone" : "Drone";
}

function buildBreadcrumb(
  isEnglish: boolean,
  home: boolean,
  page: DronePageData,
  title: string,
  pageUrl: string
) {
  const homeLabel = isEnglish ? "Home" : "Inicio";
  const droneHomeUrl = canonicalUrl(isEnglish ? "/en/" : "/");
  if (home) {
    return [
      { "@type": "ListItem", position: 1, name: homeLabel, item: mainBrandUrl },
      { "@type": "ListItem", position: 2, name: "Drone", item: droneHomeUrl }
    ];
  }
  const middleLabel = typeLabel(page.type, isEnglish);
  return [
    { "@type": "ListItem", position: 1, name: homeLabel, item: mainBrandUrl },
    { "@type": "ListItem", position: 2, name: middleLabel, item: droneHomeUrl },
    { "@type": "ListItem", position: 3, name: title, item: pageUrl }
  ];
}

function citySchema(page: DronePageData) {
  if (!page.area) return { "@type": "Country", name: "Dominican Republic" };
  return {
    "@type": "City",
    name: page.area,
    containedInPlace: {
      "@type": "State",
      name: page.province ?? "Dominican Republic",
      containedInPlace: { "@type": "Country", name: "Dominican Republic" }
    }
  };
}

export function DroneLandingPage({ page, locale = "es", home = false }: { page?: DronePageData; locale?: Locale; home?: boolean }) {
  const isEnglish = locale === "en";
  const selectedPage = page ?? allPages[0];
  const path = home ? (isEnglish ? "/en/" : "/") : pathFor(selectedPage, locale);
  const title = home
    ? t(locale, "Servicio de dron en Republica Dominicana", "Drone service in Dominican Republic")
    : t(locale, selectedPage.h1, selectedPage.enH1);
  const intro = home
    ? t(
        locale,
        "Pilotos de dron para inmobiliaria, arquitectura, construccion, industria, agricultura, turismo, inspeccion visual y contenido comercial en Republica Dominicana.",
        "Drone pilots for real estate, architecture, construction, industry, agriculture, tourism, visual inspections and commercial media in Dominican Republic."
      )
    : t(locale, selectedPage.intro, selectedPage.enIntro);
  const pageUrl = canonicalUrl(path);
  const faq = selectedPage.faq.map((item) => ({
    "@type": "Question",
    name: t(locale, item.q, item.enQ),
    acceptedAnswer: { "@type": "Answer", text: t(locale, item.a, item.enA) }
  }));
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Babula Shots Drone",
      url: siteUrl,
      logo: `${siteUrl}/images/cropped-babulashotslogo-1.png`,
      telephone: "+18097209547",
      parentOrganization: { "@type": "Organization", name: "Babula Shots RD", url: mainBrandUrl },
      sameAs: [mainBrandUrl, inmobiliariaUrl, "https://www.instagram.com/babulashotsrd/"]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: title,
      url: pageUrl,
      telephone: "+18097209547",
      priceRange: "$$",
      areaServed: home ? { "@type": "Country", name: "Dominican Republic" } : citySchema(selectedPage),
      knowsAbout: ["Drone photography", "Aerial video", "Real estate drone", "Construction progress", "Drone inspections", "Photogrammetry"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: t(locale, "Paquetes de servicio con dron", "Drone service packages"),
        itemListElement: dronePackages.map((item) => ({
          "@type": "Offer",
          name: t(locale, item.name, item.enName),
          priceCurrency: "DOP",
          ...(item.numericPrice ? { price: item.numericPrice } : {}),
          itemOffered: { "@type": "Service", name: t(locale, item.name, item.enName) }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: pageUrl,
      inLanguage: isEnglish ? "en" : "es-DO",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: buildBreadcrumb(isEnglish, home, selectedPage, title, pageUrl)
      }
    },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq }
  ];
  const related = selectedPage.related.map((slug) => findPage(slug)).filter(Boolean) as DronePageData[];
  const cityLinks = allPages.filter((item) => item.type === "city").slice(0, 14);
  const serviceLinks = allPages.filter((item) => item.type === "service" || item.type === "pricing");

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="drone-hero">
        <HeroImage src={selectedPage.image} alt={title} />
        <div className="hero-content">
          <p className="eyebrow">Babula Shots Drone · {t(locale, "Pilotos con licencia", "Licensed pilots")}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{t(locale, "Contexto comercial", "Commercial context")}</p>
          <div>
            <h2>{t(locale, "Dron para decisiones visuales serias", "Drone for serious visual decisions")}</h2>
            <p>{t(locale, selectedPage.audience, selectedPage.enAudience)}</p>
            <p>
              {t(
                locale,
                "El objetivo no es solo volar bonito. Planificamos altura, ruta, encuadre, seguridad, clima y entregables para que el material sirva a ventas, inspeccion, obra, arquitectura o documentacion tecnica.",
                "The goal is not just a pretty flight. We plan height, route, framing, safety, weather and deliverables so the media supports sales, inspection, construction, architecture or technical documentation."
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{t(locale, "Entregables", "Deliverables")}</p>
            <h2>{t(locale, "Que puede recibir el cliente", "What the client can receive")}</h2>
          </div>
          <div className="card-grid">
            {(isEnglish ? selectedPage.enDeliverables : selectedPage.deliverables).map((item) => (
              <article className="card" key={item}>
                <span>{t(locale, "Entrega", "Delivery")}</span>
                <h3>{item}</h3>
                <p>{t(locale, "Se define antes del vuelo para evitar material innecesario y asegurar utilidad comercial.", "Defined before the flight to avoid unnecessary media and ensure commercial usefulness.")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap gallery-grid">
          {[
            ["/images/drone/fotografia-dron-santo-domingo.webp", t(locale, "Fotografia con dron en Santo Domingo", "Drone photography in Santo Domingo")],
            ["/images/drone/drone-inmobiliario-republica-dominicana.webp", t(locale, "Dron inmobiliario en Republica Dominicana", "Real estate drone in Dominican Republic")],
            ["/images/drone/drone-arquitectura-inspeccion.webp", t(locale, "Dron para arquitectura e inspeccion visual", "Drone for architecture and visual inspection")],
            ["/images/drone/piloto-dron-republica-dominicana.webp", t(locale, "Piloto de dron profesional en RD", "Professional drone pilot in DR")]
          ].map(([src, alt], index) => (
            <figure key={src}>
              <Image
                src={src}
                alt={alt}
                width={1320}
                height={741}
                sizes="(max-width: 760px) 100vw, 50vw"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : undefined}
                decoding="async"
              />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section alt-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{t(locale, "Precios", "Prices")}</p>
            <h2>{t(locale, "Paquetes y cotizacion custom", "Packages and custom quote")}</h2>
            <p>
              {t(
                locale,
                "Estos precios vienen del menu publicado de Babula Shots. La cotizacion final depende de traslado, permisos, clima, riesgo, equipo, urgencia y tipo de entregable.",
                "These prices come from the published Babula Shots menu. Final quote depends on travel, permits, weather, risk, equipment, urgency and deliverable type."
              )}
            </p>
          </div>
          <div className="pricing-table" role="table" aria-label={t(locale, "Precios de dron", "Drone prices")}>
            <div className="pricing-row pricing-head" role="row">
              <span role="columnheader">{t(locale, "Paquete", "Package")}</span>
              <span role="columnheader">{t(locale, "Uso", "Use")}</span>
              <span role="columnheader">{t(locale, "Precio", "Price")}</span>
            </div>
            {dronePackages.map((item) => (
              <div className="pricing-row" role="row" key={item.name}>
                <span role="cell">{t(locale, item.name, item.enName)}</span>
                <span role="cell">{t(locale, item.bestFor, item.enBestFor)}</span>
                <span role="cell">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="source-line">
            {t(locale, "Fuente de precios:", "Pricing source:")} <a href={pricingSourceUrl}>{t(locale, "menu publicado de Babula Shots", "published Babula Shots menu")}</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{t(locale, "Plan de vuelo", "Flight plan")}</p>
          <div>
            <h2>{t(locale, "Como se prepara un servicio profesional", "How a professional service is prepared")}</h2>
            <ul className="check-list">
              {(isEnglish ? selectedPage.enLocalNotes : selectedPage.localNotes).map((note) => <li key={note}>{note}</li>)}
              <li>{t(locale, "Confirmamos clima, viento, privacidad, acceso, seguridad y permisos antes de la fecha.", "We confirm weather, wind, privacy, access, safety and permits before the date.")}</li>
              <li>{t(locale, "Si el clima no permite volar, se coordina una nueva ventana segura.", "If weather does not allow flight, a new safe window is coordinated.")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{t(locale, "Usos", "Use cases")}</p>
            <h2>{t(locale, "Donde el dron aporta valor", "Where drone adds value")}</h2>
          </div>
          <div className="card-grid">
            {(isEnglish ? selectedPage.enUseCases : selectedPage.useCases).map((item) => (
              <article className="card" key={item}>
                <span>{t(locale, "Aplicacion", "Application")}</span>
                <h3>{item}</h3>
                <p>{t(locale, "La captura se adapta al objetivo: vender, medir, documentar, inspeccionar o presentar.", "Capture adapts to the objective: sell, measure, document, inspect or present.")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">FAQ</p>
          <div className="faq-list">
            {selectedPage.faq.map((item) => (
              <details key={item.q}>
                <summary>{t(locale, item.q, item.enQ)}</summary>
                <p>{t(locale, item.a, item.enA)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="wrap two-cols">
          <div>
            <p className="section-tag">{t(locale, "Servicios", "Services")}</p>
            <h2>{t(locale, "Servicios de dron", "Drone services")}</h2>
            <div className="related-links">
              {serviceLinks.map((item) => <Link href={pathFor(item, locale)} key={item.slug}>{t(locale, item.h1, item.enH1)}</Link>)}
            </div>
          </div>
          <div>
            <p className="section-tag">{t(locale, "Ciudades", "Cities")}</p>
            <h2>{t(locale, "Cobertura en RD", "Coverage in DR")}</h2>
            <div className="related-links">
              {cityLinks.map((item) => <Link href={pathFor(item, locale)} key={item.slug}>{t(locale, item.h1, item.enH1)}</Link>)}
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section">
          <div className="wrap">
            <div className="section-heading">
              <p className="section-tag">{t(locale, "Relacionado", "Related")}</p>
              <h2>{t(locale, "Siguiente paso", "Next step")}</h2>
            </div>
            <div className="related-links">
              {related.map((item) => <Link href={pathFor(item, locale)} key={item.slug}>{t(locale, item.h1, item.enH1)}</Link>)}
              <a href={mainBrandUrl}>Babula Shots RD</a>
              <a href={inmobiliariaUrl}>{t(locale, "Fotografia inmobiliaria Babula Shots", "Babula Shots real estate photography")}</a>
            </div>
          </div>
        </section>
      ) : null}

      <CrossSiteCta locale={locale} />

      <section className="conversion-panel" id="contacto">
        <div>
          <p className="section-tag">{t(locale, "Cotizacion", "Quote")}</p>
          <h2>{t(locale, "Cotiza tu vuelo con dron", "Quote your drone flight")}</h2>
          <p>{t(locale, "Envia ubicacion, fecha, objetivo, altura aproximada y entregables necesarios.", "Send location, date, objective, approximate height and required deliverables.")}</p>
        </div>
        <div className="cta-actions">
          <a className="button button-dark" href={whatsappUrl(pageMessage(selectedPage, locale))}>{t(locale, "WhatsApp", "WhatsApp")}</a>
          <a className="button button-outline" href={bookingUrl}>{t(locale, "Booking", "Booking")}</a>
          <a className="button button-outline" href="#formulario">{t(locale, "Formulario", "Form")}</a>
          <a className="button button-outline" href={`tel:+${phoneE164}`}>{phone}</a>
        </div>
      </section>

      <section className="section" id="formulario">
        <div className="wrap contact-form-wrap">
          <div>
            <p className="section-tag">{t(locale, "Formulario", "Form")}</p>
            <h2>{t(locale, "Enviar detalles del proyecto", "Send project details")}</h2>
            <p>
              {t(
                locale,
                "El formulario prepara un email dirigido a info@babulashotsrd.com con los datos del vuelo. Incluye ubicacion, fecha y entregables para responder con precio y disponibilidad.",
                "The form prepares an email to info@babulashotsrd.com with the flight details. Include location, date and deliverables so we can reply with price and availability."
              )}
            </p>
          </div>
          <form
            className="contact-form"
            action="mailto:info@babulashotsrd.com?subject=Drone%20quote%20request%20-%20Babula%20Shots"
            method="post"
            encType="text/plain"
          >
            <label>
              {t(locale, "Nombre", "Name")}
              <input name={t(locale, "Nombre", "Name")} type="text" autoComplete="name" required />
            </label>
            <label>
              WhatsApp
              <input name="WhatsApp" type="tel" autoComplete="tel" required />
            </label>
            <label>
              Email
              <input name="Email" type="email" autoComplete="email" required />
            </label>
            <label>
              {t(locale, "Ciudad / zona", "City / area")}
              <input name={t(locale, "Ciudad o zona", "City or area")} type="text" autoComplete="address-level2" required />
            </label>
            <label>
              {t(locale, "Fecha deseada", "Desired date")}
              <input name={t(locale, "Fecha deseada", "Desired date")} type="date" />
            </label>
            <label>
              {t(locale, "Servicio", "Service")}
              <select name={t(locale, "Servicio", "Service")} defaultValue={title}>
                <option>{title}</option>
                <option>{t(locale, "Foto drone inmobiliaria", "Real estate drone photo")}</option>
                <option>{t(locale, "Video drone 4K", "4K drone video")}</option>
                <option>{t(locale, "Inspeccion visual", "Visual inspection")}</option>
                <option>{t(locale, "Construccion / obra", "Construction / worksite")}</option>
                <option>{t(locale, "Cotizacion custom", "Custom quote")}</option>
              </select>
            </label>
            <label className="full-field">
              {t(locale, "Mensaje", "Message")}
              <textarea
                name={t(locale, "Mensaje", "Message")}
                rows={6}
                required
                defaultValue={t(
                  locale,
                  `Hola, necesito cotizar ${title}. Ubicacion: . Entregables: . Altura aproximada: .`,
                  `Hello, I need a quote for ${title}. Location: . Deliverables: . Approximate height: .`
                )}
              />
            </label>
            <button className="button button-dark full-field" type="submit">
              {t(locale, "Enviar email a info@babulashotsrd.com", "Send email to info@babulashotsrd.com")}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
