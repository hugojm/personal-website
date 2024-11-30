import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <ul className="flex justify-around">
      <li>
        <Link href="/" className="text-white">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-white">
          About
        </Link>
      </li>
      <li>
        <Link href="/projects" className="text-white">
          Projects
        </Link>
      </li>
      <li>
        <Link href="/blog" className="text-white">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;