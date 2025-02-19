import { QuestionList } from './Exam/QuestionList';
import { Question } from './Exam/Question';
import { Results } from './Exam/Results';
import { PenTool } from 'lucide-react';
import { ExamProvider } from './Exam/ExamContext';
import { Timer } from './Exam/Timer';
import { Navigation } from './Exam/NavigationExam';
import { useParams } from 'react-router-dom';
import { useExams } from '../../hooks/useExams';
import { useEffect, useState } from 'react';
import { questions } from './Exam/Data/Question';

export function TakeExam() {
  const [finalquestions, setfinalQuestions] = useState([]);
const { examId } = useParams();

const { exams } = useExams();
const exam = exams.find(exam => exam._id == examId);

useEffect(() => {
  if (exam) {
    // Filter the questions based on the course of the selected exam
    const newQuestions = questions.filter(question => question.course === exam.title);
    setfinalQuestions(newQuestions);
  }
}, [exam]); // The effect will run when `exam` changes


  return (
    <ExamProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center space-x-2">
              <PenTool className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Online Examination - CUET ExamFlow</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="relative min-h-[calc(100vh-12rem)]">
            <QuestionList finalquestions={finalquestions} />
            <Question finalquestions={finalquestions}  />
            <Results />
            <Timer />
          </div>
        </main>

        <Navigation />
      </div>
    </ExamProvider>
  );
}