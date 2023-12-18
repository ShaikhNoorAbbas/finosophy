import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/Button';

interface CourseCardProps {
  style?: string;
  cardLink: string;
  imgSrc: string;
}

export default function CourseCard({
  style,
  cardLink,
  imgSrc,
}: CourseCardProps) {
  return (
    <Link
      href={cardLink}
      className={`flex gap-x-5 overflow-hidden rounded-lg ${style}`}
    >
      <Image
        src={imgSrc}
        width={522}
        height={702}
        alt=""
        className="w-[110px] self-start rounded-lg"
      />

      <div className="before--arrow-left relative flex w-full flex-col gap-y-5 rounded-lg bg-white p-5">
        <h3 className="border-primary text-primary rounded-lg border-2 border-dashed py-[2px] text-center text-base font-semibold">
          Level 1 Course
        </h3>

        <ul className="flex list-inside list-disc flex-col text-gray-500">
          <li>8 Pre-recorded Videos</li>
          <li>14 Chapters eBook</li>
          <li>8 Interactive Activities</li>
          <li>14 Interactive Flashcards</li>
          <li>Course Certificate</li>
        </ul>

        <Button
          href="#"
          text="Learn More"
          style="py-1 text-base text-center bg-secondary text-white"
        />
      </div>
    </Link>
  );
}
