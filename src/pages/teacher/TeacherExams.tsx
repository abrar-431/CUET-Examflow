import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ExamList } from '../../components/exams/ExamList';
import { CreateExam } from './CreateExam';
import { ExamReview } from './ExamReview';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

export function TeacherExams() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        index
        element={
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Manage Exams</h2>
              <Button onClick={() => navigate('create')}>
                <Plus className="h-4 w-4 mr-2" />
                Create New Exam
              </Button>
            </div>
            <ExamList role="teacher" />
          </div>
        }
      />
      <Route path="create" element={<CreateExam />} />
      <Route path=":examId/review" element={<ExamReview />} />
    </Routes>
  );
}