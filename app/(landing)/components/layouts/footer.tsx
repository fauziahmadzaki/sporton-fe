import Image from "next/image";
import Link from "next/link";

const footerUrls = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/" },
  { name: "Explore Products", href: "/" },
  { name: "About Us", href: "/" },
  { name: "Instagram", href: "/" },
  { name: "Facebook", href: "/" },
  { name: "Tiktok", href: "/" },
  { name: "Youtube", href: "/" },
];

export default function Footer() {
  return (
    <footer className="pt-13  bg-dark mt-52.75">
      <div className="w-full px-5 md:px-25 flex flex-col md:flex-row justify-between items-center md:items-start gap-20 md:gap-0 pb-22.75">
        <div className="space-y-7.5 max-w-md">
          <Image
            width={187.61}
            height={44}
            alt="Footer Logo"
            src={"/images/logo-footer.svg"}
          />
          <p className="text-base text-white font-normal">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-4 gap-x-20 gap-y-6.5">
          {footerUrls.map((url) => (
            <Link
              key={url.name}
              href={url.href}
              className="text-sm text-white font-normal"
            >
              {url.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full px-25 py-10 md:py-6.5 border-t border-t-neutral-400 flex gap-10 flex-col md:flex-row justify-between items-center text-white ">
        <p className="order-2 md:order-1">
          SportsOn © 2025 All Rights Reserverd.
        </p>
        <div className="flex gap-22 md:order-2">
          <Link href="">Privacy Policy</Link>
          <Link href="">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
