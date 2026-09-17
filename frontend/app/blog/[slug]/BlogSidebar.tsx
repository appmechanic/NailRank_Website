'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { BlogCategory, BlogSummary } from '../../../lib/blogApi';

interface Props {
  categories: BlogCategory[];
  latest: Pick<BlogSummary, 'title' | 'slug' | 'coverImage' | 'publishDate' | '_id'>[];
}

const formatDate = (value: string | null) => {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};

export default function BlogSidebar({ categories, latest }: Props) {
  const [search, setSearch] = useState('');

  return (
    <aside className="space-y-6">
      <div className="bg-[#1a0828] border border-[#F0C4B7]/10 rounded-2xl p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Search Articles</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (search.trim()) window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
          }}
          className="relative"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search blogs..."
            className="w-full h-11 pl-10 pr-3 rounded-full bg-[#0d0514] border border-[#F0C4B7]/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F0C4B7]/60"
          />
          <i className="ri-search-line absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F0C4B7]" />
        </form>
      </div>

      <div className="bg-[#1a0828] border border-[#F0C4B7]/10 rounded-2xl p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c._id}>
              <Link
                href={c.slug === 'all' ? '/blog' : `/blog?category=${c.slug}`}
                className="flex items-center justify-between text-sm text-white/70 hover:text-[#F0C4B7] transition-colors"
              >
                <span>{c.name}</span>
                <span className="text-xs text-white/40">{c.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#1a0828] border border-[#F0C4B7]/10 rounded-2xl p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Latest Posts</h3>
        <ul className="space-y-4">
          {latest.map((p) => (
            <li key={p._id}>
              <Link href={`/blog/${p.slug}`} className="flex items-center gap-3 group">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#2a0d3a] shrink-0">
                  {p.coverImage ? (
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#F0C4B7]/40">
                      <i className="ri-image-line" />
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white group-hover:text-[#F0C4B7] transition-colors line-clamp-2 leading-snug">
                    {p.title}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">{formatDate(p.publishDate)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
