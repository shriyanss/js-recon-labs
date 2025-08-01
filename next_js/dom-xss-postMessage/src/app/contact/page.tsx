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
      <p>Made up your mind? Drop us an email on contact@127.0.42.55 and we promise that you&apos;ll never see your customer data on dark web.</p>
      <div id="ads" className="mt-8 p-4 border border-dashed border-red-500 text-center">
        {/* Ads will be inserted here */}
      </div>
    </div>
  );
}
