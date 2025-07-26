import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <span className="font-bold text-lg">Vulnerable CI Services</span>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
