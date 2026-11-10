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
    | { type: 'map'; rows: string[][]; caption?: string };

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
    /** مقاطع يوتيوب تشرح الدرس للي يحب يتابع. تطلع أول قسم الشرح */
    videos?: LessonVideo[];
    blocks: Block[];
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
                course: 'ENG 001',
                unit: 'Unit 1 · People',
                title: 'Nouns and verbs',
                warmup: {
                    q: 'كلمة work هنا اسم ولا فعل؟',
                    sentence: 'I love my work.',
                    choices: ['اسم (Noun)', 'فعل (Verb)'],
                    answer: 0,
                    why: 'جات بعد my، والكلمة اللي بعد my أو the أو a تكون اسم. ونفس الكلمة في I work in Yanbu فعل. تحت بتعرف كيف تفرق بينهم من مكان الكلمة.',
                },
                blocks: [
                    { type: 'text', text: 'كل كلمة في الإنجليزي لها نوع (part of speech). نبدأ بأهم نوعين: الاسم (noun) والفعل (verb). والاختبار يسأل عنهم مباشرة، مثل: What is the verb in this sentence? أو The part of speech of the underlined word is…' },

                    { type: 'heading', text: 'الاسم (Noun)' },
                    { type: 'rule', text: 'Noun = a person, a thing, or a place' },
                    { type: 'table', head: ['People', 'Things', 'Places'], rows: [['teacher', 'car', 'Yanbu'], ['brother', 'phone', 'university'], ['Sultan', 'book', 'farm']], stackBy: 'column' },
                    { type: 'text', text: 'وفيه أسماء ما تنلمس، ومع كذا هي أسماء: music و weather و autumn و climate و English و family. الاختبار يحب يجيبها في سؤال Which of the following is NOT a noun?' },

                    { type: 'heading', text: 'الفعل (Verb)' },
                    { type: 'rule', text: 'Verb = an action or a state' },
                    { type: 'table', head: ['Actions (حركة)', 'States (حالة)'], rows: [['work', 'is / am / are'], ['play', 'like'], ['speak', 'have'], ['study', 'love']], stackBy: 'column' },
                    { type: 'note', text: 'is و am و are أفعال! كثير يحسبونها مو أفعال. في The weather is cold. الفعل هو is.' },

                    { type: 'heading', text: 'كيف تعرفه داخل الجملة؟' },
                    { type: 'text', text: 'لا تحكم على الكلمة لحالها، شوف وش قبلها:' },
                    { type: 'formula', parts: [['a / an / the / my / his / two …'], ['Noun', 'n']] },
                    { type: 'formula', parts: [['I / you / he / she / we / they'], ['Verb', 'v']] },
                    {
                        type: 'list',
                        lang: 'ar',
                        items: [
                            'قبلها a أو an أو the ← اسم: a farmer، the book',
                            'قبلها my أو his أو her أو our أو their ← اسم: my work، his son',
                            'قبلها رقم ← اسم: two brothers، three languages',
                            'جات بعد الفاعل I / you / he / she / we / they ← فعل: He lives، They play',
                        ],
                    },

                    { type: 'heading', text: 'فخ الاختبار: نفس الكلمة اسم وفعل' },
                    {
                        type: 'table',
                        head: ['Word', 'Verb', 'Noun'],
                        rows: [
                            ['work', 'I work in a company.', 'I love my work.'],
                            ['call', 'I call my friends every day.', 'The phone call was short.'],
                            ['answer', 'I answer the questions.', 'The answer is easy.'],
                            ['plan', 'We plan our trip.', 'My plan is simple.'],
                            ['watch', 'I watch TV at night.', 'My watch is new.'],
                        ],
                    },
                    { type: 'note', text: 'احكم على الكلمة من مكانها مو من معناها: بعد a / the / my تكون اسم، وبعد الفاعل تكون فعل.' },

                    { type: 'heading', text: 'المفرد والجمع (Singular and plural)' },
                    { type: 'rule', text: 'Singular = 1  |  Plural = 2+' },
                    { type: 'text', text: 'أغلب الأسماء نجمعها بإضافة s:' },
                    { type: 'table', head: ['Singular', 'Plural'], rows: [['one job', 'two jobs'], ['one brother', 'three brothers'], ['one language', 'two languages']] },
                    { type: 'text', text: 'وفيه 4 جموع شاذة ما ياخذون s، لازم تحفظهم:' },
                    { type: 'table', head: ['Singular', 'Plural'], rows: [['man', 'men'], ['woman', 'women'], ['person', 'people'], ['child', 'children']] },
                    { type: 'note', text: 'إملاء الجمع: الكلمة اللي تنتهي بـ ch أو sh أو s أو x تاخذ es (watch → watches، class → classes). واللي تنتهي بحرف ساكن + y تتغير y إلى ies (family → families، city → cities).' },
                    { type: 'note', text: 'إذا الكلمة لا اسم ولا فعل، مثل cloudy أو nice أو cold، فهي غالبًا صفة (adjective). الصفات لها درس في الوحدة 2، بس الاختبار يحطها خيار ثالث من الحين.' },

                    // ── الأمثلة ──
                    { type: 'heading', text: 'أمثلة: الاسم والفعل داخل الجملة' },
                    { type: 'text', view: 'examples', text: 'في كل مثال: الاسم بالبنفسجي، والفعل بالأخضر.' },
                    { type: 'breakdown', parts: [['Sultan', 'n'], ['is', 'v'], ['a'], ['farmer', 'n'], ['.', 'p']], ar: 'is فعل حالة، و Sultan و farmer أسماء لأنها أشخاص.' },
                    { type: 'breakdown', parts: [['My'], ['brother', 'n'], ['studies', 'v'], ['at the'], ['university', 'n'], ['in'], ['Yanbu', 'n'], ['.', 'p']], ar: 'brother شخص، و university و Yanbu أماكن.' },
                    { type: 'breakdown', parts: [['The'], ['weather', 'n'], ['is', 'v'], ['cold', 'adj'], ['in'], ['winter', 'n'], ['.', 'p']], ar: 'weather و winter أسماء حتى لو ما تنلمس، و cold صفة.' },
                    { type: 'breakdown', parts: [['I'], ['love', 'v'], ['my'], ['work', 'n'], ['.', 'p']], ar: 'work بعد my، فهي اسم.' },
                    { type: 'breakdown', parts: [['I'], ['work', 'v'], ['in a'], ['hospital', 'n'], ['.', 'p']], ar: 'هنا work بعد الفاعل I، فهي فعل.' },
                    { type: 'breakdown', parts: [['My'], ['uncle', 'n'], ['has', 'v'], ['two'], ['children', 'n'], ['.', 'p']], ar: 'children جمع child، جمع شاذ بدون s.' },
                    { type: 'try', task: 'اكتب جملة عن واحد من عايلتك: وش يشتغل، أو وين يعيش، أو وش يحب. وتأكد إن فيها فعل واسمين على الأقل.', placeholder: 'My uncle works in a bank.' },
                    { type: 'try', task: 'اكتب جملة فيها كلمة work مرتين: مرة فعل ومرة اسم.', reference: 'I work in Yanbu, and I love my work.', placeholder: 'I work ...' },

                    // ── التمارين ──
                    {
                        type: 'exercise',
                        title: 'Exercise A: Noun or verb?',
                        instructions: 'الكلمة اللي تحتها خط اسم ولا فعل؟ اختر N للاسم و V للفعل، وبعدين اضغط تحقق.',
                        choices: ['N', 'V'],
                        items: [
                            { q: 'Chloe is from **California**.', a: 'N', why: 'مكان.' },
                            { q: 'Sultan **lives** on a farm.', a: 'V', why: 'جات بعد الفاعل Sultan.' },
                            { q: 'Her father is an **engineer**.', a: 'N', why: 'جات بعد an.' },
                            { q: 'He **is** interested in music.', a: 'V', why: 'is فعل حالة.' },
                            { q: 'I **work** in an international company.', a: 'V', why: 'جات بعد الفاعل I.' },
                            { q: 'I always love the **work** of that writer.', a: 'N', why: 'جات بعد the.' },
                            { q: 'My **plan** is to study in Canada.', a: 'N', why: 'جات بعد my.' },
                            { q: 'I **call** my friends every day.', a: 'V', why: 'جات بعد الفاعل I.' },
                            { q: 'The phone **call** was short.', a: 'N', why: 'المقصود المكالمة نفسها، وقبلها the phone.' },
                            { q: 'She **speaks** three languages.', a: 'V', why: 'جات بعد الفاعل She.' },
                            { q: 'He speaks three **languages**.', a: 'N', why: 'جات بعد رقم.' },
                            { q: 'The **answer** to my question was easy.', a: 'N', why: 'جات بعد the.' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise B: Exam style',
                        instructions: 'نفس شكل أسئلة الكويز: اختر الجواب الصحيح لكل سؤال، وبعدين اضغط تحقق.',
                        items: [
                            { q: 'In the sentence "The student studies Maths." what is the verb?', choices: ['The', 'student', 'studies', 'Maths'], a: 'studies' },
                            { q: 'In the sentence "The weather is cold." what is the noun?', choices: ['The', 'weather', 'is', 'cold'], a: 'weather', why: 'is فعل و cold صفة.' },
                            { q: 'In the sentence "My sister likes coffee." what is the verb?', choices: ['My', 'sister', 'likes', 'coffee'], a: 'likes' },
                            { q: 'In the sentence "Ali is a doctor." what is the verb?', choices: ['Ali', 'is', 'a', 'doctor'], a: 'is', why: 'is فعل حالة.' },
                            { q: 'In the sentence "We watch TV at night." what is the noun?', choices: ['We', 'watch', 'TV', 'at'], a: 'TV', why: 'watch هنا فعل لأنها بعد الفاعل We.' },
                            { q: 'My **watch** is new. The part of speech of the underlined word is a:', choices: ['Noun', 'Verb', 'Adjective'], a: 'Noun', why: 'جات بعد my.' },
                            { q: 'She is a **nice** teacher. The part of speech of the underlined word is a:', choices: ['Noun', 'Verb', 'Adjective'], a: 'Adjective', why: 'لا اسم ولا فعل، توصف teacher.' },
                            { q: 'They **answer** the questions correctly. The part of speech of the underlined word is a:', choices: ['Noun', 'Verb', 'Adjective'], a: 'Verb', why: 'جات بعد الفاعل They.' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise C: Which word is different?',
                        instructions: 'اختر الكلمة اللي نوعها يختلف عن الباقي.',
                        items: [
                            { q: 'Which of the following is NOT a noun?', choices: ['Autumn', 'Winter', 'Cloudy', 'Climate'], a: 'Cloudy', why: 'cloudy صفة، والباقي أسماء.' },
                            { q: 'Which of the following is NOT a verb?', choices: ['Listen', 'Watch', 'Work', 'Teacher'], a: 'Teacher', why: 'teacher شخص، فهي اسم.' },
                            { q: 'Which of the following is NOT a noun?', choices: ['uncle', 'speaks', 'city', 'hobby'], a: 'speaks' },
                            { q: 'Which of the following is NOT a verb?', choices: ['study', 'live', 'daughter', 'have'], a: 'daughter' },
                            { q: 'Which of the following is NOT a noun?', choices: ['people', 'children', 'go', 'women'], a: 'go', why: 'الباقي جموع شاذة، وكلها أسماء.' },
                            { q: 'Which of the following is NOT a verb?', choices: ['are', 'like', 'have', 'farm'], a: 'farm', why: 'are و like و have أفعال حالة.' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise D: Singular or plural?',
                        instructions: 'اختر الكلمة الصحيحة لكل جملة.',
                        items: [
                            { q: 'My mother has three ___.', choices: ['sister', 'sisters'], a: 'sisters', why: 'بعد three يجي جمع.' },
                            { q: 'I have only one ___.', choices: ['uncle', 'uncles'], a: 'uncle' },
                            { q: 'My aunt is a ___.', choices: ['teacher', 'teachers'], a: 'teacher', why: 'بعد a يجي مفرد.' },
                            { q: 'He speaks two ___.', choices: ['language', 'languages'], a: 'languages' },
                            { q: 'Two ___ work on the farm.', choices: ['man', 'mans', 'men'], a: 'men', why: 'جمع شاذ.' },
                            { q: 'My brother has two ___.', choices: ['child', 'childs', 'children'], a: 'children', why: 'جمع شاذ.' },
                            { q: 'Many ___ live in Riyadh.', choices: ['person', 'peoples', 'people'], a: 'people', why: 'جمع person هو people.' },
                            { q: 'Three ___ work in this hospital.', choices: ['woman', 'womans', 'women'], a: 'women' },
                            { q: 'Yanbu and Jeddah are two ___.', choices: ['citys', 'cities'], a: 'cities', why: 'حرف ساكن + y، فتصير ies.' },
                            { q: 'My father ___ TV every night.', choices: ['watchs', 'watches'], a: 'watches', why: 'تنتهي بـ ch، فتاخذ es.' },
                        ],
                    },
                    {
                        type: 'exercise',
                        title: 'Exercise E: Write about your family',
                        instructions: 'اكتب جملك عن عايلتك.',
                        items: [
                            { q: 'Write a sentence about one person in your family. Use one verb and two nouns.', a: 'My father works in a hospital in Yanbu.' },
                            { q: 'Write a sentence with a plural noun (for example: brothers, sisters, children).', a: 'I have two brothers and three sisters.' },
                            { q: 'Write two sentences with the word "call": one as a verb and one as a noun.', a: 'I call my mother every day. The call is always long.' },
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
    if (block.type === 'map') return ['explain', 'examples', 'practice']; // الخريطة يحتاجها الشرح والأمثلة والتمارين
    if (block.type === 'formula') return ['explain', 'examples']; // القاعدة تطلع فوق أمثلتها بعد
    if (block.type === 'example' || block.type === 'breakdown') return ['examples'];
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
