// In-memory contact store (not persistent)
let contacts = global.contactsStore || [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    message: `Hey CI team,\nI messed up. Can you please help me?\n\nHere's the AWS access key: AKIAIOSFODNN7EXAMPLE\n           AWS secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`,
  },
];

global.contactsStore = contacts;

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const newContact = {
      id: contacts.length ? contacts[contacts.length - 1].id + 1 : 1,
      name,
      email,
      message,
    };
    contacts.push(newContact);
    return res.status(201).json({ success: true, contact: newContact });
  }
  return res.status(405).json({ error: "Method not allowed" });
}

export { contacts };
