"use client";

import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

export default function Slider() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-48 -translate-y-1/2 items-center gap-6">
      <div className="-mb-8 flex gap-4 self-end">
        <button
          onClick={() => setActive((prev) => prev - 1)}
          disabled={active === 0}
          className="deals-btn-shadow flex h-12 w-12 items-center justify-center rounded-full text-fg disabled:text-subtle"
        >
          <IconChevronLeft size={20} className="-translate-x-0.5" />
        </button>

        <button
          onClick={() => setActive((prev) => prev + 1)}
          disabled={active === 3}
          className="deals-btn-shadow flex h-12 w-12 items-center justify-center rounded-full text-fg disabled:text-subtle"
        >
          <IconChevronRight size={20} className="translate-x-0.5" />
        </button>
      </div>

      {[...new Array(4)].map((_, index) => (
        <div
          key={`slider-prod-${index}`}
          className={`relative border border-fg ${index === 0 ? "h-[624px] w-[448px]" : "h-[490px] w-[370px]"}`}
        >
          <Image
            src={`/images/deals/product-${index + 1}.png`}
            alt="product"
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
