'use client';

import Image from 'next/image';

export type InstagramGridProps = {
  id: string;
  media_url: string;
  timestamp: Date;
  media_type: string;
  permalink: string;
  caption?: string | undefined;
};

function InstagramGrid({ posts }: { posts: InstagramGridProps[] }) {
  return (
    <div className="grid grid-cols-3 gap-5 py-10">
      {posts.map((post) => (
        <div key={post.id} className="w-full h-full">
          <a
            href={post.permalink}
            target="_blank"
            className="relative w-full h-[350px] bg-white/5  flex rounded-md shadow-md"
          >
            <Image
              className="object-contain object-center"
              src={post.media_url}
              alt={post.caption || 'undefined post caption'}
              fill
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default InstagramGrid;
