import { useState, useEffect } from 'react';
import { Enrollment } from '../types';

// Mock data - replace with actual API calls
const mockEnrollments: Enrollment[] = [
  {
    id: '1',
    courseId: '1',
    studentId: '1',
    enrolledAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    courseId: '1',
    studentId: '2',
    enrolledAt: '2024-01-16T14:30:00Z',
  },
  {
    id: '3',
    courseId: '2',
    studentId: '1',
    enrolledAt: '2024-01-17T09:15:00Z',
  },
];

export function useEnrollments() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setEnrollments(mockEnrollments);
      } catch (err) {
        setError('Failed to fetch enrollments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  return { enrollments, loading, error };
}