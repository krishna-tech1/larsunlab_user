"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { HeartPulse, Activity, Bone, Syringe } from "lucide-react";

const items = [
  {
    title: "Cardiology",
    desc: "Advanced hypertension management and cardiovascular wellness portfolios.",
    icon: <HeartPulse size={22} />,
  },
  {
    title: "Diabetology",
    desc: "New-generation oral hypoglycemics for comprehensive glycemic control.",
    icon: <Activity size={22} />,
  },
  {
    title: "Ortho",
    desc: "Breakthrough treatments for osteo-health and inflammatory pain relief.",
    icon: <Bone size={22} />,
  },
  {
    title: "Critical Care",
    desc: "Life-saving injectables for critical support systems.",
    icon: <Syringe size={22} />,
  },
];

export default function Therapeutic() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // card width
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#2b1e70] pt-16 md:pt-24 pb-48 md:pb-56">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-[28px] md:text-[32px] font-bold text-white">
            Therapeutic Expertise
          </h2>
          <p className="text-gray-300 mt-2">
            Leading the way in specialized medical segments.
          </p>
        </div>

        {/* ARROWS */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition"
          >
            ‹
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div
        ref={scrollRef}
        className="mt-10 md:mt-14 flex gap-6 md:gap-8 px-4 sm:px-10 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="min-w-[300px] bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg"
          >
            {/* ICON */}
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>

            {/* DESC */}
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              {item.desc}
            </p>

            {/* LINK */}
            <p className="mt-5 text-orange-400 text-sm font-medium">
              Learn More →
            </p>
          </motion.div>
        ))}
      </div>

      {/* STATS PANEL */}
      <div className="absolute bottom-[-160px] md:bottom-[-120px] left-1/2 -translate-x-1/2 w-[92%] max-w-6xl bg-white rounded-3xl shadow-xl py-8 md:py-10 px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6 md:gap-8">
          <div>
            <div className="text-orange-500 text-2xl mb-2">🧪</div>
            <h3 className="text-2xl font-bold text-black">90+</h3>
            <p className="text-xs text-gray-500 tracking-wide">FORMULATIONS</p>
          </div>

          <div>
            <div className="text-orange-500 text-2xl mb-2">🌍</div>
            <h3 className="text-2xl font-bold text-black">25+</h3>
            <p className="text-xs text-gray-500 tracking-wide">TERRITORIES</p>
          </div>

          <div>
            <div className="text-orange-500 text-2xl mb-2">🤝</div>
            <h3 className="text-2xl font-bold text-black">1,500+</h3>
            <p className="text-xs text-gray-500 tracking-wide">PARTNERS</p>
          </div>

          <div>
            <div className="text-orange-500 text-2xl mb-2">😊</div>
            <h3 className="text-2xl font-bold text-black">10,000+</h3>
            <p className="text-xs text-gray-500 tracking-wide">
              PATIENT LIVES IMPACTED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
