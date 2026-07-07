"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_cspt_fetch_url_param
//   detect_ajax_header_manipulation
// Also triggers request rules via fetch calls to /api/data and /api/admin/users:
//   api_path, admin_api, missing_authorization_header

export default function FetchPage() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        // detect_cspt_fetch_url_param: URL param interpolated into fetch() path
        const itemId = params.get("id") || "1";
        fetch(`/api/data/${itemId}`).then((r) => r.json());

        // detect_ajax_header_manipulation: URL param used as computed fetch header key
        const headerName = params.get("header") || "X-Custom";
        fetch("/api/data", {
            headers: { [headerName]: "value" },
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
