const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://admin.nailranks.com';

export interface BlogCategory {
  _id: string;
  name: string;
  slug: string;
  count: number;
}

export interface BlogSummary {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  coverImage: string | null;
  category: { _id: string; name: string; slug: string } | null;
  tags: string[];
  authorName: string;
  publishDate: string | null;
  readTime: number;
  views: number;
  createdAt: string;
}

export interface Blog extends BlogSummary {
  content: string;
  authorRole: string;
  authorImage: string | null;
  metaTitle: string;
  metaDescription: string;
  updatedAt: string;
}

interface ListResponse {
  success: boolean;
  blogs: BlogSummary[];
  total: number;
  totalPages: number;
}

interface DetailResponse {
  success: boolean;
  blog: Blog;
  latest: Pick<BlogSummary, 'title' | 'slug' | 'coverImage' | 'publishDate' | '_id'>[];
  categories: BlogCategory[];
}

interface CategoriesResponse {
  success: boolean;
  categories: BlogCategory[];
}

interface SlugsResponse {
  success: boolean;
  blogs: { slug: string; updatedAt: string }[];
}

const safeFetch = async <T>(url: string, revalidate: number | false = false): Promise<T | null> => {
  try {
    const res = await fetch(url, {
      next: revalidate === false ? { revalidate: false } : { revalidate }
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
};

export async function fetchPublishedBlogs(params: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
} = {}): Promise<{ blogs: BlogSummary[]; total: number; totalPages: number }> {
  const qs = new URLSearchParams();
  if (params.page) qs.set('page', String(params.page));
  qs.set('limit', String(params.limit ?? 100));
  if (params.category && params.category !== 'all') qs.set('category', params.category);
  if (params.search) qs.set('search', params.search);
  const data = await safeFetch<ListResponse>(`${API_BASE}/api/blogs?${qs.toString()}`);
  if (!data) return { blogs: [], total: 0, totalPages: 1 };
  return { blogs: data.blogs, total: data.total, totalPages: data.totalPages };
}

export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  const data = await safeFetch<CategoriesResponse>(`${API_BASE}/api/blogs/categories`);
  return data?.categories ?? [];
}

export async function fetchBlogBySlug(slug: string): Promise<DetailResponse | null> {
  return safeFetch<DetailResponse>(`${API_BASE}/api/blogs/${slug}`);
}

export async function fetchBlogSlugs(): Promise<string[]> {
  const data = await safeFetch<SlugsResponse>(`${API_BASE}/api/blogs/slugs`);
  return data?.blogs?.map((b) => b.slug) ?? [];
}
