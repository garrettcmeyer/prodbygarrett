    // Start of Selection
    "use client";
    import React, { useState, useEffect, useRef } from 'react'
    import { motion, AnimatePresence } from 'framer-motion'
    import { FaSpotify, FaApple, FaPlay, FaPause, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
    import { SiApplemusic } from 'react-icons/si'
    import GradualSpacing from '@/components/magicui/gradual-spacing'
    import WordFadeIn from '@/components/magicui/word-fade-in'
    
    // Mock data for tracks
    const tracks = [
      {
        id: 1,
        title: 'Flip the Script',
        artist: 'Chloe Hansen', 
        coverArt: '/songs/flipthescript/flipthescript.png',
        credits: 'Produced and played all instruments, Co-Wrote, Mixed, Cover Art',
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
        credits: 'Fully Wrote, Produced, Mixed, Mastered',
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
        credits: 'Co-Wrote, Mixed, Mastered',
        releaseDate: '2021-01-15',
        spotifyLink: 'https://open.spotify.com/track/1BTPGWRnRvyNWvfjSVIkGK?si=5d0ac9009dfd4623',
        appleMusicLink: 'https://music.apple.com/us/album/green-chalk/1548225140?i=1548225142',
        audioPreview: '/songs/greenchalk/greenchalk.wav',
        startTime: 15,
        endTime: 45,
      },
      {
        id: 4,
        title: 'Beautiful Girls',
        artist: 'okjai',
        coverArt: '/songs/beautifulgirls/okjaibeautiful.jpg',
        credits: 'Produced, Recorded',
        releaseDate: '2021-12-24',
        spotifyLink: 'https://open.spotify.com/track/6YcPu714KmFSk0lqY9e0qw?si=332e8b98d1174719',
        appleMusicLink: 'https://music.apple.com/us/album/green-chalk/1548225140?i=1548225142',
        audioPreview: '/songs/beautifulgirls/beautifulgirls.mp3',
        startTime: 47,
        endTime: 80,
      },
      {
        id: 5,
        title: 'For the Feels',
        artist: 'YngGarnish',
        coverArt: '/songs/forthefeels/forthefeels.jpg',
        credits: 'Produced, Recorded',
        releaseDate: '2021-02-01',
        spotifyLink: 'https://open.spotify.com/track/3DMpS3iIGIZ7aduUTmotdq?si=b7bdf0374a5d4a6e',
        appleMusicLink: 'https://music.apple.com/us/album/for-the-feels/1551866106?i=1551866108',
        audioPreview: '/songs/forthefeels/forthefeels.mp3',
        startTime: 54,
        endTime: 75,
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
              {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
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
          <div className="relative aspect-w-1 aspect-h-1">
            <img src={track.coverArt} alt={`${track.title} cover art`} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-2">
              <p className="text-white text-sm text-center">{track.credits}</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{track.title}</h3>
            <p className="text-sm sm:text-gray-600 mb-2">{track.artist}</p>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">{new Date(track.releaseDate).toLocaleDateString()}</p>
            <AudioPlayer src={track.audioPreview} startTime={track.startTime} endTime={track.endTime} />
                <div className="flex justify-between mt-4">
                  <a href={track.spotifyLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
                    <FaSpotify className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a href={track.appleMusicLink} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                    <SiApplemusic className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
          </div>
        </motion.div>
      )
    }
    
    export default function MusicPortfolio() {
      const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
      const [filteredTracks, setFilteredTracks] = useState(tracks)
      const [isClient, setIsClient] = useState(false)
      const [isAnimationComplete, setIsAnimationComplete] = useState(false)
    
      useEffect(() => {
        setIsClient(true)
        const timer = setTimeout(() => {
          setIsAnimationComplete(true)
        }, 2000) // Adjust this timing as needed
        return () => clearTimeout(timer)
      }, [])
    
      useEffect(() => {
        const sorted = [...tracks].sort((a, b) => {
          const dateA = new Date(a.releaseDate).getTime()
          const dateB = new Date(b.releaseDate).getTime()
          return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
        })
        setFilteredTracks(sorted)
      }, [sortOrder])
    
      if (!isClient) {
        return null
      }
    
      return (
        <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
          <motion.div
            initial={{ height: "100vh", width: "100vw" }}
            animate={{ 
              height: isAnimationComplete ? "16rem" : "100vh",
              width: "100%",
              transition: { duration: 1, ease: "easeInOut" }
            }}
            className="relative mb-12 sm:mb-14"
          >
            <img src="/banner.jpg" alt="Banner" className="w-full h-full object-cover" />
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4"
              initial={{ opacity: 1 }}
              animate={{ opacity: isAnimationComplete ? 0.5 : 1 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                className="text-2xl sm:text-4xl font-bold mb-3 text-center"
                initial={{ scale: 1.5 }}
                animate={{ scale: isAnimationComplete ? 1 : 1.5 }}
                transition={{ duration: 1 }}
              >
                <WordFadeIn words="Garrett Meyer" delay={0.1} className="text-white" />
              </motion.h1>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
              >
                <GradualSpacing
                  text="Producer, Engineer, Songwriter"
                  className="text-base sm:text-xl font-bold"
                />
              </motion.div>
            </motion.div>
          </motion.div>
    
          <AnimatePresence>
            {isAnimationComplete && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 sm:px-6 lg:px-8"
              >
                {/* Portfolio Section */}
                <section>
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
    
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {filteredTracks.map((track) => (
                      <div key={track.id}>
                        <TrackCard track={track} />
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    }