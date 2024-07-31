import { jost } from "@/lib/fonts";
import { TArrival } from "@/lib/types";
import React from "react";
import Image from "next/image";

type Props = {
  arrival: TArrival;
  order: number;
  active?: boolean;
};

const Arrival = ({ arrival, order, active }: Props) => {
  return (
    <div
      className={`${jost.className} absolute left-10 right-10 top-0 flex h-[380px] items-stretch justify-between transition-all duration-300`}
      style={{
        backgroundColor: arrival.bg,
        transform: `translateX(${order * 93}%) scale(${active ? 1 : 0.8})`,
        zIndex: active ? 10 : 0,
      }}
    >
      <div className="pb-3 pl-16 pr-10 pt-16">
        <h4 className={`text-6xl font-bold`}>Introducing New</h4>
        <h2 className={`${jost.className} text-8xl font-bold`}>
          {arrival.title}
        </h2>
        <div className="my-5 ml-40 w-fit space-y-1 text-center text-3xl">
          <p className="rounded-full bg-[#656565] px-7 py-1 font-normal text-background">
            From ${arrival.price}
          </p>
          <p className="font-medium">Just Launched</p>
        </div>
      </div>

      <div className="relative h-full w-1/5">
        <Image
          fill
          src={arrival.image}
          alt="arrival thumbnail"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Arrival;
