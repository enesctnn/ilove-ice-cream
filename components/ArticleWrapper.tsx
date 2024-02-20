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
    <article className="flex aspect-auto flex-col gap-5 md:flex-row my-5 items-top">
      <div className="flex-[2] border-4 border-black relative min-w-[450px] min-h-[300px] overflow-hidden">
        <Image
          className="object-cover object-center hover:scale-110 transition-all duration-300 drag-none"
          src={image}
          alt={alt}
          fill
        />
      </div>
      <section
        className={cn('flex-[3] flex flex-col gap-y-5 mt-2', font.className)}
      >
        <h1 className="text-5xl font-medium">{header}</h1>
        <p className="text-lg leading-tight lg:leading-relaxed lg:text-xl">
          {description}
        </p>
      </section>
    </article>
  );
}

export default ArticleWrapper;
