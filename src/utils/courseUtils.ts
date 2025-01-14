import { Course } from '../types';

export function calculateTotalCredits(courses: Course[]): number {
  return courses.reduce((total, course) => total + (course.credits || 0), 0);
}

export function isPrerequisiteMet(course: Course, completedCourses: Course[]): boolean {
  if (!course.prerequisites?.length) return true;
  return course.prerequisites.every(prereqId =>
    completedCourses.some(completed => completed.id === prereqId)
  );
}