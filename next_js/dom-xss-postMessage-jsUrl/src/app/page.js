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
      <h1 className="text-2xl font-bold mb-4">Welcome to the Vulnerable CI Service</h1>
      <p>We do a lot of things - we will build your CI pipeline and deploy the app to make sure it has 100% uptime. Meanwhile, we will also inject our *analytics* into your app to make sure that we get most of the customer data to sell on dark web forums.</p>
      <p>That&apos;s the reason our services are dirt cheap.</p>
      <div id="ads" className="mt-8 p-4 border border-dashed border-red-500 text-center">
        {/* Ads will be inserted here */}
      </div>
    </div>
  );
}
