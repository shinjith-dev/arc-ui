import { volkhov } from "@/lib/fonts";
import { TCategory, TProduct } from "@/lib/types";
import Category from "./Category";
import Product from "./Product";

const categories: TCategory[] = [
  { name: "Plant decor", image: "/images/categories/plant-decor.png" },
  { name: "Hangings", image: "/images/categories/hangings.png" },
  { name: "Clocks", image: "/images/categories/clocks.png" },
  { name: "Miniature", image: "/images/categories/miniature.png" },
  { name: "Vases", image: "/images/categories/vases.png" },
  { name: "Paintings", image: "/images/categories/paintings.png" },
  { name: "Sculpture", image: "/images/categories/sculpture.png" },
  { name: "Box", image: "/images/categories/box.png" },
  { name: "Frames", image: "/images/categories/frames.png" },
];

const products: TProduct[] = [
  {
    name: "Hand Clock",
    provider: "Al Karam",
    image: "/images/products/hand-clock.png",
    rating: 5,
    price: "₹999.00",
    almostSoldOut: true,
    customerReviews: "4.1k",
  },
  {
    name: "Wall Mounted Wooden Clock",
    image: "/images/products/wooden-clock.png",
    rating: 5,
    price: "₹999.00",
    almostSoldOut: true,
    customerReviews: "4.1k",
  },
  {
    name: "Mini Model Clock",
    provider: "Al Karam",
    image: "/images/products/mini-clock.png",
    rating: 5,
    price: "₹999.00",
    almostSoldOut: true,
    customerReviews: "4.1k",
  },
  {
    name: "Wall Mounted Wooden Clock",
    image: "/images/products/wooden-clock-2.png",
    rating: 5,
    price: "₹999.00",
    almostSoldOut: true,
    customerReviews: "4.1k",
  },
  {
    name: "Table Top Clock",
    provider: "Al Karam",
    image: "/images/products/table-clock.png",
    rating: 5,
    price: "₹999.00",
    almostSoldOut: true,
    customerReviews: "4.1k",
  },
  {
    name: "Architectural Clock",
    provider: "Al Karam",
    image: "/images/products/arch-clock.png",
    rating: 5,
    price: "₹999.00",
    almostSoldOut: true,
    customerReviews: "4.1k",
  },
];

export default function Products() {
  return (
    <section className="container py-20">
      <h3
        className={`${volkhov.className} mb-10 hidden text-center text-5xl text-subtle lg:block`}
      >
        Product Category
      </h3>
      <h3
        className={`${volkhov.className} mb-4 text-center text-2xl text-subtle sm:mb-6 md:mb-8 lg:hidden`}
      >
        New Arrivals
      </h3>

      <div className="mb-8 flex flex-wrap items-start justify-center gap-4 sm:mb-10 sm:gap-5 md:mb-12 md:gap-6 lg:mb-16 lg:justify-between lg:gap-8">
        {categories.map((c) => (
          <Category key={c.name} category={c} />
        ))}
      </div>

      <div className="grid grid-cols-2 place-items-center gap-6 lg:grid-cols-3 lg:gap-12">
        {products.map((p) => (
          <Product key={p.name} product={p} />
        ))}
      </div>
    </section>
  );
}
