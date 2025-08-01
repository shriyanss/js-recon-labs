'use client';

import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Intentionally insecure: no origin check
      const adsDiv = document.getElementById('ads');
      if (adsDiv) {
        // Insecurely insert HTML from the message
        adsDiv.innerHTML = event.data;
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to the Vulnerable CI Service</h1>
      <p>This is the home page. Explore the other pages to see more content.</p>
      <div id="ads" className="mt-8 p-4 border border-dashed border-red-500 text-center">
        {/* Ads will be inserted here */}
      </div>
    </div>
  );
}
