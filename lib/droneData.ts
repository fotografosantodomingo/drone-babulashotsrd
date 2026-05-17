export type Locale = "es" | "en";
export type PageType = "service" | "city" | "guide" | "pricing";

export type DronePage = {
  slug: string;
  enSlug: string;
  type: PageType;
  title: string;
  enTitle: string;
  description: string;
  enDescription: string;
  h1: string;
  enH1: string;
  intro: string;
  enIntro: string;
  audience: string;
  enAudience: string;
  deliverables: string[];
  enDeliverables: string[];
  useCases: string[];
  enUseCases: string[];
  localNotes: string[];
  enLocalNotes: string[];
  faq: Array<{ q: string; a: string; enQ: string; enA: string }>;
  related: string[];
  image: string;
  area?: string;
  province?: string;
  priority?: number;
  localContext?: string[];
  enLocalContext?: string[];
  sisterCities?: string[];
};

export const siteUrl = "https://dron.babulashotsrd.com";
export const phone = "809 720 95 47";
export const phoneE164 = "18097209547";
export const bookingUrl = "https://dronebabulashots.setmore.com";
export const quoteUrl = "https://babulashotsrd.com/";
export const pricingSourceUrl = "https://www.fotografosantodomingo.com/es/services/real-estate-drone-photography";
export const mainBrandUrl = "https://babulashotsrd.com";
export const bodaUrl = "https://boda.babulashotsrd.com";
export const inmobiliariaUrl = "https://inmobiliaria.babulashotsrd.com";
export const droneUrl = siteUrl;
export const santoDomingoHubUrl = "https://www.fotografosantodomingo.com";
export const email = "info@babulashotsrd.com";
export const niche = {
  label: "Drone",
  enLabel: "Drone",
  whatsappContext: "Hola, vengo de la web de Drone Babula Shots."
};

export const dronePackages = [
  {
    name: "Listado Esencial",
    enName: "Essential Listing",
    price: "RD$11,900 / aprox. US$200",
    numericPrice: 11900,
    duration: "90 min",
    bestFor: "Fotos interiores y exteriores para un listado residencial",
    enBestFor: "Interior and exterior photos for a residential listing",
    includes: ["Hasta 90 min en sitio", "Hasta 200m2 de propiedad", "20 fotos editadas", "Cobertura interior + exterior"],
    enIncludes: ["Up to 90 minutes on site", "Up to 200 sqm property", "20 edited photos", "Interior + exterior coverage"]
  },
  {
    name: "Propiedad Premium",
    enName: "Premium Property",
    price: "RD$23,800 / aprox. US$400",
    numericPrice: 23800,
    duration: "180 min",
    bestFor: "Interior, exterior y drone para propiedades hasta 500m2",
    enBestFor: "Interior, exterior and drone for properties up to 500 sqm",
    includes: ["Hasta 3h en sitio", "Hasta 500m2", "35 fotos editadas", "Fotos aereas con drone"],
    enIncludes: ["Up to 3 hours on site", "Up to 500 sqm", "35 edited photos", "Drone aerial photos"]
  },
  {
    name: "Finca de Lujo",
    enName: "Luxury Estate",
    price: "RD$35,700 / aprox. US$600",
    numericPrice: 35700,
    duration: "240 min",
    bestFor: "Cobertura completa con video 4K, drone y tour Matterport",
    enBestFor: "Full coverage with 4K drone video and Matterport tour",
    includes: ["Hasta 4h en sitio", "Tamano ilimitado", "50+ fotos editadas", "Video aereo 4K con drone"],
    enIncludes: ["Up to 4 hours on site", "Unlimited property size", "50+ edited photos", "4K aerial drone video"]
  },
  {
    name: "Cotizacion Custom",
    enName: "Custom Quote",
    price: "A medida",
    numericPrice: undefined,
    duration: "Variable",
    bestFor: "Inspecciones, termografia, fotogrametria, agricultura, industria y obras",
    enBestFor: "Inspections, thermal work, photogrammetry, agriculture, industry and construction",
    includes: ["Brief tecnico", "Plan de vuelo", "Permisos segun zona", "Entregables por objetivo"],
    enIncludes: ["Technical brief", "Flight plan", "Permits by area", "Deliverables by objective"]
  }
];

const baseFaq = (place: string) => [
  {
    q: `Cuanto cuesta un servicio de dron en ${place}?`,
    a: `Los paquetes publicados inician en RD$11,900 para listados esenciales, RD$23,800 para propiedad premium y RD$35,700 para finca de lujo. Inspecciones, mapas, termografia o proyectos tecnicos se cotizan segun objetivo, permisos, riesgo y entregables.`,
    enQ: `How much does a drone service cost in ${place}?`,
    enA: `Published packages start at RD$11,900 for essential listings, RD$23,800 for premium properties and RD$35,700 for luxury estates. Inspections, maps, thermal work and technical projects are quoted by objective, permits, risk and deliverables.`
  },
  {
    q: `Como se reserva un piloto de dron en ${place}?`,
    a: `Envia ubicacion, fecha, tipo de proyecto, altura aproximada, entregables y si necesitas foto, video, 360, mapa, medicion o inspeccion. Confirmamos viabilidad, clima, permisos y ventana de vuelo antes de reservar.`,
    enQ: `How do I book a drone pilot in ${place}?`,
    enA: `Send location, date, project type, approximate height, deliverables and whether you need photo, video, 360, mapping, measurement or inspection. We confirm feasibility, weather, permits and flight window before booking.`
  }
];

