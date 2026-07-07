# js-recon-labs

Vulnerable web application labs for [js-recon](https://github.com/shriyanss/js-recon). Each app intentionally seeds specific client-side vulnerabilities to demonstrate or test js-recon-rules detections.

> [!CAUTION]
> All apps here are intentionally insecure. Never expose them to the internet.

## Repository layout

```
next_js/
  fetch_app/                 # Next.js Pages Router — fetch-based API lab
  axios_app/                 # Next.js Pages Router — axios-based API lab
  dom-xss-postMessage/       # Next.js App Router — postMessage → innerHTML XSS
  dom-xss-postMessage-jsUrl/ # Next.js App Router — postMessage → location.href
  vuln-all-rules/            # Next.js App Router — seeds ALL js-recon-rules (CI smoke-test target)
static/
  labs-banner.png
```

## vuln-all-rules (CI smoke-test target)

`next_js/vuln-all-rules/` is the primary CI test app used by js-recon's `rules-smoke-test` GitHub Actions workflow. It seeds all 22 applicable rule detections across 6 vuln pages and 3 API routes.

### Running locally

```bash
cd next_js/vuln-all-rules
npm install
npm run build
npm start     # serves on http://localhost:3001
```

### Running js-recon against it

From the js-recon directory:

```bash
node build/index.js run -u http://localhost:3001 -r ../js-recon-rules -y -k
node scripts/smoke-test.js
```

### Adding a new rule

When a new rule is added to js-recon-rules:

1. Identify which page in `vuln-all-rules` best fits the new rule's category.
2. Add the required vulnerability pattern (source + sink) to that page's `useEffect` or component body.
3. Confirm the new rule ID fires: run js-recon run against the app locally and check `analyze.json`.
4. Add the rule ID to `EXPECTED_RULES` in `js-recon/scripts/smoke-test.js`.
5. Update the README table in `next_js/vuln-all-rules/README.md`.

## Other labs

The remaining apps are standalone vulnerability demos used for walkthroughs and manual testing. They are not part of the CI smoke test.
