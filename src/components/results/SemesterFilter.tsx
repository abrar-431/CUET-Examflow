import React from 'react';

interface SemesterFilterProps {
  semesters: string[];
  selectedSemester: string;
  onSelect: (semester: string) => void;
}

export function SemesterFilter({ semesters, selectedSemester, onSelect }: SemesterFilterProps) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700">Filter by semester:</span>
      <select
        value={selectedSemester}
        onChange={(e) => onSelect(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        <option value="all">All Semesters</option>
        {semesters.map((semester) => (
          <option key={semester} value={semester}>
            {semester}
          </option>
        ))}
      </select>
    </div>
  );
}