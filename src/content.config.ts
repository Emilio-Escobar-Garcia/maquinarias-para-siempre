import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = {
	seoTitle: z.string().optional(),
	seoDescription: z.string().optional(),
};

const sourceRecordSchema = z.object({
	label: z.string(),
	url: z.string().url(),
	consultedAt: z.string(),
	notes: z.string().optional(),
});

const brands = defineCollection({
	loader: glob({ base: './src/content/brands', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		name: z.string(),
		slug: z.string(),
		shortDescription: z.string(),
		description: z.string().optional(),
		logo: z.string().optional(),
		logoAlt: z.string().optional(),
		officialWebsite: z.string().url().optional(),
		countryOfOrigin: z.string().optional(),
		draft: z.boolean().default(false),
		...seoSchema,
	}),
});

const categories = defineCollection({
	loader: glob({ base: './src/content/categories', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		name: z.string(),
		slug: z.string(),
		shortDescription: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		imageCaption: z.string().optional(),
		alternativeTerms: z.array(z.string()).default([]),
		intro: z
			.object({
				title: z.string(),
				body: z.string(),
			})
			.optional(),
		selectionFactors: z
			.array(
				z.object({
					title: z.string(),
					text: z.string(),
				})
			)
			.default([]),
		advisorText: z.string().optional(),
		advisorButtonLabel: z.string().optional(),
		emptyProductsText: z.string().optional(),
		order: z.number().default(0),
		draft: z.boolean().default(false),
		...seoSchema,
	}),
});

const availabilityValues = ['consultar', 'disponible', 'por-encargo', 'no-disponible'] as const;

const products = defineCollection({
	loader: glob({ base: './src/content/products', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		name: z.string(),
		slug: z.string(),
		brand: reference('brands'),
		category: reference('categories'),
		shortDescription: z.string(),
		mainDescription: z.string(),
		features: z.array(z.string()).default([]),
		applications: z.array(z.string()).optional(),
		specifications: z.array(
			z.object({
				name: z.string(),
				value: z.string(),
			})
		).default([]),
		alternativeTerms: z.array(z.string()).default([]),
		images: z
			.array(
				z.union([
					z.string(),
					z.object({
						src: z.string(),
						alt: z.string(),
						sourceUrl: z.string().url().optional(),
					}),
				])
			)
			.optional(),
		video: z
			.union([
				z.string().url(),
				z.object({
					url: z.string().url(),
					label: z.string().optional(),
				}),
			])
			.optional(),
		documents: z
			.array(
				z.union([
					z.string(),
					z.object({
						href: z.string(),
						label: z.string(),
						note: z.string().optional(),
						sourceUrl: z.string().url().optional(),
					}),
				])
			)
			.optional(),
		availability: z.enum(availabilityValues).optional(),
		advisorText: z.string().optional(),
		advisorButtonLabel: z.string().optional(),
		advisorMessage: z.string().optional(),
		featured: z.boolean().default(false),
		relatedProducts: z.array(reference('products')).optional(),
		officialSource: z.string().url().optional(),
		sourceRecords: z.array(sourceRecordSchema).optional(),
		sourceNotes: z.array(z.string()).optional(),
		imageNotice: z.string().optional(),
		draft: z.boolean().default(false),
		...seoSchema,
	}),
});

export const collections = { brands, categories, products };
