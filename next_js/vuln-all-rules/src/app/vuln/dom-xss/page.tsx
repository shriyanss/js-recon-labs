"use client";

import { useEffect, useState } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_dom_xss_innerHTML_url_source
//   detect_dom_setattribute_url_param
//   detect_dom_xss_dangerouslySetInnerHTML
//   detect_json_injection_to_dangerouslysetinnerhtml

export default function DomXssPage() {
    const [postContent, setPostContent] = useState("");

    // detect_dom_xss_innerHTML_url_source: URL param flows into innerHTML
    // detect_dom_setattribute_url_param: URL param flows into setAttribute('src', ...)
    useEffect(() => {
        const q = new URLSearchParams(window.location.search).get("q") || "";
        const output = document.getElementById("innerHTML-output");
        if (output) {
            output.innerHTML = q;
        }

        const src = new URLSearchParams(window.location.search).get("src") || "";
        const img = document.getElementById("img-output");
        if (img) {
            img.setAttribute("src", src);
        }
    }, []);

    // detect_dom_xss_dangerouslySetInnerHTML: fetch() co-occurs with dangerouslySetInnerHTML
    useEffect(() => {
        fetch("/api/data")
            .then((r) => r.json())
            .then((data) => setPostContent(data.content || ""));
    }, []);

    // detect_json_injection_to_dangerouslysetinnerhtml: URL param → JSON.parse → dangerouslySetInnerHTML
    const rawConfig =
        typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("config") || "{}"
            : "{}";
    let configParsed: Record<string, string> = {};
    try {
        configParsed = JSON.parse(rawConfig);
    } catch {
        // ignore invalid JSON
    }

    return (
        <div>
            <h1>DOM XSS Lab</h1>

            <section>
                <h2>innerHTML sink (URL param)</h2>
                <div id="innerHTML-output" />
            </section>

            <section>
                <h2>setAttribute src (URL param)</h2>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img id="img-output" src="" alt="user-supplied src" />
            </section>

            <section>
                <h2>dangerouslySetInnerHTML (fetch response)</h2>
                <div dangerouslySetInnerHTML={{ __html: postContent }} />
            </section>

            <section>
                <h2>dangerouslySetInnerHTML (JSON from URL param)</h2>
                <div dangerouslySetInnerHTML={{ __html: configParsed.html || "" }} />
            </section>
        </div>
    );
}
