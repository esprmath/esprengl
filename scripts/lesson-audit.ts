// يقيس كل درس في ENG 001: كم مثال، كم مربع كتابة، كم تمرين وسؤال، والجمل المكررة بين الدروس.
// التشغيل: npx tsx scripts/lesson-audit.ts
import { TOPICS, blockViews, type Block } from '../src/content/lessons';

type Row = { slug: string; unit: string; title: string; explain: number; examples: number; tries: number; exercises: number; items: number; choiceItems: number; writeItems: number; headings: string[] };
const rows: Row[] = [];
const sentenceUse = new Map<string, Set<string>>();

const textOf = (b: Block): string[] => {
    switch (b.type) {
        case 'example': return [b.en];
        case 'breakdown': return [b.parts.map((p) => p[0]).join(' ')];
        case 'exercise': return b.items.map((i) => i.q);
        default: return [];
    }
};

for (const t of TOPICS) {
    for (const l of t.lessons) {
        if (l.course !== 'ENG 001') continue;
        const r: Row = { slug: t.slug, unit: l.unit ?? '', title: l.title, explain: 0, examples: 0, tries: 0, exercises: 0, items: 0, choiceItems: 0, writeItems: 0, headings: [] };
        for (const b of l.blocks) {
            const views = blockViews(b);
            if (b.type === 'heading') r.headings.push(b.text);
            else if (b.type === 'exercise') {
                r.exercises++;
                r.items += b.items.length;
                if (b.choices || b.items.some((i) => i.choices)) r.choiceItems += b.items.length;
                else r.writeItems += b.items.length;
            } else if (b.type === 'try') r.tries++;
            else if (b.type === 'example' || b.type === 'breakdown') r.examples++;
            else if (views.includes('explain')) r.explain++;
            for (const s of textOf(b)) {
                const k = s.toLowerCase().replace(/\s+/g, ' ').trim();
                if (k.length < 15) continue;
                if (!sentenceUse.has(k)) sentenceUse.set(k, new Set());
                sentenceUse.get(k)!.add(t.slug);
            }
        }
        rows.push(r);
    }
}

console.log('slug | explain | examples | tries | exercises | items (choice/write)');
for (const r of rows) console.log([r.unit.split(' ·')[0], r.slug, r.explain, r.examples, r.tries, r.exercises, `${r.items} (${r.choiceItems}/${r.writeItems})`].join(' | '));
const thin = rows.filter((r) => r.examples < 5);
console.log('\nفيها أقل من 5 أمثلة:', thin.length, thin.map((r) => r.slug).join(', '));
const fewTries = rows.filter((r) => r.tries < 2);
console.log('فيها أقل من مربعين كتابة:', fewTries.length);
const trap = rows.filter((r) => r.headings.includes('فخ الاختبار')).length;
console.log('فيها قسم "فخ الاختبار" بنفس الاسم:', trap, 'من', rows.length);
const repeated = [...sentenceUse.entries()].filter(([, s]) => s.size > 1);
console.log('\nجمل مكررة في أكثر من درس:', repeated.length);
for (const [s, set] of repeated) console.log(' -', s, '←', [...set].join(', '));
