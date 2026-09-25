'use client';

import { useEffect, useState } from 'react';

// Install attribution: marketing posts link to nailranks.com/?src=<platform>.
// We carry that source onto the store links so installs can be counted per
// platform — Play passes utm_source to Firebase Analytics in the app, and the
// App Store reports `ct` under App Store Connect → Analytics → Campaigns.

const PLAY_STORE_BASE = 'https://play.google.com/store/apps/details?id=com.nail.ranks';
const APP_STORE_BASE = 'https://apps.apple.com/app/apple-store/id6761611217';
const APPLE_PROVIDER_ID = '128735900';
const STORAGE_KEY = 'nr_src';

export const DEFAULT_SOURCE = 'website';

export function playStoreUrl(source: string): string {
  const referrer = `utm_source=${source}&utm_medium=social`;
  return `${PLAY_STORE_BASE}&referrer=${encodeURIComponent(referrer)}`;
}

export function appStoreUrl(source: string): string {
  return `${APP_STORE_BASE}?pt=${APPLE_PROVIDER_ID}&ct=${source}&mt=8`;
}

function clean(value: string | null): string {
  return (value ?? '').toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 30);
}

// In-app browsers (Instagram, Facebook) often strip the referrer, which is why
// the ?src= link is the primary signal and this is only a fallback.
function sourceFromReferrer(): string {
  let host = '';
  try {
    host = new URL(document.referrer).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
  if (!host || host.endsWith('nailranks.com')) return '';

  const is = (domain: string) => host === domain || host.endsWith(`.${domain}`);
  if (is('instagram.com')) return 'instagram';
  if (is('facebook.com') || is('fb.com') || is('fb.me')) return 'facebook';
  if (is('youtube.com') || is('youtu.be')) return 'youtube';
  if (is('pinterest.com') || is('pin.it') || host.startsWith('pinterest.')) return 'pinterest';
  if (is('reddit.com') || is('redd.it')) return 'reddit';
  if (is('quora.com') || is('qr.ae')) return 'quora';
  if (is('tiktok.com')) return 'tiktok';
  if (is('threads.net') || is('threads.com')) return 'threads';
  if (is('x.com') || is('twitter.com') || is('t.co')) return 'twitter';
  if (host.includes('google.')) return 'google';
  if (is('bing.com')) return 'bing';
  return 'referral';
}

function resolveSource(): string {
  const fromUrl = clean(new URLSearchParams(window.location.search).get('src'));
  if (fromUrl) return fromUrl;

  try {
    const saved = clean(sessionStorage.getItem(STORAGE_KEY));
    if (saved) return saved;
  } catch {}

  const referrer = sourceFromReferrer();
  const isSocial = referrer && !['google', 'bing', 'referral'].includes(referrer);
  if (isSocial) return referrer;
  if (window.location.pathname.startsWith('/blog')) return 'blog';
  return referrer || DEFAULT_SOURCE;
}

/** Where this visitor came from, remembered for the rest of the visit. */
export function useInstallSource(): string {
  const [source, setSource] = useState(DEFAULT_SOURCE);

  useEffect(() => {
    const resolved = resolveSource();
    if (resolved !== DEFAULT_SOURCE) {
      try {
        sessionStorage.setItem(STORAGE_KEY, resolved);
      } catch {}
    }
    setSource(resolved);
  }, []);

  return source;
}
