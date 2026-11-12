// كل محتوى الموقع هنا.
// العنوان (Topic) مثل Sentences، وتحته درس لكل مادة يجي فيها هذا العنوان،
// والدرس يُكتب بنفس طريقة المادة (سلايداتها وأمثلتها وتمارينها)، مو شرح عام.
//
// لإضافة عنوان جديد: انسخ عنوانًا موجودًا وغيّر slug والعناوين والدروس.
// لإضافة مادة لعنوان موجود: أضف عنصرًا جديدًا في lessons.

import { SENTENCES_ENG001, UNIT1_TOPICS } from './eng001-unit1';
import { UNIT2_TOPICS } from './eng001-unit2';
import { UNIT3_TOPICS } from './eng001-unit3';
import { UNIT4_TOPICS } from './eng001-unit4';
import { UNIT5_TOPICS } from './eng001-unit5';
import { UNIT6_TOPICS } from './eng001-unit6';
import { UNIT7_TOPICS } from './eng001-unit7';
import { UNIT8_TOPICS } from './eng001-unit8';

export type Block = BlockBody & {
    /** أي قسم يطلع فيه البلوك في الشاشات الكبيرة. افتراضيًا حسب نوعه: الأمثلة في أمثلة، والتمارين في تدريب، والباقي في شرح */
    view?: LessonView | 'both';
};

export type LessonView = 'explain' | 'examples' | 'practice';

type BlockBody =
    | { type: 'heading'; text: string }                                  // عنوان قسم داخل الدرس
    | { type: 'text'; text: string }                                     // فقرة شرح
    | { type: 'rule'; text: string }                                     // قاعدة أو صيغة مهمة (إنجليزي)
    | { type: 'example'; en: string; ar?: string }                       // مثال إنجليزي مع شرح اختياري
    | { type: 'list'; items: string[]; lang?: 'en' | 'ar'; ordered?: boolean } // نقاط، إنجليزي افتراضيًا
    // جدول إنجليزي. على الجوال يتحول لبطاقات تحت بعض: stackBy 'column' بطاقة لكل عمود (مثل أنواع أدوات الربط)، و'row' (الافتراضي) بطاقة لكل صف
    | { type: 'table'; head: string[]; rows: string[][]; stackBy?: 'row' | 'column' }
    | { type: 'note'; text: string }                                     // تنبيه أو خطأ شائع
    // تمرين. مع choices يختار الطالب من أزرار ملونة ويضغط تحقق، وبدونها الجواب مخفي حتى يضغط Show answer
    // والسؤال اللي له خيارات تختلف عن باقي التمرين (مثل أسئلة الاختبار) يحط choices خاصة فيه. وكلمة بين ** ** تطلع عريضة وتحتها خط
    | { type: 'exercise'; title: string; instructions: string; choices?: string[]; items: { q: string; a: string; why?: string; choices?: string[] }[] }
    // مستطيل "اكتب وبصححها لك" بالذكاء. يتحط بعد المثال اللي يناسبه (قسم الأمثلة)، ومقفل للي حسابه مو معتمد
    | { type: 'try'; task: string; reference?: string; placeholder?: string }
    | { type: 'formula'; parts: Part[] }                                 // القاعدة كقطع ملونة بينها أسهم
    | { type: 'breakdown'; parts: Part[]; ar?: string }                  // جملة مقطعة، وفوق كل جزء وش هو
    // سؤال سريع وسط الشرح: يجاوبه الطالب وهو يقرأ ويشوف الصح مباشرة. نفس شكل أسئلة التمرين
    | { type: 'check'; choices?: string[]; items: { q: string; a: string; why?: string; choices?: string[] }[] }
    // خريطة صغيرة: صفوف مربعات. المربع الفاضي '' فراغ، واللي يبدأ بـ ~ شارع (اسمه بعد ~). تبقى نفس الشكل على الجوال
    | { type: 'map'; rows: string[][]; caption?: string }
    // شجرة عائلة بخطوط تتفرع: كل شخص (أو زوجين) وتحته عياله. me يميز صاحب الشجرة
    | { type: 'tree'; root: TreeNode; caption?: string }
    // اختيار اسم الشخصية فوق الأمثلة (Fahad أو Laura أو اسم يكتبه الطالب). النصوص فيها رموز مثل {name} و {He}، شوف src/lib/names.ts
    | { type: 'names' }
    // شريحة صغيرة تقول وش هذا الجزء: الشرح، مثال، سؤال، جرب بنفسك
    | { type: 'label'; text: string; icon?: string }
    // كروت مرقمة ملونة: كل رقم داخل دائرته (بدل قائمة مرقمة). kind يحدد اللون من ألوان أجزاء الجملة
    | { type: 'steps'; items: { kind: PartKind; title: string; ar?: string; en?: string }[] }
    // ورقة طالب فيها أخطاء: كل جملة غلط وتحتها قوس باسم خطئها، وأزرار الأخطاء جنب بعض.
    // يختار خطأ فيفتح تحته شرحه وسؤاله، وبعد ما يجاوب أسئلتهم كلها تنفتح الورقة المصححة (fixed)
    | { type: 'errors'; title: string; items: ErrorItem[]; fixed: string }
    // بطاقة تصحيح تفاعلية (للأمثلة): جملة غلط، يختار الصح من خيارات، ويطلع له سبب الخطأ والجملة الصحيحة ملونة
    | { type: 'fix'; label: string; kind: PartKind; wrong: string; mark?: string; options: string[]; answer: string; why: string; parts?: Part[] };

/** خطأ واحد في ورقة الطالب: الجملة الغلط (والجزء الغلط فيها mark)، واسم الخطأ، وشرحه */
export interface ErrorItem {
    /** اسم الخطأ كامل، يطلع تحت قوس الجملة وفي عنوان الشرح */
    label: string;
    /** اسم قصير على زر الخطأ */
    short: string;
    kind: PartKind;
    line: string;
    mark?: string;
    blocks: Block[];
}

/** شخص في الشجرة، ومعه زوجه إن وجد، وعيالهم تحته */
export interface TreePerson { name: string; role: string; job?: string; emoji?: string; me?: boolean }
export interface TreeNode { person: TreePerson; spouse?: TreePerson; children?: TreeNode[] }

/**
 * نوع الجزء في الجملة، ويحدد لونه واسمه اللي يطلع فوقه:
 * s فاعل، v فعل، hv فعل مساعد، ind فكرة مستقلة، dep فكرة تابعة،
 * co coordinator، adv conjunctive adverb، sub subordinator، p علامة ترقيم، x جزء ناقص،
 * n اسم، adj صفة
 */
export type PartKind = 's' | 'v' | 'hv' | 'ind' | 'dep' | 'co' | 'adv' | 'sub' | 'p' | 'x' | 'n' | 'adj';

/** [النص، النوع، اسم مختلف يطلع فوقه]. بدون نوع يطلع نص عادي بدون لون */
export type Part = [text: string, kind?: PartKind, label?: string];

export interface CourseLesson {
    /** رمز المادة كما يظهر للطالب، مثل ENGL 101 */
    course: string;
    /** مصدر الدرس في المادة، مثل Unit 2 أو اسم الملف */
    unit?: string;
    title: string;
    /** سؤال واحد قبل الشرح يشغّل فضول الطالب، والجواب يلقاه في الدرس */
    warmup?: Warmup;
    /** الأمثلة داخل الشرح (شرح ← مثال ← سؤال) وما فيه قسم أمثلة: الدرس يبقى شرح وتدريب بس */
    noExamples?: boolean;
    /** مقاطع يوتيوب تشرح الدرس للي يحب يتابع. تطلع أول قسم الشرح */
    videos?: LessonVideo[];
    blocks: Block[];
    /** ملخص الدرس في صفحة وحدة للطباعة (/learn/.../summary). بدون تمارين. يكتبه يدوي مع الدرس */
    summary?: LessonSummary;
}

