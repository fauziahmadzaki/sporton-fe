interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  imgUrl: string;
  description: string;
}

interface ProductsType {
  products: ProductType[];
}

export { ProductType, ProductsType };
