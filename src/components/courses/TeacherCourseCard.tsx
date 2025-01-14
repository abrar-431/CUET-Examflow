import React from 'react';
import { Course } from '../../types';
import { Book, Users, FileText } from 'lucide-react';
import { useEnrollments } from '../../hooks/useEnrollments';
import { Button } from '../ui/Button';

interface TeacherCourseCardProps {
  course: Course;
}

export function TeacherCourseCard({ course }: TeacherCourseCardProps) {
  const { enrollments } = useEnrollments();
  const courseEnrollments = enrollments.filter(e => e.courseId === course.id);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Book className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
          <p className="text-sm text-gray-500">{course.code}</p>
          <p className="text-sm text-gray-500 mt-1">{course.semester}</p>
          
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {courseEnrollments.length} students
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              {course.upcomingExams || 0} upcoming exams
            </div>
          </div>

          <div className="mt-4 flex space-x-3">
            <Button size="sm" onClick={() => {/* Handle view details */}}>
              View Details
            </Button>
            <Button size="sm" variant="secondary" onClick={() => {/* Handle create exam */}}>
              Create Exam
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}