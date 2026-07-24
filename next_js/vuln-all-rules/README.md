# JS Recon — Vuln All Rules Lab

A Next.js 15 App Router application with intentional client-side vulnerabilities that exercise **all applicable js-recon-rules detections**. This app is the smoke-test target for js-recon's CI pipeline.

> [!CAUTION]
> Do NOT expose this app to the internet. It is intentionally vulnerable.

## Vulnerabilities seeded

| Rule ID                                            | Page                             | Vulnerability                                               |
| -------------------------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| `detect_dom_xss_innerHTML_url_source`              | `/vuln/dom-xss`                  | `URLSearchParams.get` → `innerHTML`                         |
| `detect_dom_setattribute_url_param`                | `/vuln/dom-xss`                  | `URLSearchParams.get` → `setAttribute('src', ...)`          |
| `detect_dom_xss_dangerouslySetInnerHTML`           | `/vuln/dom-xss`                  | `fetch()` + `dangerouslySetInnerHTML`                       |
| `detect_json_injection_to_dangerouslysetinnerhtml` | `/vuln/dom-xss`                  | URL param → `JSON.parse` → `dangerouslySetInnerHTML`        |
| `detect_open_redirect_url_param`                   | `/vuln/redirect`                 | `URLSearchParams.get` → `window.location.href`              |
| `detect_link_manipulation_href`                    | `/vuln/redirect`                 | `URLSearchParams.get` → `element.href`                      |
| `detect_storage_manipulation_url_param`            | `/vuln/storage`                  | `URLSearchParams.get` → `localStorage.setItem`              |
| `detect_cookie_manipulation_url_param`             | `/vuln/storage`                  | `URLSearchParams.get` → `document.cookie`                   |
| `detect_websocket_url_poisoning`                   | `/vuln/storage`                  | `URLSearchParams.get` → `new WebSocket(url)`                |
| `detect_js_injection_eval`                         | `/vuln/eval`                     | `URLSearchParams.get` → `eval()`                            |
| `detect_redos_url_param`                           | `/vuln/eval`                     | `URLSearchParams.get` → `new RegExp()`                      |
| `detect_cspt_fetch_url_param`                      | `/vuln/fetch`                    | URL param in template literal → `fetch()`                   |
| `detect_cspt_xhr_url_param`                        | `/vuln/fetch`                    | URL param in string concatenation → `XMLHttpRequest.open()` |
| `detect_ajax_header_manipulation`                  | `/vuln/fetch`                    | URL param as computed fetch header key                      |
| `detect_postMessage`                               | `/vuln/postmessage`              | `window.addEventListener('message', ...)`                   |
| `detect_postMessage_innerHtml_sink`                | `/vuln/postmessage`              | message handler assigns `innerHTML = event.data`            |
| `detect_postMessage_function_href`                 | `/vuln/postmessage`              | message handler assigns `href = event.data`                 |
| `detect_postMessage_wildcard_origin`               | `/vuln/postmessage`              | `postMessage(data, '*')`                                    |
| `detect_postmessage_eval`                          | `/vuln/postmessage`              | message listener + `eval()` in same chunk                   |
| `detect_postmessage_weak_origin_check`             | `/vuln/postmessage-origin-check` | origin check uses `.endsWith()` instead of exact equality   |
| `detect_hardcoded_secrets`                         | `/vuln/postmessage`              | fake `whsec_` webhook secret literal                        |
| `detect_css_injection_style_sink`                  | `/vuln/css-injection`            | URL param → `element.style.cssText`                         |
| `detect_react_createelement_dynamic_type`          | `/vuln/react-create-element`     | URL param → `createElement(type, ...)`                      |
| `detect_jquery_html_injection_url_param`           | `/vuln/jquery-html`              | URL param → jQuery constructor / `.html()`                  |
| `detect_dompurify_forcekeepattr_hook`              | `/vuln/dompurify-hook`           | `data.forceKeepAttr = true` inside a sanitize hook          |
| `detect_client_side_authz_gate`                    | `/vuln/client-authz-gate`        | `if` statement gating UI/action on a role/entitlement flag  |
| `detect_insecure_random_token_storage`             | `/vuln/insecure-random-token`    | `Math.random()` value written to cookie/localStorage        |
| `detect_cloud_credentials_in_bundle`               | `/vuln/cloud-credentials`        | AWS access key ID / GCP API key literal in bundle           |
| `detect_hardcoded_hmac_signing_key`                | `/vuln/hardcoded-hmac-key`       | `createHmac()` called with a hardcoded signing key          |
| `api_path`                                         | `/vuln/fetch`                    | fetch calls to `/api/data` and `/api/admin/users`           |
| `admin_api`                                        | `/vuln/fetch`                    | fetch call to `/api/admin/users`                            |
| `missing_authorization_header`                     | `/vuln/fetch`                    | fetch calls to `/api/` without Authorization header         |

## Run locally

```bash
npm install
npm run build
npm start        # starts on port 3001
```

## Run with Docker

```bash
docker build -t js-recon-labs:vuln-all-rules .
docker run --rm -p 3001:3001 js-recon-labs:vuln-all-rules
```

## Scan with js-recon

```bash
node build/index.js run -u http://localhost:3001 -r ../js-recon-rules -y -k
```

Then verify with:

```bash
node scripts/smoke-test.js
```
