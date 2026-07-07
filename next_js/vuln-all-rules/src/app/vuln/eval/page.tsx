"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_js_injection_eval
//   detect_redos_url_param

export default function EvalPage() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        // detect_js_injection_eval: URL param flows into eval()
        const code = params.get("code");
        if (code) {
            eval(code);
        }

        // detect_redos_url_param: URL param flows into new RegExp()
        const pattern = params.get("pattern");
        if (pattern) {
            const re = new RegExp(pattern);
            const testStr = document.getElementById("test-input")?.textContent || "";
            const match = re.test(testStr);
            const out = document.getElementById("match-output");
            if (out) out.textContent = match ? "match" : "no match";
        }
    }, []);

    return (
        <div>
            <h1>Eval Lab</h1>
            <p>URL params: ?code= (eval), ?pattern= (RegExp)</p>
            <p id="test-input">sample test string</p>
            <p id="match-output" />
        </div>
    );
}
