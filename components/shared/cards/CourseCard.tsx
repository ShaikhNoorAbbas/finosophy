import Image from 'next/image';
import Button from '../button/Button';

interface CourseCardProps {
  style?: string;
  imgSrc: string;
  heading: string;
  listItems: string[];
  link: string;
}

export default function CourseCard({
  style,
  imgSrc,
  heading,
  listItems,
  link,
}: CourseCardProps) {
  return (
    <div className={`flex w-full gap-x-5 overflow-hidden rounded-lg ${style}`}>
      <Image
        src={imgSrc}
        width={522}
        height={702}
        alt=""
        className="w-[100px] self-start rounded-lg xl:w-[110px]"
      />

      <div className="before--arrow-left relative flex w-full flex-col gap-y-5 rounded-lg bg-white p-4">
        <h3 className="border-primary text-primary rounded-lg border-2 border-dashed py-[2px] text-center text-base font-semibold">
          {heading}
        </h3>

        <ul className="ml-4 flex list-outside list-disc flex-col text-gray-500">
          {listItems.map((listItem, i) => (
            <li key={i}>{listItem}</li>
          ))}
        </ul>

        <Button
          href={link}
          text="Learn More"
          style="py-1 text-base text-center bg-secondary text-white"
        />
      </div>
    </div>
  );
}
