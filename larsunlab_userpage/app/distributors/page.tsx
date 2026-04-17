"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Search, Building } from "lucide-react";

import { useEffect } from "react";

export default function DistributorsPage() {
  const [active, setActive] = useState("");
  const [search, setSearch] = useState("");
  const [distributors, setDistributors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDists = async () => {
      try {
        setError(null);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/distributors`);
        if (!response.ok) {
          throw new Error(`Failed to fetch distributors: ${response.statusText}`);
        }
        const data = await response.json();
        setDistributors(Array.isArray(data) ? data : []);
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to connect to the supply network. Please ensure the backend is running.");
      } finally {
        setLoading(false);
      }
    };
    fetchDists();
  }, []);

  // Group distributors by region
  const groupedData = distributors.reduce((acc: any, dist: any) => {
    const city = dist.region || "Other";
    if (!acc[city]) {
      acc[city] = { city: city, locations: [] };
    }
    acc[city].locations.push({
      title: dist.name,
      company: dist.name,
    });
    return acc;
  }, {});

  const dataArray = Object.values(groupedData);

  const filteredData = dataArray.filter(
    (item: any) =>
      (item.city && item.city.toLowerCase().includes(search.toLowerCase())) ||
      item.locations.some(
        (loc: any) =>
          (loc.title && loc.title.toLowerCase().includes(search.toLowerCase())) ||
          (loc.company && loc.company.toLowerCase().includes(search.toLowerCase())),
      ),
  );

  return (
    <section className="bg-[#ffffff] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* TAG */}
        <div className="inline-block bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide">
          GLOBAL ACCESS
        </div>

        {/* TITLE */}
        <h1 className="mt-6 text-[52px] leading-[1.1] font-extrabold tracking-tight">
          <span className="text-[#2b1e70]">Global Clinical </span>
          <span className="text-orange-500">Supply Network</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-[16px] text-gray-600 max-w-2xl leading-relaxed">
          Larsun Labs maintains a precision-engineered distribution
          infrastructure across Tamil Nadu and beyond. Our regional partners are vetted
          for medical-grade storage and rapid-response delivery.
        </p>

        {/* RIGHT SIDE PILLS */}
        <div className="flex gap-3 mt-6 justify-end">
          <div className="flex items-center gap-2 bg-purple-100 text-[#2b1e70] px-4 py-2 rounded-full text-sm font-medium uppercase tracking-tighter">
            🌍 {distributors.length} partners active
          </div>
          <div className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-tighter">
            ✔ GDP Certified
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex gap-4 mt-8">
          <div className="flex items-center bg-white px-4 py-3 rounded-md shadow w-full">
            <Search size={18} className="text-gray-400" />
            <input
              placeholder="Search by region or city..."
              className="ml-3 outline-none w-full text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="bg-[#2b1e70] text-white px-6 py-3 rounded-md">
            Find
          </button>
        </div>

        {/* ACCORDION */}
        <div className="mt-10 space-y-5">
          {loading ? (
            <div className="py-20 text-center text-gray-400">
              <div className="w-8 h-8 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
              <p>Synchronizing with Global Supply Network...</p>
            </div>
          ) : error ? (
            <div className="py-12 text-center text-red-500 bg-red-50 rounded-2xl border border-red-100 px-6">
              <p className="text-lg font-semibold mb-2">Network Sync Error</p>
              <p className="text-sm opacity-80">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 text-xs font-bold uppercase tracking-widest bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Retry Connection
              </button>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              <p className="text-base font-medium">
                No results found for "{search}"
              </p>
            </div>
          ) : (
            filteredData.map((item: any, i: number) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
                {/* HEADER */}
                <div
                  onClick={() =>
                    setActive(active === item.city ? "" : item.city)
                  }
                  className={`
          flex justify-between items-center px-6 py-5 cursor-pointer
          bg-[#f8f9fa] rounded-2xl transition
          ${active === item.city ? "border-l-4 border-orange-500" : ""}
        `}
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-orange-500" />
                    <span className="text-[#2b1e70] font-semibold text-lg">
                      {item.city} Region
                    </span>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`transition ${
                      active === item.city ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* CONTENT */}
                {active === item.city && (
                  <div className="bg-[#f8f9fa] mt-3 rounded-2xl px-6 py-6 ring-1 ring-gray-200">
                    <div className="flex flex-wrap gap-4">
                      {item.locations.map((loc: any, idx: number) => (
                        <div 
                          key={idx} 
                          className="bg-white py-4 px-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all w-full md:w-auto md:min-w-[280px]"
                        >
                          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                            <Building size={18} className="text-orange-500" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Authorized Partner</p>
                            <h4 className="text-[#2b1e70] font-bold text-[15px]">
                               {loc.company}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="rounded-[28px] bg-gradient-to-r from-[#2B176F] to-[#4B2FD1] py-16 px-6 text-center text-white mt-16">
          <h2 className="text-[28px] md:text-[32px] font-bold">
            Become a Distribution Partner
          </h2>
          <p className="mt-4 text-[15px] md:text-[16px] opacity-90 max-w-xl mx-auto leading-relaxed">
            We are expanding our network in emerging markets. Join our mission to
            deliver clinical excellence globally.
          </p>
          <div className="mt-8">
            <button className="bg-white text-[#2b1e70] font-bold px-8 py-3 rounded-md shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
              Inquire for Partnership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

