# ⚙️ إعداد VS Code للكتابة الاحترافية

## 📦 الإضافات الأساسية

### 1. إضافات المحتوى والكتابة

```json
{
  "recommendations": [
    "yzhang.markdown-all-in-one",
    "unifiedjs.vscode-mdx",
    "esbenp.prettier-vscode",
    "streetsidesoftware.code-spell-checker",
    "ms-vscode.vscode-json",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "ms-vscode.live-server",
    "ritwickdey.liveserver"
  ]
}
```

### 2. تثبيت الإضافات

1. **افتح VS Code**
2. **اضغط** `Ctrl + Shift + X`
3. **ابحث عن كل إضافة وثبتها:**

#### أ) Markdown All in One
- **الوظيفة:** دعم شامل لـ Markdown
- **الميزات:** معاينة، اختصارات، جدول المحتويات

#### ب) MDX
- **الوظيفة:** دعم ملفات MDX
- **الميزات:** syntax highlighting، IntelliSense

#### ج) Prettier
- **الوظيفة:** تنسيق الكود تلقائياً
- **الميزات:** تنسيق Markdown، HTML، CSS

#### د) Code Spell Checker
- **الوظيفة:** فحص الإملاء
- **الميزات:** دعم العربية والإنجليزية

#### هـ) Tailwind CSS IntelliSense
- **الوظيفة:** دعم Tailwind CSS
- **الميزات:** autocomplete، hover info

## ⚙️ إعدادات VS Code

### 1. إنشاء ملف الإعدادات

أنشئ ملف `.vscode/settings.json` في جذر المشروع:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.wordWrap": "on",
  "editor.lineNumbers": "on",
  "editor.minimap.enabled": true,
  "editor.fontSize": 14,
  "editor.fontFamily": "'Cascadia Code', 'Fira Code', Consolas, monospace",
  "editor.fontLigatures": true,
  
  "markdown.preview.fontSize": 16,
  "markdown.preview.lineHeight": 1.6,
  "markdown.preview.fontFamily": "Tajawal, Arial, sans-serif",
  
  "files.associations": {
    "*.mdx": "mdx"
  },
  
  "emmet.includeLanguages": {
    "mdx": "html"
  },
  
  "cSpell.language": "en,ar",
  "cSpell.enableFiletypes": [
    "mdx",
    "markdown"
  ],
  
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.tabWidth": 2,
  "prettier.printWidth": 80,
  
  "workbench.colorTheme": "Default Dark+",
  "workbench.iconTheme": "vs-seti"
}
```

### 2. إعدادات Prettier

أنشئ ملف `.prettierrc` في جذر المشروع:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "overrides": [
    {
      "files": "*.mdx",
      "options": {
        "parser": "mdx"
      }
    }
  ]
}
```

## 🎨 تخصيص الواجهة

### 1. تغيير الثيم

```json
{
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme"
}
```

### 2. إعدادات الخط

```json
{
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', Consolas",
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "editor.lineHeight": 1.5
}
```

## ⌨️ اختصارات مفيدة

### اختصارات Markdown

| الاختصار | الوظيفة |
|----------|----------|
| `Ctrl + Shift + V` | معاينة Markdown |
| `Ctrl + K V` | معاينة جانبية |
| `Ctrl + B` | **نص عريض** |
| `Ctrl + I` | *نص مائل* |
| `Ctrl + Shift + ]` | زيادة مستوى العنوان |
| `Ctrl + Shift + [` | تقليل مستوى العنوان |

### اختصارات عامة

| الاختصار | الوظيفة |
|----------|----------|
| `Ctrl + Shift + P` | Command Palette |
| `Ctrl + P` | البحث عن ملف |
| `Ctrl + Shift + F` | البحث في المشروع |
| `Ctrl + D` | تحديد الكلمة التالية |
| `Alt + Shift + F` | تنسيق الملف |
| `Ctrl + /` | تعليق/إلغاء تعليق |

## 📁 تنظيم المجلدات

### هيكل مقترح للمشروع:

```
aziz-tech-blog/
├── .vscode/
│   ├── settings.json
│   ├── extensions.json
│   └── snippets/
├── src/
│   └── content/
│       └── posts/
│           ├── article-1/
│           │   ├── index.mdx
│           │   ├── images/
│           │   └── videos/
│           └── article-2/
├── public/
├── templates/
│   ├── review-template.mdx
│   ├── guide-template.mdx
│   └── comparison-template.mdx
└── docs/
    ├── writing-guide.md
    └── style-guide.md
```

## 🔧 Snippets مخصصة

