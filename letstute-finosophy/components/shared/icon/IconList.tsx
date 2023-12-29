import React from 'react';
import Image from 'next/image';

interface IconListProps {
  style?: string;
  icon: string;
  iconStyle?: string;
  alt: string;
  desc: string;
  descStyle?: string;
}

export default function IconList({
  style,
  icon,
  iconStyle,
  alt,
  desc,
  descStyle,
}: IconListProps) {
  return (
    <li className={`icon-list ${style}`}>
      <Image
        src={icon}
        width={10}
        height={10}
        alt={`${alt}`}
        className={`${iconStyle}`}
      />
      <span className={`${descStyle}`}>{desc}</span>
    </li>
  );
}
