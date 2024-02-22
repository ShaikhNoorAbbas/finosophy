import Link from 'next/link';
import Button from '../button/Button';

export default function Navbar() {
  return (
    <nav className="relative z-50 hidden bg-white py-3 shadow-md lg:block">
      <div className="container flex items-center justify-between">
        <ul className="flex gap-10">
          <li>
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/student" className="link">
              Student
            </Link>
          </li>
          <li>
            <Link href="/youth" className="link">
              Youth
            </Link>
          </li>
          <li>
            <Link href="/teacher" className="link">
              Teacher
            </Link>
          </li>
          <li>
            <Link href="/school" className="link">
              School
            </Link>
          </li>
          <li>
            <Link href="/explore" className="link">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/blog" className="link">
              Blog
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
          href="https://wa.me/917506363600"
          text="Enquire Now!"
          targetBlank
          style="py-1 px-4 text-lg font-medium bg-secondary text-white"
        />
      </div>
    </nav>
  );
}
