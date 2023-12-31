'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '../button/Button';

interface Question {
  number: string;
  question: string;
  options: string[];
  answer: number; // index of the correct answer in the options array
}

const demoQuestions: Question[] = [
  {
    number: '1',
    question: 'Payment of cheque can be stopped by?',
    options: ['Beneficiary', 'Nominee', 'Drawer of cheque', 'All of above'],
    answer: 2,
  },
  {
    number: '2',
    question: 'Loans from money lenders are typically?',
    options: ['Regulated', 'Costly', 'Long-Term', 'Safe'],
    answer: 1,
  },
  {
    number: '3',
    question: 'Bank charges interest on?',
    options: ['Deposits', 'Withdrawals', 'Loans', 'Transfers'],
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
        {score >= 3 ? (
          <div className="bg-tertiary-light border-tertiary flex flex-col items-center justify-center rounded-lg border-t-8 p-10 shadow-lg">
            <div className="bg-tertiary mb-4 rounded-lg px-4 py-1 text-xl font-bold text-white">
              Congratulations!
            </div>
            <div className="mb-8 text-center text-2xl font-bold text-gray-600">
              You scored {score} out of 3. You have won 25% discount on all
              Finosophy products.
            </div>
            <Image
              src="/assets/images/coupon.png"
              width={1452}
              height={582}
              alt="Coupon"
            />
          </div>
        ) : (
          <div className="bg-tertiary-light border-tertiary flex flex-col items-center justify-center rounded-lg border-t-8 p-10 shadow-lg">
            <div className="bg-tertiary mb-4 rounded-lg px-4 py-1 text-xl font-bold text-white">
              Opps!
            </div>
            <div className="mb-8 text-center text-2xl font-bold text-gray-600">
              You scored {score} out of 3. But no worries... we have a great
              product for you :)
            </div>

            <div className="flex w-full items-center gap-10 rounded-lg bg-white p-4">
              <Image
                src="https://www.letstute.com/s/pages/assets/images/youth-thumbnail.png"
                width={522}
                height={702}
                alt="Course thumbnail"
                className="w-[30%] rounded-lg"
              />
              <div className="flex w-full flex-col gap-y-4">
                <h3 className="border-primary text-primary rounded-lg border-2 border-dashed py-[2px] text-center text-base font-semibold">
                  Finosophy eBook
                </h3>

                <ul className="flex list-inside list-disc flex-col text-gray-500">
                  <li>31 Amazing Chapters</li>
                  <li>31 Chapters eBook</li>
                  <li>24 Interactive Activities</li>
                  <li>31 Interactive Flashcards</li>
                </ul>

                <Button
                  href="/youth/financial-literacy-ebook"
                  text="Learn More"
                  style="py-1 text-base text-center bg-secondary text-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  const { number, question, options } = demoQuestions[currentQuestionIndex];

  return (
    <div className="bg-tertiary-light border-tertiary flex flex-col items-center justify-center rounded-lg border-t-8 p-10 shadow-lg">
      <div className="bg-tertiary mb-4 rounded-lg px-4 py-1 text-xl font-bold text-white">{`Question No. ${number}`}</div>
      <div className="mb-8 text-center text-2xl font-bold text-gray-600">
        {question}
      </div>
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
