import type { APIRoute } from 'astro';

const siteURL = 'https://fuad3ziz.com';

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteURL}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /_astro/
Disallow: /api/

# Disallow experimental/test content - STRICT
Disallow: /posts/test-blog-header/
Disallow: /posts/smart-security-systems/
Disallow: /posts/security-system-review/
Disallow: /posts/surveillance-camera-guide/
Disallow: /posts/test-*
Disallow: /posts/*test*
Disallow: /posts/*demo*
Disallow: /posts/*example*

# Disallow temporary pages
Disallow: /noindex-*
Disallow: /temp/
Disallow: /draft/

# Allow legitimate content
Allow: /posts/
Allow: /categories/
Allow: /about
Allow: /contact

# Additional directives for search engines
User-agent: Googlebot
Disallow: /posts/test-blog-header/
Disallow: /posts/smart-security-systems/
Disallow: /posts/security-system-review/
Disallow: /posts/surveillance-camera-guide/

User-agent: Bingbot
Disallow: /posts/test-blog-header/
Disallow: /posts/smart-security-systems/
Disallow: /posts/security-system-review/
Disallow: /posts/surveillance-camera-guide/
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};