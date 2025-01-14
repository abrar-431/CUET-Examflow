import React from 'react';
import { Select } from '../ui/Select';

interface SemesterFilterProps {
  semesters: string[];
  selectedSemester: string;
  onSelect: (semester: string) => void;
}

export function SemesterFilter({ semesters, selectedSemester, onSelect }: SemesterFilterProps) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700">Filter by semester:</span>
      <Select
        value={selectedSemester}
        onChange={(e) => onSelect(e.target.value)}
        options={[
          { value: 'all', label: 'All Semesters' },
          ...semesters.map(semester => ({
            value: semester,
            label: semester
          }))
        ]}
      />
    </div>
  );
}