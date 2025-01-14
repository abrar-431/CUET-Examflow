import React from 'react';
import { ExamSubmission } from '../../types';
import { FileText, User, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatDate } from '../../utils/dateUtils';

interface SubmissionCardProps {
  submission: ExamSubmission;
}

export function SubmissionCard({ submission }: SubmissionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{submission.studentName}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{submission.examTitle}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              Submitted {formatDate(submission.submittedAt)}
            </span>
          </div>
        </div>
        
        <div className="text-right">
          {submission.grade ? (
            <div>
              <span className="text-lg font-bold text-gray-900">
                {submission.grade}%
              </span>
              <p className="text-sm text-gray-500">Graded</p>
            </div>
          ) : (
            <Button onClick={() => {/* Handle grade submission */}}>
              Grade Submission
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}