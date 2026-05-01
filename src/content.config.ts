import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    industry: z.string(),
    summary: z.string(),
    services: z.array(z.string()).default([]),
    metric: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .optional(),
    publishedAt: z.coerce.date().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies };
