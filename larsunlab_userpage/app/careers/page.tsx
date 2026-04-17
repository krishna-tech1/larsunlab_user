"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { X, MapPin, Briefcase, Clock } from "lucide-react";

type Job = {
  id: string;
  title: string;
  location: string;
  exp: string;
  type: string;
  status: string;
};

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [fetching, setFetching] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<{
    fullName: string;
    email: string;
    phone: string;
    resume: File | null;
  }>({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      if (file.type !== "application/pdf") {
        toast.error("Please upload a PDF file only");
        return;
      }
      setForm({ ...form, resume: file });
    }
  };

  const handleApply = async () => {
    if (!form.fullName || !form.email || !form.phone) {
      toast.error("Please fill in required fields");
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("jobId", selectedJob?.id || "");
      if (form.resume) {
        formData.append("resume", form.resume);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setSelectedJob(null);
        setForm({ fullName: "", email: "", phone: "", resume: null });
      } else {
        const data = await response.json();
        toast.error(data.error || "Submission failed");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`);
        const data = await response.json();
        if (response.ok) {
          // Only show active jobs to users
          setJobs(data.filter((j: any) => j.status === "ACTIVE"));
        }
      } catch (error) {
        console.error("Fetch jobs error:", error);
      } finally {
        setFetching(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-[#f4f5f9] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= WHY JOIN US ================= */}
        <div className="bg-white rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <span className="bg-orange-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
              OUR CULTURE
            </span>

            <h2 className="text-[36px] font-bold text-[#2b1e70] mt-4">
              Why Join Us?
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
              At Larsun Labs, we blend clinical rigor with human empathy. Join a
              team dedicated to pushing the boundaries of medical research while
              maintaining a supportive, visionary environment.
            </p>

            {/* BENEFITS */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-purple-100 text-[#2b1e70] px-4 py-2 rounded-full text-sm">
                📈 Fast-track growth
              </div>

              <div className="bg-purple-100 text-[#2b1e70] px-4 py-2 rounded-full text-sm">
                💰 Performance bonuses
              </div>

              <div className="bg-purple-100 text-[#2b1e70] px-4 py-2 rounded-full text-sm">
                🎯 Competitive incentives
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <Image
              src="/lab.jpg"
              alt=""
              width={350}
              height={350}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* ================= LOWER SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* LEFT CONTACT */}
          <div>
            <h3 className="text-[#2b1e70] font-bold text-lg mb-4">
              Get in Touch
            </h3>

            {/* MAP */}
            <div className="bg-white rounded-xl overflow-hidden">
              <Image
                src="/map_location.png"
                alt="Larsun Labs Location Map"
                width={500}
                height={200}
                className="w-full h-[180px] object-cover"
              />
            </div>

            {/* INFO CARDS */}
            <div className="mt-4 space-y-4">
              {/* VISIT */}
              <div className="bg-white p-4 rounded-xl flex gap-3 items-start">
                <div className="bg-purple-100 p-2 rounded-md">📍</div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold">
                    VISIT US
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    1221 Research Plaza, Suite 400 <br />
                    Bio-Tech Park, Chennai
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="bg-white p-4 rounded-xl flex gap-3 items-start">
                <div className="bg-purple-100 p-2 rounded-md">✉️</div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold">
                    EMAIL US
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    careers@larsunlabs.com <br />
                    General: info@larsunlabs.com
                  </p>
                </div>
              </div>

              {/* CALL */}
              <div className="bg-white p-4 rounded-xl flex gap-3 items-start">
                <div className="bg-purple-100 p-2 rounded-md">📞</div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold">CALL US</p>
                  <p className="text-sm text-gray-700 mt-1">
                    +91 97522 90006 <br />
                    Mon - Fri, 9am - 6pm PST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT JOBS */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#2b1e70] font-bold text-lg">
                Open Opportunities
              </h3>
              <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
                {jobs.length} Positions
              </span>
            </div>

            {/* JOB LIST */}
            <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {fetching ? (
                 <div className="space-y-4">
                    {[1,2,3].map(n => (
                      <div key={n} className="h-24 bg-white/50 rounded-xl animate-pulse" />
                    ))}
                 </div>
              ) : jobs.length === 0 ? (
                <div className="bg-white p-10 rounded-xl text-center">
                  <p className="text-gray-400 font-medium">No open positions at the moment.</p>
                </div>
              ) : (
                jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white p-5 rounded-xl flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div>
                      <span className="text-xs text-indigo-500 font-bold uppercase tracking-wider">
                        {job.type}
                      </span>

                      <h4 className="text-[#2b1e70] font-bold text-lg mt-1">
                        {job.title}
                      </h4>

                      <div className="flex gap-4 text-gray-500 text-xs mt-2 font-medium">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {job.exp}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-[#2b1e70] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#3a2996] transition flex items-center gap-2 group"
                    >
                      Apply Now
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedJob && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={() => setSelectedJob(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* MODAL */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 80, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 80, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6 relative"
              >
                {/* CLOSE */}
                <button
                  onClick={() => setSelectedJob(null)}
                  title="Close"
                  className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer"
                >
                  <X size={18} />
                </button>

                {/* TITLE */}
                <h2 className="text-center text-[#2b1e70] font-bold text-lg">
                  Apply for Position
                </h2>

                <p className="text-center text-sm text-gray-500 mt-1">
                  {selectedJob.title} - {selectedJob.location}
                </p>

                {/* FORM */}
                <div className="mt-6 space-y-4">
                  {/* NAME */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400">
                      FULL NAME
                    </label>
                    <input
                      value={form.fullName}
                      maxLength={20}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full mt-1 px-4 py-3 rounded-md bg-gray-100 outline-none text-sm"
                      disabled={submitting}
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400">
                      EMAIL
                    </label>
                    <input
                      value={form.email}
                      maxLength={25}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full mt-1 px-4 py-3 rounded-md bg-gray-100 outline-none text-sm"
                      disabled={submitting}
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400">
                      PHONE NUMBER
                    </label>
                    <input
                      value={form.phone}
                      maxLength={13}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        setForm({ ...form, phone: val });
                      }}
                      placeholder="e.g. 9112345678"
                      className="w-full mt-1 px-4 py-3 rounded-md bg-gray-100 outline-none text-sm"
                      disabled={submitting}
                    />
                  </div>

                   {/* FILE */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400">
                      RESUME / CV (PDF FORMAT ONLY)
                    </label>

                    <div className="mt-1 bg-gray-100 rounded-md px-4 py-3 text-sm cursor-pointer flex items-center justify-between relative">
                      <span className="truncate pr-4">
                        {form.resume ? form.resume.name : "Choose File (PDF Only)"}
                      </span>
                      <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        onChange={handleFileChange}
                        accept=".pdf"
                        title="Upload your resume (PDF only)"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button 
                    onClick={handleApply}
                    disabled={submitting}
                    className="w-full bg-[#2b1e70] text-white py-3 rounded-md font-semibold hover:scale-[1.02] transition mt-2 disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
