import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const siteURL = 'https://fuad3ziz.com';

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  
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
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sortedPosts.map((post, index) => {
    const isRecent = index < 10; // First 10 posts are considered recent
    const isFeatured = post.data.featured;
    const priority = isFeatured ? '1.0' : isRecent ? '0.9' : '0.8';
    const changefreq = isRecent ? 'weekly' : 'monthly';
    
    return `  <url>
    <loc>${siteURL}/posts/${post.slug}</loc>
    <lastmod>${post.data.date.toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <mobile:mobile/>${post.data.image ? `
    <image:image>
      <image:loc>${escapeXml(post.data.image)}</image:loc>
      <image:title>${escapeXml(post.data.title)}</image:title>
      <image:caption>${escapeXml(post.data.description)}</image:caption>
    </image:image>` : ''}${isRecent ? `
    <news:news>
      <news:publication>
        <news:name>مدونة عزيز</news:name>
        <news:language>ar</news:language>
      </news:publication>
      <news:publication_date>${post.data.date.toISOString()}</news:publication_date>
      <news:title>${escapeXml(post.data.title)}</news:title>
      <news:keywords>${escapeXml(post.data.tags?.join(', ') || '')}</news:keywords>
    </news:news>` : ''}
  </url>`;
  }).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};