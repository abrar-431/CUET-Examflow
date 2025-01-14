import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Question } from '../../types/exam';

interface QuestionFormProps {
  index: number;
  question: Question;
  register: any;
  errors: any;
  onAddOption: () => void;
  onRemoveQuestion: () => void;
}

export function QuestionForm({
  index,
  question,
  register,
  errors,
  onAddOption,
  onRemoveQuestion,
}: QuestionFormProps) {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <div className="flex justify-between items-start">
        <Input
          label={`Question ${index + 1}`}
          {...register(`questions.${index}.text`)}
          error={errors?.questions?.[index]?.text?.message}
        />
        <Button
          type="button"
          variant="secondary"
          onClick={onRemoveQuestion}
          className="ml-2"
        >
          Remove
        </Button>
      </div>

      {question.type === 'multiple-choice' && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Options
          </label>
          {question.options?.map((_, optionIndex) => (
            <Input
              key={optionIndex}
              {...register(`questions.${index}.options.${optionIndex}`)}
              placeholder={`Option ${optionIndex + 1}`}
            />
          ))}
          <Button
            type="button"
            onClick={onAddOption}
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
        error={errors?.questions?.[index]?.points?.message}
      />
    </div>
  );
}