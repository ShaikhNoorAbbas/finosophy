'use client';

import Link from 'next/link';

interface SideNavbarProps {
  setIsSideNavbar: any;
  isSideNavbar: any;
}

export default function SideNavbar({
  setIsSideNavbar,
  isSideNavbar,
}: SideNavbarProps) {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-3/4 bg-white p-4 shadow-lg ${
        isSideNavbar ? 'block' : 'hidden'
      }`}
    >
      <button onClick={() => setIsSideNavbar(false)} className="text-lg">
        Close
      </button>
      <ul className="mt-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* ... other links */}
      </ul>
    </div>
  );
}
