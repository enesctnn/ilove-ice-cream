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
      <div className="bg-ellipse from-custom-red-400 to-black p-2 w-max h-max rounded-sm">
        <div className="flex-[2] relative min-w-[450px] min-h-[300px] overflow-hidden ">
          <Image
            className="object-cover object-center hover:scale-110 transition-all duration-300 user-drag-none"
            src={image}
            alt={alt}
            fill
          />
        </div>
      </div>
      <section
        className={cn('flex-[3] flex flex-col gap-y-5 mt-2', font.className)}
      >
        <h1 className="text-5xl font-medium drop-shadow-white-border">
          {header}
        </h1>
        <p className="text-lg leading-tight lg:leading-relaxed lg:text-xl drop-shadow-white-border">
          {description}
        </p>
      </section>
    </article>
  );
}

export default ArticleWrapper;
