import type { APIRoute } from 'astro';

const siteURL = 'https://fuad3ziz.com';

export const GET: APIRoute = async () => {
  // Helper function to escape XML entities
  function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, function (c) {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        default: return c;
      }
    });
  }
  
  // Categories with priorities and change frequencies
  const categories = [
    { 
      url: '/categories/surveillance-cameras', 
      priority: '0.9', 
      changefreq: 'weekly', 
      lastmod: new Date().toISOString(),
      name: 'كاميرات المراقبة'
    },
    { 
      url: '/categories/security-systems', 
      priority: '0.9', 
      changefreq: 'weekly', 
      lastmod: new Date().toISOString(),
      name: 'الأنظمة الأمنية'
    },
    { 
      url: '/categories/reviews', 
      priority: '0.9', 
      changefreq: 'weekly', 
      lastmod: new Date().toISOString(),
      name: 'المراجعات والتقييمات'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${categories.map(category => `  <url>
    <loc>${siteURL}${category.url}</loc>
    <lastmod>${category.lastmod}</lastmod>
    <changefreq>${category.changefreq}</changefreq>
    <priority>${category.priority}</priority>
    <mobile:mobile/>
    <image:image>
      <image:loc>${siteURL}/images/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}.jpg</image:loc>
      <image:title>${escapeXml(category.name)}</image:title>
      <image:caption>${escapeXml(category.name)} - مقالات ومراجعات متخصصة</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};