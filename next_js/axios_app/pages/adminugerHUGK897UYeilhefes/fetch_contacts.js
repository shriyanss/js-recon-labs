import { useEffect, useState } from "react";
import { adminApi } from "../../lib/axiosInstance";

const PAGE_PASSWORD = "Password1";

export default function FetchContacts() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (authed) {
      loadContacts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  const loadContacts = async () => {
    try {
      const res = await adminApi.get(
        "/api/adminugerHUGK897UYeilhefes/contacts"
      );
      setContacts(res.data.contacts || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch contacts");
    }
  };

  const handleDelete = async (id) => {
    try {
      await adminApi.delete(
        `/api/adminugerHUGK897UYeilhefes/contacts/${id}`
      );
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === PAGE_PASSWORD) {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  if (!authed) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-4">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="password"
            className="border p-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-600 text-white p-2">Enter</button>
        </form>
        {error && <p className="text-red-600">{error}</p>}
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Contact Submissions</h1>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <td className="border p-2">{c.id}</td>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2 whitespace-pre-wrap">{c.message}</td>
                <td className="border p-2 text-center">
                  <button
                    className="text-red-600 underline"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
