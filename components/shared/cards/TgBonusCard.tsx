import Image from 'next/image';
import React from 'react';

interface LpBonusCardProps {
  title1Num: string;
  title1: string;
  title2: string;
  price: string;
  src: string;
  desc1: string;
  bottomBonus: string;
}

export default function TgBonusCard({
  title1Num,
  title1,
  title2,
  price,
  src,
  desc1,
  bottomBonus,
}: LpBonusCardProps) {
  return (
    <>
      <div className="w-full border-2 border-secondary text-center">
        <div className="w-full bg-secondary py-2 text-2xl text-white md:text-3xl">
          <span className="font-bold">{title1Num}</span>
          <span className="">{title1}</span>
        </div>

        <div className="flex flex-col gap-7 p-5">
          <span className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl ">
            &quot;{title2}&quot;
          </span>

          <span className="text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
            {price}
          </span>

          <div className="flex justify-center">
            <Image src={src} alt="Bonus Image" width={399} height={270} />
          </div>

          <span className="text-xl">{desc1}</span>

          <span className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
            {bottomBonus}
          </span>
        </div>
      </div>
    </>
  );
}