/** صفحة الملخص: القاعدة بسطر أو سطرين، صيغة مرئية، 3 أو 4 أمثلة، أخطاء الطلاب العرب، وجدول كلمات إن وجد */
export interface LessonSummary {
    /** القاعدة بسطر أو سطرين (عربي) */
    rule: string;
    /** الصيغة المرئية: كل عنصر قاعدة وحدة من قطع ملونة */
    formulas?: Part[][];
    /** أمثلة: الجملة مقطعة والجزء المهم ملون، وسطر عربي يقول وش نلاحظ */
    examples: { parts: Part[]; ar: string }[];
    /** انتبه: الغلط والصح وسببه */
    mistakes: { wrong: string; right: string; why: string }[];
    /** جداول كلمات أو أشكال (اختياري، يفضّل 2 كحد أقصى عشان تتسع الصفحة) */
    tables?: { title: string; head: string[]; rows: string[][] }[];
}

export interface Warmup {
    q: string;
    /** الجملة الإنجليزية اللي يدور حولها السؤال، اختيارية */
    sentence?: string;
    choices: string[];
    /** رقم الخيار الصحيح، يبدأ من 0 */
    answer: number;
    /** يطلع بعد ما يجاوب: ليش هذا الجواب، ووين يلقاه في الدرس */
    why: string;
}

export interface LessonVideo {
    /** رقم المقطع في يوتيوب: اللي بعد v= في الرابط */
    id: string;
    title: string;
    channel: string;
    minutes: string;
    /** وش يغطي المقطع من الدرس، بالعربي */
    note?: string;
}

export interface Topic {
    /** يظهر في الرابط، حروف إنجليزية صغيرة وشرطات فقط */
    slug: string;
    title: string;
    titleAr: string;
    /** كلمات إضافية يبحث فيها الطالب، عربي أو إنجليزي */
    keywords: string[];
    lessons: CourseLesson[];
}

