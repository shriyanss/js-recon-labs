"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_cspt_fetch_url_param
//   detect_ajax_header_manipulation
// Also triggers request rules via fetch calls to /api/data and /api/admin/users:
//   api_path, admin_api, missing_authorization_header

export default function FetchPage() {
    useEffect(() => {
        // Store URL-derived values in variables so taint propagates via binding
        // (taintFrom in the rules uses binding-based lookup in computeTaint).
        // Using location.search directly (not window.location.search) matches
        // the MemberExpression[property.name="search"][object.name="location"] pattern
        // in the rule's step-1 esquery.
        const q = location.search;

        // detect_cspt_fetch_url_param: tainted q flows into fetch() via binary "+" concatenation.
        // Template literals compile to "/api/data/".concat(q) in Terser output, which does NOT
        // match the rule's esquery (arguments.0.type="BinaryExpression"). Explicit + concatenation
        // stays as a BinaryExpression in the compiled bundle.
        // eslint-disable-next-line prefer-template
        fetch("/api/data/" + q).then((r) => r.json());

        // detect_ajax_header_manipulation: tainted q used as computed header key.
        // The engine checks both key and value sides of computed ObjectProperty,
        // so the tainted key is detected correctly.
        fetch("/api/data", {
            headers: { [q]: "value" },
        }).then((r) => r.json());

        // These calls trigger request rules (api_path, admin_api, missing_authorization_header)
        fetch("/api/data").then((r) => r.json());
        fetch("/api/admin/users").then((r) => r.json());
    }, []);

    return (
        <div>
            <h1>Fetch Lab</h1>
            <p>URL params: ?id= (CSPT), ?header= (header injection)</p>
        </div>
    );
}
