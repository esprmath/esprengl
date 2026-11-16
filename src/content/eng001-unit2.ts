// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 2: Seasons
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 2 · Seasons';
const base = ['تحضيري', 'ENG 001', 'Unit 2', 'Seasons'];

// ─────────────── 2.1 Nouns and adjectives (RW ص 46، LS ص 54) ───────────────
// الجو: كلمة Adjective تتفرع لمكانين في الجملة (قبل الاسم / بعد be)، و very، وفرع "Which place?" يقارن بينهم.
// كل فرع شرح ← مثال ← سؤال ← بطاقة تصحيح. التدريب: 3 تمارين اختيار + تصحيح اختياري.
const adjectives: Topic = {
    slug: 'nouns-and-adjectives',
    title: 'Nouns and adjectives',
    titleAr: 'الاسم والصفة',
    keywords: ['adjective', 'adjectives', 'noun', 'nouns', 'صفة', 'صفات', 'اسم', 'adjective order', 'ترتيب الصفة', 'very', 'was', 'were', 'was were', 'الصفة قبل الاسم', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Nouns and adjectives',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'الصفة (adjective) توصف الاسم: طقس، حجم، عمر، لون، جنسية. لها مكانين: قبل الاسم (a hot summer)، أو بعد be في آخر الجملة (The summer is hot). و very قبل الصفة على طول، والصفة ما تنجمع أبدًا.',
                sections: [
                    {
                        label: 'Before the noun',
                        ar: 'قبل الاسم',
                        kind: 'adj',
                        what: 'عكس العربي: الصفة قبل الاسم، وما تنجمع.',
                        formula: [['a / an / the'], ['Adjective', 'adj'], ['Noun', 'n']],
                        examples: [
                            { parts: [['I can see'], ['white', 'adj', 'Colour'], ['clouds', 'n'], ['.', 'p']], ar: 'clouds جمع، و white ما تغيرت.' },
                        ],
                        mistakes: [
                            { wrong: 'Taif has gardens beautiful.', right: 'Taif has beautiful gardens.', why: 'الصفة قبل الاسم.' },
                            { wrong: 'They are kinds people.', right: 'They are kind people.', why: 'الصفة ما تنجمع.' },
                        ],
                    },
                    {
                        label: 'After be',
                        ar: 'بعد be',
                        kind: 'v',
                        what: 'آخر الجملة لازم قبلها be، وفي الماضي was / were.',
                        formula: [['Noun', 'n'], ['am / is / are · was / were', 'v', 'be'], ['Adjective', 'adj']],
                        examples: [
                            { parts: [['The roads', 'n'], ['were', 'v', 'are → were'], ['wet', 'adj'], ['last night.']], ar: 'roads جمع، وفي الماضي were.' },
                        ],
                        mistakes: [
                            { wrong: 'The weather hot today.', right: 'The weather is hot today.', why: 'ناقصها is قبل الصفة.' },
                            { wrong: 'The streets was busy.', right: 'The streets were busy.', why: 'الجمع في الماضي were.' },
                        ],
                    },
                    {
                        label: 'very',
                        ar: 'تقوية الصفة',
                        kind: 'adv',
                        what: 'very قبل الصفة على طول، في المكانين.',
                        formula: [['very', 'adv', 'Adverb'], ['Adjective', 'adj']],
                        examples: [
                            { parts: [['The winter', 'n'], ['is'], ['very', 'adv', 'Adverb'], ['cold', 'adj'], ['in Tabuk.']], ar: 'بعد be: very + صفة.' },
                        ],
                        mistakes: [
                            { wrong: 'Riyadh is a city very big.', right: 'Riyadh is a very big city.', why: 'very لاصقة بالصفة، والصفة قبل الاسم.' },
                        ],
                    },
                ],
                generalTitle: 'أي مكان؟',
                generalNote: 'بعد الصفة اسم ← الصفة قبله (a hot summer). الصفة آخر الجملة ← قبلها be (The summer is hot).',
                examples: [
                    { parts: [['Jeddah has a'], ['hot', 'adj', 'Before the noun'], ['summer', 'n'], ['.', 'p'], ['The summer', 'n'], ['is', 'v'], ['hot', 'adj', 'After be'], ['.', 'p']], ar: 'نفس المعنى بشكلين.' },
                ],
                mistakes: [
                    { wrong: 'Al-Ula is a place beautiful.', right: 'Al-Ula is a beautiful place.', why: 'بعدها اسم، فالصفة قبله.' },
                ],
                tables: [
                    {
                        title: 'أنواع الصفات',
                        across: true,
                        head: ['النوع', 'أمثلة'],
                        rows: [
                            ['طقس', 'hot · cold · rainy · windy'],
                            ['حجم', 'big · small · long'],
                            ['عمر', 'old · new · young'],
                            ['لون', 'white · green · grey'],
                            ['جنسية', 'Saudi · British · Turkish'],
                        ],
                    },
                ],
            },
            warmup: {
                q: 'أي وحدة صحيحة؟',
                choices: ['Yanbu is a city beautiful.', 'Yanbu is a beautiful city.', 'Yanbu a beautiful city.'],
                answer: 1,
                why: 'في العربي نقول "مدينة جميلة": الصفة بعد الاسم. في الإنجليزي العكس: a beautiful city. والثالثة ناقصها is.',
            },
            blocks: [
                { type: 'text', text: 'الصفة (adjective) كلمة توصف الاسم: hot، big، old، white، Saudi. ولها مكانين في الجملة، اختر واحد.' },

                // ── Adjective: تتفرع لمكانين، و very، والمقارنة ──
                {
                    type: 'hub',
                    word: 'Adjective',
                    ar: 'hot · big · old · white',
                    branches: [
                        {
                            label: 'Before the noun',
                            ar: 'قبل الاسم',
                            kind: 'adj',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'في العربي الصفة بعد الاسم: "مدينة كبيرة". في الإنجليزي العكس: الصفة قبل الاسم على طول: a big city.' },
                                { type: 'formula', parts: [['a / an / the'], ['Adjective', 'adj'], ['Noun', 'n']] },
                                { type: 'text', text: 'والصفة ما تنجمع: لو الاسم جمع، الصفة تبقى نفسها (white clouds، kind people).' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Abha', 's'], ['has', 'v'], ['a'], ['cool', 'adj', 'Weather'], ['summer', 'n'], ['.', 'p']], mean: 'أبها فيها صيف معتدل.' },
                                { type: 'breakdown', parts: [['We', 's'], ['live', 'v'], ['in an'], ['old', 'adj', 'Age'], ['house', 'n'], ['.', 'p']], mean: 'نسكن في بيت قديم.', ar: 'an لأن old تبدأ بحرف علة.' },
                                { type: 'breakdown', parts: [['I', 's'], ['can see'], ['white', 'adj', 'Colour'], ['clouds', 'n'], ['.', 'p']], mean: 'أشوف غيوم بيضا.', ar: 'clouds جمع، و white ما تغيرت.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Tabuk has ___ in winter.', choices: ['days cold', 'colds days', 'cold days'], a: 'cold days', why: 'الصفة قبل الاسم، وما تنجمع: cold days.' }] },
                                {
                                    type: 'fix',
                                    label: 'الصفة بعد الاسم',
                                    kind: 'adj',
                                    wrong: 'Taif has gardens beautiful.',
                                    mark: 'gardens beautiful',
                                    options: ['Taif has beautifuls gardens.', 'Taif has beautiful gardens.', 'Taif has gardens is beautiful.'],
                                    answer: 'Taif has beautiful gardens.',
                                    parts: [['Taif', 's'], ['has', 'v'], ['beautiful', 'adj'], ['gardens', 'n'], ['.', 'p']],
                                    why: 'العربي يقول "حدائق جميلة"، والإنجليزي يقدّم الصفة: beautiful gardens.',
                                },
                                {
                                    type: 'fix',
                                    label: 'الصفة انجمعت',
                                    kind: 'x',
                                    wrong: 'They are kinds people.',
                                    mark: 'kinds',
                                    options: ['They are kind peoples.', 'They are kinds peoples.', 'They are kind people.'],
                                    answer: 'They are kind people.',
                                    parts: [['They', 's'], ['are', 'v'], ['kind', 'adj'], ['people', 'n'], ['.', 'p']],
                                    why: 'الصفة ما تنجمع أبدًا، حتى لو الاسم جمع. و people جمع أصلًا، ما تاخذ s.',
                                },
                                { type: 'anchor', lines: ['الصفة قبل الاسم: a big city', 'الصفة ما تنجمع: white clouds'] },
                            ],
                        },
                        {
                            label: 'After be',
                            ar: 'بعد be',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'الصفة تقدر تجي في آخر الجملة، بس لازم قبلها be. العربي يقول "الجو حار" بدون فعل، والإنجليزي لازم is: The weather is hot.' },
                                { type: 'formula', parts: [['Noun', 'n'], ['am / is / are', 'v', 'be'], ['Adjective', 'adj']] },
                                { type: 'text', text: 'وللماضي (أمس، الشتاء اللي فات): is و am ← was، و are ← were.' },
                                { type: 'formula', parts: [['Noun', 'n'], ['was / were', 'v', 'past'], ['Adjective', 'adj']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['The summer', 'n'], ['is', 'v', 'be'], ['hot', 'adj'], ['in Riyadh'], ['.', 'p']], mean: 'الصيف حار في الرياض.' },
                                { type: 'breakdown', parts: [['It', 'n'], ['was', 'v', 'is → was'], ['windy', 'adj'], ['yesterday'], ['.', 'p']], mean: 'كان الجو عاصف أمس.', ar: 'yesterday ماضي، فـ is تصير was.' },
                                { type: 'breakdown', parts: [['The roads', 'n'], ['were', 'v', 'are → were'], ['wet', 'adj'], ['last night'], ['.', 'p']], mean: 'كانت الطرق مبلولة الليلة اللي فاتت.', ar: 'roads جمع، وفي الماضي were.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Last winter, the nights in Tabuk ___ cold.', choices: ['was', 'were', 'are'], a: 'were', why: 'nights جمع، و Last winter ماضي: were.' },
                                        { q: 'Look outside! The sky ___ grey today.', choices: ['are', 'was', 'is'], a: 'is', why: 'sky واحد، و today حاضر: is.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'ناقصها be',
                                    kind: 'v',
                                    wrong: 'The weather hot today.',
                                    mark: 'weather hot',
                                    options: ['The weather is hot today.', 'The weather hots today.', 'The weather are hot today.'],
                                    answer: 'The weather is hot today.',
                                    parts: [['The weather', 'n'], ['is', 'v', 'be'], ['hot', 'adj'], ['today'], ['.', 'p']],
                                    why: 'العربي يقول "الجو حار" بدون فعل، الإنجليزي لازم is قبل الصفة. و weather شي واحد، فما نقول are.',
                                },
                                {
                                    type: 'fix',
                                    label: 'was أو were',
                                    kind: 'v',
                                    wrong: 'The streets was busy yesterday.',
                                    mark: 'was',
                                    options: ['The streets is busy yesterday.', 'The streets were busy yesterday.', 'The streets busy yesterday.'],
                                    answer: 'The streets were busy yesterday.',
                                    parts: [['The streets', 'n'], ['were', 'v', 'are → were'], ['busy', 'adj'], ['yesterday'], ['.', 'p']],
                                    why: 'streets جمع، و yesterday ماضي: were.',
                                },
                                { type: 'anchor', lines: ['الجو حار: The weather is hot', 'الماضي: is → was · are → were'] },
                            ],
                        },
                        {
                            label: 'very',
                            ar: 'تقوية الصفة',
                            kind: 'adv',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'very تقوّي الصفة: cold → very cold. ومكانها قبل الصفة على طول، في المكانين: قبل الاسم، وبعد be.' },
                                { type: 'formula', parts: [['very', 'adv', 'Adverb'], ['Adjective', 'adj']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['The winter', 'n'], ['is', 'v', 'be'], ['very', 'adv', 'Adverb'], ['cold', 'adj'], ['in Tabuk'], ['.', 'p']], mean: 'الشتا بارد جدًا في تبوك.', ar: 'بعد be: very + صفة.' },
                                { type: 'breakdown', parts: [['She', 's'], ['is', 'v'], ['a'], ['very', 'adv', 'Adverb'], ['famous', 'adj'], ['writer', 'n'], ['.', 'p']], mean: 'هي كاتبة مشهورة جدًا.', ar: 'قبل الاسم: a + very + صفة + اسم.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Choose the correct sentence about Abha:', choices: ['Abha is a city very green.', 'Abha is very a green city.', 'Abha is a very green city.'], a: 'Abha is a very green city.', why: 'very لاصقة بالصفة، والصفة قبل الاسم: a very green city.' }] },
                                {
                                    type: 'fix',
                                    label: 'very بعيدة عن الصفة',
                                    kind: 'adv',
                                    wrong: 'Riyadh is a city very big.',
                                    mark: 'city very big',
                                    options: ['Riyadh is very a big city.', 'Riyadh is a big very city.', 'Riyadh is a very big city.'],
                                    answer: 'Riyadh is a very big city.',
                                    parts: [['Riyadh', 's'], ['is', 'v'], ['a'], ['very', 'adv', 'Adverb'], ['big', 'adj'], ['city', 'n'], ['.', 'p']],
                                    why: 'الترتيب: a + very + صفة + اسم. very ما تنفصل عن صفتها.',
                                },
                            ],
                        },
                        {
                            label: 'Which place?',
                            ar: 'أي مكان؟',
                            kind: 'p',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'نفس الصفة تنحط في المكانين، والمعنى واحد. اللي يحدد المكان: وش جنبها؟' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'adj', title: 'بعد الصفة اسم ← الصفة قبله', en: 'a hot summer' },
                                        { kind: 'v', title: 'الصفة آخر الجملة ← قبلها be', en: 'The summer is hot.' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Jeddah', 's'], ['has', 'v'], ['a'], ['hot', 'adj', 'Before the noun'], ['summer', 'n'], ['.', 'p']], mean: 'جدة فيها صيف حار.' },
                                { type: 'breakdown', parts: [['The summer', 'n'], ['in Jeddah'], ['is', 'v', 'be'], ['hot', 'adj', 'After be'], ['.', 'p']], mean: 'الصيف في جدة حار.', ar: 'نفس المعنى: الصفة قبل الاسم، أو بعد be.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'The day was sunny. = It was a ___', choices: ['sunny day.', 'day sunny.', 'sunny.'], a: 'sunny day.', why: 'بعد a يجي صفة + اسم: a sunny day. و a sunny بدون اسم ناقصة.' }] },
                                {
                                    type: 'fix',
                                    label: 'ترتيب العربي',
                                    kind: 'p',
                                    wrong: 'Al-Ula is a place beautiful.',
                                    mark: 'place beautiful',
                                    options: ['Al-Ula is place a beautiful.', 'Al-Ula is a beautiful place.', 'Al-Ula a place is beautiful.'],
                                    answer: 'Al-Ula is a beautiful place.',
                                    parts: [['Al-Ula', 's'], ['is', 'v'], ['a'], ['beautiful', 'adj', 'Before the noun'], ['place', 'n'], ['.', 'p']],
                                    why: 'بعدها اسم (place)، فالصفة قبله: a beautiful place. أو بدون اسم: Al-Ula is beautiful.',
                                },
                            ],
                        },
                    ],
                },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Find the adjective',
                    instructions: 'وش الصفة في الجملة؟ الصفة توصف الاسم.',
                    items: [
                        { q: 'Jeddah is a famous city.', choices: ['Jeddah', 'city', 'famous'], a: 'famous', why: 'famous توصف city.' },
                        { q: 'The mountains are green in spring.', choices: ['green', 'mountains', 'spring'], a: 'green', why: 'green بعد are، وتوصف mountains.' },
                        { q: 'My teacher is very kind.', choices: ['teacher', 'very', 'kind'], a: 'kind', why: 'very تقوّي الصفة، والصفة نفسها kind.' },
                        { q: 'We have long summers.', choices: ['have', 'long', 'summers'], a: 'long', why: 'long قبل الاسم summers وتوصفه.' },
                        { q: 'It was a rainy day.', choices: ['rainy', 'day', 'was'], a: 'rainy', why: 'rainy توصف day. و rain اسم، و rainy صفة.' },
                        { q: 'Our neighbour is a Turkish engineer.', choices: ['neighbour', 'engineer', 'Turkish'], a: 'Turkish', why: 'الجنسية صفة: Turkish توصف engineer.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Where does it go?',
                    instructions: 'اختر الترتيب الصحيح.',
                    items: [
                        { q: 'small / Al-Baha is a / city', choices: ['Al-Baha is a city small.', 'Al-Baha is a small city.', 'Al-Baha is small a city.'], a: 'Al-Baha is a small city.', why: 'الصفة قبل الاسم: a small city.' },
                        { q: 'warm / We have / winters', choices: ['We have warm winters.', 'We have winters warm.', 'We have warms winters.'], a: 'We have warm winters.', why: 'الصفة قبل الاسم، وما تنجمع: warm winters.' },
                        { q: 'interesting / She is a very / person', choices: ['She is a person very interesting.', 'She is a very person interesting.', 'She is a very interesting person.'], a: 'She is a very interesting person.', why: 'a + very + صفة + اسم.' },
                        { q: 'famous / Seville is a / city in Spain', choices: ['Seville is a city famous in Spain.', 'Seville is a famous city in Spain.', 'Seville is famous a city in Spain.'], a: 'Seville is a famous city in Spain.', why: 'الصفة قبل الاسم: a famous city.' },
                        { q: 'cloudy / The sky / was / yesterday', choices: ['The sky cloudy was yesterday.', 'The cloudy sky was yesterday.', 'The sky was cloudy yesterday.'], a: 'The sky was cloudy yesterday.', why: 'الصفة في آخر الجملة تجي بعد was على طول.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Mixed practice',
                    instructions: 'اختر الجواب الصح.',
                    items: [
                        { q: 'Which of the following is NOT an adjective?', choices: ['Cold', 'Dry', 'Rainfall', 'Rainy'], a: 'Rainfall', why: 'rainfall اسم: كمية المطر. والباقي صفات طقس.' },
                        { q: 'The old man has a **long** beard. The part of speech of the underlined word is a:', choices: ['Noun', 'Adjective', 'Verb'], a: 'Adjective', why: 'long قبل الاسم beard وتوصفه.' },
                        { q: 'Which of the following is NOT an adjective?', choices: ['Weather', 'Sunny', 'Windy', 'Hot'], a: 'Weather', why: 'weather اسم: الجو نفسه. و sunny و windy و hot توصفه.' },
                        { q: 'The weekend ___ very hot. We stayed at home.', choices: ['were', 'was', 'is'], a: 'was', why: 'weekend واحد، و stayed ماضي: was.' },
                        { q: 'My cousins ___ very happy at the party yesterday.', choices: ['was', 'are', 'were'], a: 'were', why: 'cousins جمع، و yesterday ماضي: were.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Fix the sentence',
                    instructions: 'كل جملة فيها خطأ: صلحها. (كتابة اختيارية)',
                    items: [
                        { q: 'The weather very cloudy in March.', a: 'The weather is very cloudy in March.' },
                        { q: 'They are kinds neighbours.', a: 'They are kind neighbours.' },
                        { q: 'Our classroom small.', a: 'Our classroom is small.' },
                        { q: 'Jeddah has beaches beautiful.', a: 'Jeddah has beautiful beaches.' },
                        { q: 'The days was very short last winter.', a: 'The days were very short last winter.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.2 Noun phrases (RW ص 47) ───────────────
// الجو: "العبارة تكبر": summer → hot summer → a hot summer → a very hot summer. والنقطة اللي تعلق: a أو an حسب الكلمة اللي بعدها على طول.
// خريطة Noun phrase بأربع فروع تمشي بالترتيب، وكل فرع شرح ← مثال ← سؤال ← بطاقة تصحيح. التدريب: 3 تمارين اختيار + كتابة اختيارية.
const nounPhrases: Topic = {
    slug: 'noun-phrases',
    title: 'Noun phrases',
    titleAr: 'شبه الجملة الاسمية (noun phrase)',
    keywords: ['noun phrase', 'noun phrases', 'a the adjective noun', 'شبه جملة اسمية', 'a or an', 'a an', 'very', 'plural', 'uncountable', 'الجمع', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Noun phrases',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'الـ noun phrase اسم ومعه اللي يوصفه، ويمشي في الجملة ككلمة وحدة. و a أو an حسب الكلمة اللي بعدها على طول.',
                sections: [
                    {
                        label: 'a / an',
                        ar: 'المفرد',
                        kind: 'adj',
                        what: 'a أو an حسب الصفة اللي بعدها، مو حسب الاسم.',
                        formula: [['a / an', 'x', 'Article'], ['Adjective', 'adj'], ['Noun', 'n']],
                        examples: [
                            { parts: [['an', 'x'], ['old', 'adj'], ['city', 'n'], ['·'], ['a', 'x'], ['big', 'adj'], ['umbrella', 'n']], ar: 'old بحرف علة: an. و big مو بحرف علة: a، حتى لو umbrella تبدأ بحرف علة.' },
                        ],
                        mistakes: [
                            { wrong: 'She has an new umbrella.', right: 'She has a new umbrella.', why: 'بعد الأداة new: a.' },
                        ],
                    },
                    {
                        label: 'No a',
                        ar: 'الجمع وما ينعد',
                        kind: 'n',
                        what: 'a معناها "واحد"، فما تجي مع الجمع ولا مع اللي ما ينعد.',
                        formula: [['Adjective', 'adj'], ['Plural / uncountable', 'n']],
                        examples: [
                            { parts: [['cold', 'adj'], ['winters', 'n', 'Plural'], ['·'], ['heavy', 'adj'], ['rainfall', 'n', 'Uncountable']], ar: 'بدون a.' },
                        ],
                        mistakes: [
                            { wrong: 'Qassim has a hot summers.', right: 'Qassim has hot summers.', why: 'summers جمع.' },
                            { wrong: 'We had a nice weather.', right: 'We had nice weather.', why: 'weather ما ينعد.' },
                        ],
                    },
                    {
                        label: '+ very',
                        ar: 'تقوية الصفة',
                        kind: 'adv',
                        what: 'very بين الأداة والصفة، و a أو an تمشي معها.',
                        formula: [['a', 'x', 'Article'], ['very', 'adv', 'Adverb'], ['Adjective', 'adj'], ['Noun', 'n']],
                        examples: [
                            { parts: [['an', 'x'], ['old', 'adj'], ['town', 'n'], ['→'], ['a', 'x'], ['very', 'adv', 'Adverb'], ['old', 'adj'], ['town', 'n']], ar: 'جت very بعد الأداة: an صارت a.' },
                        ],
                        mistakes: [
                            { wrong: 'Hail has an very old castle.', right: 'Hail has a very old castle.', why: 'بعد الأداة very: a.' },
                        ],
                    },
                    {
                        label: 'As subject',
                        ar: 'في أول الجملة',
                        kind: 's',
                        what: 'العبارة كلها فاعل، و is أو are حسب الاسم اللي في آخرها.',
                        formula: [['Noun phrase', 's', 'Subject'], ['is / are', 'v'], ['…']],
                        examples: [
                            { parts: [['Cold winters', 's', 'Noun phrase'], ['are', 'v'], ['common in the north.']], ar: 'winters جمع: are.' },
                        ],
                        mistakes: [
                            { wrong: 'The hot months is long.', right: 'The hot months are long.', why: 'months جمع: are.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
                tables: [
                    {
                        title: 'a أو an؟ حسب الكلمة اللي بعدها',
                        across: true,
                        head: ['الكلمة بعدها', 'الأداة', 'مثال'],
                        rows: [
                            ['حرف علة (a e i o u)', 'an', 'an old city'],
                            ['حرف ثاني', 'a', 'a big umbrella'],
                            ['جمع أو ما ينعد', '—', 'cold winters'],
                        ],
                    },
                ],
            },
            warmup: {
                q: 'وش الـ noun phrase في الجملة؟',
                sentence: 'Taif has a cool summer.',
                choices: ['Taif has', 'a cool summer', 'has a'],
                answer: 1,
                why: 'a cool summer = أداة + صفة + اسم، وتمشي ككلمة وحدة. وتحت نشوفها تكبر خطوة خطوة.',
            },
            blocks: [
                { type: 'text', text: 'الـ noun phrase اسم ومعه الكلمات اللي توصفه، وتكبر كلمة كلمة: summer → hot summer → a hot summer → a very hot summer.' },

                // ── Noun phrase: أربع فروع بالترتيب ──
                {
                    type: 'hub',
                    word: 'Noun phrase',
                    ar: 'a very hot summer',
                    branches: [
                        {
                            label: 'a / an',
                            ar: 'المفرد',
                            kind: 'adj',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'الاسم المفرد (شي واحد ينعد) يحتاج a أو an أو the قبله. ولما تجي صفة، الأداة تطلع قبل الصفة: a hot summer.' },
                                { type: 'formula', parts: [['a / an / the', 'x', 'Article'], ['Adjective', 'adj'], ['Noun', 'n', 'Singular']] },
                                { type: 'text', text: 'a أو an؟ شوف الكلمة اللي بعد الأداة على طول: تبدأ بحرف علة (a e i o u) ← an. وانتبه: اللي بعدها الصفة، مو الاسم.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Yanbu', 's'], ['is', 'v'], ['a', 'x', 'Article'], ['clean', 'adj'], ['city', 'n'], ['.', 'p']], mean: 'ينبع مدينة نظيفة.', ar: 'clean تبدأ بـ c، فنقول a.' },
                                { type: 'breakdown', parts: [['Al-Ula', 's'], ['is', 'v'], ['an', 'x', 'Article'], ['old', 'adj'], ['city', 'n'], ['.', 'p']], mean: 'العلا مدينة قديمة.', ar: 'old تبدأ بحرف علة، فنقول an.' },
                                { type: 'breakdown', parts: [['Take', 'v'], ['a', 'x', 'Article'], ['big', 'adj'], ['umbrella', 'n'], ['.', 'p']], mean: 'خذ مظلة كبيرة.', ar: 'umbrella تبدأ بحرف علة، بس اللي بعد الأداة big، فنقول a.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Abha is ___ green city.', choices: ['an', 'a', '—'], a: 'a', why: 'green تبدأ بـ g، فنقول a. والاسم المفرد ما يجي بدون أداة.' },
                                        { q: 'It is cold. Bring ___ extra jacket.', choices: ['a', '—', 'an'], a: 'an', why: 'extra تبدأ بحرف علة: an extra jacket.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'an حسب الاسم',
                                    kind: 'x',
                                    wrong: 'She has an new umbrella.',
                                    mark: 'an new',
                                    options: ['She has new umbrella.', 'She has a new umbrella.', 'She has an umbrella new.'],
                                    answer: 'She has a new umbrella.',
                                    parts: [['She', 's'], ['has', 'v'], ['a', 'x', 'Article'], ['new', 'adj'], ['umbrella', 'n'], ['.', 'p']],
                                    why: 'umbrella تبدأ بحرف علة، بس اللي بعد الأداة new، فنقول a.',
                                },
                                {
                                    type: 'fix',
                                    label: 'a قبل حرف علة',
                                    kind: 'x',
                                    wrong: 'Riyadh has a interesting museum.',
                                    mark: 'a interesting',
                                    options: ['Riyadh has interesting museum.', 'Riyadh has a museum interesting.', 'Riyadh has an interesting museum.'],
                                    answer: 'Riyadh has an interesting museum.',
                                    parts: [['Riyadh', 's'], ['has', 'v'], ['an', 'x', 'Article'], ['interesting', 'adj'], ['museum', 'n'], ['.', 'p']],
                                    why: 'interesting تبدأ بحرف علة، فنقول an. والمفرد لازم أداة.',
                                },
                                { type: 'anchor', lines: ['قبل حرف علة نقول an: an old city', 'الكلمة اللي بعد الأداة هي اللي تحدد: a very old town'] },
                            ],
                        },
                        {
                            label: 'No a',
                            ar: 'الجمع وما ينعد',
                            kind: 'n',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'a معناها "واحد"، فالجمع (winters) ما ياخذها. ونفس الشي الاسم اللي ما ينعد، مثل rainfall و weather و sunshine.' },
                                { type: 'formula', parts: [['Adjective', 'adj'], ['Plural / uncountable noun', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Tabuk', 's'], ['has', 'v'], ['cold', 'adj'], ['winters', 'n', 'Plural'], ['.', 'p']], mean: 'تبوك فيها شتا بارد.', ar: 'winters جمع: بدون a.' },
                                { type: 'breakdown', parts: [['Jizan', 's'], ['gets', 'v'], ['heavy', 'adj'], ['rainfall', 'n', 'Uncountable'], ['.', 'p']], mean: 'جازان ينزل عليها مطر غزير.', ar: 'rainfall ما ينعد، فبدون a.' },
                                { type: 'breakdown', parts: [['We', 's'], ['had', 'v'], ['nice', 'adj'], ['weather', 'n', 'Uncountable'], ['yesterday'], ['.', 'p']], mean: 'كان عندنا جو حلو أمس.', ar: 'weather ما ينعد: ما نقول a nice weather.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Riyadh has ___ in summer.', choices: ['a long days', 'long days', 'long day'], a: 'long days', why: 'days جمع: بدون a. و long day مفرد بدون أداة غلط.' },
                                        { q: 'Today we have ___.', choices: ['sunny weathers', 'a sunny weather', 'sunny weather'], a: 'sunny weather', why: 'weather ما ينعد: بدون a وبدون s.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'a مع الجمع',
                                    kind: 'x',
                                    wrong: 'Qassim has a hot summers.',
                                    mark: 'a hot summers',
                                    options: ['Qassim has an hot summers.', 'Qassim has hot summers.', 'Qassim has a hots summers.'],
                                    answer: 'Qassim has hot summers.',
                                    parts: [['Qassim', 's'], ['has', 'v'], ['hot', 'adj'], ['summers', 'n', 'Plural'], ['.', 'p']],
                                    why: 'summers جمع، و a معناها واحد، فما يجتمعون.',
                                },
                                { type: 'anchor', lines: ['الجمع بدون a: cold winters', 'وما ينعد بدون a: sunny weather'] },
                            ],
                        },
                        {
                            label: '+ very',
                            ar: 'تقوية الصفة',
                            kind: 'adv',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'very تدخل بين الأداة والصفة: a hot summer → a very hot summer. وبما إن very صارت هي اللي بعد الأداة، a أو an تمشي معها.' },
                                { type: 'formula', parts: [['a / an / the', 'x', 'Article'], ['very', 'adv', 'Adverb'], ['Adjective', 'adj'], ['Noun', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Jeddah', 's'], ['has', 'v'], ['a', 'x', 'Article'], ['very', 'adv', 'Adverb'], ['humid', 'adj'], ['summer', 'n'], ['.', 'p']], mean: 'جدة فيها صيف رطب جدًا.', ar: 'very بين a والصفة.' },
                                { type: 'breakdown', parts: [['Diriyah', 's'], ['is', 'v'], ['an', 'x', 'Article'], ['old', 'adj'], ['town', 'n'], ['.', 'p']], mean: 'الدرعية بلدة قديمة.', ar: 'old تبدأ بحرف علة: an.' },
                                { type: 'breakdown', parts: [['Diriyah', 's'], ['is', 'v'], ['a', 'x', 'Article'], ['very', 'adv', 'Adverb'], ['old', 'adj'], ['town', 'n'], ['.', 'p']], mean: 'الدرعية بلدة قديمة جدًا.', ar: 'جت very بعد الأداة، و very تبدأ بـ v: an صارت a.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Madinah is ___ very important city.', choices: ['an', 'a', '—'], a: 'a', why: 'اللي بعد الأداة very، و very تبدأ بـ v: a. لو شلنا very تصير an important city.' }] },
                                {
                                    type: 'fix',
                                    label: 'an قبل very',
                                    kind: 'adv',
                                    wrong: 'Hail has an very old castle.',
                                    mark: 'an very',
                                    options: ['Hail has a very old castle.', 'Hail has very an old castle.', 'Hail has an old very castle.'],
                                    answer: 'Hail has a very old castle.',
                                    parts: [['Hail', 's'], ['has', 'v'], ['a', 'x', 'Article'], ['very', 'adv', 'Adverb'], ['old', 'adj'], ['castle', 'n'], ['.', 'p']],
                                    why: 'very هي اللي بعد الأداة، فنقول a، حتى لو old تبدأ بحرف علة.',
                                },
                            ],
                        },
                        {
                            label: 'As subject',
                            ar: 'في أول الجملة',
                            kind: 's',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'العبارة كلها تقدر تكون الفاعل في أول الجملة. والفعل (is أو are) يمشي مع الاسم اللي في آخرها، مو مع الصفة.' },
                                { type: 'formula', parts: [['Noun phrase', 's', 'Subject'], ['is / are', 'v'], ['…']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['The rainy season', 's', 'Noun phrase'], ['is', 'v'], ['short', 'adj'], ['.', 'p']], mean: 'موسم المطر قصير.', ar: 'season مفرد: is.' },
                                { type: 'breakdown', parts: [['Cold winters', 's', 'Noun phrase'], ['are', 'v'], ['common in the north'], ['.', 'p']], mean: 'الشتا البارد شي عادي في الشمال.', ar: 'winters جمع: are.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'The long summer days ___ very hot.', choices: ['is', 'are', 'am'], a: 'are', why: 'الاسم في آخر العبارة days، وهو جمع: are.' }] },
                                {
                                    type: 'fix',
                                    label: 'is أو are',
                                    kind: 'v',
                                    wrong: 'The hot months is June, July and August.',
                                    mark: 'is',
                                    options: ['The hot months am June, July and August.', 'The hot months are June, July and August.', 'The hot month are June, July and August.'],
                                    answer: 'The hot months are June, July and August.',
                                    parts: [['The hot months', 's', 'Noun phrase'], ['are', 'v'], ['June, July and August'], ['.', 'p']],
                                    why: 'months جمع: are.',
                                },
                            ],
                        },
                    ],
                },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Find the noun phrase',
                    instructions: 'اختر الـ noun phrase: اسم ومعه الصفة (والأداة إذا فيه).',
                    items: [
                        { q: 'Madinah has a warm spring.', choices: ['Madinah has', 'has a', 'a warm spring'], a: 'a warm spring', why: 'أداة + صفة + اسم.' },
                        { q: 'The dry season is usually sunny.', choices: ['The dry season', 'is usually', 'usually sunny'], a: 'The dry season', why: 'the + صفة + اسم، وهو الفاعل.' },
                        { q: 'Asir gets heavy rain in August.', choices: ['Asir gets', 'heavy rain', 'in August'], a: 'heavy rain', why: 'صفة + اسم ما ينعد، بدون a.' },
                        { q: 'Copenhagen is a clean city.', choices: ['Copenhagen is', 'is a', 'a clean city'], a: 'a clean city', why: 'أداة + صفة + اسم.' },
                        { q: 'Strong winds are common in March.', choices: ['are common', 'Strong winds', 'in March'], a: 'Strong winds', why: 'صفة + جمع، وهي الفاعل.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Build the phrase',
                    instructions: 'اختر الكلمة اللي تكمّل الـ noun phrase.',
                    items: [
                        { q: 'Dammam has ___ humid climate.', choices: ['an', 'a', '—'], a: 'a', why: 'humid تبدأ بـ h، مو حرف علة: a.' },
                        { q: 'The north has very cold ___.', choices: ['night', 'nights', 'a night'], a: 'nights', why: 'ما فيه a، فلازم جمع: nights.' },
                        { q: 'Al-Baha gets ___ rainfall.', choices: ['a high', 'highs', 'high'], a: 'high', why: 'rainfall ما ينعد: بدون a، والصفة ما تنجمع.' },
                        { q: 'Al-Ula is ___ amazing place.', choices: ['a', 'an', '—'], a: 'an', why: 'amazing تبدأ بحرف علة: an.' },
                        { q: 'The ___ season is very hot.', choices: ['dry', 'dryly', 'dries'], a: 'dry', why: 'قبل الاسم season نحتاج صفة: dry.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Look at the next word',
                    instructions: 'a أو an أو بدون؟ و is أو are؟ شوف الكلمة اللي بعد الفراغ.',
                    items: [
                        { q: 'It is ___ ugly building.', choices: ['a', 'an', '—'], a: 'an', why: 'ugly تبدأ بحرف علة: an.' },
                        { q: 'It is ___ very ugly building.', choices: ['an', '—', 'a'], a: 'a', why: 'اللي بعد الأداة very: a.' },
                        { q: 'Yanbu has ___ beautiful beaches.', choices: ['a', 'an', '—'], a: '—', why: 'beaches جمع: بدون a.' },
                        { q: 'Riyadh has ___ unusual weather today.', choices: ['an', '—', 'a'], a: '—', why: 'weather ما ينعد: بدون a، حتى لو unusual تبدأ بحرف علة.' },
                        { q: 'The cool mornings ___ my favourite time.', choices: ['is', 'are', 'am'], a: 'are', why: 'mornings جمع: are.' },
                        { q: 'A cold drink ___ nice in summer.', choices: ['are', 'be', 'is'], a: 'is', why: 'drink مفرد: is.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Make it bigger',
                    instructions: 'زِد صفة (وأداة إذا تحتاج) على الاسم اللي تحته خط. (كتابة اختيارية)',
                    items: [
                        { q: 'Taif has **summers**.', a: 'Taif has cool summers.' },
                        { q: 'Dubai is **city**.', a: 'Dubai is a modern city.' },
                        { q: '**Season** is short in Jeddah.', a: 'The rainy season is short in Jeddah.' },
                        { q: 'Add very: Najran is an old city.', a: 'Najran is a very old city.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.3 Prepositional phrases (RW ص 50 و51) ───────────────
// الجو: "بطاقة طقس أبها": كل prepositional phrase جواب لسؤال عن الجو (وين؟ متى؟ كم مدة؟ كم؟)، وأغلب الأمثلة من بطاقة أبها، وبعد الخريطة البطاقة كاملة.
// خريطة بأربع فروع (Where? / When? / Numbers / Comma). كانت خمسة، و How long? اندمج في Numbers لأن الخمسة ما وسعت على 320، كل فرع شرح ← مثال ← سؤال ← بطاقة تصحيح. التدريب: 3 تمارين اختيار + كتابة اختيارية.
const prepositional: Topic = {
    slug: 'prepositional-phrases',
    title: 'Prepositional phrases',
    titleAr: 'شبه الجملة بحرف الجر (prepositional phrase)',
    keywords: ['preposition', 'prepositions', 'prepositional phrase', 'in on at', 'between and', 'from to', 'for', 'about', 'how long', 'where', 'when', 'حرف جر', 'حروف الجر', 'فاصلة', 'comma', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Prepositional phrases',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'حرف جر + اسم = prepositional phrase، وكل واحد يجاوب سؤال: وين؟ متى؟ كم مدة؟ كم؟ وإذا جا في أول الجملة، بعده فاصلة.',
                sections: [
                    {
                        label: 'Where?',
                        ar: 'وين؟',
                        kind: 'n',
                        what: 'from = من وين (الأصل). in = وين (المكان).',
                        formula: [['from / in', 'x', 'Preposition'], ['Place', 'n']],
                        examples: [
                            { parts: [['My cousin is'], ['from Abha', 'x', 'Where?'], ['. He lives'], ['in Jeddah', 'x', 'Where?'], ['.', 'p']], ar: 'from: من وين هو. in: وين يعيش الحين.' },
                        ],
                        mistakes: [
                            { wrong: 'I live on Abha.', right: 'I live in Abha.', why: 'المدينة: in.' },
                        ],
                    },
                    {
                        label: 'When?',
                        ar: 'متى؟',
                        kind: 'v',
                        what: 'in + فصل أو شهر. ومن شهر لشهر: from … to.',
                        formula: [['from', 'x'], ['Month', 'n'], ['to', 'x'], ['Month', 'n']],
                        examples: [
                            { parts: [['It is cool'], ['in summer', 'x', 'When?'], ['. It rains'], ['from June to August', 'x', 'When?'], ['.', 'p']], ar: 'in قبل الفصل، و from مع to.' },
                        ],
                        mistakes: [
                            { wrong: 'Summer is from June and August.', right: 'Summer is from June to August.', why: 'from مع to.' },
                        ],
                    },
                    {
                        label: 'Numbers',
                        ar: 'كم؟',
                        kind: 'adj',
                        what: 'for + مدة. about = تقريبًا. between … and = بين رقمين.',
                        formula: [['between', 'x'], ['Number', 'n'], ['and', 'x'], ['Number', 'n']],
                        examples: [
                            { parts: [['The rain lasts'], ['for about three months', 'x', 'How long?'], ['.', 'p']], ar: 'for + مدة، و about = تقريبًا.' },
                            { parts: [['Summer is'], ['between 15 °C and 25 °C', 'x', 'Range'], ['.', 'p']], ar: 'between مع and.' },
                        ],
                        mistakes: [
                            { wrong: 'The winter lasts in four months.', right: 'The winter lasts for four months.', why: 'المدة: for.' },
                            { wrong: 'It is between 20 °C to 30 °C.', right: 'It is between 20 °C and 30 °C.', why: 'between مع and.' },
                        ],
                    },
                    {
                        label: 'Comma',
                        ar: 'الفاصلة',
                        kind: 'p',
                        what: 'العبارة في أول الجملة: بعدها فاصلة. في الآخر: بدون فاصلة.',
                        formula: [['Prep phrase', 'x', 'Start'], [',', 'p'], ['Subject', 's'], ['Verb', 'v'], ['…']],
                        examples: [
                            { parts: [['In summer', 'x', 'Start'], [',', 'p', 'Comma'], ['Abha is cool.'], ['·'], ['Abha is cool'], ['in summer', 'x', 'End'], ['.', 'p']], ar: 'نفس الجملة: الفاصلة بس لما العبارة في الأول.' },
                        ],
                        mistakes: [
                            { wrong: 'It rains a lot, in July.', right: 'It rains a lot in July.', why: 'في الآخر: بدون فاصلة.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'وين تحط الفاصلة؟',
                sentence: 'In the summer the weather is very hot.',
                choices: ['بعد In', 'بعد summer', 'ما تحتاج فاصلة'],
                answer: 1,
                why: 'إذا بدأت الجملة بـ prepositional phrase (In the summer) نحط بعده فاصلة: In the summer, the weather is very hot.',
            },
            blocks: [
                { type: 'text', text: 'حرف جر (in، from، for) + اسم = prepositional phrase، وكل واحد يجاوب سؤال عن الجو. وأمثلتنا من بطاقة طقس أبها.' },

                // ── أربع فروع: كل فرع سؤال ──
                {
                    type: 'hub',
                    word: 'Prepositional phrase',
                    ar: 'حرف جر + اسم',
                    branches: [
                        {
                            label: 'Where?',
                            ar: 'وين؟',
                            kind: 'n',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'from يعني "من": البلد أو المدينة اللي جاي منها. و in يعني "في": المكان اللي الشي فيه، مدينة أو منطقة أو بلد.' },
                                { type: 'formula', parts: [['from / in', 'x', 'Preposition'], ['Place', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Abha', 's'], ['is', 'v'], ['in the south of Saudi Arabia', 'x', 'Where?'], ['.', 'p']], mean: 'أبها في جنوب السعودية.', ar: 'in: وين المدينة.' },
                                { type: 'breakdown', parts: [['My cousin', 's'], ['is', 'v'], ['from Abha', 'x', 'Where?'], ['.', 'p']], mean: 'ولد عمي من أبها.', ar: 'from: من وين هو.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Hamza is ___ Egypt, but he studies in Yanbu.', choices: ['in', 'for', 'from'], a: 'from', why: 'from = من وين هو. و in للمكان اللي هو فيه الحين.' }] },
                                {
                                    type: 'fix',
                                    label: 'on بدل in',
                                    kind: 'x',
                                    wrong: 'I live on Abha.',
                                    mark: 'on',
                                    options: ['I live from Abha.', 'I live in Abha.', 'I live for Abha.'],
                                    answer: 'I live in Abha.',
                                    parts: [['I', 's'], ['live', 'v'], ['in Abha', 'x', 'Where?'], ['.', 'p']],
                                    why: 'المدينة تاخذ in. "في" العربية هنا in، مو on.',
                                },
                            ],
                        },
                        {
                            label: 'When?',
                            ar: 'متى؟',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'in قبل الفصل أو الشهر: in summer، in July. وللمدة من شهر لشهر: from … to (من … إلى).' },
                                { type: 'formula', parts: [['in', 'x', 'Preposition'], ['Season / month', 'n']] },
                                { type: 'formula', parts: [['from', 'x'], ['Month', 'n'], ['to', 'x'], ['Month', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['It', 's'], ['is', 'v'], ['cool', 'adj'], ['in summer', 'x', 'When?'], ['.', 'p']], mean: 'الجو بارد وحلو في الصيف.', ar: 'in + فصل أو شهر.' },
                                { type: 'breakdown', parts: [['The rainy season', 's'], ['is', 'v'], ['from June to August', 'x', 'When?'], ['.', 'p']], mean: 'موسم المطر من يونيو إلى أغسطس.', ar: 'from … to: من شهر إلى شهر.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'In Abha, it is cold ___ January.', choices: ['for', 'in', 'from'], a: 'in', why: 'قبل الشهر: in.' },
                                        { q: 'The school holiday is from June ___ August.', choices: ['and', 'until to', 'to'], a: 'to', why: 'from يجي معه to.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'from مع and',
                                    kind: 'v',
                                    wrong: 'Summer is from June and August.',
                                    mark: 'and',
                                    options: ['Summer is from June to August.', 'Summer is between June to August.', 'Summer is in June to August.'],
                                    answer: 'Summer is from June to August.',
                                    parts: [['Summer', 's'], ['is', 'v'], ['from June to August', 'x', 'When?'], ['.', 'p']],
                                    why: 'from يمشي مع to. و and تمشي مع between.',
                                },
                                { type: 'anchor', lines: ['قبل الفصل والشهر نقول in: in summer · in July', 'من … إلى: from June to August'] },
                            ],
                        },
                        {
                            label: 'Numbers',
                            ar: 'كم؟',
                            kind: 'adj',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'ثلاث عبارات فيها أرقام: for يعني "لمدة" (كم مدة؟). و about يعني "تقريبًا": قبل رقم ما أنت متأكد منه. و between … and يعني "بين … و…": للمدى بين رقمين.' },
                                { type: 'formula', parts: [['for', 'x', 'Preposition'], ['Time', 'n', 'days / months / years']] },
                                { type: 'formula', parts: [['about', 'x'], ['Number', 'n']] },
                                { type: 'formula', parts: [['between', 'x'], ['Number', 'n'], ['and', 'x'], ['Number', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['We', 's'], ['stayed', 'v'], ['in Abha', 'x', 'Where?'], ['for a week', 'x', 'How long?'], ['.', 'p']], mean: 'قعدنا في أبها أسبوع.', ar: 'for + مدة. والجملة فيها سؤالين: وين؟ وكم مدة؟' },
                                { type: 'breakdown', parts: [['The temperature', 's'], ['is', 'v'], ['about 18 °C', 'x', 'Not exact'], ['today'], ['.', 'p']], mean: 'الحرارة اليوم حوالي 18 درجة.', ar: 'about: تقريبًا.' },
                                { type: 'breakdown', parts: [['Summer temperatures', 's'], ['are', 'v'], ['between 15 °C and 25 °C', 'x', 'Range'], ['.', 'p']], mean: 'حرارة الصيف بين 15 و25 درجة.', ar: 'between مع and، مو to.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'The heavy rain lasted ___ two days.', choices: ['in', 'for', 'from'], a: 'for', why: 'مدة (two days): for.' },
                                        { q: 'In January, temperatures in Tabuk are between 2 °C ___ 12 °C.', choices: ['to', 'from', 'and'], a: 'and', why: 'between يجي معه and.' },
                                        { q: 'I am not sure, but it is ___ 40 °C today.', choices: ['about', 'between', 'for'], a: 'about', why: 'رقم واحد ومو متأكد: about. و between تحتاج رقمين.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'in بدل for',
                                    kind: 'adv',
                                    wrong: 'The winter lasts in four months.',
                                    mark: 'in',
                                    options: ['The winter lasts from four months.', 'The winter lasts four months for.', 'The winter lasts for four months.'],
                                    answer: 'The winter lasts for four months.',
                                    parts: [['The winter', 's'], ['lasts', 'v'], ['for four months', 'x', 'How long?'], ['.', 'p']],
                                    why: 'المدة تاخذ for. و in للفصل أو الشهر (in winter).',
                                },
                                {
                                    type: 'fix',
                                    label: 'between مع to',
                                    kind: 'adj',
                                    wrong: 'It is between 20 °C to 30 °C.',
                                    mark: 'to',
                                    options: ['It is between 20 °C from 30 °C.', 'It is between 20 °C and 30 °C.', 'It is between from 20 °C to 30 °C.'],
                                    answer: 'It is between 20 °C and 30 °C.',
                                    parts: [['It', 's'], ['is', 'v'], ['between 20 °C and 30 °C', 'x', 'Range'], ['.', 'p']],
                                    why: 'between ← and، و from ← to. ما نخلطهم.',
                                },
                                { type: 'anchor', lines: ['المدة تاخذ for: for three days', 'بين رقمين: between 15 °C and 25 °C'] },
                            ],
                        },
                        {
                            label: 'Comma',
                            ar: 'الفاصلة',
                            kind: 'p',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'العبارة تقدر تجي في أول الجملة أو في آخرها. في الأول: بعدها فاصلة. في الآخر: بدون فاصلة.' },
                                { type: 'formula', parts: [['Prepositional phrase', 'x', 'Start'], [',', 'p'], ['Subject', 's'], ['Verb', 'v'], ['…']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['In summer', 'x', 'Start'], [',', 'p', 'Comma'], ['Abha', 's'], ['is', 'v'], ['cool', 'adj'], ['.', 'p']], mean: 'في الصيف، أبها جوها معتدل.' },
                                { type: 'breakdown', parts: [['Abha', 's'], ['is', 'v'], ['cool', 'adj'], ['in summer', 'x', 'End'], ['.', 'p']], mean: 'أبها جوها معتدل في الصيف.', ar: 'نفس الجملة، والعبارة في الآخر: بدون فاصلة.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['In winter it is cold in Tabuk.', 'In winter, it is cold in Tabuk.', 'In winter it is cold, in Tabuk.'], a: 'In winter, it is cold in Tabuk.', why: 'In winter في الأول: بعدها فاصلة. و in Tabuk في الآخر: بدون فاصلة.' }] },
                                {
                                    type: 'fix',
                                    label: 'فاصلة في الآخر',
                                    kind: 'p',
                                    wrong: 'It rains a lot, in July.',
                                    mark: ', in July',
                                    options: ['It rains, a lot in July.', 'It rains a lot in, July.', 'It rains a lot in July.'],
                                    answer: 'It rains a lot in July.',
                                    parts: [['It', 's'], ['rains', 'v'], ['a lot'], ['in July', 'x', 'End'], ['.', 'p']],
                                    why: 'العبارة في آخر الجملة: بدون فاصلة.',
                                },
                            ],
                        },
                    ],
                },

                { type: 'label', text: 'بطاقة أبها كاملة' },
                { type: 'breakdown', parts: [['Abha is'], ['in the south', 'x', 'Where?'], ['.', 'p'], ['In summer', 'x', 'When?'], [',', 'p'], ['it is cool'], ['.', 'p'], ['Temperatures are'], ['between 15 °C and 25 °C', 'x', 'Numbers'], ['.', 'p'], ['The rain lasts'], ['for about three months', 'x', 'How long?'], ['.', 'p']], mean: 'أبها في الجنوب. في الصيف جوها معتدل. الحرارة بين 15 و25 درجة. والمطر يستمر حوالي ثلاث شهور.', ar: 'كل عبارة حمراء تجاوب سؤال.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the preposition',
                    instructions: 'اختر حرف الجر المناسب.',
                    choices: ['in', 'from', 'for', 'about', 'between'],
                    items: [
                        { q: 'Sofia is ___ Chicago in the USA.', a: 'from', why: 'من وين هي: from.' },
                        { q: 'The weather is warm ___ the summer.', a: 'in', why: 'قبل الفصل: in.' },
                        { q: 'The sandstorm lasted ___ three days.', a: 'for', why: 'مدة: for.' },
                        { q: 'The average high temperature is ___ 28 °C.', a: 'about', why: 'رقم مو بالضبط: about.' },
                        { q: 'In January, temperatures are ___ –1 °C and –4 °C.', a: 'between', why: 'بعدها رقمين بينهم and: between.' },
                        { q: 'Snow sometimes falls ___ the mountains of Tabuk.', a: 'in', why: 'المكان: in.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Comma or no comma?',
                    instructions: 'الفاصلة في الجملة صحيحة ولا لا؟',
                    choices: ['Correct', 'Wrong'],
                    items: [
                        { q: 'In the dry season, the weather is often cloudy.', a: 'Correct', why: 'العبارة في الأول، وبعدها فاصلة.' },
                        { q: 'The average temperature in spring is, between 10 °C and 20 °C.', a: 'Wrong', why: 'ما فيه فاصلة بين is والعبارة.' },
                        { q: 'Jeddah is humid, in summer.', a: 'Wrong', why: 'العبارة في آخر الجملة: بدون فاصلة.' },
                        { q: 'From December to March, it is cold.', a: 'Correct', why: 'العبارة كلها في الأول، والفاصلة بعدها.' },
                        { q: 'In spring there is a strong wind.', a: 'Wrong', why: 'ناقصها فاصلة بعد In spring.' },
                        { q: 'The temperature is about 29 °C in May.', a: 'Correct', why: 'العبارات في الآخر: ما تحتاج فاصلة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Which one is correct?',
                    instructions: 'كل سؤال فيه ثلاث جمل، وحدة بس صحيحة.',
                    items: [
                        { q: 'About the temperature:', choices: ['It is between 30 °C to 35 °C.', 'It is between 30 °C and 35 °C.', 'It is from 30 °C and 35 °C.'], a: 'It is between 30 °C and 35 °C.', why: 'between مع and، و from مع to.' },
                        { q: 'About a festival:', choices: ['The festival lasts in ten days.', 'The festival lasts from ten days.', 'The festival lasts for ten days.'], a: 'The festival lasts for ten days.', why: 'مدة: for.' },
                        { q: 'About Sara:', choices: ['Sara is from Riyadh, but she lives in Dammam.', 'Sara is in Riyadh, but she lives from Dammam.', 'Sara is for Riyadh, but she lives in Dammam.'], a: 'Sara is from Riyadh, but she lives in Dammam.', why: 'from: من وين هي. in: وين تعيش.' },
                        { q: 'About the rain:', choices: ['It rains a lot, from May to July.', 'From May to July, it rains a lot.', 'From May, to July it rains a lot.'], a: 'From May to July, it rains a lot.', why: 'العبارة في الأول: الفاصلة بعدها كاملة، مو في نصها.' },
                        { q: 'About the weather today:', choices: ['It is about 22 °C today.', 'It is about, 22 °C today.', 'It is between 22 °C today.'], a: 'It is about 22 °C today.', why: 'about قبل الرقم بدون فاصلة. و between تحتاج رقمين.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Answer with a prepositional phrase',
                    instructions: 'المعلومة بين القوسين. جاوب بجملة كاملة. (كتابة اختيارية)',
                    items: [
                        { q: 'When is it cold in Tabuk? (December – February)', a: 'It is cold in Tabuk from December to February.' },
                        { q: 'How long is the rainy season in Jizan? (about four months)', a: 'The rainy season in Jizan lasts for about four months.' },
                        { q: 'What is the temperature in Riyadh in August? (40 °C – 45 °C)', a: 'In August, the temperature in Riyadh is between 40 °C and 45 °C.' },
                        { q: 'Where is your friend from? (Madinah)', a: 'My friend is from Madinah.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.4 There is / There are (LS ص 47، و RW ص 94) ───────────────
// الجو: "صورة كورنيش ينبع": مشهد واحد (بلوك map، بدون إيموجي) وكل أمثلة الشرح تصفه. اللي يعلق: "فيه" = There is، مو It has.
// خريطة There is / are ← There is / There are / Negative / Questions، كل فرع شرح ← مثال ← سؤال ← بطاقة تصحيح. التدريب: 3 تمارين اختيار + تصحيح اختياري.
const CORNICHE: string[][] = [
    ['Mosque', '', 'Café', ''],
    ['~CORNICHE ROAD'],
    ['Palm tree', 'Palm tree', 'Bench', ''],
    ['Umbrella', 'Umbrella', 'Umbrella', ''],
    ['~THE RED SEA'],
];

const thereIs: Topic = {
    slug: 'there-is-there-are',
    title: 'There is / There are',
    titleAr: 'There is و There are (يوجد)',
    keywords: ['there is', 'there are', "there's", "there isn't", "there aren't", 'is there', 'are there', 'some any', 'countable', 'uncountable', 'it has', 'يوجد', 'فيه', ...base, 'Unit 4', 'Places'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'There is / There are',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: '"فيه" في العربي = There is أو There are، مو It has. There is للمفرد واللي ما ينعد، و There are للجمع. النفي بـ not و any، والسؤال Is / Are there، والجواب بـ there.',
                sections: [
                    {
                        label: 'There is',
                        ar: 'شي واحد',
                        kind: 'v',
                        what: 'شي واحد (a / an)، أو شي ما ينعد (sand، rain).',
                        formula: [['There is', 'v'], ['a / an + noun · uncountable', 'n']],
                        examples: [
                            { parts: [['There is', 'v'], ['a mosque', 'n'], ['near the beach. There is'], ['a lot of sand', 'n', 'Uncountable'], ['.', 'p']], ar: 'شي واحد، وشي ما ينعد.' },
                        ],
                        mistakes: [
                            { wrong: 'It has a mosque near the beach.', right: 'There is a mosque near the beach.', why: '"فيه" للمكان: There is.' },
                            { wrong: 'There are a lot of rain.', right: 'There is a lot of rain.', why: 'rain ما ينعد.' },
                        ],
                    },
                    {
                        label: 'There are',
                        ar: 'أكثر من واحد',
                        kind: 'n',
                        what: 'للجمع، وغالبًا معه رقم أو some أو many.',
                        formula: [['There are', 'v'], ['two / some / many + plural', 'n']],
                        examples: [
                            { parts: [['There are', 'v'], ['two palm trees', 'n', 'Plural'], ['on the corniche.']], ar: 'جمع: There are.' },
                        ],
                        mistakes: [
                            { wrong: 'There is four seasons in Abha.', right: 'There are four seasons in Abha.', why: 'seasons جمع.' },
                        ],
                    },
                    {
                        label: 'Negative',
                        ar: 'النفي',
                        kind: 'x',
                        what: 'isn’t / aren’t، ومع الجمع واللي ما ينعد some تصير any.',
                        formula: [['There isn’t / aren’t', 'x'], ['any', 'x'], ['noun', 'n']],
                        examples: [
                            { parts: [['There aren’t', 'x', 'are + not'], ['any', 'x'], ['clouds', 'n'], ['in the sky.']], ar: 'جمع: aren’t + any.' },
                        ],
                        mistakes: [
                            { wrong: 'There aren’t some trees.', right: 'There aren’t any trees.', why: 'النفي: any.' },
                        ],
                    },
                    {
                        label: 'Questions',
                        ar: 'السؤال',
                        kind: 's',
                        what: 'Is / Are قبل there، والجواب بـ there مو it.',
                        formula: [['Is / Are', 'v'], ['there', 's'], ['noun', 'n'], ['?', 'p']],
                        examples: [
                            { parts: [['Is', 'v'], ['there', 's'], ['a café', 'n'], ['?', 'p'], ['Yes, there is.', 'n', 'Short answer']], ar: 'نجاوب بنفس there.' },
                        ],
                        mistakes: [
                            { wrong: 'Is there a park? Yes, it is.', right: 'Is there a park? Yes, there is.', why: 'الجواب بـ there.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'There ___ two banks near my house.',
                choices: ['is', 'are', 'has'],
                answer: 1,
                why: 'two banks جمع، فنقول There are. و "فيه" في العربي ما تصير has.',
            },
            blocks: [
                { type: 'text', text: 'لما تقول "فيه مسجد" أو "فيه نخل"، الإنجليزي يقول There is أو There are، مو It has. وكل الأمثلة تحت تصف هذا المشهد:' },
                { type: 'map', rows: CORNICHE, caption: 'كورنيش ينبع في الشتاء.' },

                // ── There is / are: أربع فروع ──
                {
                    type: 'hub',
                    word: 'There is / are',
                    ar: 'فيه',
                    branches: [
                        {
                            label: 'There is',
                            ar: 'شي واحد',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'There is لشي واحد (a / an)، أو لشي ما ينعد مثل sand و rain و wind. واختصارها There’s.' },
                                { type: 'formula', parts: [['There is', 'v'], ['a / an + noun', 'n'], ['place']] },
                                { type: 'formula', parts: [['There is', 'v'], ['a lot of / some + uncountable', 'n', 'Uncountable']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['There is', 'v'], ['a mosque', 'n'], ['near the corniche'], ['.', 'p']], mean: 'فيه مسجد قريب من الكورنيش.', ar: 'شي واحد: There is + a. واختصارها There’s.' },
                                { type: 'breakdown', parts: [['There is', 'v'], ['a lot of sand', 'n', 'Uncountable'], ['on the beach'], ['.', 'p']], mean: 'فيه رمل كثير على الشاطئ.', ar: 'sand ما ينعد، فـ There is حتى لو كثير.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: '___ a cold wind on the corniche today.', choices: ['There are', 'There is', 'It has'], a: 'There is', why: 'wind هنا واحد، و "فيه" = There is، مو It has.' },
                                        { q: 'There is a lot of ___ in Abha in summer.', choices: ['rains', 'a rain', 'rain'], a: 'rain', why: 'rain ما ينعد: بدون a وبدون s.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: '"فيه" = It has',
                                    kind: 'x',
                                    wrong: 'It has a mosque near the beach.',
                                    mark: 'It has',
                                    options: ['It is a mosque near the beach.', 'There are a mosque near the beach.', 'There is a mosque near the beach.'],
                                    answer: 'There is a mosque near the beach.',
                                    parts: [['There is', 'v'], ['a mosque', 'n'], ['near the beach'], ['.', 'p']],
                                    why: '"فيه" للمكان = There is. و It has معناها "عنده": للشخص أو الشي اللي يملك.',
                                },
                                {
                                    type: 'fix',
                                    label: 'There are مع ما ينعد',
                                    kind: 'v',
                                    wrong: 'There are a lot of rain in winter.',
                                    mark: 'There are',
                                    options: ['There is a lot of rain in winter.', 'There is a lot of rains in winter.', 'There are a lot of rains in winter.'],
                                    answer: 'There is a lot of rain in winter.',
                                    parts: [['There is', 'v'], ['a lot of rain', 'n', 'Uncountable'], ['in winter'], ['.', 'p']],
                                    why: 'rain ما ينعد، فياخذ There is حتى مع a lot of.',
                                },
                                { type: 'anchor', lines: ['فيه للمكان: There is a mosque', 'وما ينعد: There is a lot of rain'] },
                            ],
                        },
                        {
                            label: 'There are',
                            ar: 'أكثر من واحد',
                            kind: 'n',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'There are للجمع، وغالبًا معه رقم (two) أو some أو many.' },
                                { type: 'formula', parts: [['There are', 'v'], ['two / some / many + plural noun', 'n', 'Plural'], ['place']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['There are', 'v'], ['two palm trees', 'n', 'Plural'], ['on the corniche'], ['.', 'p']], mean: 'فيه نخلتين على الكورنيش.' },
                                { type: 'breakdown', parts: [['There are', 'v'], ['some people', 'n', 'Plural'], ['in the café'], ['.', 'p']], mean: 'فيه ناس في المقهى.', ar: 'people جمع (مفردها person)، فـ There are.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'There ___ many old houses in Al-Balad, Jeddah.', choices: ['is', 'are', 'has'], a: 'are', why: 'houses جمع: There are.' }] },
                                {
                                    type: 'fix',
                                    label: 'There is مع الجمع',
                                    kind: 'n',
                                    wrong: 'There is four seasons in Abha.',
                                    mark: 'There is',
                                    options: ['There are four season in Abha.', 'There are four seasons in Abha.', 'There has four seasons in Abha.'],
                                    answer: 'There are four seasons in Abha.',
                                    parts: [['There are', 'v'], ['four seasons', 'n', 'Plural'], ['in Abha'], ['.', 'p']],
                                    why: 'seasons جمع: There are. والاسم بعد الرقم ياخذ s.',
                                },
                            ],
                        },
                        {
                            label: 'Negative',
                            ar: 'النفي',
                            kind: 'x',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'نضيف not: There isn’t و There aren’t. ومع الجمع واللي ما ينعد، some تصير any.' },
                                { type: 'formula', parts: [['There isn’t', 'x', 'is + not'], ['a / an + noun', 'n']] },
                                { type: 'formula', parts: [['There isn’t / aren’t', 'x'], ['any', 'x', 'any'], ['plural / uncountable', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['There isn’t', 'x', 'is + not'], ['a hotel', 'n'], ['on the corniche'], ['.', 'p']], mean: 'ما فيه فندق على الكورنيش.', ar: 'مفرد: isn’t + a.' },
                                { type: 'breakdown', parts: [['There aren’t', 'x', 'are + not'], ['any', 'x', 'any'], ['clouds', 'n'], ['in the sky'], ['.', 'p']], mean: 'ما فيه غيوم في السما.', ar: 'جمع: aren’t + any. وما ينعد: isn’t + any.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'There aren’t ___ boats on the sea today.', choices: ['some', 'a', 'any'], a: 'any', why: 'النفي مع الجمع: any.' }] },
                                {
                                    type: 'fix',
                                    label: 'some في النفي',
                                    kind: 'x',
                                    wrong: 'There aren’t some trees on my street.',
                                    mark: 'some',
                                    options: ['There isn’t any trees on my street.', 'There aren’t any trees on my street.', 'There aren’t a trees on my street.'],
                                    answer: 'There aren’t any trees on my street.',
                                    parts: [['There aren’t', 'x', 'are + not'], ['any', 'x', 'any'], ['trees', 'n'], ['on my street'], ['.', 'p']],
                                    why: 'في النفي some تصير any. و trees جمع: aren’t.',
                                },
                                { type: 'anchor', lines: ['مفرد: There isn’t a hotel', 'مع الجمع نقول any: There aren’t any clouds'] },
                            ],
                        },
                        {
                            label: 'Questions',
                            ar: 'السؤال',
                            kind: 's',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'is أو are تطلع قبل there. والجواب القصير بـ there، مو it: Yes, there is.' },
                                { type: 'formula', parts: [['Is / Are', 'v'], ['there', 's'], ['(any) noun', 'n'], ['?', 'p']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Is', 'v'], ['there', 's'], ['a café', 'n'], ['on the corniche'], ['?', 'p'], ['Yes, there is.', 'n', 'Short answer']], mean: 'هل فيه مقهى على الكورنيش؟ نعم فيه.' },
                                { type: 'breakdown', parts: [['Are', 'v'], ['there', 's'], ['any boats', 'n'], ['on the sea'], ['?', 'p'], ['No, there aren’t.', 'x', 'Short answer']], mean: 'هل فيه قوارب في البحر؟ لا ما فيه.', ar: 'السؤال مع الجمع: any.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Is there a pharmacy near here? Yes, ___', choices: ['it is.', 'there is.', 'there are.'], a: 'there is.', why: 'نجاوب بنفس there، و pharmacy وحدة: Yes, there is.' }] },
                                {
                                    type: 'fix',
                                    label: 'الجواب بـ it',
                                    kind: 's',
                                    wrong: 'Is there a park in your city? Yes, it is.',
                                    mark: 'it is',
                                    options: ['Is there a park in your city? Yes, there is.', 'Is there a park in your city? Yes, there are.', 'Is there a park in your city? Yes, it has.'],
                                    answer: 'Is there a park in your city? Yes, there is.',
                                    parts: [['Is', 'v'], ['there', 's'], ['a park', 'n'], ['in your city'], ['?', 'p'], ['Yes, there is.', 'n', 'Short answer']],
                                    why: 'السؤال بـ there، فالجواب بـ there. و park واحد، فما نقول there are.',
                                },
                            ],
                        },
                    ],
                },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: There is, There are, or It has?',
                    instructions: 'وش يكمّل الجملة؟ تذكّر: "فيه" للمكان = There is أو There are.',
                    choices: ['There is', 'There are', 'It has'],
                    items: [
                        { q: '___ a pharmacy near the station.', a: 'There is', why: 'شي واحد: There is.' },
                        { q: '___ two official languages in Canada.', a: 'There are', why: 'جمع: There are.' },
                        { q: '___ a lot of snow on the mountains.', a: 'There is', why: 'snow ما ينعد: There is.' },
                        { q: '___ some white clouds in the sky.', a: 'There are', why: 'clouds جمع: There are.' },
                        { q: '___ a strong wind today.', a: 'There is', why: 'wind هنا واحد: There is. و It has ما تعني "فيه".' },
                        { q: '___ many tourists in Al-Ula in winter.', a: 'There are', why: 'tourists جمع: There are.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: some, any, or a?',
                    instructions: 'اختر some أو any أو a.',
                    choices: ['some', 'any', 'a'],
                    items: [
                        { q: 'There are ___ green trees in the park.', a: 'some', why: 'مثبت مع جمع: some.' },
                        { q: 'There isn’t ___ rain today.', a: 'any', why: 'نفي مع ما ينعد: any.' },
                        { q: 'Are there ___ shops near your house?', a: 'any', why: 'سؤال مع جمع: any.' },
                        { q: 'There’s ___ small market in my area.', a: 'a', why: 'شي واحد ينعد (market): a.' },
                        { q: 'There aren’t ___ people on the beach.', a: 'any', why: 'نفي مع جمع: any.' },
                        { q: 'There’s ___ snow on the mountains.', a: 'some', why: 'snow ما ينعد فما ياخذ a، والجملة مثبتة: some.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Mixed practice',
                    instructions: 'اختر الجواب الصح.',
                    items: [
                        { q: 'There ___ many old houses in Jeddah. There ___ also a famous fountain.', choices: ['are / is', 'is / are', 'are / are', 'is / is'], a: 'are / is', why: 'houses جمع: are. و fountain وحدة: is.' },
                        { q: '_______ a cat under the chair.', choices: ['There are', 'Their is', 'There is', 'They are'], a: 'There is', why: 'cat واحد: There is. و Their معناها "حقهم".' },
                        { q: 'Is there a hospital near here?', choices: ['Yes, it is.', 'Yes, there is.', 'Yes, there are.'], a: 'Yes, there is.', why: 'نجاوب بنفس there، و hospital واحد.' },
                        { q: 'Are there any parks in Yanbu?', choices: ['Yes, there is.', 'Yes, they are.', 'Yes, there are.'], a: 'Yes, there are.', why: 'Are there ← there are.' },
                        { q: 'Which sentence is correct?', choices: ['There aren’t any water in the bottle.', 'There isn’t any water in the bottle.', 'There isn’t some water in the bottle.'], a: 'There isn’t any water in the bottle.', why: 'water ما ينعد: isn’t، والنفي any.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Correct the sentence',
                    instructions: 'كل جملة فيها خطأ: صلحها. (كتابة اختيارية)',
                    items: [
                        { q: 'There is two shops on my street.', a: 'There are two shops on my street.' },
                        { q: 'It has a big park in my city.', a: 'There is a big park in my city.' },
                        { q: 'There are a lot of sand in the desert.', a: 'There is a lot of sand in the desert.' },
                        { q: 'Is there a bank here? Yes, it is.', a: 'Is there a bank here? Yes, there is.' },
                        { q: 'There aren’t some chairs in the room.', a: 'There aren’t any chairs in the room.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.5 Word order and punctuation (RW ص 53 و54) ───────────────
// الجو: "ورقة الطقس المصححة": فقرة طالب عن جو الرياض فيها 3 أخطاء (بلوك errors مثل 1.4): الترتيب بعد be، والحرف الكبير، والفاصلة في القائمة.
// كل جزء شرح ← مثال ← سؤال ← بطاقة تصحيح. فاصلة الـ prepositional phrase انشالت من هنا (لها فرع كامل في 2.3). التدريب: 3 تمارين اختيار + تصحيح اختياري جملة جملة.
const wordOrder: Topic = {
    slug: 'word-order-and-punctuation',
    title: 'Word order and punctuation',
    titleAr: 'ترتيب الجملة وعلامات الترقيم',
    keywords: ['word order', 'punctuation', 'capital letters', 'commas', 'comma', 'list', 'ترتيب الكلمات', 'علامات الترقيم', 'حرف كبير', 'فاصلة', 'months', 'days', 'seasons', 'nationalities', 'be', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Word order and punctuation',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'الجملة اللي فيها be: الفاعل أول، بعده be، بعده صفة أو noun phrase أو prepositional phrase. والشهور والأيام والجنسيات بحرف كبير، والفصول بحرف صغير. وفي القائمة: فاصلة بين الأشياء، وقبل الأخير and.',
                sections: [
                    {
                        label: 'Word order',
                        ar: 'الترتيب',
                        kind: 's',
                        what: 'الفاعل أول، بعده be، بعده واحد من ثلاثة.',
                        formula: [['Subject', 's'], ['be', 'v'], ['Adj / Noun phrase / Prep phrase', 'n']],
                        examples: [
                            { parts: [['Summers', 's'], ['are', 'v'], ['very hot', 'adj', 'Adjective'], ['.', 'p']], ar: 'كيف؟ صفة.' },
                            { parts: [['Summer', 's'], ['is', 'v'], ['from May to September', 'x', 'Prep phrase'], ['.', 'p']], ar: 'متى؟ prepositional phrase.' },
                        ],
                        mistakes: [
                            { wrong: 'Hot are summers in Riyadh.', right: 'Summers in Riyadh are hot.', why: 'الفاعل أول.' },
                        ],
                    },
                    {
                        label: 'Capital letters',
                        ar: 'الحرف الكبير',
                        kind: 'dep',
                        what: 'الشهور والأيام والدول والجنسيات: كبير. الفصول: صغير.',
                        examples: [
                            { parts: [['It is cold in'], ['winter', 'p', 'Season: small'], [', especially in'], ['January', 'dep', 'Month'], ['.', 'p']], ar: 'الفصل صغير، والشهر كبير.' },
                        ],
                        mistakes: [
                            { wrong: 'The hottest month is july.', right: 'The hottest month is July.', why: 'الشهر بحرف كبير.' },
                            { wrong: 'My cousin is saudi.', right: 'My cousin is Saudi.', why: 'الجنسية بحرف كبير.' },
                        ],
                    },
                    {
                        label: 'Commas',
                        ar: 'الفاصلة في القائمة',
                        kind: 'p',
                        what: '3 أشياء أو أكثر: فاصلة بينهم، وقبل الأخير and. شيئين: and بس.',
                        formula: [['A'], [',', 'p'], ['B'], ['and', 'co'], ['C']],
                        examples: [
                            { parts: [['It is hot in June'], [',', 'p'], ['July'], ['and', 'co'], ['August.']], ar: 'فاصلة بين الأول والثاني، وقبل الأخير and.' },
                        ],
                        mistakes: [
                            { wrong: 'The best months are November December and March.', right: 'The best months are November, December and March.', why: 'ناقصها فاصلة بعد November.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
                tables: [
                    {
                        title: 'حرف كبير أو صغير؟',
                        across: true,
                        head: ['حرف كبير', 'حرف صغير'],
                        rows: [
                            ['July · Friday', 'summer · winter'],
                            ['Egypt · Egyptian', 'spring · autumn'],
                            ['Riyadh · Mr. John', 'weather · city'],
                        ],
                    },
                ],
            },
            warmup: {
                q: 'كم كلمة لازم تبدأ بحرف كبير؟',
                sentence: 'it is very hot in july.',
                choices: ['وحدة', 'ثنتين', 'ثلاث'],
                answer: 1,
                why: 'أول كلمة (It) واسم الشهر (July): It is very hot in July.',
            },
            blocks: [
                { type: 'text', text: 'طالب كتب عن جو الرياض، ورجّع له المدرس الورقة وفيها 3 أخطاء. اضغط على خطأ وصلّحه، وبعدها اللي بعده:' },

                // ── الورقة: 3 أخطاء، كل خطأ شرح ← مثال ← سؤال ← بطاقة تصحيح ──
                {
                    type: 'errors',
                    title: 'الجو في الرياض',
                    fixed: 'Summers in Riyadh are hot. The hottest month is July. The best months are November, December and March.',
                    items: [
                        {
                            label: 'ترتيب الجملة مع be',
                            short: 'الترتيب',
                            kind: 's',
                            line: 'Hot are summers in Riyadh.',
                            mark: 'Hot are summers',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'الجملة اللي فيها be ترتيبها ثابت: الفاعل أول، بعده be، وبعده واحد من ثلاثة. العربي يقدر يقول "حارٌّ صيفُ الرياض"، الإنجليزي لا.' },
                                { type: 'formula', parts: [['Subject', 's'], ['be', 'v'], ['…']] },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'adj', title: 'be + صفة', ar: 'كيف الشي؟', en: 'Summers are hot.' },
                                        { kind: 'n', title: 'be + noun phrase', ar: 'وش هو الشي؟', en: 'Riyadh is a big city.' },
                                        { kind: 'x', title: 'be + prepositional phrase', ar: 'وين؟ أو متى؟', en: 'Summer is from May to September.' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['The nights', 's'], ['are', 'v'], ['very cold', 'adj', 'Adjective'], ['.', 'p']], mean: 'الليالي باردة جدًا.', ar: 'كيف؟ صفة.' },
                                { type: 'breakdown', parts: [['Riyadh', 's'], ['is', 'v'], ['the capital of Saudi Arabia', 'n', 'Noun phrase'], ['.', 'p']], mean: 'الرياض عاصمة السعودية.', ar: 'وش هي؟ noun phrase.' },
                                { type: 'breakdown', parts: [['Tabuk', 's'], ['is', 'v'], ['in the north', 'x', 'Prep phrase'], ['.', 'p']], mean: 'تبوك في الشمال.', ar: 'وين؟ prepositional phrase.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence is in the correct order?', choices: ['Cold are the nights in Tabuk.', 'The nights in Tabuk are cold.', 'The nights are in Tabuk cold.'], a: 'The nights in Tabuk are cold.', why: 'الفاعل (The nights in Tabuk) أول، بعده are، بعده الصفة.' }] },
                                {
                                    type: 'fix',
                                    label: 'الصفة قبل الفاعل',
                                    kind: 's',
                                    wrong: 'Green are the mountains in spring.',
                                    mark: 'Green are',
                                    options: ['The mountains green are in spring.', 'The mountains are green in spring.', 'Are the mountains green in spring.'],
                                    answer: 'The mountains are green in spring.',
                                    parts: [['The mountains', 's'], ['are', 'v'], ['green', 'adj', 'Adjective'], ['in spring'], ['.', 'p']],
                                    why: 'الفاعل (The mountains) أول، بعده are، بعده الصفة. والجملة اللي تبدأ بـ Are سؤال، مو خبر.',
                                },
                                { type: 'anchor', lines: ['الفاعل أول، وبعده be: Summers are hot', 'بعد be يجي: صفة · noun phrase · prep phrase'] },
                            ],
                        },
                        {
                            label: 'الحرف الكبير: الشهور والأيام والجنسيات',
                            short: 'الحرف الكبير',
                            kind: 'dep',
                            line: 'The hottest month is july.',
                            mark: 'july',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'أول كلمة، و I، والأسماء والمدن بحرف كبير. وهنا زيادة: الشهور، والأيام، والدول، والجنسيات بحرف كبير بعد. أما الفصول فبحرف صغير.' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'dep', title: 'الشهور والأيام ← كبير', en: 'July · Friday' },
                                        { kind: 'dep', title: 'الدول والجنسيات ← كبير', en: 'Egypt · Egyptian' },
                                        { kind: 'p', title: 'الفصول ← صغير', en: 'summer · winter · spring · autumn' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['My teacher'], ['is', 'v'], ['Egyptian', 'dep', 'Nationality'], ['.', 'p']], mean: 'معلمي مصري.' },
                                { type: 'breakdown', parts: [['It is cold in'], ['winter', 'p', 'Season: small'], [', especially in'], ['January', 'dep', 'Month'], ['.', 'p']], mean: 'الجو بارد في الشتا، خصوصًا في يناير.', ar: 'الفصل صغير، والشهر كبير.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['In Winter, it is cold in January.', 'In winter, it is cold in january.', 'In winter, it is cold in January.'], a: 'In winter, it is cold in January.', why: 'الفصل winter صغير، والشهر January كبير.' }] },
                                {
                                    type: 'fix',
                                    label: 'الجنسية والدولة',
                                    kind: 'dep',
                                    wrong: 'My cousin is saudi, and he lives in egypt.',
                                    mark: 'saudi',
                                    options: ['My cousin is Saudi, and he lives in egypt.', 'My cousin is Saudi, and he lives in Egypt.', 'My Cousin is Saudi, and he lives in Egypt.'],
                                    answer: 'My cousin is Saudi, and he lives in Egypt.',
                                    parts: [['My cousin'], ['is', 'v'], ['Saudi', 'dep', 'Nationality'], [', and he lives in'], ['Egypt', 'dep', 'Country'], ['.', 'p']],
                                    why: 'الجنسية (Saudi) والدولة (Egypt) بحرف كبير. و cousin كلمة عادية: صغير.',
                                },
                                { type: 'anchor', lines: ['حرف كبير: July · Friday · Saudi', 'حرف صغير للفصول: summer · winter'] },
                            ],
                        },
                        {
                            label: 'الفاصلة في القائمة',
                            short: 'الفاصلة',
                            kind: 'p',
                            line: 'The best months are November December and March.',
                            mark: 'November December',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'لما تعدّ ثلاث أشياء أو أكثر: فاصلة بينهم، وقبل الأخير and بدون فاصلة. وإذا شيئين بس: and بدون فاصلة.' },
                                { type: 'formula', parts: [['A'], [',', 'p'], ['B'], ['and', 'co'], ['C']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['It is hot in'], ['June'], [',', 'p'], ['July'], ['and', 'co'], ['August'], ['.', 'p']], mean: 'الجو حار في يونيو ويوليو وأغسطس.' },
                                { type: 'breakdown', parts: [['Jeddah'], ['and', 'co'], ['Yanbu'], ['are on the Red Sea'], ['.', 'p']], mean: 'جدة وينبع على البحر الأحمر.', ar: 'شيئين بس: and بدون فاصلة.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['We visited Abha, Taif, and, Al-Baha.', 'We visited Abha, Taif and Al-Baha.', 'We visited Abha Taif and Al-Baha.'], a: 'We visited Abha, Taif and Al-Baha.', why: 'فاصلة بين الأول والثاني، وقبل الأخير and بدون فاصلة حولها.' }] },
                                {
                                    type: 'fix',
                                    label: 'قائمة بدون فاصلة',
                                    kind: 'p',
                                    wrong: 'My favourite days are Thursday Friday and Saturday.',
                                    mark: 'Thursday Friday',
                                    options: ['My favourite days are Thursday, Friday and Saturday.', 'My favourite days are Thursday, Friday, and, Saturday.', 'My favourite days are Thursday Friday, and Saturday.'],
                                    answer: 'My favourite days are Thursday, Friday and Saturday.',
                                    parts: [['My favourite days are'], ['Thursday'], [',', 'p'], ['Friday'], ['and', 'co'], ['Saturday'], ['.', 'p']],
                                    why: 'ثلاث أيام: فاصلة بعد Thursday، وقبل الأخير and.',
                                },
                            ],
                        },
                    ],
                },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Which order is correct?',
                    instructions: 'الكلمات فوق، اختر الترتيب الصحيح.',
                    items: [
                        { q: 'hot / are / in Riyadh / summers', choices: ['Hot are summers in Riyadh.', 'Summers in Riyadh are hot.', 'Summers are in Riyadh hot.'], a: 'Summers in Riyadh are hot.', why: 'الفاعل (Summers in Riyadh) أول، بعده are، بعده الصفة.' },
                        { q: 'windy / is / it / in spring', choices: ['It is windy in spring.', 'It windy is in spring.', 'Windy is it in spring.'], a: 'It is windy in spring.', why: 'It أول، بعده is، بعده الصفة.' },
                        { q: 'from June / are / to August / the summer months', choices: ['The summer months from June are to August.', 'Are the summer months from June to August.', 'The summer months are from June to August.'], a: 'The summer months are from June to August.', why: 'بعد be تجي العبارة كاملة: from June to August.' },
                        { q: 'a city / Abha / is / in the south', choices: ['Abha is a city in the south.', 'A city is Abha in the south.', 'Abha a city is in the south.'], a: 'Abha is a city in the south.', why: 'الفاعل Abha، بعده is، بعده noun phrase.' },
                        { q: 'humid / is / the weather / today', choices: ['The weather humid is today.', 'The weather is humid today.', 'Humid is the weather today.'], a: 'The weather is humid today.', why: 'الفاعل، ثم is، ثم الصفة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Capital letter or not?',
                    instructions: 'الكلمة تحتاج حرف كبير لو جات وسط الجملة؟',
                    choices: ['Capital', 'Small'],
                    items: [
                        { q: 'january', a: 'Capital', why: 'شهر: حرف كبير.' },
                        { q: 'autumn', a: 'Small', why: 'فصل: حرف صغير.' },
                        { q: 'egyptian', a: 'Capital', why: 'جنسية: حرف كبير.' },
                        { q: 'saturday', a: 'Capital', why: 'يوم: حرف كبير.' },
                        { q: 'weather', a: 'Small', why: 'كلمة عادية: حرف صغير.' },
                        { q: 'madinah', a: 'Capital', why: 'مدينة: حرف كبير.' },
                        { q: 'summer', a: 'Small', why: 'فصل: حرف صغير، حتى لو الشهور كبيرة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Commas',
                    instructions: 'الفواصل في الجملة صحيحة ولا لا؟',
                    choices: ['Correct', 'Wrong'],
                    items: [
                        { q: 'It is autumn in March April and May.', a: 'Wrong', why: 'ناقصها فاصلة بعد March.' },
                        { q: 'The best months are April, May and October.', a: 'Correct', why: 'فاصلة بين الأول والثاني، وقبل الأخير and.' },
                        { q: 'Abha is cool, green and rainy in summer.', a: 'Correct', why: 'ثلاث صفات: فاصلة، ثم and.' },
                        { q: 'We have English on Sunday, Monday, and, Tuesday.', a: 'Wrong', why: 'ما فيه فاصلة حول and.' },
                        { q: 'Jeddah, and Dammam are big cities.', a: 'Wrong', why: 'شيئين بس: and بدون فاصلة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Correct the sentence',
                    instructions: 'صحح الترتيب والحروف الكبيرة والفواصل. (كتابة اختيارية)',
                    items: [
                        { q: 'summers in riyadh are very hot.', a: 'Summers in Riyadh are very hot.' },
                        { q: 'The hottest months are june july and august.', a: 'The hottest months are June, July and August.' },
                        { q: 'Cool is the weather in november.', a: 'The weather is cool in November.' },
                        { q: 'In Winter, the nights are cold in tabuk.', a: 'In winter, the nights are cold in Tabuk.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.6 Vocabulary: weather، seasons، colours (RW ص 40 و44، LS ص 44 إلى 46) ───────────────
// الجو: "النشرة الجوية": أمثلة كل فرع جمل من نشرة طقس المملكة (ليلة شتوية)، وفي الآخر النشرة كاملة.
// خريطة Weather ← rain → rainy / Hot · cold / Seasons / Colours، كل فرع شرح ← مثال ← سؤال ← بطاقة تصحيح. التدريب: 3 تمارين اختيار + نشرة يكتبها الطالب.
const weatherVocab: Topic = {
    slug: 'weather-seasons-colours',
    title: 'Weather, seasons and colours',
    titleAr: 'مفردات: الطقس والفصول والألوان',
    keywords: ['weather', 'seasons', 'colours', 'colors', 'climate', 'rainy', 'sunny', 'cloudy', 'windy', 'foggy', 'humid', 'dry', 'temperature', 'rainfall', 'blue', 'grey', 'green', 'weather forecast', 'طقس', 'الطقس', 'فصول', 'ألوان', 'مفردات', 'كلمات', 'نشرة جوية', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Weather, seasons and colours',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'أغلب كلمات الطقس اسم وصفة: rain ← rainy (الاسم + y). بعد It is صفة، وبعد a lot of اسم. والحرارة من hot لـ cold، والفصول بحرف صغير، واللون صفة ما تنجمع.',
                sections: [
                    {
                        label: 'rain → rainy',
                        ar: 'الاسم والصفة',
                        kind: 'adj',
                        what: 'الصفة = الاسم + y. بعد is صفة، وبعد a lot of اسم.',
                        formula: [['Noun', 'n'], ['+ y', 'x', 'ending'], ['Adjective', 'adj']],
                        examples: [
                            { parts: [['rain', 'n'], ['→'], ['rainy', 'adj'], ['·'], ['sun', 'n'], ['→'], ['sunny', 'adj'], ['·'], ['fog', 'n'], ['→'], ['foggy', 'adj']], ar: 'sun و fog: الحرف الأخير يتضاعف.' },
                        ],
                        mistakes: [
                            { wrong: 'It is sun today.', right: 'It is sunny today.', why: 'بعد is صفة.' },
                            { wrong: 'There is a lot of rainy.', right: 'There is a lot of rain.', why: 'بعد a lot of اسم.' },
                        ],
                    },
                    {
                        label: 'Hot · cold',
                        ar: 'الحرارة',
                        kind: 'v',
                        what: 'من الأحر: hot، warm، cool، cold. و dry جاف، و humid رطب.',
                        examples: [
                            { parts: [['Jeddah is'], ['warm', 'adj'], ['and'], ['humid', 'adj'], ['. It is'], ['about 28 °C', 'x', 'twenty-eight degrees'], ['.', 'p']], ar: 'humid: الهوا فيه رطوبة.' },
                        ],
                        mistakes: [
                            { wrong: 'Jeddah is very dry. The air is wet.', right: 'Jeddah is very humid. The air is wet.', why: 'الهوا الرطب: humid.' },
                        ],
                    },
                    {
                        label: 'Seasons',
                        ar: 'الفصول',
                        kind: 'n',
                        what: 'الفصول بحرف صغير. climate: جو المكان طول السنة، و rainfall: كمية المطر.',
                        examples: [
                            { parts: [['The climate', 'n', 'Climate'], ['in Jeddah'], ['is'], ['hot and humid'], ['.', 'p']], ar: 'climate: طول السنة، مو اليوم بس.' },
                        ],
                        mistakes: [
                            { wrong: 'We go to Abha in Summer.', right: 'We go to Abha in summer.', why: 'الفصل بحرف صغير.' },
                        ],
                    },
                    {
                        label: 'Colours',
                        ar: 'الألوان',
                        kind: 's',
                        what: 'اللون صفة: قبل الاسم أو بعد be، وما ينجمع.',
                        examples: [
                            { parts: [['a'], ['blue', 's', 'Colour'], ['sky', 'n'], ['·'], ['grey', 's', 'Colour'], ['clouds', 'n'], ['·'], ['The mountains are'], ['green', 's', 'Colour'], ['.', 'p']], ar: 'قبل الاسم، أو بعد be.' },
                        ],
                        mistakes: [
                            { wrong: 'There are whites clouds.', right: 'There are white clouds.', why: 'اللون ما ينجمع.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
                tables: [
                    {
                        title: 'الفصول وشهورها',
                        head: ['winter', 'spring', 'summer', 'autumn'],
                        rows: [['Dec – Feb', 'Mar – May', 'Jun – Aug', 'Sep – Nov']],
                    },
                ],
            },
            warmup: {
                q: 'إذا فيه rain كثير، كيف نوصف اليوم؟',
                choices: ['a rain day', 'a rainy day', 'a rained day'],
                answer: 1,
                why: 'نحوّل الاسم لصفة بإضافة y: rain ← rainy.',
            },
            blocks: [
                { type: 'text', text: 'الدرس نشرة جوية للمملكة الليلة، وكل كلمة فيها تنفعك توصف الجو.' },

                // ── Weather: أربع فروع ──
                {
                    type: 'hub',
                    word: 'Weather',
                    ar: 'الطقس',
                    branches: [
                        {
                            label: 'rain → rainy',
                            ar: 'الاسم والصفة',
                            kind: 'adj',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'أغلب كلمات الطقس لها شكلين: اسم (الشي نفسه: rain) وصفة (توصف الجو: rainy). والصفة = الاسم + y.' },
                                { type: 'formula', parts: [['Noun', 'n'], ['+ y', 'x', 'ending'], ['Adjective', 'adj']] },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'adj', title: 'الاسم + y', en: 'rain → rainy · cloud → cloudy · wind → windy · snow → snowy' },
                                        { kind: 'x', title: 'sun و fog: الحرف الأخير يتضاعف', en: 'sun → sunny · fog → foggy' },
                                    ],
                                },
                                { type: 'text', text: 'ووين أحط كل واحد؟ بعد It is صفة، وبعد a lot of أو the اسم.' },
                                { type: 'formula', parts: [['It is', 'v'], ['Adjective', 'adj']] },
                                { type: 'formula', parts: [['There is a lot of', 'v'], ['Noun', 'n']] },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['In Tabuk,'], ['it', 's'], ['is', 'v'], ['snowy', 'adj', 'Adjective'], ['tonight'], ['.', 'p']], mean: 'في تبوك الليلة الجو ثلجي.', ar: 'بعد is صفة: snowy.' },
                                { type: 'breakdown', parts: [['There is', 'v'], ['a lot of'], ['rain', 'n', 'Noun'], ['in Abha'], ['.', 'p']], mean: 'فيه مطر كثير في أبها.', ar: 'بعد a lot of اسم: rain.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'Look at the sky. It is very ___ today.', choices: ['cloud', 'clouds', 'cloudy'], a: 'cloudy', why: 'بعد is صفة: cloudy.' },
                                        { q: 'There is a lot of ___ on the road. Drive slowly.', choices: ['foggy', 'fog', 'fogs'], a: 'fog', why: 'بعد a lot of اسم: fog.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'الاسم بدل الصفة',
                                    kind: 'adj',
                                    wrong: 'It is sun today.',
                                    mark: 'sun',
                                    options: ['It is suny today.', 'It is sunny today.', 'It is sunning today.'],
                                    answer: 'It is sunny today.',
                                    parts: [['It', 's'], ['is', 'v'], ['sunny', 'adj', 'Adjective'], ['today'], ['.', 'p']],
                                    why: 'بعد is صفة: sunny. والـ n تتضاعف.',
                                },
                                {
                                    type: 'fix',
                                    label: 'الصفة بدل الاسم',
                                    kind: 'n',
                                    wrong: 'There is a lot of rainy in winter.',
                                    mark: 'rainy',
                                    options: ['There is a lot of rains in winter.', 'There are a lot of rainy in winter.', 'There is a lot of rain in winter.'],
                                    answer: 'There is a lot of rain in winter.',
                                    parts: [['There is', 'v'], ['a lot of'], ['rain', 'n', 'Noun'], ['in winter'], ['.', 'p']],
                                    why: 'بعد a lot of اسم: rain.',
                                },
                                { type: 'anchor', lines: ['بعد It is صفة: It is rainy', 'بعد a lot of اسم: a lot of rain'] },
                            ],
                        },
                        {
                            label: 'Hot · cold',
                            ar: 'الحرارة',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'أربع كلمات للحرارة، من الأحر للأبرد:' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'x', title: 'hot', ar: 'حار' },
                                        { kind: 'adj', title: 'warm', ar: 'دافي' },
                                        { kind: 'n', title: 'cool', ar: 'بارد شوي، لطيف' },
                                        { kind: 's', title: 'cold', ar: 'بارد' },
                                    ],
                                },
                                { type: 'text', text: 'وللرطوبة: dry (جاف) و humid (رطب، الهوا فيه ماء). ودرجة الحرارة تنقرأ: 18 °C = eighteen degrees Celsius.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Jeddah', 's'], ['is', 'v'], ['warm', 'adj'], ['and'], ['humid', 'adj'], ['.', 'p']], mean: 'جدة دافية ورطبة.', ar: 'humid: الهوا فيه رطوبة.' },
                                { type: 'breakdown', parts: [['The temperature', 'n'], ['is', 'v'], ['about 18 °C', 'x', 'eighteen degrees Celsius'], ['.', 'p']], mean: 'الحرارة حوالي 18 درجة.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'It is 24 °C. It is not hot, and it is not cold. It is ___.', choices: ['warm', 'cold', 'humid'], a: 'warm', why: '24 °C بين الحار والبارد: warm. و humid عن الرطوبة مو الحرارة.' },
                                        { q: 'How do you say 50 °C?', choices: ['fifteen degrees Celsius', 'fifty degrees Celsius', 'five zero degrees'], a: 'fifty degrees Celsius', why: '50 = fifty. و fifteen = 15.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'dry أو humid',
                                    kind: 'v',
                                    wrong: 'Jeddah is very dry. The air is wet.',
                                    mark: 'dry',
                                    options: ['Jeddah is very humid. The air is wet.', 'Jeddah is very cold. The air is wet.', 'Jeddah is very sunny. The air is wet.'],
                                    answer: 'Jeddah is very humid. The air is wet.',
                                    parts: [['Jeddah', 's'], ['is', 'v'], ['very humid', 'adj'], ['.', 'p'], ['The air is wet.']],
                                    why: 'الهوا فيه رطوبة (wet) = humid. و dry عكسها.',
                                },
                                { type: 'anchor', lines: ['من الأحر للأبرد: hot · warm · cool · cold', 'رطب = humid · جاف = dry'] },
                            ],
                        },
                        {
                            label: 'Seasons',
                            ar: 'الفصول',
                            kind: 'n',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'السنة فيها أربع فصول (seasons)، وتنكتب بحرف صغير. و climate يعني جو المكان طول السنة، و rainfall كمية المطر.' },
                                {
                                    type: 'table',
                                    head: ['Season', 'Months'],
                                    rows: [
                                        ['winter', 'December, January, February'],
                                        ['spring', 'March, April, May'],
                                        ['summer', 'June, July, August'],
                                        ['autumn', 'September, October, November'],
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['The climate', 'n', 'Climate'], ['in Jeddah'], ['is', 'v'], ['hot and humid'], ['.', 'p']], mean: 'جو جدة حار ورطب طول السنة.', ar: 'climate: طول السنة، مو اليوم بس.' },
                                { type: 'breakdown', parts: [['Jizan', 's'], ['gets', 'v'], ['a lot of'], ['rainfall', 'n', 'Rainfall'], ['in summer'], ['.', 'p']], mean: 'جازان ينزل عليها مطر كثير في الصيف.', ar: 'rainfall: كمية المطر.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'March, April and May are the ___ months.', choices: ['autumn', 'spring', 'winter'], a: 'spring', why: 'مارس وأبريل ومايو: spring.' },
                                        { q: 'The ___ in Abha is cool and rainy. It is like this every year.', choices: ['weather', 'season', 'climate'], a: 'climate', why: 'كل سنة كذا: climate. و weather لليوم.' },
                                    ],
                                },
                                {
                                    type: 'fix',
                                    label: 'الفصل بحرف كبير',
                                    kind: 'n',
                                    wrong: 'We go to Abha in Summer.',
                                    mark: 'Summer',
                                    options: ['We go to Abha in summer.', 'We go to abha in summer.', 'We go to Abha in SUMMER.'],
                                    answer: 'We go to Abha in summer.',
                                    parts: [['We'], ['go', 'v'], ['to Abha in'], ['summer', 'n', 'Season: small'], ['.', 'p']],
                                    why: 'الفصل بحرف صغير وسط الجملة. والمدينة (Abha) تبقى كبيرة.',
                                },
                            ],
                        },
                        {
                            label: 'Colours',
                            ar: 'الألوان',
                            kind: 's',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'نستخدم الألوان (colours) نوصف الجو والصور: السما، والغيم، والجبال. واللون صفة: قبل الاسم (a blue sky) أو بعد be (The sky is blue)، وما ينجمع.' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 's', title: 'blue', ar: 'أزرق', en: 'a blue sky' },
                                        { kind: 'n', title: 'grey', ar: 'رمادي', en: 'grey clouds' },
                                        { kind: 'adj', title: 'green', ar: 'أخضر', en: 'green mountains' },
                                        { kind: 'dep', title: 'yellow', ar: 'أصفر', en: 'yellow sand' },
                                        { kind: 'p', title: 'white', ar: 'أبيض', en: 'white snow' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['There are', 'v'], ['dark grey', 's', 'Colour'], ['clouds', 'n'], ['over Abha'], ['.', 'p']], mean: 'فيه غيوم رمادية غامقة فوق أبها.', ar: 'dark = غامق. والغيم الرمادي الغامق يجيب مطر.' },
                                { type: 'breakdown', parts: [['The mountains', 'n'], ['are', 'v'], ['green', 's', 'Colour'], ['in spring'], ['.', 'p']], mean: 'الجبال خضرا في الربيع.', ar: 'اللون بعد be.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'There are no clouds today. The sky is ___.', choices: ['grey', 'blue', 'dark'], a: 'blue', why: 'بدون غيم: السما زرقا. و grey و dark مع الغيم.' }] },
                                {
                                    type: 'fix',
                                    label: 'اللون انجمع',
                                    kind: 's',
                                    wrong: 'There are whites clouds in the sky.',
                                    mark: 'whites',
                                    options: ['There are clouds whites in the sky.', 'There are white cloud in the sky.', 'There are white clouds in the sky.'],
                                    answer: 'There are white clouds in the sky.',
                                    parts: [['There are', 'v'], ['white', 's', 'Colour'], ['clouds', 'n'], ['in the sky'], ['.', 'p']],
                                    why: 'اللون صفة، والصفة ما تنجمع. الاسم (clouds) هو اللي ياخذ s.',
                                },
                            ],
                        },
                    ],
                },

                { type: 'label', text: 'النشرة كاملة' },
                { type: 'breakdown', parts: [['Good evening. Here is the weather. In Tabuk, it is'], ['snowy', 'adj'], ['and'], ['cold', 'adj'], ['. Riyadh is'], ['sunny', 'adj'], ['and'], ['dry', 'adj'], ['. Jeddah is'], ['warm', 'adj'], ['and'], ['humid', 'adj'], [', and the temperature is'], ['about 28 °C', 'x'], ['. In Abha, there are'], ['grey', 's'], ['clouds', 'n'], ['and a lot of'], ['rain', 'n'], ['.', 'p']], mean: 'مساء الخير، هذي النشرة الجوية. في تبوك الجو ثلجي وبارد. الرياض مشمسة وجافة. جدة دافية ورطبة والحرارة حوالي 28 درجة. وفي أبها غيوم رمادية ومطر كثير.', ar: 'نشرة ليلة شتوية: كل كلمات الدرس فيها.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Noun or adjective?',
                    instructions: 'اختر الكلمة الصحيحة. بعد is صفة، وبعد the أو a lot of اسم.',
                    items: [
                        { q: 'The ___ is very strong in July.', choices: ['sun', 'sunny', 'sunned'], a: 'sun', why: 'بعد The اسم: sun.' },
                        { q: 'It is ___ and cold. The sky is grey.', choices: ['cloud', 'clouds', 'cloudy'], a: 'cloudy', why: 'بعد is صفة: cloudy.' },
                        { q: 'There is a strong ___ from the sea.', choices: ['windy', 'wind', 'winds'], a: 'wind', why: 'بعد a strong يجي اسم مفرد: wind.' },
                        { q: 'Tabuk is ___ in January.', choices: ['snow', 'snowed', 'snowy'], a: 'snowy', why: 'بعد is صفة: snowy.' },
                        { q: 'I like the ___. It makes the plants green.', choices: ['rain', 'rainy', 'rains'], a: 'rain', why: 'بعد the اسم: rain.' },
                        { q: 'Drive slowly. It is ___ this morning.', choices: ['fog', 'foggy', 'fogy'], a: 'foggy', why: 'بعد is صفة، والـ g تتضاعف: foggy.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Mixed practice',
                    instructions: 'اختر الجواب الصح.',
                    items: [
                        { q: 'The ___ in this area is warm and humid all year.', choices: ['climate', 'season', 'umbrella', 'rainfall'], a: 'climate', why: 'طول السنة: climate.' },
                        { q: 'The average ___ in Abha is high in August. It rains a lot.', choices: ['temperature', 'rainfall', 'wind', 'sun'], a: 'rainfall', why: 'كمية المطر: rainfall.' },
                        { q: 'It doesn’t rain a lot. The weather is very ___.', choices: ['rainy', 'stormy', 'dry', 'snowy'], a: 'dry', why: 'ما فيه مطر: dry.' },
                        { q: 'December, January and February are the ___ months.', choices: ['summer', 'spring', 'autumn', 'winter'], a: 'winter', why: 'ديسمبر ويناير وفبراير: winter.' },
                        { q: 'In spring, the mountains in Abha are ___.', choices: ['grey', 'green', 'yellow', 'white'], a: 'green', why: 'الربيع والمطر يخلون الجبال خضرا.' },
                        { q: 'Which word is a colour?', choices: ['dry', 'humid', 'cool', 'grey'], a: 'grey', why: 'grey لون (رمادي). والباقي صفات جو.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Read the temperature',
                    instructions: 'اختر طريقة القراءة الصحيحة.',
                    items: [
                        { q: '15 °C', choices: ['fifty degrees Celsius', 'fifteen degrees Celsius', 'one five degrees Celsius'], a: 'fifteen degrees Celsius', why: '15 = fifteen. و fifty = 50.' },
                        { q: '40 °C', choices: ['forty degrees Celsius', 'fourteen degrees Celsius', 'four degrees Celsius'], a: 'forty degrees Celsius', why: '40 = forty. و fourteen = 14.' },
                        { q: '32 °C', choices: ['twenty-three degrees Celsius', 'thirty-two degrees Celsius', 'three two degrees Celsius'], a: 'thirty-two degrees Celsius', why: '32 = thirty-two.' },
                        { q: '13 °C', choices: ['thirty degrees Celsius', 'three degrees Celsius', 'thirteen degrees Celsius'], a: 'thirteen degrees Celsius', why: '13 = thirteen. و thirty = 30.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.7 Skills: scanning، predicting from visuals، sentence stress (RW ص 42، LS ص 41 إلى 43 و53) ───────────────
// الجو: "قبل الرحلة إلى أبها": يشوف صورة الدليل ويتوقع (Predict)، يقرأ الدليل بسرعة (Scan)، يكلم صاحبه بنبرة صحيحة (Stress).
// خريطة Skills بثلاث فروع بترتيب الرحلة. التدريب: 3 تمارين اختيار، وكل سؤال Scan يحمل سطره من النص (يكفي نفسه).
const unit2Skills: Topic = {
    slug: 'scanning-visuals-sentence-stress',
    title: 'Scanning, using visuals and sentence stress',
    titleAr: 'مهارات: البحث السريع والصور ونبرة الجملة',
    keywords: ['scanning', 'scan', 'predicting', 'predict', 'visuals', 'photo', 'sentence stress', 'stress', 'pauses', 'reading skills', 'listening skills', 'مهارات', 'قراءة سريعة', 'توقع', 'نبرة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Scanning, using visuals and sentence stress',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'ثلاث مهارات لرحلة وحدة: قبل ما تقرأ أو تسمع توقّع من الصورة (predict)، وفي القراءة دوّر على المعلومة بسرعة (scan)، وفي الكلام اضغط على الكلمات المهمة (stress).',
                sections: [
                    {
                        label: 'Predict',
                        ar: 'التوقع من الصورة',
                        kind: 'n',
                        what: 'شوف الصورة ← وش الجو؟ وش الفصل؟ ← توقّع الكلمات.',
                        examples: [
                            { parts: [['Photo: green mountains and grey clouds', 'n', 'Photo'], ['→'], ['cool, rainy, cloudy', 'adj', 'Words I expect']], ar: 'مخك يجهز الكلمات قبل ما تسمعها.' },
                        ],
                        mistakes: [
                            { wrong: 'Photo: snow on mountains → hot, sunny', right: 'Photo: snow on mountains → cold, snowy', why: 'التوقع من الصورة نفسها.' },
                        ],
                    },
                    {
                        label: 'Scan',
                        ar: 'البحث السريع',
                        kind: 'adj',
                        what: 'اقرأ السؤال ← اعرف نوع الجواب (رقم؟ شهر؟ مكان؟) ← مرّر عيونك لين تلقاه.',
                        examples: [
                            { parts: [['What is the temperature in summer?', 's', 'Question'], ['a number + °C', 'adj', 'Look for'], ['about 25 °C', 'v', 'Answer']], ar: 'ما قريت كل كلمة: دوّرت على رقم بس.' },
                        ],
                        mistakes: [
                            { wrong: 'When is the best time? → I look for a number.', right: 'When is the best time? → I look for months.', why: 'When ← وقت: شهور.' },
                        ],
                    },
                    {
                        label: 'Stress',
                        ar: 'نبرة الجملة',
                        kind: 'x',
                        what: 'نضغط على الاسم والفعل والصفة والرقم، والكلمات الصغيرة (a، the، is، in) خفيفة.',
                        examples: [
                            { parts: [["It's"], ['COOL', 'x', 'Stress'], ['in'], ['ABHA', 'x', 'Stress'], ['in'], ['JULY', 'x', 'Stress'], ['.', 'p']], ar: 'الصفة والأسماء مضغوطة، و in خفيفة.' },
                        ],
                        mistakes: [
                            { wrong: 'There ARE some clouds IN the sky.', right: 'There are some CLOUDS in the SKY.', why: 'الأسماء هي المهمة.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'السؤال: "What is the temperature in July?" وش تدور عليه في النص؟',
                choices: ['كل كلمة من البداية', 'رقم معه °C وكلمة July', 'العنوان بس'],
                answer: 1,
                why: 'هذا اسمه scanning: تدور على معلومة محددة بسرعة.',
            },
            blocks: [
                { type: 'text', text: 'رحلة إلى أبها: قبل ما تروح تشوف صورة، وتقرأ دليل، وتكلم صاحبك. وكل خطوة مهارة.' },

                // ── Skills: ثلاث فروع بترتيب الرحلة ──
                {
                    type: 'hub',
                    word: 'Skills',
                    ar: 'مهارات',
                    branches: [
                        {
                            label: 'Predict',
                            ar: 'التوقع',
                            kind: 'n',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'قبل ما تقرأ أو تسمع، شوف الصورة واسأل نفسك: وش الجو؟ وش الفصل؟ وش الكلمات اللي بتجي؟ كذا مخك يجهز، وتفهم أسرع.' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'n', title: 'شوف الصورة', en: 'green mountains, grey clouds' },
                                        { kind: 'adj', title: 'اسأل: وش الجو؟ وش الفصل؟', en: 'cool? rainy? summer?' },
                                        { kind: 'v', title: 'توقّع الكلمات', en: 'cool, rainy, cloudy, green' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Photo: green mountains and grey clouds', 'n', 'Photo'], ['→'], ['cool, rainy, cloudy', 'adj', 'Words I expect']], mean: 'صورة جبال خضرا وغيم رمادي: أتوقع جو بارد وماطر وغائم.', ar: 'صورة دليل أبها.' },
                                { type: 'breakdown', parts: [['Photo: snow on a mountain road', 'n', 'Photo'], ['→'], ['cold, snowy, winter', 'adj', 'Words I expect']], mean: 'صورة ثلج على طريق جبلي: أتوقع برد وثلج وشتا.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'A photo of a grey sky and wet streets. Which words do you expect to hear?', choices: ['hot, sunny, beach', 'rain, cloudy, wet', 'dry, sand, desert'], a: 'rain, cloudy, wet', why: 'السما رمادية والشوارع مبلولة: مطر وغيم.' }] },
                            ],
                        },
                        {
                            label: 'Scan',
                            ar: 'البحث السريع',
                            kind: 'adj',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'scanning يعني تدوّر على معلومة وحدة بسرعة، بدون ما تقرأ كل كلمة. ثلاث خطوات:' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 's', title: 'اقرأ السؤال', en: 'What is the temperature in summer?' },
                                        { kind: 'adj', title: 'وش نوع الجواب؟', ar: 'رقم؟ شهر؟ مكان؟', en: 'a number + °C' },
                                        { kind: 'v', title: 'مرّر عيونك لين تلقاه', en: 'about 25 °C' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'example', en: 'VISIT ABHA\nAbha is a city in the Asir mountains, in the south of Saudi Arabia.\nSummer: June to August. The temperature is about 25 °C, and it rains a lot in July and August.\nWinter: December to February. It is cold, and the temperature at night is about 8 °C.\nBest time to visit: June to September.', mean: 'زور أبها. أبها مدينة في جبال عسير في جنوب السعودية. الصيف: من يونيو إلى أغسطس، الحرارة حوالي 25 درجة وينزل مطر كثير في يوليو وأغسطس. الشتا: من ديسمبر إلى فبراير، بارد وحرارة الليل حوالي 8 درجات. أحسن وقت للزيارة: من يونيو إلى سبتمبر.', ar: 'دليل أبها. الأسئلة تحت تدوّر فيه.' },
                                { type: 'breakdown', parts: [['What is the temperature in summer?', 's', 'Question'], ['a number + °C', 'adj', 'Look for'], ['about 25 °C', 'v', 'Answer']], mean: 'وش حرارة الصيف؟ أدور على رقم: حوالي 25 درجة.' },
                                { type: 'breakdown', parts: [['When does it rain a lot?', 's', 'Question'], ['months', 'adj', 'Look for'], ['in July and August', 'v', 'Answer']], mean: 'متى ينزل مطر كثير؟ أدور على شهور: في يوليو وأغسطس.' },
                                { type: 'label', text: 'سؤال' },
                                {
                                    type: 'check',
                                    items: [
                                        { q: 'The question is: "When is the best time to visit?" What do you look for?', choices: ['a number + °C', 'a place', 'months'], a: 'months', why: 'When؟ ← وقت: شهور.' },
                                        { q: '"Winter: December to February. It is cold, and the temperature at night is about 8 °C." What is the temperature at night in winter?', choices: ['about 25 °C', 'about 8 °C', 'December'], a: 'about 8 °C', why: 'دوّرت على رقم + °C في سطر Winter.' },
                                    ],
                                },
                                { type: 'anchor', lines: ['اقرأ السؤال أول، وحدد نوع الجواب', 'سؤال عن الوقت: دوّر على شهور'] },
                            ],
                        },
                        {
                            label: 'Stress',
                            ar: 'نبرة الجملة',
                            kind: 'x',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'في الكلام نضغط على الكلمات المهمة: الاسم، والفعل، والصفة، والرقم. والكلمات الصغيرة (a، the، is، in، and) تنقال بسرعة وخفيفة. ونوقف شوي (pause) بين الأفكار.' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'x', title: 'نضغط: الكلمات المهمة', en: 'HOT · JULY · CLOUDS · TWENTY-FIVE' },
                                        { kind: 'p', title: 'خفيف: الكلمات الصغيرة', en: 'a · the · is · in · and' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['My'], ['FAVOURITE', 'x', 'Stress'], ['SEASON', 'x', 'Stress'], ['is'], ['SUMMER', 'x', 'Stress'], ['.', 'p']], mean: 'فصلي المفضل الصيف.' },
                                { type: 'breakdown', parts: [["It's"], ['COOL', 'x', 'Stress'], ['in'], ['ABHA', 'x', 'Stress'], ['in'], ['JULY', 'x', 'Stress'], ['.', 'p']], mean: 'الجو لطيف في أبها في يوليو.', ar: 'in تنقال خفيفة مرتين.' },
                                { type: 'breakdown', parts: [['The'], ['TEMPERATURE', 'x', 'Stress'], ['is about'], ['TWENTY-FIVE', 'x', 'Stress'], ['DEGREES', 'x', 'Stress'], ['.', 'p']], mean: 'الحرارة حوالي 25 درجة.', ar: 'الرقم دايمًا مضغوط.' },
                                { type: 'breakdown', parts: [['Hello, everybody.'], ['//', 'p', 'Pause'], ["I'm going to talk about"], ['ABHA', 'x', 'Stress'], ['.', 'p']], mean: 'مرحبًا يا جماعة. بتكلم عن أبها.', ar: 'وقفة قصيرة (pause) بين التحية والموضوع.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence has the correct stress?', choices: ['IT is a HOT day.', "It's a HOT DAY.", "IT'S A hot day."], a: "It's a HOT DAY.", why: 'الصفة والاسم مهمين (HOT DAY)، و It’s و a خفيفة.' }] },
                                {
                                    type: 'fix',
                                    label: 'الضغط على كلمة صغيرة',
                                    kind: 'x',
                                    wrong: 'There ARE some clouds IN the sky.',
                                    mark: 'ARE',
                                    options: ['There are some CLOUDS in the SKY.', 'THERE are SOME clouds in THE sky.', 'There ARE some CLOUDS IN the sky.'],
                                    answer: 'There are some CLOUDS in the SKY.',
                                    parts: [['There are some'], ['CLOUDS', 'x', 'Stress'], ['in the'], ['SKY', 'x', 'Stress'], ['.', 'p']],
                                    why: 'الأسماء (CLOUDS و SKY) هي المهمة، و are و in كلمات صغيرة خفيفة.',
                                },
                                { type: 'anchor', lines: ['نضغط: الاسم والفعل والصفة والرقم', 'خفيف: a · the · is · in · and'] },
                            ],
                        },
                    ],
                },


                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Scan the text',
                    instructions: 'كل سؤال فيه سطر من دليل جدة. دوّر على الجواب بسرعة.',
                    items: [
                        { q: '"Jeddah is on the Red Sea. It has two seasons: summer and winter." How many seasons does Jeddah have?', choices: ['four', 'two', 'one'], a: 'two', why: 'دوّرت على رقم: two seasons.' },
                        { q: '"Summer in Jeddah is from May to October. It is hot and humid." When is summer?', choices: ['from May to October', 'hot and humid', 'in January'], a: 'from May to October', why: 'When؟ ← شهور: from May to October.' },
                        { q: '"In January, the temperature in Jeddah is between 18 °C and 28 °C." What is the temperature in January?', choices: ['about 38 °C', 'in January', 'between 18 °C and 28 °C'], a: 'between 18 °C and 28 °C', why: 'دوّرت على رقم + °C.' },
                        { q: '"It rains a little in November, and the sky is often grey." When does it rain?', choices: ['in July', 'in November', 'often'], a: 'in November', why: 'When؟ ← شهر: November.' },
                        { q: '"Tabuk is in the north of Saudi Arabia, near Jordan." Where is Tabuk?', choices: ['in the north', 'in Jordan', 'near the sea'], a: 'in the north', why: 'Where؟ ← مكان: in the north. و near Jordan يعني قريبة منها، مو فيها.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Which words are stressed?',
                    instructions: 'اختر الجملة اللي النبرة فيها صحيحة: الكلمات الكبيرة هي المضغوطة.',
                    items: [
                        { q: 'About the rain:', choices: ['I LOVE the RAIN.', 'I love THE rain.', 'I LOVE THE rain.'], a: 'I LOVE the RAIN.', why: 'love فعل و rain اسم: مهمين. و the خفيفة.' },
                        { q: 'About the sky:', choices: ['There ARE some CLOUDS.', 'There are some WHITE CLOUDS.', 'THERE are SOME white clouds.'], a: 'There are some WHITE CLOUDS.', why: 'الصفة والاسم (WHITE CLOUDS) مهمين.' },
                        { q: 'About Abha:', choices: ['ABHA is in the SOUTH.', 'Abha IS in THE south.', 'Abha is IN the south.'], a: 'ABHA is in the SOUTH.', why: 'ABHA و SOUTH أسماء مهمة، و is و in و the خفيفة.' },
                        { q: 'About the temperature:', choices: ['It IS about thirty DEGREES.', 'It is ABOUT thirty degrees.', "It's about THIRTY DEGREES."], a: "It's about THIRTY DEGREES.", why: 'الرقم والاسم: THIRTY DEGREES.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Predict from the photo',
                    instructions: 'من وصف الصورة، وش الكلمات اللي بتسمعها؟',
                    items: [
                        { q: 'A photo of a desert at midday.', choices: ['rain, snow, cold', 'hot, dry, sand', 'green, rainy, cool'], a: 'hot, dry, sand', why: 'صحراء والظهر: حر وجفاف ورمل.' },
                        { q: 'A photo of trees with orange and red leaves.', choices: ['autumn, leaves, colours', 'beach, swimming, sun', 'snow, ice, winter'], a: 'autumn, leaves, colours', why: 'الورق البرتقالي والأحمر: الخريف.' },
                        { q: 'A photo of people with umbrellas under a grey sky.', choices: ['sunny, dry, hot', 'rain, cloudy, wet', 'sand, desert, camel'], a: 'rain, cloudy, wet', why: 'مظلات وسما رمادية: مطر.' },
                        { q: 'A photo of children swimming in the sea.', choices: ['snowy, cold, coat', 'foggy, dark, night', 'summer, hot, beach'], a: 'summer, hot, beach', why: 'سباحة في البحر: صيف وحر.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 2: weather in your city + describe photos (RW ص 55 و56، LS ص 55) ───────────────
// نفس قالب مهمة الوحدة 1: خريطة My city ← Writing / Speaking. الكتابة 4 أجزاء تمشي بالترتيب داخل الفرع (بطاقة map فوق)، والتحدث وصف صورة (مشهد map بدون إيموجي).
// كل جزء شرح ← مثال ← سؤال. التدريب: 3 تمارين اختيار.
const WEATHER_CARD: string[][] = [
    ['~THE WEATHER IN MY CITY'],
    ['1 My city: where, how many seasons', '2 One season: when, weather, temperature'],
    ['3 Another season: In …,', '4 The best season: because …'],
];

const ALULA_PHOTO: string[][] = [
    ['Rock', '', 'Rock', 'Rock'],
    ['Palm tree', 'Tent', '', 'Palm tree'],
    ['~DESERT ROAD'],
];

const unit2Task: Topic = {
    slug: 'weather-in-your-city',
    title: 'Writing task: the weather in your city',
    titleAr: 'مهمة الوحدة: الطقس في مدينتك',
    keywords: ['writing task', 'weather in my city', 'describe a place', 'describe photos', 'describe a photo', 'paragraph', 'بارقراف', 'كتابة', 'وصف مكان', 'وصف صورة', 'تكليف', 'assignment', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: the weather in your city',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'بارقراف من 5 إلى 7 جمل عن الطقس في مدينتك، في 4 أجزاء: المكان وكم فصل، ثم فصل (متى، وجوه، وحرارته)، ثم فصل ثاني يبدأ بـ In، ثم أحلى فصل وليش. وفي التحدث: توصف صورة مكان بأربع خطوات.',
                sections: [
                    {
                        label: 'Writing',
                        ar: 'البارقراف',
                        kind: 's',
                        what: '4 أجزاء، وكل جزء جملة أو جملتين.',
                        formula: [['1 Place', 'n', 'where, seasons'], ['2 Season', 's', 'when, weather'], ['3 In …,', 'x', 'another season'], ['4 Best season', 'adj', 'because']],
                        examples: [
                            { parts: [['I live in Abha.'], ['There are', 'v'], ['four seasons', 'n'], ['.', 'p']], ar: 'الجزء 1: المكان وكم فصل.' },
                            { parts: [['Summer', 's'], ['is', 'v'], ['from June to August', 'x', 'When?'], ['. It is'], ['cool and rainy', 'adj'], ['.', 'p']], ar: 'الجزء 2: متى، وكيف الجو.' },
                            { parts: [['In winter', 'x'], [',', 'p', 'Comma'], ['it is cold. It is'], ['between 8 °C and 15 °C', 'x', 'Range'], ['.', 'p']], ar: 'الجزء 3: In + فصل، وفاصلة.' },
                            { parts: [['Spring is the best season'], ['because', 'co'], ['the mountains are green.']], ar: 'الجزء 4: رأيك وليش.' },
                        ],
                        mistakes: [
                            { wrong: 'There is four seasons.', right: 'There are four seasons.', why: 'seasons جمع.' },
                            { wrong: 'In winter it is cold.', right: 'In winter, it is cold.', why: 'فاصلة بعد In winter.' },
                            { wrong: 'It is hot in july.', right: 'It is hot in July.', why: 'الشهر بحرف كبير.' },
                        ],
                    },
                    {
                        label: 'Speaking',
                        ar: 'وصف صورة',
                        kind: 'v',
                        what: 'تقديم، ثم الفصل، ثم وش في الصورة، ثم الجو.',
                        examples: [
                            { parts: [['Here’s my photo.', 'x', 'Introduction'], ['It’s in'], ['winter', 'n', 'Season'], ['. There are', 'v'], ['some big rocks', 'n'], ['.', 'p']], ar: 'There are للجمع، و There’s للمفرد.' },
                        ],
                        mistakes: [
                            { wrong: 'There is some palm trees.', right: 'There are some palm trees.', why: 'palm trees جمع.' },
                        ],
                    },
                ],
                examples: [],
                mistakes: [],
            },
            warmup: {
                q: 'أي جملة أفضل بداية لبارقراف عن الطقس في مدينتك؟',
                choices: ['It is 25 °C.', 'I live in Abha in Saudi Arabia.', 'And it rains.'],
                answer: 1,
                why: 'ابدأ بالمكان: وين تعيش. وبعدها الفصول والجو.',
            },
            blocks: [
                { type: 'text', text: 'آخر الوحدة: تكتب بارقراف عن الطقس في مدينتك، أو توصف صورة مكان. وكل اللي تحتاجه من دروس الوحدة.' },

                // ── My city: كتابة وتحدث. الكتابة أجزاء متسلسلة داخل الفرع ──
                {
                    type: 'hub',
                    word: 'My city',
                    ar: 'الطقس في مدينتك',
                    branches: [
                        {
                            label: 'Writing',
                            ar: 'البارقراف',
                            kind: 's',
                            blocks: [
                                { type: 'map', rows: WEATHER_CARD, caption: 'بارقرافك: 4 أجزاء، وكل جزء جملة أو جملتين.' },

                                { type: 'heading', text: 'نموذج: الطقس في أبها' },
                                { type: 'example', en: 'I live in Abha in Saudi Arabia. There are four seasons in Abha. Summer is from June to August, and the weather is cool and rainy. The average temperature in summer is about 25 °C. In winter, it is cold and sometimes foggy. The temperature is between 8 °C and 15 °C. Spring is the best season because the mountains are green.', mean: 'أسكن في أبها في السعودية. فيه أربع فصول في أبها. الصيف من يونيو إلى أغسطس، والجو معتدل وماطر. متوسط الحرارة في الصيف حوالي 25 درجة. في الشتا الجو بارد وأحيانًا ضبابي. الحرارة بين 8 و15 درجة. الربيع أحلى فصل لأن الجبال خضرا.' },

                                // ── الجزء 1 ──
                                { type: 'heading', text: 'الجزء 1: المكان والفصول' },
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'وين تعيش، وكم فصل عندكم. والفصول جمع، فنقول There are.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['I', 's'], ['live', 'v'], ['in Abha in Saudi Arabia', 'x', 'Where?'], ['.', 'p']], mean: 'أسكن في أبها في السعودية.' },
                                { type: 'breakdown', parts: [['There are', 'v'], ['four seasons', 'n'], ['in Abha', 'x', 'Where?'], ['.', 'p']], mean: 'فيه أربع فصول في أبها.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['There is four seasons in Abha.', 'There are four seasons in Abha.', 'It has four seasons in Abha.'], a: 'There are four seasons in Abha.', why: 'seasons جمع: There are. و "فيه" ما تصير It has.' }] },

                                // ── الجزء 2 ──
                                { type: 'heading', text: 'الجزء 2: فصل، متى، وجوه، وحرارته' },
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'متى الفصل (from … to)، وكيف الجو (صفتين بينهم and)، وكم الحرارة (about).' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Summer', 's'], ['is', 'v'], ['from June to August', 'x', 'When?'], ['.', 'p']], mean: 'الصيف من يونيو إلى أغسطس.' },
                                { type: 'breakdown', parts: [['The weather', 's'], ['is', 'v'], ['cool', 'adj'], ['and'], ['rainy', 'adj'], ['.', 'p']], mean: 'الجو معتدل وماطر.' },
                                { type: 'breakdown', parts: [['The average temperature', 's', 'Noun phrase'], ['is', 'v'], ['about 25 °C', 'x', 'Not exact'], ['.', 'p']], mean: 'متوسط الحرارة حوالي 25 درجة.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Summer is ___ June to August.', choices: ['between', 'from', 'in'], a: 'from', why: 'from يجي معه to.' }] },
                                {
                                    type: 'fix',
                                    label: 'اسم بدل صفة',
                                    kind: 'adj',
                                    wrong: 'The weather is cool and rain.',
                                    mark: 'rain',
                                    options: ['The weather is cool and rainy.', 'The weather is cools and rainy.', 'The weather cool and rainy.'],
                                    answer: 'The weather is cool and rainy.',
                                    parts: [['The weather', 's'], ['is', 'v'], ['cool', 'adj'], ['and'], ['rainy', 'adj'], ['.', 'p']],
                                    why: 'بعد is صفتين: cool و rainy. و rain اسم.',
                                },

                                // ── الجزء 3 ──
                                { type: 'heading', text: 'الجزء 3: فصل ثاني يبدأ بـ In' },
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'ابدأ بـ In + الفصل، وحط فاصلة بعده. والحرارة بين رقمين: between … and.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['In winter', 'x', 'When?'], [',', 'p', 'Comma'], ['it', 's'], ['is', 'v'], ['cold', 'adj'], ['and sometimes'], ['foggy', 'adj'], ['.', 'p']], mean: 'في الشتا الجو بارد وأحيانًا ضبابي.' },
                                { type: 'breakdown', parts: [['The temperature', 's'], ['is', 'v'], ['between 8 °C and 15 °C', 'x', 'Range'], ['.', 'p']], mean: 'الحرارة بين 8 و15 درجة.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['In winter it is cold.', 'In winter, it is cold.', 'In Winter, it is cold.'], a: 'In winter, it is cold.', why: 'فاصلة بعد In winter، و winter بحرف صغير.' }] },
                                {
                                    type: 'fix',
                                    label: 'الفاصلة بعد In',
                                    kind: 'x',
                                    wrong: 'In winter the nights are very cold.',
                                    mark: 'In winter the',
                                    options: ['In winter the nights, are very cold.', 'In Winter, the nights are very cold.', 'In winter, the nights are very cold.'],
                                    answer: 'In winter, the nights are very cold.',
                                    parts: [['In winter', 'x', 'Start'], [',', 'p', 'Comma'], ['the nights', 's'], ['are', 'v'], ['very cold', 'adj'], ['.', 'p']],
                                    why: 'In winter في أول الجملة: بعدها فاصلة. والفصل بحرف صغير.',
                                },

                                // ── الجزء 4 ──
                                { type: 'heading', text: 'الجزء 4: الخاتمة' },
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'وش أحلى فصل عندكم، وليش. والسبب بعد because.' },
                                { type: 'label', text: 'مثال' },
                                { type: 'breakdown', parts: [['Spring', 's'], ['is', 'v'], ['the best season', 'n', 'Noun phrase'], ['because', 'co'], ['the mountains are green'], ['.', 'p']], mean: 'الربيع أحلى فصل لأن الجبال خضرا.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which sentence is a good ending?', choices: ['The temperature is 25 °C.', 'Spring is the best season because the mountains are green.', 'I live in Abha.'], a: 'Spring is the best season because the mountains are green.', why: 'الخاتمة رأيك: أحلى فصل وليش.' }] },

                                // ── اجمع ──
                                { type: 'heading', text: 'اجمع الأجزاء' },
                                { type: 'text', text: 'قبل ما ترسل، تأكد من الأربعة:' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'adj', title: 'الصفة قبل الاسم أو بعد be', en: 'a cool summer · The summer is cool.' },
                                        { kind: 'v', title: 'There is للمفرد، و There are للجمع', en: 'There are four seasons.' },
                                        { kind: 'x', title: 'فاصلة بعد In winter في أول الجملة', en: 'In winter, it is cold.' },
                                        { kind: 'dep', title: 'الشهور والمدن بحرف كبير، والفصول صغير', en: 'July · Abha · summer' },
                                    ],
                                },
                                { type: 'anchor', lines: ['الجزء الأول: I live in Abha', 'الجزء الثاني: Summer is from June to August', 'الجزء الثالث: In winter, it is cold', 'الجزء الرابع: Spring is the best season because it is green'] },
                            ],
                        },
                        {
                            label: 'Speaking',
                            ar: 'وصف صورة',
                            kind: 'v',
                            blocks: [
                                { type: 'label', text: 'الشرح' },
                                { type: 'text', text: 'وصّف صورة مكان تبي تزوره، بأربع خطوات. وانطقها بالنبرة: اضغط على الكلمات المهمة.' },
                                {
                                    type: 'steps',
                                    items: [
                                        { kind: 'x', title: 'التقديم', en: 'Here’s my photo.' },
                                        { kind: 'n', title: 'الفصل', en: 'It’s in winter.' },
                                        { kind: 'v', title: 'وش في الصورة', en: 'There are some big rocks.' },
                                        { kind: 'adj', title: 'الجو', en: 'It’s sunny and warm.' },
                                    ],
                                },
                                { type: 'label', text: 'مثال' },
                                { type: 'map', rows: ALULA_PHOTO, caption: 'صورة العلا في الشتاء.' },
                                { type: 'breakdown', parts: [['Here’s my photo.', 'x', 'Introduction'], ['It’s in'], ['WINTER', 'n', 'Season'], ['.', 'p']], mean: 'هذي صورتي. هي في الشتا.' },
                                { type: 'breakdown', parts: [['There are', 'v'], ['some big ROCKS', 'n'], ['and'], ['there’s', 'v'], ['a TENT', 'n'], ['.', 'p']], mean: 'فيه صخور كبيرة وفيه خيمة.', ar: 'There are للجمع، و there’s للمفرد.' },
                                { type: 'breakdown', parts: [['It’s', 'v'], ['SUNNY', 'adj'], ['and'], ['WARM', 'adj'], ['.', 'p']], mean: 'الجو مشمس ودافي.', ar: 'الكلمات الكبيرة هي المضغوطة.' },
                                { type: 'label', text: 'سؤال' },
                                { type: 'check', items: [{ q: 'Which is a good start for your talk?', choices: ['It is a photo is spring.', 'Here’s my photo. It’s in spring.', 'Photo here. Spring.'], a: 'Here’s my photo. It’s in spring.', why: 'التقديم، وبعده الفصل بجملة كاملة.' }] },
                                {
                                    type: 'fix',
                                    label: 'There is مع الجمع',
                                    kind: 'v',
                                    wrong: 'There is some palm trees in the photo.',
                                    mark: 'There is',
                                    options: ['There are some palm tree in the photo.', 'There are some palm trees in the photo.', 'There has some palm trees in the photo.'],
                                    answer: 'There are some palm trees in the photo.',
                                    parts: [['There are', 'v'], ['some palm trees', 'n', 'Plural'], ['in the photo'], ['.', 'p']],
                                    why: 'palm trees جمع: There are.',
                                },
                                { type: 'anchor', lines: ['ابدأ بـ: Here’s my photo', 'للجمع: There are · للمفرد: There’s'] },
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
                        { q: '___ winter, it is cold.', choices: ['On', 'In', 'At'], a: 'In', why: 'قبل الفصل: in.' },
                        { q: 'Summer is from June ___ August.', choices: ['and', 'between', 'to'], a: 'to', why: 'from يجي معه to.' },
                        { q: 'The temperature is between 20 °C ___ 30 °C.', choices: ['and', 'to', 'from'], a: 'and', why: 'between يجي معه and.' },
                        { q: 'There ___ four seasons in my city.', choices: ['is', 'are', 'has'], a: 'are', why: 'seasons جمع: are.' },
                        { q: 'It is very hot in ___.', choices: ['july', 'July', 'JULY'], a: 'July', why: 'الشهر أول حرفه كبير بس.' },
                        { q: 'Jeddah has ___ summers.', choices: ['humids', 'a humid', 'humid'], a: 'humid', why: 'الصفة ما تنجمع، والجمع بدون a.' },
                        { q: 'The weather ___ windy in spring.', choices: ['—', 'are', 'is'], a: 'is', why: 'weather مفرد، ولازم be قبل الصفة.' },
                        { q: 'Which sentence is correct?', choices: ['In summer it, is hot.', 'In summer, it is hot.', 'In Summer, it is hot.'], a: 'In summer, it is hot.', why: 'فاصلة بعد In summer، والفصل بحرف صغير.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Order the paragraph',
                    instructions: 'وش الجملة اللي تجي أول أو بعد؟ الجمل كلها داخل السؤال.',
                    items: [
                        { q: 'Which sentence comes FIRST in a paragraph about Taif?', choices: ['Winter is the best season because it is cool.', 'I live in Taif in Saudi Arabia.', 'The temperature is about 30 °C.'], a: 'I live in Taif in Saudi Arabia.', why: 'نبدأ بالمكان.' },
                        { q: 'Which sentence comes LAST?', choices: ['Spring is the best season because the gardens are beautiful.', 'There are four seasons in Taif.', 'Summer is from June to August.'], a: 'Spring is the best season because the gardens are beautiful.', why: 'الخاتمة: أحلى فصل وليش.' },
                        { q: '"Summer is from June to August." Which sentence comes NEXT?', choices: ['I live in Taif.', 'Spring is the best season.', 'The weather is warm and sunny.'], a: 'The weather is warm and sunny.', why: 'بعد متى الفصل: كيف جوه.' },
                        { q: '"I live in Dammam in Saudi Arabia." Which sentence comes NEXT?', choices: ['There are two seasons in Dammam.', 'In winter, it is cool.', 'Because it is hot.'], a: 'There are two seasons in Dammam.', why: 'بعد المكان: كم فصل.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Describe the photo',
                    instructions: 'وصف صورة: اختر الجملة الصحيحة.',
                    items: [
                        { q: 'Start your talk:', choices: ['Here’s my photo.', 'Here my photo is.', 'It photo here.'], a: 'Here’s my photo.', why: 'Here’s = Here is، وبعدها my photo.' },
                        { q: 'A photo with two camels:', choices: ['There is two camels.', 'There are two camels.', 'It has two camels.'], a: 'There are two camels.', why: 'two camels جمع: There are.' },
                        { q: 'A photo with one white cloud:', choices: ['There are a white cloud.', 'There is a cloud white.', 'There’s a white cloud.'], a: 'There’s a white cloud.', why: 'واحد: There’s. والصفة قبل الاسم.' },
                        { q: 'The weather in the photo:', choices: ['It’s sunny and hot.', 'It’s sun and hot.', 'It sunny and hot.'], a: 'It’s sunny and hot.', why: 'بعد It’s صفة: sunny.' },
                        { q: 'The season in the photo:', choices: ['It’s in Winter.', 'It’s in winter.', 'It in winter.'], a: 'It’s in winter.', why: 'الفصل بحرف صغير، ولازم It’s.' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT2_TOPICS: Topic[] = [adjectives, nounPhrases, prepositional, thereIs, wordOrder, weatherVocab, unit2Skills, unit2Task];
