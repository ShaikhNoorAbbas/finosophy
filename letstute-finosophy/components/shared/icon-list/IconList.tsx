import React from 'react';

interface IconListProps {
  icon: React.ReactNode;
  desc: string;
}

export default function IconList({ icon, desc }: IconListProps) {
  return (
    <li className="icon-list">
      <span className="text-secondary w-4">{icon}</span>
      {desc}
    </li>
  );
}