export const servicePages: DronePage[] = [
  {
    slug: "dron-inmobiliario-arquitectura",
    enSlug: "real-estate-architecture-drone",
    type: "service",
    title: "Dron inmobiliario y arquitectura en Republica Dominicana | Babula Shots",
    enTitle: "Real estate and architecture drone in Dominican Republic | Babula Shots",
    description: "Foto, video, vistas 360, simulacion de vista y contenido aereo para propiedades, torres, villas, proyectos y arquitectura en RD.",
    enDescription: "Drone photo, video, 360 views, view simulation and aerial media for properties, towers, villas, developments and architecture in DR.",
    h1: "Dron para inmobiliaria y arquitectura en Republica Dominicana",
    enH1: "Drone for real estate and architecture in Dominican Republic",
    intro: "Creamos contenido aereo para vender, presentar y documentar propiedades con precision visual: fotos de ubicacion, video 4K, vistas desde alturas especificas, panoramas 360 y material para desarrolladores.",
    enIntro: "We create aerial media to sell, present and document properties with visual precision: location photos, 4K video, specific-height views, 360 panoramas and developer-ready assets.",
    audience: "Agentes, desarrolladores, arquitectos, constructoras, hoteles, villas, Airbnb hosts e inversionistas que necesitan explicar entorno, escala, vista y acceso.",
    enAudience: "Agents, developers, architects, builders, hotels, villas, Airbnb hosts and investors who need to explain setting, scale, view and access.",
    deliverables: ["Fotos aereas editadas", "Video drone 4K", "Panoramas 360", "Simulacion de vista por altura", "Material para brochures y landing pages"],
    enDeliverables: ["Edited aerial photos", "4K drone video", "360 panoramas", "Height-based view simulation", "Media for brochures and landing pages"],
    useCases: ["Villas y apartamentos premium", "Torres en preventa", "Proyectos en construccion", "Hoteles y resorts", "Casas de campo y solares"],
    enUseCases: ["Premium villas and apartments", "Pre-sale towers", "Construction projects", "Hotels and resorts", "Country homes and land"],
    localNotes: ["En zonas turisticas como Punta Cana y Cap Cana el drone debe mostrar playa, acceso, amenidades y distancia visual al entorno.", "En Santo Domingo la prioridad suele ser altura, skyline, orientacion del balcon y relacion con avenidas principales.", "Para desarrolladores podemos capturar alturas especificas para simular vista desde pisos futuros."],
    enLocalNotes: ["In tourism areas like Punta Cana and Cap Cana, drone media should show beach, access, amenities and visual distance to the surroundings.", "In Santo Domingo, priority is often height, skyline, balcony orientation and relation to main avenues.", "For developers, we can capture specific heights to simulate views from future floors."],
    faq: baseFaq("Republica Dominicana"),
    related: ["precios-servicio-dron-republica-dominicana", "dron-construccion-ingenieria", "dron-punta-cana"],
    image: "/images/drone/drone-inmobiliario-republica-dominicana.webp",
    priority: 1
  },
  {
    slug: "inspecciones-dron-industria-energia",
    enSlug: "industrial-energy-drone-inspections",
    type: "service",
    title: "Inspecciones con dron para industria y energia | Babula Shots",
    enTitle: "Drone inspections for industry and energy | Babula Shots",
    description: "Inspecciones visuales con dron para paneles solares, techos, lineas, estructuras, almacenes y activos industriales en Republica Dominicana.",
    enDescription: "Visual drone inspections for solar panels, roofs, lines, structures, warehouses and industrial assets in Dominican Republic.",
    h1: "Inspecciones con dron para industria y energia",
    enH1: "Drone inspections for industry and energy",
    intro: "Ayudamos a documentar activos sin detener operaciones ni exponer equipos a riesgos innecesarios. El objetivo es entregar evidencia visual clara para mantenimiento, seguros, seguridad y toma de decisiones.",
    enIntro: "We help document assets without stopping operations or exposing teams to unnecessary risk. The goal is clear visual evidence for maintenance, insurance, safety and decision-making.",
    audience: "Empresas industriales, operadores solares, gerentes de planta, almacenes, hoteles, administradores de edificios y equipos de mantenimiento.",
    enAudience: "Industrial companies, solar operators, plant managers, warehouses, hotels, building managers and maintenance teams.",
    deliverables: ["Fotos de detalle", "Video de inspeccion", "Registro por zona", "Reporte visual", "Cotizacion para termografia o zoom segun necesidad"],
    enDeliverables: ["Detail photos", "Inspection video", "Zone-by-zone record", "Visual report", "Thermal or zoom quote when needed"],
    useCases: ["Paneles solares", "Techos industriales", "Fachadas altas", "Lineas y estructuras", "Auditorias de mantenimiento"],
    enUseCases: ["Solar panels", "Industrial roofs", "Tall facades", "Lines and structures", "Maintenance audits"],
    localNotes: ["Para inspecciones solares buscamos patrones visuales, suciedad, sombras, danos fisicos y areas que ameritan revision tecnica.", "Cuando el proyecto requiere termografia o zoom especifico se cotiza equipo y metodologia aparte.", "La seguridad de vuelo se define antes de entrar a plantas, zonas electricas o areas con personas."],
    enLocalNotes: ["For solar inspections we look for visual patterns, dirt, shadows, physical damage and areas requiring technical review.", "When a project requires thermal imaging or specific zoom equipment, gear and methodology are quoted separately.", "Flight safety is defined before entering plants, electrical zones or areas with people."],
    faq: baseFaq("zonas industriales de RD"),
    related: ["dron-construccion-ingenieria", "precios-servicio-dron-republica-dominicana", "dron-santo-domingo"],
    image: "/images/drone/drone-arquitectura-inspeccion.webp"
  },
  {
    slug: "dron-construccion-ingenieria",
    enSlug: "construction-engineering-drone",
    type: "service",
    title: "Dron para construccion e ingenieria en Republica Dominicana",
    enTitle: "Drone for construction and engineering in Dominican Republic",
    description: "Seguimiento de obra, ortomosaicos, documentacion de avance, volumenes y fotos tecnicas con dron para construccion.",
    enDescription: "Construction progress, orthomosaics, progress documentation, volumes and technical drone photos for construction.",
    h1: "Dron para construccion e ingenieria",
    enH1: "Drone for construction and engineering",
    intro: "Documentamos obras desde el aire para que equipos de construccion, ingenieria, inversionistas y ventas tengan una lectura clara del avance, logistica y estado real del sitio.",
    enIntro: "We document worksites from the air so construction, engineering, investor and sales teams have a clear view of progress, logistics and site condition.",
    audience: "Constructoras, ingenieros, arquitectos, supervisores de obra, desarrolladores e inversionistas que necesitan evidencia visual periodica.",
    enAudience: "Builders, engineers, architects, site supervisors, developers and investors who need periodic visual evidence.",
    deliverables: ["Fotos de avance", "Video de obra", "Ortomosaico bajo cotizacion", "Medicion de volumen bajo cotizacion", "Archivo por fecha"],
    enDeliverables: ["Progress photos", "Worksite video", "Orthomosaic by quote", "Volume measurement by quote", "Files by date"],
    useCases: ["Progreso semanal o mensual", "Inventario de materiales", "Haulage y movimientos de tierra", "Reporte para inversionistas", "Marketing de proyecto"],
    enUseCases: ["Weekly or monthly progress", "Material inventory", "Earthworks and stockpiles", "Investor reporting", "Project marketing"],
    localNotes: ["En Santo Domingo y Santiago las obras verticales necesitan consistencia de angulo para comparar avance.", "En zonas turisticas el seguimiento tambien sirve para ventas, preventa y redes.", "Para volumenes se define precision esperada, puntos de control y formato de entrega."],
    enLocalNotes: ["In Santo Domingo and Santiago, vertical construction needs consistent angles to compare progress.", "In tourism areas, progress media also supports sales, pre-sales and social media.", "For volumes we define expected accuracy, control points and delivery format."],
    faq: baseFaq("proyectos de construccion"),
    related: ["inspecciones-dron-industria-energia", "dron-inmobiliario-arquitectura", "dron-santiago"],
    image: "/images/drone/fotografia-dron-santo-domingo.webp"
  },
  {
    slug: "dron-agricultura-precision",
    enSlug: "precision-agriculture-drone",
    type: "service",
    title: "Dron para agricultura de precision en Republica Dominicana",
    enTitle: "Drone for precision agriculture in Dominican Republic",
    description: "Mapeo, monitoreo visual, documentacion de danos, conteo y apoyo agricola con dron para fincas y cultivos.",
    enDescription: "Mapping, visual monitoring, damage documentation, counting and agricultural drone support for farms and crops.",
    h1: "Dron para agricultura de precision",
    enH1: "Drone for precision agriculture",
    intro: "El dron ayuda a revisar fincas, cultivos y terrenos con una vision rapida que permite priorizar zonas, documentar danos y planificar acciones con menos recorridos manuales.",
    enIntro: "Drone helps review farms, crops and land with a fast view that supports prioritization, damage documentation and planning with fewer manual inspections.",
    audience: "Productores, administradores de fincas, aseguradoras, agronomos y empresas que necesitan evidencia visual de terreno o cultivo.",
    enAudience: "Growers, farm managers, insurers, agronomists and companies needing visual evidence of land or crops.",
    deliverables: ["Fotos aereas de finca", "Video de recorrido", "Mapa visual", "Documentacion de danos", "Cotizacion para indices o termografia"],
    enDeliverables: ["Aerial farm photos", "Walkthrough video", "Visual map", "Damage documentation", "Quote for indices or thermal imaging"],
    useCases: ["Estimacion de danos", "Revision de accesos", "Monitoreo de areas", "Planificacion de riego", "Documentacion para seguros"],
    enUseCases: ["Damage estimation", "Access review", "Area monitoring", "Irrigation planning", "Insurance documentation"],
    localNotes: ["En zonas agricolas del Cibao la ventana de vuelo debe considerar viento, humedad y acceso a parcelas.", "Para seguros se prioriza evidencia clara, fecha, ubicacion y recorrido completo.", "Los mapas aplicacionales avanzados requieren definir sensor, precision y formato compatible."],
    enLocalNotes: ["In Cibao agricultural zones, flight windows must consider wind, humidity and parcel access.", "For insurance, we prioritize clear evidence, date, location and full coverage.", "Advanced application maps require defining sensor, accuracy and compatible format."],
    faq: baseFaq("zonas agricolas"),
    related: ["dron-construccion-ingenieria", "precios-servicio-dron-republica-dominicana", "dron-jarabacoa"],
    image: "/images/drone/galeria-dron-rd.webp"
  },
  {
    slug: "dron-medio-ambiente-seguridad",
    enSlug: "environment-security-drone",
    type: "service",
    title: "Dron para medio ambiente y seguridad en Republica Dominicana",
    enTitle: "Drone for environment and safety in Dominican Republic",
    description: "Monitoreo ambiental, documentacion de areas, soporte visual y levantamientos con dron para zonas complejas.",
    enDescription: "Environmental monitoring, area documentation, visual support and drone surveys for complex locations.",
    h1: "Dron para medio ambiente y seguridad",
    enH1: "Drone for environment and safety",
    intro: "Apoyamos monitoreo visual de zonas extensas o dificiles de recorrer: vertederos, costas, rios, areas verdes, accesos, zonas de riesgo y terrenos con baja visibilidad.",
    enIntro: "We support visual monitoring of large or hard-to-access areas: landfills, coasts, rivers, green areas, access roads, risk zones and low-visibility terrain.",
    audience: "Empresas, administradores, equipos ambientales, seguridad privada, hoteles, fincas y organizaciones que necesitan evidencia aerea.",
    enAudience: "Companies, managers, environmental teams, private security, hotels, farms and organizations needing aerial evidence.",
    deliverables: ["Registro aereo", "Video de monitoreo", "Fotos por zona", "Mapa visual", "Reporte de hallazgos visuales"],
    enDeliverables: ["Aerial record", "Monitoring video", "Zone photos", "Visual map", "Visual findings report"],
    useCases: ["Vertederos", "Costas y rios", "Areas verdes", "Accesos", "Documentacion de incidentes"],
    enUseCases: ["Landfills", "Coasts and rivers", "Green areas", "Access roads", "Incident documentation"],
    localNotes: ["No reemplazamos autoridades ni equipos de emergencia; entregamos soporte visual y documentacion cuando el vuelo es viable y seguro.", "Para operaciones nocturnas o termicas se cotiza equipo, permisos y riesgo operativo.", "La privacidad y seguridad del entorno se revisan antes de cualquier vuelo."],
    enLocalNotes: ["We do not replace authorities or emergency teams; we provide visual support and documentation when the flight is viable and safe.", "Night or thermal operations are quoted by equipment, permits and operational risk.", "Privacy and site safety are reviewed before any flight."],
    faq: baseFaq("Republica Dominicana"),
    related: ["inspecciones-dron-industria-energia", "dron-agricultura-precision", "precios-servicio-dron-republica-dominicana"],
    image: "/images/drone/piloto-dron-republica-dominicana.webp"
  },
  {
    slug: "precios-servicio-dron-republica-dominicana",
    enSlug: "drone-service-prices-dominican-republic",
    type: "pricing",
    title: "Precios de servicio con dron en Republica Dominicana | Babula Shots",
    enTitle: "Drone service prices in Dominican Republic | Babula Shots",
    description: "Precios publicados para fotografia, video y drone inmobiliario en RD con opciones custom para inspecciones, construccion y agricultura.",
    enDescription: "Published prices for real estate photography, video and drone in DR with custom options for inspections, construction and agriculture.",
    h1: "Precios de servicio con dron en Republica Dominicana",
    enH1: "Drone service prices in Dominican Republic",
    intro: "Publicamos precios base para que puedas filtrar alcance y presupuesto antes de cotizar. Los trabajos tecnicos se presupuestan por objetivo, riesgo, permisos, equipo y entregables.",
    enIntro: "We publish starting prices so you can filter scope and budget before requesting a quote. Technical work is quoted by objective, risk, permits, equipment and deliverables.",
    audience: "Clientes que necesitan comparar fotografia aerea, video drone, seguimiento de obra, inspeccion, mapas o un servicio custom.",
    enAudience: "Clients comparing aerial photography, drone video, construction progress, inspection, mapping or custom drone service.",
    deliverables: ["Tabla de precios", "Rangos de alcance", "Opciones custom", "WhatsApp con mensaje de cotizacion", "Fuente de precios enlazada"],
    enDeliverables: ["Pricing table", "Scope ranges", "Custom options", "WhatsApp quote message", "Linked pricing source"],
    useCases: ["Listados inmobiliarios", "Villas premium", "Fincas", "Inspecciones", "Construccion"],
    enUseCases: ["Real estate listings", "Premium villas", "Estates", "Inspections", "Construction"],
    localNotes: ["La referencia de precios viene del menu publicado de Babula Shots en fotografosantodomingo.com.", "El precio final puede cambiar por traslado, restricciones de vuelo, urgencia, equipo extra, altura, permisos o seguridad.", "Para industria, energia, agricultura y medio ambiente usamos cotizacion custom."],
    enLocalNotes: ["Pricing reference comes from the published Babula Shots menu on fotografosantodomingo.com.", "Final pricing can change by travel, flight restrictions, urgency, extra equipment, height, permits or safety.", "For industry, energy, agriculture and environment we use custom quotes."],
    faq: baseFaq("Republica Dominicana"),
    related: ["dron-inmobiliario-arquitectura", "inspecciones-dron-industria-energia", "dron-construccion-ingenieria"],
    image: "/images/drone/servicio-drone-santo-domingo.webp",
    priority: 1
  }
];

