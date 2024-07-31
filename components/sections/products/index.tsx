import { volkhov } from "@/lib/fonts";
import { TCategory, TProduct } from "@/lib/types";
import Category from "./Category";
import Product from "./Product";

const categories: TCategory[] = [
  { name: "Plant decor", image: '/images/categories/plant-decor.png' },
  { name: "Hangings", image: '/images/categories/hangings.png' },
  { name: "Clocks", image: '/images/categories/clocks.png' },
  { name: "Miniature", image: '/images/categories/miniature.png' },
  { name: "Vases", image: '/images/categories/vases.png' },
  { name: "Paintings", image: '/images/categories/paintings.png' },
  { name: "Sculpture", image: '/images/categories/sculpture.png' },
  { name: "Box", image: '/images/categories/box.png' },
  { name: "Frames", image: '/images/categories/frames.png' },
]

const products: TProduct[] = [
  { name: "Hand Clock", provider: 'Al Karam', image: '/images/products/hand-clock.png', rating: 5, price: "₹999.00", almostSoldOut: true, customerReviews: "4.1k" },
  { name: "Wall Mounted Wooden Clock", image: '/images/products/wooden-clock.png', rating: 5, price: "₹999.00", almostSoldOut: true, customerReviews: "4.1k" },
  { name: "Mini Model Clock", provider: 'Al Karam', image: '/images/products/mini-clock.png', rating: 5, price: "₹999.00", almostSoldOut: true, customerReviews: "4.1k" },
  { name: "Wall Mounted Wooden Clock", image: '/images/products/wooden-clock-2.png', rating: 5, price: "₹999.00", almostSoldOut: true, customerReviews: "4.1k" },
  { name: "Table Top Clock", provider: 'Al Karam', image: '/images/products/table-clock.png', rating: 5, price: "₹999.00", almostSoldOut: true, customerReviews: "4.1k" },
  { name: "Architectural Clock", provider: 'Al Karam', image: '/images/products/arch-clock.png', rating: 5, price: "₹999.00", almostSoldOut: true, customerReviews: "4.1k" },
]

export default function Products() {
  return (
    <section className="container">
      <h3 className={`${volkhov.className} text-5xl text-center mb-10 text-subtle`}>Product Category</h3>

      <div className="flex gap-8 items-start justify-between mb-12">
        {categories.map(c => <Category key={c.name} category={c} />)}
      </div>

      <div className="grid gap-12 place-items-center grid-cols-3">
        {products.map(p => <Product key={p.name} product={p} />)}
      </div>
    </section>
  )
}
