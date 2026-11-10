// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 8: Transport
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 8 · Transport';
const base = ['تحضيري', 'ENG 001', 'Unit 8', 'Transport'];

// ─────────────── 8.1 Superlative adjectives (RW ص 180) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const superlatives: Topic = {
    slug: 'superlative-adjectives',
    title: 'Superlative adjectives',
    titleAr: 'صيغة التفضيل (the tallest)',
    keywords: ['superlative', 'superlatives', 'the most', 'the best', 'the worst', 'est', 'tallest', 'biggest', 'تفضيل', 'الأفضل', 'الأكبر', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Superlative adjectives',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'The metro is ___ way to travel in Riyadh.',
                choices: ['faster', 'the fastest', 'the most fast'],
                answer: 1,
                why: 'نقارن شي واحد مع كل المجموعة، فناخذ the + est.',
            },
            blocks: [
                { type: 'text', text: 'صيغة التفضيل (superlative) مثل "الأطول" و"الأسرع" و"الأفضل": تقول إن شي واحد هو الأكثر من بين مجموعة كاملة (ثلاثة أو أكثر). ودايم قبلها the.' },

                { type: 'heading', text: 'القاعدة 1: the + صفة قصيرة + est' },
                { type: 'text', view: 'both', text: 'للصفة القصيرة (مقطع واحد) نزيد est. وإذا آخرها علة + ساكن نضاعف (big ← biggest)، وإذا آخرها ساكن + y تصير iest (busy ← busiest).' },
                { type: 'formula', parts: [['the', 'x', 'the'], ['short adjective', 'adj'], ['+ est', 'x', 'ending']] },
                { type: 'breakdown', view: 'both', parts: [['The plane is'], ['the', 'x', 'the'], ['fast', 'adj'], ['est', 'x', '+ est'], ['way to travel'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Riyadh is'], ['the', 'x', 'the'], ['big', 'adj'], ['gest', 'x', 'g → gg + est'], ['city in Saudi Arabia'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Sunday is'], ['the', 'x', 'the'], ['bus', 'adj'], ['iest', 'x', 'y → iest'], ['day of the week'], ['.', 'p']] },
                { type: 'try', task: 'وش أسرع أو أرخص طريقة تروح فيها المعهد؟', placeholder: 'The bus is the cheapest way to get to the institute.' },

                { type: 'heading', text: 'القاعدة 2: the most + صفة طويلة' },
                { type: 'text', view: 'both', text: 'للصفة الطويلة (مقطعين أو أكثر) ما نزيد شي عليها، نحط قبلها the most.' },
                { type: 'formula', parts: [['the most', 'x', 'the most'], ['long adjective', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['The metro is'], ['the most', 'x', 'the most'], ['popular', 'adj'], ['transport in Tokyo'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A taxi is'], ['the most', 'x', 'the most'], ['expensive', 'adj'], ['way to travel'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Cycling is'], ['the most', 'x', 'the most'], ['healthy', 'adj'], ['form of transport'], ['.', 'p']], ar: 'ويصير بعد the healthiest.' },
                { type: 'try', task: 'وش أشهر مواصلة في مدينتك؟', placeholder: 'The car is the most popular transport in Yanbu.' },

                { type: 'heading', text: 'القاعدة 3: the best و the worst' },
                { type: 'text', view: 'both', text: 'good و bad شاذة: good → better → the best، و bad → worse → the worst.' },
                { type: 'breakdown', view: 'both', parts: [['The metro is'], ['the best', 'x', 'good →'], ['way to avoid traffic'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Rush hour is'], ['the worst', 'x', 'bad →'], ['time to drive'], ['.', 'p']] },
                { type: 'try', task: 'وش أسوأ وقت للزحمة في مدينتك؟', placeholder: 'The worst time is at 7 am.' },

                { type: 'note', text: 'غلط شائع: the most fastest ✗، و biggest بدون the ✗، و the goodest ✗.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Make the superlative',
                    instructions: 'اختر صيغة التفضيل.',
                    items: [
                        { q: 'slow', choices: ['the slowest', 'the most slow'], a: 'the slowest' },
                        { q: 'big', choices: ['the bigest', 'the biggest'], a: 'the biggest' },
                        { q: 'popular', choices: ['the popularest', 'the most popular'], a: 'the most popular' },
                        { q: 'bad', choices: ['the worst', 'the baddest'], a: 'the worst' },
                        { q: 'long', choices: ['the longest', 'the most long'], a: 'the longest' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Comparative or superlative?',
                    instructions: 'شيئين ولا مجموعة؟',
                    items: [
                        { q: 'The train is ___ than the bus.', choices: ['faster', 'the fastest'], a: 'faster' },
                        { q: 'The plane is ___ way to travel to Jeddah.', choices: ['faster', 'the fastest'], a: 'the fastest' },
                        { q: 'My journey is ___ in my family. It is two hours!', choices: ['longer', 'the longest'], a: 'the longest' },
                        { q: 'A taxi is ___ expensive than a bus.', choices: ['more', 'the most'], a: 'more' },
                        { q: 'Rush hour is ___ time to drive.', choices: ['the worst', 'the baddest'], a: 'the worst' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 8.2 Quantifiers (RW ص 181) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const quantifiers: Topic = {
    slug: 'quantifiers',
    title: 'Quantifiers',
    titleAr: 'كلمات الكمية: no و a few و many و most و all',
    keywords: ['quantifiers', 'quantifier', 'a few', 'many', 'most', 'all', 'some', 'no', 'a lot of', 'not many', 'كمية', 'كثير', 'قليل', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Quantifiers',
            warmup: {
                q: '90% من الطلاب يجون بالسيارة. نقول:',
                choices: ['A few students drive.', 'Most students drive.', 'No students drive.'],
                answer: 1,
                why: 'most = الأغلب.',
            },
            blocks: [
                { type: 'text', text: 'كلمات الكمية تقول كم واحد من المجموعة، وتجي قبل الاسم. تحتاجها لما توصف نتائج استبيان. هذي من الأكثر للأقل:' },

                { type: 'heading', text: 'الكلمة 1: All (100%)' },
                { type: 'text', view: 'both', text: 'All يعني "كل": ما فيه أحد برا.' },
                { type: 'breakdown', view: 'both', parts: [['All', 'x', '100%'], ['students', 'n'], ['have a phone'], ['.', 'p']] },
                { type: 'try', task: 'اكتب شي يسويه كل طلاب فصلك.', placeholder: 'All students speak Arabic.' },

                { type: 'heading', text: 'الكلمة 2: Most (فوق النص)' },
                { type: 'text', view: 'both', text: 'Most يعني "أغلب".' },
                { type: 'breakdown', view: 'both', parts: [['Most', 'x', '90%'], ['people', 'n'], ['take the underground to work'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Most', 'x', '70%'], ['students', 'n'], ['come by car'], ['.', 'p']] },
                { type: 'try', task: 'كيف يجي أغلب الطلاب للمعهد؟', placeholder: 'Most students come by car.' },

                { type: 'heading', text: 'الكلمة 3: Many و Some (نص أو أقل)' },
                { type: 'text', view: 'both', text: 'Many يعني "كثير"، و Some يعني "بعض".' },
                { type: 'breakdown', view: 'both', parts: [['Many', 'x', '50%'], ['people', 'n'], ['take the metro'], ['.', 'p']], ar: 'People many ✗' },
                { type: 'breakdown', parts: [['Some', 'x', '25%'], ['people', 'n'], ['cycle to work'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة بـ Some عن الطلاب.', placeholder: 'Some students take the bus.' },

                { type: 'heading', text: 'الكلمة 4: A few و Not many (قليل)' },
                { type: 'text', view: 'both', text: 'A few يعني "قليل"، و Not many يعني "مو كثير".' },
                { type: 'breakdown', view: 'both', parts: [['A few', 'x', '9%'], ['people', 'n'], ['take the bus'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Not many', 'x', '5%'], ['people', 'n'], ['walk to work'], ['.', 'p']], ar: 'Not people ✗' },
                { type: 'try', task: 'اكتب شي قليل من الطلاب يسوونه.', placeholder: 'A few students walk to the institute.' },

                { type: 'heading', text: 'الكلمة 5: No (0%)' },
                { type: 'text', view: 'both', text: 'No يعني "ولا أحد" أو "ولا شي".' },
                { type: 'breakdown', view: 'both', parts: [['No', 'x', '0%'], ['students', 'n'], ['drive to the university'], ['.', 'p']] },
                { type: 'try', task: 'اكتب شي ولا طالب يسويه.', placeholder: 'No students ride a motorbike.' },

                { type: 'note', text: 'غلط شائع: People many ✗، و Not people ✗، و a much of cars ✗ (الصح a lot of cars).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the quantifier',
                    instructions: 'النسبة تحدد الكلمة.',
                    items: [
                        { q: '(90%) ___ people take the underground to work.', choices: ['Most', 'A few', 'No'], a: 'Most' },
                        { q: '(25%) ___ people cycle to work.', choices: ['Some', 'All', 'No'], a: 'Some' },
                        { q: '(9%) ___ people take the bus to work.', choices: ['A few', 'Most', 'All'], a: 'A few' },
                        { q: '(0%) ___ students drive to the university.', choices: ['No', 'A few', 'Some'], a: 'No' },
                        { q: '(50%) ___ people take the metro.', choices: ['Many', 'No', 'All'], a: 'Many' },
                        { q: '(5%) ___ people walk to work.', choices: ['Not many', 'Most', 'All'], a: 'Not many' },
                        { q: '(70%) ___ students come by car.', choices: ['Most', 'A few', 'No'], a: 'Most' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Correct the mistake',
                    instructions: 'اكتب الجملة صحيحة.',
                    items: [
                        { q: 'People many take the metro.', a: 'Many people take the metro.' },
                        { q: 'Not people walk to work.', a: 'Not many people walk to work.' },
                        { q: 'There are a much of cars in Riyadh.', a: 'There are a lot of cars in Riyadh.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 8.3 Subject–verb–object (RW ص 184) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const svo: Topic = {
    slug: 'subject-verb-object',
    title: 'Subject–verb–object',
    titleAr: 'ترتيب الجملة: فاعل + فعل + مفعول',
    keywords: ['subject verb object', 'svo', 'object', 'direct object', 'word order', 'فاعل', 'فعل', 'مفعول', 'ترتيب الجملة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Subject–verb–object',
            warmup: {
                q: '"Many workers travel by train." هل فيها مفعول؟',
                choices: ['إيه: by train', 'لا، by train مو مفعول'],
                answer: 1,
                why: 'by train حرف جر + اسم. المفعول يجي بعد الفعل مباشرة بدون حرف جر.',
            },
            blocks: [
                { type: 'text', text: 'المفعول (object) هو الشي اللي يقع عليه الفعل: تسأل بعد الفعل "وش؟" والجواب هو المفعول. في جمل المواصلات لازم تفرق بينه وبين حرف الجر واسمه (by car، to work)، لأنها شكلها قريب.' },

                { type: 'heading', text: 'النمط 1: Subject + Verb + Object' },
                { type: 'text', view: 'both', text: 'الفعل يقع على شي: take وش؟ drive وش؟' },
                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['Object', 'n', 'What?']] },
                { type: 'breakdown', view: 'both', parts: [['Many people in Hong Kong', 's'], ['take', 'v'], ['a water taxi', 'n', 'Object'], ['to work'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My sister', 's'], ['drives', 'v'], ['her car', 'n', 'Object'], ['to the hospital'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Students', 's'], ['ride', 'v'], ['bikes', 'n', 'Object'], ['in Amsterdam'], ['.', 'p']] },
                { type: 'try', task: 'كيف تروح المعهد؟ اكتبها بفعل ومفعول.', placeholder: 'I take the bus to the institute.' },

                { type: 'heading', text: 'النمط 2: Subject + Verb + Prepositional phrase' },
                { type: 'text', view: 'both', text: 'travel و go ما ياخذون مفعول. اللي بعدهم by أو to = مكان أو طريقة، مو مفعول.' },
                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['Prepositional phrase', 'x', 'How? / Where?']] },
                { type: 'breakdown', view: 'both', parts: [['Many people', 's'], ['travel', 'v'], ['by car', 'x', 'How? (not object)'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Most people in Moscow', 's'], ['travel', 'v'], ['by metro', 'x', 'How? (not object)'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My father', 's'], ['goes', 'v'], ['to work', 'x', 'Where? (not object)'], ['early'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة بـ travel by.', placeholder: 'My family travels by plane to Riyadh.' },

                { type: 'note', text: 'غلط شائع: I travel the bus ✗ (الصح I take the bus أو I travel by bus).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Is it the object?',
                    instructions: 'الكلمات اللي تحتها خط مفعول ولا لا؟',
                    choices: ['Object', 'Not object'],
                    items: [
                        { q: 'Many people travel **by car**.', a: 'Not object' },
                        { q: 'Many people in Hong Kong take **a water taxi** to work.', a: 'Object' },
                        { q: 'Most people in Moscow travel **by metro**.', a: 'Not object' },
                        { q: 'My sister drives **her car** to the hospital.', a: 'Object' },
                        { q: 'Students ride **bikes** in Amsterdam.', a: 'Object' },
                        { q: 'My father goes **to work** early.', a: 'Not object' },
                        { q: 'I take **the metro** every day.', a: 'Object' },
                        { q: 'We travel **by plane** to Riyadh.', a: 'Not object' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Complete with an object',
                    instructions: 'كمّل الجملة بمفعول.',
                    items: [
                        { q: 'There’s a river in my city, so I take ___ to work.', a: 'There’s a river in my city, so I take a boat to work.' },
                        { q: 'The cheapest way to travel is to take ___.', a: 'The cheapest way to travel is to take the bus.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 8.4 Linking sentences with pronouns (RW ص 185) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const linkingPronouns: Topic = {
    slug: 'linking-sentences-with-pronouns',
    title: 'Linking sentences with pronouns',
    titleAr: 'ربط الجمل بالضمائر',
    keywords: ['linking sentences', 'pronouns', 'he she it they', 'avoid repetition', 'ربط', 'ضمائر', 'تكرار', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Linking sentences with pronouns',
            warmup: {
                q: '"The buses are cheap. ___ are also comfortable."',
                choices: ['It', 'They', 'He'],
                answer: 1,
                why: 'buses جمع، فالضمير They.',
            },
            blocks: [
                { type: 'text', text: 'لا تكرر نفس الاسم في الجملة الثانية؛ حط ضمير بداله. الاسم والضمير بنفس اللون.' },

                { type: 'heading', text: 'الضمير 1: he و she بدل شخص' },
                { type: 'formula', parts: [['Name', 'n'], ['…'], ['He / She', 'n', '= the name']] },
                { type: 'breakdown', view: 'both', parts: [['Mahmoud', 'n', 'Noun'], ['drives a car to university.'], ['He', 'n', '= Mahmoud'], ['does not like public transport'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Maria', 'n', 'Noun'], ['takes the bus.'], ['She', 'n', '= Maria'], ['thinks it is cheap'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن شخص، والثانية تبدأ بـ He أو She.', placeholder: 'My brother rides a bike. He likes it.' },

                { type: 'heading', text: 'الضمير 2: it بدل شي واحد أو نشاط' },
                { type: 'text', view: 'both', text: 'it ترجع على شي واحد، أو على نشاط مثل riding a bike.' },
                { type: 'breakdown', view: 'both', parts: [['The SkyTrain', 'n', 'Noun'], ['is popular in Bangkok.'], ['It', 'n', '= the SkyTrain'], ['is cheaper than a tuk-tuk'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Riding a bike', 'n', 'Activity'], ['is healthy.'], ['It', 'n', '= riding a bike'], ['is also cheap'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن مواصلة، والثانية فيها It.', placeholder: 'The metro is fast. It is also clean.' },

                { type: 'heading', text: 'الضمير 3: they بدل جمع' },
                { type: 'breakdown', view: 'both', parts: [['Many students in Mexico', 'n', 'Noun'], ['do not take the bus.'], ['They', 'n', '= many students'], ['drive their cars'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Some people', 'n', 'Noun'], ['ride on special roads for bikes.'], ['They', 'n', '= some people'], ['feel safe there'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن مجموعة ناس، والثانية تبدأ بـ They.', placeholder: 'My cousins live in Riyadh. They take the metro.' },

                { type: 'note', text: 'غلط شائع: تكرر الاسم (Mahmoud … Mahmoud …)، أو It بدل They للجمع.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Replace the noun',
                    instructions: 'اختر الضمير المناسب للكلمات اللي تحتها خط.',
                    items: [
                        { q: 'Mahmoud drives a car to university. **Mahmoud** does not like public transport.', choices: ['He', 'It', 'They'], a: 'He' },
                        { q: 'Many workers ride a bike in London. **Riding a bike** is a healthy form of transport.', choices: ['It', 'They', 'He'], a: 'It' },
                        { q: 'People in Bangkok prefer the SkyTrain. **The SkyTrain** is cheaper than a tuk-tuk.', choices: ['It', 'They', 'She'], a: 'It' },
                        { q: 'Some people ride on special roads for bikes. **Some people** feel safe there.', choices: ['They', 'It'], a: 'They' },
                        { q: 'Maria takes the bus. **Maria** thinks it is cheap.', choices: ['She', 'He', 'It'], a: 'She' },
                        { q: 'The metro in Riyadh is new. **The metro** is very clean.', choices: ['It', 'They', 'He'], a: 'It' },
                        { q: 'My cousins live in Dubai. **My cousins** take the metro.', choices: ['They', 'It', 'He'], a: 'They' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Rewrite the text',
                    instructions: 'غيّر الأسماء المكررة لضمائر.',
                    items: [{ q: 'Many students in Mexico do not take the bus. Many students drive their cars. Maria takes the bus. Taking the bus is cheaper than driving.', a: 'Many students in Mexico do not take the bus. They drive their cars. Maria takes the bus. It is cheaper than driving.' }],
                },
            ],
        },
    ],
};

// ─────────────── 8.5 The past simple (2): more irregular verbs (LS الوحدة 8) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const pastSimple2: Topic = {
    slug: 'past-simple-2',
    title: 'The past simple (2): more irregular verbs',
    titleAr: 'الماضي البسيط (2): أفعال شاذة أكثر',
    keywords: ['past simple', 'irregular verbs', 'took', 'drove', 'rode', 'got', 'ماضي', 'أفعال شاذة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'The past simple (2): more irregular verbs',
            warmup: {
                q: 'وش ماضي take؟',
                choices: ['taked', 'took', 'takes'],
                answer: 1,
                why: 'take فعل شاذ، ماضيه took مو taked.',
            },
            blocks: [
                { type: 'text', text: 'الماضي البسيط لشي صار وخلص. الفعل المنتظم ياخذ ed (worked)، والشاذ يتغير شكله ونحفظه. هالدرس عن الأفعال الشاذة، ونحفظها مجموعات حسب شكل التغيير.' },
                { type: 'formula', parts: [['Positive: past form', 'v'], ['|'], ["Negative: didn't + base", 'hv'], ['|'], ['Question: Did + base', 'hv']] },

                { type: 'heading', text: 'المجموعة 1: الحرف الأوسط يتغير' },
                { type: 'breakdown', view: 'both', parts: [['drive', 'v'], ['→'], ['drove', 'x', 'i → o']], ar: 'Last summer, we drove to Abha.' },
                { type: 'breakdown', parts: [['ride', 'v'], ['→'], ['rode', 'x', 'i → o']], ar: 'He rode a camel in AlUla.' },
                { type: 'breakdown', parts: [['get', 'v'], ['→'], ['got', 'x', 'e → o']], ar: 'ومثلها: run → ran، sit → sat.' },
                { type: 'try', task: 'اكتب جملة عن رحلة بـ drove أو rode.', placeholder: 'We drove to Taif last weekend.' },

                { type: 'heading', text: 'المجموعة 2: آخرها يصير t' },
                { type: 'breakdown', view: 'both', parts: [['spend', 'v'], ['→'], ['spent', 'x', 'd → t']], ar: 'We spent five days there.' },
                { type: 'breakdown', parts: [['build', 'v'], ['→'], ['built', 'x', 'd → t']], ar: 'The city built a new metro in 2024.' },
                { type: 'breakdown', parts: [['leave', 'v'], ['→'], ['left', 'x', '→ t']], ar: 'ومثلها: mean → meant.' },
                { type: 'try', task: 'كم يوم قضيت في آخر سفرة؟ استخدم spent.', placeholder: 'I spent a week in Jeddah.' },

                { type: 'heading', text: 'المجموعة 3: تتغير كلها' },
                { type: 'breakdown', view: 'both', parts: [['take', 'v'], ['→'], ['took', 'x', 'Past']], ar: 'I took the bus yesterday.' },
                { type: 'breakdown', parts: [['think', 'v'], ['→'], ['thought', 'x', 'Past']], ar: 'ومثلها: find → found، fly → flew، can → could.' },
                { type: 'try', task: 'اكتب جملة بـ took وجملة بـ flew.', placeholder: 'I took a taxi. My uncle flew to Riyadh.' },

                { type: 'heading', text: 'المجموعة 4: ما تتغير' },
                { type: 'breakdown', view: 'both', parts: [['put', 'v'], ['→'], ['put', 'x', 'Same']], ar: 'ومثلها cut → cut.' },

                { type: 'heading', text: 'النفي والسؤال: الفعل يرجع لأصله' },
                { type: 'breakdown', view: 'both', parts: [['She', 's'], ["didn't", 'hv'], ['drive', 'v', 'Base'], ['to work.'], ['She took the metro', 'v'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Did', 'hv'], ['you', 's'], ['ride', 'v', 'Base'], ['the train'], ['?', 'p']], ar: "Yes, I did. وما نقول Did you rode ✗." },
                { type: 'try', task: 'اكتب سؤال عن الويكند بـ Did، وجاوبه بجملة منفية.', placeholder: "Did you drive to the beach? No, I didn't. I took a taxi." },

                { type: 'note', text: "غلط شائع: drived ✗، و spended ✗، و didn't drove ✗، و Did you rode ✗." },


                {
                    type: 'exercise',
                    title: 'Exercise A: Past form',
                    instructions: 'اختر الماضي.',
                    items: [
                        { q: 'drive', choices: ['drived', 'drove'], a: 'drove' },
                        { q: 'build', choices: ['built', 'builded'], a: 'built' },
                        { q: 'get', choices: ['getted', 'got'], a: 'got' },
                        { q: 'find', choices: ['found', 'finded'], a: 'found' },
                        { q: 'leave', choices: ['leaved', 'left'], a: 'left' },
                        { q: 'think', choices: ['thinked', 'thought'], a: 'thought' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل أسئلة الميد.',
                    items: [
                        { q: 'Which question is correct?', choices: ['Did you rode the train?', 'Did you ride the train?', 'Do you rode the train?'], a: 'Did you ride the train?' },
                        { q: 'She ___ to work yesterday. She took the bus.', choices: ["didn't drive", "didn't drove", "doesn't drove"], a: "didn't drive" },
                        { q: 'Ali ___ home late last night.', choices: ['get', 'got', 'getted'], a: 'got' },
                        { q: 'We ___ five days in Abha last summer.', choices: ['spent', 'spended', 'spend'], a: 'spent' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 8.6 Because and so (RW ص 186، LS الوحدة 8) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const becauseSo: Topic = {
    slug: 'because-and-so',
    title: 'Because and so: reasons and results',
    titleAr: 'because و so: السبب والنتيجة',
    keywords: ['because', 'so', 'because of', 'reason', 'result', 'السبب', 'النتيجة', 'لأن', 'عشان كذا', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Because and so: reasons and results',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'The bus was late, ___ I took a taxi.',
                choices: ['because', 'so'],
                answer: 1,
                why: 'اللي بعدها نتيجة، فنستخدم so. وهذا مطلوب في تكليف 2.',
            },
            blocks: [
                { type: 'text', text: 'كل موقف فيه سبب ونتيجة. الباص تأخر (سبب)، فأخذت تاكسي (نتيجة). السبب بالأخضر، والنتيجة بالبنفسجي.' },

                { type: 'heading', text: 'الشكل 1: النتيجة + because + السبب' },
                { type: 'text', view: 'both', text: 'because يعني "لأن": تجي قبل السبب، وبدون فاصلة.' },
                { type: 'formula', parts: [['Result', 'n'], ['because', 'co'], ['Reason', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['I took a taxi', 'n', 'Result'], ['because', 'co'], ['the bus was late', 'v', 'Reason'], ['.', 'p']] },
                { type: 'breakdown', parts: [['People like the metro', 'n', 'Result'], ['because', 'co'], ['it is fast', 'v', 'Reason'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Most people drive', 'n', 'Result'], ['because', 'co'], ['the summer is very hot', 'v', 'Reason'], ['.', 'p']] },
                { type: 'try', task: 'ليش تروح المعهد بطريقتك؟ استخدم because.', placeholder: 'I take the bus because it is cheap.' },

                { type: 'heading', text: 'الشكل 2: السبب , so + النتيجة' },
                { type: 'text', view: 'both', text: 'so يعني "فـ" أو "عشان كذا": السبب أول، وبعده فاصلة و so، وبعدها النتيجة.' },
                { type: 'formula', parts: [['Reason', 'v'], [',', 'p'], ['so', 'co'], ['Result', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['The bus was late', 'v', 'Reason'], [',', 'p'], ['so', 'co'], ['I took a taxi', 'n', 'Result'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Taxis are expensive', 'v', 'Reason'], [',', 'p'], ['so', 'co'], ['many students take the bus', 'n', 'Result'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My school is near my house', 'v', 'Reason'], [',', 'p'], ['so', 'co'], ['I walk', 'n', 'Result'], ['.', 'p']] },
                { type: 'try', task: 'اكتب نفس فكرتك الأولى بـ so.', placeholder: 'The bus is cheap, so I take it.' },

                { type: 'heading', text: 'الشكل 3: because of + اسم' },
                { type: 'text', view: 'both', text: 'إذا السبب اسم بس (مو جملة فيها فعل)، نقول because of.' },
                { type: 'formula', parts: [['Result', 'n'], ['because of', 'co'], ['Noun', 'v', 'Reason (noun)']] },
                { type: 'breakdown', view: 'both', parts: [['I was late', 'n', 'Result'], ['because of', 'co'], ['the traffic', 'v', 'Reason (noun)'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The flight was late', 'n', 'Result'], ['because of', 'co'], ['the weather', 'v', 'Reason (noun)'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Few people walk', 'n', 'Result'], ['because of', 'co'], ['the heat', 'v', 'Reason (noun)'], ['.', 'p']], ar: 'because of it rained ✗' },
                { type: 'try', task: 'اكتب جملة بـ because of عن سبب تأخيرك مرة.', placeholder: 'I was late because of the rain.' },

                { type: 'note', text: 'غلط شائع: so بدون فاصلة قبلها، و because of + جملة ✗، و because بعدها النتيجة بدل السبب.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: because or so?',
                    instructions: 'اختر الصحيح.',
                    choices: ['because', 'so'],
                    items: [
                        { q: 'Most people prefer the metro ___ it is fast.', a: 'because' },
                        { q: 'Taxis are expensive, ___ many students take the bus.', a: 'so' },
                        { q: 'The roads are busy, ___ we leave home early.', a: 'so' },
                        { q: 'He was late ___ his car broke down.', a: 'because' },
                        { q: 'The metro is cheap, ___ many students use it.', a: 'so' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: because or because of?',
                    instructions: 'اختر الصحيح.',
                    choices: ['because', 'because of'],
                    items: [
                        { q: 'I stayed at home ___ it was raining.', a: 'because' },
                        { q: 'The flight was late ___ the weather.', a: 'because of' },
                        { q: 'Few people walk ___ the heat.', a: 'because of' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Assignment 2 style',
                    instructions: 'اكتب سبب ونتيجة.',
                    items: [
                        { q: 'Write one sentence with because (reason).', a: 'I take the bus because it is cheap.' },
                        { q: 'Write one sentence with so (result).', a: 'There was a lot of traffic, so I arrived late.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 8.7 Vocabulary: transport (RW ص 182، LS الوحدة 8) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const transportVocab: Topic = {
    slug: 'transport-collocations',
    title: 'Transport collocations',
    titleAr: 'مفردات: المواصلات',
    keywords: ['transport', 'collocations', 'take the bus', 'ride a bike', 'drive', 'by bus', 'on foot', 'metro', 'traffic', 'survey', 'مواصلات', 'مفردات', 'كلمات', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Transport collocations',
            warmup: {
                q: 'وش الصحيح؟',
                choices: ['I go to school by foot.', 'I go to school on foot.'],
                answer: 1,
                why: 'by bus و by car، بس on foot.',
            },
            blocks: [
                { type: 'text', text: 'كل وسيلة مواصلات لها فعل يجي معها. نشوفها في صباح عائلة نواف.' },

                { type: 'heading', text: 'الفعل 1: take + وسيلة عامة' },
                { type: 'text', view: 'both', text: 'take هنا يعني "يركب" وسيلة عامة: الباص والمترو والتاكسي والقطار.' },
                { type: 'formula', parts: [['take', 'v'], ['the bus / the metro / a taxi / the train', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Nawaf', 's'], ['takes', 'v'], ['the bus', 'n'], ['to the institute'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ['took', 'v'], ['a taxi', 'n'], ['to the airport'], ['.', 'p']] },
                { type: 'try', task: 'وش الوسيلة العامة اللي تاخذها؟', placeholder: 'I take the bus to the mall.' },

                { type: 'heading', text: 'الفعل 2: drive + سيارة' },
                { type: 'text', view: 'both', text: 'drive يعني "يسوق": لما تكون أنت السواق.' },
                { type: 'formula', parts: [['drive', 'v'], ['a car / a truck', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Nawaf’s father', 's'], ['drives', 'v'], ['his car', 'n'], ['to work'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My uncle', 's'], ['drives', 'v'], ['a truck', 'n'], ['.', 'p']] },
                { type: 'try', task: 'مين يسوق في عائلتك ووين؟', placeholder: 'My brother drives his car to university.' },

                { type: 'heading', text: 'الفعل 3: ride + شي تركب فوقه' },
                { type: 'text', view: 'both', text: 'ride يعني "يركب" شي تقعد فوقه: سيكل، أو دباب، أو حصان.' },
                { type: 'formula', parts: [['ride', 'v'], ['a bike / a motorbike / a horse', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['His brother', 's'], ['rides', 'v'], ['his bike', 'n'], ['to school'], ['.', 'p']] },
                { type: 'breakdown', parts: [['James', 's'], ['rides', 'v'], ['a motorbike', 'n'], ['to work'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة بـ ride.', placeholder: 'I ride a bike at the weekend.' },

                { type: 'heading', text: 'الفعل 4: go by + وسيلة، و on foot' },
                { type: 'text', view: 'both', text: 'go by يعني "يروح بـ": by بدون the. أما المشي فـ on foot (مشي).' },
                { type: 'formula', parts: [['go / travel', 'v'], ['by bus / by car / by metro', 'x', 'by + no the'], ['|'], ['on foot', 'x', 'walking']] },
                { type: 'breakdown', view: 'both', parts: [['His sister', 's'], ['goes', 'v'], ['to university'], ['by metro', 'x', 'by + no the'], ['.', 'p']] },
                { type: 'breakdown', parts: [['His mother', 's'], ['goes', 'v'], ['to the market'], ['on foot', 'x', 'walking'], ['.', 'p']], ar: 'by foot ✗' },
                { type: 'breakdown', parts: [['There was a lot of'], ['traffic', 'n', 'زحمة'], [', so the'], ['journey', 'n', 'مشوار'], ['took an hour'], ['.', 'p']] },
                { type: 'try', task: 'كيف تروح المعهد؟ استخدم by أو on foot.', placeholder: 'I go to the institute by car.' },

                { type: 'note', text: 'غلط شائع: by the bus ✗، و by foot ✗، و drive a bike ✗ (الصح ride a bike).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: take, drive or ride?',
                    instructions: 'اختر الفعل.',
                    choices: ['take', 'drive', 'ride'],
                    items: [
                        { q: 'James ___ a motorbike to work.', a: 'ride' },
                        { q: 'I ___ a taxi to the airport.', a: 'take' },
                        { q: 'My mother ___ her car to the hospital.', a: 'drive' },
                        { q: 'Alison usually ___ the bus to school.', a: 'take' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل قسم Vocabulary في الميد.',
                    items: [
                        { q: 'Today people can use many ___ of transport.', choices: ['types', 'vehicles', 'roads', 'traffic'], a: 'types' },
                        { q: 'There was a lot of ___, so I was late.', choices: ['traffic', 'journey', 'percentage'], a: 'traffic' },
                        { q: 'He goes to work ___ train.', choices: ['by', 'on', 'in the'], a: 'by' },
                        { q: 'My mother goes to the market ___ foot.', choices: ['on', 'by', 'with'], a: 'on' },
                        { q: 'He ___ a bike to school every day.', choices: ['rides', 'drives', 'takes'], a: 'rides' },
                        { q: 'The ___ from Yanbu to Madinah takes two hours.', choices: ['journey', 'traffic', 'survey'], a: 'journey' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 8.8 Skills: meaning from context، definitions، years (RW ص 175، LS الوحدة 8) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const unit8Skills: Topic = {
    slug: 'meaning-from-context-years',
    title: 'Meaning from context, definitions and saying years',
    titleAr: 'مهارات: معنى الكلمة من السياق والتعريفات ونطق السنوات',
    keywords: ['meaning from context', 'context', 'definitions', 'years', 'pronouncing years', 'collecting data', 'pie chart', 'مهارات', 'سياق', 'سنوات', 'تعريف', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Meaning from context, definitions and saying years',
            warmup: {
                q: 'كيف تقرأ 1998؟',
                choices: ['one thousand nine hundred ninety-eight', 'nineteen ninety-eight'],
                answer: 1,
                why: 'السنوات قبل 2000 نقسمها نصين.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مهارات: تخمّن معنى كلمة من الجمل اللي حولها، وتلقط التعريف في الاستماع، وتقرأ السنوات صح.' },

                { type: 'heading', text: 'المهارة 1: معنى الكلمة من السياق' },
                { type: 'text', view: 'both', text: 'لا توقف عند الكلمة الصعبة. حولها غالبًا شرح، أو مثال، أو عكس.' },
                { type: 'formula', parts: [['New word', 'x', 'New word'], ['+'], ['Clue', 'v', 'explanation / example / opposite'], ['→'], ['Meaning', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Many people'], ['commute', 'x', 'New word'], ['.'], ['They travel from home to work every day', 'v', 'Explanation'], ['.', 'p']], ar: 'commute = يروح ويرجع من الدوام كل يوم.' },
                { type: 'breakdown', parts: [['Vehicles', 'x', 'New word'], [', like'], ['cars, buses and trucks', 'v', 'Example'], [', fill the roads'], ['.', 'p']], ar: 'vehicles = مركبات.' },
                { type: 'breakdown', parts: [['The roads are'], ['not empty', 'v', 'Opposite'], ['; they are'], ['crowded', 'x', 'New word'], ['.', 'p']], ar: 'crowded = زحمة (عكس empty).' },
                { type: 'try', task: 'وش معنى survey؟ "The survey had ten questions. 500 people answered it."', reference: 'a set of questions', placeholder: 'a set of …' },

                { type: 'heading', text: 'المهارة 2: Listening for definitions' },
                { type: 'text', view: 'both', text: 'التعريف يجي بعد means أو is a kind of أو In other words.' },
                { type: 'breakdown', view: 'both', parts: [['The Underground', 'x', 'Word'], ['is a kind of', 'co', 'Definition signal'], ['train that goes under the ground', 'v', 'Definition'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Rush hour', 'x', 'Word'], ['means', 'co', 'Definition signal'], ['the busy time in the morning and evening', 'v', 'Definition'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة تشرح فيها كلمة بـ is a kind of.', placeholder: 'A tuk-tuk is a kind of small taxi.' },

                { type: 'heading', text: 'المهارة 3: نطق السنوات' },
                { type: 'text', view: 'both', text: 'قبل 2000 نقسمها نصين، ومن 2000 إلى 2009 two thousand and، وبعدها twenty.' },
                { type: 'breakdown', view: 'both', parts: [['18', 'n', 'eighteen'], ['63', 'v', 'sixty-three']], ar: '1863' },
                { type: 'breakdown', parts: [['19', 'n', 'nineteen'], ['98', 'v', 'ninety-eight']], ar: '1998' },
                { type: 'breakdown', view: 'both', parts: [['2005', 'x', 'two thousand and five']] },
                { type: 'breakdown', parts: [['20', 'n', 'twenty'], ['24', 'v', 'twenty-four']], ar: '2024' },
                { type: 'try', task: 'اكتب سنة ميلادك وسنة دخولك المعهد بالكلمات.', placeholder: 'two thousand and six · twenty twenty-five' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Meaning from context',
                    instructions: 'خمّن معنى الكلمة اللي تحتها خط.',
                    items: [
                        { q: 'Most people **prefer** the metro. They like it more than the bus.', choices: ['like more', 'hate', 'build'], a: 'like more' },
                        { q: 'The roads are full of cars, so there are many **traffic jams**.', choices: ['lots of cars that move slowly', 'fast trains'], a: 'lots of cars that move slowly' },
                        { q: 'The **journey** from home to work takes one hour.', choices: ['the trip', 'the car'], a: 'the trip' },
                        { q: 'Many people **commute** by train. They go to work and come back every day.', choices: ['travel to work and back', 'sleep'], a: 'travel to work and back' },
                        { q: 'The bus was **crowded**. There were too many people.', choices: ['full of people', 'empty'], a: 'full of people' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Say the year',
                    instructions: 'اختر طريقة القراءة.',
                    items: [
                        { q: '1932', choices: ['nineteen thirty-two', 'one nine three two'], a: 'nineteen thirty-two' },
                        { q: '2010', choices: ['twenty ten', 'two thousand ten hundred'], a: 'twenty ten' },
                        { q: '2008', choices: ['two thousand and eight', 'twenty hundred eight'], a: 'two thousand and eight' },
                        { q: '1863', choices: ['eighteen sixty-three', 'one eight six three'], a: 'eighteen sixty-three' },
                        { q: '2024', choices: ['twenty twenty-four', 'two zero two four'], a: 'twenty twenty-four' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 8: explanatory paragraph about a survey + transport problem talk (RW ص 187 و188، LS الوحدة 8) ───────────────
// نمط أول أربع دروس: البارقراف جملة جملة من رسم دائري، كل جزء: جمل ملونة ← كتابة.
const unit8Task: Topic = {
    slug: 'survey-results-paragraph',
    title: 'Writing task: explaining the results of a survey',
    titleAr: 'مهمة الوحدة: بارقراف يشرح نتائج استبيان',
    keywords: ['writing task', 'explanatory paragraph', 'survey results', 'pie chart', 'report', 'percentages', 'transport problem', 'بارقراف', 'كتابة', 'استبيان', 'نتائج', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: explaining the results of a survey',
            warmup: {
                q: 'أفضل topic sentence لتقرير استبيان:',
                choices: ['This report shows the results of a survey about transport in Riyadh.', 'Cars are nice.', 'I like the metro.'],
                answer: 0,
                why: 'تقول وش التقرير يعرض.',
            },
            blocks: [
                { type: 'text', text: 'المهمة: بارقراف يشرح نتائج استبيان مواصلات. هذي نتائج استبيان 200 طالب في الرياض، ونبني البارقراف منها جزء جزء.' },

                { type: 'heading', text: 'النموذج اللي بنبنيه' },
                { type: 'example', view: 'both', en: 'This report shows the results of a survey about transport in Riyadh. We asked 200 students how they travel to university. The most popular type of transport is the car. Most students (60%) go by car because it is fast and comfortable. Some students (25%) take the metro. It is cheaper than a car. A few students (10%) take the bus, and only 5% walk because the weather is very hot. In conclusion, the car is the most popular type of transport, but the metro is becoming popular.' },
                { type: 'text', text: 'الحين نفككه 4 أجزاء: الجملة الرئيسية، ثم الأكثر، ثم الباقي، ثم الخاتمة.' },
                {
                    type: 'table',
                    head: ['Transport', '%'],
                    rows: [['car', '60%'], ['metro', '25%'], ['bus', '10%'], ['walk', '5%']],
                },

                { type: 'heading', text: 'الجزء 1: topic sentence ومن سألت' },
                { type: 'breakdown', view: 'both', parts: [['This report shows the results of a survey about transport in Riyadh.', 's', 'Topic'], ['We asked 200 students how they travel to university.', 'v', 'Who?']] },
                { type: 'try', task: 'اكتب أول جملتين لتقرير عن فصلك.', placeholder: 'This report shows the results of a survey about … We asked …' },

                { type: 'heading', text: 'الجزء 2: الأكثر مع السبب' },
                { type: 'breakdown', view: 'both', parts: [['The most popular', 'x', 'Superlative'], ['type of transport is the car.'], ['Most students', 'x', 'Quantifier'], ['(60%)', 'n', 'Data'], ['go by car'], ['because', 'co'], ['it is fast and comfortable', 'v', 'Reason'], ['.', 'p']] },
                { type: 'try', task: 'اكتب الأكثر شعبية في استبيانك مع النسبة والسبب.', placeholder: 'The most popular … Most students (…%) …' },

                { type: 'heading', text: 'الجزء 3: الباقي' },
                { type: 'breakdown', view: 'both', parts: [['Some students', 'x', 'Quantifier'], ['(25%)', 'n', 'Data'], ['take the metro.'], ['It', 'n', '= the metro'], ['is cheaper than a car'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Only 5% walk', 'n', 'Data'], [',', 'p'], ['because', 'co'], ['the weather is very hot', 'v', 'Reason'], ['.', 'p']] },
                { type: 'try', task: 'اكتب الأقل شعبية مع النسب والأسباب.', placeholder: 'A few students (…%) … because …' },

                { type: 'heading', text: 'الجزء 4: الجملة الختامية' },
                { type: 'breakdown', view: 'both', parts: [['In conclusion', 'x', 'Signal'], [', the car is the most popular type of transport, but the metro is becoming popular.', 'n', 'Concluding']] },
                { type: 'try', task: 'اكتب الجملة الختامية لتقريرك.', placeholder: 'In conclusion, …' },

                { type: 'heading', text: 'اجمع الأجزاء' },
                { type: 'note', text: 'قبل ما ترسل: نسب من البيانات، و most / some / a few صحيحة، و because و so، و it / they بدل التكرار، و the most popular.' },
                { type: 'try', view: 'both', task: 'اجمع الأجزاء: البارقراف كامل (7 إلى 9 جمل).', placeholder: 'This report shows …' },

                { type: 'heading', text: 'التحدث: مشكلة مواصلات وحلها' },
                { type: 'text', view: 'both', text: 'الموضوع، ثم المشكلة، ثم الحل، ثم النتيجة، بالماضي.' },
                { type: 'breakdown', view: 'both', parts: [["I'm going to talk about traffic in Riyadh.", 'x', 'Topic']] },
                { type: 'breakdown', parts: [['There were too many cars', 'v', 'Problem'], [',', 'p'], ['so', 'co'], ['people spent hours in traffic', 'n', 'Result'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The city built a big metro.', 'v', 'Solution'], ['Now there are fewer cars on the roads.', 'n', 'Result']] },
                { type: 'try', task: 'اكتب حديث قصير عن مشكلة مواصلات في مدينتك وحلها (4 جمل).', placeholder: "I'm going to talk about …" },

                {
                    type: 'exercise',
                    title: 'Exercise A: Check the paragraph',
                    instructions: 'هذي جمل من بارقراف طالب. اختر الصحيح.',
                    items: [
                        { q: 'The car is ___ type of transport.', choices: ['the most popular', 'the popularest', 'more popular'], a: 'the most popular' },
                        { q: '(60%) ___ students go by car.', choices: ['Most', 'A few', 'No'], a: 'Most' },
                        { q: '(10%) ___ students take the bus.', choices: ['A few', 'Most', 'All'], a: 'A few' },
                        { q: 'Students go to university ___ metro.', choices: ['by', 'by the', 'on'], a: 'by' },
                        { q: 'Few people walk ___ the heat.', choices: ['because of', 'because', 'so'], a: 'because of' },
                        { q: 'It is very hot, ___ few people walk.', choices: ['so', 'because'], a: 'so' },
                        { q: 'We ___ 200 students.', choices: ['asked', 'askd', 'ask'], a: 'asked' },
                        { q: 'Which is the best concluding sentence?', choices: ['In conclusion, the car is the most popular type of transport.', 'Some students take the bus.'], a: 'In conclusion, the car is the most popular type of transport.' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT8_TOPICS: Topic[] = [superlatives, quantifiers, svo, linkingPronouns, pastSimple2, becauseSo, transportVocab, unit8Skills, unit8Task];
