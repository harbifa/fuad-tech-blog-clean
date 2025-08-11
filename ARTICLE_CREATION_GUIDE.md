# 📝 دليل إنشاء مقال جديد - مدونة عزيز

## 🚀 الخطوات الأساسية

### 1. فتح المشروع في VS Code

```bash
# افتح المجلد في VS Code
code /path/to/aziz-tech-blog

# أو من داخل المجلد
code .
```

### 2. هيكل المجلدات

```
src/content/posts/
├── article-slug/
│   ├── index.mdx          # المقال الرئيسي
│   ├── images/           # صور المقال (اختياري)
│   │   ├── hero.jpg
│   │   ├── screenshot1.png
│   │   └── diagram.svg
│   └── videos/           # فيديوهات (اختياري)
│       └── demo.mp4
```

## 📋 خطوات إنشاء مقال جديد

### الخطوة 1: إنشاء مجلد المقال

1. **انتقل إلى:** `src/content/posts/`
2. **أنشئ مجلد جديد** باسم المقال (استخدم الإنجليزية والشرطات)

```
مثال: hikvision-camera-review-2024
```

### الخطوة 2: إنشاء ملف المقال

1. **داخل مجلد المقال** أنشئ ملف: `index.mdx`
2. **ابدأ بالـ frontmatter:**

```yaml
---
title: "مراجعة شاملة لكاميرا Hikvision DS-2CD2143G0-IS"
description: "مراجعة مفصلة لكاميرا المراقبة Hikvision مع المزايا والعيوب والسعر"
category: "reviews"
tags: ["Hikvision", "كاميرات IP", "مراجعة", "4MP"]
date: 2024-12-20
readTime: "15 دقيقة"
image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
featured: true
author: "عزيز"
affiliate:
  enabled: true
  products:
    - name: "Hikvision DS-2CD2143G0-IS"
      link: "https://amazon.com/dp/B07XXXXX"
      price: "1,200 ريال"
      rating: 4.5
---
```

### الخطوة 3: كتابة المحتوى

```markdown
# مراجعة شاملة لكاميرا Hikvision DS-2CD2143G0-IS

## نظرة عامة

في هذه المراجعة الشاملة، سنستكشف كاميرا Hikvision DS-2CD2143G0-IS...

## المواصفات التقنية

### الدقة والجودة
- **الدقة:** 4MP (2688×1520)
- **العدسة:** 2.8mm ثابتة
- **الرؤية الليلية:** حتى 30 متر

## إضافة الصور

![كاميرا Hikvision](./images/hikvision-main.jpg)

## إضافة فيديو

<video controls width="100%">
  <source src="./videos/hikvision-demo.mp4" type="video/mp4">
  متصفحك لا يدعم تشغيل الفيديو.
</video>

## الخلاصة

كاميرا Hikvision DS-2CD2143G0-IS تقدم أداءً ممتازاً...
```

## 🖼️ إضافة الصور

### الطريقة 1: صور محلية

1. **أنشئ مجلد** `images` داخل مجلد المقال
2. **ضع الصور** في هذا المجلد
3. **استخدمها في المقال:**

```markdown
![وصف الصورة](./images/camera-front.jpg)

<!-- أو مع تحكم أكثر -->
<img src="./images/camera-back.jpg" alt="الجهة الخلفية للكاميرا" width="600" />
```

### الطريقة 2: صور من Pexels (موصى بها)

```markdown
![كاميرا مراقبة](https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop)
```

### الطريقة 3: صور مع تحسين SEO

```markdown
<figure>
  <img 
    src="./images/installation-guide.jpg" 
    alt="دليل تركيب كاميرا Hikvision خطوة بخطوة"
    loading="lazy"
    width="800"
    height="600"
  />
  <figcaption>خطوات تركيب الكاميرا بالتفصيل</figcaption>
</figure>
```

## 🎥 إضافة الفيديوهات

### الطريقة 1: فيديو محلي

1. **أنشئ مجلد** `videos` داخل مجلد المقال
2. **ضع الفيديو** في هذا المجلد
3. **استخدمه في المقال:**

