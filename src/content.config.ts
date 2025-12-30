import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  statesman: defineCollection({
  		loader: async () => {
    		const response = await fetch("https://sbstatesman.com/wp-json/wp/v2/posts?tags=61401");
    		const data = await response.json();
    		// WordPress REST API returns an array of posts directly
      const posts = Array.isArray(data) ? data : [];
      return posts.map((post: any) => {
        const { id: wpId, ...rest } = post;
        const slug = post?.slug ?? String(wpId);
        return {
          ...rest,
          // Ensure Astro's required `id` is a string and not overwritten
          id: String(slug),
          // Preserve original WP numeric id under a different key if needed
          wpId,
        };
      });
  			},
  		schema: z.object({
			title: z.object({
        rendered: z.string(),
      }),
			excerpt: z.object({
        rendered: z.string(),
      }),
			guid: z.object({
        rendered: z.string().url(),
      }),
			date: z.coerce.date(),
  		}),

		}),
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
      extlinkpresent: z.boolean().optional(),
    }),
  }),
  organizations: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx,astro}', base: "./src/content/organizations" }),
    schema: z.object({
      title: z.string(),
      association: z.string().optional(),
      description: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      img: z.string(),
      imgalt: z.string().optional(),
      current: z.boolean().optional(),
      extlink: z.string().optional(),
      extlinkpresent: z.boolean().optional(),
      pagegen: z.boolean().optional().default(true),
    }),
  }),
};