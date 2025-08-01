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
      <p>Started before you were born, we are better than you in building CI pipelines. Wanna see a demo? Send us your cloud credentials and we&apos;ll deploy a pipeline like you&apos;ve never seen before.</p>
      <div id="ads" className="mt-8 p-4 border border-dashed border-red-500 text-center">
        {/* Ads will be inserted here */}
      </div>
    </div>
  );
}
