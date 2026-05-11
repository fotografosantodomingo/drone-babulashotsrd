// Bilingual blog articles for dron.babulashotsrd.com.
// Mirrors the boda repo's articles.ts pattern.
//
// Articles live at /blog/<slug>/ (Spanish) and /en/blog/<enSlug>/ (English).

export type ArticleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ArticleSection = {
  heading: string;
  body: string[];
};

export type ArticleFaq = {
  q: string;
  a: string;
};

export type ArticleRelated = {
  href: string;
  label: string;
  description: string;
};

export type ArticleEn = {
  enSlug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  introParagraphs: string[];
  sections: ArticleSection[];
  faq: ArticleFaq[];
  related: ArticleRelated[];
  ogImageAlt?: string;
};

export type Article = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  // Full ISO 8601 datetime with -04:00 timezone (use isoAst() in lib/seo.ts).
  datePublished: string;
  dateModified: string;
  hero: ArticleImage;
  introParagraphs: string[];
  sections: ArticleSection[];
  faq: ArticleFaq[];
  related: ArticleRelated[];
  ogImageAlt?: string;
  en?: ArticleEn;
};

const ARTICLES: Article[] = [
  // ─────────────────────────────────────────────────────────────────────
  // P1 — Drone service in Punta Cana (bilingual)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "servicio-drone-punta-cana",
    title:
      "Servicio de Drone en Punta Cana: Guia 2026 para Resorts, Inmobiliaria y Eventos — Babula Shots",
    metaDescription:
      "Guia completa de servicio de drone en Punta Cana 2026: Cap Cana, Bavaro, Juanillo Beach. Aereos para resorts, bodas, inmobiliaria, golf y eventos. Regulaciones PUJ, equipo DJI Mavic 3 Pro, pricing y tips de piloto profesional.",
    h1: "Servicio de Drone en Punta Cana: Guia 2026 para Resorts, Inmobiliaria y Eventos",
    eyebrow: "Drone Punta Cana · Guia 2026",
    datePublished: "2026-05-11T11:00:00-04:00",
    dateModified: "2026-05-11T11:00:00-04:00",
    hero: {
      src: "/images/drone/drone-inmobiliario-republica-dominicana.webp",
      alt: "Servicio de drone aereo en Punta Cana — costa de Bavaro y Cap Cana — Babula Shots",
      width: 1600,
      height: 1067
    },
    introParagraphs: [
      "Punta Cana es uno de los escenarios mas fotogenicos del Caribe para vuelos de drone: 50 km de playa continua entre Cap Cana y Uvero Alto, agua turquesa que cambia a azul cobalto al pasar del banco de arena al canal profundo, resorts de 1,000+ habitaciones rodeados de palmerales, y dos campos de golf bordeando el Atlantico (Punta Espada y Corales). Para fotografo, agente inmobiliario, wedding planner o equipo de marketing de hotel, el aerial drone footage no es opcional aqui — es la diferencia entre un material plano y un material que vende.",
      "En Babula Shots cubrimos Punta Cana con drone cada semana — bodas en Eden Roc Cap Cana, listados de villa frente a Juanillo Beach, progreso de obra de torres en Bavaro, marketing de Hard Rock Hotel & Casino, eventos corporativos en Iberostar Grand, tomas aereas de bodas civiles en gazebo de playa, y simulaciones de vista para preventas. Esta guia cubre los escenarios reales de drone en Punta Cana, las regulaciones del aeropuerto PUJ que NO puedes ignorar, el equipo que volamos, los precios reales (no inventados), y los errores mas comunes que vemos cuando un cliente contrata mal.",
      "Si vas a contratar [un servicio de drone en Punta Cana](/dron-punta-cana/) — sea Babula Shots u otro — esta guia te da el contexto necesario para hacer las preguntas correctas, calcular ventanas de vuelo, evitar multas por volar dentro del CTR del aeropuerto, y maximizar el material que recibes."
    ],
    sections: [
      {
        heading: "Por que volar drone en Punta Cana",
        body: [
          "**El paisaje vende.** La costa de Punta Cana es, visualmente, una de las playas mas reconocidas del mundo: arena coralina blanca, agua transparente sobre banco de arena, transicion a azul oscuro despues de la barrera de coral. Desde 60-80 metros de altura, un drone captura ese patron de colores que ningun shot a nivel de suelo puede recrear. Para listados inmobiliarios, marketing de resort o material de boda, esta toma es la primera impresion.",
          "**Escala y contexto.** Una villa de Cap Cana, fotografiada desde tierra, se ve linda. La misma villa fotografiada desde 50 metros mostrando el campo de golf Punta Espada en el background, Juanillo Beach al frente, y la marina al lado, es una historia completamente distinta. El drone explica el ENTORNO — y en Punta Cana el entorno (golf, playa, marina, infraestructura del resort) es el 70% del valor.",
          "**Compresion del eje vertical.** Punta Cana es plana. No hay montanas. Una toma horizontal desde tierra muestra: palmeras, playa, mar. Una toma cenital (90 grados hacia abajo) muestra: la geometria del resort, los patrones del banco de arena, las sombras de las palmeras, la marina. Es la diferencia entre una postal generica y un shot que la gente guarda.",
          "**Eventos en movimiento.** Bodas en playa, conciertos en el anfiteatro de Hard Rock, torneos de golf, fiestas de yate en Cap Cana Marina, lanzamientos de proyecto inmobiliario. Todo lo que es masivo o esta en movimiento se beneficia de la perspectiva aerea — un drone cubre 200 invitados en una sola toma y muestra el flow del evento que ningun ground shot puede.",
          "**Documentacion de obra.** Punta Cana esta construyendo. Torres nuevas en Cap Cana, expansiones de Hard Rock, proyectos en Uvero Alto. Los desarrolladores necesitan registro semanal o mensual de avance — el drone es la unica forma practica de hacerlo sin alquilar gruas o helicopteros."
        ]
      },
      {
        heading: "Regulaciones especificas: la zona del aeropuerto PUJ",
        body: [
          "**Esta es la seccion mas importante de esta guia. Leela.** El aeropuerto Internacional de Punta Cana (PUJ, IATA) opera 24/7 con vuelos comerciales constantes. El IDAC (Instituto Dominicano de Aviacion Civil) define una zona controlada (CTR) alrededor de PUJ donde el vuelo de drone esta restringido — y en algunas areas, totalmente prohibido sin autorizacion previa.",
          "**Zona 0-5 km del aeropuerto: prohibido sin autorizacion.** Esto incluye la mayoria de Cabeza de Toro, partes de Bavaro Sur, y el corredor inmediato al norte y sur del aeropuerto. Si tu resort esta en esta zona, NECESITAS solicitar autorizacion al IDAC por escrito, presentar plan de vuelo, y muchas veces esperar 5-10 dias habiles.",
          "**Zona 5-9 km del aeropuerto: autorizacion simplificada.** Incluye gran parte de Bavaro y partes de Punta Cana Village. Vuelos a baja altura (menos de 30 metros) con piloto certificado y reporte previo al ATC (control de trafico aereo) son tipicamente aprobados.",
          "**Zona 9+ km del aeropuerto: vuelo libre con reglas generales.** Incluye Cap Cana (mayormente), Uvero Alto, Macao Beach. Aplican reglas generales: maximo 120 metros de altura, linea de vista, no sobre multitudes sin permiso, no sobre propiedad privada sin consentimiento del dueno.",
          "**Como confirmar.** En Babula Shots verificamos cada vuelo contra el mapa de zonas del IDAC y el calendario de vuelos comerciales de PUJ antes de salir a sitio. Para un cliente, esto significa: dame ubicacion exacta (coordenadas, nombre del resort, direccion) Y fecha objetivo. Te confirmo si necesitamos autorizacion o si podemos volar el mismo dia.",
          "**Consecuencia de volar mal.** Multa minima RD$50,000 (~US$850), confiscacion del equipo, y bloqueo de la licencia del piloto. Mas grave: poner en riesgo un vuelo comercial. NO IMPROVISES."
        ]
      },
      {
        heading: "1. Cap Cana — el escenario ultra-lujo",
        body: [
          "**Lo que es:** desarrollo de lujo en el extremo sur de Punta Cana — 120 km2 de marina, golf, villas, resorts boutique. Eden Roc Cap Cana, Sanctuary Cap Cana, Secrets Cap Cana, AlSol Tiara, Tortuga Bay (Puntacana Resort & Club).",
          "**Por que aqui:** villas de US$2-15 millones, golf de campeonato (Punta Espada — uno de los 100 mejores del mundo), Marina con yates de 100+ pies, Juanillo Beach (frecuentemente listada entre las mejores playas del Caribe), Caleton Beach Club con piscina infinita.",
          "**Tomas tipicas:** villa frente a campo de golf con vista al mar, marina con yates al amanecer, ceremonia de boda en gazebo de playa con palmera frame, listing inmobiliario premium con drone reveal (sube desde el patio hasta mostrar el mar a 80m), Hoyo Signature de Punta Espada (hoyo 17 con la piedra natural).",
          "**Regulacion:** Cap Cana esta 12-15 km del aeropuerto PUJ. Vuelo generalmente libre con reglas generales. Sin embargo, el desarrollo tiene su propio control de acceso — necesitas autorizacion del Cap Cana Heritage School o de la propiedad especifica para volar dentro de la villa privada.",
          "**Tip de produccion:** la mejor luz en Juanillo Beach es 1 hora despues del amanecer (7:30 AM en mayo, 7:00 AM en diciembre) — el sol viene del este sobre el mar y crea reflejos espectaculares en el banco de arena. Atardecer no funciona aqui porque el sol baja por detras de las villas, no sobre el mar."
        ]
      },
      {
        heading: "2. Bavaro — el cinturon resort masivo",
        body: [
          "**Lo que es:** 25 km de playa continua entre Cabeza de Toro y Arena Gorda — donde estan la mayoria de los all-inclusive masivos: Iberostar Grand, Hard Rock Hotel & Casino, Riu Republica, Barcelo Bavaro, Catalonia, Royalton.",
          "**Por que aqui:** capacidad masiva (cada resort tiene 500-1,500 habitaciones), playas amplias, infraestructura completa, vuelos directos cada hora. Si tu cliente es un resort grande o un wedding planner cubriendo 100+ invitados, Bavaro es donde esta el trabajo.",
          "**Tomas tipicas:** marketing aereo del resort completo (sube a 100m, muestra piscina + playa + edificios + palmerales), ceremonia de boda en playa con resort de fondo, layout de evento corporativo, drone reveal de habitacion suite (interior pero sale por la terraza al mar), progreso de obra de expansion.",
          "**Regulacion:** Bavaro Sur (Catalonia, Iberostar Grand) esta a 5-9 km del aeropuerto — zona de autorizacion simplificada. Bavaro Norte (Hard Rock, Riu, Barcelo Premium) esta a 9-12 km — zona libre. Verificamos por coordenada exacta.",
          "**Tip de produccion:** los resorts grandes tienen su propio departamento de marketing que controla quien vuela en su propiedad. ANTES de volar para un cliente externo (boda, evento), confirma que el resort permite drone — algunos cobran fee (US$200-500), otros lo prohiben en zonas comunes."
        ]
      },
      {
        heading: "3. Uvero Alto y Macao — el segmento alternativo",
        body: [
          "**Lo que es:** 15 km de playa al norte de Bavaro, mas tranquilo, menos resorts. Excellence Punta Cana, Now Onyx, Dreams Macao, Zoetry Agua, Sivory Punta Cana.",
          "**Por que aqui:** parejas o productores que buscan estetica de playa virgen, menos saturada de turistas. Para portfolio editorial, marketing de hotel boutique, y bodas que valoran privacidad.",
          "**Tomas tipicas:** playa con cero personas (literal — Macao tiene tramos sin desarrollo), oceano con riff de coral visible desde el aire, resort boutique con jardin tropical, cabalgata por la playa (cliente comun de Sivory).",
          "**Regulacion:** zona libre (15+ km del aeropuerto). Aqui se vuela con reglas generales.",
          "**Tip de produccion:** la cantidad de viento en Macao es mayor que en Cap Cana — la costa norte recibe mas viento del Atlantico. Para vuelos estables (especialmente video), preferimos vuelos en la manana antes de las 10 AM."
        ]
      },
      {
        heading: "Aplicaciones tipicas: que se contrata en Punta Cana",
        body: [
          "**1. Boda day-of aerial.** El paquete mas comun. Cubrimos: ceremonia en playa con vista cenital, sesion pareja con drone reveal (sube desde besito hasta vista panoramica), grupo de invitados (reception aerial), exterior del resort. Entrega: 30-50 fotos editadas + clip de 60-90 segundos para redes sociales. Se contrata como adicional a fotografo de boda (Babula Shots opera ambos servicios).",
          "**2. Listado inmobiliario premium.** Villa frente a golf o frente al mar. Cubrimos: aerial overhead de la propiedad, drone reveal (de patio hacia mar), contexto (campo de golf, marina, distancia a playa), vista desde altura especifica para simular vista desde balcon de pisos superiores. Entrega: 15-30 fotos + clip de 30 segundos para portal MLS + version vertical para WhatsApp/Instagram.",
          "**3. Marketing de resort.** Material multi-uso para website, brochures, OTA (Booking, Expedia). Cubrimos: resort completo desde 100m, areas especificas (piscina principal, beach club, restaurantes), ocupacion (terraza llena al atardecer), eventos (bodas, conciertos). Entrega: paquete de 50+ fotos + clips multiples para social, web y video corporativo.",
          "**4. Progreso de obra.** Torres, villas, expansiones de hotel. Vuelo recurrente (semanal o mensual) desde el mismo punto y altura para crear time-lapse. Entrega: serie de fotos consistentes + reporte visual para inversionistas.",
          "**5. Eventos corporativos.** Lanzamientos, torneos de golf, conciertos en anfiteatro Hard Rock. Cubrimos: aerial wide del evento, transiciones entre escenarios, interaccion con la audiencia. Entrega: video editado + fotos clave."
        ]
      },
      {
        heading: "Equipo: que volamos en Punta Cana",
        body: [
          "**DJI Mavic 3 Pro.** Es nuestro equipo principal para Punta Cana. Camara Hasselblad con sensor 4/3, lente principal 24mm equivalente f/2.8-f/11, lente tele 70mm equivalente, video 5.1K. Para listados premium, bodas con entregables impresos, y marketing de resort este es el equipo correcto — la calidad de imagen aguanta print grande y crop agresivo.",
          "**DJI Mavic Air 2 (backup y vuelos rapidos).** Mas pequeno, mas rapido para vuelos cortos (boda day-of donde tenemos 20 minutos entre ceremonia y reception). Sensor 1/2 pulgada — calidad excelente para web y social.",
          "**Filtros ND.** En Punta Cana el sol es FUERTE. Filtros ND8, ND16, ND32 son obligatorios para video — sin ellos el shutter es demasiado rapido y el video se ve choppy. Sin filtros: pelicula amateur. Con filtros: pelicula profesional.",
          "**Baterias multiples.** En sitio cargamos 4-6 baterias por dia. Cada bateria da 25-30 minutos de vuelo real (en la realidad, considerando viento y maniobras). Para una boda completa o un proyecto de marketing de resort necesitamos 2-3 horas de tiempo de vuelo efectivo.",
          "**Tablet outdoor.** El sol caribeno hace que pantallas normales no se vean. Trabajamos con tablet de alta luminosidad y parasol para monitorear la transmision en vivo y confirmar composicion en tiempo real."
        ]
      },
      {
        heading: "Mejor temporada y mejor luz",
        body: [
          "**Diciembre a abril: temporada perfecta.** Cielos despejados o casi despejados el 80-90% de los dias. Viento moderado (10-20 km/h). Temperatura 24-28°C. Es la temporada alta de turismo y la mejor para drone — toma cualquier dia entre estos meses y tienes alta probabilidad de exito.",
          "**Mayo a junio: shoulder season excelente.** Todavia buen tiempo, menos turistas, posibilidad de algun chubasco corto en la tarde pero generalmente cielos buenos. Buen momento para proyectos largos (marketing de resort, time-lapse de obra).",
          "**Julio a octubre: temporada de huracanes.** No se cancelan vuelos automaticamente, pero hay riesgo. Si tu cliente quiere material aereo en agosto-septiembre, contrata con flexibilidad de fecha (+/- 3 dias) — esperamos ventana de buen tiempo.",
          "**Noviembre: transicion.** Mes mixto. La temporada de huracanes oficialmente termina el 30 de noviembre pero generalmente el clima ya se estabiliza desde mediados de mes.",
          "**Light times.** Para Punta Cana especifico: golden hour matutino comienza 30 minutos antes del amanecer y dura ~45 minutos despues. En mayo: 5:50-6:45 AM. En diciembre: 6:25-7:15 AM. Golden hour vespertino: 30 minutos antes del atardecer y dura ~30 minutos despues. En mayo: 6:15-7:00 PM. En diciembre: 5:30-6:15 PM. La luz mas dramatica del dia es la primera media hora de cada golden hour."
        ]
      },
      {
        heading: "Precios: que esperar (sin inventar numeros)",
        body: [
          "**Los rangos publicados en nuestra pagina de precios son la referencia oficial.** No publicamos numeros inventados en este articulo — para detalles exactos visita la [pagina de precios de servicio de drone](/precios/).",
          "**Factores que afectan el precio en Punta Cana especificamente.** Distancia desde Santo Domingo (180-200 km, agregamos costo de transporte si no estamos en sitio), autorizacion del IDAC (si la zona requiere permiso, agregamos 5-10 dias de plazo + costo de gestion), permiso del resort (fee del hotel — variable), duracion de vuelo efectivo (hora real volando, no hora en sitio), entregables (foto + video vs solo foto, y cantidad).",
          "**Modelo general.** Listado inmobiliario simple en Bavaro (villa accesible, sin autorizacion especial): mas economico, dentro de paquetes base. Listado premium en Cap Cana con video editado: paquete propiedad premium o finca de lujo. Marketing completo de resort con cobertura multi-dia: cotizacion custom. Boda day-of aerial como add-on a fotografo de boda: tarifa de medio dia (~3-4 horas).",
          "**Lo que NO cotizo por WhatsApp en 5 minutos.** Proyectos que requieren autorizacion del IDAC, eventos masivos, marketing multi-dia. Estos necesitan briefing detallado — fecha, locacion exacta, entregables, alcance — para cotizar bien.",
          "**Tip:** cotiza con tiempo. Para una boda en Cap Cana en febrero, contacta 2-3 meses antes. Si el cliente espera al ultimo momento, la disponibilidad se complica y los precios suelen subir por urgencia."
        ]
      },
      {
        heading: "Errores comunes (y como evitarlos)",
        body: [
          "**Error 1: contratar drone operator sin licencia.** En RD existe regulacion (IDAC) y existen pilotos certificados. Un operador no certificado puede causar multa al cliente final. Pregunta por el numero de licencia antes de contratar.",
          "**Error 2: no confirmar regulacion del aeropuerto.** Especialmente para Bavaro Sur y Cabeza de Toro. Volar dentro del CTR sin autorizacion = multa y posible confiscacion. NUNCA improvises esto.",
          "**Error 3: dejar el drone para el ultimo momento del shoot.** Si la luz se va y el dron viene al final, no hay material. Para una boda en Punta Cana, el drone debe volar al inicio de la golden hour, no al final.",
          "**Error 4: no calcular ventana de viento.** Punta Cana tiene viento real (especialmente Macao y Uvero Alto entre las 2-5 PM). Vuelos en condiciones de 30+ km/h de viento son inestables. Confirma con el piloto cuando es la ventana mejor del dia.",
          "**Error 5: confundir 'drone' con 'foto aerea casual'.** Un servicio profesional incluye: pre-vuelo (revisar zona, regulacion, clima), vuelo planeado (composiciones especificas, no improvisado), post-produccion (edicion en Lightroom, gradacion de video). Si pagas tarifa baja a un operador ad-hoc, recibes shots sin edicion. No es lo mismo."
        ]
      }
    ],
    faq: [
      {
        q: "Necesito permiso para volar drone en Punta Cana?",
        a: "Depende de la zona. Cap Cana (12-15 km del aeropuerto): vuelo generalmente libre con reglas IDAC estandar — maximo 120m de altura, linea de vista, no sobre multitudes. Bavaro Sur y Cabeza de Toro (5-9 km del aeropuerto): autorizacion simplificada o estricta segun punto exacto. Zona inmediata al aeropuerto PUJ (0-5 km): prohibido sin autorizacion previa por escrito al IDAC, plazo de 5-10 dias habiles. En Babula Shots verificamos cada locacion antes de aceptar el proyecto."
      },
      {
        q: "Cuanto cuesta un servicio de drone en Punta Cana?",
        a: "Los paquetes publicados van desde RD$11,900 (listado esencial) hasta RD$35,700 (finca de lujo). Para servicios especificos de Punta Cana puede aplicar costo de transporte adicional desde Santo Domingo. Marketing de resort, eventos masivos y proyectos con permisos IDAC se cotizan custom segun alcance. Ver detalles en nuestra [pagina de precios](/precios/)."
      },
      {
        q: "Cual es la mejor epoca para volar drone en Punta Cana?",
        a: "Diciembre a abril es ideal — cielos despejados 80-90% de los dias, viento moderado, temperatura agradable. Mayo y junio son shoulder season con clima muy bueno y menos turistas. Julio a octubre es temporada de huracanes — vuelos posibles pero con riesgo de cancelacion. Si tu proyecto es flexible, programa entre noviembre y junio."
      },
      {
        q: "Cubren bodas en Punta Cana con drone como servicio independiente?",
        a: "Si. Volamos drone para bodas en Punta Cana como servicio standalone (cliente ya tiene fotografo principal) o como add-on al servicio completo de fotografia de Babula Shots Bodas. Cobertura tipica: ceremonia aerial, sesion pareja con drone reveal, grupo de invitados, exterior del resort. Entrega: 30-50 fotos + clip de 60-90 segundos."
      },
      {
        q: "Trabajan con resorts de Punta Cana directamente?",
        a: "Si. Trabajamos regularmente con resorts y wedding planners de Eden Roc Cap Cana, Hard Rock Hotel & Casino, Iberostar Grand, Excellence Punta Cana, Royalton, Catalonia y otros. Para proyectos recurrentes (marketing mensual, time-lapse de obra) ofrecemos retainer mensual con tarifa reducida. Contacta para discutir alcance especifico."
      }
    ],
    related: [
      {
        href: "/dron-punta-cana/",
        label: "Servicio de drone en Punta Cana",
        description: "Pagina principal del servicio: cobertura, paquetes, casos de uso y zonas de vuelo en Punta Cana."
      },
      {
        href: "/dron-cap-cana/",
        label: "Drone en Cap Cana",
        description: "Cobertura especifica para Cap Cana — villas, golf, marina, eventos premium."
      },
      {
        href: "/dron-bavaro/",
        label: "Drone en Bavaro",
        description: "Cobertura para resorts y bodas en el cinturon resort de Bavaro."
      },
      {
        href: "/dron-inmobiliario-arquitectura/",
        label: "Drone inmobiliario y arquitectura",
        description: "Servicio especifico para listados inmobiliarios y proyectos de arquitectura."
      },
      {
        href: "/precios/",
        label: "Precios y paquetes",
        description: "Tarifas publicadas para todos los paquetes de servicio de drone."
      }
    ],
    ogImageAlt: "Servicio de drone en Punta Cana — guia completa Babula Shots 2026",
    en: {
      enSlug: "drone-services-punta-cana",
      title:
        "Drone Services in Punta Cana: 2026 Guide for Resorts, Real Estate & Events — Babula Shots",
      metaDescription:
        "Complete 2026 guide to drone services in Punta Cana, Dominican Republic: Cap Cana, Bavaro, Juanillo Beach. Aerial coverage for resorts, weddings, real estate, golf and events. PUJ airport regulations, DJI Mavic 3 Pro equipment, pricing and pro pilot tips.",
      h1: "Drone Services in Punta Cana: 2026 Guide for Resorts, Real Estate & Events",
      eyebrow: "Drone Punta Cana · 2026 Guide",
      introParagraphs: [
        "Punta Cana is one of the most photogenic settings in the Caribbean for drone work: 50 km of continuous beach between Cap Cana and Uvero Alto, turquoise water that shifts to cobalt blue as it passes from sandbank to deep channel, resorts with 1,000+ rooms surrounded by palm groves, and two golf courses along the Atlantic (Punta Espada and Corales). For photographers, real estate agents, wedding planners or hotel marketing teams, aerial drone footage isn't optional here — it's the difference between flat material and material that sells.",
        "At Babula Shots we cover Punta Cana with drone every week — weddings at Eden Roc Cap Cana, oceanfront villa listings on Juanillo Beach, construction progress for towers in Bavaro, marketing for Hard Rock Hotel & Casino, corporate events at Iberostar Grand, aerial shots of civil ceremonies at beach gazebos, and view simulations for pre-sales. This guide covers real drone scenarios in Punta Cana, the PUJ airport regulations you CANNOT ignore, the equipment we fly, real pricing (not made-up numbers), and the most common mistakes we see when clients hire badly.",
        "If you're going to hire [a drone service in Punta Cana](/en/drone-punta-cana/) — whether Babula Shots or anyone else — this guide gives you the context to ask the right questions, calculate flight windows, avoid fines for flying inside the airport's CTR, and maximize the material you receive."
      ],
      sections: [
        {
          heading: "Why fly a drone in Punta Cana",
          body: [
            "**The landscape sells.** Punta Cana's coast is, visually, one of the most recognized beaches in the world: white coral-sand, transparent water over sandbank, transition to deep blue past the coral barrier. From 60-80 meters of altitude, a drone captures that color pattern that no ground-level shot can recreate. For real estate listings, resort marketing or wedding material, this shot is the first impression.",
            "**Scale and context.** A Cap Cana villa photographed from the ground looks nice. The same villa photographed from 50 meters showing the Punta Espada golf course in the background, Juanillo Beach in front, and the marina alongside, is a completely different story. The drone explains the SURROUNDINGS — and in Punta Cana the surroundings (golf, beach, marina, resort infrastructure) are 70% of the value.",
            "**Vertical-axis compression.** Punta Cana is flat. No mountains. A horizontal ground shot shows: palms, beach, sea. A nadir shot (90 degrees down) shows: resort geometry, sandbank patterns, palm shadows, the marina. It's the difference between a generic postcard and a shot people save.",
            "**Events in motion.** Beach weddings, concerts at Hard Rock's amphitheater, golf tournaments, yacht parties at Cap Cana Marina, real estate project launches. Anything massive or in motion benefits from aerial perspective — a drone covers 200 guests in a single shot and shows event flow that no ground shot can.",
            "**Construction documentation.** Punta Cana is building. New towers in Cap Cana, Hard Rock expansions, Uvero Alto projects. Developers need weekly or monthly progress records — drone is the only practical way to do it without renting cranes or helicopters."
          ]
        },
        {
          heading: "Specific regulations: the PUJ airport zone",
          body: [
            "**This is the most important section of this guide. Read it.** Punta Cana International Airport (PUJ, IATA) operates 24/7 with constant commercial flights. IDAC (Dominican Civil Aviation Institute) defines a controlled zone (CTR) around PUJ where drone flight is restricted — and in some areas, totally prohibited without prior authorization.",
            "**Zone 0-5 km from the airport: prohibited without authorization.** This includes most of Cabeza de Toro, parts of Bavaro Sur, and the immediate corridor north and south of the airport. If your resort is in this zone, you NEED to request written authorization from IDAC, submit a flight plan, and often wait 5-10 business days.",
            "**Zone 5-9 km from the airport: simplified authorization.** Includes much of Bavaro and parts of Punta Cana Village. Low-altitude flights (under 30 meters) with certified pilot and prior ATC notification are typically approved.",
            "**Zone 9+ km from the airport: free flight under general rules.** Includes Cap Cana (mostly), Uvero Alto, Macao Beach. General rules apply: maximum 120 meters altitude, line of sight, no flying over crowds without permit, no flying over private property without owner consent.",
            "**How to confirm.** At Babula Shots we check every flight against the IDAC zone map and the PUJ commercial flight schedule before going on site. For a client, this means: give me exact location (coordinates, resort name, address) AND target date. I'll confirm whether we need authorization or can fly same-day.",
            "**Consequence of flying badly.** Minimum fine RD$50,000 (~US$850), equipment confiscation, pilot license suspension. Worse: putting a commercial flight at risk. DO NOT IMPROVISE."
          ]
        },
        {
          heading: "1. Cap Cana — the ultra-luxury setting",
          body: [
            "**What it is:** luxury development on the southern tip of Punta Cana — 120 km2 of marina, golf, villas, boutique resorts. Eden Roc Cap Cana, Sanctuary Cap Cana, Secrets Cap Cana, AlSol Tiara, Tortuga Bay (Puntacana Resort & Club).",
            "**Why here:** US$2-15 million villas, championship golf (Punta Espada — one of the world's top 100), marina with 100+ ft yachts, Juanillo Beach (frequently listed among the best beaches in the Caribbean), Caleton Beach Club with infinity pool.",
            "**Typical shots:** villa facing golf course with sea view, marina with yachts at sunrise, beach gazebo wedding with palm-tree frame, premium real estate listing with drone reveal (rises from the patio to show the sea at 80m), signature hole at Punta Espada (hole 17 with the natural rock).",
            "**Regulation:** Cap Cana is 12-15 km from PUJ airport. Flight generally free with general rules. However, the development has its own access control — you need authorization from Cap Cana Heritage School or the specific property to fly inside private villa grounds.",
            "**Production tip:** the best light at Juanillo Beach is 1 hour after sunrise (7:30 AM in May, 7:00 AM in December) — the sun comes from the east over the sea and creates spectacular reflections on the sandbank. Sunset doesn't work here because the sun goes down behind the villas, not over the sea."
          ]
        },
        {
          heading: "2. Bavaro — the massive resort belt",
          body: [
            "**What it is:** 25 km of continuous beach between Cabeza de Toro and Arena Gorda — where most of the massive all-inclusives are: Iberostar Grand, Hard Rock Hotel & Casino, Riu Republica, Barcelo Bavaro, Catalonia, Royalton.",
            "**Why here:** massive capacity (each resort has 500-1,500 rooms), wide beaches, complete infrastructure, direct flights every hour. If your client is a large resort or a wedding planner covering 100+ guests, Bavaro is where the work is.",
            "**Typical shots:** aerial marketing of complete resort (rise to 100m, show pool + beach + buildings + palm groves), beach wedding with resort backdrop, corporate event layout, suite drone reveal (interior but exits through the terrace to the sea), expansion construction progress.",
            "**Regulation:** Bavaro Sur (Catalonia, Iberostar Grand) is 5-9 km from the airport — simplified authorization zone. Bavaro Norte (Hard Rock, Riu, Barcelo Premium) is 9-12 km — free zone. We verify by exact coordinate.",
            "**Production tip:** large resorts have their own marketing department that controls who flies on their property. BEFORE flying for an external client (wedding, event), confirm the resort allows drone — some charge a fee (US$200-500), others prohibit it in common areas."
          ]
        },
        {
          heading: "3. Uvero Alto and Macao — the alternative segment",
          body: [
            "**What it is:** 15 km of beach north of Bavaro, more quiet, fewer resorts. Excellence Punta Cana, Now Onyx, Dreams Macao, Zoetry Agua, Sivory Punta Cana.",
            "**Why here:** couples or producers looking for virgin-beach aesthetic, less saturated with tourists. For editorial portfolios, boutique hotel marketing, and weddings that value privacy.",
            "**Typical shots:** beach with zero people (literal — Macao has stretches with no development), ocean with coral reef visible from the air, boutique resort with tropical garden, beach horseback riding (common Sivory client).",
            "**Regulation:** free zone (15+ km from airport). Here we fly with general rules.",
            "**Production tip:** wind in Macao is higher than in Cap Cana — the north coast gets more Atlantic wind. For stable flights (especially video), we prefer morning flights before 10 AM."
          ]
        },
        {
          heading: "Typical applications: what gets hired in Punta Cana",
          body: [
            "**1. Wedding day-of aerial.** The most common package. We cover: beach ceremony with nadir view, couple session with drone reveal (rises from kiss to panoramic view), guest group (reception aerial), resort exterior. Delivery: 30-50 edited photos + 60-90 second social media clip. Booked as an add-on to wedding photographer (Babula Shots runs both services).",
            "**2. Premium real estate listing.** Villa fronting golf or fronting the sea. We cover: aerial overhead of the property, drone reveal (from patio toward sea), context (golf course, marina, distance to beach), view from specific altitude to simulate view from balcony of upper floors. Delivery: 15-30 photos + 30 second clip for MLS portal + vertical version for WhatsApp/Instagram.",
            "**3. Resort marketing.** Multi-use material for website, brochures, OTA (Booking, Expedia). We cover: complete resort from 100m, specific areas (main pool, beach club, restaurants), occupancy (full terrace at sunset), events (weddings, concerts). Delivery: package of 50+ photos + multiple clips for social, web and corporate video.",
            "**4. Construction progress.** Towers, villas, hotel expansions. Recurring flight (weekly or monthly) from the same point and altitude to create time-lapse. Delivery: consistent photo series + visual report for investors.",
            "**5. Corporate events.** Launches, golf tournaments, concerts at Hard Rock's amphitheater. We cover: aerial wide of the event, transitions between stages, audience interaction. Delivery: edited video + key photos."
          ]
        },
        {
          heading: "Equipment: what we fly in Punta Cana",
          body: [
            "**DJI Mavic 3 Pro.** Our main rig for Punta Cana. Hasselblad camera with 4/3 sensor, main 24mm equivalent lens f/2.8-f/11, 70mm equivalent tele lens, 5.1K video. For premium listings, weddings with printed deliverables, and resort marketing this is the correct gear — image quality holds up to large print and aggressive crop.",
            "**DJI Mavic Air 2 (backup and quick flights).** Smaller, faster for short flights (wedding day-of where we have 20 minutes between ceremony and reception). 1/2 inch sensor — excellent quality for web and social.",
            "**ND filters.** In Punta Cana the sun is STRONG. ND8, ND16, ND32 filters are mandatory for video — without them shutter is too fast and video looks choppy. No filters: amateur footage. With filters: professional footage.",
            "**Multiple batteries.** On site we carry 4-6 batteries per day. Each battery gives 25-30 minutes of real flight (in reality, accounting for wind and maneuvers). For a full wedding or resort marketing project we need 2-3 hours of effective flight time.",
            "**Outdoor tablet.** Caribbean sun makes normal screens unreadable. We work with high-brightness tablet and sun hood to monitor live transmission and confirm composition in real time."
          ]
        },
        {
          heading: "Best season and best light",
          body: [
            "**December to April: perfect season.** Clear or mostly clear skies 80-90% of days. Moderate wind (10-20 km/h). Temperature 24-28°C. It's tourist high season and the best for drone — take any day between these months and you have high probability of success.",
            "**May to June: excellent shoulder season.** Still good weather, fewer tourists, possibility of brief afternoon shower but generally good skies. Good time for long projects (resort marketing, construction time-lapse).",
            "**July to October: hurricane season.** Flights aren't automatically canceled, but there's risk. If your client wants aerial material in August-September, book with date flexibility (+/- 3 days) — we wait for a good weather window.",
            "**November: transition.** Mixed month. Hurricane season officially ends November 30 but weather generally stabilizes from mid-month.",
            "**Light times.** Punta Cana specific: morning golden hour starts 30 minutes before sunrise and lasts ~45 minutes after. In May: 5:50-6:45 AM. In December: 6:25-7:15 AM. Evening golden hour: 30 minutes before sunset and lasts ~30 minutes after. In May: 6:15-7:00 PM. In December: 5:30-6:15 PM. The most dramatic light of the day is the first half hour of each golden hour."
          ]
        },
        {
          heading: "Pricing: what to expect (without making up numbers)",
          body: [
            "**The ranges published on our pricing page are the official reference.** We don't publish made-up numbers in this article — for exact details visit the [drone service pricing page](/en/prices/).",
            "**Factors that affect Punta Cana pricing specifically.** Distance from Santo Domingo (180-200 km, we add transport cost if we're not on site), IDAC authorization (if the zone requires permit, we add 5-10 days lead time + handling cost), resort permit (hotel fee — variable), effective flight duration (actual hour flying, not on-site hour), deliverables (photo + video vs. photo only, and quantity).",
            "**General model.** Simple real estate listing in Bavaro (accessible villa, no special authorization): more economical, within base packages. Premium listing in Cap Cana with edited video: premium property or luxury estate package. Complete resort marketing with multi-day coverage: custom quote. Wedding day-of aerial as add-on to wedding photographer: half-day rate (~3-4 hours).",
            "**What I DON'T quote over WhatsApp in 5 minutes.** Projects requiring IDAC authorization, massive events, multi-day marketing. These need detailed briefing — date, exact location, deliverables, scope — to quote well.",
            "**Tip:** quote with time. For a Cap Cana wedding in February, contact 2-3 months ahead. If the client waits until the last moment, availability gets complicated and prices often go up from urgency."
          ]
        },
        {
          heading: "Common mistakes (and how to avoid them)",
          body: [
            "**Mistake 1: hiring a drone operator without license.** In DR there is regulation (IDAC) and there are certified pilots. An uncertified operator can cause a fine for the end client. Ask for the license number before hiring.",
            "**Mistake 2: not confirming airport regulation.** Especially for Bavaro Sur and Cabeza de Toro. Flying inside the CTR without authorization = fine and possible confiscation. NEVER improvise this.",
            "**Mistake 3: leaving the drone for the last moment of the shoot.** If the light goes and the drone comes at the end, there's no material. For a Punta Cana wedding, the drone must fly at the start of golden hour, not the end.",
            "**Mistake 4: not calculating wind window.** Punta Cana has real wind (especially Macao and Uvero Alto between 2-5 PM). Flights in 30+ km/h wind conditions are unstable. Confirm with the pilot when the best window of the day is.",
            "**Mistake 5: confusing 'drone' with 'casual aerial photo.'** A professional service includes: pre-flight (review zone, regulation, weather), planned flight (specific compositions, not improvised), post-production (Lightroom editing, video grading). If you pay low rate to an ad-hoc operator, you get unedited shots. It's not the same."
          ]
        }
      ],
      faq: [
        {
          q: "Do I need a permit to fly a drone in Punta Cana?",
          a: "It depends on the zone. Cap Cana (12-15 km from airport): flight generally free with standard IDAC rules — maximum 120m altitude, line of sight, no flying over crowds. Bavaro Sur and Cabeza de Toro (5-9 km from airport): simplified or strict authorization depending on exact point. Zone immediately around PUJ airport (0-5 km): prohibited without prior written authorization from IDAC, 5-10 business day lead time. At Babula Shots we verify every location before accepting the project."
        },
        {
          q: "How much does a drone service cost in Punta Cana?",
          a: "Published packages range from RD$11,900 (essential listing) to RD$35,700 (luxury estate). Punta Cana specific services may have additional transport cost from Santo Domingo. Resort marketing, massive events and projects with IDAC permits are quoted custom by scope. See details on our [pricing page](/en/prices/)."
        },
        {
          q: "What's the best time of year to fly a drone in Punta Cana?",
          a: "December to April is ideal — clear skies 80-90% of days, moderate wind, pleasant temperature. May and June are shoulder season with very good weather and fewer tourists. July to October is hurricane season — flights possible but with cancellation risk. If your project is flexible, schedule between November and June."
        },
        {
          q: "Do you cover Punta Cana weddings with drone as a standalone service?",
          a: "Yes. We fly drone for Punta Cana weddings as a standalone service (client already has main photographer) or as add-on to full Babula Shots Bodas photography. Typical coverage: aerial ceremony, couple session with drone reveal, guest group, resort exterior. Delivery: 30-50 photos + 60-90 second clip."
        },
        {
          q: "Do you work with Punta Cana resorts directly?",
          a: "Yes. We work regularly with resorts and wedding planners at Eden Roc Cap Cana, Hard Rock Hotel & Casino, Iberostar Grand, Excellence Punta Cana, Royalton, Catalonia and others. For recurring projects (monthly marketing, construction time-lapse) we offer monthly retainer at reduced rate. Contact us to discuss specific scope."
        }
      ],
      related: [
        {
          href: "/en/drone-punta-cana/",
          label: "Drone service in Punta Cana",
          description: "Main service page: coverage, packages, use cases and flight zones in Punta Cana."
        },
        {
          href: "/en/drone-cap-cana/",
          label: "Drone in Cap Cana",
          description: "Specific coverage for Cap Cana — villas, golf, marina, premium events."
        },
        {
          href: "/en/drone-bavaro/",
          label: "Drone in Bavaro",
          description: "Coverage for resorts and weddings in the Bavaro resort belt."
        },
        {
          href: "/en/real-estate-architecture-drone/",
          label: "Real estate and architecture drone",
          description: "Specific service for real estate listings and architecture projects."
        },
        {
          href: "/en/prices/",
          label: "Prices and packages",
          description: "Published rates for all drone service packages."
        }
      ],
      ogImageAlt: "Drone service in Punta Cana — Babula Shots 2026 complete guide"
    }
  },

  // ─────────────────────────────────────────────────────────────────────
  // P2 — Drone real estate photography in Dominican Republic (bilingual)
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "drone-inmobiliaria-republica-dominicana",
    title:
      "Drone para Inmobiliaria en Republica Dominicana: Como Vender Propiedades con Tomas Aereas — Babula Shots",
    metaDescription:
      "Guia profesional de drone inmobiliario en RD: por que las tomas aereas venden mas rapido. Escenarios para villas frente al mar (Cap Cana, Eden Roc), golf-front (Punta Espada, Casa de Campo), condos en Santo Domingo y Airbnb. Entregables, regulacion y temporada.",
    h1: "Drone para Inmobiliaria en Republica Dominicana: Como Vender Propiedades con Tomas Aereas",
    eyebrow: "Drone Inmobiliario · Estrategia Aerea",
    datePublished: "2026-05-11T12:00:00-04:00",
    dateModified: "2026-05-11T12:00:00-04:00",
    hero: {
      src: "/images/drone/drone-arquitectura-inspeccion.webp",
      alt: "Drone para inmobiliaria en Republica Dominicana — toma aerea de villa frente al mar — Babula Shots",
      width: 1600,
      height: 1067
    },
    introParagraphs: [
      "Las propiedades con material aereo se venden mas rapido. No es opinion — es lo que vemos cada semana trabajando con agentes inmobiliarios, brokers y desarrolladores en Republica Dominicana. Un listado de villa frente al mar con 4 fotos de telefono se queda 90 dias en el portal. La misma villa con un set de fotografia profesional + 8 tomas aereas + un clip de 30 segundos se mueve en 30-45 dias. La diferencia no es magia — es informacion. El drone le da al comprador algo que el ground-level shooting nunca puede dar: el entorno, la escala, la ubicacion real.",
      "En Babula Shots cubrimos propiedades en toda la RD — villas oceanfront en Cap Cana y Eden Roc, propiedades golf-front en Punta Espada y Casa de Campo Teeth of the Dog, torres de gran altura en Anacaona y Mirador Sur en Santo Domingo, casas rurales en Constanza y Jarabacoa, Airbnb en Bavaro y Las Terrenas. Esta guia explica por que el drone aereo es la herramienta de venta mas eficiente del 2026, los escenarios donde mas impacta, los entregables que necesitas pedir, y la regulacion que tu agente o broker NO suele conocer.",
      "Para resultados completos de marketing inmobiliario, el drone se combina con [fotografia inmobiliaria a nivel suelo](https://inmobiliaria.babulashotsrd.com/). Esta guia se enfoca en el componente aereo — la parte que la mayoria de agentes hacen mal o se saltan completamente."
    ],
    sections: [
      {
        heading: "Por que las tomas aereas venden mas rapido (la psicologia)",
        body: [
          "**El comprador necesita confianza espacial.** Cuando un comprador mira una propiedad online, su pregunta principal no es 'como es la cocina' — esa pregunta viene despues. Su primera pregunta es: 'donde esta?' y 'que hay alrededor?'. Una toma cenital de 80 metros responde ambas en 2 segundos: aqui esta la villa, al frente el mar, al lado el campo de golf, atras la calle del resort. La ground photography NO puede responder esto. Cuando el comprador no puede responder estas preguntas rapido, abandona el listado.",
          "**Escala = valor percibido.** Una toma aerea de una villa de 800m2 muestra el lot completo: jardin, piscina, distancia a la propiedad vecina, profundidad del lote, acceso. El comprador procesa visualmente que es una propiedad grande. La misma villa fotografiada solo con shots de habitaciones puede percibirse como pequena — porque no hay referencia.",
          "**Contexto inmediato (amenidades).** Si tu villa esta a 200m de Juanillo Beach, la foto aerea lo demuestra. Si tu condo en Anacaona tiene vista al Malecon y al mar Caribe, la foto desde 100m lo demuestra. Si tu casa rural en Constanza esta rodeada de montanas, la foto aerea lo demuestra. Sin el aereo, el comprador tiene que CONFIAR en lo que dice la descripcion. Con el aereo, lo VE.",
          "**Diferenciacion en el portal MLS.** En portales como Remax, Century 21, dr1, Encuentra24, ZonaPropiedad, las propiedades aparecen en grid de thumbnails. Una propiedad con thumbnail aereo destaca inmediatamente sobre las propiedades con thumbnail de sala. El click-through rate sube. Mas clicks = mas leads.",
          "**Estudios de mercado.** Multiples estudios de la NAR (National Association of Realtors) reportan que listados con fotografia aerea se venden 68% mas rapido que listados sin ella. En RD no tenemos estadistica oficial, pero el patron es similar — los agentes que invierten en drone cierran mas rapido."
        ]
      },
      {
        heading: "Escenario 1: villa oceanfront (Cap Cana, Eden Roc, Punta Cana Village)",
        body: [
          "**Lo que es:** villa de US$1.5-15 millones, frente al mar, generalmente dentro de un desarrollo de lujo (Cap Cana Heritage School, Punta Cana Resort & Club, Roco Ki).",
          "**Por que el drone es critico aqui:** el valor de la propiedad ESTA en el entorno. Una villa de US$8 millones sin aerial = posibilidad de venta baja. Con aerial mostrando: distancia exacta al mar, vista desde balcon de segundo piso, relacion con villas vecinas, acceso peatonal a la playa = comprador entiende lo que esta pagando.",
          "**Tomas que recomendamos:** (1) cenital de la propiedad completa desde 60m mostrando lot + piscina + jardin. (2) reveal lateral desde patio hacia mar a 30m — el momento mas vendedor. (3) vista desde altura especifica (15m, 25m, 35m) para simular vista desde primer piso, segundo piso, terraza. (4) contexto wide a 100m mostrando villa + Juanillo Beach + golf course. (5) sunset shot mirando hacia mar con sol bajando lateral.",
          "**Frecuencia:** una sola sesion de 60-90 minutos cubre todo. Si la propiedad sale al mercado por temporada (winter season), volver a fotografiar al inicio de cada temporada actualiza el material.",
          "**Cliente tipico:** broker de lujo (Sothebys International, Christies, Engel & Volkers), agentes de Provaltur, EDR Property, propietarios privados de villa premium."
        ]
      },
      {
        heading: "Escenario 2: propiedad golf-front (Punta Espada, Casa de Campo Teeth of the Dog)",
        body: [
          "**Lo que es:** villa, casa o condo con vista directa o fairway frontage en campo de golf de campeonato. Punta Espada (Cap Cana — diseno Jack Nicklaus), Corales (Punta Cana Resort & Club), Teeth of the Dog (Casa de Campo — Pete Dye, top 25 mundial), Dye Fore (Casa de Campo), La Cana (Punta Cana Resort & Club).",
          "**Por que el drone es critico:** el comprador de golf-front esta comprando el campo, no solo la casa. Necesita ver: que hoyo, que vista, cuanto frontage de fairway, si hay obstruccion arboreal, si hay tee box visible. La camera a nivel suelo NO puede mostrar el campo de golf con la propiedad — siempre estara obstruido por arboles o casas vecinas.",
          "**Tomas que recomendamos:** (1) cenital del lot mostrando jardin + transicion al fairway. (2) wide a 40m mostrando villa + green del hoyo + bunker + fairway adyacente. (3) reveal desde patio trasero hacia campo de golf a 25m. (4) shot identificando el hoyo especifico (signature view del hoyo 17 en Punta Espada, el hoyo 5 en Teeth of the Dog frente al mar). (5) sunrise shot — el golf se ve espectacular con la primera luz lateral.",
          "**Frecuencia:** una sesion. Para campos como Teeth of the Dog donde la vista del Mar Caribe es parte del valor, considerar shoot en dia despejado (no nublado).",
          "**Cliente tipico:** propietarios de villas en Casa de Campo (un mercado muy especifico — propietarios privados, no muchos brokers locales), brokers de lujo que cubren Cap Cana / Punta Cana Resort & Club, desarrolladores de pre-venta de fase nueva."
        ]
      },
      {
        heading: "Escenario 3: torre alta en Santo Domingo (Anacaona, Mirador Sur, Naco)",
        body: [
          "**Lo que es:** condo en torre de 15-30 pisos, generalmente en Sector Anacaona / Mirador Sur (con vista al parque y al Caribe), Piantini, Naco, Bella Vista, o Polígono Central.",
          "**Por que el drone es critico:** el comprador de condo paga por la VISTA. Si compra piso 18 en Anacaona, esta pagando por la altura y la vista al mar Caribe. Foto de la sala no responde la pregunta de la vista. Foto aerea desde la altura exacta del condo (18m x 3m por piso = 54m) responde la pregunta exactamente.",
          "**Tomas que recomendamos:** (1) vista desde la altura del condo simulando la vista real (esto es lo MAS valioso — el comprador entiende que recibe). (2) contexto wide a 80m mostrando torre + amenidades adyacentes + Malecon + parque Mirador Sur. (3) shot frontal de la torre desde el aire — muestra calidad de construccion, fachada. (4) shot lateral mostrando torres vecinas y skyline. (5) si la torre esta cerca del Caribe, sunset shot con el sol bajando sobre el mar (en Santo Domingo el sol baja hacia el mar — perfecta).",
          "**Frecuencia:** una sesion. Si la torre esta en pre-venta, considerar shoots en varios pisos diferentes para crear simulaciones distintas (vista desde piso 10, desde piso 18, desde piso 25 — cada una con tarifa).",
          "**Cliente tipico:** desarrolladores de torres (Karim, Sajud Group, Edificas), brokers de Coldwell Banker en Santo Domingo, agentes independientes con torres en cartera."
        ]
      },
      {
        heading: "Escenario 4: Airbnb / vacation rental (Bavaro, Las Terrenas, Cabarete)",
        body: [
          "**Lo que es:** propiedad de inversion / vacation rental. Apartamento en condominio resort en Bavaro, villa pequena en Las Terrenas, casa kite-surf en Cabarete, finca rural en Jarabacoa.",
          "**Por que el drone es critico:** la decision de booking en Airbnb / Booking se toma en 30 segundos viendo las primeras fotos. La foto aerea es la PRIMERA que sube el host inteligente. Hace que el listado destaque sobre los 200 listings de Bavaro que solo tienen foto de habitacion.",
          "**Tomas que recomendamos:** (1) aerial wide mostrando propiedad + amenidades del condominio (piscina, jardin, area BBQ). (2) reveal desde patio hacia mar o hacia montana (depende del setting). (3) contexto a 60m mostrando distancia a playa (Bavaro: '5 minutos caminando'; Cabarete: '50m al kitebeach'). (4) shots verticales (9:16) para uso en Instagram/TikTok reel del host — IMPORTANTE para vacation rentals que dependen de redes sociales para visibilidad.",
          "**Frecuencia:** una sesion al inicio (para el listing), considerando re-shoot cada 12-18 meses si la propiedad se actualiza.",
          "**Cliente tipico:** propietarios privados de Airbnb, property managers (TRS Property, Marriott Vacation Club), inversionistas con multiples propiedades en cartera."
        ]
      },
      {
        heading: "Que entregables debes pedir (el set completo)",
        body: [
          "**Fotos editadas (15-50 segun paquete).** Formato JPG en alta resolucion (4K x 6K mínimo). Edicion en Lightroom — correccion de color, exposicion, gradacion, removal de elementos visuales distractores (cables, basura, vehiculos).",
          "**Video clip corto (30-60 segundos).** Editado, con musica generica libre de royalty. Para portal MLS (que muchos aceptan video) y para uso en social media. Resolucion 4K con bitrate alto.",
          "**Masters ProRes 4K (opcional).** Para clientes que quieren producir su propio reel (agencias de marketing, productoras). Archivo grande (varios GB), entregamos via Google Drive o WeTransfer.",
          "**Portal-format crops.** Algunos portales requieren formato especifico (Encuentra24 prefiere 4:3, Remax 16:9). Entregamos versiones cropeadas para cada portal.",
          "**WhatsApp-format vertical (9:16).** Esto es nuevo en el 2026 y muy demandado. La mayoria de los leads en RD vienen por WhatsApp — pedir al cliente que abra una foto horizontal en WhatsApp es friccion. Una foto vertical (9:16) optimizada para mobile reduce esa friccion. Mismo principio aplica para Instagram Stories y TikTok.",
          "**Consideracion: drone reveal animado (GIF / video corto).** Para listados premium, el reveal animado (sube de patio a mar a 25m en 6 segundos) se reutiliza para anuncios de Facebook/Instagram Ads — pagas el anuncio, pero el material original ya esta producido."
        ]
      },
      {
        heading: "Consideraciones regulatorias para inmobiliaria",
        body: [
          "**Propiedad privada.** Volar sobre propiedad privada que NO es la propiedad listada requiere consentimiento del dueno vecino. Especialmente en Cap Cana y Casa de Campo donde las villas estan cerca. Para listings inmobiliarios, evitamos sobrevolar propiedades vecinas a menos que tengamos autorizacion del HOA o de la administracion del desarrollo.",
          "**Espacio aereo restringido.** Las propiedades cerca del Aeropuerto Internacional Las Americas (SDQ) o Cibao (STI) requieren autorizacion del IDAC. Listings en zonas tipo Boca Chica (cerca de SDQ) frecuentemente tienen este requisito.",
          "**Cortesia con vecinos.** En condominios y desarrollos, antes de volar avisamos a la administracion. Esto evita reportes de drone sospechoso y mejora el acceso para futuras sesiones en el mismo desarrollo.",
          "**Imagen de personas.** Si una toma aerea muestra personas identificables (no en bulto), pedimos consentimiento. Para listings inmobiliarios esto raramente es un problema (sesion en propiedad vacia), pero en condominios con piscina compartida si puede ser.",
          "**Comerciales vs personales.** El uso comercial del material (publicar el listing en portal pagado, en Facebook Ads) es uso comercial. Esto no requiere permiso adicional si el shoot fue legitimo, pero algunas propiedades (condominios privados, gated communities) pueden tener clausulas en el reglamento sobre uso comercial de imagenes — verifica antes."
        ]
      },
      {
        heading: "Mejor temporada para shoots inmobiliarios en RD",
        body: [
          "**Diciembre a abril: temporada perfecta.** Cielos despejados, agua del Caribe maximo turquesa (en propiedades costeras), vegetacion verde despues de las lluvias de octubre. Si tu propiedad esta lista para listarse y NO tienes urgencia, espera a esta ventana — el material sale mejor.",
          "**Mayo a junio: muy bueno todavia.** Cielos generalmente despejados, ocasional chubasco en la tarde (volamos en la manana). Buena ventana para shoots.",
          "**Julio a septiembre: temporada de huracanes — precaucion.** Cielos frecuentemente nublados, lluvias breves pero intensas, agua del Caribe menos turquesa por sedimento de los rios. Si listing es URGENTE, se vuela igual — pero el material no sera el mejor. Para inmobiliaria premium, esperar.",
          "**Octubre a noviembre: transicion.** Octubre es el mes mas lluvioso del ano en RD. Noviembre comienza a estabilizarse. Si la propiedad es high-end, evitar octubre completamente.",
          "**Hora del dia.** Para fotografia inmobiliaria aerea, las mejores horas son: 7-10 AM (luz lateral, sombras cortas, cielo limpio) y 4-6 PM (luz dorada, golden hour). Evitar 11 AM - 3 PM (sol directo, sombras duras, agua del mar refleja blanco). Para sunset specifico, planear con 30 minutos de buffer — el atardecer dura poco."
        ]
      },
      {
        heading: "Integracion con fotografia inmobiliaria a nivel suelo",
        body: [
          "**El drone NO reemplaza la fotografia interior y exterior a nivel suelo.** Son complementarios. El cliente ideal compra el set completo: ground photography (interior, exterior, detalles, amenidades) + aerial drone (entorno, escala, contexto, vista). Cualquiera de los dos solo no genera el mismo impacto.",
          "**Quien cubre que.** En Babula Shots, [fotografia inmobiliaria de Santo Domingo](https://inmobiliaria.babulashotsrd.com/) cubre el ground level — interior detallado, exterior arquitectonico, amenidades, fotografia HDR para iluminacion balanceada. El servicio de drone (este servicio) cubre el aerial. Para clientes que quieren ambos, ofrecemos paquetes combinados con tarifa reducida.",
          "**Coordinacion de luz.** Ground photography preferentemente al medio dia (luz uniforme, interior bien iluminado por ventanas). Drone aerial preferentemente al amanecer o atardecer. Para una sesion de un dia completo, optimizamos: drone temprano (7-9 AM), ground photography medio dia (10 AM - 2 PM), drone sunset (5-6 PM).",
          "**Entregables coordinados.** Para listings premium, entregamos un paquete unificado: 30 fotos ground + 15 fotos aereas + 1 video reel de 60 segundos combinando ambos + masters separados. Esto le da al broker un set listo para portal, social media y presentaciones de cliente.",
          "**Pricing.** Combinar el servicio de drone con ground photography da un descuento del 15-20% sobre contratar los dos separados. Hablamos del paquete combinado en la cotizacion."
        ]
      }
    ],
    faq: [
      {
        q: "Cuanto tiempo toma un shoot aereo inmobiliario tipico?",
        a: "Para una propiedad estandar (villa, condo, lot urbano): 60-90 minutos en sitio. Esto incluye: 15 minutos de setup y verificacion de zona, 30-45 minutos de vuelo efectivo, 15 minutos de revision de tomas y backup en sitio. Para propiedades grandes (finca, hotel, complejo de varias unidades): 2-4 horas. Para shoots multi-altura (simulacion de vista desde varios pisos en pre-venta): 2-3 horas."
      },
      {
        q: "En cuanto tiempo recibo las fotos editadas?",
        a: "Tiempo estandar: 5-7 dias habiles desde el shoot. Para entregas urgentes (listing que sale al portal el lunes y shoot fue el viernes): podemos entregar en 24-48 horas con surcharge de urgencia. Para video editado el plazo es 7-10 dias habiles (el video toma mas que la edicion de foto)."
      },
      {
        q: "Trabajan con propiedades fuera de Santo Domingo y Punta Cana?",
        a: "Si. Cubrimos toda la RD: Punta Cana (Bavaro, Cap Cana, Uvero Alto), Santo Domingo (todos los sectores), La Romana (Casa de Campo), Las Terrenas, Cabarete, Puerto Plata, Juan Dolio, Boca Chica, Constanza, Jarabacoa. Para propiedades a mas de 100 km de Santo Domingo o Punta Cana puede aplicar costo de transporte. Cotiza con ubicacion exacta para precio."
      },
      {
        q: "Que pasa si el dia del shoot llueve?",
        a: "Reprogramamos sin penalidad. La regla en Babula Shots: si las condiciones no permiten un shoot de calidad, no se vuela. Reprogramamos para el siguiente dia disponible con buen clima. Si la propiedad tiene urgencia extrema (ej. cliente extranjero en RD solo 3 dias), trabajamos con la ventana de mejor clima dentro de ese plazo — pero comunicamos honestamente si las condiciones no son ideales."
      },
      {
        q: "El broker puede usar el material para Facebook Ads y MLS?",
        a: "Si. El uso comercial (publicacion en MLS, Facebook Ads, Instagram Ads, brochures, presentaciones) esta incluido en el paquete. La licencia es para uso del cliente que contrato — broker, agente, propietario. No es transferible a terceros (ej. otro broker no puede usar el material que pago el primer broker). Para licencias multi-broker o uso editorial mas amplio (revista, libro), cotizamos uso aparte."
      }
    ],
    related: [
      {
        href: "/dron-inmobiliario-arquitectura/",
        label: "Drone para inmobiliaria y arquitectura",
        description: "Servicio principal: paquetes, deliverables, casos de uso para listings y arquitectura."
      },
      {
        href: "/dron-punta-cana/",
        label: "Drone en Punta Cana",
        description: "Cobertura especifica para Punta Cana — resorts, villas, golf, marina."
      },
      {
        href: "/dron-cap-cana/",
        label: "Drone en Cap Cana",
        description: "Cobertura para Cap Cana — villas de lujo, golf, Juanillo Beach, marina."
      },
      {
        href: "/dron-santo-domingo/",
        label: "Drone en Santo Domingo",
        description: "Cobertura urbana — torres, condominios, edificios corporativos."
      },
      {
        href: "/precios/",
        label: "Precios y paquetes",
        description: "Tarifas publicadas para listados esenciales, premium y fincas de lujo."
      }
    ],
    ogImageAlt: "Drone para inmobiliaria en Republica Dominicana — estrategia aerea Babula Shots",
    en: {
      enSlug: "drone-real-estate-photography-dominican-republic",
      title:
        "Drone Real Estate Photography in the Dominican Republic: Aerial Strategy to Sell Properties — Babula Shots",
      metaDescription:
        "Professional guide to drone real estate in DR: why aerial shots sell faster. Scenarios for oceanfront villas (Cap Cana, Eden Roc), golf-front (Punta Espada, Casa de Campo), Santo Domingo condos and Airbnb. Deliverables, regulation and season.",
      h1: "Drone Real Estate Photography in the Dominican Republic: Aerial Strategy to Sell Properties",
      eyebrow: "Drone Real Estate · Aerial Strategy",
      introParagraphs: [
        "Properties with aerial material sell faster. Not opinion — it's what we see every week working with real estate agents, brokers and developers in the Dominican Republic. An oceanfront villa listing with 4 phone photos sits 90 days on the portal. The same villa with a professional photography set + 8 aerial shots + a 30-second clip moves in 30-45 days. The difference isn't magic — it's information. Drone gives the buyer something ground-level shooting can never give: the surroundings, the scale, the real location.",
        "At Babula Shots we cover properties across the DR — oceanfront villas in Cap Cana and Eden Roc, golf-front properties at Punta Espada and Casa de Campo Teeth of the Dog, high-rise towers in Anacaona and Mirador Sur in Santo Domingo, rural houses in Constanza and Jarabacoa, Airbnb in Bavaro and Las Terrenas. This guide explains why aerial drone is the most efficient sales tool of 2026, the scenarios where it has most impact, the deliverables you need to ask for, and the regulation your agent or broker typically doesn't know.",
        "For full real estate marketing results, drone combines with [ground-level real estate photography](https://inmobiliaria.babulashotsrd.com/). This guide focuses on the aerial component — the part most agents do badly or skip entirely."
      ],
      sections: [
        {
          heading: "Why aerial shots sell faster (the psychology)",
          body: [
            "**The buyer needs spatial confidence.** When a buyer looks at a property online, their primary question is not 'what's the kitchen like' — that comes later. Their first question is: 'where is it?' and 'what's around?'. An 80-meter nadir shot answers both in 2 seconds: here's the villa, sea in front, golf course to the side, resort street behind. Ground photography CANNOT answer this. When the buyer can't answer these questions quickly, they abandon the listing.",
            "**Scale = perceived value.** An aerial of an 800m2 villa shows the complete lot: garden, pool, distance to the neighboring property, lot depth, access. The buyer visually processes that this is a large property. The same villa photographed only with room shots can be perceived as small — because there's no reference.",
            "**Immediate context (amenities).** If your villa is 200m from Juanillo Beach, the aerial proves it. If your Anacaona condo has a Malecon view to the Caribbean Sea, the 100m aerial proves it. If your rural house in Constanza is surrounded by mountains, the aerial proves it. Without aerial, the buyer has to TRUST what the description says. With aerial, they SEE it.",
            "**Differentiation on the MLS portal.** On portals like Remax, Century 21, dr1, Encuentra24, ZonaPropiedad, properties appear in thumbnail grid. A property with an aerial thumbnail stands out immediately over properties with a living-room thumbnail. Click-through rate goes up. More clicks = more leads.",
            "**Market studies.** Multiple NAR (National Association of Realtors) studies report that listings with aerial photography sell 68% faster than listings without it. In the DR we don't have official statistics, but the pattern is similar — agents who invest in drone close faster."
          ]
        },
        {
          heading: "Scenario 1: oceanfront villa (Cap Cana, Eden Roc, Punta Cana Village)",
          body: [
            "**What it is:** US$1.5-15 million villa, fronting the sea, generally inside a luxury development (Cap Cana Heritage School, Punta Cana Resort & Club, Roco Ki).",
            "**Why drone is critical here:** the property value IS in the surroundings. A US$8 million villa without aerial = low sale probability. With aerial showing: exact distance to the sea, view from second-floor balcony, relationship with neighboring villas, pedestrian access to the beach = buyer understands what they're paying for.",
            "**Shots we recommend:** (1) nadir of the complete property from 60m showing lot + pool + garden. (2) lateral reveal from patio toward sea at 30m — the most sales-driving moment. (3) view from specific altitude (15m, 25m, 35m) to simulate view from first floor, second floor, terrace. (4) wide context at 100m showing villa + Juanillo Beach + golf course. (5) sunset shot looking toward sea with sun descending laterally.",
            "**Frequency:** a single 60-90 minute session covers everything. If the property goes to market by season (winter season), re-shooting at the start of each season refreshes the material.",
            "**Typical client:** luxury broker (Sothebys International, Christies, Engel & Volkers), Provaltur agents, EDR Property, private owners of premium villa."
          ]
        },
        {
          heading: "Scenario 2: golf-front property (Punta Espada, Casa de Campo Teeth of the Dog)",
          body: [
            "**What it is:** villa, house or condo with direct view or fairway frontage on championship golf course. Punta Espada (Cap Cana — Jack Nicklaus design), Corales (Punta Cana Resort & Club), Teeth of the Dog (Casa de Campo — Pete Dye, top 25 worldwide), Dye Fore (Casa de Campo), La Cana (Punta Cana Resort & Club).",
            "**Why drone is critical:** the golf-front buyer is buying the course, not just the house. They need to see: which hole, what view, how much fairway frontage, whether there's tree obstruction, whether the tee box is visible. Ground-level camera CANNOT show the golf course with the property — it will always be obstructed by trees or neighboring houses.",
            "**Shots we recommend:** (1) nadir of the lot showing garden + transition to fairway. (2) wide at 40m showing villa + hole green + bunker + adjacent fairway. (3) reveal from back patio toward golf course at 25m. (4) shot identifying the specific hole (signature view of hole 17 at Punta Espada, hole 5 at Teeth of the Dog facing the sea). (5) sunrise shot — golf looks spectacular with lateral first light.",
            "**Frequency:** one session. For courses like Teeth of the Dog where the Caribbean Sea view is part of the value, consider a shoot on clear (not cloudy) day.",
            "**Typical client:** Casa de Campo villa owners (a very specific market — private owners, not many local brokers), luxury brokers covering Cap Cana / Punta Cana Resort & Club, new-phase pre-sale developers."
          ]
        },
        {
          heading: "Scenario 3: high-rise tower in Santo Domingo (Anacaona, Mirador Sur, Naco)",
          body: [
            "**What it is:** condo in 15-30 floor tower, generally in Sector Anacaona / Mirador Sur (with view of the park and the Caribbean), Piantini, Naco, Bella Vista, or Polígono Central.",
            "**Why drone is critical:** the condo buyer pays for the VIEW. If buying floor 18 in Anacaona, they're paying for height and Caribbean Sea view. Living-room photo doesn't answer the view question. Aerial photo from the exact altitude of the condo (18m x 3m per floor = 54m) answers the question exactly.",
            "**Shots we recommend:** (1) view from the condo altitude simulating real view (this is the MOST valuable — buyer understands what they're getting). (2) wide context at 80m showing tower + adjacent amenities + Malecon + Mirador Sur park. (3) frontal shot of the tower from the air — shows construction quality, facade. (4) lateral shot showing neighboring towers and skyline. (5) if the tower is near the Caribbean, sunset shot with the sun descending over the sea (in Santo Domingo the sun sets toward the sea — perfect).",
            "**Frequency:** one session. If the tower is in pre-sale, consider shoots at several different floors to create distinct simulations (view from floor 10, floor 18, floor 25 — each with rate).",
            "**Typical client:** tower developers (Karim, Sajud Group, Edificas), Santo Domingo Coldwell Banker brokers, independent agents with towers in portfolio."
          ]
        },
        {
          heading: "Scenario 4: Airbnb / vacation rental (Bavaro, Las Terrenas, Cabarete)",
          body: [
            "**What it is:** investment property / vacation rental. Apartment in resort condominium in Bavaro, small villa in Las Terrenas, kite-surf house in Cabarete, rural finca in Jarabacoa.",
            "**Why drone is critical:** Airbnb / Booking booking decision is made in 30 seconds looking at the first photos. The aerial photo is the FIRST one a smart host uploads. It makes the listing stand out over the 200 Bavaro listings that only have room photos.",
            "**Shots we recommend:** (1) aerial wide showing property + condominium amenities (pool, garden, BBQ area). (2) reveal from patio toward sea or toward mountain (depends on setting). (3) context at 60m showing distance to beach (Bavaro: '5 minutes walking'; Cabarete: '50m to kitebeach'). (4) vertical shots (9:16) for use in host's Instagram/TikTok reel — IMPORTANT for vacation rentals that depend on social media for visibility.",
            "**Frequency:** one session at the start (for the listing), considering re-shoot every 12-18 months if the property is updated.",
            "**Typical client:** private Airbnb owners, property managers (TRS Property, Marriott Vacation Club), investors with multiple properties in portfolio."
          ]
        },
        {
          heading: "What deliverables you should ask for (the complete set)",
          body: [
            "**Edited photos (15-50 depending on package).** High-resolution JPG (4K x 6K minimum). Lightroom editing — color correction, exposure, grading, removal of distracting visual elements (cables, trash, vehicles).",
            "**Short video clip (30-60 seconds).** Edited, with generic royalty-free music. For MLS portal (many accept video) and for social media use. 4K resolution with high bitrate.",
            "**ProRes 4K masters (optional).** For clients who want to produce their own reel (marketing agencies, production companies). Large file (several GB), delivered via Google Drive or WeTransfer.",
            "**Portal-format crops.** Some portals require specific format (Encuentra24 prefers 4:3, Remax 16:9). We deliver cropped versions for each portal.",
            "**WhatsApp-format vertical (9:16).** This is new in 2026 and highly demanded. Most leads in DR come via WhatsApp — asking the client to open a horizontal photo in WhatsApp is friction. A vertical photo (9:16) optimized for mobile reduces that friction. Same principle applies for Instagram Stories and TikTok.",
            "**Consideration: animated drone reveal (GIF / short video).** For premium listings, the animated reveal (rises from patio to sea at 25m in 6 seconds) is reused for Facebook/Instagram Ads — you pay for the ad, but the original material is already produced."
          ]
        },
        {
          heading: "Regulatory considerations for real estate",
          body: [
            "**Private property.** Flying over private property that is NOT the listed property requires neighboring owner's consent. Especially in Cap Cana and Casa de Campo where villas are close together. For real estate listings, we avoid flying over neighboring properties unless we have HOA or development administration authorization.",
            "**Restricted airspace.** Properties near Las Americas International Airport (SDQ) or Cibao (STI) require IDAC authorization. Listings in zones like Boca Chica (close to SDQ) frequently have this requirement.",
            "**Neighbor courtesy.** In condominiums and developments, before flying we notify administration. This avoids suspicious-drone reports and improves access for future sessions in the same development.",
            "**Image of people.** If an aerial shot shows identifiable people (not in bulk), we ask for consent. For real estate listings this is rarely a problem (shoot on empty property), but in condominiums with shared pool it can be.",
            "**Commercial vs personal.** Commercial use of material (publishing the listing on paid portal, on Facebook Ads) is commercial use. This doesn't require additional permit if the shoot was legitimate, but some properties (private condominiums, gated communities) may have clauses in regulations about commercial use of images — verify before."
          ]
        },
        {
          heading: "Best season for real estate shoots in DR",
          body: [
            "**December to April: perfect season.** Clear skies, maximum turquoise Caribbean water (on coastal properties), green vegetation after October rains. If your property is ready to list and you don't have urgency, wait for this window — material comes out best.",
            "**May to June: still very good.** Generally clear skies, occasional afternoon shower (we fly in the morning). Good window for shoots.",
            "**July to September: hurricane season — caution.** Frequently cloudy skies, brief but intense rains, less turquoise Caribbean water from river sediment. If listing is URGENT, we fly anyway — but material won't be the best. For premium real estate, wait.",
            "**October to November: transition.** October is the rainiest month of the year in DR. November starts to stabilize. If the property is high-end, avoid October completely.",
            "**Time of day.** For real estate aerial photography, the best hours are: 7-10 AM (lateral light, short shadows, clean sky) and 4-6 PM (golden light, golden hour). Avoid 11 AM - 3 PM (direct sun, hard shadows, sea water reflects white). For specific sunset, plan with 30-minute buffer — sunset is short."
          ]
        },
        {
          heading: "Integration with ground-level real estate photography",
          body: [
            "**Drone does NOT replace ground-level interior and exterior photography.** They're complementary. The ideal client buys the complete set: ground photography (interior, exterior, details, amenities) + aerial drone (surroundings, scale, context, view). Either one alone doesn't generate the same impact.",
            "**Who covers what.** At Babula Shots, [Santo Domingo real estate photography](https://inmobiliaria.babulashotsrd.com/) covers ground level — detailed interior, architectural exterior, amenities, HDR photography for balanced lighting. The drone service (this service) covers aerial. For clients who want both, we offer combined packages at reduced rate.",
            "**Light coordination.** Ground photography preferably at midday (uniform light, well-lit interior through windows). Drone aerial preferably at sunrise or sunset. For a one-day session, we optimize: drone early (7-9 AM), ground photography midday (10 AM - 2 PM), drone sunset (5-6 PM).",
            "**Coordinated deliverables.** For premium listings, we deliver a unified package: 30 ground photos + 15 aerial photos + 1 60-second video reel combining both + separate masters. This gives the broker a ready set for portal, social media and client presentations.",
            "**Pricing.** Combining drone service with ground photography gives a 15-20% discount over hiring the two separately. We discuss the combined package in the quote."
          ]
        }
      ],
      faq: [
        {
          q: "How long does a typical real estate aerial shoot take?",
          a: "For a standard property (villa, condo, urban lot): 60-90 minutes on site. This includes: 15 minutes of setup and zone verification, 30-45 minutes of effective flight, 15 minutes of shot review and on-site backup. For large properties (finca, hotel, multi-unit complex): 2-4 hours. For multi-altitude shoots (view simulation from various floors in pre-sale): 2-3 hours."
        },
        {
          q: "How soon do I receive the edited photos?",
          a: "Standard time: 5-7 business days from the shoot. For urgent delivery (listing goes to portal on Monday and shoot was Friday): we can deliver in 24-48 hours with urgency surcharge. For edited video the timeline is 7-10 business days (video takes more than photo editing)."
        },
        {
          q: "Do you work with properties outside Santo Domingo and Punta Cana?",
          a: "Yes. We cover all of the DR: Punta Cana (Bavaro, Cap Cana, Uvero Alto), Santo Domingo (all sectors), La Romana (Casa de Campo), Las Terrenas, Cabarete, Puerto Plata, Juan Dolio, Boca Chica, Constanza, Jarabacoa. For properties more than 100 km from Santo Domingo or Punta Cana, transport cost may apply. Quote with exact location for price."
        },
        {
          q: "What happens if it rains on the shoot day?",
          a: "We reschedule without penalty. The rule at Babula Shots: if conditions don't allow a quality shoot, we don't fly. We reschedule for the next available day with good weather. If the property has extreme urgency (e.g., foreign client in DR only 3 days), we work with the best-weather window within that timeframe — but we communicate honestly if conditions aren't ideal."
        },
        {
          q: "Can the broker use the material for Facebook Ads and MLS?",
          a: "Yes. Commercial use (publication on MLS, Facebook Ads, Instagram Ads, brochures, presentations) is included in the package. The license is for the contracting client's use — broker, agent, owner. It's not transferable to third parties (e.g., another broker can't use the material the first broker paid for). For multi-broker licenses or broader editorial use (magazine, book), we quote use separately."
        }
      ],
      related: [
        {
          href: "/en/real-estate-architecture-drone/",
          label: "Drone for real estate and architecture",
          description: "Main service: packages, deliverables, use cases for listings and architecture."
        },
        {
          href: "/en/drone-punta-cana/",
          label: "Drone in Punta Cana",
          description: "Specific coverage for Punta Cana — resorts, villas, golf, marina."
        },
        {
          href: "/en/drone-cap-cana/",
          label: "Drone in Cap Cana",
          description: "Coverage for Cap Cana — luxury villas, golf, Juanillo Beach, marina."
        },
        {
          href: "/en/drone-santo-domingo/",
          label: "Drone in Santo Domingo",
          description: "Urban coverage — towers, condominiums, corporate buildings."
        },
        {
          href: "/en/prices/",
          label: "Prices and packages",
          description: "Published rates for essential, premium and luxury estate listings."
        }
      ],
      ogImageAlt: "Drone for real estate in Dominican Republic — Babula Shots aerial strategy"
    }
  }
];

export const articles: Article[] = ARTICLES;

const articleBySlug = new Map<string, Article>(ARTICLES.map((a) => [a.slug, a]));
const articleByEnSlug = new Map<string, Article>(
  ARTICLES.filter((a) => a.en?.enSlug).map((a) => [a.en!.enSlug, a])
);

export function findArticle(slug: string): Article | undefined {
  return articleBySlug.get(slug);
}

export function findArticleByEnSlug(enSlug: string): Article | undefined {
  return articleByEnSlug.get(enSlug);
}

export const articlesWithEn: Article[] = ARTICLES.filter((a) => Boolean(a.en?.enSlug));
