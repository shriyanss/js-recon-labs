import { contacts } from "../../contact";

const USERNAME = "adminugerHUGK897UYeilhefesuser12345";
const PASSWORD = "adminugerHUGK897UYeilhefespass54321";

export default function handler(req, res) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Basic ")) {
    return res.status(401).setHeader("WWW-Authenticate", "Basic").end("Unauthorized");
  }
  const [, encoded] = auth.split(" ");
  const creds = Buffer.from(encoded, "base64").toString();
  if (creds !== `${USERNAME}:${PASSWORD}`) {
    return res.status(403).end("Forbidden");
  }

  if (req.method === "GET") {
    return res.status(200).json({ contacts });
  }
  return res.status(405).json({ error: "Method not allowed" });
}
