"use client";

import { FileText, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function CorePrinciples() {
  const data = [
    {
      title: "Scientific Rigor",
      desc: "Unyielding commitment to evidence-based development and the highest standards of clinical validation across all medical vertical markets.",
      icon: <FileText size={22} className="text-orange-500" />,
    },
    {
      title: "Radical Integrity",
      desc: "Absolute transparency in our research processes, ensuring that patient safety and ethical considerations always precede commercial interests.",
      icon: <Users size={22} className="text-orange-500" />,
    },
    {
      title: "Human Empathy",
      desc: "Designing treatments with the end-patient in mind, focusing on quality of life and accessibility beyond the technical data points.",
      icon: <Heart size={22} className="text-orange-500" />,
    },
  ];

  return (
    <section className="bg-[#f4f5f9] py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* TITLE */}
        <h2 className="text-[28px] md:text-[32px] font-bold text-[#2b1e70]">
          Core Principles
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Our values aren't just words; they are the clinical parameters by
          which we measure every success.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              {/* ICON BOX */}
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[#2b1e70] font-semibold text-lg">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
