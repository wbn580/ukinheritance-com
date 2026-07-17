import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    pubDatetime: z.string(),
    description: z.string(),
    category: z.string(),
    publishDate: z.string(),
    modDatetime: z.string(),
    ogImage: z.string().optional(),
    title: z.string(),

  },
});

export const collections = { articles };
