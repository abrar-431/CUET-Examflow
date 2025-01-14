export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'short-answer';
  options?: string[];
  points: number;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  duration: number;
  startTime?: string;
  questions: Question[];
}

export interface ExamSubmission {
  id: string;
  examId: string;
  studentId: string;
  studentName: string;
  examTitle: string;
  answers: Record<string, string>;
  submittedAt: string;
  grade?: number;
  feedback?: string;
}