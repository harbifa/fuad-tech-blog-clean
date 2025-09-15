import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const siteURL = 'https://fuad3ziz.com';

// List of experimental/test posts to exclude
const EXCLUDED_POSTS = [
  'test-blog-header',
  'smart-security-systems', 
  'security-system-review'
  // Removed: 'surveillance-camera-guide' - doesn't exist
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
  
  // Static pages with priorities and change frequencies (excluding test/experimental pages)
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily', lastmod: new Date().toISOString() },
    { url: '/about', priority: '0.8', changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/contact', priority: '0.7', changefreq: 'monthly', lastmod: new Date().toISOString() },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly', lastmod: new Date().toISOString() },
    { url: '/posts', priority: '0.9', changefreq: 'daily', lastmod: new Date().toISOString() },
    { url: '/categories/surveillance-cameras', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/categories/security-systems', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString() },
    { url: '/categories/reviews', priority: '0.9', changefreq: 'weekly', lastmod: new Date().toISOString() }
    // Excluded: newsletter/test, noindex-test-posts, SearchConsoleVerification
  ];

  // Sort posts by date (newest first)
  const sortedPosts = filteredPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages.map(page => `  <url>
    <loc>${siteURL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${sortedPosts.map((post, index) => {
    const isRecent = index < 10; // First 10 posts are considered recent
    const isFeatured = post.data.featured;
    // Give extra priority to the home security cameras article
    const isHomeSecurityArticle = post.slug === 'best-home-security-cameras-saudi-2025';
    const priority = isHomeSecurityArticle ? '1.0' : isFeatured ? '1.0' : isRecent ? '0.9' : '0.8';
    const changefreq = isRecent ? 'weekly' : 'monthly';
    
    return `  <url>
    <loc>${siteURL}/posts/${post.slug}</loc>
    <lastmod>${post.data.date.toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${post.data.image ? `
    <image:image>
      <image:loc>${siteURL}${post.data.image.startsWith('/') ? post.data.image : '/' + post.data.image}</image:loc>
      <image:title>${escapeXml(post.data.title)}</image:title>
    </image:image>` : ''}
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