// `image` defaults to the generic Santo Domingo aerial. When real per-city
// aerials arrive, pass an explicit image string at the city() call site so
// each city renders its own hero. DO NOT change this default — multiple
// cities depend on it as a placeholder until their dedicated photo lands.
const city = (slug: string, enSlug: string, name: string, province: string, angle: string, enAngle: string, zones: string[], image = "/images/drone/fotografia-dron-santo-domingo.webp"): DronePage => ({
  slug: `dron-${slug}`,
  enSlug: `drone-${enSlug}`,
  type: "city",
  title: `Servicio de dron en ${name} | Babula Shots`,
  enTitle: `Drone service in ${name} | Babula Shots`,
  description: `Foto, video, inspeccion y contenido con dron en ${name} para propiedades, obras, turismo, industria y proyectos.`,
  enDescription: `Drone photo, video, inspection and aerial media in ${name} for properties, construction, tourism, industry and projects.`,
  h1: `Servicio de dron en ${name}`,
  enH1: `Drone service in ${name}`,
  intro: `En ${name}, el valor del dron esta en mostrar ubicacion, acceso, escala y contexto con claridad. ${angle}`,
  enIntro: `In ${name}, drone value comes from showing location, access, scale and context clearly. ${enAngle}`,
  audience: `Agentes, desarrolladores, hoteles, constructoras, fincas, comercios y equipos de marketing que necesitan contenido aereo en ${name}.`,
  enAudience: `Agents, developers, hotels, builders, farms, businesses and marketing teams needing aerial media in ${name}.`,
  deliverables: ["Fotos aereas", "Video 4K", "Tomas de ubicacion", "Registro por zonas", "Cotizacion custom si hay inspeccion o mapeo"],
  enDeliverables: ["Aerial photos", "4K video", "Location shots", "Zone-by-zone record", "Custom quote for inspection or mapping"],
  useCases: ["Inmobiliaria", "Arquitectura", "Construccion", "Turismo", "Inspeccion visual"],
  enUseCases: ["Real estate", "Architecture", "Construction", "Tourism", "Visual inspection"],
  localNotes: [`Zonas clave: ${zones.join(", ")}.`, `Antes de volar confirmamos clima, seguridad, acceso, restricciones y objetivo de captura en ${name}.`, `Los paquetes publicados aplican como base; proyectos tecnicos o zonas complejas se cotizan aparte.`],
  enLocalNotes: [`Key areas: ${zones.join(", ")}.`, `Before flying we confirm weather, safety, access, restrictions and capture objective in ${name}.`, `Published packages apply as a baseline; technical projects or complex areas are quoted separately.`],
  faq: baseFaq(name),
  related: ["dron-inmobiliario-arquitectura", "precios-servicio-dron-republica-dominicana", "dron-construccion-ingenieria"],
  image,
  area: name,
  province
});

