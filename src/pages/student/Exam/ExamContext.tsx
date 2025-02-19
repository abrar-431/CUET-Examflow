import React, { createContext, useContext, useState, useEffect } from 'react';
import { Answer, Question } from '../../../types/exam';
import { questions } from './Data/Question';

interface ExamContextType {
  currentQuestionIndex: number;
  answers: Answer[];
  isSubmitted: boolean;
  timeRemaining: number;
  setCurrentQuestionIndex: (index: number) => void;
  setAnswer: (questionId: number, selectedOption: number) => void;
  submitExam: () => void;
  getScore: () => number;
  questions: Question[];
}

const EXAM_DURATION = 10 * 60; // 10 minutes in seconds

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export function ExamProvider({ children }: { children: React.ReactNode }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(
    questions.map(q => ({ questionId: q.id, selectedOption: null }))
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION);

  useEffect(() => {
    if (!isSubmitted && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            submitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isSubmitted, timeRemaining]);

  const setAnswer = (questionId: number, selectedOption: number) => {
    setAnswers(prev => 
      prev.map(a => 
        a.questionId === questionId ? { ...a, selectedOption } : a
      )
    );
  };

  const submitExam = () => {
    setIsSubmitted(true);
  };

  const getScore = () => {
    return answers.reduce((score, answer) => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question && answer.selectedOption === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  return (
    <ExamContext.Provider value={{
      currentQuestionIndex,
      answers,
      isSubmitted,
      timeRemaining,
      setCurrentQuestionIndex,
      setAnswer,
      submitExam,
      getScore,
      questions
    }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExam() {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
}