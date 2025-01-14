import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExamCard } from '../ExamCard';
import { useExams } from '../../hooks/useExams';

interface ExamListProps {
  role: 'student' | 'teacher';
}

export function ExamList({ role }: ExamListProps) {
  const navigate = useNavigate();
  const { exams } = useExams();

  const handleExamAction = (examId: string) => {
    if (role === 'student') {
      navigate(`/dashboard/student/exams/${examId}/take`);
    } else {
      navigate(`/dashboard/teacher/exams/${examId}/review`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {exams.map((exam) => (
        <ExamCard
          key={exam.id}
          exam={exam}
          actionLabel={role === 'student' ? 'Take Exam' : 'Review Submissions'}
          onAction={() => handleExamAction(exam.id)}
        />
      ))}
    </div>
  );
}