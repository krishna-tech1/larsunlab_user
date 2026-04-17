// "use client";

// import {
//   LayoutDashboard,
//   Box,
//   Truck,
//   Calendar,
//   Briefcase,
//   FileText,
//   Settings,
//   Search,
//   Bell,
// } from "lucide-react";
// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// export default function Dashboard() {
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleLogout = () => {
//     document.cookie =
//       "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00";
//     router.push("/admin/login");
//   };

//   const menu = [
//     { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
//     { name: "Products", icon: Box, path: "/admin/products" },
//     { name: "Distributors", icon: Truck, path: "/admin/distributors" },
//     { name: "Events", icon: Calendar, path: "/admin/events" },
//     { name: "Careers", icon: Briefcase, path: "/admin/careers" },
//     { name: "Applications", icon: FileText, path: "/admin/applications" },
//     { name: "Settings", icon: Settings, path: "/admin/settings" },
//   ];

//   return (
//     <div className="flex h-screen bg-[#F7F8FA]">

//       {/* SIDEBAR */}
//       <div className="w-[250px] bg-[#2B176F] text-white flex flex-col justify-between p-5">

//         <div>
//           <div className="flex items-center gap-3 mb-8">
//             <Image src="/logo.jpg" width={36} height={36} alt="logo" className="rounded-md" />
//             <h1 className="font-semibold text-sm">Larsun Labs</h1>
//           </div>

//           <ul className="space-y-2 text-sm">
//             {menu.map((item, i) => {
//               const isActive = pathname === item.path;

//               return (
//                 <Link key={i} href={item.path}>
//                   <li
//                     className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
//                     ${
//                       isActive
//                         ? "bg-[#3A248C] text-orange-400"
//                         : "text-gray-300 hover:bg-[#3A248C]/50"
//                     }`}
//                   >
//                     <item.icon size={16} />
//                     {item.name}
//                   </li>
//                 </Link>
//               );
//             })}
//           </ul>
//         </div>

//         {/* USER */}
//         <div className="bg-[#3A248C] p-3 rounded-lg">
//           <div className="flex items-center gap-3 mb-3">
//             <div className="w-9 h-9 bg-gray-300 rounded-full" />
//             <div>
//               <p className="text-sm font-medium">Dr. Aris Thorne</p>
//               <p className="text-xs text-gray-300">Chief Administrator</p>
//             </div>
//           </div>

//           <button
//             onClick={handleLogout}
//             className="w-full bg-orange-500 py-2 rounded text-sm font-medium"
//           >
//             Sign Out
//           </button>
//         </div>
//       </div>

//       {/* MAIN */}
//       <div className="flex-1 p-6">

//         {/* TOP */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center bg-white px-4 py-2 rounded-md border w-[380px]">
//             <Search size={16} className="text-gray-400 mr-2" />
//             <input
//               placeholder="Search product, analytics, files..."
//               className="outline-none text-sm w-full"
//             />
//           </div>

//           <div className="flex items-center gap-4">
//             <Bell size={18} className="text-gray-500" />
//             <div className="text-right">
//               <p className="text-sm font-medium">Larsun Labs Admin</p>
//               <p className="text-xs text-gray-400">Session: 4h 12m</p>
//             </div>
//           </div>
//         </div>

//         {/* TITLE */}
//         <h1 className="text-xl font-semibold text-[#2B176F]">
//           Dashboard
//         </h1>
//         <p className="text-sm text-gray-500 mb-6">
//           Welcome back, here is what's happening at Larsun Labs today.
//         </p>

//         {/* STATS — FLAT STYLE */}
//         <div className="bg-white border rounded-lg divide-y mb-6">
//           {[
//             { title: "Total Products", value: "94", badge: "+12%" },
//             { title: "Distributors", value: "28", badge: "Active" },
//             { title: "Job Applications", value: "156", badge: "New" },
//             { title: "Events Count", value: "5", badge: "Upcoming" },
//           ].map((item, i) => (
//             <div key={i} className="flex justify-between p-4 items-center">
//               <div>
//                 <p className="text-xs text-gray-400">{item.title}</p>
//                 <p className="text-lg font-semibold">{item.value}</p>
//               </div>
//               <span className="text-xs bg-gray-100 px-2 py-1 rounded">
//                 {item.badge}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* CONTENT */}
//         <div className="grid grid-cols-3 gap-6">

//           {/* LEFT */}
//           <div className="col-span-2 bg-white border rounded-lg p-4">
//             <h3 className="font-medium mb-4">Recently Added Products</h3>

//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <p className="text-sm font-medium">Neurophern Blue 500mg</p>
//                 <p className="text-xs text-gray-400">Added by Admin • 2 hours ago</p>
//               </div>
//               <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
//                 In Stock
//               </span>
//             </div>

//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm font-medium">Larsun-X Vaccine V2</p>
//                 <p className="text-xs text-gray-400">Added by Research Team • 5 hours ago</p>
//               </div>
//               <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
//                 Research
//               </span>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="bg-[#FF7A00] text-white p-5 rounded-lg">
//             <h3 className="font-medium mb-4">Add Product</h3>
//             <p className="text-sm opacity-90">
//               Administrative tools and quick actions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  LayoutDashboard,
  Box,
  Truck,
  Calendar,
  Briefcase,
  FileText,
  Settings,
  Search,
  Bell,
  Plus,
  ArrowRight,
} from "lucide-react";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");

  const [stats, setStats] = useState({
    products: 0,
    distributors: 0,
    applications: 0,
    events: 0,
  });

  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [recentApplications, setRecentApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeader = () => {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((row) => row.startsWith("admin-token="));
    const token = tokenCookie ? tokenCookie.split("=")[1] : "";
    return {
      Authorization: `Bearer ${token}`,
    };
  };

  const fetchData = async () => {
    try {
      // Parallel fetching for performance
      const [prodRes, appRes, distRes, eventRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, { headers: getAuthHeader() }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, { headers: getAuthHeader() }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/distributors`, { headers: getAuthHeader() }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events`, { headers: getAuthHeader() }),
      ]);

      const [prods, apps, dists, events] = await Promise.all([
        prodRes.json(),
        appRes.json(),
        distRes.json(),
        eventRes.json(),
      ]);

      setStats({
        products: Array.isArray(prods) ? prods.length : 0,
        applications: Array.isArray(apps) ? apps.length : 0,
        distributors: Array.isArray(dists) ? dists.length : 0,
        events: Array.isArray(events) ? events.length : 0,
      });

      setRecentProducts(Array.isArray(prods) ? prods.slice(0, 2) : []);
      setRecentApplications(Array.isArray(apps) ? apps.slice(0, 4) : []);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Products", icon: Box, path: "/admin/products" },
    { name: "Distributors", icon: Truck, path: "/admin/distributors" },
    { name: "Events", icon: Calendar, path: "/admin/eventss" },
    { name: "Careers", icon: Briefcase, path: "/admin/careers" },
    { name: "Applications", icon: FileText, path: "/admin/applicationss" },
    { name: "Settings", icon: Settings, path: "/admin/settingss" },
  ];

  const filteredProducts = recentProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredApps = recentApplications.filter(a => 
    a.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.job?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#F6F7FB]">
      <div className="flex-1 p-6 overflow-y-auto">
        {/* TOP BAR */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
          <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm w-full md:w-[420px]">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products or candidates..."
              className="outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <Bell size={18} className="text-gray-500 hidden md:block" />
            <div className="text-right">
              <p className="text-sm font-medium text-[#2B176F]">Larsun Admin</p>
              <p className="text-xs text-gray-400 font-mono">LIVE CONNECTED</p>
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="w-[4px] h-[24px] bg-orange-500 rounded-sm"></div>
            <h1 className="text-[22px] font-semibold text-[#2B176F]">Dashboard</h1>
          </div>
          <p className="text-[13px] text-gray-500 mt-1 ml-[7px]">
            Real-time operations center for Larsun Labs ecosystem.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-6">
          <StatCard emoji="📦" label="Total Products" value={stats.products} color="green" />
          <StatCard emoji="🚚" label="Distributors" value={stats.distributors} color="orange" />
          <StatCard emoji="📄" label="Job Applications" value={stats.applications} color="red" />
          <StatCard emoji="📅" label="Events Count" value={stats.events} color="purple" />
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-[18px] font-semibold text-[#2B176F]">Primary Assets</h2>
              <Link href="/admin/products" className="text-[13px] font-bold text-orange-500 hover:underline flex items-center gap-1">
                Management Hub <ArrowRight size={14} />
              </Link>
            </div>

            {/* RECENT PRODUCTS */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mb-5 shadow-sm">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-50 bg-gray-50/50">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <p className="text-[14px] font-bold text-[#2B176F]">Recent Clinical Inventory</p>
              </div>
              {filteredProducts.length > 0 ? filteredProducts.map((p) => (
                <div key={p.id} className="flex justify-between items-center px-5 py-4 border-b border-gray-50 hover:bg-gray-50/30 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-lg">💊</div>
                    <div>
                      <p className="text-[14px] font-bold text-[#2B176F]">{p.name}</p>
                      <p className="text-[11px] text-gray-400 capitalize">{p.category} • {p.type}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-tighter bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Live</span>
                </div>
              )) : <div className="p-10 text-center text-gray-400 text-sm">No products matched search</div>}
            </div>

            {/* RECENT APPLICATIONS */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-50 bg-gray-50/50">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-[14px] font-bold text-[#2B176F]">New Talent Pipeline</p>
              </div>
              {filteredApps.length > 0 ? filteredApps.map((app) => (
                <div key={app.id} className="flex justify-between items-center px-5 py-4 border-b border-gray-50 hover:bg-gray-50/30 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#2B176F]">{app.fullName[0]}</div>
                    <div>
                      <p className="text-[14px] font-bold text-[#2B176F]">{app.fullName}</p>
                      <p className="text-[11px] text-gray-400">{app.job?.title || "Position Pending"} • {app.status}</p>
                    </div>
                  </div>
                  <Link href="/admin/applicationss" className="text-[11px] font-bold text-[#2B176F] underline">Review</Link>
                </div>
              )) : <div className="p-10 text-center text-gray-400 text-sm">No applications matched search</div>}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="space-y-6">
            <h2 className="text-[18px] font-semibold text-[#2B176F]">Global Controls</h2>
            <div className="bg-gradient-to-br from-[#2B176F] to-[#4B2FD1] rounded-3xl p-6 text-white shadow-xl">
              <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2">
                <Plus size={18} className="text-orange-400" /> Rapid Operations
              </h3>
              <div className="space-y-3">
                <ActionButton label="Catalog Product" icon="📦" onClick={() => router.push('/admin/products')} />
                <ActionButton label="Add Distributor" icon="🚚" onClick={() => router.push('/admin/distributors')} />
                <ActionButton label="Broadcast Role" icon="📄" onClick={() => router.push('/admin/careers')} />
              </div>
              <div className="mt-8 bg-white/10 rounded-2xl p-4 border border-white/10">
                <p className="text-[13px] font-bold mb-1 opacity-80 uppercase tracking-widest text-orange-400">System Tip</p>
                <p className="text-[12px] leading-relaxed">Cross-reference clinical inventory with current applications to optimize recruitment specialized for upcoming logistics.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <h3 className="text-[13px] font-black text-[#2B176F] mb-4 uppercase tracking-tighter">Next Milestone</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex flex-col items-center justify-center border border-indigo-100">
                  <span className="text-[8px] font-black text-gray-400 uppercase">Dec</span>
                  <span className="text-[16px] font-black text-[#2B176F]">12</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#2B176F]">Annual Audit</p>
                  <p className="text-[11px] text-gray-400 font-medium">Compliance Review • 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ emoji, label, value, color }: any) {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-50 flex flex-col justify-between">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-50 rounded-xl flex items-center justify-center text-lg md:text-xl mb-3 md:mb-4 border border-gray-100">
        {emoji}
      </div>
      <div>
        <p className="text-[10px] md:text-[12px] font-bold text-gray-400 uppercase tracking-tighter truncate">{label}</p>
        <h2 className="text-[20px] md:text-[26px] font-black text-[#2B176F] leading-tight">{value}</h2>
      </div>
    </div>
  );
}

function ActionButton({ label, icon, onClick }: any) {
  return (
    <button onClick={onClick} className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all rounded-2xl px-4 py-3 border border-white/5 active:scale-95">
      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30">{icon}</div>
      <span className="text-[14px] font-bold">{label}</span>
      <ArrowRight size={14} className="ml-auto opacity-40" />
    </button>
  );
}
