import Image from 'next/image';
import Link from 'next/link';

interface IconProps {
  link: string;
  style: string;
  icon: string;
}

export default function Icon({ link, style, icon }: IconProps) {
  return (
    <Link href={link} className={`${style}`}>
      <Image src={icon} width={50} height={50} alt="Social icon" />
    </Link>
  );
}
