import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().or(z.date()),
    draft: z.boolean().default(false),
    image: z.string().optional(), // ← déjalo opcional para descartar bloqueo
  }),
});

export const collections = { posts };
