'use client';

import Image from 'next/image';

export default function LpHeader() {
  return (
    <header className="flex justify-center border-b-[5px] border-secondary bg-primary-dark py-4">
      <Image
        src="/assets/images/logo.png"
        width={150}
        height={32}
        alt="Logo"
        className="w-[140px]"
      />
    </header>
  );
}
