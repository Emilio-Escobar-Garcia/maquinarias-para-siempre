import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = {
	seoTitle: z.string().optional(),
	seoDescription: z.string().optional(),
};

const brands = defineCollection({
	loader: glob({ base: './src/content/brands', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		name: z.string(),
		slug: z.string(),
		shortDescription: z.string(),
		description: z.string().optional(),
		logo: z.string().optional(),
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
		alternativeTerms: z.array(z.string()).default([]),
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
		images: z.array(z.string()).optional(),
		video: z.string().url().optional(),
		documents: z.array(z.string()).optional(),
		availability: z.enum(availabilityValues).optional(),
		featured: z.boolean().default(false),
		relatedProducts: z.array(reference('products')).optional(),
		officialSource: z.string().url().optional(),
		draft: z.boolean().default(false),
		...seoSchema,
	}),
});

export const collections = { brands, categories, products };