const cityLocalContext: Record<string, { es: string[]; en: string[]; sisters: string[] }> = {
  "dron-santo-domingo": {
    es: [
      "Santo Domingo se lee desde el aire como una capital de contrastes: el skyline contemporaneo de Anacaona, la Torre Caney y los nuevos proyectos verticales de Piantini se enmarcan contra el Malecon y el mar Caribe, mientras que apenas diez minutos al sur la Zona Colonial muestra desde altura el trazado original del Nuevo Mundo, con la Catedral Primada, la Plaza Espana, el Alcazar de Colon y el Faro a Colon proyectandose sobre el rio Ozama.",
      "Para inmobiliaria capitalina priorizamos vuelos sobre torres en preventa, comparativas de altura entre pisos, orientacion del balcon hacia el Malecon o el parque Mirador Sur, y la relacion visual de la propiedad con avenidas clave como Winston Churchill, Lope de Vega o la Nunez de Caceres. En arquitectura, el dron registra cubiertas, terrazas, helipuertos y la verdadera densidad construida de la manzana.",
      "Tecnicamente Santo Domingo exige planificacion: el aeropuerto Las Americas (SDQ) impone restricciones al sur-este, el Isabela (JBQ) afecta el norte de la ciudad, y muchos edificios oficiales requieren mantener distancia y altura controlada. La mejor ventana de luz suele ser entre 6:30-8:00 a.m. y 4:30-6:00 p.m., con cielo limpio entre diciembre y abril."
    ],
    en: [
      "Santo Domingo reads from the air as a city of contrasts: the contemporary Anacaona skyline, Torre Caney and new vertical projects in Piantini framed against the Malecon and the Caribbean Sea, while ten minutes south the Zona Colonial reveals the original New World grid from above, with the Catedral Primada, Plaza Espana, Alcazar de Colon and the Faro a Colon monument projecting over the Ozama river.",
      "For real estate in the capital we prioritize flights over pre-sale towers, height comparisons between floors, balcony orientation toward the Malecon or Mirador Sur park, and the visual relationship of the property with key avenues such as Winston Churchill, Lope de Vega and Nunez de Caceres. For architecture, drones record roofs, terraces, helipads and the real built density of the block.",
      "Technically Santo Domingo requires planning: Las Americas airport (SDQ) creates restrictions to the south-east, Isabela (JBQ) affects the northern edge, and many government buildings require keeping distance and controlled altitude. The best light window is usually 6:30-8:00 a.m. and 4:30-6:00 p.m., with cleanest skies between December and April."
    ],
    sisters: ["dron-juan-dolio", "dron-santiago", "dron-la-romana"]
  },
  "dron-punta-cana": {
    es: [
      "Punta Cana se vende desde el aire mejor que desde la calle. El dron sintetiza en una sola toma la coreografia que define el destino: la franja de arena blanca que arranca en Cabeza de Toro y se extiende hacia Bavaro y Uvero Alto, el patron de palmeras de cocotero, las piscinas serpenteantes de Hard Rock, Iberostar, Bahia Principe y la silueta del complejo Cap Cana al sur con Eden Roc y Punta Espada como remates premium.",
      "Para inversionistas y agentes inmobiliarios el dron sirve para responder la pregunta real: a que distancia exacta esta el lote, la villa o el condo de la playa, del campo de golf y de la salida hacia el aeropuerto. Capturamos las amenidades del proyecto, la franja costera de Juanillo Beach, marinas con yates anclados y la malla vial del Boulevard Turistico desde altura para contextualizar acceso y privacidad.",
      "El aeropuerto Punta Cana (PUJ) genera una zona restringida amplia que cubre buena parte del corredor turistico; cualquier vuelo requiere planificacion previa, contacto con el resort y a veces autorizacion del concesionario. La hora dorada (6:00-7:30 a.m. y 5:00-6:30 p.m.) en temporada seca (Dic-Abr) entrega los colores turquesa caracteristicos del destino sin reflejos quemados."
    ],
    en: [
      "Punta Cana sells better from the air than from the road. Drones synthesize in a single shot the choreography that defines the destination: the white sand strip starting at Cabeza de Toro and stretching to Bavaro and Uvero Alto, the coconut palm patterns, the serpentine pools of Hard Rock, Iberostar and Bahia Principe, and the Cap Cana complex to the south with Eden Roc and Punta Espada as premium markers.",
      "For investors and real estate agents, drone footage answers the real question: how far exactly is the lot, villa or condo from the beach, the golf course and the airport exit. We capture project amenities, the coastal strip of Juanillo Beach, marinas with anchored yachts, and the Boulevard Turistico road network from altitude to contextualize access and privacy.",
      "Punta Cana airport (PUJ) creates a wide restricted zone covering much of the tourism corridor; any flight requires prior planning, coordination with the resort and sometimes concession authorization. The golden hour (6:00-7:30 a.m. and 5:00-6:30 p.m.) during the dry season (Dec-Apr) delivers the destination's signature turquoise colors without blown-out highlights."
    ],
    sisters: ["dron-bavaro", "dron-cap-cana", "dron-bayahibe"]
  },
  "dron-bavaro": {
    es: [
      "Bavaro es la cara mas comercial de la franja oriental: hoteles all-inclusive amontonados sobre 8 km de arena, condominios de inversion en Cocotal y Cortecito, plazas comerciales y restaurantes pegados a la linea de playa. Desde el aire se ve con claridad la diferencia entre Arena Gorda con su densidad hotelera, Los Corales con su mezcla de villas y rentas turisticas, y El Cortecito como zona mas peatonal y caribena.",
      "Para propietarios de Airbnb y administradores de condos, el dron muestra el activo real: la piscina del complejo, la distancia caminable a la playa, el acceso al beach club y la posicion respecto a los hoteles vecinos. Es la diferencia entre publicar un anuncio comodtity en Booking y un anuncio premium con vista aerea que justifica precio por noche superior.",
      "Bavaro comparte la zona restringida del aeropuerto PUJ, por lo que la planificacion de vuelo debe contemplar altura maxima, distancia a la pista y horarios de operacion. La temporada baja de huracanes (Jun-Nov) limita ventanas; en temporada alta el cielo de las 7:00 a.m. con marea baja deja ver el patron de coral cerca de la orilla."
    ],
    en: [
      "Bavaro is the most commercial face of the eastern coast: all-inclusive hotels packed along 8 km of sand, investor condos in Cocotal and Cortecito, shopping plazas and restaurants pressed against the beach line. From the air the difference is clear between Arena Gorda with its hotel density, Los Corales with its mix of villas and short-term rentals, and El Cortecito as the more walkable Caribbean zone.",
      "For Airbnb owners and condo managers, drone footage shows the actual asset: the complex pool, walkable distance to the beach, beach club access and position relative to neighboring hotels. It is the difference between posting a commodity listing on Booking and a premium listing with aerial views that justifies a higher nightly rate.",
      "Bavaro shares the PUJ airport restricted zone, so flight planning must consider maximum height, runway distance and operating hours. The hurricane season (Jun-Nov) limits windows; in high season a 7:00 a.m. sky at low tide reveals the coral patterns near the shore."
    ],
    sisters: ["dron-punta-cana", "dron-cap-cana", "dron-bayahibe"]
  },
  "dron-cap-cana": {
    es: [
      "Cap Cana es un caso aparte dentro del corredor de Punta Cana: una ciudadela cerrada de 120 km2 donde conviven villas de ultra-lujo, el Eden Roc a Cap Cana, la Marina con calado para mega-yates, Juanillo Beach y dos campos de Jack Nicklaus, Punta Espada y Las Iguanas. Desde el aire se aprecia el diseno de paisajismo, la separacion entre clusters residenciales y la relacion con la barrera de coral.",
      "Para vender una villa en Cap Cana, el dron no solo muestra la propiedad: muestra que esta dentro de Cap Cana. Capturamos el acceso por el pueblo de control, la cercania al hoyo 17 firmado sobre el oceano, la marina con embarcaciones de 100 pies, y la distancia a Caleton Beach Club. Para arquitectos, el ortomosaico del lote justifica decisiones de orientacion y huella construida.",
      "Las restricciones son mas estrictas que en Bavaro: ademas de la zona PUJ, la propia administracion de Cap Cana coordina permisos internos para vuelos comerciales. Trabajamos con autorizacion previa, ventanas en hora dorada y altura controlada para no afectar privacidad de huespedes. Diciembre a marzo es la temporada visual ideal."
    ],
    en: [
      "Cap Cana is a special case within the Punta Cana corridor: a 120 km2 gated city where ultra-luxury villas, Eden Roc a Cap Cana, the deep-draft mega-yacht Marina, Juanillo Beach and two Jack Nicklaus courses (Punta Espada and Las Iguanas) coexist. From the air the landscape design, separation between residential clusters and relationship with the coral barrier are evident.",
      "To sell a Cap Cana villa, drone footage does more than show the property: it proves it is inside Cap Cana. We capture the gatehouse entry, proximity to the signature 17th hole over the ocean, the marina with 100-foot vessels, and distance to Caleton Beach Club. For architects, a lot orthomosaic justifies orientation and built footprint decisions.",
      "Restrictions are stricter than in Bavaro: beyond the PUJ zone, Cap Cana administration coordinates internal permits for commercial flights. We work with prior authorization, golden-hour windows and controlled altitude to protect guest privacy. December to March is the ideal visual season."
    ],
    sisters: ["dron-punta-cana", "dron-bavaro", "dron-bayahibe"]
  },
  "dron-casa-de-campo": {
    es: [
      "Casa de Campo es probablemente el resort residencial mas iconico del Caribe, y su composicion aerea es unica: 7,000 acres con el campo Teeth of the Dog disenado por Pete Dye serpenteando sobre el mar, Altos de Chavon como replica de pueblo mediterraneo del siglo XVI sobre un acantilado del rio Chavon, una marina con cientos de embarcaciones y campos de polo activos.",
      "Para propietarios de villa el dron no muestra una casa, muestra una direccion dentro de Casa de Campo. Capturamos la cercania al green del hoyo 7 de Teeth of the Dog, la vista hacia la marina, la distancia a la playa Minitas o Caleton, la disposicion de los jardines, piscina infinita y la relacion con villas vecinas. Para Altos de Chavon, los planos cenitales del anfiteatro y el coral stone justifican su valor como locacion de eventos.",
      "Casa de Campo coordina autorizacion para vuelo comercial dentro de la comunidad cerrada. La proximidad al aeropuerto La Romana (LRM) y a la zona de cana de Central Romana exige planificacion. Las mejores tomas del Chavon River se logran entre 7:00-8:30 a.m. cuando la niebla del rio aun se mezcla con la luz baja."
    ],
    en: [
      "Casa de Campo is arguably the most iconic residential resort in the Caribbean, and its aerial composition is unique: 7,000 acres with Pete Dye's Teeth of the Dog course winding over the sea, Altos de Chavon as a 16th-century Mediterranean village replica on a cliff above the Chavon river, a marina with hundreds of vessels and active polo fields.",
      "For villa owners, drone footage does not show a house, it shows an address within Casa de Campo. We capture proximity to the 7th green of Teeth of the Dog, view to the marina, distance to Minitas or Caleton beach, garden layout, infinity pool and relationship to neighboring villas. For Altos de Chavon, overhead views of the amphitheater and coral stone justify its value as an event venue.",
      "Casa de Campo coordinates authorization for commercial flights inside the gated community. Proximity to La Romana airport (LRM) and the Central Romana sugar zone requires planning. The best Chavon River shots happen between 7:00-8:30 a.m. when river mist still mixes with low light."
    ],
    sisters: ["dron-la-romana", "dron-bayahibe", "dron-punta-cana"]
  },
  "dron-bayahibe": {
    es: [
      "Bayahibe conserva el caracter de pueblo de pescadores que ya casi no existe en el resto del este: casas de colores frente al mar, embarcaciones de madera saliendo al amanecer hacia Isla Saona y el Parque Nacional Cofresi, y una bahia natural que el dron captura en una sola toma desde 80 metros de altura. Mas al sur, Dominicus y los hoteles Iberostar y Viva Wyndham forman el otro polo turistico.",
      "Para inmobiliaria, Bayahibe vende dos productos: la villa boutique con caracter dominicano en la bahia y el condo all-inclusive en Dominicus Beach. El dron diferencia ambos perfectamente: muestra la flota de catamaranes saliendo hacia Saona, la barrera de coral visible desde el aire, las playas tipo postcard de Dominicus y la cercania al Parque Nacional del Este.",
      "Bayahibe esta dentro de la zona del aeropuerto La Romana (LRM) y muy cerca del Parque Nacional, donde los vuelos requieren coordinacion adicional. El agua transparente justifica programar la toma para marea baja a media manana cuando el sol entra a 45 grados y se ve el fondo coralino sin reflejos."
    ],
    en: [
      "Bayahibe preserves the fishing-village character that has nearly disappeared from the rest of the east: colored houses facing the sea, wooden boats heading out at dawn toward Saona Island and Cofresi National Park, and a natural bay that drones capture in a single shot from 80 meters up. Further south, Dominicus and the Iberostar and Viva Wyndham hotels form the other tourism pole.",
      "For real estate, Bayahibe sells two products: the boutique villa with Dominican character on the bay, and the all-inclusive condo on Dominicus Beach. Drone footage differentiates them perfectly: it shows the catamaran fleet heading to Saona, the coral barrier visible from the air, the postcard beaches of Dominicus and proximity to Parque Nacional del Este.",
      "Bayahibe sits within the La Romana airport (LRM) zone and very close to the National Park, where flights need additional coordination. The transparent water justifies scheduling shots for low tide mid-morning when the sun enters at 45 degrees and the coral seabed is visible without glare."
    ],
    sisters: ["dron-la-romana", "dron-casa-de-campo", "dron-punta-cana"]
  },
  "dron-la-romana": {
    es: [
      "La Romana se entiende mejor desde el aire que desde tierra. El dron revela tres economias superpuestas: el casco urbano con la catedral Santa Rosa de Lima, el complejo Casa de Campo con su marina y campos de golf, y la inmensidad de campos de cana de azucar del Central Romana extendiendose hacia el norte con el patron geometrico de los surcos visible solo desde altura.",
      "Para clientes corporativos documentamos operaciones del Central Romana, el puerto, terminales y el ingenio. Para inmobiliaria capturamos villas en Costa del Mar, lotes frente al rio Dulce, y el acceso desde la autopista del Coral, que conecta directo con Punta Cana en 45 minutos. La marina de Casa de Campo y los acantilados del rio Chavon son siempre tomas de referencia.",
      "El aeropuerto Casa de Campo La Romana (LRM) impone restricciones al sur, y las operaciones del Central Romana ocupan grandes extensiones que requieren autorizacion previa. La mejor estacion va de noviembre a abril cuando la zafra de cana esta activa y los patrones agricolas son visualmente densos."
    ],
    en: [
      "La Romana is better understood from above than from the ground. Drone footage reveals three overlapping economies: the urban core with the Santa Rosa de Lima cathedral, the Casa de Campo complex with its marina and golf courses, and the vast Central Romana sugar cane fields stretching north with field-row geometry only visible from altitude.",
      "For corporate clients we document Central Romana operations, the port, terminals and the sugar mill. For real estate we capture villas in Costa del Mar, lots facing the Dulce river, and access from the Autopista del Coral, which connects directly to Punta Cana in 45 minutes. The Casa de Campo marina and Chavon river cliffs are always reference shots.",
      "Casa de Campo La Romana airport (LRM) imposes restrictions to the south, and Central Romana operations cover large areas requiring prior authorization. The best season runs November to April when the cane harvest is active and agricultural patterns are visually dense."
    ],
    sisters: ["dron-casa-de-campo", "dron-bayahibe", "dron-juan-dolio"]
  },
  "dron-santiago": {
    es: [
      "Santiago es la capital del Cibao y desde el aire muestra una estructura muy distinta a Santo Domingo: una ciudad mas horizontal, anclada por el Monumento a los Heroes de la Restauracion sobre la colina mas alta, con la catedral Santiago Apostol marcando el centro y el rio Yaque del Norte rodeando el casco. El Centro Leon, simbolo cultural y arquitectonico, se aprecia mejor con tomas cenitales que destacan su volumen contemporaneo.",
      "Para construccion e ingenieria, Santiago es uno de los mercados mas activos: torres residenciales en Los Jardines, Villa Olga y Cerros de Gurabo, naves industriales en la zona franca, y obras urbanas en avenidas Estrella Sadhala y 27 de Febrero. El dron documenta avance mensual desde el mismo angulo para comparar progreso y entregar reporte visual a inversionistas.",
      "El aeropuerto Cibao (STI) genera restricciones al sur de la ciudad, y la cercania al Cerro Diego de Ocampo limita ciertos vuelos al oeste. La luz del Cibao es mas seca y nitida que en la costa; las tomas matutinas entre 7:00-9:00 a.m. en temporada seca (Dic-Abr) entregan colores limpios y sombras definidas."
    ],
    en: [
      "Santiago is the capital of the Cibao region and from the air shows a very different structure than Santo Domingo: a more horizontal city, anchored by the Monumento a los Heroes de la Restauracion on the highest hill, with the Santiago Apostol cathedral marking the center and the Yaque del Norte river wrapping the urban core. The Centro Leon, a cultural and architectural icon, is best appreciated from overhead shots that highlight its contemporary volume.",
      "For construction and engineering, Santiago is one of the most active markets: residential towers in Los Jardines, Villa Olga and Cerros de Gurabo, industrial warehouses in the free trade zone, and urban works on Estrella Sadhala and 27 de Febrero avenues. Drones document monthly progress from the same angle to compare advancement and deliver visual reports to investors.",
      "Cibao airport (STI) creates restrictions south of the city, and proximity to Cerro Diego de Ocampo limits certain flights to the west. Cibao light is drier and crisper than coastal light; morning shots between 7:00-9:00 a.m. in dry season (Dec-Apr) deliver clean colors and defined shadows."
    ],
    sisters: ["dron-jarabacoa", "dron-puerto-plata", "dron-santo-domingo"]
  },
  "dron-puerto-plata": {
    es: [
      "Puerto Plata combina costa atlantica, montana y arquitectura colonial en una sola toma aerea: el Monte Isabel de Torres con su Cristo Redentor y la teleferica que sube 800 metros, la Fortaleza San Felipe sobre el malecon, el centro historico con casas victorianas tras la quema del 1863, y la franja hotelera de Playa Dorada hacia el este con Costambar y Cofresi al oeste.",
      "Para turismo y hoteleria el dron narra una propuesta diferente al Caribe sur: olas mas activas, montana visible desde la playa, cultura mas establecida. Capturamos los complejos de Playa Dorada con sus campos de golf, las villas frente al mar en Cofresi, y la entrada del puerto donde atracan los cruceros en Amber Cove. El parque Ocean World y los Hoyos de Cabarete forman extension natural.",
      "El aeropuerto Gregorio Luperon (POP) impone restricciones al este de la ciudad. La costa norte tiene mas oleaje y viento que la sur, por lo que las ventanas seguras de vuelo son mas estrechas. Entre diciembre y marzo el viento alisio es mas constante; la temporada de huracanes (Jun-Nov) afecta directamente esta costa."
    ],
    en: [
      "Puerto Plata combines Atlantic coast, mountain and colonial architecture in a single aerial shot: Mount Isabel de Torres with its Christ the Redeemer statue and the cable car climbing 800 meters, Fortaleza San Felipe on the malecon, the historic downtown with Victorian houses (rebuilt after the 1863 fire), and the hotel strip of Playa Dorada to the east with Costambar and Cofresi to the west.",
      "For tourism and hospitality, drones tell a different Caribbean story than the south: more active waves, mountain visible from the beach, more established culture. We capture the Playa Dorada complexes with their golf courses, oceanfront villas in Cofresi, and the port entrance where cruise ships dock at Amber Cove. Ocean World park and the Cabarete caves form a natural extension.",
      "Gregorio Luperon airport (POP) creates restrictions to the east of the city. The north coast has more swell and wind than the south, so safe flight windows are narrower. Between December and March the trade winds are steadier; hurricane season (Jun-Nov) directly affects this coast."
    ],
    sisters: ["dron-santiago", "dron-samana", "dron-las-terrenas"]
  },
  "dron-samana": {
    es: [
      "Samana es la peninsula mas singular del Caribe dominicano: bahia profunda enmarcada por colinas verdes, Cayo Levantado flotando frente al puerto, y entre enero y marzo cientos de ballenas jorobadas (Megaptera novaeangliae) llegando a parir. El dron registra las embarcaciones de avistamiento manteniendose a distancia regulada, mientras las ballenas emergen en patrones visibles solo desde altura.",
      "Para hoteleria y proyectos turisticos, Samana se vende como un Caribe distinto: menos densidad hotelera, mas naturaleza. Capturamos la entrada al Parque Nacional Los Haitises con sus mogotes calcareos, el Salto El Limon enterrado en selva, las playas casi vacias de Las Galeras, y la nueva infraestructura del aeropuerto El Catey (AZS) que abrio el destino al turismo internacional.",
      "El aeropuerto Arroyo Barril en Samana ciudad y El Catey (AZS) al oeste imponen restricciones distribuidas en la peninsula. La temporada de ballenas (15 ene - 30 mar) requiere distancia minima de 300 metros laterales y altura controlada por regulacion ambiental. Para terrenos y desarrollos, la luz seca de febrero entrega el verde mas saturado y agua mas clara del ano."
    ],
    en: [
      "Samana is the most singular peninsula in the Dominican Caribbean: a deep bay framed by green hills, Cayo Levantado floating in front of the port, and from January to March hundreds of humpback whales (Megaptera novaeangliae) arriving to give birth. Drones capture whale-watching boats keeping regulated distance while whales surface in patterns only visible from altitude.",
      "For hospitality and tourism projects, Samana sells as a different Caribbean: less hotel density, more nature. We capture the entrance to Los Haitises National Park with its limestone mogotes, El Limon waterfall buried in jungle, the nearly empty beaches of Las Galeras, and the new El Catey airport (AZS) infrastructure that opened the destination to international tourism.",
      "Arroyo Barril airport in Samana city and El Catey (AZS) to the west create distributed restrictions across the peninsula. The whale season (Jan 15 - Mar 30) requires minimum 300 m lateral distance and altitude controlled by environmental regulation. For land and developments, February's dry light delivers the most saturated greens and clearest water of the year."
    ],
    sisters: ["dron-las-terrenas", "dron-puerto-plata", "dron-miches"]
  },
  "dron-las-terrenas": {
    es: [
      "Las Terrenas es la cara cosmopolita de Samana: comunidad francesa-italiana establecida, playas de arena dorada en Coson y Bonita, montana selvatica como fondo inmediato, y un urbanismo mas horizontal que el de Punta Cana. El dron captura el contraste entre Playa Bonita con sus villas boutique, Playa Coson casi virgen al oeste, y el Pueblo de los Pescadores como zona gastronomica frente al mar.",
      "Para inmobiliaria boutique, el dron es decisivo: muestra la villa, pero tambien muestra que la villa esta a 200 metros de Coson, con vista a la montana y sin construccion entre ella y el mar. Capturamos el camino entre el pueblo y El Portillo, las cataratas El Limon a 20 minutos en mula, y la nueva carretera de Samana que reduce el acceso a 2.5 horas desde Santo Domingo.",
      "El aeropuerto El Catey (AZS) impone restricciones al oeste de Las Terrenas. La luz de la costa norte de Samana es mas suave que la de Punta Cana, lo que favorece tomas de hora dorada extendida. La temporada seca (Dic-Mar) entrega el agua verde-turquesa caracteristica del Atlantico tropical."
    ],
    en: [
      "Las Terrenas is the cosmopolitan face of Samana: an established French-Italian community, golden-sand beaches at Coson and Bonita, jungle mountain as an immediate backdrop, and more horizontal urbanism than Punta Cana. Drones capture the contrast between Playa Bonita with its boutique villas, near-virgin Playa Coson to the west, and the Pueblo de los Pescadores as the gastronomic strip facing the sea.",
      "For boutique real estate, drones are decisive: they show the villa, but also prove the villa sits 200 meters from Coson, with mountain views and no construction between it and the sea. We capture the road between town and El Portillo, El Limon waterfalls 20 minutes on mule, and the new Samana highway that reduces access to 2.5 hours from Santo Domingo.",
      "El Catey airport (AZS) creates restrictions west of Las Terrenas. North coast Samana light is softer than Punta Cana's, favoring extended golden-hour shots. The dry season (Dec-Mar) delivers the signature green-turquoise water of the tropical Atlantic."
    ],
    sisters: ["dron-samana", "dron-puerto-plata", "dron-miches"]
  },
  "dron-jarabacoa": {
    es: [
      "Jarabacoa cambia por completo la paleta del dron dominicano: pinos en lugar de palmeras, rios de montana en lugar de mar, neblina matinal y altitud de 530 metros. La toma aerea revela la confluencia de los rios Yaque del Norte y Jimenoa, los saltos de Jimenoa Uno y Dos hundidos en canyon, las terrazas agricolas de fresa y vegetales, y la silueta del Pico Duarte como remate a 3,098 metros en dias claros.",
      "Para ecoturismo y fincas, el dron documenta cabanas en Jamaca de Dios, fincas en Manabao, monasterios y retiros en La Confluencia, y operaciones de rafting sobre el Yaque del Norte. Para inmobiliaria de montana, la fotografia aerea es la unica forma de explicar la pendiente del terreno, la orientacion al pico Duarte y la distancia a los saltos.",
      "Jarabacoa tiene clima mas variable que la costa: niebla densa hasta las 9 a.m., posibilidad de lluvia vespertina y vientos cambiantes en valles. La ventana ideal es 9:00-11:00 a.m. cuando la niebla se levanta del rio. La temporada seca (Dic-Abr) entrega cielos azules profundos que destacan el verde de los pinos."
    ],
    en: [
      "Jarabacoa completely changes the Dominican drone palette: pines instead of palms, mountain rivers instead of sea, morning mist and 530 meters elevation. Aerial footage reveals the confluence of the Yaque del Norte and Jimenoa rivers, Jimenoa Uno and Dos waterfalls sunk into canyon, agricultural terraces of strawberry and vegetables, and the Pico Duarte silhouette at 3,098 meters on clear days.",
      "For ecotourism and farms, drones document cabins in Jamaca de Dios, farms in Manabao, monasteries and retreats in La Confluencia, and rafting operations on the Yaque del Norte. For mountain real estate, aerial photography is the only way to explain land slope, orientation to Pico Duarte and distance to the waterfalls.",
      "Jarabacoa has more variable weather than the coast: dense fog until 9 a.m., afternoon rain risk, and shifting valley winds. The ideal window is 9:00-11:00 a.m. when mist lifts from the river. The dry season (Dec-Apr) delivers deep blue skies that highlight the pine green."
    ],
    sisters: ["dron-santiago", "dron-puerto-plata", "dron-samana"]
  },
  "dron-juan-dolio": {
    es: [
      "Juan Dolio se ha convertido en un corredor de inversion residencial inmediato a Santo Domingo: 50 minutos por la autopista de las Americas y se llega a torres frente al mar como Costa Atlantica, Costa Hermosa y Marbella, condos turisticos en Guayacanes, y el campo de golf del Metro Country Club. Desde el aire se aprecia la franja continua de coral apenas separada de la costa.",
      "Para inmobiliaria, Juan Dolio es ideal para venta a inversionistas dominicanos que quieren rentar a turistas o tener una segunda residencia con acceso facil desde la capital. El dron muestra la diferencia entre Villas del Mar con su arena mas dorada, Guayacanes mas exclusivo, y el lado de Embassy Suites con su densidad mayor. Captura la cercania al malecon, al supermercado y a los restaurantes de playa.",
      "Juan Dolio comparte la zona del aeropuerto Las Americas (SDQ) al oeste y La Romana (LRM) al este. El oleaje es mas calmo que en Punta Cana porque la barrera de coral rompe las olas grandes. Las mejores tomas se logran con marea alta a media manana cuando el agua cubre el coral mas cercano a la orilla."
    ],
    en: [
      "Juan Dolio has become a residential investment corridor immediately accessible from Santo Domingo: 50 minutes by the Las Americas highway reaches oceanfront towers like Costa Atlantica, Costa Hermosa and Marbella, vacation condos in Guayacanes, and the Metro Country Club golf course. From the air, the continuous coral strip just off the coast is visible.",
      "For real estate, Juan Dolio is ideal for selling to Dominican investors wanting to rent to tourists or maintain a second residence with easy access from the capital. Drones show the difference between Villas del Mar with its more golden sand, the more exclusive Guayacanes, and the Embassy Suites side with greater density. They capture proximity to the malecon, supermarket and beach restaurants.",
      "Juan Dolio shares the Las Americas airport (SDQ) zone to the west and La Romana (LRM) to the east. Waves are calmer than in Punta Cana because the coral barrier breaks the larger swell. The best shots come at high tide mid-morning when water covers the shore-side coral."
    ],
    sisters: ["dron-santo-domingo", "dron-la-romana", "dron-bayahibe"]
  },
  "dron-miches": {
    es: [
      "Miches es la frontera turistica emergente del este: hasta 2020 era un pueblo de pescadores con la mejor arena blanca del pais y casi sin infraestructura. Hoy el dron documenta el cambio acelerado: Tropicalia y Four Seasons en construccion, Club Med Michelin abierto en 2024, Costa Esmeralda extendiendose como nueva franja hotelera, y la laguna Limon como reserva natural protegida.",
      "Para inversionistas y desarrolladores, Miches es el caso de uso mas claro de fotografia aerea: terrenos que cambian de valor cada trimestre, vistas hacia el cabo Engano y la sierra de Yamasa, y la unica zona del este donde aun se ve playa virgen sin un solo hotel detras. Capturamos la conexion con la autopista nueva que reduce el acceso desde Santo Domingo a 2 horas.",
      "Miches no tiene aeropuerto propio cercano (PUJ esta a 1 hora), por lo que las restricciones son menores; sin embargo los proyectos en construccion exigen coordinacion con los desarrolladores. La temporada Dic-Abr es la unica donde el viento del este se calma lo suficiente para vuelo estable sobre el oceano."
    ],
    en: [
      "Miches is the emerging tourism frontier of the east: until 2020 it was a fishing town with the country's whitest sand and almost no infrastructure. Today drones document accelerated change: Tropicalia and Four Seasons under construction, Club Med Michelin opened in 2024, Costa Esmeralda extending as a new hotel strip, and Laguna Limon as a protected natural reserve.",
      "For investors and developers, Miches is the clearest use case for aerial photography: lots that change value each quarter, views toward Cabo Engano and the Yamasa range, and the only eastern zone where virgin beach with no hotel behind it can still be seen. We capture the connection to the new highway that reduces access from Santo Domingo to 2 hours.",
      "Miches has no nearby airport (PUJ is 1 hour away), so restrictions are lower; however active construction projects require coordination with developers. The Dec-Apr season is the only window when the east wind calms enough for stable flight over the ocean."
    ],
    sisters: ["dron-punta-cana", "dron-bavaro", "dron-samana"]
  }
};

