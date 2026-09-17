'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogCategory, BlogSummary } from '../../lib/blogApi';

interface Props {
  blogs: BlogSummary[];
  categories: BlogCategory[];
}

type Sort = 'latest' | 'popular';

const PAGE_SIZE = 6;

const formatDate = (value: string | null) => {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};

export default function BlogListClient({ blogs, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<Sort>('latest');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    const list = blogs.filter((b) => {
      if (activeCategory !== 'all' && b.category?.slug !== activeCategory) return false;
      if (!s) return true;
      return (
        b.title.toLowerCase().includes(s) ||
        b.shortDescription.toLowerCase().includes(s) ||
        b.tags.some((t) => t.toLowerCase().includes(s))
      );
    });
    if (sort === 'popular') {
      list.sort((a, b) => b.views - a.views);
    } else {
      list.sort((a, b) => {
        const av = a.publishDate ? new Date(a.publishDate).getTime() : new Date(a.createdAt).getTime();
        const bv = b.publishDate ? new Date(b.publishDate).getTime() : new Date(b.createdAt).getTime();
        return bv - av;
      });
    }
    return list;
  }, [blogs, activeCategory, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const onCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setPage(1);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
      <div className="max-w-2xl mx-auto -mt-8 mb-8 relative z-10">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search blogs..."
            className="w-full h-12 pl-12 pr-4 rounded-full bg-[#1a0828]/80 backdrop-blur border border-[#F0C4B7]/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F0C4B7]/60"
          />
          <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-[#F0C4B7]" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = activeCategory === c.slug;
            return (
              <button
                key={c._id}
                onClick={() => onCategoryChange(c.slug)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  active
                    ? 'bg-[#F0C4B7] text-[#0d0514]'
                    : 'bg-[#1a0828] border border-[#F0C4B7]/20 text-white/70 hover:text-[#F0C4B7] hover:border-[#F0C4B7]/50'
                }`}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as Sort);
              setPage(1);
            }}
            className="h-9 pl-3 pr-9 rounded-lg bg-[#1a0828] border border-[#F0C4B7]/20 text-sm text-white appearance-none focus:outline-none focus:border-[#F0C4B7]/60"
          >
            <option value="latest">Latest</option>
            <option value="popular">Most Popular</option>
          </select>
          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50" />
        </div>
      </div>

      {paged.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-[#F0C4B7]/20 rounded-2xl">
          <i className="ri-article-line text-4xl text-[#F0C4B7]/40 mb-3" />
          <p className="text-white/60">No blogs match your filter yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paged.map((b) => (
            <Link
              key={b._id}
              href={`/blog/${b.slug}`}
              className="group bg-[#1a0828] border border-[#F0C4B7]/10 rounded-2xl overflow-hidden hover:border-[#F0C4B7]/40 transition-all"
            >
              <div className="relative h-48 bg-[#2a0d3a]">
                {b.coverImage ? (
                  <Image
                    src={b.coverImage}
                    alt={b.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#F0C4B7]/40">
                    <i className="ri-image-line text-4xl" />
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  {b.category ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F0C4B7]/15 text-[#F0C4B7] text-[11px] font-semibold uppercase tracking-widest">
                      {b.category.name}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-white/40">{formatDate(b.publishDate)}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#F0C4B7] transition-colors mb-2 line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-3 mb-4">
                  {b.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#F0C4B7]">
                  Read More <i className="ri-arrow-right-line" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            disabled={currentPage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="w-9 h-9 rounded-full border border-[#F0C4B7]/20 text-white/70 hover:text-[#F0C4B7] hover:border-[#F0C4B7]/50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <i className="ri-arrow-left-s-line" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => {
            const n = i + 1;
            const active = n === currentPage;
            return (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
                  active
                    ? 'bg-[#F0C4B7] text-[#0d0514]'
                    : 'border border-[#F0C4B7]/20 text-white/70 hover:text-[#F0C4B7] hover:border-[#F0C4B7]/50'
                }`}
              >
                {n}
              </button>
            );
          })}
          <button
            disabled={currentPage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="w-9 h-9 rounded-full border border-[#F0C4B7]/20 text-white/70 hover:text-[#F0C4B7] hover:border-[#F0C4B7]/50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <i className="ri-arrow-right-s-line" />
          </button>
        </div>
      )}
    </section>
  );
}
