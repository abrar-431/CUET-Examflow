import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useNavigate } from 'react-router-dom';

const questionSchema = z.object({
  text: z.string().min(1, 'Question text is required'),
  type: z.enum(['multiple-choice', 'short-answer']),
  options: z.array(z.string()).optional(),
  points: z.number().min(1),
});

const examSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string(),
  duration: z.number().min(30, 'Duration must be at least 30 minutes'),
  questions: z.array(questionSchema).min(1, 'At least one question is required'),
});

type ExamForm = z.infer<typeof examSchema>;

export function CreateExam() {
  const navigate = useNavigate();
  const [questions, setQuestions] = React.useState<any[]>([]);

  const { register, handleSubmit, formState: { errors } } = useForm<ExamForm>({
    resolver: zodResolver(examSchema),
    defaultValues: {
      questions: [],
    },
  });

  const addQuestion = (type: 'multiple-choice' | 'short-answer') => {
    setQuestions([...questions, { type, options: type === 'multiple-choice' ? [''] : undefined }]);
  };

  const onSubmit = async (data: ExamForm) => {
    // In a real app, this would be an API call
    console.log('Exam data:', data);
    navigate('/dashboard/teacher/exams');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Exam</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Exam Title"
          {...register('title')}
          error={errors.title?.message}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register('description')}
            className="w-full p-2 border rounded-md"
            rows={3}
          />
        </div>

        <Input
          label="Duration (minutes)"
          type="number"
          min={30}
          {...register('duration', { valueAsNumber: true })}
          error={errors.duration?.message}
        />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Questions</h3>
            <div className="space-x-2">
              <Button
                type="button"
                onClick={() => addQuestion('multiple-choice')}
                variant="secondary"
              >
                Add Multiple Choice
              </Button>
              <Button
                type="button"
                onClick={() => addQuestion('short-answer')}
                variant="secondary"
              >
                Add Short Answer
              </Button>
            </div>
          </div>

          {questions.map((question, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-4">
              <Input
                label={`Question ${index + 1}`}
                {...register(`questions.${index}.text`)}
                error={errors.questions?.[index]?.text?.message}
              />

              {question.type === 'multiple-choice' && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Options
                  </label>
                  {question.options.map((_: any, optionIndex: number) => (
                    <Input
                      key={optionIndex}
                      {...register(`questions.${index}.options.${optionIndex}`)}
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                  ))}
                  <Button
                    type="button"
                    onClick={() => {
                      const newQuestions = [...questions];
                      newQuestions[index].options.push('');
                      setQuestions(newQuestions);
                    }}
                    variant="secondary"
                  >
                    Add Option
                  </Button>
                </div>
              )}

              <Input
                label="Points"
                type="number"
                min={1}
                {...register(`questions.${index}.points`, { valueAsNumber: true })}
                error={errors.questions?.[index]?.points?.message}
              />
            </div>
          ))}
        </div>

        <Button type="submit" className="w-full">
          Create Exam
        </Button>
      </form>
    </div>
  );
}