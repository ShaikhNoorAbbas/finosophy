import Link from 'next/link';

interface ButtonProps {
  href: string;
  text: string;
  style?: string;
}

export default function Button({ href, text, style }: ButtonProps) {
  return (
    <Link href={href} className={`button ${style}`}>
      {text}
    </Link>
  );
}
