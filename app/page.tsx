import Products from "@/components/sections/products";
import Cover from "@/components/sections/Cover";
import Arrivals from '@/components/sections/arrivals'

export default function Home() {
  return (
    <main>
      <Cover />
      <Arrivals />
      <Products />
    </main>
  );
}
