import Image from "next/image";
import c1 from "@/assets/images/cover-1.jpg";
import c2 from "@/assets/images/cover-2.jpg";
import c3 from "@/assets/images/cover-3.jpg";
import c4 from "@/assets/images/cover-4.jpg";

export default function Cover() {
  return (
    <section className="container grid h-full max-h-[calc(100vh-180px)] grid-cols-3 grid-rows-11 gap-6">
      <div className="relative col-span-2 row-span-4 overflow-hidden rounded-lg bg-muted">
        <Image
          fill
          src={c1}
          alt="cover background 1"
          className="object-cover"
        />
      </div>
      <div className="relative row-span-7 overflow-hidden rounded-lg bg-muted">
        <Image
          fill
          src={c2}
          alt="cover background 2"
          className="object-cover"
        />
      </div>
      <div className="relative row-span-7 overflow-hidden rounded-lg bg-muted">
        <Image
          fill
          src={c4}
          alt="cover background 3"
          className="object-cover"
        />
      </div>
      <div className="row-span-3 space-y-3 text-center font-medium uppercase">
        <h2 className="text-subtle">
          <span className="text-5xl text-[56px]">Ultimate</span>
          <br />
          <span className="cover-text-border text-8xl text-[118px] text-transparent">
            sale
          </span>
        </h2>

        <button className="cover-btn-shadow mx-auto block rounded-lg bg-fg px-6 py-2 text-[13px] text-xs text-background transition-all hover:bg-fg/90 hover:shadow-sm">
          Shop now
        </button>
      </div>
      <div className="relative col-span-2 row-span-4 overflow-hidden rounded-lg bg-muted">
        <Image
          fill
          src={c3}
          alt="cover background 4"
          className="object-cover"
        />
      </div>{" "}
    </section>
  );
}
