'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  isSideNavbar: boolean;
  setIsSideNavbar: (value: boolean) => void;
}

export default function Header({ isSideNavbar, setIsSideNavbar }: HeaderProps) {
  return (
    <header className="bg-primary-dark py-5">
      <div className="container flex justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={150}
            height={32}
            alt="Logo"
          />
        </Link>
        <button
          onClick={() => setIsSideNavbar(!isSideNavbar)}
          className="lg:hidden"
        >
          <Image
            src="/assets/icons/bars-solid.svg"
            width={25}
            height={25}
            alt="Menu"
          />
        </button>
      </div>
    </header>
  );
}
