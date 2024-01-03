'use client';

import { useState, ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  style?: string;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  style,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`w-full rounded-lg border shadow-sm ${style}`}>
      <button
        onClick={toggleAccordion}
        className="w-full px-8 py-4 text-left text-base font-semibold"
      >
        {title}
      </button>
      <div
        className={`transition-height bg-tertiary-light overflow-hidden duration-500 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-8 py-4 text-base">{children}</div>
      </div>
    </div>
  );
}
