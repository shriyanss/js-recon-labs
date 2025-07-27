import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-20 shadow">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">
            <Link href="/">Vulnerable CI Services</Link>
          </h1>
          {/* Desktop links */}
            <ul className="hidden md:flex list-none space-x-8 text-sm md:text-base">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
              />
            </svg>
          </button>
        </nav>
        {/* Mobile menu */}
        {open && (
          <ul className="md:hidden list-none bg-gray-800 text-white space-y-2 py-3 px-4">
            <li>
              <Link href="/" onClick={() => setOpen(false)} className="block py-1 hover:text-yellow-400">Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)} className="block py-1 hover:text-yellow-400">About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="block py-1 hover:text-yellow-400">Contact</Link>
            </li>
          </ul>
        )}
      </header>

      {/* Main */}
      <main className="flex-1 container mx-auto px-4 py-10">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Vulnerable CI Services — All breaches reserved.
      </footer>
    </div>
  );
}
