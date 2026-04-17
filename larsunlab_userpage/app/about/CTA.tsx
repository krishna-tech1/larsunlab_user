"use client";

export default function CTA() {
  return (
    <section className="bg-[#f4f5f9] py-16 px-4 md:px-6">
      <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden">
        {/* GRADIENT BACKGROUND */}
        <div className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-[24px] py-12 md:py-20 px-6 text-center overflow-hidden">
          {/* CONTENT */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white text-3xl md:text-[40px] font-bold leading-tight">
              Join Our Journey into Medical Excellence
            </h2>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 mt-8 flex-col sm:flex-row">
              {/* PRIMARY */}
              <button className="bg-white text-orange-500 px-6 py-3 rounded-md font-semibold shadow hover:scale-105 transition w-full sm:w-auto">
                Our Research Portfolio
              </button>

              {/* OUTLINE */}
              <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-orange-500 transition w-full sm:w-auto">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
