import { Exam } from '../types/exam';

export const mockExam: Exam = {
  id: '1',
  title: 'Midterm Exam',
  description: 'This exam covers chapters 1-5',
  duration: 5,
  questions: [
    {
      id: '1',
      text: 'What is the capital of Bangladesh?',
      type: 'multiple-choice',
      options: ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi'],
      points: 5,
    },
    {
      id: '2',
      text: 'Explain the concept of Object-Oriented Programming.',
      type: 'short-answer',
      points: 10,
    },
  ],
};