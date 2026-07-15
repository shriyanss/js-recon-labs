import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>JS Recon — Vuln All Rules Lab</h1>
            <p>
                This application intentionally contains client-side vulnerabilities that exercise every js-recon-rules
                detection. It is used as a smoke-test target in CI.
            </p>
            <ul style={{ marginTop: "1rem" }}>
                <li>
                    <Link href="/vuln/dom-xss">DOM XSS</Link> — innerHTML, setAttribute, dangerouslySetInnerHTML, JSON
                    injection
                </li>
                <li>
                    <Link href="/vuln/redirect">Redirect</Link> — open redirect, link manipulation
                </li>
                <li>
                    <Link href="/vuln/storage">Storage</Link> — localStorage, cookie, WebSocket URL poisoning
                </li>
                <li>
                    <Link href="/vuln/eval">Eval</Link> — eval injection, ReDoS
                </li>
                <li>
                    <Link href="/vuln/fetch">Fetch</Link> — CSPT, ajax header manipulation
                </li>
                <li>
                    <Link href="/vuln/postmessage">PostMessage</Link> — innerHTML sink, href sink, wildcard origin, eval
                    sink, hardcoded secret
                </li>
            </ul>
        </div>
    );
}
