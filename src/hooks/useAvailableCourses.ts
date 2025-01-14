import { useState, useEffect } from 'react';
import { Course } from '../types';

// Mock data - replace with actual API calls
const mockAvailableCourses: Course[] = [
  {
    id: '1',
    code: 'CSE101',
    name: 'Introduction to Programming',
    semester: 'Fall 2024',
    credits: 3,
    teacherId: '1',
    prerequisites: [],
  },
  {
    id: '2',
    code: 'CSE102',
    name: 'Data Structures',
    semester: 'Fall 2024',
    credits: 3,
    teacherId: '2',
    prerequisites: ['1'],
  },
];

export function useAvailableCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCourses(mockAvailableCourses);
      } catch (err) {
        setError('Failed to fetch available courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const registerCourse = async (courseId: string) => {
    // Implement course registration logic
    console.log('Registering for course:', courseId);
  };

  return { courses, loading, error, registerCourse };
}