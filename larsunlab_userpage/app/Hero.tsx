// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#f3f4f7]">
//       <div className="container grid md:grid-cols-2 items-center min-h-[90vh]">
//         {/* LEFT CONTENT */}
//         <div className="z-10">
//           <h1 className="text-[68px] font-extrabold leading-[1.1]">
//             <span className="text-[#2b1e70]">Precision in</span>
//             <br />
//             <span className="text-orange-500">Healthcare.</span>
//           </h1>

//           <p className="text-gray-600 mt-6 max-w-lg text-lg leading-relaxed">
//             Dedicated to advancing pharmaceutical excellence through rigorous
//             research and innovative formulations. At Larsun Labs, we bridge the
//             gap between complex science and patient accessibility.
//           </p>

//           <div className="flex gap-5 mt-8">
//             <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow hover:scale-105 transition">
//               Partner With Us
//             </button>

//             <button className="border-2 border-[#2b1e70] text-[#2b1e70] px-6 py-3 rounded-md font-semibold hover:bg-[#2b1e70] hover:text-white transition">
//               Our Research
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="relative flex justify-center items-center">
//           {/* GLOW */}
//           <div className="absolute w-[460px] h-[460px] bg-gray-300 rounded-full blur-3xl opacity-40"></div>

//           {/* MAIN PERFECT CIRCLE */}
//           <motion.div
//             initial={{ scale: 0.85, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="relative z-10"
//           >
//             <div className="relative w-[420px] h-[420px] rounded-full border-[08px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
//               {/* IMPORTANT WRAPPER (THIS FIXES EVERYTHING) */}
//               <div className="absolute inset-0 rounded-full overflow-hidden">
//                 <Image
//                   src="/vaccine.jpg"
//                   alt="main"
//                   fill
//                   sizes="420px"
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* TOP RIGHT IMAGE */}
//           <motion.div
//             animate={{ y: [0, -15, 0] }}
//             transition={{ repeat: Infinity, duration: 3 }}
//             className="absolute top-[40px] right-[-15px] rotate-[15deg] z-20"
//           >
//             <div className="w-[120px] h-[120px] rounded-lg overflow-hidden shadow-xl relative">
//               <Image
//                 src="/hand.jpg"
//                 alt="hand"
//                 fill
//                 sizes="120px"
//                 className="object-cover object-center"
//               />
//             </div>
//           </motion.div>

