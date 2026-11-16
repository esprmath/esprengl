@AGENTS.md

## طريقة الشغل: خفيف على حد الاستخدام
قرار المالك: ما نبي أي استخدام ثقيل. القواعد:
- **كل وحدة في محادثة لحالها** (الوحدة 2 محادثة، الوحدة 3 محادثة...). ما نخلط وحدتين في نفس المحادثة.
- **ما تدور في ملفات ما تحتاجها.** اعرف مكان الشي من الخريطة تحت، وافتح الملف الصحيح مباشرة. لا تقرا ملف كامل إذا يكفي جزء منه (`offset`/`limit`)، ولا تفتح محتوى وحدات ثانية.
- **لا تستخدم agents أو بحث واسع** لمهمة تنحل بقراءة ملفين.
- **لا تعيد قراءة** `docs/lesson-review.md` كاملة. اقرا سطر الدرس اللي تبنيه بس.

قبل ما نبدأ وحدة جديدة: اقرا `docs/unit-workflow.md` (قائمة الشغل لكل وحدة، وملخص الوحدة 1، وطريقة قياس الملخص).

**خريطة الملفات:**
| الشي | وينه |
|---|---|
| محتوى دروس وحدة N | `src/content/eng001-unitN.ts` (وحدة 1 هي المرجع الجديد). **إلا الدرس 1.1** فمحتواه في `lessons.ts` (slug `nouns-and-verbs`) |
| تعريف الدرس وأنواع البلوكات، وقائمة كل الدروس والبحث | `src/content/lessons.ts` |
| خطة الكورس وحالة كل درس | `docs/prep-year-plan.md` |
| طريقة عرض كل درس وخطة تعديله | `docs/lesson-review.md` (سطر الدرس بس) |
| معيار الجودة | `docs/lesson-checklist.md` |
| النقاط | `docs/points-system.md`، `src/lib/points.ts` |
| خطة النمو (PWA، اقتراحات، ملخص...) | `docs/growth-plan.md` |
| صفحة الدرس | `src/app/learn/[topic]/[course]/page.tsx` (+ `summary/page.tsx` للملخص) |
| ملخص الدرس (A4) | `src/app/learn/[topic]/[course]/summary/page.tsx`، وبياناته `summary` داخل الدرس (حقل `sections` للدروس اللي لها فروع) |
| رسم بلوكات الدرس | `src/components/LessonBlock.tsx`, `Exercises.tsx`, `LessonErrors.tsx`, `LessonHub.tsx`, `FixCard.tsx` |
| الصفحة الرئيسية ولوحة المشرف | `src/app/page.tsx`, `src/components/AdminHomePanel.tsx` |
| صفحات المشرف (الطلاب، البحث) | `src/app/admin/students`, `src/app/admin/search` |
| النافبار الجانبي (يسار) | `src/components/SideNav.tsx` |
| أعلام تشغيل/إيقاف (الذكاء، EsprMath) | `src/lib/features.ts` |
| قاعدة البيانات | `supabase/migrations/` |

## Lessons
Before calling any lesson done, or when reviewing one, read and go through the quality checklist in `docs/lesson-checklist.md` (read it only when building or reviewing a lesson, not for other tasks).
