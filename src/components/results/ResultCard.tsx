import React from 'react';
import { Result } from '../../types';
import { getGradeLetter } from '../../utils/gradeCalculations';
import { BookOpen } from 'lucide-react';

interface ResultCardProps {
  result: Result;
}

export function ResultCard({ result }: ResultCardProps) {
  const gradeLetter = getGradeLetter(result.score);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{result.courseName}</h3>
            <p className="text-sm text-gray-500">{result.courseCode}</p>
            <p className="text-sm text-gray-500 mt-1">{result.semester}</p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-lg font-bold ${
            result.score >= 80 ? 'text-green-600' :
            result.score >= 70 ? 'text-blue-600' :
            result.score >= 60 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {gradeLetter}
          </div>
          <p className="text-sm text-gray-500">Score: {result.score}%</p>
          <p className="text-sm text-gray-500">Credits: {result.credits}</p>
        </div>
      </div>
    </div>
  );
}