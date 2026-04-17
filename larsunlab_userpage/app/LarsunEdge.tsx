"use client";
import { Heart, Handshake } from "lucide-react";

const items = [
  {
    title: "You Can Trust",
    desc: "WHO-GMP compliant manufacturing ensuring consistent safety, reliability in every batch.",
    icon: <Heart className="text-orange-500" size={22} />,
  },
  {
    title: "Value-Driven Healthcare",
    desc: "High-quality formulations at rational pricing, improving patient affordability and long-term compliance.",
    icon: <Heart className="text-orange-500" size={22} />,
  },
  {
    title: "Focused Therapeutic Expertise",
    desc: "Strong presence across Cardiology, Diabetology and Critical Care with a growing portfolio of essential molecules.",
    icon: <Handshake className="text-orange-500" size={22} />,
  },
  {
    title: "Reliable Supply & Access",
    desc: "Efficient distribution network ensuring timely product availability across hospitals, pharmacies, and clinics.",
    icon: <Handshake className="text-orange-500" size={22} />,
  },
];

export default function LarsunEdge() {
  return (
    <section className="bg-[#ffffff] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-[36px] font-bold text-[#2b1e70]">
          The Larsun Edge
        </h2>

        <p className="text-gray-500 mt-3">
          Why healthcare professionals and distributors trust us globally.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => {
              const tilts = [
                "md:-rotate-[5deg]",
                "md:-rotate-[4deg]",
                "md:-rotate-[3deg]",
                "md:-rotate-[2deg]",
              ];
              return (
                <div
                  key={i}
                  className={`bg-white rounded-2xl p-6 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.15),0_-8px_16px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.25),0_-12px_24px_-4px_rgba(0,0,0,0.12)] transition-all transform ${tilts[i]}`}
                >
                  <div className="mb-4">{item.icon}</div>

                  <h4 className="text-[#2b1e70] font-semibold text-lg">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
