"use client";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi"; // Tambah FiX untuk icon close
import { useEffect, useState } from "react";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    href: "/",
  },
  {
    label: "Explore Products",
    href: "/",
  },
];

const Header = () => {
  // Ubah default state ke false (tertutup)
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white ${
        isScrolled ? "shadow-sm  md:bg-white" : "md:bg-transparent"
      }`}
    >
      <div className="px-5 max-w-7xl flex justify-between items-center mx-auto py-5 relative">
        <Link href="/">
          <Image
            src={"/images/logo.svg"}
            width={127}
            height={30}
            alt="Sporton Logo"
            className="w-32 md:w-fit cursor-pointer"
          />
        </Link>

        <nav
          className={`
            absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-[400px] py-6 border-t" : "max-h-0 py-0"} 
            md:static md:w-auto md:flex-row md:gap-10 md:shadow-none md:max-h-none md:py-0 md:border-none md:bg-transparent
          `}
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-medium text-base text-dark py-2 md:py-0 relative after:absolute after:bottom-[-2px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-5 md:gap-8">
          <FiSearch
            size={24}
            className="cursor-pointer text-dark hover:text-primary transition-colors"
          />

          <div className="relative cursor-pointer group">
            <FiShoppingBag
              size={24}
              className="text-dark group-hover:text-primary transition-colors"
            />
            <div className="absolute -top-1.5 -right-1.5 size-4 text-[10px] text-white bg-primary flex items-center justify-center rounded-full">
              3
            </div>
          </div>

          {/* HAMBURGER MENU (Mobile Only) */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-dark focus:outline-none"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
