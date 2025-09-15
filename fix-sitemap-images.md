# 🔧 إصلاح أخطاء الصور في Sitemap

## ❌ المشكلة المكتشفة:
```
posts/ip-vs-analog/hero-ip-vs-analog.jpg/ ❌
posts/best-home-security-cameras-saudi-2025/hero-best-cameras-saudi-2025.jpg/ ❌  
posts/hikvision-vs-dahua-v2/hikvision-dahua-choice-intro.jpg/ ❌
```

## ✅ تم الإصلاح في sitemap.xml.ts:

### قبل الإصلاح:
```javascript
<image:loc>${escapeXml(post.data.image.startsWith('http') ? post.data.image : `${siteURL}${post.data.image}`)}</image:loc>
```

### بعد الإصلاح:
```javascript
<image:loc>${siteURL}${post.data.image.startsWith('/') ? post.data.image : '/' + post.data.image}</image:loc>
```

## 🚀 النتيجة المتوقعة:
```
https://fuad3ziz.com/posts/ip-vs-analog/hero-ip-vs-analog.jpg ✅
https://fuad3ziz.com/posts/best-home-security-cameras-saudi-2025/hero-best-cameras-saudi-2025.jpg ✅
https://fuad3ziz.com/posts/hikvision-vs-dahua-v2/hikvision-dahua-choice-intro.jpg ✅
```

## 📋 خطوات الرفع:

### الطريقة 1: Git Commands
```bash
git add src/pages/sitemap.xml.ts
git commit -m "Fix: sitemap image URLs - resolve GSC errors"  
git push origin main
```

### الطريقة 2: رفع يدوي
1. ارفع ملف `src/pages/sitemap.xml.ts` المحدث
2. انتظر تحديث الخادم
3. اختبر `https://fuad3ziz.com/sitemap.xml`

## ⏰ بعد الرفع:
1. انتظر 10-30 دقيقة لتحديث الخادم
2. اذهب إلى Google Search Console
3. أعد إرسال sitemap.xml
4. الأخطاء الـ3 ستختفي خلال ساعات

---
**الحالة**: ✅ تم إصلاح الكود محلياً - يحتاج رفع للخادم
