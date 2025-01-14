import React from 'react';
import { CourseList } from '../../components/courses/CourseList';
import { CourseStats } from '../../components/courses/CourseStats';
import { useCourses } from '../../hooks/useCourses';

export function TeacherCourses() {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
      <CourseStats courses={courses} />
      <CourseList courses={courses} role="teacher" />
    </div>
  );
}