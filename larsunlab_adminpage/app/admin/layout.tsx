"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Box,
  Truck,
  Calendar,
  Briefcase,
  FileText,
  Settings,
  LogOut,
  X,
  Menu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check if this is the login page
  const isLoginPage = pathname === "/admin/login";

  // Check if user is authenticated on mount
  useEffect(() => {
    if (!isLoginPage) {
      const isLoggedIn = document.cookie.includes("admin-auth=true");
      if (!isLoggedIn) {
        router.push("/admin/login");
      }
    }
  }, [router, isLoginPage]);

  const handleLogout = () => {
    // Clear all auth-related cookies
    document.cookie =
      "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie =
      "admin-remember=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    // Redirect to login immediately
    router.refresh();
    router.push("/admin/login");
  };

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Products", icon: Box, path: "/admin/products" },
    { name: "Distributors", icon: Truck, path: "/admin/distributors" },
    { name: "Events", icon: Calendar, path: "/admin/eventss" },
    { name: "Careers", icon: Briefcase, path: "/admin/careers" },
    { name: "Applications", icon: FileText, path: "/admin/applicationss" },
    { name: "Settings", icon: Settings, path: "/admin/settingss" },
  ];

  // If on login page, only render children without sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F6F7FB]">
      
      {/* MOBILE HEADER */}
      <div className="md:hidden flex items-center justify-between bg-[#2B176F] p-4 text-white absolute top-0 w-full z-40">
        <div className="flex items-center gap-2">
           <Image src="/logo.jpg" width={28} height={28} alt="logo" className="rounded-md" style={{ width: "auto", height: "auto" }} />
           <h1 className="text-sm font-semibold">Larsun Labs</h1>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* OVERLAY FOR MOBILE */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50
        transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300
        w-[250px] bg-[#2B176F] text-white flex flex-col justify-between p-5 shrink-0 shadow-2xl md:shadow-none
      `}>
        <div>
          <div className="flex items-center gap-3 mb-10">
            <Image
              src="/logo.jpg"
              width={36}
              height={36}
              alt="logo"
              className="rounded-md"
              style={{ width: "auto", height: "auto" }}
            />
            <h1 className="text-sm font-semibold">Larsun Labs</h1>
          </div>

          <ul className="space-y-2 text-sm">
            {menu.map((item, i) => {
              const isActive = pathname === item.path;

              return (
                <Link key={i} href={item.path}>
                  <li
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all
                    ${
                      isActive
                        ? "bg-[#3A248C] text-orange-400 font-bold"
                        : "text-gray-300 hover:bg-[#3A248C]/50"
                    }`}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* USER */}
        <div className="bg-[#3A248C] p-3 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-[#2B176F] font-bold">A</div>
            <div>
              <p className="text-xs font-bold">Admin Account</p>
              <p className="text-[10px] text-gray-400">Chief System Operative</p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (e.detail === 0) return; // Ignore Enter key ghost clicks
              setShowLogoutModal(true);
            }}
            className="w-full bg-[#FF7A00] hover:bg-[#e96f00] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 rounded-lg py-2 text-xs font-bold cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-orange-950/20"
          >
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="flex-1 overflow-y-auto bg-[#F6F7FB] pt-16 md:pt-0 w-full">{children}</div>

      {/* LOGOUT CONFIRMATION MODAL */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[32px] w-full max-w-[400px] overflow-hidden shadow-2xl"
            >
              <div className="bg-[#2B176F] p-8 text-white relative">
                <button 
                  onClick={() => setShowLogoutModal(false)}
                  className="absolute top-6 right-6 text-white/40 hover:text-white transition"
                >
                  <X size={20} />
                </button>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-md">
                  <LogOut size={28} className="text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold">Terminate Session?</h3>
                <p className="text-sm text-white/60 mt-2 font-medium">Are you sure you want to exit the Larsun Labs administrative portal?</p>
              </div>

              <div className="p-8 flex gap-4 bg-gray-50/50">
                <button 
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 py-4 text-sm font-bold text-gray-500 bg-white border border-gray-100 rounded-2xl hover:bg-gray-100 transition shadow-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex-1 py-4 text-sm font-black text-white bg-orange-500 rounded-2xl hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 transition-all active:scale-95"
                >
                  Yes, Sign Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
