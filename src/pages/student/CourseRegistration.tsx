import React from 'react';
import { AvailableCourseList } from '../../components/courses/AvailableCourseList';
import { RegistrationSummary } from '../../components/courses/RegistrationSummary';
import { useAvailableCourses } from '../../hooks/useAvailableCourses';

export function CourseRegistration() {
  const { courses, loading, error, registerCourse } = useAvailableCourses();

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
      <h2 className="text-2xl font-bold text-gray-900">Course Registration</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AvailableCourseList courses={courses} onRegister={registerCourse} />
        </div>
        <div>
          <RegistrationSummary />
        </div>
      </div>
    </div>
  );
}