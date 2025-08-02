'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.addEventListener('message', function(e) {
      // Flawed check for 'http:' or 'https:'
      if (e.data.indexOf('http:') > -1 || e.data.indexOf('https:') > -1) {
        // Vulnerable sink
        location.href = e.data;
      }
    });
  }, []);

  return (
    <div>
      <h1>Vulnerable Page</h1>
      <p>This page is vulnerable to DOM XSS via postMessage.</p>
    </div>
  );
}
