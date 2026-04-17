"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful 🎉");

        // Set auth cookies
        const maxAge = "max-age=2592000"; // Permanent session or default
        document.cookie = `admin-token=${data.token}; path=/; ${maxAge}`;
        document.cookie = `admin-auth=true; path=/; ${maxAge}`;

        // Store user info
        localStorage.setItem("admin-user", JSON.stringify(data.admin));

        router.push("/admin/dashboard");
      } else {
        toast.error(data.error || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Server connection failed. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen font-sans flex-col md:flex-row">
      {/* LEFT */}
      <div className="hidden md:flex w-1/2 bg-[#2B176F] text-white flex-col justify-center px-10 xl:px-20">
        <div className="flex items-center gap-3 mb-12">
          <Image
            src="/logo.jpg"
            alt="Larsun Labs Logo"
            width={50}
            height={50}
            className="rounded-md shadow-sm"
            style={{ height: "auto" }}
          />
          <h1 className="text-lg font-semibold">Larsun Labs</h1>
        </div>

        <h2 className="text-[52px] font-semibold leading-[1.1]">
          Precision in <br />
          <span className="text-[#FF7A00] font-bold">Healthcare</span>
        </h2>

        <p className="mt-6 text-gray-300 text-[14px] max-w-sm">
          Admin access to manage products, distributors, and careers. Powered by
          the Larsun Labs Clinical Precision Framework.
        </p>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 flex-1 bg-[#F3F4F6] flex items-center justify-center p-4 md:p-0">
        <div className="bg-white w-full max-w-[420px] p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          
          {/* MOBILE LOGO (Visible only on small screens) */}
          <div className="md:hidden flex items-center gap-3 mb-8">
            <Image
              src="/logo.jpg"
              alt="Larsun Labs Logo"
              width={40}
              height={40}
              className="rounded-md shadow-sm ring-1 ring-gray-100"
              style={{ height: "auto" }}
            />
            <h1 className="text-lg font-extrabold text-[#2B176F] tracking-tight">Larsun Labs</h1>
          </div>

          <h2 className="text-[18px] font-bold text-[#2B176F]">
            Admin Login
          </h2>
          <p className="text-[13px] text-gray-500 mt-1 mb-7">
            Enter your credentials to access the dashboard
          </p>

          <form onSubmit={handleLogin}>
            {/* EMAIL */}
          <div className="mb-5">
            <label className="text-[11px] font-semibold text-gray-400 tracking-wider">
              CORPORATE EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@larsunlabs.com"
              className="w-full mt-2 px-4 py-3 rounded-md bg-[#F3F4F6] text-gray-900 font-medium placeholder:text-gray-400 text-[14px] outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <div className="flex justify-between">
              <label className="text-[11px] font-semibold text-gray-400 tracking-wider">
                PASSWORD
              </label>
            </div>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-md bg-[#F3F4F6] text-gray-900 font-medium placeholder:text-gray-400 text-[14px] outline-none pr-10 focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>


            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF7A00] hover:bg-[#e96f00] text-white py-3 rounded-md text-[14px] font-medium transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-[11px] text-gray-400">
            © LARSUN LABS ADMIN PANEL
          </div>
        </div>
      </div>
    </div>
  );
}
