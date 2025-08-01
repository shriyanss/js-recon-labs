"use client";

import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      const div = document.createElement("div");
      div.innerHTML = event.data;
      document.body.appendChild(div);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>This is the about page. We are a company that does things.</p>
      <div id="ads" className="mt-8 p-4 border border-dashed border-red-500 text-center">
        {/* Ads will be inserted here */}
      </div>
    </div>
  );
}
