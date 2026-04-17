"use client";

import { ArrowRight } from "lucide-react";

export default function EventCollaboration() {
  const scrollToFooter = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return (
    <section className="mt-24 mb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT OUTER CARD */}
          <div className="bg-[#f1f2f6] rounded-2xl p-6">

            {/* INNER CARD */}
            <div className="relative rounded-xl overflow-hidden h-[360px] flex items-center justify-center text-center text-white">

              {/* BACKGROUND IMAGE */}
              <img
                src="/events/summit.jpg" // 👉 put your image here
                className="absolute inset-0 w-full h-full object-cover"
                alt="Event"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2b1e70]/90 to-[#3c2aa5]/90" />

              {/* CONTENT */}
              <div className="relative z-10 px-6">

                <p className="text-orange-400 text-xs font-semibold tracking-widest">
                  COMING SOON
                </p>

                <h3 className="mt-4 text-[22px] font-bold leading-snug">
                  The Annual Larsun Global Summit
                </h3>

                <p className="mt-4 text-sm text-gray-200 leading-relaxed">
                  Prepare for our flagship event where we unveil the latest
                  breakthroughs in pharmacological research and therapeutic
                  advancements.
                </p>

                <button className="mt-6 bg-white text-[#2b1e70] px-5 py-2.5 rounded-md text-sm font-semibold shadow hover:scale-105 transition">
                  Pre-register Now
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* TITLE */}
            <h2 className="text-[32px] font-bold text-[#2b1e70]">
              Host a Collaborative Session
            </h2>

            {/* DESC */}
            <p className="text-gray-600 mt-4 leading-relaxed max-w-lg">
              We believe in the power of shared knowledge. Larsun Labs sponsors
              satellite seminars and collaborative workshops globally.
              Interested in hosting an event at your institution?
            </p>

            {/* FEATURES */}
            <div className="mt-8 space-y-6">

              {/* ITEM 1 */}
              <div className="flex gap-4">
                <div className="bg-[#2b1e70] w-11 h-11 rounded-lg flex items-center justify-center text-white text-lg">
                  📄
                </div>
                <div>
                  <h4 className="text-[#2b1e70] font-semibold">
                    Sponsorship Program
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Access funding and logistical support for clinical seminars.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-4">
                <div className="bg-[#2b1e70] w-11 h-11 rounded-lg flex items-center justify-center text-white text-lg">
                  👨‍⚕️
                </div>
                <div>
                  <h4 className="text-[#2b1e70] font-semibold">
                    Expert Speaker Bureau
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Request our lead scientists to present at your next conference.
                  </p>
                </div>
              </div>

            </div>

            {/* LINK */}
            <div className="mt-8">
              <button
                onClick={scrollToFooter}
                className="text-[#2b1e70] font-semibold flex items-center gap-2 hover:gap-3 transition cursor-pointer"
              >
                Contact Partnerships Department
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}