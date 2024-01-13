interface ProgressBarProps {
  heading: string;
  percentage: number;
  bgColor: string;
  textColor: string;
}

export default function ProgressBar({
  heading,
  percentage,
  bgColor,
  textColor,
}: ProgressBarProps) {
  return (
    <div className="w-full rounded-full bg-gray-200 dark:bg-gray-200">
      <div
        className="rounded-full duration-300 ease-in-out"
        style={{ width: `${percentage}%`, backgroundColor: `${bgColor}` }}
      >
        <div
          className="flex justify-between px-4 py-1 text-sm font-semibold"
          style={{ color: `${textColor}` }}
        >
          <span className="">{heading}</span>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
