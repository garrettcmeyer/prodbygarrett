"use client";
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaSpotify, FaApple, FaPlay, FaPause } from 'react-icons/fa'
import GradualSpacing from '@/components/magicui/gradual-spacing'
import WordFadeIn from '@/components/magicui/word-fade-in'

// Mock data for tracks
const tracks = [
  {
    id: 1,
    title: 'Flip the Script',
    artist: 'Chloe Hansen', 
    coverArt: '/songs/flipthescript/flipthescript.png',
    genre: 'Indie',
    releaseDate: '2024-08-23',
    spotifyLink: 'https://open.spotify.com/track/2QDDLUzeu1fcQcMflKi5Eh?si=83ca67c1f9ff4cc3',
    appleMusicLink: 'https://music.apple.com/us/album/flip-the-script/1761283657?i=1761283658',
    audioPreview: '/songs/flipthescript/Flip_the_Script.Master.wav',
    startTime: 30, // Start at 30 seconds
    endTime: 105, // End at 105 seconds
  },
  {
    id: 2,
    title: 'Attached',
    artist: 'GoodMerit, Chloe Hansen',
    coverArt: '/songs/attached/attachedart.jpg',
    genre: 'Pop',
    releaseDate: '2023-09-15',
    spotifyLink: 'https://open.spotify.com/track/772g96xpW1U3ZgYwgxGSJJ?si=f05165adec8c44e4',
    appleMusicLink: 'https://music.apple.com/us/album/attached-feat-chloe-hansen/1707646382?i=1707646383',
    audioPreview: '/songs/attached/attached.wav',
    startTime: 0,
    endTime: 60,
  },
  {
    id: 3,
    title: 'Green Chalk',
    artist: 'GoodMerit',
    coverArt: '/songs/greenchalk/greenchalk.png',
    genre: 'HipHop',
    releaseDate: '2021-01-15',
    spotifyLink: 'https://open.spotify.com/track/1BTPGWRnRvyNWvfjSVIkGK?si=5d0ac9009dfd4623',
    appleMusicLink: 'https://music.apple.com/us/album/green-chalk/1548225140?i=1548225142',
    audioPreview: '/songs/greenchalk/greenchalk.wav',
    startTime: 15,
    endTime: 45,
  },
]

const AudioPlayer = ({ src, startTime, endTime }: { src: string; startTime: number; endTime: number }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.currentTime = startTime
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      const currentTime = audio.currentTime - startTime
      const duration = endTime - startTime
      setProgress((currentTime / duration) * 100)

      if (audio.currentTime >= endTime) {
        audio.pause()
        setIsPlaying(false)
        audio.currentTime = startTime
      }
    }

    audio.addEventListener('timeupdate', updateProgress)
    audio.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      audio.removeEventListener('timeupdate', updateProgress)
      audio.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [startTime, endTime])

  return (
    <div className="w-full">
      <audio ref={audioRef} src={src} />
      <div className="flex items-center space-x-2">
        <button
          onClick={togglePlay}
          className="p-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
        </button>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-cyan-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

const TrackCard = ({ track }: { track: typeof tracks[0] }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-square">
        <img src={track.coverArt} alt={`${track.title} cover art`} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-sm">{track.genre}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{track.title}</h3>
        <p className="text-gray-600 mb-2">{track.artist}</p>
        <p className="text-sm text-gray-500 mb-2">{new Date(track.releaseDate).toLocaleDateString()}</p>
        <AudioPlayer src={track.audioPreview} startTime={track.startTime} endTime={track.endTime} />
        <div className="flex justify-between mt-4">
          <a href={track.spotifyLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
            <FaSpotify size={24} />
          </a>
          <a href={track.appleMusicLink} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
            <FaApple size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function MusicPortfolio() {
  const [sortBy, setSortBy] = useState<'genre' | 'releaseDate'>('releaseDate')
  const [filteredTracks, setFilteredTracks] = useState(tracks)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const sorted = [...tracks].sort((a, b) => {
      if (sortBy === 'genre') {
        return a.genre.localeCompare(b.genre)
      } else {
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      }
    })
    setFilteredTracks(sorted)
  }, [sortBy])

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="relative h-96 mb-12">
        <img src="/banner.jpg" alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-white">
            <WordFadeIn words="Garrett Meyer" delay={0.1} className="text-white" />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <GradualSpacing
              text="Producer, Engineer, Songwriter"
              className="text-center text-2xl font-bold"
            />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Portfolio Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
          <div className="mb-8 flex justify-end">
            <motion.select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'genre' | 'releaseDate')}
              className="bg-white text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer appearance-none"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <option value="releaseDate">Sort by Release Date</option>
              <option value="genre">Sort by Genre</option>
            </motion.select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTracks.map((track) => (
              <div key={track.id}>
                <TrackCard track={track} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}