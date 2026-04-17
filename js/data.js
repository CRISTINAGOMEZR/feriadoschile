// ===================== CONSTANTS =====================
const MESES=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
const MESES_F=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DIAS=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

// ===================== DATA POR AÑO =====================
const DATA = {
  2025: {
    feriados: [
      {fecha:new Date(2025,0,1), nombre:'Año Nuevo',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 19.973'},
      {fecha:new Date(2025,3,18),nombre:'Viernes Santo',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2025,3,19),nombre:'Sábado Santo',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2025,4,1), nombre:'Día Nacional del Trabajo',tipo:'civil',irr:true,ley:'Código del Trabajo, Ley 19.973'},
      {fecha:new Date(2025,4,21),nombre:'Día de las Glorias Navales',tipo:'civil',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2025,5,20),nombre:'Día Nacional de los Pueblos Indígenas',tipo:'civil',irr:false,ley:'Ley 21.357'},
      {fecha:new Date(2025,5,29),nombre:'San Pedro y San Pablo',tipo:'religioso',irr:false,ley:'Ley 2.977, Ley 18.432, Ley 19.668'},
      {fecha:new Date(2025,6,16),nombre:'Día de la Virgen del Carmen',tipo:'religioso',irr:false,ley:'Ley 20.148'},
      {fecha:new Date(2025,7,15),nombre:'Asunción de la Virgen',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2025,8,18),nombre:'Independencia Nacional',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 19.973'},
      {fecha:new Date(2025,8,19),nombre:'Día de las Glorias del Ejército',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 20.629'},
      {fecha:new Date(2025,9,13),nombre:'Encuentro de Dos Mundos',tipo:'civil',irr:false,ley:'Ley 3.810, Ley 19.668'},
      {fecha:new Date(2025,9,31),nombre:'Día de las Iglesias Evangélicas y Protestantes',tipo:'religioso',irr:false,ley:'Ley 20.299'},
      {fecha:new Date(2025,10,1),nombre:'Día de Todos los Santos',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2025,11,8),nombre:'Inmaculada Concepción',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2025,11,25),nombre:'Navidad',tipo:'religioso',irr:true,ley:'Ley 2.977, Ley 19.973'},
    ],
    regionales: [
      {fecha:'Dom 8 Jun',nombre:'Asalto y Toma del Morro de Arica',region:'Región de Arica y Parinacota',ley:'Ley 20.663',leyUrl:'https://www.bcn.cl/leychile/navegar?idNorma=1050508'},
      {fecha:'Mié 20 Ago',nombre:'Nacimiento del Prócer de la Independencia',region:'Chillán y Chillán Viejo',ley:'Ley 16.535, Ley 20.768',leyUrl:'https://www.bcn.cl/leychile/Navegar?idNorma=28517'},
    ]
  },
  2026: {
    feriados: [
      {fecha:new Date(2026,0,1), nombre:'Año Nuevo',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 19.973'},
      {fecha:new Date(2026,3,3), nombre:'Viernes Santo',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2026,3,4), nombre:'Sábado Santo',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2026,4,1), nombre:'Día Nacional del Trabajo',tipo:'civil',irr:true,ley:'Código del Trabajo, Ley 19.973'},
      {fecha:new Date(2026,4,21),nombre:'Día de las Glorias Navales',tipo:'civil',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2026,5,21),nombre:'Día Nacional de los Pueblos Indígenas',tipo:'civil',irr:false,ley:'Ley 21.357'},
      {fecha:new Date(2026,5,29),nombre:'San Pedro y San Pablo',tipo:'religioso',irr:false,ley:'Ley 2.977, Ley 18.432, Ley 19.668'},
      {fecha:new Date(2026,6,16),nombre:'Día de la Virgen del Carmen',tipo:'religioso',irr:false,ley:'Ley 20.148'},
      {fecha:new Date(2026,7,15),nombre:'Asunción de la Virgen',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2026,8,18),nombre:'Independencia Nacional',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 19.973'},
      {fecha:new Date(2026,8,19),nombre:'Día de las Glorias del Ejército',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 20.629'},
      {fecha:new Date(2026,9,12),nombre:'Encuentro de Dos Mundos',tipo:'civil',irr:false,ley:'Ley 3.810, Ley 19.668'},
      {fecha:new Date(2026,9,31),nombre:'Día de las Iglesias Evangélicas y Protestantes',tipo:'religioso',irr:false,ley:'Ley 20.299'},
      {fecha:new Date(2026,10,1),nombre:'Día de Todos los Santos',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2026,11,8),nombre:'Inmaculada Concepción',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2026,11,25),nombre:'Navidad',tipo:'religioso',irr:true,ley:'Ley 2.977, Ley 19.973'},
    ],
    regionales: [
      {fecha:'Dom 7 Jun',nombre:'Asalto y Toma del Morro de Arica',region:'Región de Arica y Parinacota',ley:'Ley 20.663',leyUrl:'https://www.bcn.cl/leychile/navegar?idNorma=1050508'},
      {fecha:'Jue 20 Ago',nombre:'Nacimiento del Prócer de la Independencia',region:'Chillán y Chillán Viejo',ley:'Ley 16.535, Ley 20.768',leyUrl:'https://www.bcn.cl/leychile/Navegar?idNorma=28517'},
    ]
  },
  2027: {
    feriados: [
      {fecha:new Date(2027,0,1), nombre:'Año Nuevo',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 19.973'},
      {fecha:new Date(2027,2,26),nombre:'Viernes Santo',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2027,2,27),nombre:'Sábado Santo',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2027,4,1), nombre:'Día Nacional del Trabajo',tipo:'civil',irr:true,ley:'Código del Trabajo, Ley 19.973'},
      {fecha:new Date(2027,4,21),nombre:'Día de las Glorias Navales',tipo:'civil',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2027,5,21),nombre:'Día Nacional de los Pueblos Indígenas',tipo:'civil',irr:false,ley:'Ley 21.357'},
      {fecha:new Date(2027,5,28),nombre:'San Pedro y San Pablo',tipo:'religioso',irr:false,ley:'Ley 2.977, Ley 18.432, Ley 19.668'},
      {fecha:new Date(2027,6,16),nombre:'Día de la Virgen del Carmen',tipo:'religioso',irr:false,ley:'Ley 20.148'},
      {fecha:new Date(2027,7,15),nombre:'Asunción de la Virgen',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2027,8,17),nombre:'Feriado Adicional Fiestas Patrias',tipo:'civil',irr:false,ley:'Ley 20.983'},
      {fecha:new Date(2027,8,18),nombre:'Independencia Nacional',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 19.973'},
      {fecha:new Date(2027,8,19),nombre:'Día de las Glorias del Ejército',tipo:'civil',irr:true,ley:'Ley 2.977, Ley 20.629'},
      {fecha:new Date(2027,9,11),nombre:'Encuentro de Dos Mundos',tipo:'civil',irr:false,ley:'Ley 3.810, Ley 19.668'},
      {fecha:new Date(2027,9,31),nombre:'Día de las Iglesias Evangélicas y Protestantes',tipo:'religioso',irr:false,ley:'Ley 20.299'},
      {fecha:new Date(2027,10,1),nombre:'Día de Todos los Santos',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2027,11,8),nombre:'Inmaculada Concepción',tipo:'religioso',irr:false,ley:'Ley 2.977'},
      {fecha:new Date(2027,11,25),nombre:'Navidad',tipo:'religioso',irr:true,ley:'Ley 2.977, Ley 19.973'},
    ],
    regionales: [
      {fecha:'Lun 7 Jun',nombre:'Asalto y Toma del Morro de Arica',region:'Región de Arica y Parinacota',ley:'Ley 20.663',leyUrl:'https://www.bcn.cl/leychile/navegar?idNorma=1050508'},
      {fecha:'Vie 20 Ago',nombre:'Nacimiento del Prócer de la Independencia',region:'Chillán y Chillán Viejo',ley:'Ley 16.535, Ley 20.768',leyUrl:'https://www.bcn.cl/leychile/Navegar?idNorma=28517'},
    ]
  }
};

