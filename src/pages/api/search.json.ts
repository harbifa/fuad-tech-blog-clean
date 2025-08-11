import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

// Category configuration for search
const categoryConfig = {
  'surveillance-cameras': 'كاميرات المراقبة',
  'security-systems': 'الأنظمة الأمنية', 
  'reviews': 'المراجعات والتقييمات'
};

export const GET: APIRoute = async () => {
  try {
    const posts = await getCollection('posts');
    
    // Filter out draft posts if the property exists and map to search format
    const searchData = posts
      .filter(post => !(post.data as any).draft)
      .map(post => ({
        title: post.data.title,
        description: post.data.description,
        category: post.data.category,
        categoryName: categoryConfig[post.data.category as keyof typeof categoryConfig] || post.data.category,
        slug: post.slug,
        tags: post.data.tags || [],
        date: post.data.date.toLocaleDateString('ar-SA', {
          year: 'numeric',
          month: 'long', 
          day: 'numeric'
        }),
        readTime: post.data.readTime,
        image: post.data.image,
        featured: post.data.featured || false,
        affiliate: post.data.affiliate?.enabled || false
      }));

    return new Response(JSON.stringify(searchData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error('Error fetching search data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch search data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 