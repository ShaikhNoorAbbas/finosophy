import React from 'react';

interface BoxProps {
  icon?: React.ReactNode;
  heading: string;
  desc1: string;
  desc2: string;
  style?: string;
}

export default function ContactCard({
  icon,
  heading,
  desc1,
  desc2,
  style,
}: BoxProps) {
  return (
    <div className={`rounded-3xl p-2 shadow-md ${style}`}>
      <div className="h-full rounded-3xl border-2 border-dashed border-white p-4 text-center text-white">
        <h1 className="mb-3 text-2xl font-bold">{heading}</h1>
        <p className="text-lg">{desc1}</p>
        <p className="text-lg">{desc2}</p>
      </div>
    </div>
  );
}
