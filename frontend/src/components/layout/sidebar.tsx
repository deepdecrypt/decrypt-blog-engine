"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TrendingUp, BookOpen, GraduationCap, Users } from 'lucide-react';

export function SidebarNavigation() {
  const pathname = usePathname();
  const isTrendingActive = pathname === '/' || pathname === '/trendings';
  return (
    <aside className="h-full bg-zinc-950/95 border-r border-zinc-800 shadow-xl py-6 px-3">
      <nav aria-label="Sidebar" className="flex flex-col gap-2">
        <ul className="space-y-1">
          <li>
            <Link href="/trendings" aria-current={isTrendingActive ? 'page' : undefined} className={`group flex items-center gap-3 rounded-lg px-4 py-3 font-bold text-base transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${isTrendingActive ? 'bg-[#3a2320] text-[#c1440e] shadow' : 'text-zinc-200 hover:bg-zinc-800 hover:text-primary'}`}>
              <TrendingUp className={`h-5 w-5 ${isTrendingActive ? 'text-[#c1440e]' : 'text-zinc-400 group-hover:text-primary'} transition-colors group-hover:scale-110 transition-transform`} />
              <span>Trendings</span>
            </Link>
          </li>
          <li>
            <Link href="/in-depth-review" aria-current={pathname === '/in-depth-review' ? 'page' : undefined} className={`group flex items-center gap-3 rounded-lg px-4 py-3 font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${pathname === '/in-depth-review' ? 'bg-[#3a2320] text-[#c1440e] shadow' : 'text-zinc-200 hover:bg-zinc-800 hover:text-primary'}`}>
              <BookOpen className={`h-5 w-5 ${pathname === '/in-depth-review' ? 'text-[#c1440e]' : 'text-zinc-400 group-hover:text-primary'} transition-colors group-hover:scale-110 transition-transform`} />
              <span>In-Depth Review</span>
            </Link>
          </li>
          <li>
            <Link href="/beginner-guides" aria-current={pathname === '/beginner-guides' ? 'page' : undefined} className={`group flex items-center gap-3 rounded-lg px-4 py-3 font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${pathname === '/beginner-guides' ? 'bg-[#3a2320] text-[#c1440e] shadow' : 'text-zinc-200 hover:bg-zinc-800 hover:text-primary'}`}>
              <GraduationCap className={`h-5 w-5 ${pathname === '/beginner-guides' ? 'text-[#c1440e]' : 'text-zinc-400 group-hover:text-primary'} transition-colors group-hover:scale-110 transition-transform`} />
              <span>Beginner Guides</span>
            </Link>
          </li>
          <li>
            <Link href="/community" aria-current={pathname === '/community' ? 'page' : undefined} className={`group flex items-center gap-3 rounded-lg px-4 py-3 font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 ${pathname === '/community' ? 'bg-[#3a2320] text-[#c1440e] shadow' : 'text-zinc-200 hover:bg-zinc-800 hover:text-primary'}`}>
              <Users className={`h-5 w-5 ${pathname === '/community' ? 'text-[#c1440e]' : 'text-zinc-400 group-hover:text-primary'} transition-colors group-hover:scale-110 transition-transform`} />
              <span>Join Community</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
} 