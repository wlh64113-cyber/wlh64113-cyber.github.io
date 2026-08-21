import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const learning = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/learning' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    track: z.string(),
    order: z.number(),
    level: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    tags: z.array(z.string()).default([]),
    estimatedMinutes: z.number().optional(),
  }),
});

export const collections = { articles, learning };
