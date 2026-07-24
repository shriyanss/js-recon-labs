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
                <li>
                    <Link href="/vuln/postmessage-origin-check">PostMessage Origin Check</Link> — weak origin-check
                    idiom (endsWith)
                </li>
                <li>
                    <Link href="/vuln/css-injection">CSS Injection</Link> — URL param into style.cssText
                </li>
                <li>
                    <Link href="/vuln/react-create-element">React createElement</Link> — URL param as dynamic component
                    type
                </li>
                <li>
                    <Link href="/vuln/jquery-html">jQuery HTML Injection</Link> — URL param into jQuery constructor /
                    .html()
                </li>
                <li>
                    <Link href="/vuln/dompurify-hook">DOMPurify forceKeepAttr Hook</Link> — sanitizer bypass via hook
                </li>
                <li>
                    <Link href="/vuln/client-authz-gate">Client-Side Authz Gate</Link> — role/entitlement flag gating
                    UI/action reachability
                </li>
                <li>
                    <Link href="/vuln/insecure-random-token">Insecure Random Token</Link> — Math.random() token written
                    to cookie/storage
                </li>
            </ul>
        </div>
    );
}
