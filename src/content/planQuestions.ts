// أسئلة "خطة التحسين": شجرة، كل سؤال يعتمد على اللي قبله.
// مثلًا اللي هدفه مادة بالكلية ينسأل أي مادة ووش وضعه فيها، واللي هدفه IELTS ينسأل الدرجة اللي يبيها.
// والذكاء ما يسأل شي: ياخذ الأجوبة في الآخر ويبني الخطة بس. الأسئلة مبنية على docs/plan-research.md.
//
// لإضافة سؤال: زد عنصر في NODES، وخل سؤال قبله يوديه له في next.

export type Answers = Record<string, string[]>

export interface PlanNode {
    id: string
    /** نص السؤال، وممكن يتغير حسب الأجوبة السابقة */
    q: string | ((a: Answers) => string)
    hint?: string
    options: string[] | ((a: Answers) => string[])
    /** يقدر يختار أكثر من خيار (لين max) */
    multi?: boolean
    max?: number
    /** السؤال الجاي حسب الأجوبة، و null = خلصت الأسئلة ونبني الخطة */
    next: (a: Answers) => string | null
    /** مرحلة السؤال (1..7) عشان شريط التقدم */
    stage: number
}

const first = (a: Answers, id: string) => a[id]?.[0] ?? ''

export const UNKNOWN_LEVEL = 'ما أعرف مستواي'
const isExamGoal = (a: Answers) => /الكلية|IELTS/.test(first(a, 'goal'))

/** أول سؤال */
export const START = 'level'
/** اختبار الكلمات: شاشة خاصة (VOCAB_CHECK) تطلع للي ما يعرف مستواه */
export const VOCAB_NODE = 'vocab'

