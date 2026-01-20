interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  imgUrl: string;
  description: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: CategoryType;
  stock: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
}

interface ProductsType {
  products: ProductType[];
}

interface ProductCardProps extends ProductType {
  addToCart: (id: string, quantity: number, price: number) => void;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Bank {
  _id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  _id: string;
  status: string;
  totalPayment: number;
  purchasedItems: { productId: string; qty: number }[];
  customerName: string;
  customerContact: string;
  customerAddress: string;
  paymentProof: File;
  createdAt: string;
  updatedAt: string;
}

export { ProductType, ProductsType, ProductCardProps };
