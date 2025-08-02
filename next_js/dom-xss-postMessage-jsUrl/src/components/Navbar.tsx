import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/labs-banner.png" alt="Labs Banner" width={100} height={50} />
        <span className="font-bold text-lg ml-4">Vulnerable CI Services</span>
      </div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