export const NODES: Record<string, PlanNode> = {
    level: {
        id: 'level',
        q: 'وش مستواك في الإنجليزي؟',
        hint: 'المستويات المعروفة من A1 (مبتدئ) لين C1 (متقدم).',
        options: ['A1', 'A2', 'B1', 'B2', 'C1', UNKNOWN_LEVEL],
        next: (a) => (first(a, 'level') === UNKNOWN_LEVEL ? VOCAB_NODE : 'goal'),
        stage: 1,
    },
    goal: {
        id: 'goal',
        q: 'وش هدفك الأساسي؟',
        options: ['مادة إنجليزي في الكلية', 'اختبار IELTS أو STEP', 'الشغل', 'المحادثة والتواصل', 'تحسين عام'],
        next: (a) =>
            ({
                'مادة إنجليزي في الكلية': 'course',
                'اختبار IELTS أو STEP': 'test',
                الشغل: 'work',
                'المحادثة والتواصل': 'talk',
            })[first(a, 'goal')] ?? 'weak',
        stage: 2,
    },
    course: {
        id: 'course',
        q: 'أي مادة؟',
        options: ['ENGL 101', 'ENGL 102', 'ENGL 103 أو أعلى', 'مادة إنجليزي ثانية'],
        next: () => 'courseState',
        stage: 3,
    },
    courseState: {
        id: 'courseState',
        q: 'وش وضعك فيها؟',
        options: ['أخاف أرسب', 'ناجح بس أبي أرفع درجتي', 'أفهم بس أبي أتقن أكثر'],
        next: () => 'deadline',
        stage: 3,
    },
    test: {
        id: 'test',
        q: 'أي اختبار، وكم الدرجة اللي تحتاجها؟',
        options: ['IELTS 5.5', 'IELTS 6 أو 6.5', 'IELTS 7 أو أكثر', 'STEP أقل من 80', 'STEP 80 أو أكثر'],
        next: () => 'deadline',
        stage: 3,
    },
    work: {
        id: 'work',
        q: 'وش تحتاج الإنجليزي فيه بشغلك؟',
        hint: 'اختر شي أو شيئين.',
        options: ['أكتب إيميلات وتقارير', 'أتكلم في الاجتماعات', 'مقابلات وظيفية', 'أفهم مستندات ومواد تقنية'],
        multi: true,
        max: 2,
        next: () => 'deadline',
        stage: 3,
    },
    talk: {
        id: 'talk',
        q: 'وين تحتاج تتكلم أكثر؟',
        hint: 'اختر شي أو شيئين.',
        options: ['محادثات يومية', 'السفر', 'مع زملاء أو أصحاب أجانب', 'أعرض وأقدّم قدام ناس'],
        multi: true,
        max: 2,
        next: () => 'deadline',
        stage: 3,
    },
    deadline: {
        id: 'deadline',
        q: (a) => (isExamGoal(a) ? 'متى الاختبار؟' : 'متى تبي تحس بفرق؟'),
        options: (a) => (isExamGoal(a) ? ['خلال أسبوعين', 'خلال شهر', 'خلال 3 شهور', 'بعد أكثر من 3 شهور'] : ['خلال شهر', 'خلال 3 شهور', 'خلال 6 شهور', 'ما عندي موعد']),
        next: () => 'weak',
        stage: 4,
    },
    weak: {
        id: 'weak',
        q: 'وش أصعب جزء عليك؟',
        hint: 'اختر الأصعب، وبنسألك عنه أكثر.',
        options: ['الكلمات', 'القواعد', 'الاستماع', 'المحادثة والنطق', 'القراءة', 'الكتابة'],
        next: (a) =>
            ({
                الكلمات: 'p_vocab',
                القواعد: 'p_grammar',
                الاستماع: 'p_listening',
                'المحادثة والنطق': 'p_speaking',
                القراءة: 'p_reading',
                الكتابة: 'p_writing',
            })[first(a, 'weak')] ?? 'minutes',
        stage: 5,
    },
    p_vocab: {
        id: 'p_vocab',
        q: 'وش يصير معك في الكلمات؟',
        hint: 'اختر كل اللي ينطبق.',
        options: ['أتعلمها وأنساها بسرعة', 'ما أعرف وش الكلمات اللي أتعلمها', 'أعرف معناها بس ما أعرف أستخدمها', 'كلماتي قليلة في مواضيع مادتي أو شغلي'],
        multi: true,
        max: 3,
        next: () => 'minutes',
        stage: 6,
    },
    p_grammar: {
        id: 'p_grammar',
        q: 'وش يصير معك في القواعد؟',
        options: ['ما أفهم القواعد أصلًا', 'أفهمها بس أغلط وقت الكتابة', 'أفهمها بس أغلط وقت الكلام'],
        next: () => 'grammarArea',
        stage: 6,
    },
    grammarArea: {
        id: 'grammarArea',
        q: 'أي قواعد تلخبطك أكثر؟',
        hint: 'اختر لين 3.',
        options: ['الأزمنة (الماضي والمضارع…)', 'ترتيب الكلمات في الجملة', 'أدوات الربط وعلامات الترقيم', 'المفرد والجمع و a / an / the', 'حروف الجر (in, on, at)', 'ما أدري، أغلط في كل شي'],
        multi: true,
        max: 3,
        next: () => 'minutes',
        stage: 6,
    },
    p_listening: {
        id: 'p_listening',
        q: 'وش يصير معك في الاستماع؟',
        hint: 'اختر كل اللي ينطبق.',
        options: ['يتكلمون بسرعة وما ألحق', 'اللهجات تلخبطني', 'فيه كلمات كثير ما أعرفها', 'أفهم الكلمات بس أضيع الفكرة'],
        multi: true,
        max: 3,
        next: () => 'minutes',
        stage: 6,
    },
    p_speaking: {
        id: 'p_speaking',
        q: 'وش يصير معك في الكلام؟',
        hint: 'اختر كل اللي ينطبق.',
        options: ['أتوتر أو أستحي', 'ما ألقى الكلمات وقت الكلام', 'نطقي مو واضح', 'أتكلم ببطء وأوقف كثير'],
        multi: true,
        max: 3,
        next: () => 'minutes',
        stage: 6,
    },
    p_reading: {
        id: 'p_reading',
        q: 'وش يصير معك في القراءة؟',
        hint: 'اختر كل اللي ينطبق.',
        options: ['أقرأ ببطء وأترجم كل كلمة', 'أفهم الكلمات بس ما أفهم الفكرة العامة', 'النصوص الأكاديمية صعبة علي'],
        multi: true,
        max: 3,
        next: () => 'minutes',
        stage: 6,
    },
    p_writing: {
        id: 'p_writing',
        q: 'وش يصير معك في الكتابة؟',
        hint: 'اختر كل اللي ينطبق.',
        options: ['أغلط في القواعد', 'ما أعرف أرتب أفكاري', 'كلماتي قليلة وأكرر نفسي', 'ما أعرف من وين أبدأ'],
        multi: true,
        max: 3,
        // اللي يغلط في القواعد نسأله أي قواعد بالضبط
        next: (a) => (a.p_writing?.includes('أغلط في القواعد') ? 'grammarArea' : 'minutes'),
        stage: 6,
    },
    minutes: {
        id: 'minutes',
        q: 'كم دقيقة تقدر تعطي باليوم؟',
        hint: 'شوي كل يوم أفضل من كثير مرة بالأسبوع.',
        options: ['10 دقايق', '20 دقيقة', '30 دقيقة', 'ساعة أو أكثر'],
        next: () => null,
        stage: 7,
    },
}

