"use client";

import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();

  const handleContactScroll = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f4f5f9] py-16 px-6">
      <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden">

        {/* GRADIENT BACKGROUND */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl py-16 px-8 text-center relative">

          {/* CIRCLE OUTLINE */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[320px] h-[320px] border border-white/40 rounded-full"></div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[220px] h-[220px] border border-white/40 rounded-full"></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-tight">
              Delivering Affordable <br /> Healthcare Solutions
            </h2>

            <p className="text-white/90 mt-4 text-sm md:text-base">
              Join us in our mission to make high-quality medicine a global reality.
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 mt-8 flex-wrap">

              {/* PRIMARY */}
              <button
                onClick={() => router.push("/products")}
                className="bg-white text-orange-500 px-6 py-3 rounded-md font-bold shadow hover:scale-105 active:scale-95 transition cursor-pointer"
              >
                View Products
              </button>

              {/* OUTLINE */}
              <button
                onClick={handleContactScroll}
                className="border border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-orange-500 active:scale-95 transition cursor-pointer"
              >
                Contact Us
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}