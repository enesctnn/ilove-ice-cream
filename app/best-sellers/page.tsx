'use client';

import ProductCardWrapper from '@/components/Product/ProductCardWrapper';
import { SparklesCore } from '@/components/ui/sparkles';
import { ICE_CREAMS, SHAKES } from '@/lib/products';

function BestSellersPage() {
  return (
    <div className="relative pt-64">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={50}
        className="absolute inset-0"
        particleColor="#FFFFFF"
      />
      <ProductCardWrapper products={SHAKES} header="Milk Tea" />
      <ProductCardWrapper products={ICE_CREAMS} header="Ice-Cream" />
    </div>
  );
}

export default BestSellersPage;