export const cityPages: DronePage[] = [
  city("santo-domingo", "santo-domingo", "Santo Domingo", "Distrito Nacional", "Las torres, avenidas, hoteles, zonas comerciales y proyectos verticales necesitan angulos consistentes para explicar altura, vista, fachada y relacion con el entorno urbano.", "Towers, avenues, hotels, commercial zones and vertical developments need consistent angles to explain height, view, facade and urban context.", ["Piantini", "Naco", "Bella Vista", "Zona Colonial", "Evaristo Morales"], "/images/drone/fotografia-dron-santo-domingo.webp"),
  city("punta-cana", "punta-cana", "Punta Cana", "La Altagracia", "Las villas, resorts, playas y proyectos para inversionistas requieren tomas que vendan lifestyle, acceso, piscina, playa y distancia visual a amenidades.", "Villas, resorts, beaches and investor projects require shots that sell lifestyle, access, pool, beach and visual distance to amenities.", ["Bavaro", "Cap Cana", "Cocotal", "Uvero Alto", "Los Corales"], "/images/drone/drone-inmobiliario-republica-dominicana.webp"),
  city("la-romana", "la-romana", "La Romana", "La Romana", "Casa de Campo, Altos de Chavon, villas y proyectos premium dependen de imagenes aereas limpias que muestren privacidad, golf, marina y escala del terreno.", "Casa de Campo, Altos de Chavon, villas and premium projects depend on clean aerial imagery showing privacy, golf, marina and land scale.", ["Casa de Campo", "Altos de Chavon", "Bayahibe", "Caleta"]),
  city("santiago", "santiago", "Santiago", "Santiago", "El mercado combina torres residenciales, industrias, naves, fincas cercanas y obras urbanas donde el dron ayuda a documentar avance y ubicacion.", "The market combines residential towers, industry, warehouses, nearby farms and urban works where drone helps document progress and location.", ["Villa Olga", "Los Jardines", "La Trinitaria", "Cerros de Gurabo"]),
  city("cap-cana", "cap-cana", "Cap Cana", "La Altagracia", "Las restricciones, privacidad y valor premium de villas, marina y golf obligan a planificar vuelo, altura, horarios y angulos antes de la sesion.", "Restrictions, privacy and premium villa, marina and golf value require planning flight, height, timing and angles before the session.", ["Marina Cap Cana", "Juanillo", "Punta Espada", "Ciudad Las Canas"], "/images/drone/drone-inmobiliario-republica-dominicana.webp"),
  city("casa-de-campo", "casa-de-campo", "Casa de Campo", "La Romana", "El contenido aereo debe mostrar jardines, golf, privacidad, arquitectura, piscina, acceso y relacion de la villa con la comunidad.", "Aerial media should show gardens, golf, privacy, architecture, pool, access and the villa's relationship with the community.", ["Minitas", "Dye Fore", "La Marina", "Altos de Chavon"]),
  city("las-terrenas", "las-terrenas", "Las Terrenas", "Samana", "Las playas, montanas, villas turisticas y accesos rurales necesitan drone para explicar vista, pendiente, distancia al mar y entorno natural.", "Beaches, mountains, vacation villas and rural access need drone to explain view, slope, distance to the sea and natural setting.", ["Playa Bonita", "Coson", "El Portillo", "Pueblo de los Pescadores"], "/images/drone/galeria-dron-rd.webp"),
  city("samana", "samana", "Samana", "Samana", "Bahia, montanas, proyectos turisticos y terrenos requieren tomas amplias para entender acceso, vista, topografia y potencial.", "Bay, mountains, tourism projects and land require wide shots to understand access, view, topography and potential.", ["Las Galeras", "El Limon", "Santa Barbara", "Cayo Levantado"], "/images/drone/galeria-dron-rd.webp"),
  city("puerto-plata", "puerto-plata", "Puerto Plata", "Puerto Plata", "La mezcla de costa, montana, turismo, hoteles y propiedades con vista hace que el dron sea clave para vender ubicacion y experiencia.", "The mix of coast, mountain, tourism, hotels and view properties makes drone key for selling location and experience.", ["Playa Dorada", "Costambar", "Cofresi", "Malecon"]),
  city("jarabacoa", "jarabacoa", "Jarabacoa", "La Vega", "Cabanas, fincas, rios y montanas necesitan fotografia aerea para mostrar terreno, privacidad, acceso y paisaje.", "Cabins, farms, rivers and mountains need aerial photography to show land, privacy, access and landscape.", ["Pinar Quemado", "La Confluencia", "Manabao", "Jamaca de Dios"], "/images/drone/galeria-dron-rd.webp"),
  city("juan-dolio", "juan-dolio", "Juan Dolio", "San Pedro de Macoris", "Torres frente al mar, apartamentos turisticos y proyectos de playa necesitan vista aerea para explicar playa, carretera, acceso y amenidades.", "Oceanfront towers, vacation apartments and beach projects need aerial views to explain beach, road, access and amenities.", ["Villas del Mar", "Guayacanes", "Metro Country Club"]),
  city("bavaro", "bavaro", "Bavaro", "La Altagracia", "Airbnb, condominios, resorts y villas compiten por atencion; el dron permite mostrar playa, piscina, acceso y contexto turistico.", "Airbnbs, condos, resorts and villas compete for attention; drone shows beach, pool, access and tourism context.", ["Los Corales", "Cortecito", "Cocotal", "Arena Gorda"], "/images/drone/drone-inmobiliario-republica-dominicana.webp"),
  city("miches", "miches", "Miches", "El Seibo", "Como zona emergente de resorts e inversion, Miches necesita documentacion aerea para terrenos, playas, acceso y escala de desarrollo.", "As an emerging resort and investment zone, Miches needs aerial documentation for land, beaches, access and development scale.", ["Costa Esmeralda", "Playa Arriba", "Laguna Limon"]),
  city("bayahibe", "bayahibe", "Bayahibe", "La Altagracia", "Hoteles, villas, tours y propiedades turisticas usan drone para comunicar agua, playa, acceso, entorno y valor vacacional.", "Hotels, villas, tours and tourism properties use drone to communicate water, beach, access, setting and vacation value.", ["Dominicus", "Bayahibe Centro", "Parque del Este"])
].map((page) => {
  const ctx = cityLocalContext[page.slug];
  const sisters = ctx?.sisters;
  return {
    ...page,
    ...(ctx ? { localContext: ctx.es, enLocalContext: ctx.en } : {}),
    ...(sisters ? { sisterCities: sisters } : {})
  };
});

