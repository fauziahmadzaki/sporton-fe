interface ProductType {
  name: string;
  category: string;
  price: number;
  imgUrl: string;
}

interface ProductsType {
  products: ProductType[];
}

export { ProductType, ProductsType };
