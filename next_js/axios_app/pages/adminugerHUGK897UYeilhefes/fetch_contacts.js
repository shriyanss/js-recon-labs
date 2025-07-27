import { useState, useEffect } from 'react';
import {
  ADMIN_PAGE_PASSWORD,
  ADMIN_USER,
  ADMIN_PASS,
} from '../../lib/constants';

export default function FetchContacts() {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authorized) {
      fetchContacts();
    }
  }, [authorized]);

  async function fetchContacts() {
    try {
      const res = await fetch('/api/adminugerHUGK897UYeilhefes/contacts', {
        headers: {
          Authorization:
            'Basic ' + btoa(`${ADMIN_USER}:${ADMIN_PASS}`),
        },
      });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      setError('Unable to fetch contacts');
    }
  }

  async function handleDelete(id) {
    try {
      const res = await fetch(
        `/api/adminugerHUGK897UYeilhefes/contacts/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization:
              'Basic ' + btoa(`${ADMIN_USER}:${ADMIN_PASS}`),
          },
        }
      );
      if (res.status === 204) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
      }
    } catch (_) {}
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password === ADMIN_PAGE_PASSWORD) {
      setAuthorized(true);
    } else {
      setError('Incorrect password');
    }
  }

  if (!authorized) {
    return (
      <div>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border w-full p-2"
          />
          <button className="bg-blue-600 text-white px-4 py-2" type="submit">
            Enter
          </button>
        </form>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <h1>Contact Submissions</h1>
      {error && <p className="text-red-600">{error}</p>}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-2">ID</th>
            <th className="border px-2">Name</th>
            <th className="border px-2">Email</th>
            <th className="border px-2">Message</th>
            <th className="border px-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td className="border px-2">{c.id}</td>
              <td className="border px-2">{c.name}</td>
              <td className="border px-2">{c.email}</td>
              <td className="border px-2 whitespace-pre-wrap">{c.message}</td>
              <td className="border px-2">
                <button
                  onClick={() => handleDelete(c.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
