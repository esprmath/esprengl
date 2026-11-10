// prints, per lesson, what the explain tab shows: each heading and whether its section has a real example in explain
import { TOPICS, blockViews } from '../src/content/lessons';
const want = process.argv.slice(2);
for (const t of TOPICS) for (const l of t.lessons) {
  if (l.course !== 'ENG 001' || (want.length && !want.some((u) => l.unit?.startsWith('Unit ' + u)))) continue;
  const secs: { h: string; ex: number; text: number }[] = [{ h: '(top)', ex: 0, text: 0 }];
  for (const b of l.blocks) {
    if (b.type === 'heading') { secs.push({ h: b.text, ex: 0, text: 0 }); continue; }
    if (!blockViews(b).includes('explain')) continue;
    const cur = secs[secs.length - 1];
    if (b.type === 'breakdown' || b.type === 'example' || b.type === 'map') cur.ex++; else cur.text++;
  }
  console.log(`\n${l.unit?.split(' ·')[0]} ${t.slug}`);
  for (const s of secs) if (s.ex + s.text) console.log(`  ${s.ex ? '✓' : '✗'} ${s.h}  (examples ${s.ex}, other ${s.text})`);
}
