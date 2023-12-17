import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/Button';

interface CourseCardProps {
  cardLink: string;
  imgSrc: string;
}

export default function CourseCard({ cardLink, imgSrc }: CourseCardProps) {
  return (
    <Link
      href={cardLink}
      className="grid grid-cols-2 overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <Image
        src={imgSrc}
        width={522}
        height={702}
        alt=""
        className="rounded-lg"
      />
      <div className="flex flex-col gap-y-5 p-5">
        <h3 className="border-primary text-primary rounded-lg border-2 border-dashed py-[2px] text-center text-base font-semibold">
          Online Course
        </h3>

        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          molestiae omnis quis repellat doloribus
        </p>

        <Button
          href="#"
          text="Learn More"
          style="py-1 text-base text-center bg-secondary text-white"
        />
      </div>
    </Link>
  );
}
