"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

// Mock data for videos
const videos = [
  {
    id: 1,
    title: 'Flip the Script - Behind the Scenes',
    artist: 'Chloe Hansen',
    thumbnailUrl: '/videos/flipthescript/thumbnail.jpg',
    credits: 'Filmed, Edited, Color Graded',
    releaseDate: '2024-08-25',
    youtubeLink: 'https://youtube.com/watch?v=...',
    description: 'Studio session and music video behind the scenes'
  },
  // Add more video objects as needed
];

const VideoCard = ({ video }: { video: typeof videos[0] }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-w-16 aspect-h-9">
        {/* Embed Instagram post */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/C_yJ27uv9L0/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: '99.375%',
          }}
        >
          <a
            href="https://www.instagram.com/reel/C_yJ27uv9L0/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: '#FFFFFF',
              lineHeight: 0,
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View this post on Instagram
          </a>
        </blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{video.title}</h3>
        <p className="text-sm sm:text-gray-600 mb-2">{video.artist}</p>
        <p className="text-xs sm:text-sm text-gray-500 mb-2">
          {new Date(video.releaseDate).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{video.description}</p>
      </div>
    </motion.div>
  );
};

export default function VideoPortfolio() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [sortedVideos, setSortedVideos] = useState(videos);

  useEffect(() => {
    const sorted = [...videos].sort((a, b) => {
      const dateA = new Date(a.releaseDate).getTime();
      const dateB = new Date(b.releaseDate).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setSortedVideos(sorted);
  }, [sortOrder]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 sm:mb-8 flex justify-end">
        <motion.button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="bg-white text-black px-4 sm:px-6 py-2 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 font-sans border border-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {sortOrder === 'asc' ? (
            <>
              <FaSortAmountUp className="mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Oldest</span>
            </>
          ) : (
            <>
              <FaSortAmountDown className="mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Newest</span>
            </>
          )}
        </motion.button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sortedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
} 