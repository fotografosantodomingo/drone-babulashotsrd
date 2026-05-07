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
};

export const siteUrl = "https://dron.babulashotsrd.com";
export const phone = "809 720 95 47";
export const phoneE164 = "18097209547";
export const bookingUrl = "https://dronebabulashots.setmore.com";
export const quoteUrl = "https://babulashotsrd.com/";
export const pricingSourceUrl = "https://www.fotografosantodomingo.com/es/services/real-estate-drone-photography";
export const mainBrandUrl = "https://babulashotsrd.com/";
export const inmobiliariaUrl = "https://inmobiliaria.babulashotsrd.com/";

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
];

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
