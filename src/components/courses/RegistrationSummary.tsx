import React from 'react';
import { useRegistration } from '../../hooks/useRegistration';
import { Button } from '../ui/Button';
import { calculateTotalCredits } from '../../utils/courseUtils';

export function RegistrationSummary() {
  const { selectedCourses, confirmRegistration } = useRegistration();
  const totalCredits = calculateTotalCredits(selectedCourses);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Registration Summary
      </h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600">Selected Courses</p>
          <p className="text-2xl font-bold text-gray-900">
            {selectedCourses.length}
          </p>
        </div>
        
        <div>
          <p className="text-sm text-gray-600">Total Credits</p>
          <p className="text-2xl font-bold text-gray-900">{totalCredits}</p>
        </div>
        
        <Button
          className="w-full"
          onClick={confirmRegistration}
          disabled={selectedCourses.length === 0}
        >
          Confirm Registration
        </Button>
      </div>
    </div>
  );
}