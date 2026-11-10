// يطلع الكلمات الإنجليزية الموجودة في الدروس وما لها ترجمة في القاموس (glossary.ts).
// التشغيل: npx tsx scripts/glossary-missing.ts
import { TOPICS } from '../src/content/lessons';
import { lookup } from '../src/content/glossary';

const counts = new Map<string, number>();
const walk = (v: unknown) => {
    if (typeof v === 'string') {
        for (const m of v.matchAll(/[A-Za-z][A-Za-z’']*/g)) {
            const w = m[0].replace(/^['’]+|['’]+$/g, '');
            if (w.length < 2) continue;
            const r = lookup(w);
            if ('missing' in r) counts.set(w.toLowerCase(), (counts.get(w.toLowerCase()) ?? 0) + 1);
        }
    } else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
};
TOPICS.forEach((t) => t.lessons.forEach((l) => walk(l)));
const sorted = [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
console.log(sorted.length, 'missing words');
console.log(sorted.map(([w]) => w).join(' '));