```markdown
<video controls width="100%" poster="./images/video-thumbnail.jpg">
  <source src="./videos/camera-review.mp4" type="video/mp4">
  <source src="./videos/camera-review.webm" type="video/webm">
  متصفحك لا يدعم تشغيل الفيديو.
</video>
```

### الطريقة 2: فيديو من YouTube

```markdown
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

### الطريقة 3: فيديو مع تحكم متقدم

```markdown
<video 
  controls 
  width="100%" 
  height="400"
  poster="./images/video-poster.jpg"
  preload="metadata"
>
  <source src="./videos/demo.mp4" type="video/mp4">
  <track kind="subtitles" src="./videos/subtitles-ar.vtt" srclang="ar" label="العربية">
  <p>متصفحك لا يدعم تشغيل الفيديو. <a href="./videos/demo.mp4">تحميل الفيديو</a></p>
</video>
```

## 🎨 تنسيق المحتوى المتقدم

### صناديق التنبيه

```markdown
<div style="background: #dbeafe; padding: 1.5rem; border-radius: 0.75rem; border-right: 4px solid #3b82f6; margin: 2rem 0;">
  <h4 style="color: #1e40af; margin: 0 0 1rem 0;">💡 نصيحة مهمة</h4>
  <p style="margin: 0; color: #1e3a8a;">تأكد من تحديث firmware الكاميرا للحصول على أفضل أداء</p>
</div>
```

### جداول المقارنة

```markdown
| الميزة | Hikvision | Dahua | Axis |
|--------|-----------|-------|------|
| الدقة | 4MP | 4MP | 2MP |
| السعر | 1,200 ريال | 1,100 ريال | 2,000 ريال |
| الضمان | سنتين | سنة | 3 سنوات |
```

### أكورديون (قابل للطي)

```markdown
<details style="background: #f9fafb; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
  <summary style="font-weight: bold; cursor: pointer;">كيفية إعداد الكاميرا؟</summary>
  <div style="margin-top: 1rem;">
    <p>خطوات الإعداد:</p>
    <ol>
      <li>قم بتوصيل الكاميرا بالشبكة</li>
      <li>افتح متصفح الويب</li>
      <li>اذهب إلى عنوان IP الخاص بالكاميرا</li>
    </ol>
  </div>
</details>
```

## 🛒 إضافة روابط الشراء (Affiliate)

### في الـ frontmatter:

```yaml
affiliate:
  enabled: true
  products:
    - name: "Hikvision DS-2CD2143G0-IS"
      link: "https://amazon.com/dp/B07XXXXX"
      price: "1,200 ريال"
      rating: 4.5
    - name: "عدسة إضافية 6mm"
      link: "https://amazon.com/dp/B07YYYYY"
      price: "150 ريال"
      rating: 4.2
```

### في المحتوى:

```markdown
<div style="background: linear-gradient(135deg, #fef3c7, #fbbf24); padding: 1.5rem; border-radius: 1rem; margin: 2rem 0; text-align: center;">
  <h3 style="margin: 0 0 1rem 0; color: #92400e;">🛒 أفضل عرض للشراء</h3>
  <p style="margin: 0 0 1.5rem 0; color: #92400e;">احصل على الكاميرا بأفضل سعر مع ضمان سنتين</p>
  <a 
    href="https://amazon.com/dp/B07XXXXX" 
    class="affiliate-link"
    style="background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 0.75rem; text-decoration: none; font-weight: bold; display: inline-block;"
  >
    🛒 اشتري الآن - 1,200 ريال
  </a>
</div>
```

## 📱 تحسين للهاتف المحمول

### صور متجاوبة:

```markdown
<picture>
  <source media="(max-width: 768px)" srcset="./images/mobile-view.jpg">
  <source media="(min-width: 769px)" srcset="./images/desktop-view.jpg">
  <img src="./images/desktop-view.jpg" alt="واجهة الكاميرا" loading="lazy">
</picture>
```

### فيديو متجاوب:

```markdown
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
  <video 
    controls 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    poster="./images/video-poster.jpg"
  >
    <source src="./videos/mobile-demo.mp4" type="video/mp4">
  </video>
