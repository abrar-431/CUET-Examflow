import React from 'react';
import { Result } from '../../types';
import { calculateGPA } from '../../utils/gradeCalculations';
import { Award, TrendingUp, BookOpen } from 'lucide-react';

interface ResultsOverviewProps {
  results: Result[];
}

export function ResultsOverview({ results }: ResultsOverviewProps) {
  const currentGPA = calculateGPA(results);
  const totalCredits = results.reduce((sum, result) => sum + result.credits, 0);
  const completedCourses = results.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Current CGPA</p>
            <p className="text-2xl font-bold text-gray-900">{currentGPA.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Credits</p>
            <p className="text-2xl font-bold text-gray-900">{totalCredits}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <BookOpen className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Completed Courses</p>
            <p className="text-2xl font-bold text-gray-900">{completedCourses}</p>
          </div>
        </div>
      </div>
    </div>
  );
}