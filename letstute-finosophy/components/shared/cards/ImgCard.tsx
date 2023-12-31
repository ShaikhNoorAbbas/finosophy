import Image from 'next/image';
import Button from '../button/Button';

interface ImgCardProps {
  style?: string;
  headerStyle: string;
  heading: string;
  imgSrc: string;
  desc: string;
  btnLink: string;
  btnText: string;
  modal?: boolean;
}

export default function ImgCard({
  style,
  headerStyle,
  heading,
  imgSrc,
  desc,
  btnLink,
  btnText,
  modal,
}: ImgCardProps) {
  return (
    <div className={`overflow-hidden rounded-lg shadow-lg ${style}`}>
      <div className={`flex ${headerStyle}`}>
        <div className="bg-tertiary p-2">
          <h3 className="text-center text-xl font-semibold text-white">
            {heading}
          </h3>
        </div>
        <Image src={`${imgSrc}`} width={960} height={540} alt="Tg image" />
      </div>
      <div className="bg-tertiary-light flex flex-col gap-4 px-4 pb-6 pt-4">
        <p className="flex text-center text-gray-600">{desc}</p>

        {!modal ? (
          <Button
            href={`${btnLink}`}
            text={`${btnText}`}
            style="py-1 px-4 text-lg font-medium bg-secondary text-white self-center"
          />
        ) : (
          <Button
            href="#"
            text={`${btnText}`}
            style="py-1 px-4 text-lg font-medium bg-secondary text-white self-center"
            modal
          />
        )}
      </div>
    </div>
  );
}
