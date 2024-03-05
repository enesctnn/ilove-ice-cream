import ProductCardWrapper from '@/components/Product/ProductCardWrapper';
import { SparklesCore } from '@/components/ui/sparkles';
import { ALLPRODUCTS } from '@/lib/products';

function BestSellers() {
  return (
    <div className="relative pt-64">
      <SparklesCore
        background="#000000"
        minSize={0.5}
        maxSize={1}
        particleDensity={5}
        className="absolute inset-0"
        particleColor="#FFFFFF"
      />
      {ALLPRODUCTS.map((section) => (
        <ProductCardWrapper
          key={section.header}
          header={section.header}
          products={section.products}
        />
      ))}
    </div>
  );
}

export default BestSellers;
