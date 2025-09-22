"use client"; // Next.js app router হলে লাগবে

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">MyLogo</Link>
      </div>

      {/* Menu Items */}
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/gellery" className="hover:text-gray-200">
            Gellery
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-gray-200">
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-200">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
