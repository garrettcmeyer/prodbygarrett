export type ProjectCategory = 'freelance' | 'liatrio' | 'campus';
export type MediaType = 'photos' | 'videos';

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface VideoBlock {
  type: 'video';
  src: string;
  poster?: string;
  caption?: string;
}

export interface CarouselSlide {
  src: string;
  alt: string;
}

export interface CarouselBlock {
  type: 'carousel';
  slides: CarouselSlide[];
  caption?: string;
}

export type MediaBlock = ImageBlock | VideoBlock | CarouselBlock;

export interface Cover {
  type: 'image' | 'video';
  src: string;
  poster?: string;
}

export interface DesignProject {
  id: string;
  slug: string;
  order?: number; 
  title: string;
  category: ProjectCategory;
  mediaType: MediaType;
  year?: number;
  cover: Cover;
  description: string;
  media: MediaBlock[];
  role?: string;
  tools?: string[];
}

export const designProjects: DesignProject[] = [
  {
    id: 'santacruz-christmas',
    slug: 'santacruz-christmas',
    order: 1,
    title: 'Santa Cruz Christmas Campaign',
    category: 'freelance',
    mediaType: 'photos',
    year: 2025,
    cover: {
      type: 'image',
      src: '/designs/santacruz/SCPChristmas-Draft-3_01.jpg'
    },
    description: 'Holiday marketing campaign for Santa Cruz Medicinals featuring a multi-image Instagram carousel. Designed to capture the festive spirit with clean, modern aesthetics.',
    media: [
      {
        type: 'carousel',
        slides: [
          { src: '/designs/santacruz/SCPChristmas-Draft-3_01.jpg', alt: 'Santa Cruz Christmas - Slide 1' },
          { src: '/designs/santacruz/SCPChristmas-Draft-3_02.jpg', alt: 'Santa Cruz Christmas - Slide 2' },
          { src: '/designs/santacruz/SCPChristmas-Draft-3_03.jpg', alt: 'Santa Cruz Christmas - Slide 3' },
          { src: '/designs/santacruz/SCPChristmas-Draft-3_04.jpg', alt: 'Santa Cruz Christmas - Slide 4' },
          { src: '/designs/santacruz/SCPChristmas-Draft-3_05.jpg', alt: 'Santa Cruz Christmas - Slide 5' },
          { src: '/designs/santacruz/SCPChristmas-Draft-3_06.jpg', alt: 'Santa Cruz Christmas - Slide 6' },
          { src: '/designs/santacruz/SCPChristmas-Draft-3_07.jpg', alt: 'Santa Cruz Christmas - Slide 7' },
        ],
        caption: 'Instagram carousel campaign for holiday marketing'
      }
    ],
    role: 'Designer, Creative Director',
    tools: ['Adobe Photoshop', 'Adobe Illustrator']
  },
  {
    id: 'slot-machine-animation',
    slug: 'slot-machine-animation',
    order: 3,
    title: 'LinkedIn Slot Machine',
    category: 'liatrio',
    mediaType: 'videos',
    year: 2025,
    cover: {
      type: 'video',
      src: '/designs/liatrio/LinkedIn Gif.mp4',
      poster: '/designs/liatrio/Slot Machine Cover.png'
    },
    description: 'Slot machine animation designed for Liatrio\'s LinkedIn platform. Engaging animation to represent a trip to a conference in Vegas.',
    media: [
      {
        type: 'video',
        src: '/designs/liatrio/LinkedIn Gif.mp4',
        caption: 'Social media animation optimized for LinkedIn'
      }
    ],
    role: 'Video Designer',
    tools: ['After Effects']
  },
  {
    id: 'claw-square',
    slug: 'claw-square',  
    order: 5,
    title: 'Claw Machine Animation',
    category: 'liatrio',
    mediaType: 'videos',
    year: 2025,
    cover: {
      type: 'video',
      src: '/designs/liatrio/Claw square.mp4',
      poster: '/designs/liatrio/Claw Machine Cover.png'
    },
    description: 'Claw machine animation designed for Liatrio\'s LinkedIn platform. Animation designed to represent company culture.',
    media: [
      {
        type: 'video',
        src: '/designs/liatrio/Claw square.mp4',
        caption: 'Claw Machine Animation - Company Culture'
      }
    ],
    role: 'Motion Designer',
    tools: ['After Effects']
  },
  {
    id: 'rush-videos',
    slug: 'rush-videos',
    order: 6,
    title: 'Fraternity Rush Videos',
    category: 'campus',
    mediaType: 'videos',
    year: 2025,
    cover: {
      type: 'video',
      src: '/designs/fraternity/Rush Video Fall 2024.mp4',
      poster: '/designs/fraternity/alphacrest.png'
    },
    description: 'Two rush videos designed for fraternity rush events. Engaging video to attract and inform potential members.',
    media: [
      {
        type: 'video',
        src: '/designs/fraternity/Rush Video Fall 2024.mp4',
        caption: 'Fall 2024 Rush Video'
      },
      {
        type: 'video',
        src: '/designs/fraternity/RushVid 11.mp4',
        caption: 'Fall 2025 Rush Video'
      }
    ],
    role: 'Video Editor',
    tools: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'rush-graphics',
    order: 7,
    slug: 'rush-graphics',
    title: 'Fraternity Graphics',
    category: 'campus',
    mediaType: 'photos',
    year: 2024,
    cover: {
      type: 'image',
      src: '/designs/fraternity/Rush Card Cover.png'
    },
    description: 'Recruitment graphics and promotional materials for fraternity events. Includes recruitment cards and event graphics.',
    media: [
      {
        type: 'image',
        src: '/designs/fraternity/Rush Card 2x3.5.png',
        alt: 'Fraternity Rush Card',
        caption: 'Recruitment card design - 2x3.5 inch format'
      },
      {
        type: 'image',
        src: '/designs/fraternity/Spring Rush.png',
        alt: 'Spring Rush Graphic',
        caption: 'Spring Rush promotional graphic'
      },
      {
      type: 'carousel',
        slides: [
          { src: '/designs/fraternity/BingoboardFront.png', alt: 'Bingo Board Front' },
          { src: '/designs/fraternity/BingoBoardBack.png', alt: 'Bingo Board Back' }
        ],
        caption: 'Event materials - Bingo board design'
      }
    ],
    role: 'Graphic Designer',
    tools: ['Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    id: 'linkedin-graphics',
    order: 4,
    slug: 'linkedin-graphics',
    title: 'LinkedIn Graphics',
    category: 'liatrio',
    mediaType: 'photos',
    year: 2024,
    cover: {
      type: 'image',
      src: '/designs/liatrio/AI blooms.png'
    },
    description: 'A collection of graphic design concepts for Liatrio\'s LinkedIn platform. Includes AI-themed graphics, batch designs, and culture-focused visuals.',
    media: [
      {
        type: 'carousel',
        slides: [
          { src: '/designs/liatrio/AI blooms.png', alt: 'AI Blooms' },
          { src: '/designs/liatrio/Batches.png', alt: 'Batches' },
          { src: '/designs/liatrio/CultureDesign.png', alt: 'Culture Design' }
        ],
        caption: 'LinkedIn graphics - AI blooms, Batches, and Culture Design'
      }
    ],
    role: 'Graphic Designer',
    tools: ['Canva']
  },
  {
    id: 'music-covers',
    order: 2,
    slug: 'music-covers',
    title: 'Music Covers',
    category: 'freelance',
    mediaType: 'photos',
    year: 2025,
    cover: {
      type: 'image',
      src: '/designs/covers/cover 1.png'
    },
    description: 'A collection of music artwork I have fully designed. Includes single covers for artists I have produced.',
    media: [
      {
        type: 'carousel',
        slides: [
          { src: '/designs/covers/cover 1.png', alt: 'Cover 1' },
          { src: '/designs/covers/cover 3.png', alt: 'Cover 3' },
          { src: '/designs/covers/cover 2.png', alt: 'Cover 2' },
          { src: '/designs/covers/cover 4.png', alt: 'Cover 4' },
          { src: '/designs/covers/cover 5.png', alt: 'Cover 5' },
          { src: '/designs/covers/cover 6.png', alt: 'Cover 6' },
        ],
        caption: 'Single covers for artists'
      }
    ],
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'Adobe Illustrator']
  }
];
