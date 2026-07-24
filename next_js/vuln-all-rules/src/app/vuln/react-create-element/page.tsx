"use client";

import { useEffect } from "react";
import { createElement } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_react_createelement_dynamic_type (URL param used as the dynamic component/tag type)
//
// Stores the URL-derived value in a `const` so taint propagates via binding
// (taintFrom in the rule uses binding-based lookup in computeTaint), matching
// the pattern used by the other CSPT/redirect/DOM-XSS labs in this app. The
// createElement() result is assigned onto `window` (rather than discarded) so
// the minifier can't tree-shake the call away as dead code.

export default function ReactCreateElementPage() {
    useEffect(() => {
        const tag = new URLSearchParams(location.search).get("tag") || "div";
        (window as unknown as { __dynamicElement?: unknown }).__dynamicElement = createElement(
            tag,
            { id: "dynamic-el" },
            "dynamic element",
        );
    }, []);

    return (
        <div>
            <h1>React createElement Lab</h1>
        </div>
    );
}
