// يطبع الدرس كامل بترتيب الطالب: الشرح، ثم الأمثلة، ثم التدريب. npx tsx scripts/lesson-dump.ts <slug>
import { TOPICS, blockViews } from '../src/content/lessons';
const slug = process.argv[2];
const line = (b: any): string => {
  switch (b.type) {
    case 'heading': return `\n## ${b.text}`;
    case 'text': case 'note': case 'rule': return `${b.type === 'note' ? '⚠ ' : ''}${b.text}`;
    case 'formula': return `[formula] ${b.parts.map((p: any) => p[0]).join(' | ')}`;
    case 'breakdown': return `[colored] ${b.parts.map((p: any) => p[0] + (p[2] ? `{${p[2]}}` : '')).join(' ')}${b.ar ? '  — ' + b.ar : ''}`;
    case 'example': return `[example] ${b.en.replace(/\n/g, ' / ')}${b.ar ? '  — ' + b.ar : ''}`;
    case 'list': return b.items.map((x: string) => '  • ' + x).join('\n');
    case 'table': return `[table] ${b.head.join(' | ')} :: ${b.rows.map((r: string[]) => r.join(' | ')).join(' ;; ')}`;
    case 'try': return `[try] ${b.task}${b.reference ? ' (ref: ' + b.reference + ')' : ''}`;
    case 'check': return `[check] ${b.items.map((i: any) => i.q).join(' / ')}`;
    case 'map': return '[map]';
    case 'exercise': return `\n### ${b.title} — ${b.instructions}${b.choices ? ' [' + b.choices.join(', ') + ']' : ''}\n` + b.items.map((i: any) => `  - ${i.q}${i.choices ? ' [' + i.choices.join(' / ') + ']' : ''} → ${i.a}${i.why ? ' (why)' : ''}`).join('\n');
    default: return `[${b.type}]`;
  }
};
for (const t of TOPICS) for (const l of t.lessons) {
  if (t.slug !== slug || l.course !== 'ENG 001') continue;
  console.log(`# ${t.titleAr}\nwarmup: ${l.warmup?.q} ${l.warmup?.sentence ?? ''} [${l.warmup?.choices.join(' / ')}]`);
  for (const view of ['explain', 'examples', 'practice'] as const) {
    console.log(`\n======== ${view} ========`);
    for (const b of l.blocks) if (blockViews(b).includes(view)) console.log((view === 'examples' && blockViews(b).includes('explain') && b.type !== 'heading' ? '(مكرر) ' : '') + line(b));
  }
}
