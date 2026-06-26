export const siteConfig = {
	name: 'Maquinarias para Siempre',
	legalName: 'Maquinarias para Siempre S.A.S.',
	startYear: '2014',
	description: 'Maquinaria, equipos, sierras y repuestos para operaciones forestales y de procesamiento de madera en Colombia.',
	location: 'Medellín, Antioquia',
	coverage: 'Colombia',
	phone: '+57 316 495 5256',
	email: 'maquinariaspasiempre@gmail.com',
	instagramHandle: '@maquinarias_para_siempre_sas',
	instagramUrl: 'https://www.instagram.com/maquinarias_para_siempre_sas/',
	businessHours: 'lunes a viernes, de 8:00 a. m. a 6:00 p. m.',
	krpanRelationship: 'representante y distribuidor oficial y exclusivo de Krpan en Colombia',
	representedBrandRelationship: 'marca representada por Maquinarias para Siempre en Colombia',
	companyIntro:
		'Maquinarias para Siempre S.A.S. comercializa maquinaria, equipos, sierras y repuestos para operaciones forestales y de procesamiento de madera en Colombia. Desde 2014, representa fabricantes especializados y acompaña a sus clientes en la selección de equipos y configuraciones según el tipo de trabajo.',
	availabilityHeading: 'Disponibilidad y plazo de entrega: consultar',
	availabilityText:
		'La disponibilidad, configuración y tiempo de entrega se confirman para cada cotización y pueden variar según el producto y el proceso de importación.',
	otherReferenceTitle: '¿No encuentras la referencia que necesitas?',
	otherReferenceText:
		'El catálogo web muestra algunas de las referencias más relevantes. También podemos consultar otros modelos, capacidades y configuraciones de los fabricantes que representamos. Cuéntanos qué equipo buscas y las condiciones de tu operación.',
	otherReferenceMessage:
		'Hola, quiero consultar otra referencia o configuración. Mi equipo o necesidad es:',
	sparePartsTitle: 'Repuestos para equipos Krpan',
	sparePartsText:
		'Contamos con inventario local de algunos repuestos básicos para winches y grapas forestales Krpan. Para referencias y componentes específicos, consulta disponibilidad.',
	sparePartsMessage:
		'Hola, quiero consultar disponibilidad de repuestos para un equipo Krpan.',
	defaultWhatsAppMessage:
		'Hola, quiero recibir información sobre maquinaria forestal de Maquinarias para Siempre.',
	provisionalNotice:
		'Contenido provisional. No corresponde a una ficha comercial publicada.',
} as const;

export function getWhatsAppUrl(message = siteConfig.defaultWhatsAppMessage) {
	const digits = siteConfig.phone.replace(/\D/g, '');
	return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const commercialSolutions = [
	{
		title: 'Winches forestales',
		text: 'Equipos para arrastre y apoyo en operaciones forestales, con selección según tractor y trabajo.',
		href: '/categorias/winches-forestales/',
		image: '/images/products/krpan-6-erp/krpan-6-erp-vista-1.jpg',
		alt: 'Winche forestal Krpan de referencia',
	},
	{
		title: 'Traileres forestales',
		text: 'Equipos para transporte de madera y materiales forestales, con configuración por definir.',
		href: '/categorias/traileres-forestales/',
		image: '/images/categories/traileres-forestales-krpan.png',
		alt: 'Trailer forestal Krpan con grúa de referencia',
	},
	{
		title: 'Grúas forestales',
		text: 'Soluciones para carga, descarga y manipulación de madera bajo consulta comercial.',
		href: '/categorias/gruas-forestales/',
		image: '/images/categories/gruas-forestales-krpan.png',
		alt: 'Grúa forestal Krpan de referencia',
	},
	{
		title: 'Grapas y rotadores',
		text: 'Implementos y accesorios para manipulación de troncos, sujetos a compatibilidad del equipo.',
		href: '/categorias/grapas-forestales/',
		image: '/images/categories/grapas-forestales-krpan.png',
		alt: 'Grapa forestal Krpan de referencia',
	},
	{
		title: 'Sierras',
		text: 'Línea de sierras consultable según aplicación y referencia requerida.',
		href: '/marcas/mill-industrias/',
		image: '/images/solutions/mill/mill-serras-referencia.webp',
		alt: 'Imagen oficial de referencia de Mill Serras',
	},
	{
		title: 'Aserríos y equipos de procesamiento',
		text: 'Equipos de procesamiento de madera y soluciones relacionadas bajo consulta.',
		href: '/marcas/mill-industrias/',
		image: '/images/solutions/mill/mill-maquinas-referencia.png',
		alt: 'Imagen oficial de referencia de Mill Máquinas',
	},
	{
		title: 'Repuestos',
		text: 'Consulta de repuestos y componentes según equipo, referencia y disponibilidad confirmada.',
		href: '/contacto/',
		image: undefined,
		alt: undefined,
	},
] as const;

const commercialProductOrder = ['krpan-6-erp', 'krpan-8-erp', 'krpan-gp-8-df', 'krpan-5-erp', 'krpan-4-ep'];

export function sortProductsByCommercialPriority<
	T extends { data: { slug: string; featured?: boolean; name: string } },
>(products: T[]) {
	return [...products].sort((a, b) => {
		const featuredDelta = Number(Boolean(b.data.featured)) - Number(Boolean(a.data.featured));
		if (featuredDelta !== 0) return featuredDelta;

		const aIndex = commercialProductOrder.indexOf(a.data.slug);
		const bIndex = commercialProductOrder.indexOf(b.data.slug);
		const aRank = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
		const bRank = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;
		if (aRank !== bRank) return aRank - bRank;

		return a.data.name.localeCompare(b.data.name, 'es');
	});
}
