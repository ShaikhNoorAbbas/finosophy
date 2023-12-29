import React, { useState, ReactNode } from 'react';

interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export default function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-y-8">
      {/* Tab headers */}
      <div className="flex justify-center gap-10">
        {items.map((item, index) => (
          <button
            key={index}
            className={`text-xl font-medium ${
              index === activeTab
                ? 'border-secondary text-secondary  border-b-2'
                : ''
            }`}
            onClick={() => setActiveTab(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="rounded-lg bg-white p-8 shadow-lg">
        {items[activeTab].content}
      </div>
    </div>
  );
}
