import Image from 'next/image';

interface FeatureCardProps {
  imgSrc: string;
  heading: string;
}

export default function FeatureCard({ imgSrc, heading }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-y-3 rounded-lg p-5 shadow-lg">
      <Image src={imgSrc} width={80} height={80} alt="Feature icon" />
      <h3 className="text-center text-xl font-semibold text-gray-700">
        {heading}
      </h3>
      <p className="flex text-center text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aliquid perspiciatis nisi rem labore incidunt hic sunt alias eum.
      </p>
    </div>
  );
}