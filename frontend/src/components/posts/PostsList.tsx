'use client';

import Link from 'next/link';
import { Share2, Eye, Clock } from 'lucide-react';
import { StrapiPost } from '@/lib/api';

// Define a local Post type that makes documentId optional
export type Post = Omit<StrapiPost, 'documentId'> & {
  documentId?: string;
};

import { renderRichText } from '@/utils/renderRichText';
import styles from '@/styles/RichText.module.css';

const PLACEHOLDER_IMG = "/placeholder-thumbnail.png";

// Type guard to check if content is valid
const isValidContent = (content: unknown): content is Array<{
  type: string;
  children: Array<{
    type: string;
    text: string;
    [key: string]: unknown;
  }>;
}> => {
  if (!Array.isArray(content)) return false;
  
  return content.every(block => {
    if (!block || typeof block !== 'object' || !('children' in block)) return false;
    
    const children = (block as { children: unknown[] }).children;
    if (!Array.isArray(children)) return false;
    
    return children.every(child => 
      child && 
      typeof child === 'object' &&
      'type' in child &&
      typeof (child as { type: unknown }).type === 'string' &&
      'text' in child &&
      typeof (child as { text: unknown }).text === 'string'
    );
  });
};

// Calculate reading time in minutes
function getReadingTime(content: Post['Content']): string {
  if (!isValidContent(content)) return '1 min read';
  
  const text = content
    .map(block => 
      block.children
        .map(child => 'text' in child ? String(child.text) : '')
        .join(' ')
    )
    .join('\n');
    
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}

interface PostsListProps {
  posts: Post[] | StrapiPost[]; // Accept both Post and StrapiPost types
  showTitle?: boolean;
  title?: string;
  loading?: boolean;
}

export function PostsList({ posts, showTitle = false, title = 'Trending Articles', loading = false }: PostsListProps) {
  return (
    <main className="min-h-screen bg-transparent">
      {showTitle && (
        <div className="max-w-2xl mx-auto pt-2 pb-2 px-2 md:px-4 hidden md:block">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
        </div>
      )}
      {/* Posts Feed */}
      <div className="divide-y divide-zinc-800 px-0 md:px-0">
        {posts && posts.length > 0 ? (
          posts.map((post: Post) => (
            <article key={post.id} className="px-2 py-3 md:p-4 hover:bg-zinc-900/50 transition-colors">
              <Link href={`/blog/${post.Slug}`} className="block">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2">
                    {post.Title}
                  </h3>
                  <span className="text-xs text-zinc-400">
                    {new Date(post.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className={`${styles.richText} text-zinc-200 text-sm mb-3 line-clamp-3`}>
                  {isValidContent(post.Content) && renderRichText(post.Content.slice(0, 2))}
                </div>
              </Link>
              <div className="mt-3">
                <Link href={`/blog/${post.Slug}`} className="block">
                  <div className="w-full h-48 md:h-64 lg:h-72 rounded-xl border border-zinc-800 overflow-hidden">
                    <img
                      src={post.Thumbnail ? `${process.env.NEXT_PUBLIC_API_URL}${post.Thumbnail.url}` : PLACEHOLDER_IMG}
                      alt={post.Title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-between text-zinc-400 mt-4 text-sm">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-zinc-400 hover:text-blue-400 transition-colors">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{post.views !== undefined ? post.views.toLocaleString() : '0'}</span>
                  </span>
                  <span className="text-zinc-600">•</span>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      const url = `${window.location.origin}/blog/${post.Slug}`;
                      
                      if (navigator.share) {
                        navigator.share({
                          title: post.Title,
                          text: post.Content[0]?.children[0]?.text?.substring(0, 100) || '',
                          url: url,
                        }).catch(console.error);
                      } else {
                        // Fallback: Copy URL to clipboard
                        navigator.clipboard.writeText(url).then(() => {
                          const button = e.currentTarget;
                          const originalText = button.textContent;
                          button.textContent = 'Link copied!';
                          button.classList.add('text-green-400');
                          setTimeout(() => {
                            button.textContent = originalText;
                            button.classList.remove('text-green-400');
                          }, 2000);
                        }).catch(console.error);
                      }
                    }}
                    className="flex items-center gap-1 text-zinc-400 hover:text-blue-400 transition-colors"
                    aria-label="Share post"
                  >
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
                <span className="flex items-center gap-1 text-zinc-400">
                  <Clock className="h-4 w-4" />
                  <span>{getReadingTime(post.Content)}</span>
                </span>
              </div>
            </article>
          ))
        ) : loading ? (
          <div className="p-4 text-center text-zinc-400">Loading...</div>
        ) : (
          <p className="p-4 text-zinc-400">No posts found. Please check back later for new content.</p>
        )}
      </div>
    </main>
  );
}
