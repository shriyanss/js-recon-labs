"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_postMessage                (window.addEventListener 'message')
//   detect_postMessage_innerHtml_sink (handler assigns .innerHTML = event.data)
//   detect_postMessage_function_href  (handler assigns .href = event.data)
//   detect_postMessage_wildcard_origin (postMessage sent with '*' origin)
//   detect_postmessage_eval           (addEventListener 'message' + eval() in same chunk)
//   detect_hardcoded_secrets          (fake webhook secret literal in bundle)

// FAKE secret — intentionally included to trigger detect_hardcoded_secrets rule in CI.
// This value is not a real credential.
const WEBHOOK_SECRET = "whsec_fakesecretforjsreconci1234567890ab";

export default function PostMessagePage() {
    useEffect(() => {
        // detect_postMessage + detect_postMessage_innerHtml_sink + detect_postMessage_function_href:
        // ALL three patterns must be in the FIRST addEventListener handler because the rule engine
        // resolves only the first matched handler via postMessageFuncResolve.
        window.addEventListener("message", function (e) {
            const ads = document.getElementById("ads-target");
            if (ads) {
                ads.innerHTML = e.data;
            }
            const link = document.getElementById("link-target");
            if (link) {
                (link as HTMLAnchorElement).href = e.data;
            }
        });

        // detect_postmessage_eval:
        // eval() co-occurs with a message listener in the same chunk (chunk-level check, not
        // function-level, so a separate listener is fine here).
        window.addEventListener("message", function (e) {
            if (e.data && e.data.type === "eval") {
                eval(e.data.code);
            }
        });

        // detect_postMessage_wildcard_origin:
        // postMessage sent with '*' as target origin
        function sendAnalytics(data: unknown) {
            window.parent.postMessage(data, "*");
        }
        sendAnalytics({ secret: WEBHOOK_SECRET, page: window.location.pathname });
    }, []);

    return (
        <div>
            <h1>PostMessage Lab</h1>
            <div id="ads-target" />
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a id="link-target" href="#">
                link controlled by postMessage
            </a>
        </div>
    );
}
