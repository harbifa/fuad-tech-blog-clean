import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const siteURL = 'https://fuad3ziz.com';

// List of experimental/test posts to exclude
const EXCLUDED_POSTS = [
  'test-blog-header',
  'smart-security-systems', 
  'security-system-review',
  'surveillance-camera-guide'
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  
  // Filter out experimental posts
  const filteredPosts = posts.filter(post => 
    !EXCLUDED_POSTS.includes(post.slug) && 
    !post.slug.includes('test') &&
    !post.slug.includes('demo') &&
    !post.slug.includes('example')
  );
  
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
  
  // Static pages with priorities and change frequencies
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily', lastmod: new Date().toISOString() },
    { url: '/about', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/contact', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/posts', priority: '0.9', changefreq: 'daily', lastmod: new Date().toISOString() },
    { url: '/categories/surveillance-cameras', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/categories/security-systems', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/categories/reviews', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString() }
  ];

  // Sort posts by date (newest first)
  const sortedPosts = filteredPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages.map(page => `  <url>
    <loc>${siteURL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>`).join('\n')}
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