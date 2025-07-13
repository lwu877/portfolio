import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      skills: z.array(z.string()),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      img: z.string(),
      imgalt: z.string().optional(),
      current: z.boolean().optional(),
      extlink: z.string().optional(),
      clm: z.boolean().optional(),
    }),
  }),
};