'use client';

import Link from 'next/link';
import Button from '../button/Button';

interface SideNavbarProps {
  setIsSideNavbar: any;
  isSideNavbar: any;
}

export default function SideNavbar({
  setIsSideNavbar,
  isSideNavbar,
}: SideNavbarProps) {
  return (
    <nav
      className={`fixed left-0 top-0 z-50 h-full w-3/4 bg-white p-10 shadow-lg transition-transform duration-700 ease-in-out ${
        isSideNavbar ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col gap-10">
        <button onClick={() => setIsSideNavbar(false)} className="text-lg">
          Close X
        </button>

        <ul
          onClick={() => setIsSideNavbar(false)}
          className="flex flex-col gap-4"
        >
          <li>
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/kids" className="link">
              for Kids
            </Link>
          </li>
          <li>
            <Link href="/youth" className="link">
              for Youth
            </Link>
          </li>
          <li>
            <Link href="/teacher" className="link">
              for Teacher
            </Link>
          </li>
          <li>
            <Link href="/school" className="link">
              for School
            </Link>
          </li>
          <li>
            <Link href="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>

        <Button
          href="#"
          text="Book a Visit"
          style="py-1 px-4 text-lg font-medium bg-secondary text-center text-white"
        />
      </div>
    </nav>
  );
}
