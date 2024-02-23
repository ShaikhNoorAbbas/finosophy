import { signOut } from '@/auth';
import Link from 'next/link';

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Users',
    href: '/dashboard/users',
  },
  {
    name: 'Blogs',
    href: '/dashboard/blogs',
  },
];

export default function DashboardNavbar() {
  return (
    <aside className="flex h-full flex-col justify-between bg-gray-400 p-4">
      <nav className="flex flex-col">
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="bg-gradient inline-block w-full rounded-lg px-2 py-1 text-center text-white shadow-md">
          Sign Out
        </button>
      </form>
    </aside>
  );
}
