import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const meetings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/meetings' }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // ISO date string e.g. "2025-09-15"
    time: z.string().optional(), // e.g. "10:00 AM CT"
    endTime: z.string().optional(), // e.g. "12:00 PM CT"
    location: z.string().optional(),
    address: z.string().optional(),
    type: z.enum(['board-meeting', 'public-hearing', 'industry-event', 'workshop']),
    description: z.string().optional(),
    agenda: z.string().optional(), // URL to agenda PDF
    minutes: z.string().optional(), // URL to minutes PDF
    cancelled: z.boolean().optional(),
  }),
});

export const collections = { meetings };
