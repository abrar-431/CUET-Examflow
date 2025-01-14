import React from 'react';
import { ResultsOverview } from '../../components/results/ResultsOverview';
import { ResultsList } from '../../components/results/ResultsList';
import { useResults } from '../../hooks/useResults';

export function StudentResults() {
  const { results, loading, error } = useResults();

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
      <h2 className="text-2xl font-bold text-gray-900">Academic Results</h2>
      <ResultsOverview results={results} />
      <ResultsList results={results} />
    </div>
  );
}