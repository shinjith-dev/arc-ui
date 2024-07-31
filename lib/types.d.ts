import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TArrival = {
  id: string;
  title: string;
  price: number;
  image: StaticImport | string;
  bg: string;
};

export type TCategory = {
  name: string
  image: StaticImport | string
  rotate?: boolean
}

export type TProduct = {
  name: string;
  provider?: string
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  customerReviews: string;
  price: string;
  almostSoldOut?: boolean
  image: StaticImport | string
}
