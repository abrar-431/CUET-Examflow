import React, { useEffect, useState } from 'react';
import { useExam } from './ExamContext';
import { CheckCircle, Clock } from 'lucide-react';
import { questions } from './Data/Question';
import { useExams } from '../../../hooks/useExams';
import { useParams } from 'react-router-dom';

export function Results() {
  const { getScore, isSubmitted, timeRemaining } = useExam();
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
  

  if (!isSubmitted) return null;

  const score = getScore();
  const percentage = (score / finalquestions.length) * 100;
  const timeUsed = (10 * 60) - timeRemaining; // in seconds
  const minutesUsed = Math.floor(timeUsed / 60);
  const secondsUsed = timeUsed % 60;

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <div>
            <p className="font-semibold">Your Score</p>
            <p className="text-lg">
              {score}/{finalquestions.length} ({percentage.toFixed(1)}%)
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-blue-500" />
          <div>
            <p className="font-semibold">Time Used</p>
            <p className="text-lg">
              {minutesUsed}m {secondsUsed}s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}