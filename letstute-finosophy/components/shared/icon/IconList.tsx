import React from 'react';
import Image from 'next/image';

interface IconListProps {
  style?: string;
  icon: string;
  alt: string;
  desc: string;
}

export default function IconList({ style, icon, alt, desc }: IconListProps) {
  return (
    <li className="icon-list">
      <Image
        src={icon}
        width={10}
        height={10}
        alt={`${alt}`}
        className={`h-9 w-9 rounded-lg p-2 ${style}`}
      />
      {desc}
    </li>
  );
}
