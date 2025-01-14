import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { ExamTimer } from '../../components/exams/ExamTimer';
import { QuestionDisplay } from '../../components/exams/QuestionDisplay';
import { useExamSubmission } from '../../hooks/useExamSubmission';
import { mockExam } from '../../utils/mockData';

export function TakeExam() {
  const { examId = '' } = useParams();
  const { answers, isSubmitting, handleAnswerChange, submitExam } = useExamSubmission(examId);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{mockExam.title}</h2>
        <ExamTimer duration={mockExam.duration} onTimeUp={submitExam} />
      </div>

      <p className="text-gray-600 mb-6">{mockExam.description}</p>

      <div className="space-y-8">
        {mockExam.questions.map((question) => (
          <QuestionDisplay
            key={question.id}
            question={question}
            answer={answers[question.id] || ''}
            onChange={(answer) => handleAnswerChange(question.id, answer)}
          />
        ))}
      </div>

      <div className="mt-8">
        <Button
          onClick={submitExam}
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Exam'}
        </Button>
      </div>
    </div>
  );
}