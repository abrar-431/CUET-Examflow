import React, { useEffect, useState } from 'react';
import { useExam } from './ExamContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useExams } from '../../../hooks/useExams';
import { questions } from './Data/Question';

export function Navigation() {
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
  const { 
    currentQuestionIndex, 
    setCurrentQuestionIndex,
    answers,
    submitExam,
    isSubmitted
  } = useExam();

  const unansweredQuestions = finalquestions.filter(a => a.selectedOption === null).length;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        <button
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          disabled={currentQuestionIndex === 0}
          className="flex items-center px-4 py-2 text-blue-600 disabled:text-gray-400"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </button>

        {!isSubmitted && currentQuestionIndex === finalquestions.length - 1 ? (
          <button
            onClick={submitExam}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit Exam
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            disabled={currentQuestionIndex === finalquestions.length - 1}
            className="flex items-center px-4 py-2 text-blue-600 disabled:text-gray-400"
          >
            Next
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        )}
      </div>
    </div>
  );
}