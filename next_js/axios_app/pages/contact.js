import { useState } from "react";
import { api } from "../lib/axiosInstance";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/api/contact", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      // Intentionally minimal error handling for the vulnerable lab
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 font-sans space-y-6">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-center max-w-xl">
        Feeling too rich? Contact us — we specialize in high-impact breaches guaranteed to
        shrink your net worth faster than a crypto rugpull.
      </p>
      {submitted && (
        <p className="text-green-600">Your message has been sent. We'll be in touch soon!</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md space-y-4">
        <input
          className="border p-2"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="border p-2"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="border p-2"
          name="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </main>
  );
}
