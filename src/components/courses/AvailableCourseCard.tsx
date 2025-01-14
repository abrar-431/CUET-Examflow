import React from 'react';
import { Course } from '../../types';
import { Book, Clock, Award } from 'lucide-react';
import { Button } from '../ui/Button';

interface AvailableCourseCardProps {
  course: Course;
  onRegister: () => void;
}

export function AvailableCourseCard({ course, onRegister }: AvailableCourseCardProps) {
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
              <Clock className="h-4 w-4 mr-1" />
              {course.credits} credits
            </div>
            {course.prerequisites?.length > 0 && (
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1" />
                Prerequisites: {course.prerequisites.length}
              </div>
            )}
          </div>

          <div className="mt-4">
            <Button onClick={onRegister} size="sm">
              Register for Course
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}