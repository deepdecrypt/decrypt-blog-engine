"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search, Twitter, Facebook, Instagram, Linkedin, Menu, X, Send } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [mobileTab, setMobileTab] = useState<'trending' | 'tools'>('trending');
  const router = useRouter();
  const pathname = usePathname();

  // Update tab based on route
  useEffect(() => {
    if (pathname === '/' || pathname === '/trendings') setMobileTab('trending');
    else if (pathname === '/in-depth-review' || pathname === '/beginner-guides' || pathname === '/community') setMobileTab('trending');
  }, [pathname]);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch('');
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[9999] border-b border-zinc-800 bg-zinc-900"
        style={{
          background: 'linear-gradient(120deg, #18181b 0%, #3a2320 60%, #b6b09a 100%)',
        }}
      >
        <div className="w-full md:container md:mx-auto md:max-w-6xl">
          <div className="flex h-16 items-center justify-between px-6 md:px-4">
            {/* Left side - Logo */}
            <Link href="/" className="flex items-center">
              <img src="/Deep Decrypt.svg" alt="Deep Decrypt Logo" className="h-6 w-auto" />
        </Link>

            {/* Center - Search (desktop) */}
            <form
              onSubmit={handleSearch}
              className="hidden md:block flex-1 max-w-xl mx-8"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-200" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search articles, topics, or authors..."
                  className="w-full rounded-full bg-zinc-900 py-2 pl-10 pr-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </form>

            {/* Right side - Social Links and Subscribe (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-[#1DA1F2]">
                <Twitter className="h-5 w-5 drop-shadow" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#4267B2]">
                <Facebook className="h-5 w-5 drop-shadow" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#E1306C]">
                <Instagram className="h-5 w-5 drop-shadow" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#0077B5]">
                <Linkedin className="h-5 w-5 drop-shadow" />
              </Button>
              <Button className="ml-4 bg-black text-white hover:bg-zinc-800 rounded-full px-4 py-2 font-semibold flex items-center gap-2">
                <Send className="h-4 w-4 text-white" />
                Subscribe Newsletter
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>
      </header>
      {/* Mobile: Search bar always visible below navbar */}
      <div className="md:hidden px-4 pt-3 pb-2 bg-zinc-900 border-b border-zinc-800 flex flex-col gap-2 sticky top-16 z-40">
        <form onSubmit={handleSearch} className="mb-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-200" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search articles, topics, or authors..."
              className="w-full rounded-full bg-zinc-800 py-2 pl-10 pr-4 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </form>
        {/* Mobile Tab Bar */}
        <div className="flex mt-1 mb-2 rounded-full bg-zinc-800 p-1 shadow-inner">
          <button
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none ${mobileTab === 'trending' ? 'bg-primary text-white shadow' : 'bg-transparent text-zinc-300'}`}
            onClick={() => {
              setMobileTab('trending');
              router.push(pathname + '?tab=trending', { scroll: false });
            }}
            aria-selected={mobileTab === 'trending'}
            type="button"
          >
            {pathname === '/' || pathname === '/trendings' ? 'Trending' :
              pathname === '/in-depth-review' ? 'In-Depth Review' :
              pathname === '/beginner-guides' ? 'Beginner Guides' :
              pathname === '/community' ? 'Community' : 'Trending'}
          </button>
          <button
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all focus:outline-none ${mobileTab === 'tools' ? 'bg-primary text-white shadow' : 'bg-transparent text-zinc-300'}`}
            onClick={() => {
              setMobileTab('tools');
              router.push(pathname + '?tab=tools', { scroll: false });
            }}
            aria-selected={mobileTab === 'tools'}
            type="button"
          >
            Top Tools
          </button>
        </div>
      </div>
      {/* Mobile menu (only social icons) with overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="md:hidden fixed top-16 left-0 w-full z-50 px-4 pb-4 animate-in fade-in slide-in-from-top-2 bg-zinc-900 border-b border-zinc-800">
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2 mb-4 mt-2">
              <Link href="/trendings" onClick={() => setMobileOpen(false)} className={`rounded-lg px-4 py-2 font-semibold text-base ${pathname === '/' || pathname === '/trendings' ? 'bg-primary text-white' : 'text-zinc-200 hover:bg-zinc-800 hover:text-primary'}`}>Trending</Link>
              <Link href="/in-depth-review" onClick={() => setMobileOpen(false)} className={`rounded-lg px-4 py-2 font-semibold text-base ${pathname === '/in-depth-review' ? 'bg-primary text-white' : 'text-zinc-200 hover:bg-zinc-800 hover:text-primary'}`}>In-Depth Review</Link>
              <Link href="/beginner-guides" onClick={() => setMobileOpen(false)} className={`rounded-lg px-4 py-2 font-semibold text-base ${pathname === '/beginner-guides' ? 'bg-primary text-white' : 'text-zinc-200 hover:bg-zinc-800 hover:text-primary'}`}>Beginner Guides</Link>
              <Link href="/community" onClick={() => setMobileOpen(false)} className={`rounded-lg px-4 py-2 font-semibold text-base ${pathname === '/community' ? 'bg-primary text-white' : 'text-zinc-200 hover:bg-zinc-800 hover:text-primary'}`}>Join Community</Link>
            </div>
            <div className="flex flex-col gap-3 mb-2 items-start">
              <span className="text-zinc-300 text-sm font-semibold mb-1 mt-1 animate-pulse animate-duration-700 animate-ease-in-out">Follow us</span>
              <Button variant="ghost" size="icon" className="flex items-center gap-2 text-white hover:text-[#1DA1F2] w-full justify-start">
                <Twitter className="h-5 w-5 drop-shadow" />
                <span className="text-xs">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="flex items-center gap-2 text-white hover:text-[#4267B2] w-full justify-start">
                <Facebook className="h-5 w-5 drop-shadow" />
                <span className="text-xs">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="flex items-center gap-2 text-white hover:text-[#E1306C] w-full justify-start">
                <Instagram className="h-5 w-5 drop-shadow" />
                <span className="text-xs">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="flex items-center gap-2 text-white hover:text-[#0077B5] w-full justify-start">
                <Linkedin className="h-5 w-5 drop-shadow" />
                <span className="text-xs">LinkedIn</span>
              </Button>
            </div>
          </div>
        </>
      )}
      {/* Sticky bottom CTA for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 px-4 pb-4 pointer-events-none">
        <Button className="w-full bg-white text-black hover:bg-primary/90 rounded-full px-4 py-2 font-semibold flex items-center gap-2 shadow-lg pointer-events-auto">
          <Send className="h-4 w-4" />
          Subscribe Newsletter
          </Button>
      </div>
    </>
  );
} 