</div>
```

## 🔧 أدوات VS Code المفيدة

### الإضافات الموصى بها:

1. **MDX** - دعم ملفات MDX
2. **Prettier** - تنسيق الكود
3. **Auto Rename Tag** - تعديل العلامات
4. **Bracket Pair Colorizer** - تلوين الأقواس
5. **GitLens** - إدارة Git

### اختصارات مفيدة:

- `Ctrl + Shift + P` - فتح Command Palette
- `Ctrl + /` - تعليق/إلغاء تعليق
- `Alt + Shift + F` - تنسيق الملف
- `Ctrl + D` - تحديد الكلمة التالية المشابهة
- `Ctrl + Shift + L` - تحديد جميع الكلمات المشابهة

## 📋 قائمة مراجعة قبل النشر

### ✅ المحتوى:
- [ ] العنوان جذاب ووصفي
- [ ] الوصف يلخص المقال في 150-160 حرف
- [ ] الفئة والعلامات صحيحة
- [ ] تاريخ النشر محدث
- [ ] وقت القراءة مناسب

### ✅ الصور:
- [ ] جميع الصور لها نص بديل (alt text)
- [ ] أحجام الصور محسنة (أقل من 500KB)
- [ ] الصور عالية الجودة ومناسبة للمحتوى
- [ ] صورة مميزة للمقال محددة

### ✅ الفيديوهات:
- [ ] الفيديوهات تعمل بشكل صحيح
- [ ] أحجام الفيديوهات معقولة
- [ ] صور مصغرة (thumbnails) جذابة
- [ ] ترجمات إذا لزم الأمر

### ✅ SEO:
- [ ] الكلمات المفتاحية موزعة طبيعياً
- [ ] الروابط الداخلية موجودة
- [ ] البيانات المنظمة صحيحة
- [ ] الروابط الخارجية تفتح في نافذة جديدة

### ✅ التقنية:
- [ ] لا توجد أخطاء في الكود
- [ ] الروابط تعمل بشكل صحيح
- [ ] المقال يظهر بشكل صحيح في المعاينة
- [ ] متوافق مع الهاتف المحمول

## 🚀 نشر المقال

### 1. معاينة محلية:

```bash
npm run dev
```

ثم اذهب إلى: `http://localhost:4321/posts/article-slug`

### 2. بناء الموقع:

```bash
npm run build
```

### 3. رفع التغييرات:

```bash
git add .
git commit -m "إضافة مقال: عنوان المقال"
git push
```

## 📊 مثال كامل

إليك مثال كامل لمقال مع صور وفيديو:

