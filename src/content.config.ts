import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    isNew: z.boolean().default(false),
    youtubeUrl: z.string().optional(),
    cta: z.object({
      label: z.string(),
      url: z.string(),
    }).optional(),
    author: z.string().default('Équipe Zently'),
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };
