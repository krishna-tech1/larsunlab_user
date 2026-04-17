"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Package, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Gastroenterology",
  "Diabetology",
  "Immunology",
];

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Fetch products error:", error);
      } finally {
        setFetching(false);
      }
    };
    fetchProducts();
  }, []);

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <section className="bg-[#f4f5f9] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-6 bg-orange-500 rounded-full" />
            <span className="text-xs font-black text-orange-500 uppercase tracking-[3px]">
              Scientific Catalog
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-[#2b1e70] leading-tight">
            Precision <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b1e70] to-[#4b2fd1]">
              Pharmacopoeia
            </span>
          </h1>

          <p className="text-gray-500 mt-6 max-w-xl text-lg leading-relaxed font-medium">
            Synthesizing excellence through state-of-the-art laboratory clinical trials and molecular research breakthroughs.
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl ring-1 ring-gray-100 shadow-sm mb-4 focus-within:ring-[#2b1e70]/30 transition-all">
          <Search className="text-gray-400 shrink-0" size={18} />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search by molecule (e.g., Sitagliptin)"
            className="bg-transparent outline-none w-full text-sm text-[#2b1e70] placeholder:text-gray-400"
          />
        </div>

        {/* CATEGORY */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setPage(1); }}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all border ${activeCategory === cat
                  ? "bg-[#2b1e70] text-white border-[#2b1e70] shadow-md"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#2b1e70] hover:text-[#2b1e70]"
                }`}
            >
              {cat === "All" ? "All Categories" : cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        {fetching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-white rounded-[28px] animate-pulse ring-1 ring-gray-100" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[40px] shadow-sm ring-1 ring-gray-100 border-2 border-dashed border-gray-100">
            <Package size={48} className="text-gray-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#2b1e70]">No Research Assets Found</h3>
            <p className="text-gray-400 text-sm mt-2 font-medium">
              Adjust your criteria to discover clinical breakthroughs.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {paginated.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group flex flex-col h-full"
              >
                <Link
                  href={`/products/${p.id}`}
                  className="flex flex-col h-full bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >

                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image
                      src={p.images?.[0]?.url || "/products/placeholder.jpg"}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#2b1e70] text-[10px] px-3 py-1 rounded-md font-bold uppercase tracking-wide shadow-sm">
                      {p.category}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-[#2b1e70] font-bold text-lg leading-snug mb-2 line-clamp-2">
                      {p.name}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {p.description ||
                        "Synthesizing excellence through state-of-the-art laboratory clinical trials."}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        View Details
                      </span>

                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#2b1e70] group-hover:bg-[#2b1e70] group-hover:text-white transition-all duration-300">
                        <ArrowRight size={16} />
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16 bg-white w-fit mx-auto px-6 py-3 rounded-[24px] shadow-sm ring-1 ring-gray-100">
            <button
              disabled={page === 1}
              onClick={() => { setPage(page - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#2b1e70] hover:text-white transition-all disabled:opacity-20"
            >
              ←
            </button>

            <div className="px-4 text-sm font-black text-[#2b1e70] uppercase tracking-widest border-l border-r border-gray-100">
              Page {page} / {totalPages}
            </div>

            <button
              disabled={page === totalPages}
              onClick={() => { setPage(page + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#2b1e70] hover:text-white transition-all disabled:opacity-20"
            >
              →
            </button>
          </div>
        )}

      </div>
    </section>
  );
}