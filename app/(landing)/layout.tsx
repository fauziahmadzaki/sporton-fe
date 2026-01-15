import Header from "./components/layouts/header";
import { ProductsProvider } from "../../providers/products-provider";
import Footer from "./components/layouts/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductsProvider>
      <div className="w-full overflow-hidden">
        <Header />
        <main className="pt-5">{children}</main>
        <Footer />
      </div>
    </ProductsProvider>
  );
}
