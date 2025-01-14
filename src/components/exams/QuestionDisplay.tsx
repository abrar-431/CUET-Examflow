import React from 'react';
import { Question } from '../../types/exam';

interface QuestionDisplayProps {
  question: Question;
  answer: string;
  onChange: (answer: string) => void;
}

export function QuestionDisplay({ question, answer, onChange }: QuestionDisplayProps) {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <div className="flex justify-between">
        <p className="text-lg font-medium">{question.text}</p>
        <span className="text-sm text-gray-500">{question.points} points</span>
      </div>

      {question.type === 'multiple-choice' ? (
        <div className="space-y-2">
          {question.options?.map((option, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={answer === option}
                onChange={(e) => onChange(e.target.value)}
                className="form-radio"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <textarea
          className="w-full p-2 border rounded-md"
          rows={4}
          value={answer}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your answer here..."
        />
      )}
    </div>
  );
}