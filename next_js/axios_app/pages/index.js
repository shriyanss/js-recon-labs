import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white text-center py-20 md:py-32 -mt-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Discover Vulnerable CI Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">An educational platform to explore and understand common security vulnerabilities in Continuous Integration pipelines.</p>
          <Link href="/contact" className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors duration-300">
            Get In Touch
          </Link>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">What We Do</h2>
            <p className="max-w-2xl mx-auto text-gray-600">We provide cutting-edge CI/CD solutions with a special knack for introducing security vulnerabilities. It's not a bug, it's a feature for learning.</p>
        </div>
      </section>
    </>
  );
}
