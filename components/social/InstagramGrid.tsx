'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export type InstagramGridProps = {
  id: string;
  media_url: string;
  timestamp: Date;
  media_type: string;
  permalink: string;
  caption?: string | undefined;
};

/**
 * @param array
 * Shuffles an array depends on the index
 */
function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function InstagramGrid({ posts }: { posts: InstagramGridProps[] }) {
  const shuffeledPosts = shuffle(posts);
  const pickedPosts = shuffeledPosts.slice(0, 8) as InstagramGridProps[];

  return (
    <motion.div
      initial={{ rotateX: -90 }}
      animate={{ rotateX: 0 }}
      transition={{
        type: 'spring',
        damping: 6,
      }}
      className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-5"
    >
      {pickedPosts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          className="relative w-60 h-60 flex hover:opacity-90 bg-black"
        >
          <Image
            className="object-cover object-center"
            src={post.media_url}
            alt={post.caption || 'an instagram post with no caption'}
            fill
          />
        </a>
      ))}
    </motion.div>
  );
}

export default InstagramGrid;