export const guidePages: DronePage[] = [
  {
    slug: "permisos-dron-republica-dominicana",
    enSlug: "drone-permits-dominican-republic",
    type: "guide",
    title: "Permisos de dron en Republica Dominicana | Guia Babula Shots",
    enTitle: "Drone permits in Dominican Republic | Babula Shots guide",
    description: "Guia practica sobre permisos, seguridad, clima y planificacion para servicios de dron en Republica Dominicana.",
    enDescription: "Practical guide on permits, safety, weather and planning for drone services in Dominican Republic.",
    h1: "Permisos y planificacion de dron en Republica Dominicana",
    enH1: "Drone permits and planning in Dominican Republic",
    intro: "Antes de volar hay que evaluar zona, altura, clima, privacidad, cercania a aeropuertos, personas, propiedad privada y objetivo comercial.",
    enIntro: "Before flying, the area, height, weather, privacy, proximity to airports, people, private property and commercial objective must be evaluated.",
    audience: "Clientes que quieren reservar dron y entender por que no todas las ubicaciones se pueden volar igual.",
    enAudience: "Clients who want to book drone service and understand why not every location can be flown the same way.",
    deliverables: ["Checklist de vuelo", "Brief de proyecto", "Ventana de clima", "Plan de seguridad", "Alternativas si no se puede volar"],
    enDeliverables: ["Flight checklist", "Project brief", "Weather window", "Safety plan", "Alternatives if flight is not possible"],
    useCases: ["Resorts", "Zonas urbanas", "Obras", "Industria", "Eventos"],
    enUseCases: ["Resorts", "Urban areas", "Construction", "Industry", "Events"],
    localNotes: ["El piloto debe priorizar seguridad y viabilidad antes que cualquier toma.", "En zonas sensibles pueden requerirse coordinaciones adicionales.", "Siempre conviene reservar con margen para clima y permisos."],
    enLocalNotes: ["The pilot must prioritize safety and feasibility over any shot.", "Sensitive areas may require additional coordination.", "Always book with margin for weather and permits."],
    faq: baseFaq("Republica Dominicana"),
    related: ["precios-servicio-dron-republica-dominicana", "dron-punta-cana", "dron-inmobiliario-arquitectura"],
    image: "/images/drone/piloto-dron-republica-dominicana.webp"
  }
];

export const allPages = [...servicePages, ...cityPages, ...guidePages];

export function pathFor(page: DronePage, locale: Locale = "es") {
  return locale === "en" ? `/en/${page.enSlug}/` : `/${page.slug}/`;
}

export function findPage(slug: string, locale: Locale = "es") {
  return allPages.find((page) => slug === (locale === "en" ? page.enSlug : page.slug));
}

export function canonicalUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
}
