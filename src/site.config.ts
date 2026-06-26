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
	companyIntro:
		'Maquinarias para Siempre S.A.S. comercializa maquinaria, equipos, sierras y repuestos para operaciones forestales y de procesamiento de madera en Colombia. Desde 2014, la empresa representa fabricantes especializados y acompaña a sus clientes en la selección de soluciones según el tipo de trabajo y las necesidades de cada operación.',
	availabilityHeading: 'Disponibilidad y plazo de entrega: consultar',
	availabilityText:
		'La disponibilidad, configuración y tiempo de entrega se confirman para cada cotización y pueden variar según el producto y el proceso de importación.',
	otherReferenceTitle: '¿No encuentras la referencia que necesitas?',
	otherReferenceText:
		'Además de las referencias mostradas, podemos consultar otros modelos y configuraciones del fabricante. Cuéntanos qué equipo buscas, qué tractor utilizas y cuáles son las condiciones de tu operación para orientarte y preparar una cotización.',
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

const commercialProductOrder = ['krpan-6-erp', 'krpan-8-erp', 'krpan-5-erp', 'krpan-4-ep'];

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
