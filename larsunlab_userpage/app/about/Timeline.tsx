"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Timeline() {
  const ref = useRef(null);

  // 🔥 SCROLL PROGRESS
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const data = [
    {
      year: "1994",
      title: "The Genesis",
      desc: "Founded as a small specialized research lab in Zurich...",
    },
    {
      year: "2005",
      title: "Global Expansion",
      desc: "Secured FDA approvals for flagship therapies...",
    },
    {
      year: "2018",
      title: "Digital Innovation Hub",
      desc: "Launched AI-driven diagnostics platform...",
    },
    {
      year: "2024",
      title: "Precision Future",
      desc: "Carbon-neutral facility and genomic medicine...",
    },
  ];

  return (
    <section className="relative bg-[#ffffff] py-16 md:py-40">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* TITLE */}
        <h2 className="text-[#2b1e70] text-3xl md:text-4xl font-semibold">Our Evolution</h2>
        <div className="w-12 h-[3px] bg-orange-500 mt-2 mb-12 md:mb-24 rounded-full"></div>

        <div ref={ref} className="relative mt-12 md:mt-0">
          {/* BASE LINE */}
          <div className="absolute left-[24px] md:left-1/2 top-0 w-[2px] h-full bg-gray-300/30 -translate-x-1/2 rounded-full"></div>

          {/* 🔥 PROGRESS LINE */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[24px] md:left-1/2 top-0 w-[2px] bg-[#2b1e70] -translate-x-1/2 origin-top z-0"
          />

          {data.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                className={`relative flex w-full mb-16 md:mb-32 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* DOT */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                  className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 mt-1 md:mt-0 z-10"
                >
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${isLeft ? "bg-[#2b1e70]" : "bg-orange-500"}`}></div>
                    <div className={`absolute inset-0 w-4 h-4 rounded-full blur-md opacity-60 animate-pulse ${isLeft ? "bg-[#2b1e70]" : "bg-orange-500"}`}></div>
                  </div>
                </motion.div>

                {/* CONTENT */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <motion.div
                    initial={{ x: isLeft ? -80 : 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                  >
                    <h3 className="text-[28px] md:text-[34px] font-bold text-[#2b1e70]">
                      {item.year}
                    </h3>
                    <p className="font-semibold text-[#2b1e70]">
                      {item.title}
                    </p>
                    <p className={`text-gray-600 text-sm mt-3 max-w-sm ${isLeft ? "md:ml-auto md:mr-0" : ""} `}>
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
