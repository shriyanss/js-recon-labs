// Simple in-memory data store for contact requests.
// Note: This is deliberately vulnerable and loses data on server restart.
export const contacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: `Hey CI team,\nI messed up. Can you please help me?\n\nHere's the AWS access key: AKIAIOSFODNN7EXAMPLE\nAWS secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`,
  },
];

let nextId = 2;

export function addContact({ name, email, message }) {
  const contact = { id: nextId++, name, email, message };
  contacts.push(contact);
  return contact;
}

export function deleteContact(id) {
  const index = contacts.findIndex((c) => c.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    return true;
  }
  return false;
}
