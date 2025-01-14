import { useState, useEffect } from 'react';
import { Result } from '../types';

// Mock data - replace with actual API calls
const mockResults: Result[] = [
  {
    id: '1',
    courseId: '1',
    courseName: 'Data Structures',
    courseCode: 'CSE225',
    semester: 'Fall 2023',
    score: 85,
    credits: 3,
    submittedAt: '2023-12-15T10:00:00Z',
  },
  {
    id: '2',
    courseId: '2',
    courseName: 'Digital Logic Design',
    courseCode: 'CSE231',
    semester: 'Fall 2023',
    score: 78,
    credits: 3,
    submittedAt: '2023-12-20T14:30:00Z',
  },
  {
    id: '3',
    courseId: '3',
    courseName: 'Computer Networks',
    courseCode: 'CSE365',
    semester: 'Spring 2024',
    score: 92,
    credits: 4,
    submittedAt: '2024-03-10T09:15:00Z',
  },
];

export function useResults() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setResults(mockResults);
      } catch (err) {
        setError('Failed to fetch results. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return { results, loading, error };
}