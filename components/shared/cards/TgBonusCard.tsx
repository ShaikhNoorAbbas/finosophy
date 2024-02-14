import Image from 'next/image';
import React from 'react';

interface LpBonusCardProps {
  title1Num: string;
  title1: string;
  title2: string;
  price: string;
  src: string;
  desc1: string;
  desc2: string;
  desc3: string;
  bottomBonus: string;
}

export default function TgBonusCard({
  title1Num,
  title1,
  title2,
  price,
  src,
  desc1,
  desc2,
  desc3,
  bottomBonus,
}: LpBonusCardProps) {
  return (
    <>
      <div className="w-full border-2 border-secondary text-center">
        <div className="w-full bg-secondary text-3xl text-white">
          <div className="flex items-center justify-center">
            <span className="font-bold">{title1Num}</span>
            <span className="py-3">&nbsp;{title1}</span>
          </div>
        </div>

        <div className="px-5">
          <div className="text-4xl">
            <div className="pt-5">
              <span className="font-bold text-black ">
                &quot;{title2}&quot;
              </span>
            </div>
            <div className="py-3">
              <span className="font-extrabold text-secondary">{price}</span>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <Image src={src} alt="Bonus Image" width={399} height={270} />
          </div>
          <div className="flex flex-col gap-1 text-xl">
            <span>{desc1}</span>
            <br />
            <span>{desc2}</span>
            <br />
            <span>{desc3}</span>
          </div>
          <div className="py-5 font-bold text-black">
            <span className="text-4xl">{bottomBonus}</span>
          </div>
        </div>
      </div>
    </>
  );
}
