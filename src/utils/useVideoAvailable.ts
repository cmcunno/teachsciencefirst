import { useEffect, useState } from 'react';
import { resolveResourceUrl } from './url';

// One check per video per page load, shared by every card/modal that asks.
const cache = new Map<string, Promise<boolean>>();

function check(url: string): Promise<boolean> {
  let p = cache.get(url);
  if (!p) {
    p = fetch(url, { method: 'HEAD', cache: 'no-store' })
      // Require a real video response: some hosts answer a missing file with an HTML page.
      .then(r => r.ok && (r.headers.get('content-type') ?? '').startsWith('video/'))
      .catch(() => false);
    cache.set(url, p);
  }
  return p;
}

/**
 * Returns the resolved video URL once the file is confirmed to exist, otherwise null.
 * Lets a resource list a video before it has been uploaded without showing a broken link.
 */
export function useVideoAvailable(videoUrl?: string): string | null {
  const resolved = videoUrl ? resolveResourceUrl(videoUrl) : null;
  const [available, setAvailable] = useState<string | null>(null);

  useEffect(() => {
    if (!resolved) {
      setAvailable(null);
      return;
    }
    let alive = true;
    check(resolved).then(ok => alive && setAvailable(ok ? resolved : null));
    return () => {
      alive = false;
    };
  }, [resolved]);

  return available;
}
