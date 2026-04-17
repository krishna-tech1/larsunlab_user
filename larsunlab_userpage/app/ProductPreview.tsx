"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProductPreview({
  title,
  description,
  products,
  category,
}: any) {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#f4f5f9] mt-32 md:mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-[40px] font-bold text-[#2b1e70]">{title}</h1>
          {description && <p className="text-gray-600 mt-2">{description}</p>}
        </motion.div>

        {/* GRID - Show 2 products + Show More button */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* First 2 Products */}
          {products.slice(0, 2).map((p: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col h-full"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                {/* CATEGORY BADGE */}
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {p.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[#2b1e70] font-bold text-lg line-clamp-2">{p.name}</h3>
                <p className="text-gray-600 text-sm mt-3 flex-grow mb-4 line-clamp-3">{p.desc}</p>

                {/* BUTTON */}
                <button
                  onClick={() => router.push(`/products/${p.id}`)}
                  className="w-full mt-auto border border-[#2b1e70] text-[#2b1e70] py-2 rounded-md font-semibold hover:bg-[#2b1e70] hover:text-white transition"
                >
                  Product Details
                </button>
              </div>
            </motion.div>
          ))}

          {/* SHOW MORE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() =>
              router.push(`/products${category ? `?category=${category}` : ""}`)
            }
            className="bg-gradient-to-br from-[#2b1e70] to-[#1a0f47] rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex items-center justify-center min-h-[350px]"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">+</div>
              <p className="text-white text-xl font-bold">Show More</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
