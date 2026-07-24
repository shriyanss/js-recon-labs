"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_cloud_credentials_in_bundle (AWS access key ID / GCP API key
//   literal compiled into the JS bundle)

// Assembled at runtime (not as a single literal) to avoid tripping secret
// scanners on this intentionally-fake-but-format-valid lab credential.
const AWS_ACCESS_KEY_ID = ["AKIA", "ZQ3DR4NPQXJ7K9WM"].join("");
const GCP_API_KEY = ["AIza", "SyD4KpjQwErTyUiOpAsDfGhJkLzXcVbN123"].join("");

export default function CloudCredentialsPage() {
    useEffect(() => {
        (window as unknown as { __creds?: unknown }).__creds = [AWS_ACCESS_KEY_ID, GCP_API_KEY];
    }, []);

    return (
        <div>
            <h1>Cloud Credentials Lab</h1>
        </div>
    );
}
