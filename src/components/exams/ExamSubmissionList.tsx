import React, { useState } from 'react';
import { ExamSubmission } from '../../types';
import { SubmissionCard } from './SubmissionCard';
import { Select } from '../ui/Select';

interface ExamSubmissionListProps {
  submissions: ExamSubmission[];
}

export function ExamSubmissionList({ submissions }: ExamSubmissionListProps) {
  const [filter, setFilter] = useState<'all' | 'pending' | 'graded'>('all');

  const filteredSubmissions = submissions.filter(submission => {
    if (filter === 'pending') return !submission.grade;
    if (filter === 'graded') return submission.grade !== undefined;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'all' | 'pending' | 'graded')}
          options={[
            { value: 'all', label: 'All Submissions' },
            { value: 'pending', label: 'Pending Review' },
            { value: 'graded', label: 'Graded' },
          ]}
        />
      </div>
      
      <div className="space-y-4">
        {filteredSubmissions.map((submission) => (
          <SubmissionCard key={submission.id} submission={submission} />
        ))}
      </div>
    </div>
  );
}