//           {/* BOTTOM LEFT PERFECT CIRCLE */}
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ repeat: Infinity, duration: 4 }}
//             className="absolute bottom-[10px] left-[20px] z-20"
//           >
//             <div className="w-[130px] h-[130px] rounded-full border-[4px] border-white shadow-xl overflow-hidden relative flex items-center justify-center">
//               {/* IMPORTANT FIX HERE */}
//               <Image
//                 src="/molecule.jpg"
//                 alt="molecule"
//                 fill
//                 sizes="130px"
//                 className="object-cover object-center scale-110"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* BACKGROUND GRADIENT */}
//       <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-200 to-transparent"></div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [active, setActive] = useState("vision");
  const router = useRouter();

  const scrollToFooter = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-[#f3f4f7]">
      {/* ================= HERO SECTION ================= */}
      <div className="container grid md:grid-cols-2 items-center gap-12 pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
        {/* LEFT CONTENT */}
        <div className="z-10 px-4 md:px-0">
          <h1 className="text-[40px] md:text-[68px] font-extrabold leading-[1.1] text-center md:text-left mt-8 md:mt-0">
            <span className="text-[#2b1e70]">A New Dawn</span>
            <br />
            <span className="text-orange-500">Healthcare.</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-lg text-base md:text-lg leading-relaxed text-center md:text-left mx-auto md:mx-0">
            Dedicated to advancing pharmaceutical excellence through rigorous
            research and innovative formulations. At Larsun Labs, we bridge the
            gap between complex science and patient accessibility.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-5 mt-8 items-center">
            <button
              onClick={scrollToFooter}
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold shadow hover:scale-105 active:scale-95 transition cursor-pointer w-[80%] sm:w-auto"
            >
              Partner With Us
            </button>

            <button
              onClick={() => router.push("/about")}
              className="border-2 border-[#2b1e70] text-[#2b1e70] px-6 py-3 rounded-md font-semibold hover:bg-[#2b1e70] hover:text-white active:scale-95 transition cursor-pointer w-[80%] sm:w-auto"
            >
              Our Research
            </button>
          </div>
        </div>

        {/* RIGHT HERO IMAGES */}
        <div className="relative flex justify-center items-center mt-12 md:mt-0">
          {/* GLOW */}
          <div className="absolute w-[300px] h-[300px] md:w-[460px] md:h-[460px] bg-gray-300 rounded-full blur-3xl opacity-40"></div>

          {/* MAIN IMAGE */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border-[6px] md:border-[8px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/vaccine.jpg"
                  alt="main"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* TOP IMAGE */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-[10px] md:top-[40px] right-[10px] md:right-[-15px] rotate-[15deg] z-20"
          >
            <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-lg overflow-hidden shadow-xl relative">
              <Image src="/hand.jpg" alt="hand" fill sizes="120px" className="object-cover" />
            </div>
          </motion.div>

          {/* BOTTOM CIRCLE */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-[20px] md:bottom-[10px] left-[10px] md:left-[20px] z-20"
          >
            <div className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full border-[3px] md:border-[4px] border-white overflow-hidden shadow-xl relative">
              <Image
                src="/molecule.jpg"
                alt="molecule"
                fill
                sizes="130px"
                className="object-cover scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SCIENCE SECTION ================= */}
      <section className="relative py-28 bg-[#f4f5f9] overflow-hidden">
        {/* PERFECT ANGLED BACKGROUND */}
        <div className="absolute inset-0 z-0">
          {/* MAIN LIGHT PANEL */}
          <div
            className="absolute inset-0 bg-[#e9eaf2]"
            style={{
              clipPath: "polygon(0 0%, 100% 15%, 100% 100%, 0% 90%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#2b1e70]">
              Guided by Science,
              <br className="hidden md:block" />
              Driven by Purpose
            </h2>

            <p className="text-gray-600 mt-6 max-w-lg mx-auto md:mx-0">
              Our journey began with a simple yet profound mission: to make
              advanced medical formulations accessible to every life that needs
              them. At Larsun Labs, we combine ethical practices with innovative
              research to redefine pharmaceutical excellence.
            </p>

            <div className="mt-10 bg-white rounded-xl shadow-md px-6 py-5 flex flex-col md:flex-row items-center gap-4 border-t-[5px] md:border-t-0 md:border-l-[5px] border-orange-500 max-w-[520px] mx-auto md:mx-0 text-center md:text-left">
              <span className="text-orange-500 text-2xl">🛡️</span>
              <div>
                <h4 className="font-semibold text-[#2b1e70]">
                  Certified Excellence
                </h4>
                <p className="text-sm text-gray-500">
                  GMP & WHO Standardized Manufacturing Facilities
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS (MOBILE: STACKED) */}
          <div className="md:hidden flex flex-col gap-6 mt-12 w-full max-w-[340px] mx-auto px-4 relative z-10">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-orange-500 text-xl mb-2">🚀</div>
              <h3 className="font-semibold text-[#2b1e70]">Our Mission</h3>
              <p className="text-sm text-gray-500 mt-2">
                Deliver high-quality, affordable pharmaceutical solutions
                globally.
              </p>
            </div>

            <div className="bg-[#2b1e70] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-yellow-400 text-xl mb-2">👁️</div>
              <h3 className="font-semibold text-lg">Our Vision</h3>
              <p className="text-sm text-gray-300 mt-2">
                To be a globally recognized pharmaceutical leader, pioneering
                the next generation of life-saving medical formulations.
              </p>
            </div>
          </div>

          {/* RIGHT CARDS (DESKTOP: ANIMATED OVERLAP) */}
          <div className="hidden md:flex relative h-[260px] justify-center mt-0">
            {/* MISSION */}
            <motion.div
              onClick={() => setActive("mission")}
              animate={
                active === "mission"
                  ? { x: -80, y: 60, rotate: -6, scale: 1, zIndex: 20 }
                  : { x: 40, y: 0, rotate: 0, scale: 0.95, zIndex: 10 }
              }
              transition={{ duration: 0.5 }}
              className="absolute right-[40px] w-[300px] cursor-pointer"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-orange-500 text-xl mb-2">🚀</div>
                <h3 className="font-semibold text-[#2b1e70]">Our Mission</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Deliver high-quality, affordable pharmaceutical solutions
                  globally.
                </p>
              </div>
            </motion.div>

            {/* VISION */}
            <motion.div
              onClick={() => setActive("vision")}
              animate={
                active === "vision"
                  ? { x: -20, y: 60, rotate: -8, scale: 1, zIndex: 20 }
                  : { x: 60, y: 0, rotate: 0, scale: 0.95, zIndex: 10 }
              }
              transition={{ duration: 0.5 }}
              className="absolute right-[120px] w-[340px] cursor-pointer"
            >
              <div className="bg-[#2b1e70] text-white p-6 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)]">
                <div className="text-yellow-400 text-xl mb-2">👁️</div>
                <h3 className="font-semibold text-lg">Our Vision</h3>
                <p className="text-sm text-gray-300 mt-2">
                  To be a globally recognized pharmaceutical leader, pioneering
                  the next generation of life-saving medical formulations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
