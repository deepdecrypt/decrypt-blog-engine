import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground">
              Deep Decrypt is your source for in-depth analysis and insights on technology, science, and innovation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Deep Decrypt. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 