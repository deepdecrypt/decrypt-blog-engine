import { fetchPostBySlug } from '@/lib/api';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { renderRichText } from '@/utils/renderRichText';
import styles from '@/styles/RichText.module.css';

import { StrapiPost } from '@/lib/api';

interface BlogPost extends Omit<StrapiPost, 'documentId'> {
  Content: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
      strikethrough?: boolean;
      code?: boolean;
    }>;
  }>;
  Thumbnail?: {
    id: number;
    url: string;
  };
}

function getPlainText(content: BlogPost['Content']): string {
  return content
    .map(block => 
      block.children
        .map(child => child.text)
        .join('')
    )
    .join('\n');
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Post Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The post you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">← Back to Home</Link>
        </Button>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.Title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Avatar>
              <AvatarImage src="/avatar.png" alt="Author" />
              <AvatarFallback>DD</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Deep Decrypt</p>
              <p className="text-sm">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </header>

        {post.Thumbnail && (
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <img 
              src={`${process.env.NEXT_PUBLIC_API_URL}${post.Thumbnail.url}`}
              alt={post.Title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        
        <div className={`${styles.richText} max-w-3xl mx-auto`}>
          {renderRichText(post.Content as unknown as Array<{
            type: string;
            children: Array<{
              type: string;
              text: string;
              bold?: boolean;
              italic?: boolean;
              underline?: boolean;
              strikethrough?: boolean;
              code?: boolean;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>)}
        </div>

        <Separator className="my-12" />

        <footer className="flex justify-between items-center">
          <Button variant="ghost" asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">Share</Button>
            <Button variant="outline" size="sm">Subscribe</Button>
          </div>
        </footer>
      </article>
    </main>
  );
}
