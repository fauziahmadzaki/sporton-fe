import { Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sporton - Your Ultimate Sports Gear Destination",
  description:
    "Discover top-quality sports gear and apparel at Sporton. Elevate your game with our premium selection of equipment for all your favorite sports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
