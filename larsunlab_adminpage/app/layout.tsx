import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Larsun Admin | Portal Control Center",
  description: "Secure administrative management for Larsun Labs operations, candidates, and distributions.",
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans`}
    >
      <body className="min-h-full flex flex-col">{children} <Toaster position="top-right" /></body>
    </html>
  );
}
