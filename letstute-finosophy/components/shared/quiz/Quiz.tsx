'use client';

import { useState } from 'react';

interface Question {
  number: string;
  question: string;
  options: string[];
  answer: number; // index of the correct answer in the options array
}

const demoQuestions: Question[] = [
  {
    number: '1',
    question: 'When money was invented?',
    options: ['3', '4', '5', '6'],
    answer: 1,
  },
  {
    number: '2',
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Rome', 'Madrid'],
    answer: 1,
  },
  {
    number: '3',
    question: 'Who wrote Hamlet?',
    options: [
      'Charles Dickens',
      'J.K. Rowling',
      'William Shakespeare',
      'Mark Twain',
    ],
    answer: 2,
  },
];

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionSelect = (index: number) => {
    setSelectedOptions([...selectedOptions, index]);
    if (currentQuestionIndex < demoQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    return selectedOptions.filter(
      (option, index) => option === demoQuestions[index].answer
    ).length;
  };

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <div className="p-4">
        {score >= 2 ? (
          <div>
            Congratulations! You scored {score} out of 3. Heres your 50%
            discount code.
          </div>
        ) : (
          <div>
            Sorry, you scored {score} out of 3. Check out our courses to improve
            your knowledge.
          </div>
        )}
      </div>
    );
  }

  const { number, question, options } = demoQuestions[currentQuestionIndex];

  return (
    <div className="bg-gradient--tertiary border-tertiary flex flex-col items-center justify-center rounded-lg border-t-8 p-10 shadow-lg">
      <div className="bg-tertiary mb-4 rounded-lg px-4 py-1 text-xl font-bold text-white">{`Question No. ${number}`}</div>
      <div className="mb-8 text-2xl font-bold text-gray-600">{question}</div>
      {options.map((option, index) => (
        <button
          key={index}
          className="hover:bg-tertiary mb-4 w-full rounded-lg bg-white p-2 text-xl shadow-md hover:text-white"
          onClick={() => handleOptionSelect(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizComponent;
