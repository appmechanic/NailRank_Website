import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogListClient from './BlogListClient';
import { fetchBlogCategories, fetchPublishedBlogs } from '../../lib/blogApi';

export const metadata: Metadata = {
  title: 'Blog — NailRanks',
  description:
    'Nail inspiration takes you further. Tips, trends, artist stories and everything nails, curated to inspire, educate and connect our nail community.'
};

export default async function BlogIndexPage() {
  const [{ blogs }, categories] = await Promise.all([
    fetchPublishedBlogs({ limit: 100 }),
    fetchBlogCategories()
  ]);

  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />

      <section className="pt-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#F0C4B7] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Our Blog
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                Nail Inspiration
                <br />
                Takes You <span className="text-[#F0C4B7]">Further</span>
              </h1>
              <p className="text-white/70 text-base leading-relaxed max-w-lg">
                Tips, trends, artist stories and everything nails — curated to inspire, educate and
                connect our nail community.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-[#F0C4B7]/10">
              <Image
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80"
                alt="Nail art hero"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0514]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <BlogListClient blogs={blogs} categories={categories} />

      <Footer />
    </div>
  );
}
