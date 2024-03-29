'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from '../button/Button';

interface Question {
  number: string;
  question: string;
  options: string[];
  answer: number;
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
      <div className="">
        {score >= 3 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border-t-8 border-tertiary bg-tertiary-light p-6 shadow-lg lg:p-10">
            <div className="mb-4 rounded-lg bg-tertiary px-4 py-1 text-xl font-bold text-white">
              Congratulations!
            </div>
            <div className="mb-8 text-center text-xl font-bold text-gray-600 lg:text-2xl">
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
          <div className="flex flex-col items-center justify-center rounded-lg border-t-8 border-tertiary bg-tertiary-light p-6 shadow-lg lg:p-10">
            <div className="mb-4 rounded-lg bg-tertiary px-4 py-1 text-xl font-bold text-white">
              Opps!
            </div>
            <div className="mb-8 text-center text-xl font-bold text-gray-600 lg:text-2xl">
              You scored {score} out of 3. But no worries we have a great
              product for you :)
            </div>

            <div className="flex w-full items-start gap-6 rounded-lg">
              <Image
                src="/assets/images/youth-cover.jpg"
                width={522}
                height={702}
                alt="Course thumbnail"
                className="w-[26%] rounded-lg"
              />
              <div className="before--arrow-left relative flex w-full flex-col gap-y-4 rounded-lg bg-white p-4">
                <h3 className="rounded-lg border-2 border-dashed border-primary py-[2px] text-center text-base font-semibold text-primary">
                  Finosophy eBook
                </h3>

                <ul className="ml-4 flex list-outside list-disc flex-col text-gray-500">
                  <li>31 Amazing Chapters</li>
                  <li>31 Chapters eBook</li>
                </ul>

                <Button
                  href="/youth/financial-literacy-ebook-for-youth"
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
    <div className="flex flex-col items-center justify-center rounded-lg border-t-8 border-tertiary bg-tertiary-light p-6 shadow-lg lg:p-10">
      <div className="mb-4 rounded-lg bg-tertiary px-4 py-1 text-xl font-bold text-white">{`Question No. ${number}`}</div>
      <div className="mb-8 text-center text-xl font-bold text-gray-600 md:text-2xl">
        {question}
      </div>
      {options.map((option, index) => (
        <button
          key={index}
          className="mb-4 w-full rounded-lg bg-white p-2 text-xl shadow-md lg:hover:bg-tertiary lg:hover:text-white"
          onClick={() => handleOptionSelect(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuizComponent;
