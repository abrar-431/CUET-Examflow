import React from 'react';
import { ExamSubmissionList } from '../../components/exams/ExamSubmissionList';
import { useExamSubmissions } from '../../hooks/useExamSubmissions';

export function ExamReview() {
  const { submissions, loading, error } = useExamSubmissions();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Review Exam Submissions</h2>
      <ExamSubmissionList submissions={submissions} />
    </div>
  );
}