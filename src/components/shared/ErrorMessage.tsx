import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-red-50 rounded-lg">
      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
      <p className="text-red-600">{message}</p>
    </div>
  );
}