export const siteConfig = {
	name: 'Maquinarias para Siempre',
	description: 'Maquinaria forestal europea para el mercado colombiano.',
	location: 'Medellín, Antioquia',
	coverage: 'Colombia',
	phone: '+57 316 495 5256',
	email: 'maquinariaspasiempre@gmail.com',
	instagramHandle: '@maquinarias_para_siempre_sas',
	instagramUrl: 'https://www.instagram.com/maquinarias_para_siempre_sas/',
	businessHours: 'lunes a viernes, de 9:00 a. m. a 5:00 p. m.',
	defaultWhatsAppMessage:
		'Hola, quiero recibir información sobre maquinaria forestal de Maquinarias para Siempre.',
	provisionalNotice:
		'Contenido provisional. No corresponde a una ficha comercial publicada.',
} as const;

export function getWhatsAppUrl(message = siteConfig.defaultWhatsAppMessage) {
	const digits = siteConfig.phone.replace(/\D/g, '');
	return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
