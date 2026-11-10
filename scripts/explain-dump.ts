// يطبع اللي يشوفه الطالب في تبويب الشرح لدرس معين: npx tsx scripts/explain-dump.ts <slug>
import { TOPICS, blockViews } from '../src/content/lessons';
const slug = process.argv[2];
for (const t of TOPICS) for (const l of t.lessons) {
  if (t.slug !== slug || l.course !== 'ENG 001') continue;
  console.log(`# ${t.titleAr}\nwarmup: ${l.warmup?.q} ${l.warmup?.sentence ?? ''}`);
  for (const b of l.blocks) {
    if (!blockViews(b).includes('explain')) continue;
    const o = b as any;
    if (b.type === 'heading') console.log(`\n## ${o.text}`);
    else if (b.type === 'text' || b.type === 'note' || b.type === 'rule') console.log(`${b.type === 'note' ? '⚠ ' : ''}${o.text}`);
    else if (b.type === 'formula') console.log(`[formula] ${o.parts.map((p: any) => p[0]).join(' | ')}`);
    else if (b.type === 'breakdown') console.log(`[colored] ${o.parts.map((p: any) => p[0] + (p[2] ? `{${p[2]}}` : '')).join(' ')}${o.ar ? '  — ' + o.ar : ''}`);
    else if (b.type === 'example') console.log(`[example] ${o.en.replace(/\n/g, ' / ')}`);
    else if (b.type === 'list') console.log(o.items.map((x: string) => '  • ' + x).join('\n'));
    else if (b.type === 'table') console.log(`[table] ${o.head.join(' | ')} :: ${o.rows.map((r: string[]) => r.join(' | ')).join(' ;; ')}`);
    else console.log(`[${b.type}]`);
  }
}
