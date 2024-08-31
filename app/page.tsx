'use client';

import Image from "next/image";
import MusicPortfolio from "@/components/MusicPortfolio";
import { useState } from 'react';
import RecordingSessionBookingPopup from '@/components/RecordingSessionBookingPopup';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 lg:p-24">
      {/* Existing content */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* ... existing code ... */}
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[200px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        {/* ... existing code ... */}
      </div>

      {/* Add MusicPortfolio component */}
      <MusicPortfolio />

      {/* Add button to open popup */}
      <button
        onClick={openPopup}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Book Recording Session
      </button>

      {/* Render popup component conditionally */}
      {isPopupOpen && (
        <RecordingSessionBookingPopup onClose={closePopup} />
      )}

      {/* Existing content */}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* ... existing code ... */}
      </div>
    </main>
  );
}
