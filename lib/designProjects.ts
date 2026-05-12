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
    order: 3,
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
    id: 'linkedin-rebrand-ad',
    slug: 'linkedin-rebrand-ad',
    order: 1,
    title: 'LinkedIn Rebrand Ad Campaign',
    category: 'liatrio',
    mediaType: 'videos',
    year: 2026,
    cover: {
      type: 'video',
      src: '/designs/liatrio/Flower Tag Line Final.mp4',
      poster: '/designs/liatrio/Flower Tag Line Cover.png'
    },
    description: 'Video ad creative for Liatrio\'s LinkedIn rebrand campaign, positioning the company as an AI-first enablement consultancy. Fully conceptualized and edited the video from scratch. The campaign achieved a CTR above B2B benchmarks at roughly half the typical LinkedIn CPC.',
    media: [
      {
        type: 'video',
        src: '/designs/liatrio/Flower Tag Line Final.mp4',
        caption: 'LinkedIn ad creative — Liatrio AI-first rebrand'
      }
    ],
    role: 'Video Editor, Creative Director',
    tools: ['After Effects']
  },
  {
    id: 'slot-machine-animation',
    slug: 'slot-machine-animation',
    order: 4,
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
    id: 'linkedin-graphics',
    order: 2,
    slug: 'linkedin-graphics',
    title: 'LinkedIn Graphics',
    category: 'liatrio',
    mediaType: 'photos',
    year: 2026,
    cover: {
      type: 'image',
      src: '/designs/liatrio/Temporal Replay.png'
    },
    description: 'A collection of graphic design concepts for Liatrio\'s LinkedIn platform. Includes AI-themed graphics, batch designs, culture-focused visuals, and event promotional materials.',
    media: [
      {
        type: 'carousel',
        slides: [
          { src: '/designs/liatrio/Temporal Replay.png', alt: 'Temporal Replay Conference - San Francisco' },
          { src: '/designs/liatrio/AI blooms.png', alt: 'AI Blooms' },
          { src: '/designs/liatrio/Batches.png', alt: 'Batches' },
          { src: '/designs/liatrio/CultureDesign.png', alt: 'Culture Design' },
          { src: '/designs/liatrio/Valentines.png', alt: 'Valentines Day - Not Afraid to Commit' },
          { src: '/designs/liatrio/Womens Day.png', alt: 'International Womens Day 2026' }
        ],
        caption: 'LinkedIn graphics for Liatrio'
      }
    ],
    role: 'Graphic Designer',
    tools: ['Canva']
  },
  {
    id: 'music-covers',
    order: 5,
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
