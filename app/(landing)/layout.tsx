import Header from "@/components/layouts/header";
import { ProductsProvider } from "@/providers/products-provider";
import Footer from "@/components/layouts/footer";
import { CartProvider } from "@/providers/cart-provider";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductsProvider>
      <CartProvider>
        <div className="w-full overflow-hidden">
          <Header />
          <main className="pt-20 md:pt-20">{children}</main>
          <Footer />
        </div>
      </CartProvider>
    </ProductsProvider>
  );
}
