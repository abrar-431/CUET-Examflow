import { Routes, Route } from 'react-router-dom';
import { ExamList } from '../../components/exams/ExamList';
import { TakeExam } from './TakeExam';

export function StudentExams() {
  return (
    <Routes>
      <Route
        index
        element={
          <div className="space-y-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Exams</h2>
            <ExamList role="student" />
          </div>
        }
      />
      <Route path=":examId/take" element={<TakeExam />} />
    </Routes>
  );
}