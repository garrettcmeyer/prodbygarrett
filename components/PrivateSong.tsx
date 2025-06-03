"use client";
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

interface Song {
  title: string;
  src: string;
  maxPlays: number;
}

const PrivateSong = ({ song }: { song: Song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        if (playCount < song.maxPlays) {
          audioRef.current.play();
          setPlayCount(playCount + 1);
        } else {
          alert('You have reached the maximum number of plays.');
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950">
      <h2 className="text-xl font-semibold mb-6 text-white">{song.title}</h2>

      <button
        onClick={togglePlay}
        className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 mb-6"
      >
        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
      </button>

      <audio
        ref={audioRef}
        src={song.src}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
      />

      <div className="w-[340px] h-2 bg-neutral-700 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-300"
          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
        />
      </div>

      <p className="text-xs text-gray-300">
        Plays remaining: {song.maxPlays - playCount}
      </p>
    </div>
  );
};

export default PrivateSong;