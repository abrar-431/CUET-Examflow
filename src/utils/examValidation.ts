import { z } from 'zod';

export const questionSchema = z.object({
  text: z.string().min(1, 'Question text is required'),
  type: z.enum(['multiple-choice', 'short-answer']),
  options: z.array(z.string()).optional(),
  points: z.number().min(1),
});

export const examSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string(),
  duration: z.number().min(30, 'Duration must be at least 30 minutes'),
  questions: z.array(questionSchema).min(1, 'At least one question is required'),
});