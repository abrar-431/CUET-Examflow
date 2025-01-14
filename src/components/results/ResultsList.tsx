import React, { useState } from 'react';
import { Result } from '../../types';
import { ResultCard } from './ResultCard';
import { SemesterFilter } from './SemesterFilter';

interface ResultsListProps {
  results: Result[];
}

export function ResultsList({ results }: ResultsListProps) {
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  
  const filteredResults = selectedSemester === 'all'
    ? results
    : results.filter(result => result.semester === selectedSemester);

  const semesters = Array.from(new Set(results.map(result => result.semester)));

  return (
    <div className="space-y-6">
      <SemesterFilter
        semesters={semesters}
        selectedSemester={selectedSemester}
        onSelect={setSelectedSemester}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}