import { useExam } from './ExamContext';
import { CheckCircle, XCircle } from 'lucide-react';

export function Question({finalquestions}) {
  const questions = finalquestions
  const { 
    currentQuestionIndex,
    answers, 
    setAnswer, 
    isSubmitted 
  } = useExam();
  
  const question = questions[currentQuestionIndex];
  if (!question) {
    return <div>Loading...</div>; // You can show a loading state or fallback UI
  }
  const currentAnswer = answers.find(a => a.questionId === question.id);

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <div className="mb-8">
        <p className="text-lg mb-4">{question.text}</p>
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = currentAnswer?.selectedOption === index;
            const isCorrect = question.correctAnswer === index;
            let buttonClass = "w-full text-left p-4 rounded-lg border transition-all ";
            
            if (isSubmitted) {
              if (isCorrect) {
                buttonClass += "bg-green-100 border-green-500 text-green-700";
              } else if (isSelected && !isCorrect) {
                buttonClass += "bg-red-100 border-red-500 text-red-700";
              } else {
                buttonClass += "bg-white border-gray-200";
              }
            } else {
              buttonClass += isSelected 
                ? "bg-blue-100 border-blue-500 text-blue-700" 
                : "bg-white hover:bg-gray-50 border-gray-200";
            }

            return (
              <button
                key={index}
                onClick={() => !isSubmitted && setAnswer(question.id, index)}
                className={buttonClass}
                disabled={isSubmitted}
              >
                <div className="flex items-center">
                  <span className="flex-grow">{option}</span>
                  {isSubmitted && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {isSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}