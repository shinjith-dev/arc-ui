import { TProduct } from "@/lib/types";
import Image from "next/image";

type Props = {
  product: TProduct;
};

export default function Product({ product }: Props) {
  return (
    <div className="product-shadow w-[170px] rounded-[10px] bg-background p-3 sm:w-[300px] sm:px-4 sm:py-2 md:w-[330px] md:px-5 md:py-3 lg:w-[370px]">
      <div className="relative h-28 w-full sm:h-36 md:h-44 lg:h-60">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="pt-3 text-subtle">
        <div className="mb-4 flex flex-col items-start justify-between lg:mb-6 lg:flex-row lg:gap-6">
          <h4 className="max-w-40 shrink text-xs font-medium sm:text-xl">
            {product.name}
          </h4>

          <div className="flex gap-1 py-1 md:hidden">
            {[...new Array(product.rating)].map((_, index) => (
              <Image
                key={`star-${index}`}
                height={9}
                width={9}
                src="/icons/star.png"
                alt="star"
              />
            ))}
          </div>

          <div className="hidden gap-1 py-1 md:flex">
            {[...new Array(product.rating)].map((_, index) => (
              <Image
                key={`star-${index}`}
                height={18}
                width={18}
                src="/icons/star.png"
                alt="star"
              />
            ))}
          </div>
        </div>
        {product?.provider && (
          <p className="-mt-4 mb-4 text-[10px] text-xs sm:text-[12px]">
            {product.provider}
          </p>
        )}

        <p className="mb-2 text-[10px] text-xs font-medium sm:mb-4 sm:text-[12px] md:mb-6">
          ({product.customerReviews}) Customer Reviewsa
        </p>

        <div className="flex flex-col justify-between lg:flex-row">
          <h6 className="text-lg font-medium sm:text-xl md:text-2xl">
            {product.price}
          </h6>

          {product?.almostSoldOut && (
            <p className="text-[10px] text-xs text-[#FF4646] sm:text-[12px]">
              Almost Sold Out
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
