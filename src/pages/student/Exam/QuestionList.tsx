import { useExam } from './ExamContext';

export function QuestionList({finalquestions}) {
  const questions = finalquestions
  const { 
    answers, 
    currentQuestionIndex, 
    setCurrentQuestionIndex,
    isSubmitted 
  } = useExam();

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-2">
      {questions.map((_, index) => {
        const answer = answers[index];
        let bgColor = "bg-gray-200";
        
        if (answer.selectedOption !== null) {
          if (isSubmitted) {
            bgColor = questions[index].correctAnswer === answer.selectedOption 
              ? "bg-green-500" 
              : "bg-red-500";
          } else {
            bgColor = "bg-blue-500";
          }
        }

        return (
          <button
            key={index}
            onClick={() => !isSubmitted && setCurrentQuestionIndex(index)}
            className={`w-8 h-8 rounded-full ${bgColor} text-white flex items-center justify-center
              ${currentQuestionIndex === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''}
              ${!isSubmitted ? 'hover:opacity-80' : ''}`}
            disabled={isSubmitted}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}