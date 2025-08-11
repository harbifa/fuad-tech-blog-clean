const CACHE_NAME = 'aziz-blog-v1.0.1';
const STATIC_CACHE = 'aziz-static-v1.0.1';
const DYNAMIC_CACHE = 'aziz-dynamic-v1.0.1';

// الملفات الأساسية للتخزين المؤقت
const STATIC_ASSETS = [
  '/',
  '/about',
  '/categories/surveillance-cameras',
  '/categories/security-systems',
  '/categories/reviews',
  '/manifest.json'
];

// الملفات التي لا نريد تخزينها مؤقتاً
const EXCLUDE_URLS = [
  '/admin',
  '/api',
  'chrome-extension',
  'analytics',
  'gtag',
  'google',
  'fonts.googleapis.com'
];

// تثبيت Service Worker
self.addEventListener('install', event => {
  console.log('🚀 Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('📦 Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: 'reload' })));
      })
      .then(() => {
        console.log('✅ Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ Service Worker: Error caching static assets', error);
      })
  );
});

// تفعيل Service Worker
self.addEventListener('activate', event => {
  console.log('🔄 Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('🗑️ Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// التعامل مع طلبات الشبكة
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // تجاهل الطلبات المستثناة
  if (EXCLUDE_URLS.some(excludeUrl => url.href.includes(excludeUrl))) {
    return;
  }
  
  // تجاهل طلبات غير HTTP/HTTPS
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // استراتيجية Network First للصفحات
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then(cache => cache.put(request, responseClone))
              .catch(error => console.log('Cache put error:', error));
          }
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .then(response => {
              if (response) {
                return response;
              }
              
              // صفحة offline
              return caches.match('/offline.html') || 
                     new Response(`
                       <!DOCTYPE html>
                       <html lang="ar" dir="rtl">
                       <head>
                         <meta charset="UTF-8">
                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
                         <title>غير متصل - مدونة عزيز</title>
                         <style>
                           body { 
                             font-family: 'Tajawal', Arial, sans-serif; 
                             text-align: center; 
                             padding: 2rem; 
                             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                             color: white;
                             min-height: 100vh;
                             display: flex;
                             align-items: center;
                             justify-content: center;
                           }
                           .container { 
                             max-width: 500px; 
                             background: rgba(255,255,255,0.1);
                             padding: 2rem;
                             border-radius: 1rem;
                             backdrop-filter: blur(10px);
                           }
                           .icon { font-size: 4rem; margin-bottom: 1rem; }
                           h1 { margin-bottom: 1rem; }
                           p { margin-bottom: 2rem; opacity: 0.9; }
                           .btn { 
                             background: white; 
                             color: #7c3aed; 
                             padding: 0.75rem 1.5rem; 
                             border: none; 
                             border-radius: 0.5rem; 
                             cursor: pointer;
                             font-weight: bold;
                           }
                         </style>
                       </head>
                       <body>
                         <div class="container">
                           <div class="icon">📡</div>
                           <h1>غير متصل بالإنترنت</h1>
                           <p>تحقق من اتصالك بالإنترنت وحاول مرة أخرى</p>
                           <button class="btn" onclick="window.location.reload()">إعادة المحاولة</button>
                         </div>
                       </body>
                       </html>
                     `, {
                       headers: { 'Content-Type': 'text/html; charset=utf-8' }
                     });
            });
        })
    );
    return;
  }
  
  // استراتيجية Cache First للموارد الثابتة
  if (request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'image') {
    
    event.respondWith(
      caches.match(request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(request)
            .then(fetchResponse => {
              if (fetchResponse.status === 200) {
                const responseClone = fetchResponse.clone();
                caches.open(STATIC_CACHE)
                  .then(cache => cache.put(request, responseClone))
                  .catch(error => console.log('Cache put error:', error));
              }
              return fetchResponse;
            })
            .catch(error => {
              console.log('Fetch error:', error);
              // Fallback للصور
              if (request.destination === 'image') {
                return new Response(`
                  <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#e5e7eb"/>
                    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af">صورة غير متاحة</text>
                  </svg>
                `, {
                  headers: { 'Content-Type': 'image/svg+xml' }
                });
              }
              throw error;
            });
        })
    );
    return;
  }
});

// التعامل مع رسائل من الصفحة الرئيسية
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});