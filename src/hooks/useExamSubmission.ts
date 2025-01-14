import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExamSubmission } from '../types/exam';

export function useExamSubmission(examId: string) {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const submitExam = async () => {
    setIsSubmitting(true);
    try {
      // In a real app, this would be an API call
      const submission: ExamSubmission = {
        examId,
        studentId: '1', // Get from auth context
        answers,
        submittedAt: new Date().toISOString(),
      };
      console.log('Submitting exam:', submission);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/dashboard/student/exams');
    } catch (error) {
      console.error('Failed to submit exam:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    answers,
    isSubmitting,
    handleAnswerChange,
    submitExam,
  };
}