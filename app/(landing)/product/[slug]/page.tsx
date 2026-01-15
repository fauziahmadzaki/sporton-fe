// "use client";
// import { useProduct } from "@/hooks/use-product";
// import { useParams } from "next/navigation";

// export default function ProductDetail() {
//   const { slug } = useParams();
//   const { products } = useProduct();
//   const product = products.find(
//     (product) => product.name.toLowerCase().split(" ").join("-") == slug
//   );

//   return <div className="pp">{product?.name}</div>;
// }
