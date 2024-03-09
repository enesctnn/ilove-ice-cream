import { cn } from '@/lib/utils';
import { Dosis } from 'next/font/google';
import Image from 'next/image';

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
    <article className="flex aspect-auto flex-col gap-5 lg:flex-row my-5 items-start mx-auto">
      <div className="flex-[2] bg-ellipse from-custom-red-100 to-custom-red-400 p-2 w-max h-max rounded-sm z-10">
        <div className="relative w-72 sm:min-w-96 min-h-80 lg:min-w-[450px] lg:min-h-[300px] overflow-hidden cursor-pointer">
          <Image
            className="object-cover hover:scale-110 transition-all duration-300 user-drag-none"
            src={image}
            alt={alt}
            fill
            priority
          />
        </div>
      </div>
      <section className={cn('flex-[3] flex flex-col gap-y-5', font.className)}>
        <h1 className="text-5xl font-medium drop-shadow-border text-white">
          {header}
        </h1>
        <p className="text-lg leading-tight lg:leading-relaxed lg:text-xl drop-shadow-black-md text-white w-72 sm:w-96 xl:w-[600px] ">
          {description}
        </p>
      </section>
    </article>
  );
}

export default ArticleWrapper;
