'use client';

import { useEffect } from 'react';
import { appStoreUrl, playStoreUrl, useInstallSource } from '../../../lib/installSource';

// Blog bodies come from the CMS as raw HTML, so their store links can't use
// the store button components — tag them in place instead.
export default function StoreLinkTagger({ containerId }: { containerId: string }) {
  const source = useInstallSource();

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll<HTMLAnchorElement>('a[href*="play.google.com"]').forEach((a) => {
      if (a.href.includes('com.nail.ranks')) a.href = playStoreUrl(source);
    });
    container.querySelectorAll<HTMLAnchorElement>('a[href*="apps.apple.com"]').forEach((a) => {
      if (a.href.includes('id6761611217')) a.href = appStoreUrl(source);
    });
  }, [containerId, source]);

  return null;
}
