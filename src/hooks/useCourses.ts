import { useState, useEffect } from 'react';
import { Course } from '../types';

// Mock data - replace with actual API calls
const mockCourses: Course[] = [
  {
    id: '1',
    code: 'CSE101',
    name: 'Introduction to Programming',
    semester: 'Fall 2024',
    teacherId: '1',
  },
  {
    id: '2',
    code: 'CSE102',
    name: 'Data Structures',
    semester: 'Fall 2024',
    teacherId: '2',
  },
];

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses(mockCourses);
      setLoading(false);
    }, 1000);
  }, []);

  return { courses, loading, error };
}