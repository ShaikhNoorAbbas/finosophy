import { ReactNode } from 'react';

interface ExploreCardProps {
  bgColor: string;
  headingBg: string;
  heading: string;
  children: ReactNode;
}

export default function ExploreCard({
  bgColor,
  headingBg,
  heading,
  children,
}: ExploreCardProps) {
  return (
    <div
      className="w-full rounded-lg px-10 pb-10"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="flex justify-center">
        <span
          className="translate-y-[-50%] rounded-lg px-6 py-2 text-base font-bold text-white md:text-xl"
          style={{ backgroundColor: `${headingBg}` }}
        >
          {heading}
        </span>
      </div>
      <div className="">{children}</div>
    </div>
  );
}
