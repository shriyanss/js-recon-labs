"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_dompurify_forcekeepattr_hook (data.forceKeepAttr = true inside a sanitize hook)
//
// Stubs a minimal DOMPurify-shaped object rather than pulling in the real
// dependency — the rule matches the assignment-expression shape, not the
// resolved import.

const DOMPurify = {
    addHook(_name: string, _cb: (node: unknown, data: { forceKeepAttr?: boolean }) => void) {},
    sanitize(html: string) {
        return html;
    },
};

export default function DompurifyHookPage() {
    useEffect(() => {
        DOMPurify.addHook("uponSanitizeAttribute", (node, data) => {
            if (data.forceKeepAttr === undefined) {
                data.forceKeepAttr = true;
            }
        });

        const target = document.getElementById("dompurify-target");
        if (target) {
            target.innerHTML = DOMPurify.sanitize("<p>content</p>");
        }
    }, []);

    return (
        <div>
            <h1>DOMPurify forceKeepAttr Hook Lab</h1>
            <div id="dompurify-target" />
        </div>
    );
}
