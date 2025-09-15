
@echo off
echo ========================================
echo   رفع إصلاحات مشاكل الفهرسة - SEO Fixes
echo ========================================
echo.

echo [1/6] جاري رفع مكون SEO المحدث...
echo الملف: src/components/SEO.astro
echo التحديث: إضافة دعم noindex parameter
echo.

echo [2/6] جاري رفع sitemap المحدث...
echo الملف: src/pages/sitemap.xml.ts
echo التحديث: إزالة الصفحات التجريبية
echo.

echo [3/6] جاري رفع robots.txt المحدث...
echo الملف: src/pages/robots.txt.ts
echo التحديث: منع فهرسة الصفحات غير المرغوبة
echo.

echo [4/6] جاري رفع صفحة noindex المحدثة...
echo الملف: src/pages/noindex-test-posts.astro
echo التحديث: استخدام Layout مع noindex=true
echo.

echo [5/6] جاري رفع صفحة تأكيد النشرة المحدثة...
echo الملف: src/pages/newsletter/confirmed.astro
echo التحديث: إضافة noindex=true
echo.

echo [6/6] جاري رفع robots.txt الثابت...
echo الملف: dist/robots.txt
echo التحديث: ملف robots محدث مع قواعد جديدة
echo.

echo ========================================
echo           ملفات التحديث المطلوبة
echo ========================================
echo.
echo يجب رفع الملفات التالية إلى خادمك:
echo.
echo 📁 مجلد src/components/
echo    └── SEO.astro
echo.
echo 📁 مجلد src/pages/
echo    ├── sitemap.xml.ts
echo    ├── robots.txt.ts
echo    ├── noindex-test-posts.astro
echo    └── newsletter/confirmed.astro
echo.
echo 📁 مجلد dist/
echo    └── robots.txt
echo.
echo ========================================
echo            خطوات النشر
echo ========================================
echo.
echo 1. ارفع الملفات أعلاه إلى نفس المواقع على خادمك
echo 2. تأكد من أن الخادم يدعم Astro routing
echo 3. أعد تشغيل الخادم إذا لزم الأمر
echo 4. اختبر الروابط التالية:
echo    - https://fuad3ziz.com/robots.txt
echo    - https://fuad3ziz.com/sitemap.xml
echo    - https://fuad3ziz.com/noindex-test-posts/
echo.
echo ========================================
echo         تحديث Google Search Console
echo ========================================
echo.
echo بعد رفع الملفات:
echo 1. اذهب إلى Google Search Console
echo 2. اختر موقعك: https://fuad3ziz.com
echo 3. اذهب إلى "Sitemaps"
echo 4. أعد إرسال sitemap.xml
echo 5. افحص الصفحات في "URL Inspection"
echo.
echo ========================================
echo              تم الإنتهاء!
echo ========================================
echo.
echo تاريخ التحديث: %date% %time%
echo الحالة: جاهز للنشر ✅
echo.
pause
