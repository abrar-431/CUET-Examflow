export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  course: string;
}

export interface Answer {
  questionId: number;
  selectedOption: number | null;
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