### إنشاء snippets للمحتوى

أنشئ ملف `.vscode/snippets/mdx.json`:

```json
{
  "Article Frontmatter": {
    "prefix": "frontmatter",
    "body": [
      "---",
      "title: \"$1\"",
      "description: \"$2\"",
      "category: \"$3\"",
      "tags: [\"$4\"]",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "readTime: \"$5 دقيقة\"",
      "image: \"$6\"",
      "featured: ${7|true,false|}",
      "affiliate:",
      "  enabled: ${8|true,false|}",
      "  products:",
      "    - name: \"$9\"",
      "      link: \"$10\"",
      "      price: \"$11 ريال\"",
      "      rating: $12",
      "---",
      "",
      "$0"
    ],
    "description": "Article frontmatter template"
  },
  
  "Review Section": {
    "prefix": "review-section",
    "body": [
      "## ⭐ التقييم الشامل",
      "",
      "<div style=\"background: #f9fafb; padding: 1.5rem; border-radius: 0.75rem; margin: 2rem 0;\">",
      "  <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;\">",
      "    <div style=\"text-align: center;\">",
      "      <div style=\"font-size: 2rem; color: #fbbf24;\">★★★★☆</div>",
      "      <div style=\"font-weight: bold; color: #1f2937;\">$1</div>",
      "      <div style=\"color: #6b7280;\">$2/10</div>",
      "    </div>",
      "  </div>",
      "</div>",
      "",
      "$0"
    ],
    "description": "Review rating section"
  },
  
  "Pros and Cons": {
    "prefix": "pros-cons",
    "body": [
      "## ✅ المزايا",
      "",
      "<div style=\"background: linear-gradient(135deg, #ecfdf5, #10b981); padding: 1.5rem; border-radius: 1rem; margin: 1.5rem 0; color: white;\">",
      "  <h3 style=\"margin: 0 0 1rem 0;\">🎯 نقاط القوة</h3>",
      "  <ul style=\"margin: 0; padding-right: 1.5rem;\">",
      "    <li>$1</li>",
      "    <li>$2</li>",
      "    <li>$3</li>",
      "  </ul>",
      "</div>",
      "",
      "## ❌ العيوب",
      "",
      "<div style=\"background: linear-gradient(135deg, #fef2f2, #dc2626); padding: 1.5rem; border-radius: 1rem; margin: 1.5rem 0; color: white;\">",
      "  <h3 style=\"margin: 0 0 1rem 0;\">⚠️ نقاط الضعف</h3>",
      "  <ul style=\"margin: 0; padding-right: 1.5rem;\">",
      "    <li>$4</li>",
      "    <li>$5</li>",
      "  </ul>",
      "</div>",
      "",
      "$0"
    ],
    "description": "Pros and cons section"
  },
  
  "Buy Now Button": {
    "prefix": "buy-button",
    "body": [
      "<div style=\"background: linear-gradient(135deg, #fef3c7, #fbbf24); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center;\">",
      "  <h3 style=\"margin: 0 0 1rem 0; color: #92400e;\">🛒 $1</h3>",
      "  <div style=\"font-size: 1.5rem; font-weight: bold; color: #92400e; margin-bottom: 1rem;\">",
      "    $2 ريال",
      "  </div>",
      "  <p style=\"margin: 0 0 1.5rem 0; color: #92400e;\">$3</p>",
      "  <a ",
      "    href=\"$4\" ",
      "    class=\"affiliate-link\"",
      "    style=\"background: #dc2626; color: white; padding: 1rem 2rem; border-radius: 0.75rem; text-decoration: none; font-weight: bold; display: inline-block;\"",
      "  >",
      "    🛒 $5",
      "  </a>",
      "</div>",
      "",
      "$0"
    ],
    "description": "Buy now button with styling"
  }
}
```

## 🎯 نصائح للكتابة الفعالة

### 1. تنظيم العمل:
- استخدم مجلدات منفصلة لكل مقال
- احتفظ بالصور والفيديوهات منظمة
- استخدم أسماء ملفات وصفية

### 2. الكتابة:
- اكتب في فقرات قصيرة
- استخدم العناوين الفرعية بكثرة
- أضف صور توضيحية منتظمة

### 3. المراجعة:
- استخدم spell checker
- اقرأ المقال بصوت عالٍ
- اختبر جميع الروابط

### 4. النشر:
- معاينة المقال قبل النشر
- تأكد من تحسين الصور
- اختبر على الهاتف المحمول

---

**🚀 الآن أصبح VS Code جاهزاً للكتابة الاحترافية!**