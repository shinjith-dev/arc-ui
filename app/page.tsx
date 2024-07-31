import Products from "@/components/sections/products";
import Cover from "@/components/sections/Cover";
import Arrivals from "@/components/sections/arrivals";
import Deals from "@/components/deals";

export default function Home() {
  return (
    <main>
      <Cover />
      <Arrivals />
      <Products />
      <Deals />
    </main>
  );
}
