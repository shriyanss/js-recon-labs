import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "JS Recon Vuln All Rules Lab",
    description: "Vulnerable Next.js app covering all js-recon-rules detections",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <strong>JS Recon Lab</strong>
                    <Link href="/">Home</Link>
                    <Link href="/vuln/dom-xss">DOM XSS</Link>
                    <Link href="/vuln/redirect">Redirect</Link>
                    <Link href="/vuln/storage">Storage</Link>
                    <Link href="/vuln/eval">Eval</Link>
                    <Link href="/vuln/fetch">Fetch</Link>
                    <Link href="/vuln/postmessage">PostMessage</Link>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    );
}
