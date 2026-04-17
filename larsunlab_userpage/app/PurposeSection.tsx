"use client";
import { motion } from "framer-motion";
import { Microscope, FileText, Users, Heart } from "lucide-react";

export default function PurposeSection() {
  return (
    <section className="bg-[#ffffff] py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-wider">
              OUR PURPOSE
            </p>

            <h2 className="text-4xl md:text-[52px] font-extrabold text-[#2b1e70] mt-4 leading-[1.1]">
              Redefining the Future of
              <br />
              Well-being
            </h2>

            <p className="text-gray-600 mt-6 text-[17px] leading-relaxed max-w-xl">
              Our mission is to engineer high-quality healthcare solutions that
              are accessible to every corner of the globe. We envision a world
              where therapeutic innovation isn't a privilege, but a standard for
              all, driven by precision and integrity.
            </p>

            {/* R&D */}
            <div className="flex items-start gap-4 mt-10">
              <div className="bg-[#e9eaf2] p-4 rounded-xl">
                <Microscope className="text-[#2b1e70]" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-[#2b1e70] text-lg">
                  Pioneering R&D
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Continuous investment in molecular research and delivery
                  mechanisms.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative mt-12 md:mt-0">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-8">
              {/* QUALITY ETHICS */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_-8px_16px_rgba(0,0,0,0.06),0_8px_16px_rgba(0,0,0,0.06)] relative">
                <div className="absolute left-0 top-0 h-full w-[6px] bg-orange-500 rounded-tl-2xl rounded-bl-2xl"></div>

                <div className="ml-4">
                  <FileText className="text-orange-500 mb-3" size={22} />
                  <h4 className="text-[#2b1e70] font-semibold text-lg">
                    Quality Ethics
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Adhering to international safety standards in every batch
                    produced.
                  </p>
                </div>
              </div>

              {/* GLOBAL IMPACT */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_-8px_16px_rgba(0,0,0,0.06),0_8px_16px_rgba(0,0,0,0.06)] relative">
                <div className="absolute left-0 top-0 h-full w-[6px] bg-[#2b1e70] rounded-tl-2xl rounded-bl-2xl"></div>

                <div className="ml-4">
                  <Users className="text-[#2b1e70] mb-3" size={22} />
                  <h4 className="text-[#2b1e70] font-semibold text-lg">
                    Global Impact
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Reaching over 40 countries with life-saving medications.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex items-start sm:pt-24 mt-6 sm:mt-0">
              {/* PATIENT FIRST */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_-8px_16px_rgba(0,0,0,0.06),0_8px_16px_rgba(0,0,0,0.06)] relative w-full">
                <div className="absolute left-0 top-0 h-full w-[6px] bg-yellow-400 rounded-tl-2xl rounded-bl-2xl"></div>

                <div className="ml-4">
                  <Heart className="text-yellow-500 mb-3" size={22} />
                  <h4 className="text-[#2b1e70] font-semibold text-lg">
                    Patient First
                  </h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Designing affordable therapies for chronic care management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
