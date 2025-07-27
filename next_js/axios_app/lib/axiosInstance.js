import axios from "axios";

// Base API instance (unauthenticated)
const api = axios.create({
  baseURL: "", // relative base URL
});

// Admin API instance with hard-coded Basic Auth credentials
// Precomputed base64 for "adminugerHUGK897UYeilhefesuser12345:adminugerHUGK897UYeilhefespass54321"
const adminAuthToken = "YWRtaW51Z2VySFVHSzg5N1VZZWlsaGVmZXN1c2VyMTIzNDU6YWRtaW51Z2VySFVHSzg5N1VZZWlsaGVmZXNwYXNzNTQzMjE=";

const adminApi = axios.create({
  baseURL: "",
  headers: {
    Authorization: `Basic ${adminAuthToken}`,
  },
});

export { api, adminApi };