```markdown
---
title: "مراجعة شاملة لكاميرا Ring Video Doorbell Pro 2"
description: "تجربة مفصلة لجرس الباب الذكي من Ring مع الميزات والعيوب والسعر"
category: "reviews"
tags: ["Ring", "جرس ذكي", "أمان منزلي", "مراجعة"]
date: 2024-12-20
readTime: "12 دقيقة"
image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
featured: true
affiliate:
  enabled: true
  products:
    - name: "Ring Video Doorbell Pro 2"
      link: "https://amazon.com/dp/B086Q54K53"
      price: "899 ريال"
      rating: 4.3
---

# مراجعة شاملة لكاميرا Ring Video Doorbell Pro 2

## نظرة عامة

جرس الباب الذكي Ring Video Doorbell Pro 2 يمثل تطوراً كبيراً في تقنيات الأمان المنزلي...

![Ring Video Doorbell Pro 2](./images/ring-doorbell-main.jpg)

## المواصفات التقنية

<div style="background: #f0f9ff; padding: 1.5rem; border-radius: 1rem; margin: 2rem 0;">
  <h3 style="color: #0c4a6e; margin: 0 0 1rem 0;">📋 المواصفات الكاملة</h3>
  <ul style="margin: 0; color: #0c4a6e;">
    <li><strong>الدقة:</strong> 1536p HD</li>
    <li><strong>زاوية الرؤية:</strong> 150° أفقي، 90° عمودي</li>
    <li><strong>الرؤية الليلية:</strong> متقدمة مع LED</li>
    <li><strong>التخزين:</strong> سحابي مع اشتراك</li>
  </ul>
</div>

## فيديو المراجعة

<video controls width="100%" poster="./images/review-thumbnail.jpg">
  <source src="./videos/ring-review.mp4" type="video/mp4">
  متصفحك لا يدعم تشغيل الفيديو.
</video>

## التركيب والإعداد

### خطوات التركيب:

1. **تحضير الأدوات**
   ![أدوات التركيب](./images/installation-tools.jpg)

2. **إزالة الجرس القديم**
3. **تركيب القاعدة الجديدة**
4. **توصيل الأسلاك**

<details style="background: #f9fafb; padding: 1rem; border-radius: 0.5rem; margin: 1rem 0;">
  <summary style="font-weight: bold; cursor: pointer;">هل أحتاج كهربائي للتركيب؟</summary>
  <p style="margin-top: 1rem;">في معظم الحالات، يمكن تركيب الجهاز بنفسك إذا كان لديك جرس باب سلكي موجود. ولكن إذا لم يكن لديك أسلاك، ستحتاج كهربائي.</p>
</details>

## الأداء والجودة

### جودة الصورة

![مقارنة جودة الصورة](./images/image-quality-comparison.jpg)

الكاميرا تقدم جودة ممتازة في الإضاءة الجيدة...

### الرؤية الليلية

<video controls width="100%">
  <source src="./videos/night-vision-test.mp4" type="video/mp4">
</video>

## المزايا والعيوب

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
  <div style="background: linear-gradient(135deg, #ecfdf5, #10b981); padding: 1.5rem; border-radius: 1rem; color: white;">
    <h3 style="margin: 0 0 1rem 0;">✅ المزايا</h3>
    <ul style="margin: 0;">
      <li>جودة صورة ممتازة</li>
      <li>سهولة التركيب</li>
      <li>تطبيق متطور</li>
      <li>كشف الحركة الذكي</li>
    </ul>
  </div>
  
  <div style="background: linear-gradient(135deg, #fef2f2, #dc2626); padding: 1.5rem; border-radius: 1rem; color: white;">
    <h3 style="margin: 0 0 1rem 0;">❌ العيوب</h3>
    <ul style="margin: 0;">
      <li>يتطلب اشتراك شهري</li>
      <li>استهلاك بطارية عالي</li>
      <li>تأخير في التنبيهات أحياناً</li>
    </ul>
  </div>
</div>

## السعر والشراء

<div style="background: linear-gradient(135deg, #fef3c7, #fbbf24); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center;">
  <h3 style="margin: 0 0 1rem 0; color: #92400e;">🛒 أفضل عرض للشراء</h3>
  <div style="font-size: 1.5rem; font-weight: bold; color: #92400e; margin-bottom: 1rem;">
    ~~1,200 ريال~~ <span style="color: #dc2626;">899 ريال</span>
  </div>
  <p style="margin: 0 0 1.5rem 0; color: #92400e;">وفر 301 ريال + شحن مجاني</p>
  <a 
    href="https://amazon.com/dp/B086Q54K53" 
    class="affiliate-link"
    style="background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 0.75rem; text-decoration: none; font-weight: bold; display: inline-block;"
  >
    🛒 اشتري الآن من أمازون
  </a>
</div>

## الخلاصة

Ring Video Doorbell Pro 2 يقدم تجربة ممتازة لمن يبحث عن حل أمني ذكي للباب الرئيسي...

### التقييم النهائي: ⭐⭐⭐⭐☆ (8.5/10)

---

*تم اختبار هذا المنتج لمدة شهر كامل في ظروف مختلفة. الآراء المذكورة مستقلة وصادقة.*
```

## 🎯 نصائح للنجاح

### 1. التخطيط:
- حدد موضوع المقال بوضوح
- اجمع المعلومات والصور مسبقاً
- خطط لهيكل المقال

### 2. الكتابة:
- ابدأ بمقدمة جذابة
- استخدم عناوين فرعية واضحة
- اكتب بأسلوب بسيط ومفهوم

### 3. التحسين:
- راجع المقال عدة مرات
- تأكد من صحة المعلومات
- اختبر جميع الروابط والوسائط

### 4. التسويق:
- شارك المقال على وسائل التواصل
- أضف روابط داخلية من مقالات أخرى
- راقب الأداء في Google Analytics

---

**🎉 مبروك! أصبحت الآن جاهزاً لإنشاء مقالات احترافية في مدونة عزيز**