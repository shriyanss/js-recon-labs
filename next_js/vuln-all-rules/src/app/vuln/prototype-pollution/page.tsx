"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_prototype_pollution_merge_gadget (Object.assign(target,
//   JSON.parse(input)) with no __proto__ filtering)

export default function PrototypePollutionPage() {
    useEffect(() => {
        window.addEventListener("message", function (e) {
            const config = Object.assign({}, JSON.parse(e.data));
            (window as unknown as { __config?: unknown }).__config = config;
        });
    }, []);

    return (
        <div>
            <h1>Prototype Pollution Merge Gadget Lab</h1>
        </div>
    );
}
