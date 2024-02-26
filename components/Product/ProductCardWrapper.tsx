import ProductCard from '@/components/Product/ProductCard';
import { SHAKES } from '@/lib/products';
import { cn } from '@/lib/utils';
import { Karla } from 'next/font/google';

const font = Karla({
  subsets: ['latin'],
  weight: ['400'],
});

type ProductCardWrapperProps = {
  products: typeof SHAKES;
  header: string;
};

function ProductCardWrapper({ products, header }: ProductCardWrapperProps) {
  return (
    <section className={cn(font.className)}>
      <div className="w-full flex flex-col overflow-hidden justify-center items-center">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-white relative z-20">
          {header}
        </h1>
        <div className="w-full h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-1/4" />
        </div>
      </div>

      <div className={cn('flex flex-wrap justify-center h-full gap-x-5')}>
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductCardWrapper;
