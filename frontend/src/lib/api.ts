interface StrapiPost {
  id: number;
  documentId: string;
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

export async function fetchPosts(page: number = 1, limit: number = 10) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?pagination[page]=${page}&pagination[pageSize]=${limit}&populate=Thumbnail`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[Slug][$eq]=${slug}&populate=*`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}
