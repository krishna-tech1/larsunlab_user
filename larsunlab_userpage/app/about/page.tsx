import Timeline from "@/app/about/Timeline";
import CorePrinciples from "@/app/about/CorePrinciples";
import VisionaryLeadership from "./VisionaryLeadership";
import CTA from "@/app/about/CTA";


export default function AboutPage() {
  return (
    <div className="relative bg-[#f4f5f9] overflow-hidden">

      {/* GRADIENT BLOBS */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-orange-400 opacity-30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#2b1e70] opacity-20 rounded-full blur-[120px]" />

      {/* HERO */}
      <section className="py-16 md:py-28 px-4 text-center relative z-10">

        {/* BADGE */}
        <div className="inline-block px-5 py-1.5 rounded-full bg-[#e9e6fb] text-[#2b1e70] text-xs font-semibold tracking-widest">
          ESTABLISHED 1994
        </div>

        {/* TITLE */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-[64px] font-extrabold leading-tight">
          <span className="text-[#2b1e70]">About </span>
          <span className="text-orange-500">Us.</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-sm md:text-[16px] leading-relaxed">
          Redefining clinical precision through innovative research and
          unwavering human-centric pharmaceutical solutions.
        </p>

      </section>
      <Timeline />
      <CorePrinciples />
      <VisionaryLeadership />
        <CTA />
    </div>
  );
}