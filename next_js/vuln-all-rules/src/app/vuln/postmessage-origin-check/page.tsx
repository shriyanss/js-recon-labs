"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_postmessage_weak_origin_check (origin check uses .endsWith() instead of exact equality)
//
// Kept on its own page/chunk, separate from /vuln/postmessage, because the rule's
// postMessageFuncResolve step resolves only the FIRST addEventListener("message", ...)
// match in the chunk — mixing it with the other postMessage lab would risk resolving
// to the wrong handler.
//
// The origin-check guard is written with a `&&` short-circuit rather than a
// nested `if` block: an `if`-wrapped assignment inside this handler shape trips
// an unrelated pre-existing crash in js-recon's AST engine (findMemberExpressionAssignment /
// checkAssignmentExist, used by detect_postMessage_innerHtml_sink and
// detect_postMessage_function_href) when resolving this chunk's handler function.
// See internal-docs for the follow-up core-engine bug report.

export default function PostMessageOriginCheckPage() {
    useEffect(() => {
        window.addEventListener("message", function (e) {
            // Bypassable: an attacker page hosted at
            // "https://attacker.example/anything.trusted.example.com" or a crafted
            // subdomain satisfies endsWith(".trusted.example.com") too.
            const originOk = e.origin.endsWith(".trusted.example.com");
            const target = document.getElementById("origin-check-target");
            originOk && target && (target.textContent = String(e.data));
        });
    }, []);

    return (
        <div>
            <h1>PostMessage Weak Origin Check Lab</h1>
            <div id="origin-check-target" />
        </div>
    );
}
