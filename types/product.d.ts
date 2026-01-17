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

interface ProductCardProps extends ProductType {
  addToCart: (id: string, quantity: number, price: number) => void;
}

export { ProductType, ProductsType, ProductCardProps };
