# إعداد النشرة البريدية مع Brevo - Double Opt-in

## نظرة عامة:
تم تحديث النشرة البريدية لتعمل بنظام Double Opt-in:
1. المستخدم يشترك → يُضاف إلى قائمة Pending
2. Brevo ترسل رسالة تأكيد تلقائياً
3. عند النقر على رابط التأكيد → ينتقل إلى قائمة Confirmed

## الخطوات المطلوبة:

### 1. إضافة متغيرات البيئة
أضف المتغيرات التالية في Cloudflare Pages → Project → Settings → Environment variables:

```env
BREVO_API_KEY=your_brevo_api_key_here
BREVO_LIST_ID_PENDING=your_pending_list_id_here
BREVO_LIST_ID_CONFIRMED=your_confirmed_list_id_here
```

### 2. الحصول على BREVO_API_KEY
1. اذهب إلى [Brevo Dashboard](https://app.brevo.com)
2. انتقل إلى **Settings** > **API Keys**
3. انقر على **Generate a new API key**
4. أعط المفتاح اسماً مناسباً (مثل: "مدونة عزيز")
5. انسخ المفتاح وضعه في متغير `BREVO_API_KEY`

### 3. إنشاء القوائم في Brevo
1. في Brevo Dashboard، اذهب إلى **Contacts** > **Lists**
2. أنشئ قائمتين:
   - **Pending Subscribers** (للمشتركين بانتظار التأكيد)
   - **Confirmed Subscribers** (للمشتركين المؤكدين)
3. احصل على رقم كل قائمة من URL (مثل: `/lists/2`)
4. استخدم الأرقام في متغيرات البيئة

### 4. الميزات المتوفرة:
- ✅ إضافة المشتركين إلى Brevo تلقائياً
- ✅ التعامل مع المشتركين المكررين
- ✅ رسائل خطأ ونجاح باللغة العربية
- ✅ تتبع Google Analytics للاشتراكات
- ✅ إضافة معلومات إضافية (مصدر الاشتراك، تاريخ الاشتراك)

### 6. الملفات المحدثة:
- ✅ `functions/api/newsletter.ts` - Cloudflare Pages Function للـ Double Opt-in
- ✅ `src/components/NewsletterSignup.astro` - مكون النشرة البريدية مع FormData
- ✅ `src/pages/index.astro` - نموذج النشرة في الصفحة الرئيسية
- ✅ `src/pages/posts/index.astro` - نموذج النشرة في صفحة المقالات
- ✅ `src/pages/newsletter/confirmed.astro` - صفحة تأكيد الاشتراك

### 6. التكوين المطلوب:

#### للتطوير المحلي:
- ✅ `src/pages/api/newsletter.ts` - API endpoint للتطوير المحلي (محاكاة)
- ✅ يعمل مع `npm run dev` ويظهر رسائل في console

#### للنشر على Cloudflare Pages:
- ✅ `functions/api/newsletter.ts` - Cloudflare Pages Function الفعلي
- ✅ يتصل بـ Brevo API الحقيقي
- ✅ يحتاج متغيرات البيئة في Cloudflare Pages

### 4. إعداد Brevo Automation (Double Opt-in)
1. في Brevo Dashboard، اذهب إلى **Automation** > **Create a new workflow**
2. اختر **Start from scratch**
3. أنشئ السيناريو التالي:

**الخطوة 1 - Trigger:**
- **Contact added to list** → اختر قائمة "Pending Subscribers"

**الخطوة 2 - Action:**
- **Send an email** → أنشئ قالب رسالة تأكيد
- في الرسالة، أضف زر أو رابط يؤدي إلى: `https://yoursite.com/newsletter/confirmed`
- تأكد من إعطاء الرابط اسماً مميزاً (مثل: "confirm_subscription")

**الخطوة 3 - Wait until an event happens:**
- اختر **Wait until an event happens**
- اختر **Link clicked in an email**
- اختر الإيميل من الخطوة السابقة
- اختر الرابط المحدد ("confirm_subscription")

**الخطوة 4 - Actions (عند النقر على الرابط):**
- **Add to list** → قائمة "Confirmed Subscribers"
- **Remove from list** → قائمة "Pending Subscribers"
- (اختياري) **Send an email** → رسالة ترحيب

**ملاحظة مهمة:**
- في قالب رسالة التأكيد، تأكد من إضافة رابط التأكيد بشكل صحيح
- يمكنك استخدام زر CTA أو رابط نصي
- الرابط يجب أن يؤدي إلى: `https://yoursite.com/newsletter/confirmed`

### 5. الاختبار:
1. تأكد من إضافة متغيرات البيئة في Cloudflare Pages
2. أعد نشر الموقع (Redeploy)
3. جرب الاشتراك في النشرة البريدية
4. تحقق من وصول رسالة التأكيد
5. اضغط على رابط التأكيد وتأكد من انتقال المشترك للقائمة الصحيحة

### 8. استكشاف الأخطاء:
إذا واجهت مشاكل:
- تأكد من صحة `BREVO_API_KEY` و `BREVO_LIST_ID`
- تحقق من console للأخطاء
- تأكد من إعادة تشغيل الخادم بعد إضافة متغيرات البيئة

### 7. الخطوات التالية:
- تحديث نماذج النشرة البريدية في الصفحات الأخرى لتستخدم نفس API
- إضافة إعدادات إضافية حسب الحاجة
