import type { TreeNode, TreePerson } from '@/content/lessons'

// شجرة عائلة بخطوط تتفرع (CSS بس، بدون مكتبات). كل عقدة: شخص أو زوجين، وتحتهم عيالهم موصولين بخطوط.
// على الجوال تصغر البطاقات، وإذا الشجرة أعرض من الشاشة يتمرر صندوقها لحاله بدون ما تتحرك الصفحة.

const LINE = '#C98C94'

const css = `
.ftree { overflow-x: auto; padding: 4px 0 2px; }
.ftree ul { display: flex; justify-content: center; margin: 0; padding: 22px 0 0; position: relative; }
.ftree > ul { padding-top: 0; min-width: max-content; margin: 0 auto; }
.ftree li { list-style: none; text-align: center; position: relative; padding: 22px 5px 0; }
.ftree li::before, .ftree li::after { content: ''; position: absolute; top: 0; right: 50%; width: 50%; height: 22px; border-top: 2px solid ${LINE}; }
.ftree li::after { right: auto; left: 50%; border-left: 2px solid ${LINE}; }
.ftree li:only-child::before, .ftree li:only-child::after { display: none; }
.ftree li:only-child { padding-top: 0; }
.ftree li:first-child::before, .ftree li:last-child::after { border: 0 none; }
.ftree li:last-child::before { border-right: 2px solid ${LINE}; border-radius: 0 6px 0 0; }
.ftree li:first-child::after { border-radius: 6px 0 0 0; }
.ftree ul ul::before { content: ''; position: absolute; top: 0; left: 50%; height: 22px; border-left: 2px solid ${LINE}; }
.ftree .unit { display: inline-flex; align-items: stretch; gap: 4px; }
.ftree .heart { align-self: center; color: ${LINE}; font-size: 0.8rem; }
.ftree .p { display: inline-block; min-width: 84px; padding: 6px 8px; border-radius: 10px; background: #F7E6E8; border: 1px solid #E4A3AB; color: #5A1520; line-height: 1.3; }
.ftree .p.me { background: #7A1F2B; border-color: #7A1F2B; color: #fff; }
.ftree .e { font-size: 1.15rem; display: block; }
.ftree .n { font-weight: bold; font-size: 0.88rem; display: block; }
.ftree .r { font-size: 0.74rem; display: block; opacity: 0.85; }
@media (max-width: 520px) {
  .ftree ul { padding-top: 14px; }
  .ftree li { padding: 14px 2px 0; }
  .ftree li::before, .ftree li::after, .ftree ul ul::before { height: 14px; }
  .ftree .unit { gap: 1px; }
  .ftree .heart { font-size: 0.6rem; }
  .ftree .p { min-width: 0; width: 62px; padding: 4px 2px; border-radius: 8px; }
  .ftree .e { font-size: 0.95rem; }
  .ftree .n { font-size: 0.78rem; }
  .ftree .r { font-size: 0.68rem; }
}
`

function Person({ p }: { p: TreePerson }) {
    return (
        <span className={p.me ? 'p me' : 'p'}>
            {p.emoji && <span className="e">{p.emoji}</span>}
            <span className="n">{p.name}</span>
            <span className="r">{p.role}</span>
            {p.job && <span className="r">{p.job}</span>}
        </span>
    )
}

function Node({ node }: { node: TreeNode }) {
    return (
        <li>
            <span className="unit">
                <Person p={node.person} />
                {node.spouse && (
                    <>
                        <span className="heart" aria-hidden>❤</span>
                        <Person p={node.spouse} />
                    </>
                )}
            </span>
            {node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map((c, i) => (
                        <Node key={i} node={c} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default function FamilyTree({ root, caption }: { root: TreeNode; caption?: string }) {
    return (
        <figure style={{ margin: 0 }}>
            <style>{css}</style>
            <div className="ftree" dir="ltr" style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '12px', padding: '12px 6px' }}>
                <ul>
                    <Node node={root} />
                </ul>
            </div>
            {caption && <figcaption style={{ fontSize: '0.88rem', color: '#6B5357', marginTop: '6px' }}>{caption}</figcaption>}
        </figure>
    )
}
