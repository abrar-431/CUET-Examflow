import React from 'react';
import { Course } from '../../types';
import { Users, BookOpen, Clock } from 'lucide-react';
import { useEnrollments } from '../../hooks/useEnrollments';

interface CourseStatsProps {
  courses: Course[];
}

export function CourseStats({ courses }: CourseStatsProps) {
  const { enrollments } = useEnrollments();
  
  const totalStudents = new Set(enrollments.map(e => e.studentId)).size;
  const activeCourses = courses.length;
  const upcomingExams = courses.reduce((sum, course) => 
    sum + (course.upcomingExams || 0), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Students</p>
            <p className="text-2xl font-bold text-gray-900">{totalStudents}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <BookOpen className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Active Courses</p>
            <p className="text-2xl font-bold text-gray-900">{activeCourses}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Upcoming Exams</p>
            <p className="text-2xl font-bold text-gray-900">{upcomingExams}</p>
          </div>
        </div>
      </div>
    </div>
  );
}