import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['surveillance-cameras', 'security-systems', 'reviews']),
    tags: z.array(z.string()),
    date: z.date(),
    readTime: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    author: z.string().default('عزيز'),
    affiliate: z.object({
      enabled: z.boolean().default(false),
      products: z.array(z.object({
        name: z.string(),
        link: z.string(),
        price: z.string().optional(),
        rating: z.number().optional()
      })).optional()
    }).optional()
  }),
});

export const collections = {
  posts: postsCollection,
};