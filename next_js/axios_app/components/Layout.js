import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">
            <Link href="/">Vulnerable CI Services</Link>
          </h1>
          <ul className="flex space-x-6 text-sm md:text-base">
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
        </nav>
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
