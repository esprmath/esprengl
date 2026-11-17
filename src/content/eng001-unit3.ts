// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 3: Lifestyle
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 3 · Lifestyle';
const base = ['تحضيري', 'ENG 001', 'Unit 3', 'Lifestyle'];

// ─────────────── 3.1 Time expressions + prepositions of time (RW ص 71، LS ص 75) ───────────────
// الجو: "يوم طالب". خريطة When؟ ← at / in / on / Which one؟، كل فرع شرح ← مثال ← سؤال ← بطاقة تصحيح.
// every مقابل on Fridays داخل فرع on (الاثنين بمعنى "كل"). والمقارنة والأغلاط الشائعة في Which one؟
const timeExpressions: Topic = {
    slug: 'time-expressions',
    title: 'Time expressions and prepositions of time',
    titleAr: 'تعابير الوقت و in / on / at',
    keywords: ['time expressions', 'prepositions of time', 'in on at', 'at', 'on', 'in', 'every', 'every day', 'weekend', 'وقت', 'حروف الجر', 'متى', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Time expressions and prepositions of time',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'at و in و on كلها "في" بالعربي، والفرق نوع الوقت: ساعة ← at، فترة ← in، يوم ← on. وللتكرار: every + مفرد.',
                sections: [
                    {
                        label: 'at',
                        ar: 'الساعة',
                        kind: 'n',
                        what: 'الوقت المحدد: الساعة، و night، و the weekend.',
                        formula: [['at', 'x', 'Preposition'], ['6:30 / night / the weekend', 'n']],
                        examples: [
                            { parts: [['I get up'], ['at 6:30', 'x', 'Clock'], ['. My father works'], ['at night', 'x', 'Night'], ['.', 'p']], ar: 'at مع الساعة، ومع night بدون the.' },
                        ],
                        mistakes: [
                            { wrong: 'She studies in the night.', right: 'She studies at night.', why: 'night: at.' },
                        ],
                    },
                    {
                        label: 'in',
                        ar: 'الفترة',
                        kind: 'v',
                        what: 'جزء من اليوم، والشهر، والفصل، والسنة.',
                        formula: [['in', 'x', 'Preposition'], ['the morning / July / summer / 2026', 'n']],
                        examples: [
                            { parts: [['I study'], ['in the afternoon', 'x', 'Part of day'], ['. We travel to Abha'], ['in summer', 'x', 'Season'], ['.', 'p']], ar: 'in مع الفترة الأطول من الساعة.' },
                        ],
                        mistakes: [
                            { wrong: 'My birthday is on March.', right: 'My birthday is in March.', why: 'الشهر: in.' },
                        ],
                    },
                    {
                        label: 'on',
                        ar: 'اليوم',
                        kind: 'adj',
                        what: 'اليوم والتاريخ. وللتكرار: every + مفرد، أو on + يوم بـ s.',
                        formula: [['on', 'x', 'Preposition'], ['Sunday / 10 May / Monday morning', 'n']],
                        examples: [
                            { parts: [['I play football'], ['on Tuesday afternoon', 'x', 'Day + part'], ['. We eat kabsa'], ['on Fridays', 'x', 'Every Friday'], ['.', 'p']], ar: 'اليوم يكسب. و on Fridays = كل جمعة.' },
                        ],
                        mistakes: [
                            { wrong: 'I go to the gym on every Monday.', right: 'I go to the gym every Monday.', why: 'every ما قبلها on.' },
                        ],
                    },
                    {
                        label: 'Which one?',
                        ar: 'أي وحدة؟',
                        kind: 'x',
                        what: 'اسأل: ساعة ولا فترة ولا يوم؟ وعند every يجي بعدها مفرد.',
                        formula: [['at', 'x', 'Clock'], ['|'], ['in', 'x', 'Period'], ['|'], ['on', 'x', 'Day']],
                        examples: [
                            { parts: [['On Sunday', 'x', 'Day'], [',', 'p'], ['I leave home'], ['at 7:15', 'x', 'Clock'], ['and study'], ['in the afternoon', 'x', 'Part of day'], ['.', 'p']], ar: 'ثلاث حروف في جملة وحدة.' },
                        ],
                        mistakes: [
                            { wrong: 'We have a test in Sunday.', right: 'We have a test on Sunday.', why: 'اليوم: on.' },
                            { wrong: 'He drinks coffee every mornings.', right: 'He drinks coffee every morning.', why: 'بعد every مفرد.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'I have a class ___ Monday morning.',
                choices: ['in', 'on', 'at'],
                answer: 1,
                why: 'مع اليوم نستخدم on، حتى لو معه جزء من اليوم: on Monday morning.',
            },
            blocks: [
                { type: 'text', text: 'at و in و on كلها تعني "في" بالعربي، والفرق نوع الوقت. وأمثلتنا من يوم طالب.' },

                // ── أربع فروع ──
                {
                    type: 'hub',
                    word: 'When?',
                    ar: 'متى؟',
                    branches: [
                        {
                            label: 'at',
                            ar: 'الساعة',
                            kind: 'n',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'at للوقت المحدد، كأنه نقطة: الساعة، و night، و the weekend. (الأمريكان يقولون on the weekend، وكتابنا بريطاني: at the weekend.)' },
                                { type: 'formula', parts: [['at', 'x', 'Preposition'], ['clock time / night / the weekend', 'n', 'Time']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ['get up', 'v'], ['at', 'x', 'Preposition'], ['6:30', 'n', 'Clock time'], ['.', 'p']], mean: 'أصحى الساعة 6:30.' },
                                { type: 'breakdown', parts: [['My father', 's'], ['works', 'v'], ['at', 'x', 'Preposition'], ['night', 'n', 'Time'], ['.', 'p']], mean: 'أبوي يشتغل بالليل.', ar: 'نقول at night، مو in the night.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'The bus leaves ___ 6:15.', choices: ['in', 'on', 'at'], a: 'at', why: 'الساعة: at.' },
                                        { q: 'We visit our cousins ___ the weekend.', choices: ['at', 'in', 'on'], a: 'at', why: 'the weekend مع at.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'in بدل at',
                                    kind: 'n',
                                    wrong: 'She studies in the night.',
                                    mark: 'in the',
                                    options: ['She studies at night.', 'She studies on night.', 'She studies at the night.'],
                                    answer: 'She studies at night.',
                                    parts: [['She', 's'], ['studies', 'v'], ['at night', 'x', 'Time'], ['.', 'p']],
                                    why: 'night تاخذ at، وبدون the.',
                                },
                            ],
                        },
                        {
                            label: 'in',
                            ar: 'الفترة',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'in للفترة الأطول من الساعة: جزء من اليوم (الصبح، العصر، المغرب)، والشهر، والفصل، والسنة. والاستثناء الوحيد night: at night.' },
                                { type: 'formula', parts: [['in', 'x', 'Preposition'], ['the morning / July / summer / 2026', 'n', 'Time']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ['study', 'v'], ['in', 'x', 'Preposition'], ['the afternoon', 'n', 'Part of day'], ['.', 'p']], mean: 'أذاكر العصر.' },
                                { type: 'breakdown', parts: [['My brother', 's'], ['was born', 'v'], ['in', 'x', 'Preposition'], ['2005', 'n', 'Year'], ['.', 'p']], mean: 'أخوي انولد سنة 2005.', ar: 'نقول in 2005، مع السنة مباشرة.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'I read ___ the morning.', choices: ['at', 'in', 'on'], a: 'in', why: 'جزء من اليوم: in.' },
                                        { q: 'The exam is ___ January.', choices: ['on', 'at', 'in'], a: 'in', why: 'الشهر: in.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'on بدل in',
                                    kind: 'v',
                                    wrong: 'My birthday is on March.',
                                    mark: 'on',
                                    options: ['My birthday is at March.', 'My birthday is in March.', 'My birthday is from March.'],
                                    answer: 'My birthday is in March.',
                                    parts: [['My birthday', 's'], ['is', 'v'], ['in March', 'x', 'Month'], ['.', 'p']],
                                    why: 'الشهر وحده يأخذ in. (لو معه رقم اليوم: on 5 March.)',
                                },
                            ],
                        },
                        {
                            label: 'on',
                            ar: 'اليوم',
                            kind: 'adj',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'on لليوم والتاريخ. وإذا جا اليوم مع جزء من اليوم، اليوم هو اللي يكسب وتبقى on.' },
                                { type: 'formula', parts: [['on', 'x', 'Preposition'], ['Sunday / 10 May / Monday morning', 'n', 'Day']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ['play', 'v'], ['football'], ['on', 'x', 'Preposition'], ['Tuesday afternoon', 'n', 'Day + part'], ['.', 'p']], mean: 'ألعب كورة يوم الثلاثاء العصر.', ar: 'اليوم يكسب: on Tuesday afternoon، مو in.' },
                                { type: 'breakdown', parts: [['My birthday', 's'], ['is', 'v'], ['on', 'x', 'Preposition'], ['5 March', 'n', 'Date'], ['.', 'p']], mean: 'عيد ميلادي 5 مارس.' },
                                { type: 'label', text: 'كل يوم؟ every أو on + s' },
                                { type: 'text', text: 'للتكرار عندك طريقتين: every بعدها كلمة مفرد وما قبلها on، أو on مع اليوم بـ s: on Fridays تعني كل جمعة.' },
                                { type: 'formula', parts: [['every', 'x', 'How often?'], ['singular noun', 'n'], ['|'], ['on', 'x', 'Preposition'], ['day + s', 'n']] },
                                { type: 'breakdown', parts: [['My mother', 's'], ['calls', 'v'], ['my grandmother'], ['every', 'x', 'How often?'], ['day', 'n', 'Singular'], ['.', 'p']], mean: 'أمي تتصل على جدتي كل يوم.' },
                                { type: 'breakdown', parts: [['We', 's'], ['eat', 'v'], ['kabsa'], ['on', 'x', 'Preposition'], ['Fridays', 'n', 'Every Friday'], ['.', 'p']], mean: 'ناكل كبسة كل جمعة.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'The party is ___ Thursday evening.', choices: ['in', 'on', 'at'], a: 'on', why: 'اليوم يكسب: on Thursday evening.' },
                                        { q: 'I visit my uncle ___ Thursday.', choices: ['on every', 'every', 'in every'], a: 'every', why: 'every ما قبلها on: every Thursday.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'on قبل every',
                                    kind: 'adj',
                                    wrong: 'I go to the gym on every Monday.',
                                    mark: 'on every',
                                    options: ['I go to the gym every Monday.', 'I go to the gym in every Monday.', 'I go to the gym on Monday every.'],
                                    answer: 'I go to the gym every Monday.',
                                    parts: [['I', 's'], ['go', 'v'], ['to the gym'], ['every Monday', 'x', 'How often?'], ['.', 'p']],
                                    why: 'every لحالها تكفي. ما نحط قبلها on.',
                                },
                                { type: 'anchor', lines: ['اليوم يكسب دايمًا: on Tuesday afternoon', 'كل جمعة: every Friday أو on Fridays'] },
                            ],
                        },
                        {
                            label: 'Which one?',
                            ar: 'أي وحدة؟',
                            kind: 'x',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'إذا تلخبطت، اسأل نفسك: الوقت ساعة؟ ولا فترة؟ ولا يوم؟ والجواب يختار الحرف.' },
                                {
                                    type: 'table',
                                    head: ['at', 'in', 'on'],
                                    rows: [
                                        ['7:00, midday', 'the morning, the evening', 'Sunday, Monday morning'],
                                        ['night, the weekend', 'July, summer, 2026', '10 May, Fridays'],
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['On Sunday', 'x', 'Day'], [',', 'p'], ['I', 's'], ['leave', 'v'], ['home'], ['at 7:15', 'x', 'Clock'], ['and', 'x'], ['study', 'v'], ['in the afternoon', 'x', 'Part of day'], ['.', 'p']], mean: 'يوم الأحد أطلع من البيت 7:15 وأذاكر العصر.', ar: 'ثلاث حروف في جملة وحدة، وكل واحد حسب نوع وقته.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'The match is ___ 9 pm ___ Friday.', choices: ['at / on', 'on / at', 'in / on'], a: 'at / on', why: 'الساعة: at. واليوم: on.' },
                                        { q: 'We go to the beach ___ the weekend ___ summer.', choices: ['on / in', 'at / in', 'in / at'], a: 'at / in', why: 'the weekend: at. والفصل: in.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'in قبل اليوم',
                                    kind: 'x',
                                    wrong: 'We have a test in Sunday.',
                                    mark: 'in',
                                    options: ['We have a test at Sunday.', 'We have a test on Sunday.', 'We have a test from Sunday.'],
                                    answer: 'We have a test on Sunday.',
                                    parts: [['We', 's'], ['have', 'v'], ['a test'], ['on Sunday', 'x', 'Day'], ['.', 'p']],
                                    why: 'اليوم يأخذ on دايمًا.',
                                },
                                {
                                    type: 'fix',
                                    label: 'every مع جمع',
                                    kind: 'x',
                                    wrong: 'He drinks coffee every mornings.',
                                    mark: 'mornings',
                                    options: ['He drinks coffee every morning.', 'He drinks coffee every of mornings.', 'He drinks coffee on every mornings.'],
                                    answer: 'He drinks coffee every morning.',
                                    parts: [['He', 's'], ['drinks', 'v'], ['coffee'], ['every morning', 'x', 'How often?'], ['.', 'p']],
                                    why: 'بعد every كلمة مفرد، بدون s.',
                                },
                                { type: 'anchor', lines: ['الساعة: at 7:00', 'الفترة: in the morning · in July', 'اليوم: on Friday · on 5 March'] },
                            ],
                        },
                    ],
                },

                { type: 'label', text: 'يوم طالب كامل' },
                { type: 'breakdown', parts: [['I get up'], ['at 6:30', 'x', 'Clock'], ['.', 'p'], ['I have classes'], ['in the morning', 'x', 'Part of day'], ['.', 'p'], ['On Fridays', 'x', 'Day'], [',', 'p'], ['I visit my grandparents'], ['.', 'p']], mean: 'أصحى 6:30. عندي محاضرات الصبح. وكل جمعة أزور جدي وجدتي.', ar: 'ساعة ← at، فترة ← in، يوم ← on.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: in, on or at?',
                    instructions: 'اختر حرف الجر الصحيح.',
                    choices: ['in', 'on', 'at'],
                    items: [
                        { q: 'We meet ___ the afternoon.', a: 'in', why: 'جزء من اليوم: in.' },
                        { q: 'I visit my uncle ___ Saturdays.', a: 'on', why: 'اليوم (بـ s): on.' },
                        { q: 'They play football ___ the weekend.', a: 'at', why: 'the weekend مع at.' },
                        { q: 'It is very hot ___ August.', a: 'in', why: 'الشهر: in.' },
                        { q: 'My birthday is ___ 5 March.', a: 'on', why: 'التاريخ: on.' },
                        { q: 'The shop closes ___ 11 pm.', a: 'at', why: 'الساعة: at.' },
                        { q: 'I read ___ night before I sleep.', a: 'at', why: 'night: at.' },
                        { q: 'We have Physics ___ Tuesday morning.', a: 'on', why: 'اليوم يكسب: on.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Which sentence is correct?',
                    instructions: 'كل سؤال فيه ثلاث جمل، وحدة بس صحيحة.',
                    items: [
                        { q: 'Which sentence is correct?', choices: ['We eat kabsa in Fridays.', 'We eat kabsa on Fridays.', 'We eat kabsa at Fridays.'], a: 'We eat kabsa on Fridays.', why: 'اليوم: on.' },
                        { q: 'Which sentence is correct?', choices: ['My class starts in 9:00.', 'My class starts at 9:00.', 'My class starts on 9:00.'], a: 'My class starts at 9:00.', why: 'الساعة: at.' },
                        { q: 'Which sentence is correct?', choices: ['It is very hot at summer.', 'It is very hot in summer.', 'It is very hot on summer.'], a: 'It is very hot in summer.', why: 'الفصل: in.' },
                        { q: 'Which sentence is correct?', choices: ['I call my mother every days.', 'I call my mother on every day.', 'I call my mother every day.'], a: 'I call my mother every day.', why: 'every + مفرد، وبدون on.' },
                        { q: 'Which sentence is correct?', choices: ['My exam is at 12 May.', 'My exam is on 12 May.', 'My exam is in 12 May.'], a: 'My exam is on 12 May.', why: 'التاريخ: on.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Mixed practice',
                    instructions: 'اختر الخيار الصحيح.',
                    items: [
                        { q: 'Min and Fen meet ___ 7:45 every day.', choices: ['on', 'in', 'at'], a: 'at', why: 'الساعة: at.' },
                        { q: 'Classes start ___ 8 am and finish ___ the afternoon.', choices: ['at / in', 'in / at', 'on / in', 'at / on'], a: 'at / in', why: '8 am: at. والعصر: in.' },
                        { q: 'We have Physics ___ Tuesday morning and Chemistry ___ Wednesday afternoon.', choices: ['on / on', 'in / in', 'at / on', 'on / in'], a: 'on / on', why: 'اليوم يكسب في الاثنين.' },
                        { q: 'I sleep ___ 11 pm, but ___ Fridays I sleep until 9.', choices: ['at / on', 'in / on', 'at / in', 'on / at'], a: 'at / on', why: 'الساعة: at. واليوم: on.' },
                        { q: 'My sister was born ___ 3 March ___ 2008.', choices: ['on / in', 'in / on', 'at / in', 'on / on'], a: 'on / in', why: 'التاريخ: on. والسنة: in.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: About you',
                    instructions: 'جاوب بجملة كاملة. (كتابة اختيارية)',
                    items: [
                        { q: 'What is something you do at the same time every day?', a: 'I have breakfast at 7:00 every day.' },
                        { q: 'What is something you do on one day in the week?', a: 'I visit my grandparents on Fridays.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 3.2 Parts of a sentence (RW ص 73) ───────────────
// الجو: "جملة تكبر" (Saad studies ← English ← at the institute). خريطة Sentence ← S + V / Object / Where? When? / Order.
// الفروع تبني على بعض فتمشي بالترتيب. اللي يعلق: المفعول مو حرف الجر (works in a hospital ما فيها مفعول)، والترتيب.
const partsOfSentence: Topic = {
    slug: 'parts-of-a-sentence',
    title: 'Parts of a sentence',
    titleAr: 'أجزاء الجملة: الفاعل والفعل والمفعول',
    keywords: ['parts of a sentence', 'subject', 'verb', 'object', 'prepositional phrase', 'svo', 'subject verb object', 'فاعل', 'فعل', 'مفعول', 'أجزاء الجملة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Parts of a sentence',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'الجملة أقل شي فاعل + فعل (S + V). وبعدها نزيد مفعول (وش؟ مين؟) ثم حرف جر + مكان أو وقت (وين؟ متى؟). والترتيب الأساسي: S + V + O + PP.',
                sections: [
                    {
                        label: 'S + V',
                        ar: 'فاعل وفعل',
                        kind: 's',
                        what: 'أصغر جملة كاملة: مين؟ وش يسوي؟',
                        formula: [['Subject', 's'], ['Verb', 'v']],
                        examples: [
                            { parts: [['Saad', 's'], ['studies', 'v'], ['.', 'p'], ['People and plants', 's'], ['change', 'v'], ['.', 'p']], ar: 'الفاعل ممكن يكون كلمة أو أكثر.' },
                        ],
                        mistakes: [
                            { wrong: 'Studies at the institute.', right: 'Saad studies at the institute.', why: 'لازم فاعل قبل الفعل.' },
                        ],
                    },
                    {
                        label: 'Object',
                        ar: 'المفعول',
                        kind: 'n',
                        what: 'بعد الفعل اسأل: وش؟ أو مين؟ والجواب هو المفعول.',
                        formula: [['Subject', 's'], ['Verb', 'v'], ['Object', 'n', 'What? / Who?']],
                        examples: [
                            { parts: [['Saad', 's'], ['studies', 'v'], ['English', 'n', 'Object'], ['.', 'p'], ['I', 's'], ['love', 'v'], ['it', 'n', 'Object'], ['.', 'p']], ar: 'المفعول اسم أو noun phrase أو ضمير.' },
                        ],
                        mistakes: [
                            { wrong: 'My brother has.', right: 'My brother has an exam.', why: 'has تحتاج مفعول.' },
                        ],
                    },
                    {
                        label: 'Where? When?',
                        ar: 'وين؟ متى؟',
                        kind: 'x',
                        what: 'حرف جر + مكان أو وقت. مو مفعول، معلومة زيادة.',
                        formula: [['Subject', 's'], ['Verb', 'v'], ['Prepositional phrase', 'x', 'Where? / When?']],
                        examples: [
                            { parts: [['We', 's'], ['live', 'v'], ['in Yanbu', 'x', 'Where?'], ['.', 'p'], ['Classes', 's'], ['start', 'v'], ['at 8 am', 'x', 'When?'], ['.', 'p']], ar: 'الجملة تكتمل بدون العبارة.' },
                        ],
                        mistakes: [
                            { wrong: 'We live Yanbu.', right: 'We live in Yanbu.', why: 'المكان يحتاج حرف جر.' },
                        ],
                    },
                    {
                        label: 'Order',
                        ar: 'الترتيب',
                        kind: 'v',
                        what: 'الأربعة مع بعض، والمفعول قبل المكان أو الوقت.',
                        formula: [['Subject', 's'], ['Verb', 'v'], ['Object', 'n'], ['Prepositional phrase', 'x', 'Where? / When?']],
                        examples: [
                            { parts: [['She', 's'], ['eats', 'v'], ['breakfast', 'n', 'Object'], ['at 7 am', 'x', 'When?'], ['.', 'p']], ar: 'فاعل، فعل، مفعول، ثم الوقت.' },
                        ],
                        mistakes: [
                            { wrong: 'I in the morning drink coffee.', right: 'I drink coffee in the morning.', why: 'الوقت في الآخر.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'وش المفعول به (object) في الجملة؟',
                sentence: 'My brother loves football.',
                choices: ['My brother', 'loves', 'football'],
                answer: 2,
                why: 'المفعول هو الشي اللي يقع عليه الفعل: loves وش؟ football.',
            },
            blocks: [
                { type: 'text', text: 'الجملة تكبر خطوة خطوة، ونتابع جملة سعد: Saad studies ← English ← at the institute.' },

                // ── أربع فروع تمشي بالترتيب ──
                {
                    type: 'hub',
                    word: 'Sentence',
                    ar: 'الجملة',
                    branches: [
                        {
                            label: 'S + V',
                            ar: 'فاعل وفعل',
                            kind: 's',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'أصغر جملة كاملة: فاعل (subject) يجاوب "مين؟"، وفعل (verb) يجاوب "وش يسوي؟". والفاعل ممكن يكون اسم، أو ضمير، أو أكثر من كلمة.' },
                                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Saad', 's'], ['studies', 'v'], ['.', 'p']], mean: 'سعد يذاكر.' },
                                { type: 'breakdown', parts: [['People and plants', 's'], ['change', 'v'], ['.', 'p']], mean: 'الناس والنباتات يتغيرون.', ar: 'الفاعل ممكن يكون أكثر من كلمة.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Abdullah relaxes. Which word is the verb?', choices: ['Abdullah', 'relaxes'], a: 'relaxes', why: 'relaxes هو اللي يسويه عبدالله، يعني الفعل.' },
                                        { q: 'Which one is a complete sentence?', choices: ['My brother', 'sleeps', 'My brother sleeps'], a: 'My brother sleeps', why: 'فيها فاعل (My brother) وفعل (sleeps).' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'ناقصها فعل',
                                    kind: 's',
                                    wrong: 'My brother.',
                                    mark: 'My brother',
                                    options: ['My brother sleeps.', 'Sleeps my brother.', 'My brother the sleeps.'],
                                    answer: 'My brother sleeps.',
                                    parts: [['My brother', 's'], ['sleeps', 'v'], ['.', 'p']],
                                    why: 'الجملة تحتاج فعل بعد الفاعل.',
                                },
                            ],
                        },
                        {
                            label: 'Object',
                            ar: 'المفعول',
                            kind: 'n',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'المفعول (object) هو الشي اللي يقع عليه الفعل. بعد الفعل اسأل "وش؟" أو "مين؟"، والجواب هو المفعول: اسم، أو noun phrase، أو ضمير مثل it. وانتبه: بعد be (is و am و are) ما نقول مفعول، مثل She is a student: كلمة student تكمل معنى be.' },
                                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['Object', 'n', 'What? / Who?']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Saad', 's'], ['studies', 'v'], ['English', 'n', 'Object'], ['.', 'p']], mean: 'سعد يدرس إنجليزي.', ar: 'studies وش؟ English.' },
                                { type: 'breakdown', parts: [['He', 's'], ['has', 'v'], ['a busy timetable', 'n', 'Object'], ['.', 'p']], mean: 'عنده جدول مزحوم.', ar: 'المفعول ممكن يكون noun phrase.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Fatima studies Physics. Which word is the object?', choices: ['Fatima', 'studies', 'Physics'], a: 'Physics', why: 'studies وش؟ Physics.' },
                                        { q: 'I love it. Which word is the object?', choices: ['I', 'love', 'it'], a: 'it', why: 'love وش؟ it. والضمير يجي مفعول.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'ناقصها مفعول',
                                    kind: 'n',
                                    wrong: 'My brother has.',
                                    mark: 'has.',
                                    options: ['My brother has an exam.', 'My brother has in.', 'My brother an exam.'],
                                    answer: 'My brother has an exam.',
                                    parts: [['My brother', 's'], ['has', 'v'], ['an exam', 'n', 'Object'], ['.', 'p']],
                                    why: 'has تحتاج شي بعدها: has وش؟ an exam.',
                                },
                                { type: 'anchor', lines: ['بعد الفعل اسأل: وش؟ أو مين؟', 'الجواب هو الـ object: studies English'] },
                            ],
                        },
                        {
                            label: 'Where? When?',
                            ar: 'وين؟ متى؟',
                            kind: 'x',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'حرف جر + مكان أو وقت يجاوب "وين؟" أو "متى؟". هذا مو مفعول، هذا معلومة زيادة: الجملة تكتمل بدونه.' },
                                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['Prepositional phrase', 'x', 'Where? / When?']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['We', 's'], ['live', 'v'], ['in Yanbu', 'x', 'Where?'], ['.', 'p']], mean: 'نسكن في ينبع.', ar: 'in Yanbu: وين؟' },
                                { type: 'breakdown', parts: [['Classes', 's'], ['start', 'v'], ['at 8 am', 'x', 'When?'], ['.', 'p']], mean: 'المحاضرات تبدأ الساعة 8 الصبح.', ar: 'at 8 am: متى؟' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'My father works in a hospital. Does it have an object?', choices: ['Yes', 'No'], a: 'No', why: 'in a hospital حرف جر + مكان، مو مفعول.' },
                                        { q: 'Classes start at 8 am. What is "at 8 am"?', choices: ['Object', 'Prepositional phrase', 'Verb'], a: 'Prepositional phrase', why: 'حرف جر (at) + وقت، يجاوب متى؟' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'ناقص حرف جر',
                                    kind: 'x',
                                    wrong: 'We live Yanbu.',
                                    mark: 'Yanbu',
                                    options: ['We live in Yanbu.', 'We live at Yanbu.', 'We live on Yanbu.'],
                                    answer: 'We live in Yanbu.',
                                    parts: [['We', 's'], ['live', 'v'], ['in Yanbu', 'x', 'Where?'], ['.', 'p']],
                                    why: 'المكان يحتاج حرف جر قبله، والمدينة تاخذ in.',
                                },
                            ],
                        },
                        {
                            label: 'Order',
                            ar: 'الترتيب',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'نجمع الأربعة مع بعض: فاعل، فعل، مفعول، ثم المكان أو الوقت. هذا الترتيب الأساسي: المفعول قبل الـ prepositional phrase. (والوقت ممكن يتقدم أول الجملة وبعده فاصلة، مثل In summer, it is hot، وهذا شفناه في 2.3.)' },
                                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['Object', 'n'], ['Prepositional phrase', 'x', 'Where? / When?']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Saad', 's'], ['studies', 'v'], ['English', 'n', 'Object'], ['at the institute', 'x', 'Where?'], ['.', 'p']], mean: 'سعد يدرس إنجليزي في المعهد.' },
                                { type: 'breakdown', parts: [['She', 's'], ['eats', 'v'], ['breakfast', 'n', 'Object'], ['at 7 am', 'x', 'When?'], ['.', 'p']], mean: 'تفطر الساعة 7 الصبح.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Which sentence is correct?', choices: ['I in the morning drink coffee.', 'I drink coffee in the morning.', 'I drink in the morning coffee.'], a: 'I drink coffee in the morning.', why: 'فاعل، فعل، مفعول، ثم الوقت.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'الوقت قبل المفعول',
                                    kind: 'v',
                                    wrong: 'We meet at the weekend our friends.',
                                    mark: 'at the weekend',
                                    options: ['We meet our friends at the weekend.', 'We at the weekend meet our friends.', 'Our friends meet we at the weekend.'],
                                    answer: 'We meet our friends at the weekend.',
                                    parts: [['We', 's'], ['meet', 'v'], ['our friends', 'n', 'Object'], ['at the weekend', 'x', 'When?'], ['.', 'p']],
                                    why: 'المفعول (our friends) يجي قبل الوقت.',
                                },
                                { type: 'anchor', lines: ['الترتيب الأساسي: فاعل، فعل، مفعول، ثم وين أو متى', 'We meet our friends at the weekend'] },
                            ],
                        },
                    ],
                },

                { type: 'label', text: 'جملة سعد تكبر' },
                { type: 'breakdown', parts: [['Saad', 's'], ['studies', 'v'], ['.', 'p']], mean: 'سعد يذاكر.' },
                { type: 'breakdown', parts: [['Saad', 's'], ['studies', 'v'], ['English', 'n', 'Object'], ['.', 'p']], mean: 'سعد يدرس إنجليزي.' },
                { type: 'breakdown', parts: [['Saad', 's'], ['studies', 'v'], ['English', 'n', 'Object'], ['at the institute', 'x', 'Where?'], ['.', 'p']], mean: 'سعد يدرس إنجليزي في المعهد.', ar: 'كل خطوة تزيد جزء، والترتيب الأساسي يبقى.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Which pattern?',
                    instructions: 'اختر نوع الجملة. S = فاعل (مين؟)، V = فعل (وش يسوي؟)، O = مفعول (وش؟ أو مين؟)، PP = حرف جر ومعه مكان أو وقت (وين؟ متى؟).',
                    choices: ['S+V', 'S+V+O', 'S+V+PP', 'S+V+O+PP'],
                    items: [
                        { q: 'Ali sleeps.', a: 'S+V', why: 'Ali = S (فاعل)، sleeps = V (فعل). ما فيه شي ثاني.' },
                        { q: 'My sister studies Biology.', a: 'S+V+O', why: 'My sister = S، studies = V، Biology = O (studies وش؟).' },
                        { q: 'They live in Tabuk.', a: 'S+V+PP', why: 'They = S، live = V، in Tabuk = PP (مكان، مو مفعول).' },
                        { q: 'My father drinks tea in the evening.', a: 'S+V+O+PP', why: 'My father = S، drinks = V، tea = O، in the evening = PP (وقت).' },
                        { q: 'Abdullah studies Arab History at university.', a: 'S+V+O+PP', why: 'Abdullah = S، studies = V، Arab History = O، at university = PP (مكان).' },
                        { q: 'She has a big family.', a: 'S+V+O', why: 'She = S، has = V، a big family = O (has وش؟).' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Find the object',
                    instructions: 'وش المفعول؟ (إذا ما فيه اختر none)',
                    items: [
                        { q: 'Mandy grows vegetables in the summer.', choices: ['Mandy', 'vegetables', 'in the summer', 'none'], a: 'vegetables', why: 'grows وش؟ vegetables.' },
                        { q: 'Mandy works in a greenhouse.', choices: ['Mandy', 'works', 'in a greenhouse', 'none'], a: 'none', why: 'in a greenhouse حرف جر + مكان، مو مفعول.' },
                        { q: 'They watch TV every evening.', choices: ['They', 'TV', 'every evening', 'none'], a: 'TV', why: 'watch وش؟ TV.' },
                        { q: 'Saad has a test on Sunday.', choices: ['Saad', 'a test', 'on Sunday', 'none'], a: 'a test', why: 'has وش؟ a test. و on Sunday وقت.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Which sentence is correct?',
                    instructions: 'كل سؤال فيه ثلاث جمل، وحدة بس ترتيبها صحيح.',
                    items: [
                        { q: 'Saad, football, Fridays:', choices: ['Saad plays football on Fridays.', 'Saad on Fridays plays football.', 'Saad plays on Fridays football.'], a: 'Saad plays football on Fridays.', why: 'المفعول قبل الوقت.' },
                        { q: 'Fatima, lunch, 1 pm:', choices: ['Fatima has at 1 pm lunch.', 'Fatima has lunch at 1 pm.', 'At 1 pm has Fatima lunch.'], a: 'Fatima has lunch at 1 pm.', why: 'فاعل، فعل، مفعول، ثم الوقت.' },
                        { q: 'We, grandparents, evening:', choices: ['We visit in the evening our grandparents.', 'We in the evening visit our grandparents.', 'We visit our grandparents in the evening.'], a: 'We visit our grandparents in the evening.', why: 'الوقت في الآخر.' },
                        { q: 'My uncle, bank:', choices: ['My uncle works in a bank.', 'My uncle in a bank works.', 'Works my uncle in a bank.'], a: 'My uncle works in a bank.', why: 'الفاعل ثم الفعل ثم المكان.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Put the words in order',
                    instructions: 'رتب الكلمات. (كتابة اختيارية)',
                    items: [
                        { q: 'eats / at 7 am / breakfast / She', a: 'She eats breakfast at 7 am.' },
                        { q: 'in the sea / We / swimming / love', a: 'We love swimming in the sea.' },
                        { q: 'has / on Sunday / my brother / an exam', a: 'My brother has an exam on Sunday.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 3.3 The present simple (RW ص 74، LS ص 66 و67 و77) ───────────────
// الجو: "روتين العائلة". خريطة Routine ← Positive / The -s / Negative / Questions.
// The -s يجمع إملاء الـ s ونطقها. اللي يعلق: he / she / it + s، وبعد does / doesn't الفعل بدون s.
const presentSimple: Topic = {
    slug: 'present-simple',
    title: 'The present simple',
    titleAr: 'المضارع البسيط',
    keywords: ['present simple', 'simple present', 'do does', "don't", "doesn't", 'he she it s', 'third person', 'routines', 'مضارع', 'المضارع البسيط', 'روتين', 'always', 'usually', 'often', 'sometimes', 'never', 'كلمات التكرار', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'The present simple',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'المضارع البسيط للروتين وللحقائق: he / she / it ← الفعل + s. والنفي والسؤال بـ do / does، وبعدها الفعل بدون s.',
                sections: [
                    {
                        label: 'Positive',
                        ar: 'الإثبات',
                        kind: 's',
                        what: 'I / we / they: الفعل على أصله. he / she / it: نزيد s.',
                        formula: [['he / she / it', 's'], ['Verb', 'v'], ['+ s', 'x', 's']],
                        examples: [
                            { parts: [['My father', 's', 'He'], ['leave', 'v'], ['s', 'x', 's'], ['home at 7'], ['.', 'p']], ar: 'المفرد (My father) مثل he.' },
                        ],
                        mistakes: [
                            { wrong: 'My sister drink tea every evening.', right: 'My sister drinks tea every evening.', why: 'مع she الفعل + s.' },
                        ],
                    },
                    {
                        label: 'The -s',
                        ar: 'إملاء ونطق',
                        kind: 'x',
                        what: 'الـ s تتغير مع بعض الأفعال (الجدول تحت). ونطقها: sleeps /s/ · plays /z/ · watches /ɪz/',
                        examples: [],
                        mistakes: [
                            { wrong: 'My brother gos to the gym.', right: 'My brother goes to the gym.', why: 'go مع he: goes.' },
                        ],
                    },
                    {
                        label: 'Negative',
                        ar: 'النفي',
                        kind: 'v',
                        what: "don't مع I / you / we / they، و doesn't مع he / she / it. بعدها الفعل بدون s.",
                        formula: [['Subject', 's'], ["don't / doesn't", 'hv'], ['base verb', 'v']],
                        examples: [
                            { parts: [['She', 's'], ["doesn't", 'hv', 'does + not'], ['watch', 'v', 'No s'], ['TV'], ['.', 'p']], ar: 'الـ s راحت لـ does.' },
                        ],
                        mistakes: [
                            { wrong: "She doesn't works in a bank.", right: "She doesn't work in a bank.", why: "بعد doesn't بدون s." },
                        ],
                    },
                    {
                        label: 'Questions',
                        ar: 'الأسئلة',
                        kind: 'adv',
                        what: 'Do / Does أول الجملة والفعل بدون s، و wh- قبلها.',
                        formula: [['Do / Does', 'hv'], ['Subject', 's'], ['base verb', 'v'], ['?', 'p']],
                        examples: [
                            { parts: [['Does', 'hv'], ['your brother', 's'], ['play', 'v'], ['football'], ['?', 'p']], ar: "Yes, he does. / No, he doesn't." },
                        ],
                        mistakes: [
                            { wrong: 'Does she drives to work?', right: 'Does she drive to work?', why: 'بعد Does بدون s.' },
                        ],
                    },
                ],
                tables: [
                    {
                        title: 'إملاء الـ s',
                        head: ['ينتهي بـ', 'نضيف', 'مثال'],
                        rows: [
                            ['s / sh / ch / x / o', 'es', 'watch → watches'],
                            ['حرف ساكن + y', 'ies', 'study → studies'],
                            ['have', 'has', 'he has'],
                        ],
                    },
                ],
                generalTitle: 'إملاء الـ s',
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'My sister ___ English every day.',
                choices: ['study', 'studies', 'studys'],
                answer: 1,
                why: 'مع he و she و it الفعل ياخذ s، و study تصير studies. تحت بالتفصيل.',
            },
            blocks: [
                { type: 'text', text: 'المضارع البسيط للروتين (اللي تسويه كل يوم) وللحقائق (اللي صحيحة دايم). وأمثلتنا من روتين عائلة.' },

                // ── أربع فروع ──
                {
                    type: 'hub',
                    word: 'Routine',
                    ar: 'الروتين',
                    branches: [
                        {
                            label: 'Positive',
                            ar: 'الإثبات',
                            kind: 's',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'مع I و you و we و they الفعل يبقى على أصله. ومع he و she و it، أو أي اسم مفرد مثل My father، نزيد s على الفعل.' },
                                { type: 'formula', parts: [['I / you / we / they', 's'], ['Verb', 'v'], ['…']] },
                                { type: 'formula', parts: [['he / she / it', 's'], ['Verb', 'v'], ['+ s', 'x', 's']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ['have', 'v'], ['breakfast'], ['every morning'], ['.', 'p']], mean: 'أفطر كل صبح.' },
                                { type: 'breakdown', parts: [['My parents', 's', 'They'], ['work', 'v'], ['in a hospital'], ['.', 'p']], mean: 'والداي يشتغلون في مستشفى.', ar: 'الجمع مثل they: بدون s.' },
                                { type: 'breakdown', parts: [['My father', 's', 'He'], ['leave', 'v'], ['s', 'x', 's'], ['home at 7 am'], ['.', 'p']], mean: 'أبوي يطلع من البيت 7 الصبح.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'My brother ___ football on Fridays.', choices: ['play', 'plays', 'playing'], a: 'plays', why: 'My brother = he، فالفعل + s.' },
                                        { q: 'My friends ___ at the institute.', choices: ['studies', 'study'], a: 'study', why: 'My friends = they، فالفعل على أصله.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'ناقص s',
                                    kind: 's',
                                    wrong: 'My sister drink tea every evening.',
                                    mark: 'drink',
                                    options: ['My sister drinks tea every evening.', 'My sister drinking tea every evening.', 'My sister drink teas every evening.'],
                                    answer: 'My sister drinks tea every evening.',
                                    parts: [['My sister', 's', 'She'], ['drink', 'v'], ['s', 'x', 's'], ['tea every evening'], ['.', 'p']],
                                    why: 'My sister = she، فنزيد s على الفعل.',
                                },
                                { type: 'anchor', lines: ['مع he / she / it نزيد s على الفعل: she cooks', 'ومع I / you / we / they الفعل على أصله: I cook'] },
                            ],
                        },
                        {
                            label: 'The -s',
                            ar: 'إملاء ونطق',
                            kind: 'x',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'أغلب الأفعال ياخذ s بس، وفيه حالات تتغير. نشوفها في الجدول، وبعدها نطق الـ s.' },
                                {
                                    type: 'table',
                                    head: ['ينتهي بـ', 'نضيف', 'مثال'],
                                    rows: [
                                        ['s / sh / ch / x / o', 'es', 'watch → watches'],
                                        ['حرف ساكن + y', 'ies', 'study → studies'],
                                        ['حرف علة + y', 's', 'play → plays'],
                                        ['have', 'has', 'he has'],
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Ali', 's'], ['watch', 'v'], ['es', 'x', 's, sh, ch, x → es'], ['TV after school'], ['.', 'p']], mean: 'علي يتفرج تلفزيون بعد المدرسة.', ar: 'ومثلها wash → washes، relax → relaxes، go → goes.' },
                                { type: 'breakdown', parts: [['She', 's'], ['stud', 'v'], ['ies', 'x', 'consonant + y → ies'], ['at the institute'], ['.', 'p']], mean: 'هي تدرس في المعهد.', ar: 'وبعد حرف علة تبقى y: play → plays.' },
                                { type: 'label', text: 'نطق الـ s' },
                                { type: 'text', text: 'للـ s ثلاث أصوات: /s/ (مثل السين) بعد p و t و k و f. و /z/ (مثل الزاي) بعد أغلب الأصوات. و /ɪz/ (مثل «إز») مع es، وهو مقطع زيادة. والتمرين هنا بالقاعدة، مو بالأذن.' },
                                { type: 'breakdown', parts: [['sleep', 'v'], ['s', 'x', '/s/']], mean: 'ينام: الصوت /s/.' },
                                { type: 'breakdown', parts: [['wash', 'v'], ['es', 'x', '/ɪz/']], mean: 'يغسل: صوت /ɪz/، مقطع زيادة.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'The teacher ___ (teach) us English.', choices: ['teachs', 'teaches'], a: 'teaches', why: 'ينتهي بـ ch: نضيف es.' },
                                        { q: 'Ali ___ (relax) on Fridays.', choices: ['relaxs', 'relaxes'], a: 'relaxes', why: 'ينتهي بـ x: نضيف es.' },
                                        { q: 'What is the sound of the -s in "sleeps"?', choices: ['سين /s/', 'زاي /z/', 'إز /ɪz/'], a: 'سين /s/', why: 'بعد p الصوت /s/ (سين).' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'gos بدل goes',
                                    kind: 'x',
                                    wrong: 'My brother gos to the gym.',
                                    mark: 'gos',
                                    options: ['My brother goes to the gym.', 'My brother gose to the gym.', 'My brother go to the gym.'],
                                    answer: 'My brother goes to the gym.',
                                    parts: [['My brother', 's'], ['go', 'v'], ['es', 'x', 'o → es'], ['to the gym'], ['.', 'p']],
                                    why: 'الفعل اللي ينتهي بـ o ياخذ es: go → goes.',
                                },
                            ],
                        },
                        {
                            label: 'Negative',
                            ar: 'النفي',
                            kind: 'hv',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: "للنفي نحط don't مع I و you و we و they، و doesn't مع he و she و it. وبعد doesn't الفعل يرجع بدون s، لأن الـ s راحت لـ does." },
                                { type: 'formula', parts: [['Subject', 's'], ["don't / doesn't", 'hv'], ['base verb', 'v']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ["don't", 'hv'], ['walk', 'v'], ['to school'], ['.', 'p']], mean: 'ما أمشي للمدرسة.' },
                                { type: 'breakdown', parts: [['She', 's'], ["doesn't", 'hv', 'does + not'], ['watch', 'v', 'No s'], ['TV'], ['.', 'p']], mean: 'هي ما تتفرج تلفزيون.', ar: 'watch بدون es، لأن es راحت لـ does.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'My sister ___ eat meat.', choices: ["don't", "doesn't"], a: "doesn't", why: 'My sister = she، فنستخدم doesn\'t.' },
                                        { q: "She doesn't ___ TV.", choices: ['watch', 'watches'], a: 'watch', why: "بعد doesn't الفعل بدون s." },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: "doesn't مع s",
                                    kind: 'hv',
                                    wrong: "She doesn't works in a bank.",
                                    mark: 'works',
                                    options: ["She doesn't work in a bank.", "She don't work in a bank.", "She doesn't working in a bank."],
                                    answer: "She doesn't work in a bank.",
                                    parts: [['She', 's'], ["doesn't", 'hv'], ['work', 'v', 'No s'], ['in a bank'], ['.', 'p']],
                                    why: "الـ s راحت لـ doesn't، فالفعل يرجع على أصله.",
                                },
                                { type: 'anchor', lines: ["بعد doesn't الفعل بدون s: she doesn't work", 'لأن الـ s راحت لـ does'] },
                            ],
                        },
                        {
                            label: 'Questions',
                            ar: 'الأسئلة',
                            kind: 'adv',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'السؤال يبدأ بـ Do أو Does، والفعل بدون s، والجواب القصير بنفس do / does. وأسئلة wh- نفس الشي وقبلها كلمة السؤال: What time و Where و When و How many hours.' },
                                { type: 'formula', parts: [['Do / Does', 'hv'], ['Subject', 's'], ['base verb', 'v'], ['…?']] },
                                { type: 'formula', parts: [['Wh- word', 'x', 'Question word'], ['do / does', 'hv'], ['Subject', 's'], ['base verb', 'v'], ['?', 'p']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Does', 'hv'], ['your brother', 's'], ['play', 'v'], ['football'], ['?', 'p']], mean: 'هل أخوك يلعب كورة؟', ar: "Yes, he does. / No, he doesn't." },
                                { type: 'breakdown', parts: [['What time', 'x', 'Question word'], ['does', 'hv'], ['the bus', 's'], ['leave', 'v'], ['?', 'p']], mean: 'الساعة كم يطلع الباص؟', ar: 'It leaves at 7:15.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: '___ your sister work in a hospital?', choices: ['Do', 'Does'], a: 'Does', why: 'your sister = she، فنستخدم Does.' },
                                        { q: 'Does he play football? Yes, he ___.', choices: ['does', 'plays', 'is'], a: 'does', why: 'الجواب القصير بنفس does.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'Does مع s',
                                    kind: 'adv',
                                    wrong: 'Does she drives to work?',
                                    mark: 'drives',
                                    options: ['Does she drive to work?', 'Is she drive to work?', 'Do she drive to work?'],
                                    answer: 'Does she drive to work?',
                                    parts: [['Does', 'hv'], ['she', 's'], ['drive', 'v', 'No s'], ['to work'], ['?', 'p']],
                                    why: 'الـ s راحت لـ Does، فالفعل على أصله.',
                                },
                            ],
                        },
                    ],
                },

                { type: 'label', text: 'كلمات التكرار' },
                { type: 'text', text: 'كم مرة تسوي الشي؟ نحط الكلمة قبل الفعل، والفعل يبقى بـ s مع he و she.' },
                {
                    type: 'table',
                    head: ['Word', 'معناه'],
                    rows: [
                        ['always', 'دايمًا'],
                        ['usually', 'غالبًا'],
                        ['often', 'كثير'],
                        ['sometimes', 'أحيانًا'],
                        ['never', 'أبدًا'],
                    ],
                },
                { type: 'breakdown', parts: [['My father', 's', 'He'], ['usually', 'x', 'How often?'], ['has', 'v'], ['breakfast at home'], ['.', 'p']], mean: 'أبوي غالبًا يفطر في البيت.', ar: 'الكلمة قبل الفعل.' },
                { type: 'breakdown', parts: [['She', 's'], ['never', 'x', 'How often?'], ['eats', 'v'], ['meat'], ['.', 'p']], mean: 'هي ما تاكل لحم أبدًا.', ar: "never معناها لا، فما نحط معها doesn't." },
                {
                    type: 'check',
                    items: [
                        { q: 'My brother ___ plays football on Fridays. (كل جمعة بدون استثناء)', choices: ['always', 'never'], a: 'always', why: 'always = دايمًا.' },
                        { q: 'Which sentence is correct?', choices: ['She usually drinks tea.', 'She drinks usually tea.', 'Usually she drink tea.'], a: 'She usually drinks tea.', why: 'الكلمة قبل الفعل، والفعل + s.' },
                    ],
                },

                { type: 'label', text: 'روتين عائلتي' },
                { type: 'breakdown', parts: [['I', 's'], ['get', 'v'], ['up at 6'], ['.', 'p'], ['My father', 's'], ['leave', 'v'], ['s', 'x', 's'], ['at 7'], ['.', 'p'], ['He', 's'], ["doesn't", 'hv'], ['have', 'v', 'No s'], ['breakfast at home'], ['.', 'p']], mean: 'أنا أصحى 6. أبوي يطلع 7. وهو ما يفطر في البيت.', ar: 'الإثبات + s، والنفي بدون s.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Spell the verb',
                    instructions: 'اختر شكل الفعل مع he / she.',
                    items: [
                        { q: 'She ___ (fly) to Riyadh every month.', choices: ['flys', 'flies'], a: 'flies', why: 'حرف ساكن + y: ies.' },
                        { q: 'He ___ (have) a big family.', choices: ['haves', 'has'], a: 'has', why: 'have شاذ: has.' },
                        { q: 'She ___ (say) hello to everyone.', choices: ['saies', 'says'], a: 'says', why: 'حرف علة + y: s فقط.' },
                        { q: 'The bus ___ (leave) at 7:15.', choices: ['leave', 'leaves'], a: 'leaves', why: 'The bus = it: + s.' },
                        { q: 'My uncle ___ (finish) work at 5.', choices: ['finishs', 'finishes'], a: 'finishes', why: 'ينتهي بـ sh: es.' },
                        { q: 'Sara ___ (pay) for the tickets.', choices: ['pays', 'paies'], a: 'pays', why: 'حرف علة + y: s فقط.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: "Exercise B: do, does, don't or doesn't?",
                    instructions: 'اختر الكلمة الصحيحة.',
                    choices: ['do', 'does', "don't", "doesn't"],
                    items: [
                        { q: 'I ___ like fast food.', a: "don't", why: "I: don't." },
                        { q: 'Faisal ___ work at weekends.', a: "doesn't", why: "Faisal = he: doesn't." },
                        { q: '___ you play video games?', a: 'do', why: 'you: Do.' },
                        { q: 'Where ___ your uncle live?', a: 'does', why: 'your uncle = he: does.' },
                        { q: 'They ___ have classes on Friday.', a: "don't", why: "They: don't." },
                        { q: 'How many hours ___ she sleep?', a: 'does', why: 'she: does.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Mixed practice',
                    instructions: 'اختر الخيار الصحيح.',
                    items: [
                        { q: 'My sister _____ home from work at 4:00 pm.', choices: ['arrive', 'arrives'], a: 'arrives', why: 'My sister = she: arrives.' },
                        { q: 'She usually _____ to go out on weekdays.', choices: ["don't like", "doesn't like", "doesn't likes"], a: "doesn't like", why: "she: doesn't، وبعدها الفعل بدون s." },
                        { q: 'She _____ dinner with me every Friday.', choices: ['have', 'has'], a: 'has', why: 'she: has.' },
                        { q: 'Sara drives to work. Her work starts at 9:00. 1) Does Sara drive to work? 2) When does her work start?', choices: ['1) Yes, she drives. 2) It start at 9:00.', '1) Yes, she does. 2) It starts at 9:00.', '1) Yes, she is. 2) It starts at 9:00.'], a: '1) Yes, she does. 2) It starts at 9:00.', why: 'الجواب القصير بـ does، و It starts بـ s.' },
                        { q: 'They ___ English on the weekends.', choices: ['study', 'studies', 'studying', 'studys'], a: 'study', why: 'They: الفعل على أصله.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Pronunciation of -s',
                    instructions: 'وش صوت آخر الكلمة؟ بالقاعدة: بعد p و t و k و f = سين، وكلمة فيها es = إز، والباقي = زاي.',
                    choices: ['سين /s/', 'زاي /z/', 'إز /ɪz/'],
                    items: [
                        { q: 'gets', a: 'سين /s/', why: 'بعد t: سين.' },
                        { q: 'plays', a: 'زاي /z/', why: 'بعد أغلب الأصوات: زاي.' },
                        { q: 'watches', a: 'إز /ɪz/', why: 'es: مقطع زيادة (إز).' },
                        { q: 'takes', a: 'سين /s/', why: 'بعد k: سين.' },
                        { q: 'lives', a: 'زاي /z/', why: 'بعد v: زاي.' },
                        { q: 'relaxes', a: 'إز /ɪz/', why: 'es: مقطع زيادة (إز).' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise E: Write',
                    instructions: 'اكتب بالمضارع البسيط. (كتابة اختيارية)',
                    items: [
                        { q: 'Write three different sentences about your daily routine.', a: 'I get up at 6:00. I have breakfast with my family. I go to the institute by bus.' },
                        { q: 'Write one positive and one negative sentence about a friend.', a: "My friend Omar plays football. He doesn't like basketball." },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 3.4 Main ideas and details (RW ص 76) ───────────────
// الجو: "مظلة البارقراف" (الفكرة فوق والتفاصيل تحتها). خريطة Paragraph ← Main idea / Details / Relevant / Which one?
// بدون بطاقات fix (ما فيه جملة غلط بمعنى الكلمة)، بدلها أسئلة check. كل سؤال يحمل سياقه داخله.
const mainIdeas: Topic = {
    slug: 'main-ideas-and-details',
    title: 'Main ideas and details',
    titleAr: 'الفكرة الرئيسية والتفاصيل',
    keywords: ['main idea', 'details', 'supporting details', 'paragraph', 'topic', 'الفكرة الرئيسية', 'تفاصيل', 'بارقراف', 'فقرة', 'كتابة', 'قراءة', 'relevant information', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Main ideas and details',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'البارقراف مظلة: الفكرة الرئيسية فوق (جملة عامة تغطيه كله)، والتفاصيل تحتها (معلومات محددة تثبتها، وكلها عن نفس الفكرة).',
                sections: [
                    {
                        label: 'Main idea',
                        ar: 'الفكرة',
                        kind: 's',
                        what: 'جملة كاملة وعامة، غالبًا الأولى. تجاوب: عن وش البارقراف؟',
                        formula: [['Main idea', 's'], ['Detail', 'v'], ['Detail', 'v']],
                        examples: [
                            { parts: [['Reem is a busy student.', 's', 'Main idea'], ['She studies English for four hours every day.', 'v', 'Detail']], ar: 'الفكرة جملة عامة، والتفصيل يثبتها.' },
                        ],
                        mistakes: [
                            { wrong: 'Main idea: Reem', right: 'Main idea: Reem is a busy student.', why: 'الموضوع كلمة، والفكرة جملة كاملة.' },
                        ],
                    },
                    {
                        label: 'Details',
                        ar: 'التفاصيل',
                        kind: 'v',
                        what: 'معلومة محددة تثبت الفكرة: وقت، رقم، مثال، مكان.',
                        examples: [
                            { parts: [['He works from 7 am to 6 pm.', 'v', 'Time'], ['He answers 50 emails a day.', 'v', 'Number']], ar: 'وفيه Example (For example…) و Place.' },
                        ],
                        mistakes: [],
                    },
                    {
                        label: 'Relevant',
                        ar: 'يخدم؟',
                        kind: 'adj',
                        what: 'التفصيل لازم يكون عن نفس الفكرة، حتى لو صحيح.',
                        examples: [
                            { parts: [['She has classes from 8 am to 12 pm.', 'v', 'Relevant ✓'], ['Her father has a new car.', 'x', 'Not relevant ✗']], ar: 'السيارة ما لها علاقة بدراستها.' },
                        ],
                        mistakes: [],
                    },
                    {
                        label: 'Which one?',
                        ar: 'أي وحدة؟',
                        kind: 'x',
                        what: 'اسأل: هل الجملة تغطي البارقراف كله؟ إي ← فكرة، ولا ← تفصيل.',
                        examples: [],
                        mistakes: [
                            { wrong: 'Main idea: She has classes from 8 am to 12 pm.', right: 'Main idea: Reem is a busy student.', why: 'معلومة وحدة بس: تفصيل.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'صديقك كتب لك: "يومي كان متعب. صحيت 5 الفجر، وعندي 4 محاضرات، ورجعت البيت 9 بالليل." لو أحد سألك: عن وش كلامه؟',
                choices: ['إنه صحى 5 الفجر', 'إن يومه كان متعب', 'إنه رجع 9 بالليل'],
                answer: 1,
                why: '"يومه كان متعب" هي الفكرة الرئيسية. والباقي تفاصيل تثبتها. هذا بالضبط درس اليوم، بس بالإنجليزي.',
            },
            blocks: [
                { type: 'text', text: 'البارقراف (paragraph) مجموعة جمل عن موضوع واحد. تخيله مظلة: الفكرة الرئيسية فوق، والتفاصيل كلها تحتها. وأمثلتنا عن طالبة اسمها ريم.' },

                // ── أربع فروع ──
                {
                    type: 'hub',
                    word: 'Paragraph',
                    ar: 'البارقراف',
                    branches: [
                        {
                            label: 'Main idea',
                            ar: 'الفكرة',
                            kind: 's',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'الفكرة الرئيسية (main idea) جملة وحدة عامة تقول الفكرة كلها، وتجاوب "عن وش البارقراف؟". غالبًا هي أول جملة، والباقي تفاصيل تثبتها.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Reem is a busy student.', 's', 'Main idea'], ['She studies English for four hours every day.', 'v', 'Detail'], ['She has classes from 8 am to 12 pm.', 'v', 'Detail'], ['In the evening, she does her homework.', 'v', 'Detail']], mean: 'ريم طالبة مشغولة. تذاكر إنجليزي 4 ساعات كل يوم، ودوامها من 8 لـ 12، وتسوي واجباتها بالليل.', ar: 'كل تفصيل يثبت إنها busy.' },
                                { type: 'breakdown', parts: [['Reem', 'x', 'Topic: كلمة'], ['Reem is a busy student.', 's', 'Main idea: جملة']], mean: 'ريم (موضوع). ريم طالبة مشغولة (فكرة).', ar: 'الموضوع كلمة، والفكرة جملة كاملة تقول شي عنها.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Faisal has a healthy lifestyle. He goes to the gym four times a week. He eats a lot of vegetables. Which sentence is the main idea?', choices: ['Faisal has a healthy lifestyle.', 'He goes to the gym four times a week.', 'He eats a lot of vegetables.'], a: 'Faisal has a healthy lifestyle.', why: 'عامة وتغطي البارقراف كله، والباقي تفاصيل تثبتها.' },
                                        { q: 'Which one is a topic, not a main idea?', choices: ['Reem', 'Reem is a busy student.'], a: 'Reem', why: 'Reem كلمة وحدة: موضوع. الفكرة جملة كاملة.' },
                                    ],
                                },
                                { type: 'anchor', lines: ['الفكرة الرئيسية جملة كاملة وعامة', 'غالبًا هي أول جملة: Reem is a busy student'] },
                            ],
                        },
                        {
                            label: 'Details',
                            ar: 'التفاصيل',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'التفصيل جملة تعطي معلومة محددة تثبت الفكرة. أشهر أنواعه أربعة: وقت، ورقم، ومثال، ومكان.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['My uncle has a busy job.', 's', 'Main idea'], ['He works from 7 am to 6 pm.', 'v', 'Time: متى؟'], ['He answers 50 emails a day.', 'v', 'Number: كم؟'], ['For example, he travels to Riyadh every month.', 'v', 'Example: مثل وش؟'], ['He has meetings in the main office.', 'v', 'Place: وين؟']], mean: 'عمي شغله مشغول. يداوم من 7 لـ 6، ويرد على 50 إيميل باليوم، ويسافر الرياض كل شهر مثلاً، وعنده اجتماعات في المكتب الرئيسي.', ar: 'كل تفصيل نوع مختلف، وكلها تثبت إن شغله busy.' },
                                { type: 'breakdown', parts: [['My grandmother has a simple life.', 's', 'Main idea'], ['She gets up at 5 am.', 'v', 'Time'], ['She works in her garden.', 'v', 'Place']], mean: 'جدتي حياتها بسيطة. تصحى 5 الفجر، وتشتغل في حديقتها.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'My uncle has a busy job. He answers 50 emails a day. What kind of detail is "He answers 50 emails a day"?', choices: ['Time', 'Number', 'Place'], a: 'Number', why: '50 رقم: يجاوب كم؟' },
                                        { q: 'What does "For example" tell you?', choices: ['The next sentence is an example', 'The next sentence is the main idea'], a: 'The next sentence is an example', why: 'For example تعني "مثلاً": اللي بعدها مثال، يعني تفصيل.' },
                                    ],
                                },
                            ],
                        },
                        {
                            label: 'Relevant',
                            ar: 'يخدم؟',
                            kind: 'adj',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'التفصيل لازم يكون عن نفس الفكرة. لو البارقراف عن دراسة ريم، ما تكتب عن سيارة أبوها حتى لو المعلومة صحيحة. هذا اسمه relevant information.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Reem is a busy student.', 's', 'Main idea'], ['She has classes from 8 am to 12 pm.', 'v', 'Detail ✓'], ['Her father has a new car.', 'x', 'Not relevant ✗'], ['She does her homework every evening.', 'v', 'Detail ✓']], mean: 'ريم طالبة مشغولة. عندها محاضرات. أبوها عنده سيارة جديدة. وتسوي واجباتها كل مساء.', ar: 'سيارة أبوها ما لها علاقة بدراستها.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Main idea: Faisal has a healthy lifestyle. Detail: "His brother has a new phone." Is this detail relevant?', choices: ['Relevant', 'Not relevant'], a: 'Not relevant', why: 'جوال أخوه ما له علاقة بصحة فيصل.' },
                                        { q: 'Main idea: Faisal has a healthy lifestyle. Detail: "He sleeps for eight hours every night." Is this detail relevant?', choices: ['Relevant', 'Not relevant'], a: 'Relevant', why: 'النوم الكافي جزء من نمط حياة صحي.' },
                                    ],
                                },
                            ],
                        },
                        {
                            label: 'Which one?',
                            ar: 'أي وحدة؟',
                            kind: 'x',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'لما تتلخبط، اسأل: هل هالجملة تغطي البارقراف كله؟ لو إي فهي الفكرة الرئيسية، ولو معلومة وحدة بس فهي تفصيل. والخيار الغلط المشهور هو تفصيل صحيح من النص، بس ما يغطي الباقي.' },
                                {
                                    type: 'table',
                                    head: ['Main idea', 'Detail'],
                                    rows: [
                                        ['عامة', 'محددة'],
                                        ['تغطي البارقراف كله', 'معلومة وحدة بس'],
                                        ['عن وش البارقراف؟', 'كيف؟ متى؟ كم؟ مثل وش؟'],
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Reem is a busy student.', 's', 'General = main idea'], ['She has classes from 8 am to 12 pm.', 'v', 'Specific = detail']], mean: 'ريم طالبة مشغولة (عامة). عندها محاضرات من 8 لـ 12 (محددة).', ar: 'الأولى تغطي البارقراف كله، والثانية معلومة وحدة بس.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Which sentence is more general?', choices: ['He works from 7 am to 6 pm.', 'My uncle has a busy job.'], a: 'My uncle has a busy job.', why: 'عامة: تغطي كل التفاصيل. والثانية ساعات دوام بس.' },
                                        { q: 'My mother has a busy morning. She wakes up at 5. She cooks breakfast for six people. She leaves for work at 7. What is the main idea?', choices: ['She wakes up at 5.', 'My mother has a busy morning.', 'She leaves for work at 7.'], a: 'My mother has a busy morning.', why: 'الباقي تفاصيل صحيحة، بس هذي الوحيدة اللي تغطيها كلها.' },
                                    ],
                                },
                                { type: 'anchor', lines: ['اسأل: هل الجملة تغطي البارقراف كله؟', 'إي ← فكرة رئيسية، ولا ← تفصيل'] },
                            ],
                        },
                    ],
                },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Main idea or detail?',
                    instructions: 'اقرا الجملة: هي الفكرة الرئيسية ولا تفصيل؟',
                    choices: ['Main idea', 'Detail'],
                    items: [
                        { q: 'Paragraph about weekends. Sentence: "My weekends are relaxing."', a: 'Main idea', why: 'عامة وتغطي البارقراف كله.' },
                        { q: 'Paragraph about weekends. Sentence: "On Friday, I visit my grandparents."', a: 'Detail', why: 'معلومة محددة (يوم ونشاط).' },
                        { q: 'Paragraph about weekends. Sentence: "I sleep for ten hours on Saturday."', a: 'Detail', why: 'رقم محدد: تفصيل.' },
                        { q: 'Paragraph about weekends. Sentence: "In the evening, I play football with my friends."', a: 'Detail', why: 'وقت ونشاط: تفصيل.' },
                        { q: 'Paragraph about weekends. Sentence: "My weekends are busy but happy."', a: 'Main idea', why: 'عامة وتغطي كل أيام الإجازة.' },
                        { q: 'Paragraph about weekends. Sentence: "I wake up at 8 am on Saturday."', a: 'Detail', why: 'وقت ويوم محددين: تفصيل.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Find the main idea',
                    instructions: 'اختر الجملة اللي فيها الفكرة الرئيسية.',
                    items: [
                        { q: 'Saad has three classes every weekday morning. He has Physics from 8 am to 9 am. Then he has Maths. His last class is Engineering.', choices: ['Saad has three classes every weekday morning.', 'Then he has Maths.', 'His last class is Engineering.'], a: 'Saad has three classes every weekday morning.', why: 'تغطي الدروس الثلاثة كلها.' },
                        { q: 'There are many things to do in Yanbu. You can swim in the sea. You can visit the old town. There are big parks for families.', choices: ['You can swim in the sea.', 'There are many things to do in Yanbu.', 'There are big parks for families.'], a: 'There are many things to do in Yanbu.', why: 'الباقي أمثلة على الأشياء اللي تسويها.' },
                        { q: 'My cousin Omar loves sport. He plays football on Mondays. He swims every weekend. He watches matches on TV every evening.', choices: ['He swims every weekend.', 'My cousin Omar loves sport.', 'He watches matches on TV.'], a: 'My cousin Omar loves sport.', why: 'حب الرياضة هو اللي يجمع الباقي.' },
                        { q: 'My school has a great library. It has more than 5,000 books. It has quiet rooms for study. It is open until 9 pm.', choices: ['It has more than 5,000 books.', 'It is open until 9 pm.', 'My school has a great library.'], a: 'My school has a great library.', why: 'عامة، والباقي تفاصيل (رقم ومكان ووقت) تثبتها.' },
                        { q: 'Sara loves cooking. She cooks dinner for her family every evening. She makes new dishes on Fridays. She has a small cooking blog.', choices: ['She makes new dishes on Fridays.', 'Sara loves cooking.', 'She has a small cooking blog.'], a: 'Sara loves cooking.', why: 'حب الطبخ هو اللي يجمع الباقي.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Relevant or not?',
                    instructions: 'التفصيل يخدم الفكرة الرئيسية؟',
                    choices: ['Relevant', 'Not relevant'],
                    items: [
                        { q: 'Main idea: Saad has three classes every weekday morning. Detail: "He has English from 8 am to 9 am."', a: 'Relevant', why: 'درس من دروسه الصباحية.' },
                        { q: 'Main idea: Saad has three classes every weekday morning. Detail: "His brother has a new car."', a: 'Not relevant', why: 'سيارة أخوه ما لها علاقة بدروسه.' },
                        { q: 'Main idea: Saad has three classes every weekday morning. Detail: "Then he has Maths from 9:15 to 10:15."', a: 'Relevant', why: 'درس ثاني من الثلاثة.' },
                        { q: 'Main idea: Saad has three classes every weekday morning. Detail: "His favourite food is kabsa."', a: 'Not relevant', why: 'الأكل المفضل ما له علاقة بالدروس.' },
                        { q: 'Main idea: Nora has a busy day at the hospital. Detail: "She checks sick children at 8 am."', a: 'Relevant', why: 'من شغلها في المستشفى.' },
                        { q: 'Main idea: Nora has a busy day at the hospital. Detail: "Her car is blue."', a: 'Not relevant', why: 'لون سيارتها ما له علاقة بيومها في المستشفى.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Mixed practice',
                    instructions: 'اقرا واختر الجواب.',
                    items: [
                        { q: 'Nora works at a hospital in Jeddah. She is a nurse and she helps sick children. She works five days a week. She loves her job. What is the main idea?', choices: ['Nora works five days a week.', 'Nora has a job as a nurse at a hospital.', 'Nora lives in Jeddah.'], a: 'Nora has a job as a nurse at a hospital.', why: 'تغطي الباقي. الأيام والمدينة تفاصيل.' },
                        { q: 'Abha is a good place for a summer holiday. The weather is cool. There are green mountains. Many families go there in July. What is the main idea?', choices: ['The weather in Abha is cool.', 'Many families go to Abha in July.', 'Abha is a good place for a summer holiday.'], a: 'Abha is a good place for a summer holiday.', why: 'الجو والجبال والعائلات كلها أسباب تثبت الفكرة.' },
                        { q: 'Main idea: My grandmother has a simple life. Which detail is NOT relevant?', choices: ['She gets up early.', 'Her neighbour has a big house.', 'She works in her garden every morning.'], a: 'Her neighbour has a big house.', why: 'بيت الجارة ما له علاقة بحياة جدتها.' },
                        { q: 'Main idea: Reem is a busy student. Which detail is NOT relevant?', choices: ['She does her homework every evening.', 'Her sister has a new phone.', 'She has classes from 8 am to 12 pm.'], a: 'Her sister has a new phone.', why: 'جوال أختها ما له علاقة بدراستها.' },
                        { q: 'Which one is a topic, not a main idea?', choices: ['Football', 'My brother plays football every day.'], a: 'Football', why: 'Football كلمة وحدة: موضوع. الفكرة جملة كاملة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise E: Write a short paragraph',
                    instructions: 'اكتب main idea و 3 تفاصيل (وقت، ورقم، ومثال). (كتابة اختيارية)',
                    items: [{ q: 'Write about the busy day of someone in your family.', a: 'My mother has a busy day. She gets up at 5 am. She teaches 30 students at a school. For example, she checks their homework every evening.' }],
                },
            ],
        },
    ],
};

// ─────────────── 3.5 Vocabulary: daily activities، study، collocations (RW ص 69 و70، LS ص 69) ───────────────
// الجو: "يوم طالب من الصبح لليل". خريطة Day ← have / go / take / do (أربع أفعال متوازية).
// المواد الدراسية بعد الخريطة (الفروع حدها 4)، وبعدها بطاقة "يوم طالب كامل".
const dailyVocab: Topic = {
    slug: 'daily-activities-collocations',
    title: 'Daily activities, study subjects and collocations',
    titleAr: 'مفردات: الروتين اليومي والمواد الدراسية والـ collocations',
    keywords: ['collocations', 'collocation', 'daily activities', 'routine', 'subjects', 'study', 'get up', 'have breakfast', 'go to', 'take', 'مفردات', 'كلمات', 'روتين', 'مواد', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Daily activities, study subjects and collocations',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'الـ collocation كلمتين تجي مع بعض دايم، ما لها قاعدة فنحفظها مع بعض. أربع أفعال: have و go و take و do.',
                sections: [
                    {
                        label: 'have',
                        ar: 'وجبة وحصة',
                        kind: 'v',
                        what: 'have breakfast / lunch / dinner / a class. و has مع he.',
                        examples: [
                            { parts: [['I', 's'], ['have', 'v'], ['breakfast', 'n'], ['at 6:30'], ['.', 'p']], ar: 'have breakfast = أفطر.' },
                        ],
                        mistakes: [
                            { wrong: 'I do breakfast with my family.', right: 'I have breakfast with my family.', why: 'الوجبة مع have.' },
                        ],
                    },
                    {
                        label: 'go',
                        ar: 'مكان',
                        kind: 'adv',
                        what: 'go to + مكان. و go home و go online بدون to. و go to bed.',
                        examples: [
                            { parts: [['He', 's'], ['goes', 'v'], ['home', 'n', 'No to'], ['at 1 pm'], ['.', 'p']], ar: 'home بدون to.' },
                        ],
                        mistakes: [
                            { wrong: 'I go to home after class.', right: 'I go home after class.', why: 'home بدون to.' },
                        ],
                    },
                    {
                        label: 'take',
                        ar: 'مواصلات',
                        kind: 'n',
                        what: 'take the bus / a taxi. و take a course (يسجل مادة).',
                        examples: [
                            { parts: [['My brother', 's'], ['takes', 'v'], ['the bus', 'n'], ['to university'], ['.', 'p']], ar: 'take the bus = يركب الباص.' },
                        ],
                        mistakes: [
                            { wrong: 'I go the bus to the institute.', right: 'I take the bus to the institute.', why: 'المواصلات مع take.' },
                        ],
                    },
                    {
                        label: 'do',
                        ar: 'واجب',
                        kind: 'adj',
                        what: 'do homework / exercise. وما نقول make homework.',
                        examples: [
                            { parts: [['She', 's'], ['does', 'v'], ['exercise', 'n'], ['every morning'], ['.', 'p']], ar: 'does مع she.' },
                        ],
                        mistakes: [
                            { wrong: 'I make my homework in the evening.', right: 'I do my homework in the evening.', why: 'الواجب مع do.' },
                        ],
                    },
                ],
                tables: [
                    {
                        title: 'المواد الدراسية',
                        head: ['Science', 'Arts and Humanities', 'Business', 'Languages'],
                        rows: [
                            ['Maths', 'History', 'Economics', 'English'],
                            ['Physics', 'Geography', 'Management', 'Arabic'],
                            ['Chemistry', 'Art', 'Accounting', 'French'],
                            ['Biology', 'Literature', 'Marketing', 'Chinese'],
                        ],
                        across: true,
                    },
                ],
                generalTitle: 'المواد الدراسية',
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'وش الصحيح؟',
                choices: ['have breakfast and do homework', 'do breakfast and make homework'],
                answer: 0,
                why: 'هذي اسمها collocations: كلمات تجي مع بعض دايم، وتنحفظ مع بعض.',
            },
            blocks: [
                { type: 'text', text: 'الـ collocation كلمتين تجي مع بعض دايم، مثل do homework (مو make homework). ما لها قاعدة، فنحفظها مع بعض. وأمثلتنا من يوم طالب.' },

                // ── أربع فروع: أربع أفعال ──
                {
                    type: 'hub',
                    word: 'Day',
                    ar: 'يوم طالب',
                    branches: [
                        {
                            label: 'have',
                            ar: 'وجبة وحصة',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'للوجبات والحصص نقول have: have breakfast = أفطر، have lunch = أتغدى، have dinner = أتعشى، have a class = عندي حصة.' },
                                { type: 'formula', parts: [['have', 'v'], ['breakfast / lunch / dinner / a class', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ['have', 'v'], ['breakfast', 'n'], ['at 6:30'], ['.', 'p']], mean: 'أفطر 6:30.' },
                                { type: 'breakdown', parts: [['He', 's'], ['has', 'v'], ['lunch', 'n'], ['at home'], ['.', 'p']], mean: 'يتغدى في البيت.', ar: 'has مع he.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'We ___ an English class at 8 am.', choices: ['do', 'have', 'go'], a: 'have', why: 'الحصة مع have: have a class.' },
                                        { q: 'My brother ___ dinner at 9 pm.', choices: ['have', 'has'], a: 'has', why: 'My brother = he: has.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'do بدل have',
                                    kind: 'v',
                                    wrong: 'I do breakfast with my family.',
                                    mark: 'do',
                                    options: ['I have breakfast with my family.', 'I take breakfast with my family.', 'I go breakfast with my family.'],
                                    answer: 'I have breakfast with my family.',
                                    parts: [['I', 's'], ['have', 'v'], ['breakfast', 'n'], ['with my family'], ['.', 'p']],
                                    why: 'الوجبة تجي مع have.',
                                },
                            ],
                        },
                        {
                            label: 'go',
                            ar: 'مكان',
                            kind: 'adv',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'go to + مكان: go to the gym. بس home و online ما ياخذون to: go home، go online. و go to bed = أنام.' },
                                { type: 'formula', parts: [['go', 'v'], ['to the gym / home / online / to bed', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ['go', 'v'], ['to the gym', 'n'], ['at 6 pm'], ['.', 'p']], mean: 'أروح النادي 6 المغرب.' },
                                { type: 'breakdown', parts: [['He', 's'], ['goes', 'v'], ['home', 'n', 'No to'], ['at 1 pm'], ['.', 'p']], mean: 'يرجع البيت 1 الظهر.', ar: 'go to home ✗' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'My sister ___ online every evening.', choices: ['goes', 'goes to'], a: 'goes', why: 'online ما ياخذ to.' },
                                        { q: 'We ___ at 11 pm.', choices: ['go to bed', 'go bed', 'go to the bed'], a: 'go to bed', why: 'go to bed = ننام، بدون the.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'to قبل home',
                                    kind: 'adv',
                                    wrong: 'I go to home after class.',
                                    mark: 'to home',
                                    options: ['I go home after class.', 'I go at home after class.', 'I go to the home after class.'],
                                    answer: 'I go home after class.',
                                    parts: [['I', 's'], ['go', 'v'], ['home', 'n', 'No to'], ['after class'], ['.', 'p']],
                                    why: 'home وحدها بدون to.',
                                },
                                { type: 'anchor', lines: ['مع home نقول go home بدون to', 'لكن المكان ياخذ to: go to the gym'] },
                            ],
                        },
                        {
                            label: 'take',
                            ar: 'مواصلات',
                            kind: 'n',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'take للمواصلات: the bus و a taxi. وللمادة اللي تسجلها: take a course.' },
                                { type: 'formula', parts: [['take', 'v'], ['the bus / a taxi / a course', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['My brother', 's'], ['takes', 'v'], ['the bus', 'n'], ['to university'], ['.', 'p']], mean: 'أخوي يركب الباص للجامعة.' },
                                { type: 'breakdown', parts: [['Abdullah', 's'], ['takes', 'v'], ['five courses', 'n'], ['.', 'p']], mean: 'عبدالله مسجل خمس مواد.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'I ___ a taxi when I am late.', choices: ['take', 'do', 'have'], a: 'take', why: 'التاكسي مع take.' },
                                        { q: 'Sara ___ four courses this term.', choices: ['takes', 'does'], a: 'takes', why: 'المادة المسجلة مع take.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'go بدل take',
                                    kind: 'n',
                                    wrong: 'I go the bus to the institute.',
                                    mark: 'go',
                                    options: ['I take the bus to the institute.', 'I have the bus to the institute.', 'I do the bus to the institute.'],
                                    answer: 'I take the bus to the institute.',
                                    parts: [['I', 's'], ['take', 'v'], ['the bus', 'n'], ['to the institute'], ['.', 'p']],
                                    why: 'الباص مع take.',
                                },
                            ],
                        },
                        {
                            label: 'do',
                            ar: 'واجب',
                            kind: 'adj',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'do homework = أحل الواجب، و do exercise = أتمرن. ولا نقول make homework.' },
                                { type: 'formula', parts: [['do', 'v'], ['homework / exercise', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ['do', 'v'], ['my homework', 'n'], ['in the afternoon'], ['.', 'p']], mean: 'أحل واجبي العصر.' },
                                { type: 'breakdown', parts: [['She', 's'], ['does', 'v'], ['exercise', 'n'], ['every morning'], ['.', 'p']], mean: 'هي تتمرن كل صبح.', ar: 'does مع she.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'I ___ my homework at 4 pm.', choices: ['make', 'do', 'have'], a: 'do', why: 'الواجب مع do.' },
                                        { q: 'My brother ___ exercise at the gym.', choices: ['do', 'does'], a: 'does', why: 'My brother = he: does.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'make بدل do',
                                    kind: 'adj',
                                    wrong: 'I make my homework in the evening.',
                                    mark: 'make',
                                    options: ['I do my homework in the evening.', 'I have my homework in the evening.', 'I take my homework in the evening.'],
                                    answer: 'I do my homework in the evening.',
                                    parts: [['I', 's'], ['do', 'v'], ['my homework', 'n'], ['in the evening'], ['.', 'p']],
                                    why: 'الواجب مع do، مو make.',
                                },
                                { type: 'anchor', lines: ['الواجب والتمرين مع do: do homework · do exercise', 'ما نقول make homework'] },
                            ],
                        },
                    ],
                },

                { type: 'label', text: 'المواد الدراسية' },
                { type: 'text', text: 'اسم المادة بحرف كبير، وبدون the. وهذي أشهر المواد في أربع مجموعات:' },
                {
                    type: 'table',
                    head: ['Science', 'Arts and Humanities', 'Business', 'Languages'],
                    rows: [
                        ['Maths رياضيات', 'History تاريخ', 'Economics اقتصاد', 'English إنجليزي'],
                        ['Physics فيزياء', 'Geography جغرافيا', 'Management إدارة', 'Arabic عربي'],
                        ['Chemistry كيمياء', 'Art فن', 'Accounting محاسبة', 'French فرنسي'],
                        ['Biology أحياء', 'Literature أدب', 'Marketing تسويق', 'Chinese صيني'],
                    ],
                    stackBy: 'column',
                },
                { type: 'breakdown', parts: [['I', 's'], ['want to study', 'v'], ['Computer Science', 'n', 'Capital letters'], ['.', 'p']], mean: 'أبي أدرس علوم الحاسب.', ar: 'المادة بحرف كبير، وبدون the.' },
                {
                    type: 'check',
                    items: [
                        { q: 'Which one is a Business subject?', choices: ['Accounting', 'Chemistry', 'History'], a: 'Accounting', why: 'Accounting (محاسبة) من مواد Business.' },
                        { q: 'Which sentence is correct?', choices: ['I study the Physics.', 'I study Physics.', 'I study physics.'], a: 'I study Physics.', why: 'المادة بحرف كبير وبدون the.' },
                    ],
                },

                { type: 'label', text: 'أفعال يومية ثانية' },
                { type: 'text', text: 'هذي أفعال تتكرر في يوم الطالب، وتحتاجها في التدريب. ولاحظ: listen تحتاج to بعدها: listen to the radio.' },
                {
                    type: 'table',
                    head: ['Verb', 'معناه'],
                    rows: [
                        ['get up', 'أصحى من النوم'],
                        ['leave home', 'أطلع من البيت'],
                        ['listen to', 'أسمع'],
                        ['wash', 'أغسل'],
                        ['drive', 'أسوق'],
                        ['read', 'أقرا'],
                        ['sleep', 'أنام'],
                        ['live', 'أسكن'],
                        ['watch', 'أتفرج'],
                        ['send', 'أرسل'],
                        ['sell', 'أبيع'],
                    ],
                },

                { type: 'label', text: 'يوم طالب كامل' },
                { type: 'breakdown', parts: [['I', 's'], ['have', 'v'], ['breakfast at 6:30'], ['.', 'p'], ['I', 's'], ['take', 'v'], ['the bus to the institute'], ['.', 'p'], ['I', 's'], ['go', 'v'], ['home at 1'], ['.', 'p'], ['In the evening, I'], ['do', 'v'], ['my homework'], ['.', 'p']], mean: 'أفطر 6:30. أركب الباص للمعهد. أرجع البيت 1. وبالمساء أحل واجبي.', ar: 'أربع أفعال، وكل واحد له كلماته.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the verb',
                    instructions: 'اختر الفعل اللي يجي مع الكلمة.',
                    choices: ['have', 'go', 'take', 'do'],
                    items: [
                        { q: '___ breakfast', a: 'have', why: 'الوجبة: have.' },
                        { q: '___ homework', a: 'do', why: 'الواجب: do.' },
                        { q: '___ to the gym', a: 'go', why: 'go to + مكان.' },
                        { q: '___ a class', a: 'have', why: 'have a class: عندي حصة.' },
                        { q: '___ online', a: 'go', why: 'go online: أدخل النت.' },
                        { q: '___ a course', a: 'take', why: 'take a course: أسجل مادة.' },
                        { q: '___ exercise', a: 'do', why: 'التمرين: do.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Mixed practice',
                    instructions: 'اختر الكلمة اللي تكمل الجملة.',
                    items: [
                        { q: 'Every working day, Khalid ___ home early to avoid the traffic.', choices: ['gets up', 'leaves', 'lives', 'sleeps'], a: 'leaves', why: 'يطلع من البيت بدري: leaves.' },
                        { q: 'He always ___ to the news on the radio in the car.', choices: ['sends', 'reads', 'studies', 'listens'], a: 'listens', why: 'listen to the radio.' },
                        { q: 'She ___ her car once a week to keep it clean.', choices: ['drives', 'watches', 'washes', 'sells'], a: 'washes', why: 'تنظف السيارة: washes.' },
                        { q: 'Ahmed studies ___. He learns about money and business.', choices: ['Economics', 'Physics', 'Literature', 'Geography'], a: 'Economics', why: 'المال والتجارة: Economics.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Which verb?',
                    instructions: 'اختر الفعل المناسب.',
                    choices: ['have', 'go', 'take', 'do'],
                    items: [
                        { q: 'We ___ lunch at 1 pm in the cafeteria.', a: 'have', why: 'الوجبة: have.' },
                        { q: 'My sister ___ her homework after dinner.', a: 'do', why: 'الواجب: do.' },
                        { q: 'Fahad ___ to bed at 10:30.', a: 'go', why: 'go to bed.' },
                        { q: 'We ___ the bus to the mall on Saturdays.', a: 'take', why: 'الباص: take.' },
                        { q: 'He ___ four courses this semester.', a: 'take', why: 'المواد المسجلة: take.' },
                        { q: 'They ___ online after school.', a: 'go', why: 'go online.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Your day',
                    instructions: 'اكتب. (كتابة اختيارية)',
                    items: [{ q: 'Write four sentences about your day. Use four different collocations.', a: 'I get up at 6. I take the bus to the institute. I have lunch at home. I do my homework in the evening.' }],
                },
            ],
        },
    ],
};

// ─────────────── 3.6 Skills: annotating، intonation (RW ص 67، LS ص 64) ───────────────
// الجو: "قبل الاستبيان" (المهارات تجهزك لمهمة الوحدة). خريطة Skills ← Annotate / Intonation.
// قرار المالك (2026-11-17): نحذف الاستماع (Listening for main ideas) من الدرس.
// بدون بطاقات fix (مهارات)، وكل سؤال يحمل نصه داخله.
const unit3Skills: Topic = {
    slug: 'annotating-main-ideas-intonation',
    title: 'Annotating and intonation',
    titleAr: 'مهارات: التظليل أثناء القراءة ونغمة السؤال',
    keywords: ['annotating', 'annotate', 'intonation', 'questions', 'surveys', 'مهارات', 'تظليل', 'نغمة', 'نغمة السؤال', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Annotating and intonation',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'مهارتين: ظلل المهم وأنت تقرأ (الأسماء والأماكن والأرقام والأوقات)، وانطق السؤال بنغمته: yes / no يطلع، و wh- ينزل.',
                sections: [
                    {
                        label: 'Annotate',
                        ar: 'ظلل المهم',
                        kind: 'x',
                        what: 'ظلل الأسماء والأماكن والأرقام والأوقات، وخلّ الكلمات الصغيرة.',
                        examples: [
                            { parts: [['Noura', 's', 'Who'], ['studies'], ['Chemistry', 'n', 'What'], ['at'], ['King Saud University', 'x', 'Where'], ['.', 'p']], ar: 'ظلل اللي يجاوب السؤال، ورجع له لما يجي.' },
                        ],
                        mistakes: [],
                    },
                    {
                        label: 'Intonation',
                        ar: 'النغمة',
                        kind: 'v',
                        what: 'سؤال yes / no صوته يطلع ↗. وسؤال wh- صوته ينزل ↘.',
                        examples: [
                            { parts: [['Do you live with your parents', 's', 'Yes / no'], ['↗', 'x', 'Up'], ['What time do you get up', 'v', 'Wh-'], ['↘', 'p', 'Down']], ar: 'نغمة آخر السؤال تفرق.' },
                        ],
                        mistakes: [
                            { wrong: 'What time do you get up ↗', right: 'What time do you get up ↘', why: 'سؤال wh- ينزل.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'لما تقرا نص وتبي تلقى الأجوبة بسرعة، وش المفيد؟',
                choices: ['أظلل الأسماء والأماكن والأرقام والأوقات', 'أقرا كل كلمة مرتين'],
                answer: 0,
                why: 'التظليل يوصلك للجواب على طول. وهذا أول جزء من درس اليوم.',
            },
            blocks: [
                { type: 'text', text: 'مهارتين تجهزك لاستبيان زملاء: تظلل المهم وأنت تقرأ، وتنطق السؤال بنغمة صحيحة.' },

                // ── فرعين ──
                {
                    type: 'hub',
                    word: 'Skills',
                    ar: 'قبل الاستبيان',
                    branches: [
                        {
                            label: 'Annotate',
                            ar: 'ظلل المهم',
                            kind: 'x',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'وأنت تقرأ، ظلل الكلمات المهمة: الأسماء والأماكن والأرقام والأوقات. وخلّ الكلمات الصغيرة مثل in و at. وإذا جا سؤال مثل When؟ ترجع للوقت المظلل على طول.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['In'], ['summer', 'adv', 'When'], [','], ['Mandy Logan', 's', 'Who'], ['works in a'], ['greenhouse', 'n', 'What'], ['in'], ['Inuvik, Canada', 'x', 'Where'], ['.', 'p']], mean: 'في الصيف، ماندي لوقان تشتغل في بيت زجاجي في إينوفيك، كندا.' },
                                { type: 'breakdown', parts: [['Noura', 's', 'Who'], ['studies'], ['Chemistry', 'n', 'What'], ['at'], ['King Saud University', 'x', 'Where'], ['.', 'p']], mean: 'نورة تدرس كيمياء في جامعة الملك سعود.', ar: 'كل كلمة ملونة تجاوب سؤال.' },
                                { type: 'breakdown', parts: [['She has classes from'], ['8 am to 2 pm', 'adv', 'When'], ['.', 'p']], mean: 'عندها محاضرات من 8 الصبح لـ 2 الظهر.', ar: 'لما يجي سؤال When؟ ترجع للأحمر على طول.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Ali lives in Taif. He studies Physics. He plays tennis on Fridays. Which words answer "What does Ali do on Fridays?"', choices: ['lives in Taif', 'studies Physics', 'plays tennis on Fridays'], a: 'plays tennis on Fridays', why: 'السؤال عن الجمعة، فتظلل اللي فيها Fridays.' },
                                        { q: 'She has classes from 8 am to 2 pm. Which words answer "When?"', choices: ['She', 'classes', '8 am to 2 pm'], a: '8 am to 2 pm', why: 'When؟ جوابها وقت.' },
                                    ],
                                },
                                { type: 'anchor', lines: ['ظلل الأسماء والأماكن والأرقام والأوقات', 'ولا تظلل الكلمات الصغيرة مثل in و at'] },
                            ],
                        },
                        {
                            label: 'Intonation',
                            ar: 'النغمة',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'نغمة صوتك آخر السؤال تفرق. سؤال yes / no (جوابه Yes أو No) صوته يطلع ↗. وسؤال wh- (يبدأ بـ What و Where و How) صوته ينزل ↘. والجواب ينزل ↘ بعد.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Do you live with your parents', 's', 'Yes / no'], ['↗', 'x', 'Up']], mean: 'هل تسكن مع أهلك؟', ar: 'Yes, I do. ↘' },
                                { type: 'breakdown', parts: [['What time do you get up', 'v', 'Wh-'], ['↘', 'p', 'Down']], mean: 'الساعة كم تصحى؟', ar: 'At six. ↘' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Is your timetable busy? Does your voice go up or down at the end?', choices: ['↗ up', '↘ down'], a: '↗ up', why: 'سؤال yes / no: يطلع.' },
                                        { q: 'When do you have lunch? Does your voice go up or down at the end?', choices: ['↗ up', '↘ down'], a: '↘ down', why: 'سؤال wh-: ينزل.' },
                                    ],
                                },
                                { type: 'anchor', lines: ['سؤال yes / no صوته يطلع', 'سؤال wh- صوته ينزل'] },
                            ],
                        },
                    ],
                },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Up or down?',
                    instructions: 'صوتك آخر السؤال يطلع ولا ينزل؟',
                    choices: ['↗ up', '↘ down'],
                    items: [
                        { q: 'Do you live with your parents?', a: '↗ up', why: 'yes / no: يطلع.' },
                        { q: 'Where do you study?', a: '↘ down', why: 'wh-: ينزل.' },
                        { q: 'Does your brother work?', a: '↗ up', why: 'yes / no: يطلع.' },
                        { q: 'How many hours do you sleep?', a: '↘ down', why: 'wh-: ينزل.' },
                        { q: 'What do you do at the weekend?', a: '↘ down', why: 'wh-: ينزل.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Annotate',
                    instructions: 'اقرا النص وجاوب.',
                    items: [
                        { q: 'Noura is a student in Riyadh. She studies Chemistry. She has classes from 8 am to 2 pm. In her free time, she reads books. Which words answer "When are her classes?"', choices: ['in Riyadh', '8 am to 2 pm', 'reads books'], a: '8 am to 2 pm', why: 'الوقت: 8 am to 2 pm.' },
                        { q: 'Fahad works in a bank in Jeddah. He starts at 9 am. In his free time, he plays tennis. Which words answer "What does he do in his free time?"', choices: ['works in a bank', 'plays tennis', 'starts at 9 am'], a: 'plays tennis', why: 'In his free time: plays tennis.' },
                        { q: 'Maha has five classes every week. Her first class starts at 8:30. Which words answer "How many classes?"', choices: ['five classes', '8:30', 'Maha'], a: 'five classes', why: 'كم؟ جوابها رقم: five classes.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Mixed practice',
                    instructions: 'اختر الجواب.',
                    items: [
                        { q: 'Ahmed lives in Abha. He studies Biology at King Khalid University. Which words answer "Where does he study?"', choices: ['lives in Abha', 'Biology', 'at King Khalid University'], a: 'at King Khalid University', why: 'المكان اللي يدرس فيه.' },
                        { q: 'Fahad plays football on Sundays. Which words answer "When?"', choices: ['Fahad', 'football', 'on Sundays'], a: 'on Sundays', why: 'When؟ جوابها وقت.' },
                        { q: 'Which question usually goes up ↗ at the end?', choices: ['Is it far?', 'How far is it?'], a: 'Is it far?', why: 'سؤال yes / no: يطلع.' },
                        { q: 'Which question usually goes down ↘ at the end?', choices: ['Do you work?', 'Where do you work?'], a: 'Where do you work?', why: 'سؤال wh-: ينزل.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Survey questions',
                    instructions: 'اكتب سؤالين لاستبيان: واحد yes / no وواحد wh-، وحط السهم آخر كل واحد. (كتابة اختيارية)',
                    items: [{ q: 'Write two survey questions about your classmates\' weekend.', a: 'Do you exercise? ↗ What do you do at the weekend? ↘' }],
                },
                {
                    type: 'exercise',
                    title: 'Exercise E: Annotate on paper',
                    instructions: 'انسخ النص على ورقتك وظلل: الأسماء والأماكن والأرقام والأوقات. (كتابة اختيارية)',
                    items: [{ q: 'Sara studies Maths at Taibah University. She has classes from 9 am to 1 pm. In the evening, she reads.', a: 'Sara · Maths · Taibah University · 9 am to 1 pm · In the evening' }],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 3: life of a student + survey (RW ص 77 و78، LS ص 78) ───────────────
// نفس قالب مهمة الوحدتين 1 و2: خريطة Student ← Writing / Speaking. الكتابة 3 أجزاء تمشي بالترتيب داخل الفرع (بطاقة map فوق)،
// والتحدث استبيان (survey). الاستماع محذوف بقرار المالك. كل جزء شرح ← مثال ← سؤال ← بطاقة تصحيح. التدريب: 3 تمارين اختيار.
const STUDENT_CARD: string[][] = [
    ['~A STUDENT IN MY CLASS'],
    ['1 Main idea: who, where', '2 Study: hours, times'],
    ['3 Free time + ending'],
];

const unit3Task: Topic = {
    slug: 'life-of-a-student',
    title: 'Writing task: the life of a student',
    titleAr: 'مهمة الوحدة: حياة طالب',
    keywords: ['writing task', 'life of a student', 'student life', 'survey', 'interview', 'paragraph', 'بارقراف', 'كتابة', 'استبيان', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: the life of a student',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'بارقراف من 6 إلى 8 جمل عن زميل، بالمضارع البسيط، في 3 أجزاء: الفكرة الرئيسية، ثم الدراسة والجدول، ثم وقت الفراغ. وفي التحدث: استبيان بأدب، بأسئلة yes / no ↗ وwh- ↘.',
                sections: [
                    {
                        label: 'Writing',
                        ar: 'البارقراف',
                        kind: 's',
                        what: '3 أجزاء. وكل الجمل عن الفكرة الرئيسية، والفعل مع he فيه s.',
                        formula: [['1 Main idea', 's', 'who, where'], ['2 Study', 'v', 'hours, times'], ['3 Free time', 'x', '+ ending']],
                        examples: [
                            { parts: [['Nawaf', 's'], ['is', 'v'], ['a student in my class', 'n'], ['.', 'p']], ar: 'الجزء 1: مين هو ووين.' },
                            { parts: [['He', 's'], ['studies', 'v'], ['English', 'n'], ['for twenty hours every week', 'x', 'How long?'], ['.', 'p']], ar: 'الجزء 2: s مع he، ومدة ووقت.' },
                            { parts: [['At the weekend', 'x', 'When?'], [',', 'p', 'Comma'], ['he', 's'], ['plays', 'v'], ['football', 'n'], ['.', 'p']], ar: 'الجزء 3: وقت الفراغ، وفاصلة بعد الوقت.' },
                        ],
                        mistakes: [
                            { wrong: 'He study English every day.', right: 'He studies English every day.', why: 'مع he: الفعل + s.' },
                            { wrong: 'At the weekend he plays football.', right: 'At the weekend, he plays football.', why: 'فاصلة بعد الوقت في الأول.' },
                            { wrong: 'He meets his friends in Thursdays.', right: 'He meets his friends on Thursdays.', why: 'اليوم: on.' },
                        ],
                    },
                    {
                        label: 'Speaking',
                        ar: 'استبيان',
                        kind: 'v',
                        what: 'ابدأ بأدب، واسأل، واشكره في الآخر.',
                        examples: [
                            { parts: [['Excuse me, can I ask you some questions?', 'x', 'Start'], ['Do you live with your parents', 's', 'Yes / no ↗'], ['What time do you get up', 'v', 'Wh- ↘']], ar: 'ابدأ بأدب، وانطق كل سؤال بنغمته.' },
                        ],
                        mistakes: [
                            { wrong: 'Do you lives with your parents?', right: 'Do you live with your parents?', why: 'بعد Do الفعل بدون s.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'لو تكتب عن زميلك، الفعل مع he ياخذ:',
                choices: ['s (He studies)', 'بدون s (He study)'],
                answer: 0,
                why: 'المهمة كلها بالمضارع البسيط مع he أو she.',
            },
            blocks: [
                { type: 'text', text: 'آخر الوحدة: تكتب بارقراف عن حياة زميل، أو تسوي له استبيان. وكل اللي تحتاجه من دروس الوحدة.' },

                // ── Student: كتابة وتحدث. الكتابة أجزاء متسلسلة داخل الفرع ──
                {
                    type: 'hub',
                    word: 'Student',
                    ar: 'حياة طالب',
                    branches: [
                        {
                            label: 'Writing',
                            ar: 'البارقراف',
                            kind: 's',
                            blocks: [
                                { type: 'map', rows: STUDENT_CARD, caption: 'بارقرافك: 3 أجزاء، وكل جزء جملة أو جملتين.' },

                                { type: 'heading', text: 'نموذج: نواف طالب في فصلي' },
                                { type: 'example', en: 'Nawaf is a student in my class at the Preparatory Year Institute. He studies English for twenty hours every week. He gets up at 6 am and he has classes from 8 am to 12 pm. On Monday afternoons, he meets his study group in the library. At the weekend, he plays football with his friends. He enjoys his busy life.', mean: 'نواف طالب في فصلي في معهد السنة التحضيرية. يدرس إنجليزي عشرين ساعة كل أسبوع. يصحى 6 الصبح وعنده محاضرات من 8 لـ 12. يوم الاثنين العصر يقابل مجموعة المذاكرة في المكتبة. وفي نهاية الأسبوع يلعب كورة مع أصدقائه. يستمتع بحياته المشغولة.' },

                                // ── الجزء 1 ──
                                { type: 'heading', text: 'الجزء 1: الفكرة الرئيسية' },
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'أول جملة تقول مين هو، ووين يدرس. هذي الـ main idea اللي تغطي البارقراف كله.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Nawaf', 's'], ['is', 'v'], ['a student in my class', 'n'], ['at the Preparatory Year Institute', 'x', 'Where?'], ['.', 'p']], mean: 'نواف طالب في فصلي في معهد السنة التحضيرية.' },
                                { type: 'breakdown', parts: [['Hamad', 's'], ['is', 'v'], ['a busy student', 'n'], ['in my class', 'x', 'Where?'], ['.', 'p']], mean: 'حمد طالب مشغول في فصلي.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which is the best first sentence?', choices: ['He gets up at 6 am.', 'Nawaf is a student in my class.', 'He plays football.'], a: 'Nawaf is a student in my class.', why: 'الأولى تقول مين هو، والباقي تفاصيل عنه.' }] },

                                // ── الجزء 2 ──
                                { type: 'heading', text: 'الجزء 2: الدراسة والجدول' },
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'الفعل مع he ياخذ s. والوقت بـ at و from … to، والمدة بـ for.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['He', 's'], ['studies', 'v'], ['English', 'n'], ['for twenty hours every week', 'x', 'How long?'], ['.', 'p']], mean: 'يدرس إنجليزي عشرين ساعة كل أسبوع.' },
                                { type: 'breakdown', parts: [['He', 's'], ['gets up', 'v'], ['at 6 am', 'x', 'When?'], ['.', 'p']], mean: 'يصحى 6 الصبح.' },
                                { type: 'breakdown', parts: [['He', 's'], ['has', 'v'], ['classes', 'n'], ['from 8 am to 12 pm', 'x', 'When?'], ['.', 'p']], mean: 'عنده محاضرات من 8 الصبح لـ 12 الظهر.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Nawaf ___ classes from 8 am to 12 pm.', choices: ['have', 'has'], a: 'has', why: 'Nawaf = he: has.' }] },
                                {
                                    type: 'fix',
                                    label: 'ناقص s',
                                    kind: 'v',
                                    wrong: 'He study English for twenty hours every week.',
                                    mark: 'study',
                                    options: ['He studies English for twenty hours every week.', 'He studys English for twenty hours every week.', 'He study English for twenty hours every weeks.'],
                                    answer: 'He studies English for twenty hours every week.',
                                    parts: [['He', 's'], ['studies', 'v'], ['English', 'n'], ['for twenty hours every week', 'x', 'How long?'], ['.', 'p']],
                                    why: 'مع he نزيد s، و study تصير studies.',
                                },

                                // ── الجزء 3 ──
                                { type: 'heading', text: 'الجزء 3: وقت الفراغ والخاتمة' },
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'ابدأ بالوقت: On + يوم، أو At the weekend، وبعده فاصلة (مثل ما تعلمنا في 2.3). وآخر جملة رأيك فيه.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['On Monday afternoons', 'x', 'When?'], [',', 'p', 'Comma'], ['he', 's'], ['meets', 'v'], ['his study group', 'n'], ['in the library', 'x', 'Where?'], ['.', 'p']], mean: 'يوم الاثنين العصر يقابل مجموعة المذاكرة في المكتبة.' },
                                { type: 'breakdown', parts: [['At the weekend', 'x', 'When?'], [',', 'p', 'Comma'], ['he', 's'], ['plays', 'v'], ['football', 'n'], ['with his friends'], ['.', 'p']], mean: 'في نهاية الأسبوع يلعب كورة مع أصدقائه.' },
                                { type: 'breakdown', parts: [['He', 's'], ['enjoys', 'v'], ['his busy life', 'n'], ['.', 'p']], mean: 'يستمتع بحياته المشغولة.', ar: 'خاتمة قصيرة: رأيك فيه.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['At the weekend he plays football.', 'At the weekend, he plays football.', 'At the weekend, he play football.'], a: 'At the weekend, he plays football.', why: 'فاصلة بعد الوقت في الأول، و plays فيها s.' }] },
                                {
                                    type: 'fix',
                                    label: 'الفاصلة بعد الوقت',
                                    kind: 'x',
                                    wrong: 'On Monday afternoons he meets his study group.',
                                    mark: 'On Monday afternoons he',
                                    options: ['On Monday afternoons, he meets his study group.', 'On Monday afternoons he, meets his study group.', 'In Monday afternoons, he meets his study group.'],
                                    answer: 'On Monday afternoons, he meets his study group.',
                                    parts: [['On Monday afternoons', 'x', 'Start'], [',', 'p', 'Comma'], ['he', 's'], ['meets', 'v'], ['his study group', 'n'], ['.', 'p']],
                                    why: 'الوقت في الأول: بعده فاصلة. واليوم مع on.',
                                },

                                // ── اجمع ──
                                { type: 'heading', text: 'اجمع الأجزاء' },
                                { type: 'text', text: 'قبل ما ترسل، تأكد من الأربعة:' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 's', title: 'الفكرة الرئيسية أول جملة، وكل الجمل عنها', en: 'Nawaf is a student in my class.' },
                                        { kind: 'v', title: 'الفعل مع he فيه s', en: 'He studies · He gets up' },
                                        { kind: 'x', title: 'in / on / at صحيحة', en: 'at 6 am · on Monday · in the library' },
                                        { kind: 'p', title: 'فاصلة بعد الوقت في أول الجملة', en: 'At the weekend, he plays football.' },
                                    ],
                                },
                                { type: 'anchor', lines: ['الجزء الأول: Nawaf is a student in my class', 'الجزء الثاني: He studies English for twenty hours', 'الجزء الثالث: At the weekend, he plays football'] },
                            ],
                        },
                        {
                            label: 'Speaking',
                            ar: 'استبيان',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'تسوي استبيان (survey) لزميلك بأربع خطوات: ابدأ بأدب، واسأل سؤال yes / no، واسأل سؤال wh-، واشكره. وانطق كل سؤال بنغمته: yes / no يطلع ↗، و wh- ينزل ↘.' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'x', title: 'ابدأ بأدب', en: 'Excuse me, can I ask you some questions?' },
                                        { kind: 's', title: 'سؤال yes / no ↗', en: 'Do you live with your parents?' },
                                        { kind: 'v', title: 'سؤال wh- ↘', en: 'What time do you get up?' },
                                        { kind: 'x', title: 'اشكره', en: 'Thank you for your time.' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Excuse me, can I ask you some questions?', 'x', 'Start']], mean: 'لو سمحت، أقدر أسألك كم سؤال؟' },
                                { type: 'breakdown', parts: [['Do you live with your parents', 's', 'Yes / no'], ['↗', 'x', 'Up']], mean: 'هل تسكن مع أهلك؟', ar: 'Yes, I do.' },
                                { type: 'breakdown', parts: [['What time do you get up', 'v', 'Wh-'], ['↘', 'p', 'Down']], mean: 'الساعة كم تصحى؟', ar: 'At six.' },
                                { type: 'breakdown', parts: [['Thank you for your time.', 'x', 'End']], mean: 'شكرًا على وقتك.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which is a polite way to start a survey?', choices: ['Excuse me, can I ask you some questions?', 'Tell me your answers now.', 'Questions, please.'], a: 'Excuse me, can I ask you some questions?', why: 'Excuse me و can I ask: أدب.' }] },
                                {
                                    type: 'fix',
                                    label: 'Do مع s',
                                    kind: 'v',
                                    wrong: 'Do you lives with your parents?',
                                    mark: 'lives',
                                    options: ['Do you live with your parents?', 'Does you live with your parents?', 'Do you living with your parents?'],
                                    answer: 'Do you live with your parents?',
                                    parts: [['Do', 'hv'], ['you', 's'], ['live', 'v', 'No s'], ['with your parents'], ['?', 'p']],
                                    why: 'بعد Do الفعل على أصله بدون s.',
                                },
                                { type: 'anchor', lines: ['ابدأ بـ: Excuse me, can I ask you some questions', 'وفي الآخر: Thank you for your time'] },
                            ],
                        },
                    ],
                },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Check the paragraph',
                    instructions: 'هذي جمل من بارقراف طالب. اختر الصحيح.',
                    items: [
                        { q: 'He ___ up at 6 am.', choices: ['get', 'gets'], a: 'gets', why: 'he: الفعل + s.' },
                        { q: 'He meets his friends ___ Thursdays.', choices: ['in', 'on', 'at'], a: 'on', why: 'اليوم: on.' },
                        { q: 'He ___ his homework in the evening.', choices: ['does', 'makes'], a: 'does', why: 'الواجب مع do.' },
                        { q: 'He ___ football at the weekend.', choices: ['plays', 'plaies'], a: 'plays', why: 'حرف علة + y: s فقط.' },
                        { q: 'He ___ English for twenty hours a week.', choices: ['studys', 'studies'], a: 'studies', why: 'حرف ساكن + y: ies.' },
                        { q: "He ___ live with his parents. He lives with his brother.", choices: ["don't", "doesn't"], a: "doesn't", why: "he: doesn't." },
                        { q: 'Classes start ___ 8 am.', choices: ['at', 'in', 'on'], a: 'at', why: 'الساعة: at.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Order the paragraph',
                    instructions: 'وش الجملة اللي تجي أول أو بعد؟ الجمل كلها داخل السؤال.',
                    items: [
                        { q: 'Which sentence comes FIRST in a paragraph about Hamad?', choices: ['He enjoys his busy life.', 'Hamad is a student in my class.', 'He plays football at the weekend.'], a: 'Hamad is a student in my class.', why: 'نبدأ بالفكرة الرئيسية.' },
                        { q: 'Which sentence comes LAST?', choices: ['Fatima is a student in my class.', 'She studies Biology from 8 am to 1 pm.', 'She enjoys her busy life.'], a: 'She enjoys her busy life.', why: 'الخاتمة رأيك فيها.' },
                        { q: '"Hamad is a student in my class." Which sentence comes NEXT?', choices: ['He enjoys his busy life.', 'He studies English for fifteen hours every week.', 'At the weekend, he plays football.'], a: 'He studies English for fifteen hours every week.', why: 'بعد الفكرة: الدراسة والجدول.' },
                        { q: '"He studies English for fifteen hours every week." Which sentence comes NEXT?', choices: ['He has classes from 8 am to 1 pm.', 'Hamad is a student.', 'He enjoys his busy life.'], a: 'He has classes from 8 am to 1 pm.', why: 'نكمل الدراسة والجدول قبل وقت الفراغ.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Survey questions',
                    instructions: 'اختر الجملة الصحيحة.',
                    items: [
                        { q: 'Start the survey:', choices: ['Excuse me, can I ask you some questions?', 'Excuse me, I ask you questions can?', 'Hello, questions now.'], a: 'Excuse me, can I ask you some questions?', why: 'Can I ask: ترتيب السؤال صحيح وأدب.' },
                        { q: 'A yes / no question:', choices: ['Do you exercise at the weekend?', 'What do you do at the weekend?', 'Do you exercises at the weekend?'], a: 'Do you exercise at the weekend?', why: 'Do + فعل بدون s، وجوابها Yes أو No.' },
                        { q: 'A wh- question about time:', choices: ['What time do you get up?', 'Do you get up at 6?', 'What time you get up?'], a: 'What time do you get up?', why: 'What time + do + فاعل + فعل.' },
                        { q: 'Which question goes UP ↗ at the end?', choices: ['Do you live with your parents?', 'Where do you live?'], a: 'Do you live with your parents?', why: 'yes / no: يطلع.' },
                        { q: 'End the survey:', choices: ['Thank you for your time.', 'Thank you for time your.', 'Bye, answers.'], a: 'Thank you for your time.', why: 'شكر بجملة كاملة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Write',
                    instructions: 'اكتب على ورقتك. (كتابة اختيارية)',
                    items: [
                        { q: 'Write a paragraph about a classmate (6 to 8 sentences).', a: 'Nawaf is a student in my class. He studies English for twenty hours every week. He gets up at 6 am. He has classes from 8 am to 12 pm. On Monday afternoons, he meets his study group. At the weekend, he plays football with his friends. He enjoys his busy life.' },
                        { q: 'Write four survey questions: two yes / no and two wh-.', a: 'Do you live with your parents? Do you exercise? What time do you get up? Where do you have lunch?' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT3_TOPICS: Topic[] = [timeExpressions, partsOfSentence, presentSimple, mainIdeas, dailyVocab, unit3Skills, unit3Task];