export const TOTAL_STAGES = 7
export const questionText = (node: PlanNode, a: Answers) => (typeof node.q === 'function' ? node.q(a) : node.q)
export const questionOptions = (node: PlanNode, a: Answers) => (typeof node.options === 'function' ? node.options(a) : node.options)

// ───── اختبار الكلمات السريع (Yes/No) ─────
// كلمات حقيقية من مستويات شيوع مختلفة، وبينها كلمات وهمية (مو موجودة) تكشف التخمين.
// ترتيبها مخلوط عشان ما يبان النمط.

export interface VocabItem {
    word: string;
    /** المستوى: 1 = أول 1000 كلمة، 2 = الألفين، 3، 5، و'awl' كلمات أكاديمية. fake = كلمة وهمية */
    band: 1 | 2 | 3 | 5 | 'awl' | 'fake';
}

export const VOCAB_CHECK: VocabItem[] = [
    { word: 'family', band: 1 },
    { word: 'attempt', band: 2 },
    { word: 'dorlent', band: 'fake' },
    { word: 'reluctant', band: 3 },
    { word: 'because', band: 1 },
    { word: 'hypothesis', band: 'awl' },
    { word: 'flinder', band: 'fake' },
    { word: 'silence', band: 2 },
    { word: 'devour', band: 5 },
    { word: 'margin', band: 3 },
    { word: 'grompish', band: 'fake' },
    { word: 'allocate', band: 'awl' },
    { word: 'obscure', band: 5 },
    { word: 'plessage', band: 'fake' },
];

/** تقدير المفردات من اختبار الكلمات، كنص يفهمه الذكاء */
export function vocabEstimate(known: Set<string>): string {
    const bands: Record<string, { total: number; yes: number }> = {}
    let fakes = 0
    for (const item of VOCAB_CHECK) {
        if (item.band === 'fake') {
            if (known.has(item.word)) fakes++
            continue
        }
        const b = String(item.band)
        bands[b] ??= { total: 0, yes: 0 }
        bands[b].total++
        if (known.has(item.word)) bands[b].yes++
    }
    const line = (b: string, name: string) => `${name}: ${bands[b]?.yes ?? 0} من ${bands[b]?.total ?? 0}`
    // أعلى مستوى يعرف كل كلماته تقريبًا
    const order: [string, string][] = [['1', 'أول 1000'], ['2', 'أول 2000'], ['3', 'أول 3000'], ['5', 'أول 5000']]
    let reach = 'أقل من أول 1000 كلمة'
    for (const [b, name] of order) {
        if ((bands[b]?.yes ?? 0) >= (bands[b]?.total ?? 1)) reach = `تقريبًا ${name} كلمة`
        else break
    }
    return [
        `تقدير المفردات (اختبار أعرفها/ما أعرفها): ${reach}.`,
        `التفاصيل: ${line('1', 'كلمات أول 1000')}، ${line('2', 'أول 2000')}، ${line('3', 'أول 3000')}، ${line('5', 'أول 5000')}، ${line('awl', 'كلمات أكاديمية')}.`,
        fakes > 0
            ? `تنبيه: قال يعرف ${fakes} من 4 كلمات وهمية، يعني غالبًا يخمّن ومفرداته أقل من التقدير.`
            : 'ما اختار أي كلمة وهمية (تقديره صادق غالبًا).',
    ].join('\n')
}
