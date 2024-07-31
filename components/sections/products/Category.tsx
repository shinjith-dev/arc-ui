import { sarpanch } from "@/lib/fonts";
import { TCategory } from "@/lib/types";
import Image from "next/image";

type Props = {
  category: TCategory;
};

export default function Category({ category }: Props) {
  return (
    <div className="space-y-2 text-center">
      <div className="relative h-16 w-16 border-fg sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-28 lg:rounded-xl lg:border">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-contain lg:rounded-xl lg:object-cover"
        />
      </div>

      <p
        className={`${sarpanch.className} mx-auto hidden max-w-20 text-base uppercase leading-tight lg:block`}
      >
        {category.name}
      </p>
    </div>
  );
}
