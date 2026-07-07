"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_open_redirect_url_param
//   detect_link_manipulation_href

export default function RedirectPage() {
    useEffect(() => {
        // detect_open_redirect_url_param: URL param flows into window.location.href
        const redirect = new URLSearchParams(window.location.search).get("redirect");
        if (redirect) {
            window.location.href = redirect;
        }

        // detect_link_manipulation_href: URL param flows into element.href (not location)
        const url = new URLSearchParams(window.location.search).get("url") || "#";
        const link = document.getElementById("external-link");
        if (link) {
            (link as HTMLAnchorElement).href = url;
        }
    }, []);

    return (
        <div>
            <h1>Redirect Lab</h1>
            <p>Redirect target from URL param: ?redirect=...</p>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a id="external-link" href="#">
                Click here (link target controlled by ?url=...)
            </a>
        </div>
    );
}
