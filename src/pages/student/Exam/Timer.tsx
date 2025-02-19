import React from 'react';
import { useExam } from './ExamContext';
import { Timer as TimerIcon } from 'lucide-react';

export function Timer() {
  const { timeRemaining, isSubmitted } = useExam();

  if (isSubmitted) return null;

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const timeClass = timeRemaining < 60 
    ? 'text-red-600' 
    : timeRemaining < 180 
      ? 'text-orange-600' 
      : 'text-blue-600';

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
      <div className="flex items-center space-x-2">
        <TimerIcon className={`w-5 h-5 ${timeClass}`} />
        <div>
          <p className="font-semibold">Time Remaining</p>
          <p className={`text-lg ${timeClass}`}>
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </p>
        </div>
      </div>
    </div>
  );
}