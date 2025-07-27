export default function About() {
  return (
    <>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">About Our Mission</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We are a team of security researchers and developers passionate about making the web a safer place. Our mission is to provide educational resources on common vulnerabilities in a hands-on, interactive way.</p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-left">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Why We Do It</h2>
                <p className="text-gray-700 mb-4">
                    In a rapidly evolving digital landscape, understanding security is no longer optional. We believe that the best way to learn about security is by seeing vulnerabilities firsthand in a controlled environment. This platform is designed to simulate real-world insecure applications, allowing developers, students, and security professionals to learn how to identify, exploit, and ultimately, fix them.
                </p>
                <p className="text-gray-700">
                    Our goal is not to encourage hacking, but to foster a deeper understanding of security principles. By building and demonstrating vulnerable systems, we aim to equip the next generation of developers with the knowledge they need to build more secure software.
                </p>
            </div>
        </div>
      </section>
    </>
  );
}
