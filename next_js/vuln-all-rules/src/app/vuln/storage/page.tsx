"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_storage_manipulation_url_param
//   detect_cookie_manipulation_url_param
//   detect_websocket_url_poisoning

export default function StoragePage() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        // detect_storage_manipulation_url_param: URL param flows into localStorage.setItem
        const theme = params.get("theme");
        if (theme) {
            localStorage.setItem("userTheme", theme);
        }

        // detect_cookie_manipulation_url_param: URL param flows into document.cookie
        const lang = params.get("lang");
        if (lang) {
            document.cookie = "lang=" + lang;
        }

        // detect_websocket_url_poisoning: URL param flows into new WebSocket(url)
        const wsHost = params.get("wsHost");
        if (wsHost) {
            const ws = new WebSocket("wss://" + wsHost + "/updates");
            ws.onopen = () => ws.close();
        }
    }, []);

    return (
        <div>
            <h1>Storage Lab</h1>
            <p>URL params: ?theme= (localStorage), ?lang= (cookie), ?wsHost= (WebSocket)</p>
        </div>
    );
}
