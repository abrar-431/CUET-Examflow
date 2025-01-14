import { useState, useEffect } from 'react';
import { ExamSubmission } from '../types';

// Mock data - replace with actual API calls
const mockSubmissions: ExamSubmission[] = [
  {
    id: '1',
    examId: '1',
    studentId: '1',
    studentName: 'John Doe',
    examTitle: 'Midterm Exam',
    answers: {},
    submittedAt: '2024-03-15T10:00:00Z',
    grade: 85,
    feedback: 'Good work overall!',
  },
  {
    id: '2',
    examId: '1',
    studentId: '2',
    studentName: 'Jane Smith',
    examTitle: 'Midterm Exam',
    answers: {},
    submittedAt: '2024-03-15T11:30:00Z',
  },
];

export function useExamSubmissions() {
  const [submissions, setSubmissions] = useState<ExamSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmissions(mockSubmissions);
      } catch (err) {
        setError('Failed to fetch exam submissions');
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return { submissions, loading, error };
}