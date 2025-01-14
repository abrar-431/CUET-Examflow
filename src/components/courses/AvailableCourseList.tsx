import React from 'react';
import { Course } from '../../types';
import { AvailableCourseCard } from './AvailableCourseCard';

interface AvailableCourseListProps {
  courses: Course[];
  onRegister: (courseId: string) => void;
}

export function AvailableCourseList({ courses, onRegister }: AvailableCourseListProps) {
  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <AvailableCourseCard
          key={course.id}
          course={course}
          onRegister={() => onRegister(course.id)}
        />
      ))}
    </div>
  );
}