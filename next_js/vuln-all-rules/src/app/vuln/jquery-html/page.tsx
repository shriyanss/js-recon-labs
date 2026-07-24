"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_jquery_html_injection_url_param (URL param -> jQuery constructor / .html())
//
// Stubs a minimal `$`/.html() shape rather than pulling in the real jQuery
// dependency — the rule matches the call-expression shape, not the resolved
// import, so a lightweight stand-in exercises the same AST pattern.

function $(selectorOrHtml: string) {
    return {
        html(value: string) {
            const target = document.getElementById("jquery-target");
            if (target) {
                target.innerHTML = value;
            }
        },
    };
}

export default function JqueryHtmlPage() {
    useEffect(() => {
        const q = location.search;
        $("<div>" + q + "</div>");
        $("#jquery-target").html(q);
    }, []);

    return (
        <div>
            <h1>jQuery HTML Injection Lab</h1>
            <div id="jquery-target" />
        </div>
    );
}
