"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_css_injection_style_sink (URL param -> element.style.cssText)

export default function CssInjectionPage() {
    useEffect(() => {
        // Store the URL-derived value in a variable so taint propagates via binding
        // (taintFrom in the rule uses binding-based lookup in computeTaint), matching
        // the pattern used by the other CSPT/redirect/DOM-XSS labs in this app.
        const q = location.search;

        const target = document.getElementById("css-injection-target");
        if (target) {
            // Attacker-controlled CSS written straight into cssText — no sanitization.
            // A real attacker payload can issue request-firing selectors (@import,
            // background-image: url()) purely via CSS, without executing any script.
            target.style.cssText = q;
        }
    }, []);

    return (
        <div>
            <h1>CSS Injection Lab</h1>
            <div id="css-injection-target" />
        </div>
    );
}
