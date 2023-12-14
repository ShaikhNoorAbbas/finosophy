import Link from 'next/link';
import Button from '../button/Button';

export default function Navbar() {
  return (
    <nav className="py-4 shadow-md">
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
            <Link href="/teachers" className="link">
              for Teachers
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
        <Button href="#" text="Book a Visit" />
      </div>
    </nav>
  );
}
