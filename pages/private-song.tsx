import { GetServerSideProps } from 'next';
import PrivateSong from '@/components/PrivateSong';

export interface Song {
  id: string;
  title: string;
  src: string;
  maxPlays: number;
}

const songs: Song[] = [
  {
    id: 'banky',
    title: 'Banky',
    src: '/songs/unreleased/banky.wav',
    maxPlays: 5,
  },
  {
    id: 'exclusive-2',
    title: 'Exclusive Song 2',
    src: '/songs/unreleased/exclusive2.mp3',
    maxPlays: 5,
  },
  {
    id: 'demo-track',
    title: 'Demo Track',
    src: '/songs/unreleased/demo-track.wav',
    maxPlays: 2,
  },
];

interface Props {
  song: Song | null;
}

export default function PrivateSongPage({ song }: Props) {
  if (!song) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950">
        <p className="text-white">Invalid song or access key.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="w-[340px] flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-6 text-white">{song.title}</h2>
        <PrivateSong song={song} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const { songId } = query;
  const id = Array.isArray(songId) ? (songId[0] as string) : (songId as string | undefined);

  const song = songs.find((s) => s.id === id) || null;

  return {
    props: {
      song,
    },
  };
};