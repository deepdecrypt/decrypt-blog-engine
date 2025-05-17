import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { TrendingUp, Clock, Flame, Bookmark, Share2, BookOpen, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';
import { SidebarNavigation } from '@/components/layout/sidebar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deep Decrypt",
  description: "Your source for in-depth analysis and insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-zinc-900 text-white`}>
        <Header />
        <div className="min-h-screen pt-16">
          {/* Left Sidebar */}
          <div className="hidden lg:block fixed top-16 left-0 w-64 h-[calc(100vh-4rem)]">
            <SidebarNavigation />
          </div>
          
          {/* Main Content Area */}
          <div className="lg:ml-64 lg:mr-80">
            <main className="max-w-2xl mx-auto w-full px-4 py-6">
              {children}
            </main>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block fixed top-16 right-0 w-80 h-[calc(100vh-4rem)]">
            <aside className="h-full bg-zinc-950/95 border-l border-zinc-800 shadow-xl py-6 px-3">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                🛠️ Top Tools of the Week
              </h2>
              <div className="overflow-y-auto pr-1 divide-y divide-zinc-800" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 py-3">
                    <img src="/placeholder-tool.png" alt={`Tool ${i + 1}`} className="w-12 h-12 rounded-md object-cover border border-zinc-700" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-zinc-100 leading-tight">ToolName {i + 1}</div>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${i % 4 === 0 ? 'bg-blue-900 text-blue-300' : i % 4 === 1 ? 'bg-green-900 text-green-300' : i % 4 === 2 ? 'bg-purple-900 text-purple-300' : 'bg-yellow-900 text-yellow-300'}`}>{['AI','Productivity','Collab','Optimizer'][i % 4]}</span>
                      </div>
                      <div className="text-xs text-zinc-400 leading-snug">This is a short description for Tool {i + 1}.</div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
