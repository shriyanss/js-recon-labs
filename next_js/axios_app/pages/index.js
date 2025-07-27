export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-center space-y-8 bg-gradient-to-br from-amber-100 to-yellow-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold">Vulnerable CI Services</h1>
      <p className="max-w-xl">
        We provide cutting-edge CI/CD solutions with a special knack for introducing
        vulnerabilities right into your production environments.
      </p>
      <p className="text-lg font-semibold text-red-600">
        (Warning: Use at your own risk!)
      </p>
    </section>
  );
}
