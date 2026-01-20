import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <main className="pt-20 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
