export interface DesignProject {
  id: number;
  title: string;
  category: 'album art' | 'brand' | 'event';
  year: number;
  thumbnail: string;
  images: string[];
  description: string;
  role?: string;
  tools?: string[];
}

export const designProjects: DesignProject[] = [
  {
    id: 1,
    title: 'Flip the Script - Album Art',
    category: 'album art',
    year: 2024,
    thumbnail: '/songs/flipthescript/flipthescript.png',
    images: [
      '/songs/flipthescript/flipthescript.png',
      '/songs/flipthescript/flipthescript.png', // Add more images as needed
    ],
    description: 'Album artwork for Chloe Hansen\'s single "Flip the Script". Designed to capture the energetic and bold spirit of the track with vibrant colors and dynamic composition.',
    role: 'Designer, Art Director',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    id: 2,
    title: 'Again - Cover Art',
    category: 'album art',
    year: 2024,
    thumbnail: '/songs/again/againcoverart.jpg',
    images: [
      '/songs/again/againcoverart.jpg',
      '/songs/again/againcoverart.png',
    ],
    description: 'Cover art for collaborative single featuring multiple artists. Created a cohesive visual identity that represents the collaboration while maintaining individual artistic expression.',
    role: 'Designer',
    tools: ['Adobe Photoshop', 'Figma'],
  },
  {
    id: 3,
    title: 'Summer Fling - Single Art',
    category: 'album art',
    year: 2025,
    thumbnail: '/songs/summerfling/SummerFlingCover.png',
    images: [
      '/songs/summerfling/SummerFlingCover.png',
    ],
    description: 'Single artwork for Keegan Boustead\'s "Summer Fling". Evokes warm summer vibes with a nostalgic aesthetic that complements the track\'s theme.',
    role: 'Designer, Creative Director',
    tools: ['Adobe Photoshop', 'Procreate'],
  },
  {
    id: 4,
    title: 'Least of Your Worries - Artwork',
    category: 'album art',
    year: 2024,
    thumbnail: '/songs/leastofyourworries/least_art.jpg',
    images: [
      '/songs/leastofyourworries/least_art.jpg',
      '/songs/leastofyourworries/least_art.png',
    ],
    description: 'Cover art design for Chloe Hansen\'s emotional single. Minimalist approach with subtle details that reflect the introspective nature of the song.',
    role: 'Designer',
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
  },
  {
    id: 5,
    title: 'Banky - Album Art',
    category: 'album art',
    year: 2025,
    thumbnail: '/songs/banky/banky.png',
    images: [
      '/songs/banky/banky.png',
    ],
    description: 'Album artwork for nollie\'s single "Banky". Bold typography and striking visuals that stand out in streaming platforms.',
    role: 'Designer, Art Director',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
  },
  {
    id: 6,
    title: 'Tomorrow\'s Today - Cover Design',
    category: 'album art',
    year: 2025,
    thumbnail: '/songs/tmrwtoday/TmrwToday.png',
    images: [
      '/songs/tmrwtoday/TmrwToday.png',
    ],
    description: 'Single artwork for Keegan Boustead\'s "Tomorrow\'s Today". Modern design with futuristic elements that match the forward-thinking theme of the track.',
    role: 'Designer',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
  },
];

