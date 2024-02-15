import Image from 'next/image';
import Link from 'next/link';

interface LpButtonProps {
  href: string;
  style?: string;
  iconStyle?: string;
  text1: string;
  text2: string;
  text1Style?: string;
  text2Style?: string;
}

export default function LpButton({
  href,
  style,
  iconStyle,
  text1,
  text2,
  text1Style,
  text2Style,
}: LpButtonProps) {
  return (
    <Link
      href={href}
      className={`flex w-full flex-col rounded-sm bg-secondary px-4 py-2 text-white ${style}`}
    >
      <span className={`${text1Style}`}>
        <span>
          <Image
            src="/assets/icons/lp/cart-shopping-solid.svg"
            width={24}
            height={24}
            alt="cart"
            className={`inline ${iconStyle}`}
          />
        </span>{' '}
        {text1}
      </span>
      <span className={`${text2Style}`}>{text2}</span>
    </Link>
  );
}
