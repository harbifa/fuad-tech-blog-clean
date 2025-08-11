@echo off
echo نسخ صور المقالات إلى مجلد public...

REM إنشاء المجلد إذا لم يكن موجوداً
if not exist "public\posts" mkdir "public\posts"

REM نسخ صور جميع المقالات
for /d %%D in (src\content\posts\*) do (
    if exist "%%D\images" (
        set "post_name=%%~nxD"
        echo نسخ صور: %%~nxD
        xcopy /E /I /Y "%%D\images" "public\posts\%%~nxD"
    )
)

echo تم الانتهاء من نسخ جميع الصور!
pause

