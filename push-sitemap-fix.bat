@echo off
echo ========================================
echo   رفع إصلاح Sitemap إلى GitHub
echo ========================================
echo.

echo [1/3] إضافة الملفات المعدلة...
git add src/pages/sitemap.xml.ts
git add fix-sitemap-images.md

echo [2/3] إنشاء commit...
git commit -m "Fix sitemap image URLs - resolve GSC errors"

echo [3/3] رفع إلى GitHub...
git push origin main

echo.
echo ========================================
echo           تم الرفع بنجاح!
echo ========================================
echo.
echo Cloudflare Pages سيبدأ النشر خلال دقائق...
echo راقب: https://fuad3ziz.com/sitemap.xml
echo.
pause