// ===================== ACTIVIDADES DATA =====================
const CAT_COLORS={aventura:'#E83030',naturaleza:'#27ae60',cultura:'#2D6BB5',gastronomia:'#FF8C42',playa:'#0984e3',montana:'#6c5ce7',ciudad:'#1B3F72'};
const CAT_LABELS={aventura:'Aventura',naturaleza:'Naturaleza',cultura:'Cultura',gastronomia:'Gastronomía',playa:'Playa',montana:'Montaña',ciudad:'Ciudad'};

// foto: Unsplash ID — ?w=480&q=70&auto=format&fit=crop&crop=entropy (WebP, ~35KB, mejor encuadre)
// Santiago primero — mayoría de usuarios está en Santiago
const ACTIVIDADES=[
  // ── SANTIAGO ──────────────────────────────────────────────
  {nombre:'Cerro San Cristóbal',desc:'El gran pulmón verde de Santiago: caminatas panorámicas, teleférico y picnic con atardecer andino. Uno de los parques urbanos más grandes del mundo.',ubicacion:'Santiago',cat:'ciudad',temporada:'todo-el-año',url:'https://www.tripadvisor.cl/Attraction_Review-g294305-d317613-Reviews-Cerro_San_Cristobal-Santiago_Santiago_Metropolitan_Region.html',foto:'1575783970733-1aaedde1db74'},
  {nombre:'Mercado Central',desc:'El mejor marisco de Santiago en el mercado histórico del centro. Combina con una mañana en el Barrio Italia o el Museo de Bellas Artes.',ubicacion:'Santiago',cat:'gastronomia',temporada:'todo-el-año',url:'https://santiagosecreto.com/que-hacer-el-fin-de-semana-en-santiago/',foto:'1534482421-64566f976cfa'},
  {nombre:'Barrio Lastarria y La Chascona',desc:'El barrio más bohemio de Santiago con cafés, galerías y librerías. Visita la casa museo de Pablo Neruda, declarada Monumento Nacional.',ubicacion:'Santiago',cat:'cultura',temporada:'todo-el-año',url:'https://santiagosecreto.com/que-hacer-el-fin-de-semana-en-santiago/',foto:'1513635269975-59663e0ac1ad'},
  {nombre:'Tour y cata en viña Cousiño Macul',desc:'Fundada en 1856, esta viña familiar en Santiago tiene bodegas centenarias con toneles históricos. Tour + cata de vinos premiados.',ubicacion:'Santiago',cat:'gastronomia',temporada:'todo-el-año',url:'https://www.tripadvisor.cl/Attraction_Review-g294305-d591917-Reviews-Cousino_Macul_Winery-Santiago_Santiago_Metropolitan_Region.html',foto:'1510812431401-41d2bd2722f3'},
  {nombre:'Sky Costanera: 300 metros de altura',desc:'Vista de 360° desde el edificio más alto de Latinoamérica: Santiago completo, la cordillera nevada y la costa en días despejados.',ubicacion:'Santiago',cat:'ciudad',temporada:'todo-el-año',url:'https://www.tripadvisor.cl/Attraction_Review-g294305-d2358967-Reviews-Sky_Costanera-Santiago_Santiago_Metropolitan_Region.html',foto:'1477959858617-67f85cf4f1df'},
  {nombre:'Reserva Nacional Río Clarillo',desc:'Bosque esclerófilo nativo a 45 minutos de Santiago con senderos entre arrayanes y boldos. Ideal para un trekking accesible en día feriado.',ubicacion:'Pirque, Región Metropolitana',cat:'naturaleza',temporada:'primavera',url:'https://chileestuyo.cl/que-hacer/naturaleza/',foto:'1448375240586-882707db888b'},
  {nombre:'Ski y snowboard en los Andes',desc:'A 45 minutos de Santiago, Valle Nevado y Portillo ofrecen más de 100 pistas con nieve garantizada y vistas que cortan el aliento.',ubicacion:'Cordillera, Región Metropolitana',cat:'montana',temporada:'invierno',url:'https://chileestuyo.cl/que-hacer/deporte-y-aventura/',foto:'1551524559-8af4e6624178'},
  // ── RESTO DE CHILE ────────────────────────────────────────
  {nombre:'Valparaíso: ascensores y murales',desc:'Funiculares a los cerros más coloridos del Pacífico y calles que son museo a cielo abierto con murales de artistas de todo el mundo.',ubicacion:'Valparaíso',cat:'cultura',temporada:'todo-el-año',url:'https://chileestuyo.cl/regiones/region-de-valparaiso/',foto:'1558618666-fcd25c85cd64'},
  {nombre:'Valle de la Luna al atardecer',desc:'Formaciones de sal y roca talladas por el viento que brillan en tonos naranjas y rojos cuando el sol se pone. Una experiencia visual única.',ubicacion:'San Pedro de Atacama',cat:'naturaleza',temporada:'todo-el-año',url:'https://chileestuyo.cl/destino/san-pedro-de-atacama/',foto:'1506905925346-21bda4d32df4'},
  {nombre:'Géiseres del Tatio al amanecer',desc:'El campo geotermal más alto del mundo a 4.320 m.s.n.m.: decenas de fumarolas estallan en vapor bajo temperaturas bajo cero.',ubicacion:'San Pedro de Atacama',cat:'naturaleza',temporada:'todo-el-año',url:'https://chileestuyo.cl/destino/san-pedro-de-atacama/',foto:'1464822759023-fed622ff2c3b'},
  {nombre:'Astroturismo en el Valle del Elqui',desc:'El cielo más despejado del planeta con más de 40 observatorios. Galaxias y la Vía Láctea a simple vista en una noche que cambia la perspectiva.',ubicacion:'Valle del Elqui, Coquimbo',cat:'naturaleza',temporada:'todo-el-año',url:'https://chileestuyo.cl/destino/observatorios-astronomicos-en-el-valle-de-elqui-y-coquimbo-2/',foto:'1419242902214-272b3f66ee7a'},
  {nombre:'Trekking en Torres del Paine',desc:'Glaciares, lagunas turquesas y las icónicas torres de granito en uno de los parques más espectaculares del mundo. El circuito W es la ruta clásica.',ubicacion:'Puerto Natales, Magallanes',cat:'aventura',temporada:'verano',url:'https://chileestuyo.cl/que-hacer/deporte-y-aventura/',foto:'1501854140801-50d01698950b'},
  {nombre:'Termas en los Siete Lagos',desc:'Aguas termales naturales rodeadas de volcanes nevados, bosques nativos y lagos cristalinos en la zona lacustre más hermosa del sur.',ubicacion:'Siete Lagos, Los Ríos',cat:'naturaleza',temporada:'todo-el-año',url:'https://chileestuyo.cl/itinerarios/rompe-la-rutina-en-el-destino-siete-lagos-entre-volcanes-y-aguas-termales/',foto:'1439853949212-36089b5f0af5'},
  {nombre:'Saltos del Petrohué',desc:'Las aguas turquesas del río Petrohué se precipitan entre rocas volcánicas negras con el volcán Osorno de fondo. Un paisaje de postal.',ubicacion:'Puerto Varas, Los Lagos',cat:'naturaleza',temporada:'primavera',url:'https://www.tripadvisor.cl/Attraction_Review-g303697-d530959-Reviews-Saltos_del_Petrohue-Puerto_Varas_Los_Lagos_Region.html',foto:'1467890947394-8171244e5410'},
  {nombre:'Parque Nacional Radal Siete Tazas',desc:'El río Claro esculpió en basalto siete piletas de agua turquesa encadenadas. Combinado con una catarata de 50 metros y bosque nativo.',ubicacion:'Molina, Maule',cat:'naturaleza',temporada:'primavera',url:'https://chileestuyo.cl/destino/parque-nacional-radal-siete-tazas-trekking-y-camping/',foto:'1548777204-9ce67f7d60fc'},
  {nombre:'Ruta del pisco artesanal',desc:'Destilerías con uvas moscatel cultivadas bajo el sol del desierto. Catas, tours de producción y paisaje de viñedos en el valle del Elqui.',ubicacion:'Pisco Elqui, Coquimbo',cat:'gastronomia',temporada:'otono',url:'https://chileestuyo.cl/turismo-gastronomico/',foto:'1474589046814-04e42e4c5780'},
  {nombre:'Surf en la costa araucana',desc:'Olas consistentes y playas de arena negra volcánica en Mehuín y Pucatrihue. Destinos secretos para surfistas que buscan alejarse de las multitudes.',ubicacion:'Costa de La Araucanía',cat:'playa',temporada:'verano',url:'https://chileestuyo.cl/que-hacer/deporte-y-aventura/',foto:'1502680390469-be75c86b636f'},
  {nombre:'Rapa Nui: moáis y cultura viva',desc:'La isla más remota del Pacífico, hogar de los enigmáticos moáis y de una cultura que celebra el festival Tapati cada verano.',ubicacion:'Isla de Pascua',cat:'cultura',temporada:'verano',url:'https://chileestuyo.cl/destino/rapa-nui/',foto:'1518105779142-d975f22f1b0a'},
  {nombre:'Sandboard en dunas de Atacama',desc:'Deslízate por dunas de hasta 150 metros en el desierto más árido del planeta. Adrenalina pura en el paisaje más fotogénico de Chile.',ubicacion:'Región de Atacama',cat:'aventura',temporada:'todo-el-año',url:'https://chileestuyo.cl/que-hacer/deporte-y-aventura/',foto:'1509316785289-025f5b846b35'},
  {nombre:'Kayak en fiordos patagónicos',desc:'Rema entre glaciares y paredes de roca cubiertas de musgo en canales que solo se pueden explorar desde el agua. La Patagonia en su versión más íntima.',ubicacion:'Puerto Natales / Aysén',cat:'aventura',temporada:'verano',url:'https://chileestuyo.cl/que-hacer/deporte-y-aventura/',foto:'1559494007-9b7af6d33fad'},
  {nombre:'Gastronomía mapuche en La Araucanía',desc:'Siéntate en una ruca y comparte un fogón con cocineras mapuche que preparan recetas milenarias con milcao y hierbas del bosque.',ubicacion:'La Araucanía',cat:'gastronomia',temporada:'todo-el-año',url:'https://chileestuyo.cl/turismo-gastronomico/',foto:'1555396273-367ea4eb4db5'},
  {nombre:'Playas de Viña y Algarrobo',desc:'El litoral central concentra playas urbanas y caletas de pescadores a menos de dos horas de Santiago. Sol, mariscos y buen clima.',ubicacion:'Viña del Mar / Algarrobo',cat:'playa',temporada:'verano',url:'https://chileestuyo.cl/destino/litoral-de-los-poetas/',foto:'1507525428034-b723cf961d3e'},
  {nombre:'Volcán Villarrica: sube hasta el cráter',desc:'Con guía y equipo, puedes llegar al borde de uno de los volcanes más activos de Sudamérica (2.847 m) y ver la lava desde arriba.',ubicacion:'Pucón, La Araucanía',cat:'aventura',temporada:'verano',url:'https://chileestuyo.cl/que-hacer/deporte-y-aventura/',foto:'1518467166778-b88f373ffec7'},
  {nombre:'Crucero por glaciares australes',desc:'Navega por fiordos, bosques de lengas e icebergs azules. La forma más épica de ver la Patagonia chilena desde Puerto Montt.',ubicacion:'Puerto Montt / Patagonia',cat:'naturaleza',temporada:'verano',url:'https://chileestuyo.cl/que-hacer/naturaleza/',foto:'1519817914152-22d216bb9170'},
  {nombre:'Birdwatching en los Humedales del Norte',desc:'Salares y humedales altiplánicos con flamencos rosados y más de 200 especies endémicas. El lago Chungará es un paraíso para el birdwatching.',ubicacion:'Arica y Parinacota',cat:'naturaleza',temporada:'otono',url:'https://chileestuyo.cl/itinerarios/vive-el-sincretismo-cultural-de-la-region-de-arica-y-parinacota/',foto:'1557804506-669a67965ba0'}
];

// ===================== SEASON & HERO =====================
const SEASON_LABEL={verano:'Verano (Dic–Feb)',otono:'Otoño (Mar–May)',invierno:'Invierno (Jun–Ago)',primavera:'Primavera (Sep–Nov)'};

const HERO_GRADIENTS = {
  2025: 'linear-gradient(150deg,#1a3a6b 0%,#0a1e40 50%,#162c5e 100%)',
  2026: 'linear-gradient(150deg,#1B3F72 0%,#0d2a52 50%,#1a3460 100%)',
  2027: 'linear-gradient(150deg,#1f2d6e 0%,#0f1e50 50%,#1a2860 100%)'
};
