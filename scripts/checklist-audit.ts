// يقيس بنود قائمة الفحص (docs/lesson-checklist.md) اللي تنقاس بالأرقام، لدرس أو لوحدة.
// التشغيل: npx tsx scripts/checklist-audit.ts <slug أو رقم الوحدة>
import { TOPICS, blockViews } from '../src/content/lessons';

const arg = process.argv[2] ?? '';
const norm = (s: string) => s.toLowerCase().replace(/\*\*/g, '').replace(/_+/g, ' ').replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ').trim();

for (const t of TOPICS) for (const l of t.lessons) {
    if (l.course !== 'ENG 001') continue;
    if (arg && t.slug !== arg && !(l.unit ?? '').startsWith(`Unit ${arg} `)) continue;

    const exampleSents: string[] = [];
    let checks = 0, both = 0, exampleTabTotal = 0, tries = 0;
    const pos = [0, 0, 0, 0];
    let two = 0, choiceItems = 0, withWhy = 0, write = 0, big = 0, personal = 0;
    const copied: string[] = [];

    for (const b of l.blocks) {
        const v = blockViews(b);
        if (b.type === 'check') checks++;
        if (b.type === 'try') tries++;
        if (v.includes('examples') && b.type !== 'heading') { exampleTabTotal++; if (v.includes('explain')) both++; }
        if (b.type === 'example') exampleSents.push(...b.en.split(/\n|(?<=[.?!])\s+/));
        if (b.type === 'breakdown') exampleSents.push(b.parts.map((p) => p[0]).join(' '));
    }
    const ex = exampleSents.map(norm).filter((s) => s.length > 8);
    for (const b of l.blocks) {
        if (b.type !== 'exercise') continue;
        for (const it of b.items) {
            const choices = it.choices ?? b.choices;
            if (choices) {
                choiceItems++;
                if (choices.length === 2) two++;
                const i = choices.indexOf(it.a);
                if (i >= 0 && i < 4) pos[i]++;
                if (it.why) withWhy++;
            } else write++;
            if (it.q.length > 150 && !choices) big++;
            if (/\b(your|you)\b/i.test(it.q) && !choices) personal++;
            const q = norm(it.q);
            if (q.length > 12 && ex.some((e) => e === q || (q.length > 20 && (e.includes(q) || q.includes(e))))) copied.push(it.q.slice(0, 60));
        }
    }
    console.log(`\n${(l.unit ?? '').split(' ·')[0]} ${t.slug}`);
    console.log(`  سؤال سريع في الشرح: ${checks} | مربعات كتابة: ${tries}`);
    console.log(`  تبويب الأمثلة: ${exampleTabTotal} بلوك، منها ${both} مكررة من الشرح`);
    console.log(`  أسئلة اختيار: ${choiceItems} (خياران: ${two}) | مكان الجواب الصح: أول ${pos[0]}، ثاني ${pos[1]}، ثالث ${pos[2]}، رابع ${pos[3]} | فيها why: ${withWhy}`);
    console.log(`  أسئلة كتابة: ${write} (فقرة ضخمة: ${big}، شخصية بجواب ثابت: ${personal})`);
    if (copied.length) console.log(`  منسوخة من الأمثلة (${copied.length}): ${copied.join(' / ')}`);
}
