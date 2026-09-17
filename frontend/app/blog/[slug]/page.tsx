import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogSidebar from './BlogSidebar';
import ShareRow from './ShareRow';
import { fetchBlogBySlug, fetchBlogSlugs } from '../../../lib/blogApi';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await fetchBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchBlogBySlug(slug);
  if (!data) return { title: 'Blog — NailRanks' };
  const { blog } = data;
  return {
    title: blog.metaTitle || `${blog.title} — NailRanks Blog`,
    description: blog.metaDescription || blog.shortDescription,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.shortDescription,
      images: blog.coverImage ? [blog.coverImage] : []
    }
  };
}

const formatDate = (value: string | null) => {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await fetchBlogBySlug(slug);
  if (!data) notFound();

  const { blog, latest, categories } = data;

  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />

      <section className="pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-6">
            <Link href="/" className="hover:text-[#F0C4B7]">
              Home
            </Link>
            <i className="ri-arrow-right-s-line" />
            <Link href="/blog" className="hover:text-[#F0C4B7]">
              Blog
            </Link>
            <i className="ri-arrow-right-s-line" />
            <span className="text-white/70">{blog.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              {blog.category && (
                <span className="inline-block px-3 py-1 rounded-full bg-[#F0C4B7]/15 text-[#F0C4B7] text-[11px] font-semibold uppercase tracking-widest mb-4">
                  {blog.category.name}
                </span>
              )}
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight text-white mb-4">
                {blog.title}
              </h1>
              {blog.shortDescription && (
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                  {blog.shortDescription}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#F0C4B7]/20 text-[#F0C4B7] flex items-center justify-center">
                    <i className="ri-user-line" />
                  </span>
                  <span>
                    <span className="text-white font-medium block leading-tight">
                      By {blog.authorName}
                    </span>
                    <span className="text-[11px] text-white/40">{blog.authorRole}</span>
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="ri-calendar-line text-[#F0C4B7]" />
                  {formatDate(blog.publishDate)}
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="ri-eye-line text-[#F0C4B7]" />
                  {blog.views} views
                </span>
                {blog.readTime > 0 && (
                  <span className="flex items-center gap-1.5">
                    <i className="ri-time-line text-[#F0C4B7]" />
                    {blog.readTime} min read
                  </span>
                )}
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-[#F0C4B7]/10">
              {blog.coverImage ? (
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#2a0d3a] text-[#F0C4B7]/40">
                  <i className="ri-image-line text-5xl" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10">
        <article>
          <div
            className="blog-content prose prose-invert prose-lg max-w-none prose-headings:font-[family-name:var(--font-playfair)] prose-headings:text-white prose-p:text-white/80 prose-a:text-[#F0C4B7] prose-strong:text-white prose-img:rounded-2xl prose-blockquote:border-[#F0C4B7] prose-blockquote:text-white/70"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.tags?.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="text-sm text-white/60 mr-2">Tags:</span>
              {blog.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-0.5 rounded-full bg-[#1a0828] border border-[#F0C4B7]/20 text-xs text-white/70"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          <ShareRow title={blog.title} slug={blog.slug} />
        </article>

        <BlogSidebar categories={categories} latest={latest} />
      </section>

      <Footer />
    </div>
  );
}
