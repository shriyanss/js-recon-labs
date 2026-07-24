"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_non_global_regex_sanitizer (a .replace(/<script.../, "") sanitizer
//   missing the /g flag, so only the first match is stripped)

function stripScriptTags(input: string) {
    return input.replace(/<script[^>]*>.*?<\/script>/i, "");
}

export default function NonGlobalSanitizerPage() {
    useEffect(() => {
        const q = location.search;
        const cleaned = stripScriptTags(q);
        (window as unknown as { __cleaned?: unknown }).__cleaned = cleaned;
    }, []);

    return (
        <div>
            <h1>Non-Global Regex Sanitizer Lab</h1>
        </div>
    );
}
