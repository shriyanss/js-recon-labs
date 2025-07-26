import { contacts } from '../../../../lib/data';
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

  if (req.method === 'GET') {
    return res.status(200).json(contacts);
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
