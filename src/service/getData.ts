export interface IData {
  limit: number;
  products: ICard[];
  skip: number;
  total: number;
}
export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export default async function getData() {
  const res: IData = await fetch('https://dummyjson.com/products?limit=30&skip=10')
    .then((res) => res.json())
    .catch(undefined);
  return res;
}
