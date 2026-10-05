/**
 * Resolves resource paths so they work on any hosting provider:
 * - GitHub Pages subpath: https://<username>.github.io/<repo>/
 * - Root domains: http://localhost:3000/ or https://mysite.com/
 * - AI Studio preview environment
 */
export function resolveResourceUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Remove leading slash so path is relative
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;

  const baseUrl = import.meta.env.BASE_URL || './';
  if (baseUrl === './') {
    return `./${cleanPath}`;
  }

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${cleanPath}`;
}

/**
 * Returns absolute URL suitable for copying to clipboard or direct browser address
 */
export function getFullResourceUrl(url: string): string {
  const relative = resolveResourceUrl(url);
  try {
    return new URL(relative, window.location.href).href;
  } catch {
    return relative;
  }
}
