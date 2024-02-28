import ProductCardWrapper from '@/components/Product/ProductCardWrapper';
import { SparklesCore } from '@/components/ui/sparkles';
import { ALLPRODUCTS } from '@/lib/products';

function BestSellers() {
  return (
    <div className="relative pt-64">
      <SparklesCore
        background="#000000"
        minSize={0.4}
        maxSize={1.2}
        particleDensity={15}
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