export const TOPICS: Topic[] = [
    // ─────────────── ENGL 101 · Sentences (Sem 471) ───────────────
    {
        slug: 'sentences',
        title: 'What is a sentence?',
        titleAr: 'الجملة وشروطها',
        keywords: ['sentence', 'sentences', 'جملة', 'جمل', 'fragment', 'fragments', 'جملة ناقصة', 'subject', 'verb', 'فاعل', 'فعل', 'end mark', 'imperative'],
        lessons: [
            {
                course: 'ENGL 101',
                unit: 'Sentences',
                title: 'What is a sentence?',
                warmup: { q: 'هل هذي جملة كاملة؟', sentence: 'Visited the historical district in Yanbu.', choices: ['إيه، جملة كاملة', 'لا، ناقصة'], answer: 1, why: 'ناقصها فاعل: مين اللي زار؟ تبدأ بحرف كبير وتنتهي بنقطة، بس هذا ما يكفي. تحت بتعرف الشروط الخمسة للجملة.' },
                videos: [{ id: 'GJZzAaexLd4', title: 'Sentences, Fragments, & Run-ons', channel: 'Kevin Spaans', minutes: '6:41', note: 'وش يخلي الكلام جملة كاملة، وكيف تعرف الـ Fragment' }],
                blocks: [
                    { type: 'text', text: 'الجملة في المادة هي مجموعة كلمات تحقق 5 شروط مع بعض. لو نقص شرط منها ما تعتبر جملة صحيحة.' },
                    {
                        type: 'list',
                        ordered: true,
                        items: [
                            'It always starts with a capital letter.',
                            'It has a subject (the doer of the action).',
                            'It has a verb (the action or state).',
                            'It conveys/expresses a complete thought/idea.',
                            'It has an end mark: a full stop [.], a question mark [?], or an exclamation mark [!].',
                        ],
                    },
                    { type: 'rule', text: 'Missing a subject or a verb  →  a fragment' },
                    { type: 'text', text: 'يعني لو الكلام ما فيه فاعل أو ما فيه فعل، نسميه Fragment (جملة ناقصة) حتى لو بدأ بحرف كبير وانتهى بنقطة.' },

                    { type: 'heading', text: 'أمثلة على جمل صحيحة' },
                    { type: 'text', view: 'examples', text: 'في كل مثال تحت: الفاعل بالأزرق، والفعل بالأخضر، وعلامة النهاية بالبرتقالي.' },
                    { type: 'breakdown', parts: [['Students', 's'], ['write', 'v'], ['many paragraphs in the semester'], ['.', 'p']] },
                    { type: 'breakdown', parts: [['What did'], ['you', 's'], ['do', 'v'], ['yesterday'], ['?', 'p']] },
                    { type: 'breakdown', parts: [['Those flowers', 's'], ['are', 'v'], ['really beautiful'], ['!', 'p']] },
                    { type: 'breakdown', parts: [['Does'], ['Saudi Arabia', 's'], ['produce', 'v'], ['oil and gas'], ['?', 'p']] },
                    { type: 'breakdown', parts: [['The children', 's'], ['went', 'v'], ['to the park and'], ['played', 'v'], ['.', 'p']], ar: 'فاعل واحد وفعلين، وما زالت فكرة وحدة.' },
                    { type: 'breakdown', parts: [['(you)', 's', 'Subject (implied)'], ['Get', 'v'], ['out of my office now'], ['!', 'p']], ar: 'جملة أمر (Imperative): الفاعل you مفهوم حتى لو ما انكتب.' },
                    { type: 'try', task: 'اكتب جملة كاملة عن يومك فيها فاعل وفعل.', placeholder: 'I study English every morning.' },
                    { type: 'heading', text: 'وكيف يطلع الـ Fragment؟' },
                    { type: 'breakdown', parts: [['(?)', 'x', 'No subject ✗'], ['Visited', 'v'], ['the historical district in Yanbu'], ['.', 'p']], ar: 'مين اللي زار؟ ما فيه فاعل، فهي Fragment.' },
                    { type: 'breakdown', parts: [['The children', 's'], ['(?)', 'x', 'No verb ✗'], ['football and basketball'], ['.', 'p']], ar: 'وش سووا العيال؟ ما فيه فعل، فهي Fragment.' },
                    { type: 'try', task: 'صحح هذي الـ fragment وخلها جملة كاملة: Visited the historical district in Yanbu.', reference: 'I visited the historical district in Yanbu.', placeholder: 'I visited ...' },
                    { type: 'note', text: 'جملة الأمر مثل Get out! جملة كاملة، لأن الفاعل you مفهوم حتى لو ما انكتب.' },

                    {
                        type: 'exercise',
                        title: 'Exercise A: Sentence or fragment?',
                        instructions: 'اختر S إذا كانت جملة صحيحة، و F إذا كانت Fragment، وبعدين اضغط تحقق.',
                        choices: ['S', 'F'],
                        items: [
                            { q: 'Saudi Arabia is the best country in the world.', a: 'S' },
                            { q: 'The young lady in the blue dress looked at.', a: 'F', why: 'الفكرة ناقصة: looked at وش؟' },
                            { q: 'In the morning, Jamal drops his son at school.', a: 'S' },
                            { q: 'Why are you so angry at the teacher?', a: 'S' },
                            { q: 'Get out of my office, now!', a: 'S', why: 'جملة أمر والفاعل you مفهوم.' },
                            { q: 'Visited the historical district in Yanbu.', a: 'F', why: 'ما فيها فاعل: مين اللي زار؟' },
                            { q: 'The children football and basketball.', a: 'F', why: 'ما فيها فعل.' },
                            { q: 'Ask your friend to email me, please.', a: 'S', why: 'جملة أمر.' },
                            { q: 'What did you?', a: 'F', why: 'ناقصها الفعل الأساسي: What did you do?' },
                            { q: 'In a sentence, the end mark very important.', a: 'F', why: 'ما فيها فعل: the end mark is very important.' },
                        ],
                    },
                ],
            },
            // ENG 001 · Unit 1 (1.4): في eng001-unit1.ts
            SENTENCES_ENG001,
        ],
    },
    {
        slug: 'connectors',
        title: 'Connectors',
        titleAr: 'أدوات الربط',
        keywords: ['connector', 'connectors', 'ربط', 'أدوات الربط', 'coordinator', 'coordinators', 'fanboys', 'conjunctive adverb', 'conjunctive adverbs', 'subordinator', 'subordinators', 'nor', 'however', 'because', 'comma', 'semicolon', 'فاصلة', 'فاصلة منقوطة', 'punctuation'],
        lessons: [
            {
                course: 'ENGL 101',
                unit: 'Sentences',
                title: 'Connectors and punctuation',
                warmup: { q: 'وش العلامة الصحيحة مكان الفراغ؟', sentence: 'Yanbu is quiet ___ on the other hand, Riyadh is noisy.', choices: ['فاصلة ( , )', 'فاصلة منقوطة ( ; )', 'ولا شي'], answer: 1, why: 'on the other hand من الـ Conjunctive adverbs، وقبلها دايم فاصلة منقوطة وبعدها فاصلة. تحت بتلقى كل نوع وعلامته.' },
                videos: [{ id: 'tk9DrpOPLCY', title: 'Commas with FANBOYS Conjunctions', channel: 'Kevin Spaans', minutes: '4:58', note: 'الـ Coordinators والفاصلة قبلها' }, { id: 'mQYTBdyPIHY', title: 'Conjunctive Adverb', channel: 'Grammar Monster', minutes: '3:22', note: 'الـ Conjunctive adverbs والفاصلة المنقوطة' }, { id: 'B0aRsKTImvE', title: 'Commas and Clauses', channel: 'Sparkle English', minutes: '13:29', note: 'الفاصلة مع الـ Subordinators والجمل التابعة' }],
                blocks: [
                    { type: 'text', text: 'عشان نربط فكرتين ببعض نستخدم أدوات ربط (Connectors)، وهي 3 أنواع. كل نوع له علامة ترقيم خاصة فيه، وهذا أهم شي في الدرس.' },
                    {
                        type: 'table',
                        stackBy: 'column',
                        head: ['Coordinators', 'Conjunctive adverbs', 'Subordinators'],
                        rows: [
                            [
                                'for – and – nor – but – or – yet – so',
                                'also – however – therefore – then – similarly – furthermore – in addition – moreover – otherwise – indeed – hence – nevertheless – thus – likewise – besides – nonetheless – finally – meanwhile – consequently – additionally – in contrast – as a result – on the other hand – unfortunately – for example – for instance',
                                'after – although – as – before – because – since – if – unless – when – what – where – why – how – who – though – even if – whenever – as soon as – as if – as long as – whether – while – whereas – that – which – so that – even though – in order that',
                            ],
                            [
                                'Use a comma [,] before the coordinator.',
                                'Use a semicolon [;] before the conjunctive adverb and a comma [,] after it.',
                                'Do not use a comma [,] before or after a subordinator.',
                            ],
                        ],
                    },
                    { type: 'note', text: 'الـ Coordinators سبعة بس، احفظها بكلمة FANBOYS: For, And, Nor, But, Or, Yet, So.' },

                    { type: 'heading', text: 'علامات الترقيم مع كل نوع' },
                    { type: 'text', view: 'both', text: '1) مع الـ Coordinator: فاصلة قبله بس.' },
                    { type: 'formula', parts: [['Idea 1', 'ind', 'Idea 1'], [',', 'p'], ['coordinator', 'co'], ['Idea 2', 'ind', 'Idea 2']] },
                    { type: 'breakdown', parts: [['Ibrahim is from Jeddah', 'ind', 'Idea 1'], [',', 'p'], ['but', 'co'], ['he studies in Yanbu', 'ind', 'Idea 2'], ['.']] },
                    { type: 'try', task: 'اكتب جملتين عن نفسك واربطهم بـ but.', reference: 'I like football, but I do not play it often.', placeholder: 'I like ..., but ...' },

                    { type: 'text', view: 'both', text: '2) مع الـ Conjunctive adverb: فاصلة منقوطة قبله، وفاصلة بعده.' },
                    { type: 'formula', parts: [['Idea 1', 'ind', 'Idea 1'], [';', 'p'], ['conjunctive adverb', 'adv'], [',', 'p'], ['Idea 2', 'ind', 'Idea 2']] },
                    { type: 'breakdown', parts: [['Yanbu is quiet', 'ind', 'Idea 1'], [';', 'p'], ['on the other hand', 'adv'], [',', 'p'], ['Riyadh is noisy', 'ind', 'Idea 2'], ['.']] },
                    { type: 'try', task: 'اربط فكرتين بـ however، وانتبه للفاصلة المنقوطة قبلها والفاصلة بعدها.', reference: 'The exam was hard; however, I passed it.', placeholder: '...; however, ...' },

                    { type: 'text', view: 'both', text: '3) مع الـ Subordinator في النص: بدون أي فاصلة.' },
                    { type: 'formula', parts: [['Idea 1', 'ind', 'Independent'], ['subordinator', 'sub'], ['Idea 2', 'dep', 'Dependent']] },
                    { type: 'breakdown', parts: [['I will help Ahmad', 'ind'], ['because', 'sub'], ['he is my friend', 'dep'], ['.']] },

                    { type: 'text', view: 'both', text: 'وإذا بدأت الجملة بالـ Subordinator، هنا بس نحط فاصلة بين الفكرتين:' },
                    { type: 'formula', parts: [['subordinator', 'sub'], ['Idea 1', 'dep', 'Dependent'], [',', 'p'], ['Idea 2', 'ind', 'Independent']] },
                    { type: 'breakdown', parts: [['Although', 'sub'], ['Sarah is rich', 'dep'], [',', 'p'], ['she lives a simple life', 'ind'], ['.']] },
                    { type: 'try', task: 'اكتب جملة تبدأ بـ Because أو When، وحط الفاصلة بين الفكرتين.', reference: 'When I finish class, I go to the library.', placeholder: 'When ..., ...' },

                    { type: 'heading', text: 'استخدام nor' },
                    { type: 'text', text: 'نستخدم nor عشان نربط جملتين منفيتين. لما نستخدمها نشيل not من الجملة الثانية، ونقلب مكان الفاعل والفعل المساعد.' },
                    { type: 'formula', parts: [['Negative idea 1', 'ind', 'Idea 1 (not)'], [',', 'p'], ['nor', 'co'], ['helping verb', 'hv'], ['subject', 's'], ['rest of idea 2', 'ind', 'Idea 2 (no not)']] },
                    { type: 'breakdown', parts: [['You are not allowed to speak', 'ind', 'Idea 1'], [',', 'p'], ['nor', 'co'], ['are', 'hv'], ['you', 's'], ['allowed to write'], ['.']], ar: 'من: You are not allowed to speak. + You are not allowed to write.' },
                    { type: 'breakdown', parts: [['She does not have a car', 'ind', 'Idea 1'], [',', 'p'], ['nor', 'co'], ['does', 'hv'], ['she', 's'], ['have a bicycle'], ['.']], ar: 'من: She does not have a car. + She does not have a bicycle.' },
                    { type: 'breakdown', parts: [['They could not go to the show', 'ind', 'Idea 1'], [',', 'p'], ['nor', 'co'], ['could', 'hv'], ['they', 's'], ['watch it on TV'], ['.']], ar: 'من: They could not go to the show. + They could not watch it on TV.' },
                    { type: 'try', task: 'اربط الجملتين بـ nor: I do not like tea. I do not like coffee.', reference: 'I do not like tea, nor do I like coffee.', placeholder: 'I do not like tea, nor ...' },
                    { type: 'note', text: 'غلط شائع: nor she does have. الصح nor does she have، الفعل المساعد يجي قبل الفاعل.' },

                    {
                        type: 'exercise',
                        title: 'Exercise: Join the sentences',
                        instructions: 'اربط الجملتين بنوع أداة الربط المطلوب، وانتبه لعلامات الترقيم. فيه أكثر من جواب صحيح، هذا واحد منها.',
                        items: [
                            { q: 'The quiz was so difficult, many students failed. (conjunctive adverb)', a: 'The quiz was so difficult; as a result, many students failed.', why: 'ممكن بعد therefore أو consequently.' },
                            { q: 'Salma bought a new car she does not know how to drive. (subordinator)', a: 'Salma bought a new car although she does not know how to drive.', why: 'even though تمشي بعد.' },
                            { q: 'We went to visit our grandparents they were not at home. (subordinator)', a: 'When we went to visit our grandparents, they were not at home.', why: 'بدأنا بالـ subordinator فحطينا فاصلة.' },
                            { q: 'You should call the doctor, you have a bad fever. (coordinator)', a: 'You should call the doctor, for you have a bad fever.', why: 'for هنا بمعنى because.' },
                            { q: 'It rained heavily schools were closed. (conjunctive adverb)', a: 'It rained heavily; therefore, schools were closed.' },
                            { q: "She's worked for ten years, Sarah does not have a house. (subordinator)", a: 'Although she has worked for ten years, Sarah does not have a house.' },
                            { q: 'It has rained twice this week, I feel happy. (conjunctive adverb)', a: 'It has rained twice this week; therefore, I feel happy.' },
                            { q: "Ali didn't come to class yesterday. He didn't call the teacher. (coordinator)", a: "Ali didn't come to class yesterday, nor did he call the teacher.", why: 'جملتين منفيتين، فنستخدم nor ونقلب: did he.' },
                            { q: 'You study you will not pass. (subordinator)', a: 'Unless you study, you will not pass.' },
                            { q: 'She does well on tests she studies all the time. (coordinator)', a: 'She does well on tests, for she studies all the time.' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        slug: 'sentence-types',
        title: 'Types of sentences',
        titleAr: 'أنواع الجمل',
        keywords: ['sentence types', 'types', 'أنواع', 'simple', 'compound', 'complex', 'compound-complex', 'بسيطة', 'مركبة', 'معقدة', 'clause', 'independent clause', 'dependent clause'],
        lessons: [
            {
                course: 'ENGL 101',
                unit: 'Sentences',
                title: 'Simple, compound, and complex sentences',
                warmup: { q: 'كم فكرة في هذي الجملة؟', sentence: 'I will help Ahmad because he is my friend.', choices: ['فكرة وحدة', 'فكرتين'], answer: 1, why: 'فيها فكرتين مربوطة بـ because، وهذا يخليها Complex مو Simple. تحت بتعرف كيف تفرق بين الأنواع.' },
                videos: [{ id: 'smgyeUomfyA', title: 'Simple, Compound, Complex Sentences', channel: 'EasyTeaching', minutes: '4:33', note: 'الأنواع الثلاثة بأمثلة بسيطة' }],
                blocks: [
                    { type: 'text', text: 'في الإنجليزي 4 أنواع للجمل: simple و compound و complex و compound-complex. الفرق بينها كم فكرة في الجملة، ووش الأداة اللي تربطهم.' },

                    { type: 'heading', text: 'النوع 1: Simple sentence' },
                    { type: 'rule', text: 'A simple sentence is a complete sentence with only ONE idea.' },
                    { type: 'formula', parts: [['One idea', 'ind', 'Independent clause'], ['.', 'p']] },
                    { type: 'breakdown', parts: [['Salem', 's'], ['is sleeping', 'v'], ['.', 'p']] },
                    { type: 'breakdown', parts: [['The exam', 's'], ['was', 'v'], ['very easy'], ['.', 'p']] },
                    { type: 'breakdown', parts: [['Leave', 'v'], ['my office now'], ['!', 'p']], ar: 'جملة أمر، والفاعل you مفهوم.' },
                    { type: 'breakdown', parts: [['After class', undefined, 'no S + V'], [','], ['we', 's'], ['are going', 'v'], ['to the mall'], ['.', 'p']], ar: 'After class ما فيها فاعل ولا فعل، فهي مو فكرة ثانية. الجملة Simple.' },

                    { type: 'heading', text: 'النوع 2: Compound sentence' },
                    { type: 'text', text: 'جملتين بسيطتين (فكرتين) نربطهم بـ coordinator أو conjunctive adverb. كل فكرة فيها تقدر توقف لحالها، ونسميها independent clause.' },
                    { type: 'formula', parts: [['Idea 1', 'ind', 'Independent'], [',', 'p'], ['coordinator', 'co'], ['Idea 2', 'ind', 'Independent']] },
                    { type: 'breakdown', parts: [['Hana passed all her exams', 'ind', 'Idea 1'], [',', 'p'], ['for', 'co'], ['she studied very hard', 'ind', 'Idea 2'], ['.']], ar: 'for هنا بمعنى because' },
                    { type: 'breakdown', parts: [['She sent the package yesterday', 'ind', 'Idea 1'], [',', 'p'], ['so', 'co'], ['it should arrive tomorrow', 'ind', 'Idea 2'], ['.']] },
                    { type: 'breakdown', parts: [['LG spent a lot of money on ads', 'ind', 'Idea 1'], [',', 'p'], ['yet', 'co'], ['their sales went down', 'ind', 'Idea 2'], ['.']] },
                    { type: 'breakdown', parts: [['Please move your car', 'ind', 'Idea 1'], [',', 'p'], ['or', 'co'], ['I will call the police', 'ind', 'Idea 2'], ['.']] },
                    { type: 'try', task: 'اكتب جملة compound باستخدام so أو yet.', reference: 'It was raining, so we stayed home.', placeholder: '..., so ...' },
                    { type: 'formula', parts: [['Idea 1', 'ind', 'Independent'], [';', 'p'], ['conjunctive adverb', 'adv'], [',', 'p'], ['Idea 2', 'ind', 'Independent']] },
                    { type: 'breakdown', parts: [['Osama came to the exam very late', 'ind', 'Idea 1'], [';', 'p'], ['consequently', 'adv'], [',', 'p'], ['they didn’t let him in', 'ind', 'Idea 2'], ['.']] },
                    { type: 'breakdown', parts: [['Fines for traffic violations have increased', 'ind', 'Idea 1'], [';', 'p'], ['hence', 'adv'], [',', 'p'], ['people drive more carefully', 'ind', 'Idea 2'], ['.']] },
                    { type: 'breakdown', parts: [['We should call them now', 'ind', 'Idea 1'], [';', 'p'], ['otherwise', 'adv'], [',', 'p'], ['they will not fix the problem', 'ind', 'Idea 2'], ['.']] },

                    { type: 'heading', text: 'النوع 3: Complex sentence' },
                    { type: 'text', text: 'فكرتين نربطهم بـ subordinator. الفكرة اللي معها الـ subordinator ما تكتمل لحالها، ونسميها dependent clause. والفكرة الثانية تكتمل لحالها وهي independent clause.' },
                    { type: 'text', view: 'both', text: 'إذا الـ subordinator في النص: بدون فاصلة.' },
                    { type: 'formula', parts: [['Idea 1', 'ind', 'Independent'], ['subordinator', 'sub'], ['Idea 2', 'dep', 'Dependent']] },
                    { type: 'breakdown', parts: [['The students waited for their teacher', 'ind'], ['until', 'sub'], ['she came', 'dep'], ['.']] },
                    { type: 'breakdown', parts: [['The class will meet at 3 pm', 'ind'], ['unless', 'sub'], ['there is a game', 'dep'], ['.']] },
                    { type: 'breakdown', parts: [['Ahmad knows', 'ind'], ['where', 'sub'], ['Saleh lives', 'dep'], ['.']] },
                    { type: 'text', view: 'both', text: 'إذا الجملة بدأت بالـ subordinator: فاصلة بين الفكرتين.' },
                    { type: 'formula', parts: [['subordinator', 'sub'], ['Idea 1', 'dep', 'Dependent'], [',', 'p'], ['Idea 2', 'ind', 'Independent']] },
                    { type: 'breakdown', parts: [['When', 'sub'], ['Bandar comes', 'dep'], [',', 'p'], ['he will give you a book for me', 'ind'], ['.']] },
                    { type: 'breakdown', parts: [['As long as', 'sub'], ['you live', 'dep'], [',', 'p'], ['you will face problems', 'ind'], ['.']] },
                    { type: 'try', task: 'اكتب جملة complex تبدأ بـ Although.', reference: 'Although the exam was difficult, I passed it.', placeholder: 'Although ..., ...' },
                    { type: 'note', text: 'الفاصلة في الـ Complex تجي بس إذا بدأت الجملة بالـ subordinator. إذا كان في النص لا تحط فاصلة ولا فاصلة منقوطة.' },

                    { type: 'heading', text: 'كيف تفرق بسرعة؟' },
                    {
                        type: 'table',
                        head: ['Type', 'Ideas', 'Connector', 'Punctuation'],
                        rows: [
                            ['Simple', '1', '—', '—'],
                            ['Compound', '2 independent', 'coordinator / conjunctive adverb', ', coordinator  /  ; adverb ,'],
                            ['Complex', '1 independent + 1 dependent', 'subordinator', 'comma only if it starts the sentence'],
                        ],
                    },
                    { type: 'note', text: 'انتبه للكلمات اللي تجي حرف جر مو subordinator: You can’t wait until the final exam to study. بعد until ما فيه فاعل وفعل، فالجملة Simple.' },

                    {
                        type: 'exercise',
                        title: 'Exercise B: S, CD, or CX?',
                        instructions: 'اختر S للـ simple، و CD للـ compound، و CX للـ complex، وبعدين اضغط تحقق.',
                        choices: ['S', 'CD', 'CX'],
                        items: [
                            { q: 'Khaled was absent yesterday; as a result, he missed the quiz.', a: 'CD', why: 'conjunctive adverb: as a result' },
                            { q: 'Please tell me what her name is.', a: 'CX', why: 'subordinator: what' },
                            { q: 'Be quiet, please!', a: 'S' },
                            { q: 'The company’s sales increased last year, yet its profit declined.', a: 'CD', why: 'coordinator: yet' },
                            { q: 'Since salt water boils at a lower temperature than freshwater, food cooks faster in salt water.', a: 'CX', why: 'subordinator: since' },
                            { q: 'You can’t wait until the final exam to study.', a: 'S', why: 'until هنا قبل اسم (the final exam) مو قبل فاعل وفعل.' },
                            { q: 'Do you know when she is coming back?', a: 'CX', why: 'subordinator: when' },
                            { q: 'In this world today, it is very difficult to find a good friend.', a: 'S' },
                            { q: 'I am what I am.', a: 'CX', why: 'subordinator: what' },
                            { q: 'Vegetarians do not eat meat, nor do they eat dairy products.', a: 'CD', why: 'coordinator: nor' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise C: Our basketball team',
                        instructions: 'حدد نوع كل جملة في الفقرة: S أو CD أو CX، وبعدين اضغط تحقق.',
                        choices: ['S', 'CD', 'CX'],
                        items: [
                            { q: 'Our coach is great because he has been coaching for years.', a: 'CX' },
                            { q: 'My friend Rakan takes a lot of shots, but he misses some of them.', a: 'CD' },
                            { q: 'Faisal is fast since he also runs track.', a: 'CX' },
                            { q: 'Omar is an excellent shooter.', a: 'S' },
                            { q: 'Malik makes a lot of assists.', a: 'S' },
                            { q: 'The team practices often, and we work hard every game.', a: 'CD' },
                            { q: 'Our team will succeed because we believe in each other.', a: 'CX' },
                            { q: 'I love this year’s team.', a: 'S' },
                            { q: 'We are going to win every game, so we will be league champions.', a: 'CD' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise C: My friends',
                        instructions: 'حدد نوع كل جملة في الفقرة: S أو CD أو CX، وبعدين اضغط تحقق.',
                        choices: ['S', 'CD', 'CX'],
                        items: [
                            { q: 'Hana works at the school, and she helps at the library.', a: 'CD' },
                            { q: 'She likes to help others because she is so generous.', a: 'CX' },
                            { q: 'Tala always helps me with my homework.', a: 'S' },
                            { q: 'She is excellent in math and science.', a: 'S' },
                            { q: 'She studies physics, and she helps teach a class on the weekends.', a: 'CD' },
                            { q: 'She will be a famous scientist someday since she is very passionate about learning.', a: 'CX' },
                            { q: 'Sarah loves to write.', a: 'S' },
                            { q: 'She reads and writes all the time.', a: 'S', why: 'فاعل واحد وفعلين، بس فكرة وحدة.' },
                            { q: 'She will be a professional writer when she finishes college.', a: 'CX' },
                            { q: 'I am lucky because I have such great friends.', a: 'CX' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise C: Three dogs',
                        instructions: 'حدد نوع كل جملة في الفقرة: S أو CD أو CX، وبعدين اضغط تحقق.',
                        choices: ['S', 'CD', 'CX'],
                        items: [
                            { q: 'Skippy eats grass, and he runs around all day.', a: 'CD' },
                            { q: 'Skippy plays more than any of the other dogs because he has the most energy.', a: 'CX' },
                            { q: 'Lazybones hates playing.', a: 'S' },
                            { q: 'She sleeps in her bed, and she relaxes in the sun.', a: 'CD' },
                            { q: 'She loves to sit.', a: 'S' },
                            { q: 'She doesn’t eat a lot as she doesn’t have much of an appetite.', a: 'CX', why: 'as هنا بمعنى because.' },
                            { q: 'Rocky plays a lot.', a: 'S' },
                            { q: 'He loves playing fetch, and he enjoys going on walks.', a: 'CD' },
                            { q: 'He is the youngest puppy since he is only two months old.', a: 'CX' },
                            { q: 'All of the dogs are nice to people.', a: 'S' },
                        ],
                    },
                ],
            },
        ],
    },

    // ─────────────── ENG 001 · Unlock RW Level 1 · Unit 1 People (ص 24–25) ───────────────
    {
        slug: 'nouns-and-verbs',
        title: 'Nouns and verbs',
        titleAr: 'الاسم والفعل والمفرد والجمع',
        keywords: ['noun', 'nouns', 'verb', 'verbs', 'اسم', 'اسماء', 'أسماء', 'فعل', 'افعال', 'أفعال', 'part of speech', 'parts of speech', 'singular', 'plural', 'مفرد', 'جمع', 'irregular plurals', 'تحضيري', 'ENG 001', 'Unit 1', 'People'],
        lessons: [
            {
                // الجو: "الكلمة تعرفها من جارها". كل جملة فيها الجار بالأحمر يدل على نوع الكلمة. والخيط: عائلة فهد ومزرعة جده في العلا.
                course: 'ENG 001',
                unit: 'Unit 1 · People',
                title: 'Nouns and verbs',
                noExamples: true, // الأمثلة داخل الشرح: شرح ← مثال ← سؤال
                summary: {
                    rule: 'الكلمة تعرفها من جارها، لا تحكم عليها لحالها. الاسم يجي بعد a / the / my / رقم. والفعل يجي بعد الفاعل (I / he / they / اسم شخص). والجمع في الغالب + s.',
                    formulas: [
                        [['a / an / the / my / his / two', 'x', 'clue'], ['Noun', 'n', 'noun']],
                        [['I / he / they / Fahad', 'x', 'clue'], ['Verb', 'v', 'verb']],
                        [['cow', 'n', 'singular'], ['cows', 'n', 'plural (+ s)']],
                    ],
                    examples: [
                        { parts: [['My', 'x', 'clue'], ['grandfather', 'n', 'noun'], ['has', 'v', 'verb'], ['a', 'x', 'clue'], ['farm', 'n', 'noun'], ['.', 'p']], ar: 'بعد My و a جاء اسم. وبعد الفاعل grandfather جاء الفعل has.' },
                        { parts: [['I', 'x', 'clue'], ['work', 'v', 'verb'], ['on the farm.']], ar: 'بعد I، فـ work فعل (حركة).' },
                        { parts: [['I love'], ['my', 'x', 'clue'], ['work', 'n', 'noun'], ['.', 'p']], ar: 'نفس الكلمة بعد my، فهي اسم.' },
                        { parts: [['The', 'x', 'clue'], ['weather', 'n', 'noun'], ['is', 'v', 'verb'], ['cold.']], ar: 'weather اسم حتى لو ما تنلمس. is فعل حالة، و cold صفة.' },
                        { parts: [['Two', 'x', 'clue'], ['men', 'n', 'noun'], ['grow', 'v', 'verb'], ['dates.']], ar: 'man جمعها men (شاذة)، وبعد الاسم الجمع جاء فعل بدون s.' },
                        { parts: [['He', 'x', 'clue'], ['is', 'v', 'verb'], ['a', 'x', 'clue'], ['pilot', 'n', 'noun'], ['.', 'p']], ar: 'is فعل حتى لو ما فيه حركة.' },
                    ],
                    mistakes: [
                        { wrong: 'Three mans work on the farm.', right: 'Three men work on the farm.', why: 'man و woman و person و child جمعهم شاذ (childs ✗ ← children ✓).' },
                        { wrong: 'Yanbu and Jeddah are two citys.', right: 'Yanbu and Jeddah are two cities.', why: 'حرف ساكن + y ← ies.' },
                        { wrong: 'He has three sheeps.', right: 'He has three sheep.', why: 'sheep و fish جمعها نفسها.' },
                        { wrong: 'In "Omar is a pilot" the verb is pilot.', right: 'In "Omar is a pilot" the verb is is.', why: 'is فعل حالة وكثير ينسونه. pilot اسم.' },
                    ],
                    tables: [
                        {
                            title: 'أنواع الكلمات',
                            head: ['النوع', 'وش هو', 'أمثلة'],
                            rows: [
                                ['Noun', 'شخص أو شي أو مكان، حتى لو ما تنلمس', 'uncle, farm, Yanbu, weather, music'],
                                ['Verb (action)', 'حركة', 'work, grow, play, study'],
                                ['Verb (state)', 'حالة', 'is / am / are, have, like'],
                                ['Adjective', 'توصف الاسم، مو اسم ولا فعل', 'cold, nice, quiet, kind'],
                            ],
                        },
                        {
                            title: 'الجمع',
                            head: ['One', 'Two +', 'القاعدة'],
                            rows: [
                                ['cow', 'cows', '+ s'],
                                ['box', 'boxes', 'ch / sh / s / x ← + es'],
                                ['family', 'families', 'ساكن + y ← ies'],
                                ['man · woman', 'men · women', 'شاذ'],
                                ['person · child', 'people · children', 'شاذ'],
                                ['sheep · fish', 'sheep · fish', 'نفسها'],
                            ],
                        },
                    ],
                },
                warmup: {
                    q: 'كلمة work هنا اسم ولا فعل؟',
                    sentence: 'I love my work.',
                    choices: ['اسم (Noun)', 'فعل (Verb)'],
                    answer: 0,
                    why: 'قبلها my، واللي بعد my يكون اسم. ونفس الكلمة في I work in Yanbu فعل. تحت بتعرف السر: الكلمة تعرفها من جارها.',
                },
                blocks: [
                    { type: 'names' },
                    { type: 'text', text: 'كل كلمة في الإنجليزي لها نوع، وأهم نوعين الاسم (noun) والفعل (verb). والسر في هالدرس: لا تحكم على الكلمة لحالها، شوف جارها اللي قبلها. الجار بالأحمر في كل الأمثلة.' },

                    // ── 1) الاسم ──
                    { type: 'heading', text: 'الاسم (noun): شخص أو شي أو مكان' },
                    { type: 'label', icon: '📘', text: 'الشرح' },
                    { type: 'text', text: 'شخص (grandfather)، أو شي (phone)، أو مكان (farm). وفيه أسماء ما تنلمس، ومع كذا هي أسماء: weather و music و English و family.' },
                    { type: 'label', icon: '👀', text: 'مثال' },
                    { type: 'breakdown', parts: [['My', 'x', 'Clue →'], ['grandfather', 'n', 'Noun: person'], ['has'], ['a', 'x', 'Clue →'], ['farm', 'n', 'Noun: place'], ['in AlUla', 'n', 'Noun: place'], ['.', 'p']], ar: 'my و a جيران يدلون إن اللي بعدهم اسم.' },
                    { type: 'breakdown', parts: [['The', 'x', 'Clue →'], ['weather', 'n'], ['in AlUla'], ['is', 'v'], ['cold'], ['in winter'], ['.', 'p']], ar: 'weather اسم حتى لو ما تنلمس، و cold صفة.' },
                    { type: 'label', icon: '❓', text: 'سؤال' },
                    { type: 'check', items: [{ q: 'My grandfather has a farm. Which word comes after a?', choices: ['has', 'My', 'farm'], a: 'farm', why: 'بعد a يجي اسم، و farm مكان.' }] },

                    // ── 2) الفعل ──
                    { type: 'heading', text: 'الفعل (verb): وش يسوي أو وش هو' },
                    { type: 'label', icon: '📘', text: 'الشرح' },
                    { type: 'text', text: 'الفعل حركة (work، grow، play) أو حالة (is، have، like). وانتبه: is و am و are أفعال.' },
                    { type: 'label', icon: '👀', text: 'مثال' },
                    { type: 'breakdown', parts: [['He', 'x', 'Clue →'], ['grows', 'v', 'Verb: action'], ['dates', 'n'], ['and'], ['he', 'x', 'Clue →'], ['is', 'v', 'Verb: state'], ['very busy'], ['.', 'p']], ar: 'بعد الفاعل (He) يجي فعل.' },
                    { type: 'label', icon: '❓', text: 'سؤال' },
                    {
                        type: 'check',
                        items: [
                            { q: 'The weather is cold. What is the verb?', choices: ['weather', 'cold', 'is'], a: 'is', why: 'is فعل حالة، و weather اسم، و cold صفة.' },
                            { q: 'Saad is a student. What is the verb?', choices: ['is', 'Saad', 'student'], a: 'is', why: 'is فعل حالة، و student اسم.' },
                        ],
                    },

                    // ── 3) القاعدة ──
                    { type: 'heading', text: 'القاعدة: مين جار الكلمة؟' },
                    { type: 'label', icon: '📘', text: 'الشرح' },
                    { type: 'formula', parts: [['a / an / the / my / his / two', 'x', 'Clue'], ['Noun', 'n']] },
                    { type: 'formula', parts: [['I / he / they / {name}', 'x', 'Clue'], ['Verb', 'v']] },
                    {
                        type: 'steps',
                        items: [
                            { kind: 'n', title: 'قبلها a أو an أو the ← اسم', en: 'a farm · the weather' },
                            { kind: 'n', title: 'قبلها my أو his أو her ← اسم', en: 'my work · his sister' },
                            { kind: 'n', title: 'قبلها رقم ← اسم', en: 'two cows · three languages' },
                            { kind: 'v', title: 'قبلها الفاعل ← فعل', ar: 'I، he، they، أو اسم شخص.', en: 'He grows · {name} studies' },
                        ],
                    },
                    { type: 'label', icon: '👀', text: 'مثال' },
                    { type: 'breakdown', parts: [['{name}', 'x', 'Clue →'], ['studies', 'v'], ['English'], ['at'], ['the', 'x', 'Clue →'], ['institute', 'n'], ['.', 'p']], ar: 'بعد اسم الشخص (الفاعل) فعل، وبعد the اسم.' },
                    { type: 'breakdown', parts: [['{His}', 'x', 'Clue →'], ['mother', 'n'], ['teaches', 'v'], ['at'], ['a', 'x', 'Clue →'], ['school', 'n'], ['.', 'p']], ar: 'بعد His اسم (mother)، وبعد الاسم الفاعل جاء الفعل teaches.' },
                    { type: 'label', icon: '❓', text: 'سؤال' },
                    { type: 'check', items: [{ q: 'Reem plays tennis. Which word is the verb?', choices: ['tennis', 'plays', 'Reem'], a: 'plays', why: 'بعد الفاعل Reem جاء الفعل.' }] },

                    // ── 4) اسم وفعل ──
                    { type: 'heading', text: 'نفس الكلمة اسم وفعل' },
                    { type: 'label', icon: '📘', text: 'الشرح' },
                    { type: 'text', text: 'كلمات مثل work و call و plan و answer تجي اسم مرة وفعل مرة. جارها هو اللي يحكم.' },
                    { type: 'label', icon: '👀', text: 'مثال' },
                    { type: 'breakdown', parts: [['I', 'x', 'Clue →'], ['work', 'v', 'Verb'], ['on the farm.'], ['I love'], ['my', 'x', 'Clue →'], ['work', 'n', 'Noun'], ['.', 'p']] },
                    { type: 'breakdown', parts: [['They', 'x', 'Clue →'], ['answer', 'v', 'Verb'], ['the questions.'], ['The', 'x', 'Clue →'], ['answer', 'n', 'Noun'], ['is easy'], ['.', 'p']], ar: 'answer مرة فعل ومرة اسم.' },
                    { type: 'label', icon: '❓', text: 'سؤال' },
                    { type: 'check', items: [{ q: 'The phone call was short. The word call is a:', choices: ['Verb', 'Noun', 'Adjective'], a: 'Noun', why: 'قبلها phone وقبلها The، فهي اسم.' }] },

                    // ── 5) المفرد والجمع ──
                    { type: 'heading', text: 'المفرد والجمع: نعد في مزرعة الجد' },
                    { type: 'label', icon: '📘', text: 'الشرح' },
                    { type: 'text', text: 'المفرد (singular) واحد، والجمع (plural) اثنين وفوق. أغلب الأسماء نجمعها بـ s.' },
                    { type: 'breakdown', parts: [['one'], ['cow', 'n', 'Singular'], ['→'], ['two'], ['cow', 'n'], ['s', 'x', '+ s']] },
                    { type: 'text', text: 'إملاء: اللي تنتهي بـ ch أو sh أو s أو x تاخذ es، واللي تنتهي بحرف ساكن + y تصير ies.' },
                    { type: 'breakdown', parts: [['one'], ['box', 'n'], ['→'], ['three'], ['box', 'n'], ['es', 'x', 'x → es'], ['|'], ['one'], ['famil', 'n'], ['y', 'x', 'y → i'], ['→'], ['two'], ['famil', 'n'], ['ies', 'x', 'y → ies']] },
                    { type: 'text', text: 'وأربع كلمات شاذة ما تاخذ s، تنحفظ: man ← men، woman ← women، person ← people، child ← children.' },
                    { type: 'breakdown', parts: [['one'], ['man', 'n'], ['→'], ['two'], ['men', 'x', 'Irregular']] },
                    { type: 'label', icon: '👀', text: 'مثال' },
                    { type: 'breakdown', parts: [['Grandfather Saleh'], ['has', 'v'], ['two', 'x', 'Clue →'], ['camels', 'n', 'Plural'], ['and'], ['three', 'x', 'Clue →'], ['sheep', 'n', 'Plural'], ['.', 'p']], ar: 'sheep جمعها نفسها، مثل fish.' },
                    { type: 'breakdown', parts: [['My uncle'], ['has', 'v'], ['two', 'x', 'Clue →'], ['children', 'n', 'Irregular plural'], ['.', 'p']] },
                    { type: 'label', icon: '❓', text: 'سؤال' },
                    { type: 'check', items: [{ q: 'Three ___ work on the farm.', choices: ['mans', 'man', 'men'], a: 'men', why: 'man جمعه شاذ: men.' }] },
                    {
                        type: 'fix',
                        label: 'جمع غلط',
                        kind: 'x',
                        wrong: 'My grandfather has three sheeps.',
                        mark: 'sheeps',
                        options: ['My grandfather has three sheepes.', 'My grandfather has three sheep.', 'My grandfather has three of sheep.'],
                        answer: 'My grandfather has three sheep.',
                        parts: [['My grandfather'], ['has', 'v'], ['three', 'x', 'Clue →'], ['sheep', 'n', 'Plural'], ['.', 'p']],
                        why: 'sheep جمعها نفسها (مثل fish)، ما ناخذ s.',
                    },
                    {
                        type: 'fix',
                        label: 'جمع غلط (y ← ies)',
                        kind: 'x',
                        wrong: 'My aunt has two babys.',
                        mark: 'babys',
                        options: ['My aunt has two babyes.', 'My aunt has two babies.', 'My aunt has two baby.'],
                        answer: 'My aunt has two babies.',
                        parts: [['My aunt'], ['has', 'v'], ['two', 'x', 'Clue →'], ['babies', 'n', 'y → ies'], ['.', 'p']],
                        why: 'baby تنتهي بحرف ساكن + y، فتصير ies.',
                    },
                    { type: 'note', text: 'الكلمة اللي لا اسم ولا فعل، مثل cold أو nice، غالبًا صفة (adjective). والاختبار يحطها خيار عشان يلخبطك.' },

                    { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                    { type: 'try', task: 'اكتب جملة عن واحد من عائلتك فيها فعل واسمين على الأقل.', reference: 'My father works in a bank in Yanbu.', placeholder: 'My father works …' },
                    { type: 'try', task: 'اكتب جملة فيها كلمة plan مرتين: مرة فعل ومرة اسم.', reference: 'We plan our trip together. Our plan is to visit AlUla.', placeholder: 'We plan …' },

                    // ── التمارين ──
                    {
                        type: 'exercise',
                        title: 'Exercise A: Noun, verb or adjective?',
                        instructions: 'الكلمة اللي تحتها خط وش نوعها؟ شوف جارها.',
                        choices: ['Noun', 'Verb', 'Adjective'],
                        items: [
                            { q: 'Saad **studies** Engineering in Jeddah.', a: 'Verb', why: 'بعد الفاعل Saad.' },
                            { q: 'Her **brother** is a pilot.', a: 'Noun', why: 'بعد Her.' },
                            { q: 'The farm is very **quiet**.', a: 'Adjective', why: 'توصف الاسم farm، لا شخص ولا حركة.' },
                            { q: 'They **plan** a trip every summer.', a: 'Verb', why: 'بعد الفاعل They.' },
                            { q: 'My **plan** is to study Medicine.', a: 'Noun', why: 'بعد My.' },
                            { q: 'Abha has a **cool** summer.', a: 'Adjective', why: 'توصف summer.' },
                            { q: 'I **am** a new student.', a: 'Verb', why: 'am فعل حالة.' },
                            { q: 'The **music** in the café is loud.', a: 'Noun', why: 'بعد The، وحتى لو ما تنلمس.' },
                            { q: 'We **call** our grandmother on Fridays.', a: 'Verb', why: 'بعد الفاعل We.' },
                            { q: 'He is a **kind** doctor.', a: 'Adjective', why: 'بين a و doctor، توصف doctor.' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise B: Exam style',
                        instructions: 'نفس شكل أسئلة الكويز.',
                        items: [
                            { q: 'In the sentence "Reem reads a book every night." what is the verb?', choices: ['Reem', 'book', 'night', 'reads'], a: 'reads' },
                            { q: 'In the sentence "The climate in Tabuk is cold." what is the noun?', choices: ['climate', 'is', 'cold', 'in'], a: 'climate', why: 'بعد The، وحتى لو ما تنلمس.' },
                            { q: 'In the sentence "My cousins live in Riyadh." what is the verb?', choices: ['My', 'live', 'cousins', 'in'], a: 'live' },
                            { q: 'In the sentence "Omar is a pilot." what is the verb?', choices: ['Omar', 'a', 'is', 'pilot'], a: 'is', why: 'is فعل حالة، كثير ينسونه.' },
                            { q: 'My **watch** is new. The part of speech of the underlined word is a:', choices: ['Verb', 'Adjective', 'Noun'], a: 'Noun', why: 'بعد My. ونفس الكلمة في I watch TV فعل.' },
                            { q: 'They **answer** the phone. The part of speech of the underlined word is a:', choices: ['Noun', 'Verb', 'Adjective'], a: 'Verb', why: 'بعد الفاعل They.' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise C: Which word is different?',
                        instructions: 'اختر الكلمة اللي نوعها يختلف عن الباقي.',
                        items: [
                            { q: 'Which of the following is NOT a noun?', choices: ['Autumn', 'Winter', 'Climate', 'Cloudy'], a: 'Cloudy', why: 'cloudy صفة، والباقي أسماء ما تنلمس.' },
                            { q: 'Which of the following is NOT a verb?', choices: ['Teacher', 'Listen', 'Watch', 'Work'], a: 'Teacher', why: 'teacher شخص، يعني اسم.' },
                            { q: 'Which of the following is NOT a noun?', choices: ['uncle', 'speaks', 'city', 'hobby'], a: 'speaks' },
                            { q: 'Which of the following is NOT a verb?', choices: ['study', 'live', 'have', 'daughter'], a: 'daughter' },
                            { q: 'Which of the following is NOT a noun?', choices: ['people', 'children', 'go', 'women'], a: 'go', why: 'people و children و women جموع شاذة، بس أسماء.' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise D: Singular or plural?',
                        instructions: 'اختر الكلمة الصحيحة.',
                        items: [
                            { q: 'My grandfather has four ___.', choices: ['cow', 'cows', 'cowes'], a: 'cows' },
                            { q: 'Both ___ in my family are teachers.', choices: ['woman', 'womans', 'women'], a: 'women', why: 'woman جمعها شاذ: women.' },
                            { q: 'My aunt has three ___.', choices: ['childs', 'child', 'children'], a: 'children', why: 'child جمعه شاذ.' },
                            { q: 'Many ___ visit AlUla in winter.', choices: ['person', 'people', 'peoples'], a: 'people', why: 'person جمعه people، و people جمع أصلًا.' },
                            { q: 'Yanbu and Jeddah are two ___.', choices: ['citys', 'cityes', 'cities'], a: 'cities', why: 'ساكن + y ← ies.' },
                            { q: 'I have only one ___.', choices: ['sister', 'sisters', 'sisteres'], a: 'sister', why: 'one = مفرد.' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise E: Write the plural',
                        instructions: 'اكتب الجمع من راسك.',
                        items: [
                            { q: 'one woman → two ___', a: 'women' },
                            { q: 'one box → three ___', a: 'boxes' },
                            { q: 'one family → two ___', a: 'families' },
                            { q: 'one person → five ___', a: 'people' },
                        ],
                    },
                ],
            },
        ],
    },
    // ENG 001 · Unit 1: الدروس 1.2 و1.3 و1.5 و1.6 ومهمة الوحدة
    ...UNIT1_TOPICS,
    ...UNIT2_TOPICS,
    ...UNIT3_TOPICS,
    ...UNIT4_TOPICS,
    ...UNIT5_TOPICS,
    ...UNIT6_TOPICS,
    ...UNIT7_TOPICS,
    ...UNIT8_TOPICS,
];

/** رمز المادة في الرابط: ENGL 101 ← engl-101 */
export const courseSlug = (course: string) => course.toLowerCase().trim().replace(/\s+/g, '-');

export const lessonPath = (topic: Topic, lesson: CourseLesson) => `/learn/${topic.slug}/${courseSlug(lesson.course)}`;

export function findLesson(topicSlug: string, course: string) {
    const topic = TOPICS.find((t) => t.slug === topicSlug);
    const lesson = topic?.lessons.find((l) => courseSlug(l.course) === course);
    return topic && lesson ? { topic, lesson } : null;
}

/** دروس ثانية من نفس المادة ونفس المصدر، عشان الطالب يكمل */
export function relatedLessons(topic: Topic, lesson: CourseLesson) {
    return TOPICS.flatMap((t) =>
        t === topic ? [] : t.lessons.filter((l) => l.course === lesson.course && l.unit === lesson.unit).map((l) => ({ topic: t, lesson: l })),
    );
}

// توحيد الحروف العربية والإنجليزية حتى يلقى البحث "الجمل" و"الجمل " و"Sentences"
const normalize = (s: string) =>
    s
        .toLowerCase()
        .replace(/[ً-ْـ]/g, '')
        .replace(/[أإآ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .trim();

/** يرجع العناوين اللي تطابق البحث، وكل عنوان معه كل دروسه في المواد */
export function searchTopics(query: string): Topic[] {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    if (words.length === 0) return TOPICS;
    return TOPICS.filter((t) => {
        const haystack = normalize(
            [t.title, t.titleAr, ...t.keywords, ...t.lessons.flatMap((l) => [l.title, l.course, l.unit ?? ''])].join(' '),
        );
        return words.every((w) => haystack.includes(w));
    });
}

/** الأقسام اللي يطلع فيها البلوك داخل الدرس في الشاشات الكبيرة */
export function blockViews(block: Block): LessonView[] {
    if (block.view === 'both') return ['explain', 'examples'];
    if (block.view) return [block.view];
    if (block.type === 'exercise') return ['practice'];
    if (block.type === 'try') return ['examples']; // بعد المثال اللي يناسبه
    if (block.type === 'map' || block.type === 'tree' || block.type === 'names') return ['explain', 'examples', 'practice']; // الخريطة والشجرة يحتاجها الشرح والأمثلة والتمارين
    if (block.type === 'formula') return ['explain', 'examples']; // القاعدة تطلع فوق أمثلتها بعد
    if (block.type === 'example' || block.type === 'breakdown' || block.type === 'fix') return ['examples'];
    return ['explain'];
}

export interface Suggestion {
    /** الكلمة اللي تطلع للطالب وتنكتب في البحث لو اختارها */
    label: string;
    topic: Topic;
}

/**
 * اقتراحات وهو يكتب: الكلمات (عناوين وكلمات بحث) اللي تبدأ باللي كتبه،
 * أو فيها كلمة تبدأ فيه. اللي تبدأ فيه من أولها تطلع أول.
 */
export function suggest(query: string, limit = 6): Suggestion[] {
    const q = normalize(query);
    if (!q) return [];
    const seen = new Set<string>();
    const starts: Suggestion[] = [];
    const words: Suggestion[] = [];
    for (const topic of TOPICS) {
        for (const label of [topic.title, topic.titleAr, ...topic.keywords]) {
            const n = normalize(label);
            if (seen.has(n) || n === q) continue;
            if (n.startsWith(q)) starts.push({ label, topic });
            else if (n.split(/[\s-]+/).some((w) => w.startsWith(q))) words.push({ label, topic });
            else continue;
            seen.add(n);
        }
    }
    return [...starts.sort((a, b) => a.label.length - b.label.length), ...words].slice(0, limit);
}
