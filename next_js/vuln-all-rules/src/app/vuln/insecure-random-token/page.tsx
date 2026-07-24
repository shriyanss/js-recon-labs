"use client";

import { useEffect } from "react";

// INTENTIONALLY VULNERABLE — covers:
//   detect_insecure_random_token_storage (Math.random()-derived value written
//   to document.cookie / localStorage / sessionStorage)

export default function InsecureRandomTokenPage() {
    useEffect(() => {
        const sessionToken = Math.random().toString(36).slice(2);
        document.cookie = "session_token=" + sessionToken + "; Path=/;";
        localStorage.setItem("csrf_token", sessionToken);
    }, []);

    return (
        <div>
            <h1>Insecure Random Token Lab</h1>
        </div>
    );
}
