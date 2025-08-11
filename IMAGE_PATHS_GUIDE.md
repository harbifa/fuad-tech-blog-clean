# دليل مسارات الصور - مدونة عزيز

## 🚨 مشكلة الصور في الإنتاج

### المشكلة
كانت الصور تظهر في السيرفر المحلي ولكن لا تظهر في الموقع المنشور لأن المسارات كانت تشير إلى مجلد `src` الذي لا يتم نشره.

### الحل
1. **نسخ الصور إلى مجلد public**: جميع صور المقالات يجب أن تكون في `public/posts/`
2. **تحديث المسارات**: استخدام مسارات تبدأ بـ `/posts/` بدلاً من `/src/content/posts/`

## 📁 هيكل الصور الصحيح

```
public/
├── posts/
│   ├── article-slug/
│   │   ├── hero-image.jpg
│   │   ├── image1.jpg
│   │   └── image2.jpg
│   └── another-article/
│       └── images...
```

## 🔧 كيفية إضافة صور لمقال جديد

### 1. إضافة الصور إلى المقال
```markdown
# في ملف index.mdx
---
title: "عنوان المقال"
image: "/posts/article-slug/hero-image.jpg"
---

# داخل المحتوى
<img src="/posts/article-slug/image1.jpg" alt="وصف الصورة" />
```

### 2. نسخ الصور إلى public
استخدم الملف `copy-images.bat` أو انسخ يدوياً:
```bash
# نسخ صور مقال واحد
xcopy /E /I src\content\posts\article-slug\images public\posts\article-slug

# أو استخدم الملف التلقائي
copy-images.bat
```

## ✅ المسارات الصحيحة

### ❌ خطأ
```markdown
image: "/src/content/posts/article-slug/images/hero.jpg"
<img src="/src/content/posts/article-slug/images/photo.jpg" />
```

### ✅ صحيح
```markdown
image: "/posts/article-slug/hero.jpg"
<img src="/posts/article-slug/photo.jpg" />
```

## 🔍 فحص الصور

### تأكد من وجود الصور
```bash
# فحص مجلد المقال
dir public\posts\article-slug\

# فحص جميع المقالات
dir public\posts\ /s
```

### اختبار الصور محلياً
1. شغل `npm run dev`
2. تصفح المقال
3. تأكد من ظهور جميع الصور

### اختبار الصور في الإنتاج
1. شغل `npm run build`
2. شغل `npm run preview`
3. تأكد من ظهور الصور

## 📝 ملاحظات مهمة

1. **لا تنس نسخ الصور**: عند إضافة مقال جديد، انسخ الصور إلى `public/posts/`
2. **استخدم أسماء واضحة**: اجعل أسماء الصور واضحة ومفهومة
3. **تحسين الصور**: ضغط الصور قبل النشر لتحسين الأداء
4. **النسخ الاحتياطي**: احتفظ بنسخة من الصور في مكان آمن

## 🛠️ أدوات مساعدة

- `copy-images.bat`: ينسخ جميع صور المقالات تلقائياً
- `IMAGE_PATHS_GUIDE.md`: هذا الدليل
- مجلد `public/posts/`: مكان الصور النهائي

