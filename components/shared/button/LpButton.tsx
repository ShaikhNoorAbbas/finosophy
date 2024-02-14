import Image from 'next/image';
import Link from 'next/link';

interface LpButtonProps {
  href: string;
  style?: string;
  text1: string;
  text2: string;
}

export default function LpButton({ href, style, text1, text2 }: LpButtonProps) {
  return (
    <Link
      href={href}
      className={`flex w-full flex-col rounded-sm bg-secondary py-2 ${style}`}
    >
      <span className="text-2xl font-bold">
        <span>
          <Image
            src="/assets/icons/lp/cart-shopping-solid.svg"
            width={24}
            height={24}
            alt="cart"
            className="inline"
          />
        </span>{' '}
        {text1}
      </span>
      <span className="text-lg">{text2}</span>
    </Link>
  );
}
