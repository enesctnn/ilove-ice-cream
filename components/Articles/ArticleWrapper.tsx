import { cn } from '@/lib/utils';
import { Dosis } from 'next/font/google';
import Image from 'next/image';
import { BackgroundBeams } from '../ui/background-beams';

type ArticleWrapperProps = {
  image: string;
  header: string;
  description: string;
  alt: string;
};
const font = Dosis({
  subsets: ['latin'],
  weight: ['500'],
});

function ArticleWrapper({
  description,
  header,
  image,
  alt,
}: ArticleWrapperProps) {
  return (
    <article className="flex aspect-auto flex-col gap-5 lg:flex-row my-5 items-start mx-auto relative p-10">
      <BackgroundBeams className="bg-slate-300/10 rounded-md shadow-md" />
      <div className="flex-[2] bg-ellipse from-custom-red-100 to-custom-red-400 p-2 w-max h-max rounded-sm z-10">
        <div className="relative w-72 sm:w-96 lg:w-[450px] aspect-square overflow-hidden cursor-pointer">
          <Image
            className="absolute object-cover hover:scale-110 transition-all duration-300 user-drag-none"
            src={image}
            alt={alt}
            fill
            priority
          />
        </div>
      </div>
      <section className={cn('flex-[3] flex flex-col gap-y-5', font.className)}>
        <h1 className="text-5xl font-medium drop-shadow-border text-white xl:text-6xl">
          {header}
        </h1>
        <p className="text-lg leading-tight lg:leading-relaxed lg:text-2xl drop-shadow-black-md text-white w-72 sm:w-96 xl:w-[600px] ">
          {description}
        </p>
      </section>
    </article>
  );
}

export default ArticleWrapper;
