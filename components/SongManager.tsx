"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SongFormData {
  id: number;
  title: string;
  artist: string;
  folder: string;
  coverArt: string;
  credits: string;
  releaseDate: string;
  spotifyLink: string;
  appleMusicLink: string;
  audioFile: string;
  startTime: number;
  endTime: number;
}

export default function SongManager() {
  const [formData, setFormData] = useState<SongFormData>({
    id: 1,
    title: '',
    artist: '',
    folder: '',
    coverArt: '',
    credits: '',
    releaseDate: '',
    spotifyLink: '',
    appleMusicLink: '',
    audioFile: '',
    startTime: 0,
    endTime: 60,
  });

  const [generatedCode, setGeneratedCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'id' || name === 'startTime' || name === 'endTime' ? parseInt(value) || 0 : value
    }));
  };

  const generateCode = () => {
    const code = `{
  id: ${formData.id},
  title: '${formData.title}',
  artist: '${formData.artist}',
  coverArt: '/songs/${formData.folder}/${formData.coverArt}',
  credits: '${formData.credits}',
  releaseDate: '${formData.releaseDate}',
  spotifyLink: '${formData.spotifyLink}',
  appleMusicLink: '${formData.appleMusicLink}',
  audioPreview: '/songs/${formData.folder}/${formData.audioFile}',
  startTime: ${formData.startTime},
  endTime: ${formData.endTime},
},`;

    setGeneratedCode(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    alert('Code copied to clipboard!');
  };

  const resetForm = () => {
    setFormData({
      id: formData.id + 1,
      title: '',
      artist: '',
      folder: '',
      coverArt: '',
      credits: '',
      releaseDate: '',
      spotifyLink: '',
      appleMusicLink: '',
      audioFile: '',
      startTime: 0,
      endTime: 60,
    });
    setGeneratedCode('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Song Manager</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Song</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                  <input
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Release Date</label>
                  <input
                    type="date"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Artist</label>
                <input
                  type="text"
                  name="artist"
                  value={formData.artist}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Folder Name</label>
                <input
                  type="text"
                  name="folder"
                  value={formData.folder}
                  onChange={handleInputChange}
                  placeholder="e.g., flipthescript"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Art File</label>
                  <input
                    type="text"
                    name="coverArt"
                    value={formData.coverArt}
                    onChange={handleInputChange}
                    placeholder="e.g., flipthescript.png"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Audio File</label>
                  <input
                    type="text"
                    name="audioFile"
                    value={formData.audioFile}
                    onChange={handleInputChange}
                    placeholder="e.g., Flip_the_Script.Master.wav"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                <textarea
                  name="credits"
                  value={formData.credits}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Spotify Link</label>
                <input
                  type="url"
                  name="spotifyLink"
                  value={formData.spotifyLink}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Apple Music Link</label>
                <input
                  type="url"
                  name="appleMusicLink"
                  value={formData.appleMusicLink}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Time (seconds)</label>
                  <input
                    type="number"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Time (seconds)</label>
                  <input
                    type="number"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <motion.button
                  onClick={generateCode}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Generate Code
                </motion.button>
                <motion.button
                  onClick={resetForm}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reset Form
                </motion.button>
              </div>
            </div>
          </div>

          {/* Generated Code Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Generated Code</h2>
            
            {generatedCode ? (
              <div>
                <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto mb-4">
                  <code>{generatedCode}</code>
                </pre>
                <motion.button
                  onClick={copyToClipboard}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Copy to Clipboard
                </motion.button>
              </div>
            ) : (
              <div className="text-gray-500 text-center py-8">
                Fill out the form and click "Generate Code" to see the output
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 