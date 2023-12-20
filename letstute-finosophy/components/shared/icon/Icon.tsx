import Image from 'next/image';
import Link from 'next/link';

interface IconProps {
  link: string;
  icon: string;
  style: string;
}

export default function Icon({ link, icon, style }: IconProps) {
  return (
    <Link href={link} className={`flex items-center justify-center`}>
      <Image
        src={icon}
        width={10}
        height={10}
        alt="Social icon"
        className={`h-9 w-9 rounded-lg p-2 ${style}`}
      />
    </Link>
  );
}
