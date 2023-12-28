import Image from 'next/image';
import Button from '../button/Button';

// interface ImgProps {
//   bgColor: string;
//   heading: string;
//   img: string;
//   desc: string;
//   btnText: string;
//   btnLink: string;
// }

export default function ImgCard() {
  return (
    <div className="bg-tertiary overflow-hidden rounded-lg shadow-lg">
      <div className="p-2">
        <h3 className="text-center text-xl font-semibold text-white">Youth</h3>
      </div>
      <Image
        src="/assets/images/img-card-youth.jpg"
        width={960}
        height={540}
        alt="Feature icon"
      />
      <div className="bg-tertiary-light flex flex-col gap-4 px-4 pb-6 pt-4">
        <p className="flex text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit repellat
          aliquid perspiciatis nisi rem labore.
        </p>

        <Button
          href="#"
          text="Learn More"
          style="py-1 px-4 text-lg font-medium bg-secondary text-white self-center"
        />
      </div>
    </div>
  );
}
