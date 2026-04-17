"use client";

import { Search, Bell, Filter, Plus, Eye, Download, UserCheck, Trash2, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function CandidatePortal() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [errors, setErrors] = useState<any>({});
  const [filterRole, setFilterRole] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState<any>(null);
  const itemsPerPage = 8;

  const [form, setForm] = useState({
    title: "",
    location: "",
    department: "",
    experience: "",
    type: "Full-time",
  });

  const [postings, setPostings] = useState<any[]>([]);

  const [applications, setApplications] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);

  const getAuthHeader = () => {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((row) => row.startsWith("admin-token="));
    const token = tokenCookie ? tokenCookie.split("=")[1] : "";
    return {
      Authorization: `Bearer ${token}`,
    };
  };

  const fetchApplications = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
        headers: getAuthHeader(),
      });
      const data = await response.json();
      if (response.ok) {
        setApplications(data);
      }
    } catch (error) {
      console.error("Fetch applications error:", error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications/${id}`, {
        method: "PUT",
        headers: {
          ...getAuthHeader(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        toast.success(`Application status: ${newStatus}`);
        fetchApplications();
      }
    } catch (error) {
      toast.error("Status update failed");
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deleteId) return;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications/${deleteId}`, {
        method: "DELETE",
        headers: getAuthHeader(),
      });
      if (response.ok) {
        toast.success("Application removed successfully");
        setDeleteId(null);
        fetchApplications();
      } else {
        toast.error("Failed to delete application");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Network error during deletion");
    }
  };

  const handleOpenResume = (url: string, fullName: string) => {
    // Direct link opening is more reliable and avoids CORS/Blob issues
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    
    // Attempting to suggest a PDF filename for the browser
    // Note: This works best if the file is served from the same origin or with CORS headers
    const fileName = `${fullName.replace(/\s+/g, "_")}_Resume.pdf`;
    
    // If the URL is already a PDF or the user wants to "view", 
    // we don't force 'download' attribute as it might block 'open' behavior.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // FILTER LOGIC
  const filteredApplications = applications.filter((app) => {
    let matchesFilter = true;

    // Tab Status Filter
    if (activeTab !== "All") {
      matchesFilter = app.status.toLowerCase() === activeTab.toLowerCase();
    }

    // Modal Role Filter
    if (filterRole) {
      matchesFilter =
        matchesFilter &&
        app.job?.title.toLowerCase().includes(filterRole.toLowerCase());
    }

    // Top Bar Search (Name or Role)
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      matchesFilter = matchesFilter && (
        app.fullName.toLowerCase().includes(search) ||
        app.job?.title.toLowerCase().includes(search) ||
        app.email.toLowerCase().includes(search)
      );
    }

    return matchesFilter;
  });

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // VALIDATION
  const validateForm = () => {
    let newErrors: any = {};

    if (!form.title) newErrors.title = "Job title required";
    if (!form.location) newErrors.location = "Location required";
    if (!form.department) newErrors.department = "Department required";
    if (!form.experience) newErrors.experience = "Experience required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ➕ ADD POSTING
  const handleAddPosting = () => {
    if (!validateForm()) return;

    setPostings([
      ...postings,
      {
        ...form,
      },
    ]);

    setForm({
      title: "",
      location: "",
      department: "",
      experience: "",
      type: "Full-time",
    });
    setOpenModal(false);
  };

  // ✏️ EDIT OPENING
  const handleEdit = (index: number) => {
    const postingCopy = { ...postings[index] };
    setForm(postingCopy);
    setEditIndex(index);
    setOpenModal(true);
  };

  // 🔄 UPDATE
  const handleUpdate = () => {
    if (!validateForm()) return;

    const updated = [...postings];
    updated[editIndex!] = form;

    setPostings(updated);
    setForm({
      title: "",
      location: "",
      department: "",
      experience: "",
      type: "Full-time",
    });
    setEditIndex(null);
    setOpenModal(false);
  };

  return (
    <div className="p-6 bg-[#F6F7FB] min-h-screen">
      {/* TOP BAR */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
        <div className="flex items-center bg-white px-4 py-2 rounded-md w-full md:w-[420px] shadow-sm">
          <Search size={16} className="mr-2 text-gray-400" />
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search applications, candidates, or roles..."
            className="outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <Bell size={18} className="hidden md:block" />
          <div className="text-right text-sm">
            <p className="text-[#2B176F] font-semibold">Larsun Labs Admin</p>
            <p className="text-gray-400 text-xs">Session: 4h 12m</p>
          </div>
        </div>
      </div>

      {/* TITLE */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-[4px] h-[22px] bg-orange-500"></div>
            <h1 className="text-[28px] font-bold text-[#2B176F]">
              Candidate Portal
            </h1>
          </div>

          <p className="text-sm text-gray-500 mt-1 max-w-[600px]">
            Review and manage inbound applications for research and
            administrative roles at Larsun Labs.
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
          <button
            onClick={() => setOpenFilterModal(true)}
            className="bg-gray-100 px-4 py-2 rounded-md flex items-center justify-center flex-1 md:flex-none gap-2 text-sm hover:bg-gray-200 transition cursor-pointer shrink-0"
          >
            <Filter size={14} /> Filter
          </button>

          <button
            onClick={() => {
              setEditIndex(null);
              setForm({
                title: "",
                location: "",
                department: "",
                experience: "",
                type: "Full-time",
              });
              setErrors({});
              setOpenModal(true);
            }}
            className="bg-[#F97316] text-white px-4 py-2 flex-1 md:flex-none justify-center rounded-md flex items-center gap-2 text-sm font-medium hover:bg-orange-600 transition cursor-pointer active:scale-95 shrink-0"
          >
            <Plus size={14} /> Post New Role
          </button>
        </div>
      </div>

      {/* STATS (FULL WIDTH) */}
      {(() => {
        const todayStr = new Date().toDateString();
        const totalReviewed = applications.filter(a => a.status === "REVIEWED").length;
        const newToday = applications.filter(a => new Date(a.createdAt).toDateString() === todayStr).length;
        const reviewedToday = applications.filter(a => a.status === "REVIEWED" && new Date(a.updatedAt).toDateString() === todayStr).length;

        return (
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 mb-8">
            {/* LEFT SIDE */}
            <div>
              <p className="text-xs text-gray-400 mb-2 tracking-wide font-bold">
                TOTAL REVIEWED
              </p>

              <h2 className="text-[36px] font-bold text-[#2B176F]">
                {totalReviewed.toLocaleString()}
              </h2>

              <p className="text-xs text-gray-400 mt-1">
                Across all active and historical postings
              </p>
            </div>

            {/* RIGHT SIDE SMALL CARDS */}
            <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto overflow-x-auto">
              <div className="bg-[#EEF2FF] px-4 py-3 rounded-lg flex-1 md:w-[140px] border border-indigo-50 min-w-[120px]">
                <p className="text-[10px] text-gray-500 font-bold">NEW TODAY</p>
                <p className="text-lg font-bold text-[#2B176F]">{newToday}</p>
              </div>

              <div className="bg-[#FFF7ED] px-4 py-3 rounded-lg flex-1 md:w-[140px] border border-orange-50 min-w-[120px]">
                <p className="text-[10px] text-gray-500 font-bold uppercase">Reviewed Today</p>
                <p className="text-lg font-bold text-[#2B176F]">{reviewedToday}</p>
              </div>
            </div>
          </div>
        );
      })()}

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-50">
          <h3 className="text-[#2B176F] font-semibold hidden md:block">Recent Applications</h3>

          <div className="bg-gray-100 rounded-lg p-1 flex gap-1 text-sm w-full md:w-auto">
            {["All", "Pending", "Reviewed"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:px-3 py-1 rounded-md transition ${
                  activeTab === tab
                    ? "bg-white shadow text-[#2B176F]"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto w-full custom-scrollbar">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-5 px-6 pb-3 text-[11px] text-gray-500 font-semibold tracking-wide border-b border-gray-50 bg-gray-50/50 py-3">
          <span>CANDIDATE</span>
          <span>APPLIED ROLE</span>
          <span>PHONE</span>
          <span>STATUS</span>
          <span className="text-right">RESUME & ACTIONS</span>
        </div>

        {/* ROWS */}
        {fetching ? (
           <div className="p-10 space-y-4">
              {[1,2,3].map(n => (
                <div key={n} className="h-16 bg-gray-50 animate-pulse rounded-xl" />
              ))}
           </div>
        ) : paginatedApplications.length === 0 ? (
          <div className="p-20 text-center text-gray-400">
            No applications found in the pipeline.
          </div>
        ) : (
          paginatedApplications.map((app, i) => (
            <div
              key={app.id}
              className="grid grid-cols-5 px-6 py-5 items-center border-t border-gray-100 hover:bg-gray-50 transition group"
            >
              {/* CANDIDATE */}
              <div>
                <p className="font-bold text-[#2B176F] text-sm">{app.fullName}</p>
                <p className="text-xs text-gray-400 font-medium">{app.email}</p>
              </div>

              {/* ROLE */}
              <div>
                <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight">
                  {app.job?.title}
                </span>
              </div>

              {/* PHONE */}
              <div className="text-sm text-gray-500 font-bold">{app.phone}</div>

              {/* STATUS */}
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                    app.status === "PENDING"
                      ? "bg-orange-50 text-orange-600 border-orange-100"
                      : app.status === "REVIEWED"
                      ? "bg-green-50 text-green-600 border-green-100"
                      : "bg-gray-50 text-gray-500 border-gray-100"
                  }`}
                >
                  {app.status}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="flex justify-end gap-3 text-gray-400">
                {app.status === "PENDING" && (
                   <button 
                    onClick={() => handleStatusUpdate(app.id, "REVIEWED")}
                    className="p-2 bg-gray-50 rounded-lg hover:text-green-600 hover:bg-green-50 transition"
                    title="Mark as Reviewed"
                  >
                    <UserCheck size={18} />
                  </button>
                )}
                <button 
                  onClick={() => handleOpenResume(app.resume, app.fullName)}
                  className="p-2 bg-gray-50 rounded-lg hover:text-green-600 hover:bg-green-50 transition"
                  title="Open Resume as PDF"
                >
                  <Download size={18} />
                </button>
                <button 
                  onClick={() => setDeleteId(app.id)}
                  className="p-2 bg-gray-50 rounded-lg hover:text-red-600 hover:bg-red-50 transition"
                  title="Delete Application"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center px-6 py-4 text-xs text-gray-400 border-t border-gray-200">
          <p>
            Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, filteredApplications.length)} of{" "}
            {filteredApplications.length} candidates
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="cursor-pointer hover:text-[#2B176F] disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md transition ${
                  currentPage === i + 1
                    ? "bg-[#2B176F] text-white"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="cursor-pointer hover:text-[#2B176F] disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl w-[95%] max-w-[420px] max-h-[90vh] overflow-y-auto shadow-xl hide-scrollbar"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* HEADER */}
              <div className="bg-gradient-to-r from-[#2B176F] to-[#4B2FD1] px-6 py-4 text-white">
                <h2 className="text-lg font-semibold">
                  {editIndex !== null ? "Edit Job Posting" : "Post New Role"}
                </h2>
                <p className="text-xs opacity-80">
                  Create and manage new job openings
                </p>
              </div>

              {/* BODY */}
              <div className="p-6 space-y-4">
                {/* INPUTS */}
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600 font-medium block mb-1">
                      Job Title
                    </label>
                    <input
                      value={form.title}
                      maxLength={25}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                      placeholder="e.g., Senior Clinical Researcher"
                      className={`w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#2B176F]/30 outline-none ${
                        errors.title ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.title && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 font-medium block mb-1">
                      Department
                    </label>
                    <input
                      value={form.department}
                      onChange={(e) =>
                        setForm({ ...form, department: e.target.value })
                      }
                      placeholder="e.g., Research, Operations"
                      className={`w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#2B176F]/30 outline-none ${
                        errors.department ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.department && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.department}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 font-medium block mb-1">
                      Location
                    </label>
                    <input
                      value={form.location}
                      maxLength={20}
                      onChange={(e) =>
                        setForm({ ...form, location: e.target.value })
                      }
                      placeholder="e.g., Geneva, Switzerland"
                      className={`w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#2B176F]/30 outline-none ${
                        errors.location ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.location && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 font-medium block mb-1">
                      Experience Required
                    </label>
                    <input
                      value={form.experience}
                      maxLength={20}
                      onChange={(e) =>
                        setForm({ ...form, experience: e.target.value })
                      }
                      placeholder="e.g., 5+ Years"
                      className={`w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#2B176F]/30 outline-none ${
                        errors.experience ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.experience && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.experience}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 font-medium block mb-1">
                      Employment Type
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) =>
                        setForm({ ...form, type: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2B176F]/30 outline-none"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50">
                <button
                  onClick={() => {
                    setOpenModal(false);
                    setErrors({});
                    setForm({
                      title: "",
                      location: "",
                      department: "",
                      experience: "",
                      type: "Full-time",
                    });
                    setEditIndex(null);
                  }}
                  className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={editIndex !== null ? handleUpdate : handleAddPosting}
                  className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition active:scale-95"
                >
                  {editIndex !== null ? "Update" : "Post Role"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FILTER MODAL */}
      <AnimatePresence>
        {openFilterModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl w-[95%] max-w-[380px] shadow-xl"
            >
              {/* HEADER */}
              <div className="bg-gradient-to-r from-[#2B176F] to-[#4B2FD1] px-6 py-4 text-white">
                <h2 className="text-lg font-semibold">Filter Candidates</h2>
                <p className="text-xs opacity-80">Refine your candidate search</p>
              </div>

              {/* BODY */}
              <div className="p-6 space-y-4">
                {/* ROLE FILTER */}
                <div>
                  <label className="text-sm text-gray-600 font-medium block mb-2">
                    Search Role
                  </label>
                  <input
                    value={filterRole}
                    onChange={(e) => {
                      setFilterRole(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="e.g., Chemist, Chief..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#2B176F]/30 outline-none"
                  />
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex justify-end gap-3 px-6 py-4 border-t bg-gray-50">
                <button
                  onClick={() => {
                    setOpenFilterModal(false);
                    setFilterRole("");
                    setCurrentPage(1);
                  }}
                  className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  Clear
                </button>

                <button
                  onClick={() => setOpenFilterModal(false)}
                  className="px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition active:scale-95"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[32px] w-full max-w-[400px] shadow-2xl overflow-hidden"
            >
              <div className="p-8 text-center pt-10 relative">
                <button
                  onClick={() => setDeleteId(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition"
                >
                  <Filter size={20} />
                </button>
                <div className="w-20 h-20 bg-red-50 rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-sm border border-red-100 rotate-3">
                  <Trash2 size={32} className="text-red-500" />
                </div>
                <h3 className="text-2xl font-black text-[#2B176F] mb-3">Remove Candidate?</h3>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed max-w-[280px] mx-auto">
                  Are you absolutely certain? This application will be permanently purged from the Larsun records.
                </p>
              </div>
              <div className="flex gap-4 px-8 py-6 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={() => setDeleteId(null)}
                  className="flex-1 py-3.5 text-sm font-bold text-gray-500 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition shadow-sm"
                >
                  Keep Data
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="flex-1 py-3.5 text-sm font-black text-white bg-red-500 rounded-xl hover:bg-red-600 transition tracking-wide shadow-md shadow-red-200 active:scale-[0.98]"
                >
                  Yes, Remove
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
