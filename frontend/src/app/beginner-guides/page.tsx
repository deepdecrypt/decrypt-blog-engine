'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchPosts } from '@/lib/api';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface Post {
  id: number;
  Title: string;
  Content: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  Slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Thumbnail?: {
    id: number;
    url: string;
  };
}

function getPlainText(content: Post['Content']): string {
  return content
    .map(block => 
      block.children
        .map(child => child.text)
        .join('')
    )
    .join('\n');
}

const PLACEHOLDER_IMG = "/placeholder-thumbnail.png";

export default function BeginnerGuidesPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadPosts = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      const newPosts = await fetchPosts(page);
      if (newPosts && newPosts.length > 0) {
        setPosts(prev => [...prev, ...newPosts]);
        setPage(prev => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadPosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <main className="min-h-screen bg-transparent">
      <div className="max-w-2xl mx-auto pt-6 pb-2 px-4">
        <h2 className="text-2xl font-bold mb-6">Beginner Guides</h2>
      </div>
      {/* Posts Feed */}
      <div className="divide-y divide-zinc-800">
        {posts && posts.length > 0 ? (
          posts.map((post: Post) => (
            <article key={post.id} className="p-4 hover:bg-zinc-900/50 transition-colors">
              <Link href={`/blog/${post.Slug}`} className="block">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2">
                    {post.Title}
                  </h3>
                  <span className="text-xs text-zinc-400">{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
                <p className="text-zinc-200 text-sm mb-3 line-clamp-3">
                  {getPlainText(post.Content).slice(0, 180)}...
                </p>
              </Link>
              <div className="mt-3">
                <Link href={`/blog/${post.Slug}`} className="block">
                  <div className="w-full h-48 rounded-xl border border-zinc-800 overflow-hidden">
                    <img
                      src={post.Thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}${post.Thumbnail.url}` : PLACEHOLDER_IMG}
                      alt={post.Title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-zinc-400 mt-3">
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm">Comment</span>
                </button>
                <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm">Like</span>
                </button>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </article>
          ))
        ) : (
          <p className="p-4 text-zinc-400">No posts found. Please check back later for new content.</p>
        )}
        {loading && (
          <div className="p-4 text-center text-zinc-400">
            Loading more posts...
          </div>
        )}
      </div>
    </main>
  );
} 