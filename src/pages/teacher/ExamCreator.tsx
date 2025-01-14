import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const examSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string(),
  duration: z.number().min(1, 'Duration must be at least 1 minute'),
  questions: z.array(z.object({
    text: z.string().min(1, 'Question text is required'),
    type: z.enum(['multiple-choice', 'short-answer']),
    options: z.array(z.string()).optional(),
    points: z.number().min(1),
  })),
});

type ExamForm = z.infer<typeof examSchema>;

export function ExamCreator() {
  const { register, handleSubmit, formState: { errors } } = useForm<ExamForm>({
    resolver: zodResolver(examSchema),
  });

  const onSubmit = (data: ExamForm) => {
    console.log('Exam data:', data);
    // Handle exam creation
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Create New Exam</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Exam Title"
          {...register('title')}
          error={errors.title?.message}
        />
        
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Questions
          </label>
          {/* Question builder component would go here */}
        </div>

        <Button type="submit">Create Exam</Button>
      </form>
    </div>
  );
}