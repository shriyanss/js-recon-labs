"use client";

import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      const div = document.createElement("div");
      div.innerHTML = event.data;
      document.body.appendChild(div);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>You can contact us at contact@example.com.</p>
      <div id="ads" className="mt-8 p-4 border border-dashed border-red-500 text-center">
        &lt;!-- Ads will be inserted here --&gt;
      </div>
    </div>
  );
}
