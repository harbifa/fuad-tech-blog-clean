// Utility functions for calculating dynamic statistics
import { getCollection } from 'astro:content';

export interface SiteStatistics {
  totalPosts: number;
  totalCategories: number;
  totalTags: number;
  monthlyReaders: number;
  featuredPosts: number;
  averageReadTime: number;
  categoriesWithCounts: Array<{
    name: string;
    slug: string;
    count: number;
    icon: string;
    color: string;
    description: string;
  }>;
  recentPostsCount: number;
  totalWords: number;
  affiliateProducts: number;
}

export async function calculateSiteStatistics(): Promise<SiteStatistics> {
  const posts = await getCollection('posts');
  
  // Calculate total posts
  const totalPosts = posts.length;
  
  // Calculate categories with counts - التركيز على 3 فئات فقط
  const categoryConfig = {
    'surveillance-cameras': { 
      name: 'كاميرات المراقبة', 
      icon: 'fa-video', 
      color: 'from-blue-500 to-blue-700',
      description: 'أحدث كاميرات المراقبة وتقنيات الرصد المتطورة للمنازل والشركات'
    },
    'security-systems': { 
      name: 'الأنظمة الأمنية',
      icon: 'fa-shield-alt',
      color: 'from-red-500 to-red-700',
      description: 'أنظمة الحماية والأمان المتكاملة مع أحدث التقنيات الذكية'
    },
    'reviews': { 
      name: 'المراجعات والتقييمات',
      icon: 'fa-star',
      color: 'from-green-500 to-green-700',
      description: 'مراجعات شاملة ومفصلة للمنتجات والأنظمة الأمنية مع توصيات الشراء'
    }
  };

  const categoriesWithCounts = Object.entries(categoryConfig).map(([slug, config]) => ({
    name: config.name,
    slug,
    count: posts.filter(post => post.data.category === slug).length,
    icon: config.icon,
    color: config.color,
    description: config.description
  })); // Show all categories, even with 0 posts

  const totalCategories = categoriesWithCounts.length;
  
  // Calculate unique tags
  const allTags = posts.flatMap(post => post.data.tags || []);
  const uniqueTags = [...new Set(allTags)];
  const totalTags = uniqueTags.length;
  
  // Calculate featured posts
  const featuredPosts = posts.filter(post => post.data.featured).length;
  
  // Calculate average read time (extract numbers from readTime strings)
  const readTimes = posts.map(post => {
    const match = post.data.readTime.match(/(\d+)/);
    return match ? parseInt(match[1]) : 10; // Default to 10 if no number found
  });
  const averageReadTime = Math.round(readTimes.reduce((sum, time) => sum + time, 0) / readTimes.length);
  
  // Calculate recent posts (last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentPostsCount = posts.filter(post => post.data.date >= thirtyDaysAgo).length;
  
  // Estimate total words (approximate based on average article length)
  const estimatedWordsPerPost = 1800; // Increased for detailed reviews and guides
  const totalWords = totalPosts * estimatedWordsPerPost;
  
  // Calculate estimated monthly readers based on posts and engagement
  // Higher engagement for specialized security content
  const baseReadersPerPost = 200; // Higher for specialized niche
  const monthlyReaders = Math.round(totalPosts * baseReadersPerPost * 0.85); // 85% active readership
  
  // Calculate affiliate products (estimate based on posts with affiliate content)
  const affiliateProducts = posts.filter(post => post.data.affiliate?.enabled).length * 3; // Average 3 products per affiliate post
  
  return {
    totalPosts,
    totalCategories,
    totalTags,
    monthlyReaders,
    featuredPosts,
    averageReadTime,
    categoriesWithCounts,
    recentPostsCount,
    totalWords,
    affiliateProducts
  };
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatNumberArabic(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + ' مليون';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + ' ألف';
  }
  return num.toString();
}