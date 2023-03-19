export default async function getData() {
  const res: Response = await fetch('https://dummyjson.com/products?limit=30&skip=10')
    .then((res) => res.json())
    .catch(undefined);
  return res;
}
