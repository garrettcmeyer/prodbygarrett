'use client';

import Image from "next/image";
import MusicPortfolio from "@/components/MusicPortfolio";
import LinkedInStyleProfile from "@/components/LinkedInStyleProfile";
import { useState } from 'react';
import RecordingSessionBookingPopup from '@/components/RecordingSessionBookingPopup';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative text-black bg-gray-100">
      <div className="relative z-[1] flex place-items-center w-full">
        {/* ... existing code ... */}
      </div>

      {/* Add MusicPortfolio component */}
      <div className="w-full">
        <MusicPortfolio />
      </div>
      
      {/* Add space between portfolio and LinkedIn profile */}
      <div className="w-full h-16"></div>
      
      {/* Add LinkedInStyleProfile component */}
      <div className="w-full">
        <LinkedInStyleProfile />
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex p-4 sm:p-8 lg:p-24">
        {/* ... existing code ... */}
      </div>

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
