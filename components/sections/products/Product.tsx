import { TProduct } from "@/lib/types"
import Image from 'next/image'

type Props = {
  product: TProduct
}

export default function Product({ product }: Props) {
  return (
    <div className="bg-background px-5 py-3 product-shadow w-[370px] rounded-[10px]">
      <div className="relative h-60 w-full">
        <Image src={product.image} alt={product.name} fill className="object-contain object-center" />
      </div>

      <div className="pt-3 text-subtle">
        <div className="flex justify-between items-start gap-6 mb-6">
          <h4 className="text-xl font-medium shrink max-w-40">
            {product.name}
          </h4>

          <div className="flex gap-1 py-1">
            {[...new Array(product.rating)].map((_, index) => <Image key={`star-${index}`} height={18} width={18} src="/icons/star.png" alt="star" />)}
          </div>
        </div>

        <p className="font-medium text-xs mb-6">
          ({product.customerReviews}) Customer Reviews
        </p>


        <div className="flex justify-between">
          <h6 className="text-2xl font-medium">{product.price}</h6>

          {product?.almostSoldOut && <p className="text-xs text-[#FF4646]">Almost Sold Out</p>}
        </div>

      </div>
    </div>
  )
}
