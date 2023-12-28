import Image from 'next/image';
import Button from '../button/Button';

interface ImgCardProps {
  heading: string;
  imgSrc: string;
  desc: string;
  btnLink: string;
  btnText: string;
}

export default function ImgCard({
  heading,
  imgSrc,
  desc,
  btnLink,
  btnText,
}: ImgCardProps) {
  return (
    <div className="bg-tertiary overflow-hidden rounded-lg shadow-lg">
      <div className="p-2">
        <h3 className="text-center text-xl font-semibold text-white">
          {heading}
        </h3>
      </div>
      <Image src={`${imgSrc}`} width={960} height={540} alt="Tg image" />
      <div className="bg-tertiary-light flex flex-col gap-4 px-4 pb-6 pt-4">
        <p className="flex text-center text-gray-600">{desc}</p>

        <Button
          href={`${btnLink}`}
          text={`${btnText}`}
          style="py-1 px-4 text-lg font-medium bg-secondary text-white self-center"
        />
      </div>
    </div>
  );
}
