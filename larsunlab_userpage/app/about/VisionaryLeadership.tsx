"use client";

import Image from "next/image";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function VisionaryLeadership() {
  const [selected, setSelected] = useState<any>(null);

  const leaders = [
    {
      name: "Dr. Elena Larsun",
      role: "CHIEF EXECUTIVE OFFICER",
      desc: "PhD in Bio-Molecular Engineering",
      img: "/leader1.jpg",
      details:
        "Leading Larsun Labs with a vision for clinical excellence and human-centric pharmaceutical solutions.",
    },
    {
      name: "Dr. Julian Marcus",
      role: "CHIEF SCIENCE OFFICER",
      desc: "MD, Head of Pharmacological Research",
      img: "/leader2.jpg",
      details:
        "Driving innovation in next-gen therapeutic research and drug development.",
    },
    {
      name: "Sarah Whitmore",
      role: "DIRECTOR OF ETHICS",
      desc: "M.Phil, Ethics in Healthcare",
      img: "/leader3.jpg",
      details:
        "Ensuring ethical practices across all pharmaceutical processes.",
    },
    {
      name: "David Chen",
      role: "HEAD OF OPERATIONS",
      desc: "MBA, Global Logistics Management",
      img: "/leader4.jpg",
      details:
        "Optimizing global supply chain and operational efficiency.",
    },
  ];

  return (
    <section className="bg-[#ffffff] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#2b1e70]">
              Visionary Leadership
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Guided by a diverse board of clinical experts.
            </p>
          </div>

          <button className="text-[#2b1e70] font-semibold hover:text-orange-500">
            View Executive Board →
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={600}
                height={400}
                className="w-full h-[320px] object-cover group-hover:scale-105 transition"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1e70]/90 via-[#2b1e70]/40 to-transparent"></div>

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs uppercase opacity-80">
                  {item.role}
                </p>
                <h3 className="text-xl font-semibold mt-1">
                  {item.name}
                </h3>
                <p className="text-sm opacity-80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}