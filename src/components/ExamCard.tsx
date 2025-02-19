import { Exam } from '../types/exam';
import { Calendar, Clock } from 'lucide-react';
import { Button } from './ui/Button';

interface ExamCardProps {
  exam: Exam;
  actionLabel: string;
  onAction: () => void;
}

export function ExamCard({ exam, actionLabel, onAction }: ExamCardProps) {
  const startDate = new Date(exam.startTime || Date.now());

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900">{exam.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{exam.description}</p>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          {startDate.toLocaleDateString()}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          {exam.duration} minutes
        </div>
      </div>

      <div className="mt-4">
        <Button onClick={onAction} size="sm">
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}