"use client";

import { useEffect, useState } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_client_side_authz_gate (if-statement gating on a role/entitlement
//   flag read directly off an object, with no corresponding server check
//   demonstrated in this lab)

type Session = { isAdmin: boolean; subscriptionType: string };

export default function ClientAuthzGatePage() {
    const [session] = useState<Session>({ isAdmin: false, subscriptionType: "free" });
    const [panel, setPanel] = useState<string | null>(null);

    useEffect(() => {
        if (session.isAdmin) {
            setPanel("admin-panel");
        } else if (session.subscriptionType === "premium") {
            setPanel("premium-panel");
        }
    }, [session]);

    return (
        <div>
            <h1>Client-Side Authorization Gate Lab</h1>
            <div id="panel">{panel ?? "no panel"}</div>
        </div>
    );
}
