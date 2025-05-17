import { fetchPostBySlug } from '@/lib/api';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogPost {
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
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {post.Content.map((block: BlogPost['Content'][0], index: number) => (
            <p key={index} className="mb-4">
              {block.children.map((child: BlogPost['Content'][0]['children'][0], childIndex: number) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          ))}
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
