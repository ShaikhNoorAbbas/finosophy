import Image from 'next/image';

interface FeatureCardProps {
  style?: string;
  imgSrc: string;
  heading: string;
  desc: string;
}

export default function FeatureCard({
  style,
  imgSrc,
  heading,
  desc,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-y-3 rounded-lg p-5 shadow-lg ${style}`}
    >
      <Image src={imgSrc} width={80} height={80} alt="Feature icon" />
      <h3 className="text-center text-xl font-semibold text-gray-700">
        {heading}
      </h3>
      <p className="flex text-center text-gray-500">{desc}</p>
    </div>
  );
}
