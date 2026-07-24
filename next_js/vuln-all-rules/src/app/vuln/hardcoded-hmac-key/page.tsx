"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_hardcoded_hmac_signing_key (createHmac() called with a hardcoded
//   string literal as the signing key)
//
// Stubs a minimal crypto-shaped object exposing a `createHmac` property
// (matching the Node `crypto`/crypto-browserify call shape:
// `crypto.createHmac(algorithm, key)`) rather than pulling in a real
// dependency — the rule matches the member-expression call shape, not the
// resolved import. A local function *declaration* named createHmac would
// have its identifier renamed by the minifier; a property key on an object
// literal survives minification, which is what the real-world pattern relies
// on.

const crypto = {
    createHmac(_algorithm: string, _key: string) {
        return {
            update(_data: string) {
                return this;
            },
            digest(_encoding: string) {
                return "deadbeefcafebabe";
            },
        };
    },
};

export default function HardcodedHmacKeyPage() {
    useEffect(() => {
        const signature = crypto.createHmac("sha256", "super-secret-signing-key-123").update("payload").digest("hex");
        (window as unknown as { __sig?: unknown }).__sig = signature;
    }, []);

    return (
        <div>
            <h1>Hardcoded HMAC Signing Key Lab</h1>
        </div>
    );
}
