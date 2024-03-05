import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { ALLPRODUCTS } from '@/lib/products';
import Image from 'next/image';

type ProductCardProps = {
  product: (typeof ALLPRODUCTS)[number]['products'][number];
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <CardContainer>
      <CardBody className="bg-white relative w-64 md:w-80 2xl:w-96 rounded-xl p-6 border lg:h-[26rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 lg:text-2xl xl:text-3xl select-none"
        >
          {product.title}
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
          <Image
            src={product.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl user-drag-none"
            alt={product.alt}
          />
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 py-2 rounded-xl text-xs font-normal lg:text-sm xl:text-lg"
        >
          Try now →
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default ProductCard;
