import Link from 'next/link';
import Button from '../button/Button';

export default function Navbar() {
  return (
    <nav className="hidden bg-white py-3 shadow-md lg:block">
      <div className="container flex items-center justify-between">
        <ul className="flex gap-10">
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
          style="py-1 px-4 text-lg font-medium bg-secondary text-white"
        />
      </div>
    </nav>
  );
}
