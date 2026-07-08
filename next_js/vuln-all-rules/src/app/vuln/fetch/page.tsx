"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_cspt_fetch_url_param
//   detect_ajax_header_manipulation
// Also triggers request rules via fetch calls to /api/data and /api/admin/users:
//   api_path, admin_api, missing_authorization_header

export default function FetchPage() {
    useEffect(() => {
        // detect_cspt_fetch_url_param: chained URLSearchParams.get() interpolated into fetch() path.
        // Must be chained (not split across two lines) to match the rule's esquery pattern:
        //   callee.object.type="NewExpression" AND callee.object.callee.name="URLSearchParams"
        fetch(`/api/data/${new URLSearchParams(window.location.search).get("id") || "1"}`).then((r) => r.json());

        // detect_ajax_header_manipulation: chained URLSearchParams.get() used as computed header key.
        // The rule uses taintFrom on ObjectProperty[computed=true]; the engine checks both the key
        // and value sides, so the taint in the computed key is detected correctly.
        fetch("/api/data", {
            headers: {
                [new URLSearchParams(window.location.search).get("header") || "X-Custom"]: "value",
            },
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
