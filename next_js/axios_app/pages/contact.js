import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      await axios.post('/api/contact', { name, email, message });
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Feeling too rich? Contact us — we specialize in high-impact breaches
        guaranteed to shrink your net worth faster than a crypto rugpull.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border w-full p-2"
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border w-full p-2"
          />
        </div>
        <div>
          <label className="block">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border w-full p-2"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Submit
        </button>
      </form>
      {status === 'success' && <p className="text-green-600">Message sent!</p>}
      {status === 'error' && <p className="text-red-600">Error sending message.</p>}
    </div>
  );
}
