"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Distributors", path: "/distributors" },
    { name: "Events", path: "/eventss" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo.jpg" // put your logo here
              alt="logo"
              width={80}
              height={70}
              style={{ height: "auto" }}
            />
          </Link>
        </div>

        {/* CENTER NAV - DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <span
                className={`cursor-pointer pb-1 transition-colors ${
                  pathname === link.path
                    ? "text-[#2b1e70] border-b-2 border-[#2b1e70]"
                    : "text-gray-600 hover:text-[#2b1e70]"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/careers">
            <span
              className={`cursor-pointer pb-1 transition-colors ${
                pathname === "/careers"
                  ? "text-[#2b1e70] border-b-2 border-[#2b1e70]"
                  : "text-gray-600 hover:text-[#2b1e70]"
              }`}
            >
              Careers & Connect
            </span>
          </Link>
        </nav>

        {/* RIGHT BUTTON & HAMBURGER */}
        <div className="flex items-center gap-4">
          <Link href="/products" className="hidden md:block">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold shadow hover:scale-105 transition cursor-pointer">
              Explore Products
            </button>
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)}>
              <span
                className={`block px-2 py-2 rounded-md ${
                  pathname === link.path
                    ? "bg-gray-50 text-[#2b1e70] font-semibold"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/careers" onClick={() => setIsOpen(false)}>
            <span
              className={`block px-2 py-2 rounded-md ${
                pathname === "/careers"
                  ? "bg-gray-50 text-[#2b1e70] font-semibold"
                  : "text-gray-600"
              }`}
            >
              Careers & Connect
            </span>
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="mt-2">
            <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow transition cursor-pointer">
              Explore Products
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
