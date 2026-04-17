"use client";
import Link from "next/link";
import { Mail, Phone, Globe, FileText, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#2b1e70] text-white pt-16 pb-6">
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">
        {/* LEFT */}
        <div>
          <h3 className="text-lg font-semibold">Larsun Labs</h3>

          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Pioneering pharmaceutical excellence through meticulous research and
            compassionate care across global borders.
          </p>

          {/* ICONS */}
          <div className="flex gap-4 mt-5 text-gray-300">
            <Globe size={18} />
            <FileText size={18} />
            <Share2 size={18} />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="/terms-and-conditions" className="text-white hover:text-orange-400 cursor-pointer transition">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-white hover:text-orange-400 cursor-pointer transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/medical-disclaimer" className="text-white hover:text-orange-400 cursor-pointer transition">Medical Disclaimer</Link>
            </li>
            <li>
              <Link href="/legal-disclaimer" className="text-white hover:text-orange-400 cursor-pointer transition">Legal Disclaimer</Link>
            </li>
            <li>
              <Link href="/regulatory-compliance" className="text-white hover:text-orange-400 cursor-pointer transition">Regulatory Compliance Note</Link>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="text-white hover:text-orange-400 transition cursor-pointer">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-orange-400 transition cursor-pointer">About</Link>
            </li>
            <li>
              <Link href="/products" className="text-white hover:text-orange-400 transition cursor-pointer">Product Catalog</Link>
            </li>
            <li>
              <Link href="/eventss" className="text-white hover:text-orange-400 transition cursor-pointer">Events</Link>
            </li>
            <li>
              <Link href="/product-disclaimer" className="text-white hover:text-orange-400 transition cursor-pointer">Product Information Disclaimer</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>

          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>inquiry@larsunlabs.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (800) 555-0199</span>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-6 bg-white text-[#2b1e70] px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition">
            Request Specialist Callback
          </button>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20 mt-12"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-gray-400 mt-5">
        © 2024 Larsun Labs. Precision in Healthcare.
      </p>
    </footer>
  );
}
