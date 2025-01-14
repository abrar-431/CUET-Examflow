import { useState, useEffect } from 'react';
import { Exam } from '../types';

// Mock data - replace with actual API calls
const mockExams: Exam[] = [
  {
    id: '1',
    title: 'Midterm Exam',
    description: 'Covers chapters 1-5',
    duration: 120,
    startTime: '2024-04-01T10:00:00Z',
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
  },
  {
    id: '2',
    title: 'Final Exam',
    description: 'Comprehensive exam covering all chapters',
    duration: 180,
    startTime: '2024-04-15T10:00:00Z',
    questions: [
      {
        id: '3',
        text: 'What is inheritance in OOP?',
        type: 'short-answer',
        points: 10,
      },
    ],
  },
];

export function useExams() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setExams(mockExams);
      } catch (err) {
        setError('Failed to fetch exams');
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  return { exams, loading, error };
}