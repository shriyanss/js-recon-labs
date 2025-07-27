import { deleteContact } from '../../../../lib/data';
import { ADMIN_USER, ADMIN_PASS } from '../../../../lib/constants';

function authorized(req) {
  const auth = req.headers.authorization || '';
  const expected = 'Basic ' + Buffer.from(`${ADMIN_USER}:${ADMIN_PASS}`).toString('base64');
  return auth === expected;
}

export default function handler(req, res) {
  if (!authorized(req)) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Admin Area"');
    return res.status(401).end('Unauthorized');
  }

  const id = parseInt(req.query.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid id' });
  }

  if (req.method === 'DELETE') {
    const ok = deleteContact(id);
    if (ok) return res.status(204).end();
    return res.status(404).json({ error: 'Not found' });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
