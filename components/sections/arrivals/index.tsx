"use client";
import { TArrival } from "@/lib/types";
import Arrival from "./Arrival";
import { useEffect, useRef, useState } from "react";

const arrivals: TArrival[] = [
  {
    id: "a001",
    title: "Aryan Sculptures",
    price: 999,
    image: "/images/arrivals/1.jpg",
    bg: "#F7F7F7",
  },
  {
    id: "a002",
    title: "Aryan Sculptures",
    price: 999,
    image: "/images/arrivals/2.png",
    bg: "#F9FFD3",
  },
  {
    id: "a003",
    title: "Aryan Sculptures",
    price: 999,
    image: "/images/arrivals/1.jpg",
    bg: "#F7F7F7",
  },
  {
    id: "a004",
    title: "Aryan Sculptures",
    price: 999,
    image: "/images/arrivals/2.png",
    bg: "#F9FFD3",
  },
];

export default function Arrivals() {
  const [active, setActive] = useState<number>(0);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev === arrivals.length - 1 ? 0 : prev + 1));
      }, 3000);
    }

    () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="max-w-screen h-max overflow-x-hidden py-20">
      <div className="container relative h-[440px]">
        <Arrival arrival={arrivals[arrivals.length - 1]} order={-1 - active} />
        <div>
          {arrivals.map((a, index) => (
            <Arrival
              arrival={a}
              key={a.id}
              order={Math.abs(active - index) * (active < index ? 1 : -1)}
              active={active === index}
            />
          ))}
        </div>
        <Arrival
          arrival={arrivals[arrivals.length - 1]}
          order={active === arrivals.length - 1 ? 1 : arrivals.length}
        />

        <ul className="absolute bottom-0 left-1/2 mx-auto flex -translate-x-1/2 items-center gap-4 transition-all">
          {[...new Array(arrivals.length)].map((_, index) =>
            index === active ? (
              <li
                key={`indicator-${index}`}
                className="rounded-full bg-fg p-[1px]"
              >
                <div className="h-3.5 w-3.5 rounded-full border-4 border-background bg-fg" />
              </li>
            ) : (
              <li
                key={`indicator-${index}`}
                className="h-2 w-2 rounded bg-[#B6B6B6]"
              />
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
