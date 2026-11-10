// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 7: Food and Culture
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 7 · Food and Culture';
const base = ['تحضيري', 'ENG 001', 'Unit 7', 'Food and Culture'];

// ─────────────── 7.1 Countable and uncountable nouns (RW ص 158) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const countable: Topic = {
    slug: 'countable-and-uncountable-nouns',
    title: 'Countable and uncountable nouns',
    titleAr: 'الأسماء اللي تنعد واللي ما تنعد',
    keywords: ['countable', 'uncountable', 'countable nouns', 'uncountable nouns', 'rice', 'water', 'bread', 'ينعد', 'ما ينعد', 'معدود', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Countable and uncountable nouns',
            warmup: {
                q: 'وش الصحيح؟',
                choices: ['Rice are popular in Saudi Arabia.', 'Rice is popular in Saudi Arabia.'],
                answer: 1,
                why: 'rice ما ينعد، والاسم اللي ما ينعد ياخذ فعل مفرد (is).',
            },
            blocks: [
                { type: 'text', text: 'الاسم نوعين: شي تقدر تعده (egg، dish)، وشي ما تعده (rice، milk). والنوع يغيّر a والجمع والفعل.' },

                { type: 'heading', text: 'القاعدة 1: a + اسم ينعد' },
                { type: 'text', view: 'both', text: 'المعدود المفرد ياخذ a أو an.' },
                { type: 'formula', parts: [['a / an', 'x', 'Article'], ['countable noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['ate', 'v'], ['an', 'x', 'Article'], ['egg', 'n', 'Countable'], ['for breakfast'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Kabsa', 's'], ['is', 'v'], ['a', 'x', 'Article'], ['popular dish', 'n', 'Countable'], ['.', 'p']] },
                { type: 'breakdown', parts: [['She', 's'], ['bought', 'v'], ['a', 'x', 'Article'], ['date', 'n', 'Countable'], ['cake'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن أكلة فيها a أو an.', placeholder: 'I eat an apple every day.' },

                { type: 'heading', text: 'القاعدة 2: المعدود يتجمع + are' },
                { type: 'text', view: 'both', text: 'نزيد s، والفعل are.' },
                { type: 'formula', parts: [['countable noun + s', 'n'], ['are', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Vegetables', 'n', 'Plural'], ['are', 'v'], ['good for you'], ['.', 'p']] },
                { type: 'breakdown', parts: [['These dishes', 'n', 'Plural'], ['are', 'v'], ['spicy'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Dates', 'n', 'Plural'], ['are', 'v'], ['sweet'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن أكل تحبه بالجمع.', placeholder: 'Onions are good in salads.' },

                { type: 'heading', text: 'القاعدة 3: اللي ما ينعد + is' },
                { type: 'text', view: 'both', text: 'ما ياخذ a ولا s، وفعله is حتى لو كثير.' },
                { type: 'formula', parts: [['uncountable noun', 'n'], ['is', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Rice', 'n', 'Uncountable'], ['is', 'v'], ['popular in Asia'], ['.', 'p']], ar: 'Rices are ✗' },
                { type: 'breakdown', parts: [['Honey', 'n', 'Uncountable'], ['is', 'v'], ['sweet'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Meat', 'n', 'Uncountable'], ['is', 'v'], ['expensive'], ['.', 'p']], ar: 'ومثلها: bread، milk، water، sugar، tea.' },
                { type: 'try', task: 'اكتب جملة عن أكلة ما تنعد.', placeholder: 'Bread is cheap in Saudi Arabia.' },

                { type: 'heading', text: 'القاعدة 4: a cup of + اللي ما ينعد' },
                { type: 'text', view: 'both', text: 'عشان تعد اللي ما ينعد، حط قبله وعاء أو قطعة.' },
                { type: 'formula', parts: [['a cup / a bottle / a piece', 'x', 'Container'], ['of', 'x', 'of'], ['uncountable', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Can I have'], ['two bottles', 'x', 'Container'], ['of', 'x', 'of'], ['water', 'n'], ['?', 'p']], ar: 'two waters ✗' },
                { type: 'breakdown', parts: [['I', 's'], ['drink', 'v'], ['a cup', 'x', 'Container'], ['of', 'x', 'of'], ['tea', 'n'], ['every morning'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ['ate', 'v'], ['a piece', 'x', 'Container'], ['of', 'x', 'of'], ['bread', 'n'], ['.', 'p']], ar: 'a bread ✗' },
                { type: 'try', task: 'اطلب من المطعم شي ما ينعد بـ a … of.', placeholder: 'Can I have a glass of juice, please?' },

                { type: 'note', text: 'غلط شائع: a bread ✗، و rices ✗، و Honey are ✗، و two waters ✗.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Countable or uncountable?',
                    instructions: 'اختر C للي ينعد و U للي ما ينعد.',
                    choices: ['C', 'U'],
                    items: [
                        { q: 'rice', a: 'U' },
                        { q: 'onion', a: 'C' },
                        { q: 'date', a: 'C' },
                        { q: 'honey', a: 'U' },
                        { q: 'vegetable', a: 'C' },
                        { q: 'bread', a: 'U' },
                        { q: 'meat', a: 'U' },
                        { q: 'dish', a: 'C' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: is or are?',
                    instructions: 'اختر الفعل.',
                    choices: ['is', 'are'],
                    items: [
                        { q: 'Vegetables ___ good for you.', a: 'are' },
                        { q: 'Meat ___ expensive in this shop.', a: 'is' },
                        { q: 'These dishes ___ spicy.', a: 'are' },
                        { q: 'The water ___ cold.', a: 'is' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Fix the mistake',
                    instructions: 'صحح الجملة.',
                    items: [
                        { q: 'I ate a bread.', a: 'I ate some bread. / I ate a piece of bread.' },
                        { q: 'Rices are popular in Asia.', a: 'Rice is popular in Asia.' },
                        { q: 'Can I have two waters?', a: 'Can I have two bottles of water?' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 7.2 Can and cannot (RW ص 159) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const canCannot: Topic = {
    slug: 'can-and-cannot',
    title: 'Can and cannot',
    titleAr: 'can و cannot',
    keywords: ['can', 'cannot', "can't", 'ability', 'possible', 'يقدر', 'ما يقدر', 'ممكن', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Can and cannot',
            warmup: {
                q: 'وش الصحيح؟',
                choices: ['He can eats nuts.', 'He can eat nuts.', 'He can to eat nuts.'],
                answer: 1,
                why: 'بعد can الفعل يجي أساسي: بدون s وبدون to.',
            },
            blocks: [
                { type: 'text', text: 'can للقدرة (أقدر) وللإمكانية (ممكن). وبعدها الفعل الأساسي، وما تتغير مع he و she.' },

                { type: 'heading', text: 'الشكل 1: can + الفعل' },
                { type: 'text', view: 'both', text: 'بدون to وبدون s.' },
                { type: 'formula', parts: [['Subject', 's'], ['can', 'hv'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['My mother', 's'], ['can', 'hv'], ['cook', 'v'], ['many dishes'], ['.', 'p']], ar: 'can cooks ✗ و can to cook ✗' },
                { type: 'breakdown', parts: [['A meat dish', 's'], ['can', 'hv'], ['have', 'v'], ['vegetables'], ['.', 'p']], ar: 'هنا can = ممكن.' },
                { type: 'breakdown', parts: [['Chillies', 's'], ['can', 'hv'], ['be', 'v'], ['very spicy'], ['.', 'p']] },
                { type: 'try', task: 'اكتب شي تقدر تطبخه أو تسويه.', placeholder: 'I can make tea.' },

                { type: 'heading', text: "الشكل 2: can't + الفعل" },
                { type: 'text', view: 'both', text: "النفي can't أو cannot (كلمة وحدة)." },
                { type: 'formula', parts: [['Subject', 's'], ["can't / cannot", 'hv'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['My father', 's'], ["can't", 'hv'], ['eat', 'v'], ['sugar'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You', 's'], ['cannot', 'hv'], ['taste', 'v'], ['the chillies in this dish'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Some people', 's'], ["can't", 'hv'], ['eat', 'v'], ['almonds'], ['.', 'p']] },
                { type: 'try', task: "اكتب شي ما تقدر تاكله أو تسويه بـ can't.", placeholder: "I can't eat spicy food." },

                { type: 'heading', text: 'الشكل 3: السؤال Can …?' },
                { type: 'text', view: 'both', text: 'can أول، والجواب القصير بنفس can.' },
                { type: 'formula', parts: [['Can', 'hv'], ['Subject', 's'], ['base verb', 'v'], ['?', 'p']] },
                { type: 'breakdown', view: 'both', parts: [['Can', 'hv'], ['you', 's'], ['cook', 'v'], ['?', 'p']], ar: "Yes, I can. / No, I can't." },
                { type: 'breakdown', parts: [['Can', 'hv'], ['your father', 's'], ['speak', 'v'], ['English'], ['?', 'p']], ar: 'Yes, he can. مو Yes, he does.' },
                { type: 'breakdown', parts: [['Can', 'hv'], ['I', 's'], ['have', 'v'], ['some water'], ['?', 'p']], ar: 'ونستخدمها للطلب المؤدب.' },
                { type: 'try', task: 'اكتب سؤال بـ Can لزميلك، وجاوبه.', placeholder: "Can you swim? Yes, I can." },

                { type: 'note', text: "غلط شائع: She can cooks ✗، و can to ✗، و Yes, I do ✗ (الصح Yes, I can)." },


                {
                    type: 'exercise',
                    title: 'Exercise A: Choose',
                    instructions: 'اختر الصحيح.',
                    items: [
                        { q: 'A meat dish can ___ vegetables.', choices: ['has', 'have'], a: 'have' },
                        { q: 'You cannot ___ the chillies in this dish.', choices: ['taste', 'tasting'], a: 'taste' },
                        { q: 'Some people can’t ___ almonds.', choices: ['eat', 'to eat'], a: 'eat' },
                        { q: 'Chillies ___ very spicy.', choices: ['can be', 'can is'], a: 'can be' },
                        { q: 'My brother ___ cook. He burns everything!', choices: ["can't", 'can'], a: "can't" },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Short answers',
                    instructions: 'اختر الجواب القصير.',
                    items: [
                        { q: 'Can you cook? (yes)', choices: ['Yes, I can.', 'Yes, I do.'], a: 'Yes, I can.' },
                        { q: 'Can they swim? (no)', choices: ["No, they can't.", "No, they don't."], a: "No, they can't." },
                        { q: 'Can your sister speak French? (yes)', choices: ['Yes, she can.', 'Yes, she does.'], a: 'Yes, she can.' },
                        { q: '___ I have some tea, please?', choices: ['Can', 'Do'], a: 'Can' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: About your family',
                    instructions: 'اكتب جملتين عن عائلتك: can و can’t.',
                    items: [{ q: 'What can and can’t people in your family eat or cook?', a: "My mother can cook many dishes. My father can't eat sugar." }],
                },
            ],
        },
    ],
};

// ─────────────── 7.3 Subject–verb agreement (RW ص 162) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const sva: Topic = {
    slug: 'subject-verb-agreement',
    title: 'Subject–verb agreement',
    titleAr: 'توافق الفاعل والفعل',
    keywords: ['subject verb agreement', 'agreement', 'singular verb', 'plural verb', 'is are', 'has have', 'توافق', 'الفاعل والفعل', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Subject–verb agreement',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'Many people ___ spicy food.',
                choices: ['love', 'loves'],
                answer: 0,
                why: 'people جمع، فالفعل بدون s.',
            },
            blocks: [
                { type: 'text', text: 'الفاعل (subject) هو اللي نتكلم عنه في الجملة. والفعل لازم يناسبه: إذا الفاعل مفرد ياخذ الفعل شكل، وإذا جمع ياخذ شكل ثاني. هذا اسمه subject–verb agreement (توافق الفاعل والفعل).' },

                { type: 'heading', text: 'القاعدة 1: فاعل مفرد + فعل بـ s' },
                { type: 'text', view: 'both', text: 'إذا الفاعل شي واحد (مثل he أو she)، الفعل ياخذ s، و be تصير is، و have تصير has.' },
                { type: 'formula', parts: [['Singular subject', 's'], ['verb + s / is / has', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Greek food', 's', 'Singular'], ['uses', 'v'], ['a lot of vegetables'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A good chef', 's', 'Singular'], ['uses', 'v'], ['fresh vegetables'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Chinese food', 's', 'Singular'], ['has', 'v'], ['salty fish sauce'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن أكل بلد بفاعل مفرد.', placeholder: 'Indian food uses a lot of spices.' },

                { type: 'heading', text: 'القاعدة 2: فاعل جمع + فعل بدون s' },
                { type: 'text', view: 'both', text: 'إذا الفاعل أكثر من واحد (مثل they)، الفعل بدون s، و be تصير are، و have تبقى have.' },
                { type: 'formula', parts: [['Plural subject', 's'], ['verb / are / have', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Children', 's', 'Plural'], ['like', 'v'], ['sweets'], ['.', 'p']], ar: 'children جمع بدون s.' },
                { type: 'breakdown', parts: [['Many people', 's', 'Plural'], ['eat', 'v'], ['rice'], ['.', 'p']], ar: 'people جمع.' },
                { type: 'breakdown', parts: [['Turkish people', 's', 'Plural'], ['love', 'v'], ['small dishes'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن ناس بلدك وأكلهم.', placeholder: 'Saudi people drink a lot of coffee.' },

                { type: 'heading', text: 'القاعدة 3: اللي ما ينعد + فعل مفرد' },
                { type: 'text', view: 'both', text: 'الأشياء اللي ما تنعد (honey، coffee، rice) تعامل مثل المفرد.' },
                { type: 'breakdown', view: 'both', parts: [['Honey', 's', 'Uncountable'], ['is', 'v'], ['sweet'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Swedish cuisine', 's', 'Uncountable'], ['has', 'v'], ['a lot of breads'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Coffee', 's', 'Uncountable'], ['keeps', 'v'], ['me awake'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة فاعلها شي ما ينعد.', placeholder: 'Rice takes 20 minutes to cook.' },

                { type: 'heading', text: 'القاعدة 4: الفاعل الطويل' },
                { type: 'text', view: 'both', text: 'دوّر على الاسم الأساسي، وخلّ الكلمات اللي بعد of أو in.' },
                { type: 'breakdown', view: 'both', parts: [['The chef', 's', 'Main noun'], ['in these restaurants', 'adj', 'Ignore'], ['is', 'v'], ['from Italy'], ['.', 'p']], ar: 'الأساسي chef مفرد، فـ is.' },
                { type: 'breakdown', parts: [['The dishes', 's', 'Main noun'], ['in this restaurant', 'adj', 'Ignore'], ['are', 'v'], ['delicious'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A bowl', 's', 'Main noun'], ['of dates', 'adj', 'Ignore'], ['is', 'v'], ['on the table'], ['.', 'p']] },
                { type: 'try', task: 'كمّل: The people in my family …', placeholder: 'The people in my family love kabsa.' },

                { type: 'note', text: 'غلط شائع: Many people eats ✗، و The children likes ✗، و The chef in these restaurants are ✗.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the verb',
                    instructions: 'اختر الفعل الموافق للفاعل.',
                    items: [
                        { q: 'Turkish people ___ eating small dishes.', choices: ['love', 'loves'], a: 'love' },
                        { q: 'Greek food ___ a lot of vegetables.', choices: ['use', 'uses'], a: 'uses' },
                        { q: 'Chinese food ___ salty fish sauce.', choices: ['have', 'has'], a: 'has' },
                        { q: 'The dishes in this restaurant ___ delicious.', choices: ['is', 'are'], a: 'are' },
                        { q: 'Swedish cuisine ___ a lot of different breads.', choices: ['have', 'has'], a: 'has' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Correct or not?',
                    instructions: 'الفعل يوافق الفاعل؟',
                    choices: ['Correct', 'Wrong'],
                    items: [
                        { q: 'Many people eats rice.', a: 'Wrong' },
                        { q: 'Honey is sweet.', a: 'Correct' },
                        { q: 'The children likes pizza.', a: 'Wrong' },
                        { q: 'A good chef uses fresh vegetables.', a: 'Correct' },
                        { q: 'The dishes in this restaurant is cheap.', a: 'Wrong' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 7.4 Determiners: a, an and some (RW ص 163) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const determiners: Topic = {
    slug: 'determiners-a-an-some',
    title: 'Determiners: a, an and some',
    titleAr: 'a و an و some',
    keywords: ['determiners', 'a', 'an', 'some', 'a an some', 'some any', 'أدوات', 'بعض', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Determiners: a, an and some',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'Add ___ honey to the dish.',
                choices: ['a', 'an', 'some'],
                answer: 2,
                why: 'honey ما ينعد، فما نحط a أو an.',
            },
            blocks: [
                { type: 'text', text: 'قبل الاسم: a أو an لشي واحد، و some (يعني "بعض" أو "شوي") لأكثر من واحد أو لشي ما ينعد.' },

                { type: 'heading', text: 'الكلمة 1: a / an + شي واحد' },
                { type: 'text', view: 'both', text: 'a قبل الصوت الساكن، و an قبل صوت العلة.' },
                { type: 'formula', parts: [['a / an', 'x', 'One'], ['singular countable', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['A', 'x', 'One'], ['famous dish', 'n'], ['in Jeddah is mutabbaq'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I eat'], ['an', 'x', 'One'], ['egg', 'n'], ['every morning'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There are many meat dishes at'], ['an', 'x', 'One'], ['Arab restaurant', 'n'], ['.', 'p']], ar: 'an قبل Arab لأنها تبدأ بصوت علة.' },
                { type: 'try', task: 'اكتب جملة فيها a وجملة فيها an عن أكل.', placeholder: 'I had a sandwich and an orange.' },

                { type: 'heading', text: 'الكلمة 2: some + جمع' },
                { type: 'text', view: 'both', text: 'عدد مو محدد من شي ينعد.' },
                { type: 'formula', parts: [['some', 'x', 'Some'], ['plural noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Italian chefs add'], ['some', 'x', 'Some'], ['carrots', 'n', 'Plural'], ['to pasta sauces'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We bought'], ['some', 'x', 'Some'], ['vegetables', 'n', 'Plural'], ['.', 'p']], ar: 'a vegetables ✗' },
                { type: 'try', task: 'وش اشتريت آخر مرة من البقالة؟ استخدم some + جمع.', placeholder: 'I bought some apples.' },

                { type: 'heading', text: 'الكلمة 3: some + اللي ما ينعد' },
                { type: 'formula', parts: [['some', 'x', 'Some'], ['uncountable noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Curry is served with'], ['some', 'x', 'Some'], ['rice', 'n', 'Uncountable'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Can I have'], ['some', 'x', 'Some'], ['water', 'n', 'Uncountable'], [', please?']] },
                { type: 'breakdown', parts: [['She drank'], ['some', 'x', 'Some'], ['milk', 'n', 'Uncountable'], ['.', 'p']], ar: 'a milk ✗' },
                { type: 'try', task: 'اطلب من المطعم شي ما ينعد بـ some.', placeholder: 'Can I have some bread, please?' },

                { type: 'note', text: 'غلط شائع: a milk ✗، و a vegetables ✗، و a apple ✗ (الصح an apple).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: a, an or some?',
                    instructions: 'اختر الصحيح.',
                    choices: ['a', 'an', 'some'],
                    items: [
                        { q: 'At ___ Arab restaurant, there are many meat dishes.', a: 'an' },
                        { q: 'Curry is usually served with ___ rice.', a: 'some' },
                        { q: '___ famous dish in Jeddah is mutabbaq.', a: 'a' },
                        { q: 'Italian chefs add ___ carrots to pasta sauces.', a: 'some' },
                        { q: 'I eat ___ egg every morning.', a: 'an' },
                        { q: 'Can I have ___ water, please?', a: 'some' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Correct the sentence',
                    instructions: 'صحح الأداة.',
                    items: [
                        { q: 'She drank a milk.', a: 'She drank some milk.' },
                        { q: 'We bought a vegetables.', a: 'We bought some vegetables.' },
                        { q: 'I ate a apple.', a: 'I ate an apple.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 7.5 The past simple (1) (LS الوحدة 7) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const pastSimple1: Topic = {
    slug: 'past-simple-1',
    title: 'The past simple (1)',
    titleAr: 'الماضي البسيط (1)',
    keywords: ['past simple', 'simple past', 'past', 'ed', 'was', 'were', 'did', "didn't", 'irregular verbs', 'ماضي', 'الماضي البسيط', 'أفعال شاذة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'The past simple (1)',
            warmup: {
                q: 'وش الصحيح؟',
                choices: ['Did you went to the restaurant?', 'Did you go to the restaurant?'],
                answer: 1,
                why: 'بعد Did الفعل يرجع أساسي (go). هذا أشهر فخ في الماضي، ويجي في تكليف 2.',
            },
            blocks: [
                { type: 'text', text: 'الماضي البسيط لشي صار وخلص: yesterday، last week، in 2020. وهو مطلوب في تكليف 2.' },

                { type: 'heading', text: 'الشكل 1: الفعل المنتظم + ed' },
                { type: 'text', view: 'both', text: 'نفس الشكل مع كل الضمائر. وفيه تغييرات إملاء صغيرة.' },
                { type: 'formula', parts: [['Subject', 's'], ['verb + ed', 'v'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [['My mother', 's'], ['cook', 'v'], ['ed', 'x', '+ ed'], ['kabsa yesterday'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ['live', 'v'], ['d', 'x', 'e + d'], ['in Jeddah in 2020'], ['.', 'p']] },
                { type: 'breakdown', parts: [['She', 's'], ['stud', 'v'], ['ied', 'x', 'y → ied'], ['English last night'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The bus', 's'], ['stop', 'v'], ['ped', 'x', 'p → pp + ed'], ['near the mall'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن أمس بأفعال منتظمة.', placeholder: 'I watched TV. I played football.' },

                { type: 'heading', text: 'الشكل 2: الفعل الشاذ' },
                { type: 'text', view: 'both', text: 'ما ياخذ ed، يتغير كله وتحفظه: go ← went، eat ← ate، buy ← bought، have ← had.' },
                { type: 'breakdown', view: 'both', parts: [['go', 'v'], ['→'], ['went', 'x', 'Past']], ar: 'I went to a new restaurant.' },
                { type: 'breakdown', parts: [['eat', 'v'], ['→'], ['ate', 'x', 'Past']], ar: 'We ate kabsa.' },
                { type: 'breakdown', parts: [['buy', 'v'], ['→'], ['bought', 'x', 'Past']], ar: 'He bought some dates.' },
                { type: 'breakdown', parts: [['drink', 'v'], ['→'], ['drank', 'x', 'Past']], ar: 'ومثلها: make → made، have → had، see → saw.' },
                { type: 'try', task: 'اكتب جملتين عن آخر مرة أكلت برا، بأفعال شاذة.', placeholder: 'I went to a café. I had a sandwich.' },

                { type: 'heading', text: 'الشكل 3: was و were' },
                { type: 'text', view: 'both', text: 'ماضي am و is هو was، وماضي are هو were.' },
                { type: 'formula', parts: [['I / he / she / it', 's'], ['was', 'v'], ['|'], ['you / we / they', 's'], ['were', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['The food', 's'], ['was', 'v'], ['delicious'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ['were', 'v'], ['hungry after class'], ['.', 'p']] },
                { type: 'try', task: 'كيف كان أكل أمس؟ استخدم was.', placeholder: 'Dinner was great.' },

                { type: 'heading', text: "الشكل 4: didn't + الفعل" },
                { type: 'text', view: 'both', text: "بعد didn't الفعل يرجع لأصله، لأن الماضي راح لـ did." },
                { type: 'formula', parts: [['Subject', 's'], ["didn't", 'hv'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['She', 's'], ["didn't", 'hv', 'did + not'], ['cook', 'v', 'Base verb'], ['dinner'], ['.', 'p']] },
                { type: 'breakdown', parts: [['He', 's'], ["didn't", 'hv', 'did + not'], ['eat', 'v', 'Base verb'], ['lunch'], ['.', 'p']], ar: "didn't ate ✗" },
                { type: 'try', task: "اكتب شي ما سويته أمس بـ didn't.", placeholder: "I didn't drink coffee yesterday." },

                { type: 'heading', text: 'الشكل 5: السؤال بـ Did' },
                { type: 'text', view: 'both', text: 'Did أول الجملة، والفعل يرجع لأصله، والجواب القصير بـ did أو didn’t.' },
                { type: 'formula', parts: [['Did', 'hv'], ['Subject', 's'], ['base verb', 'v'], ['?', 'p']] },
                { type: 'breakdown', view: 'both', parts: [['Did', 'hv'], ['you', 's'], ['try', 'v'], ['the new restaurant'], ['?', 'p']], ar: "Yes, I did. / No, I didn't." },
                { type: 'breakdown', parts: [['What', 'x', 'Question word'], ['did', 'hv'], ['you', 's'], ['eat', 'v'], ['?', 'p']], ar: 'I ate fish.' },
                { type: 'try', task: 'اكتب سؤال بـ Did لزميلك عن أمس، وجاوبه.', placeholder: "Did you go out last night? No, I didn't." },

                { type: 'note', text: "غلط شائع: goed ✗، و They was ✗، و didn't ate ✗، و Did you tried ✗." },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Past form',
                    instructions: 'اختر صيغة الماضي.',
                    items: [
                        { q: 'cook', choices: ['cooked', 'cookd'], a: 'cooked' },
                        { q: 'go', choices: ['goed', 'went'], a: 'went' },
                        { q: 'buy', choices: ['buyed', 'bought'], a: 'bought' },
                        { q: 'stop', choices: ['stoped', 'stopped'], a: 'stopped' },
                        { q: 'drink', choices: ['drank', 'drinked'], a: 'drank' },
                        { q: 'live', choices: ['lived', 'liveed'], a: 'lived' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Negatives and questions',
                    instructions: 'اختر الصحيح.',
                    items: [
                        { q: 'Did you ___ the new restaurant?', choices: ['try', 'tried'], a: 'try' },
                        { q: "She didn't ___ dinner yesterday.", choices: ['cook', 'cooked'], a: 'cook' },
                        { q: 'Did you like the food? Yes, I ___.', choices: ['did', 'liked', 'was'], a: 'did' },
                        { q: 'My father ___ at home last night.', choices: ['was', 'were'], a: 'was' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Correct the mistake',
                    instructions: 'صحح الجملة.',
                    items: [
                        { q: 'I goed to Jeddah last week.', a: 'I went to Jeddah last week.' },
                        { q: 'They was hungry.', a: 'They were hungry.' },
                        { q: "He didn't ate lunch.", a: "He didn't eat lunch." },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Assignment 2 style',
                    instructions: 'فكر في الويكند اللي فات.',
                    items: [{ q: 'Write two complete sentences in the past simple: one affirmative and one negative.', a: "Last Friday, I ate kabsa with my family. I didn't watch TV." }],
                },
            ],
        },
    ],
};

// ─────────────── 7.6 Error correction + concluding sentences (RW ص 164) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const errorCorrection: Topic = {
    slug: 'error-correction-and-concluding-sentences',
    title: 'Error correction and concluding sentences',
    titleAr: 'رموز تصحيح الأخطاء والجملة الختامية',
    keywords: ['error correction', 'correction codes', 'concluding sentence', 'conclusion', 'paragraph', 'تصحيح', 'أخطاء', 'جملة ختامية', 'بارقراف', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Error correction and concluding sentences',
            warmup: {
                q: 'المدرس كتب [SP] جنب كلمة في كتابتك. وش يعني؟',
                choices: ['خطأ قواعد', 'خطأ إملائي', 'كلمة ناقصة'],
                answer: 1,
                why: 'SP = spelling.',
            },
            blocks: [
                { type: 'text', text: 'المدرس ما يصحح لك، يحط رمز جنب الخطأ وأنت تصلحه. هنا كل رمز بجملة: الخطأ بالأحمر، والصح تحته.' },

                { type: 'heading', text: 'الرمز 1: [G] grammar' },
                { type: 'text', view: 'both', text: 'خطأ قواعد: مثل الفعل ما يناسب الفاعل.' },
                { type: 'breakdown', view: 'both', parts: [['Honey'], ['are', 'x', '[G]'], ['sweet'], ['.', 'p']], ar: 'الصح: Honey is sweet.' },
                { type: 'breakdown', parts: [['Dates'], ['is', 'x', '[G]'], ['very sweet'], ['.', 'p']], ar: 'الصح: Dates are very sweet.' },

                { type: 'heading', text: 'الرمز 2: [SP] spelling و [CL] capital letter' },
                { type: 'text', view: 'both', text: '[SP] خطأ إملائي، و [CL] الكلمة تحتاج حرف كبير.' },
                { type: 'breakdown', view: 'both', parts: [['They are'], ['delicus', 'x', '[SP]'], ['.', 'p']], ar: 'الصح: delicious.' },
                { type: 'breakdown', view: 'both', parts: [['It is an'], ['arab', 'x', '[CL]'], ['dish'], ['.', 'p']], ar: 'الصح: Arab.' },

                { type: 'heading', text: 'الرمز 3: [MW] missing word و [WP] wrong preposition' },
                { type: 'text', view: 'both', text: '[MW] ناقص كلمة (مكانها ^)، و [WP] حرف الجر غلط.' },
                { type: 'breakdown', view: 'both', parts: [['I drink tea'], ['^', 'x', '[MW]'], ['sugar'], ['.', 'p']], ar: 'الصح: I drink tea with sugar.' },
                { type: 'breakdown', view: 'both', parts: [['It is served'], ['for', 'x', '[WP]'], ['bread'], ['.', 'p']], ar: 'الصح: served with bread.' },

                { type: 'heading', text: 'الرمز 4: [P] punctuation و [C] content' },
                { type: 'text', view: 'both', text: '[P] علامة ترقيم ناقصة أو غلط، و [C] المعلومة نفسها غلط.' },
                { type: 'breakdown', view: 'both', parts: [['I like almonds'], ['^', 'x', '[P]']], ar: 'الصح: I like almonds. (ناقص نقطة)' },
                { type: 'breakdown', view: 'both', parts: [['Kabsa is from'], ['Japan', 'x', '[C]'], ['.', 'p']], ar: 'المعلومة غلط. الصح: Kabsa is from Saudi Arabia.' },
                { type: 'try', task: 'صحح: my favourite food are kabsa it is cooked with chiken.', reference: 'My favourite food is kabsa. It is cooked with chicken.', placeholder: 'My favourite food …' },

                { type: 'heading', text: 'الجملة الختامية' },
                { type: 'text', view: 'both', text: 'آخر جملة في البارقراف تعيد الفكرة بكلام ثاني، وما تضيف فكرة جديدة. ومطلوبة في تكليف 3.' },
                { type: 'breakdown', view: 'both', parts: [['There are many delicious dishes in Saudi Arabia.', 's', 'Topic'], ['Kabsa is rice with meat. Jareesh is made with wheat.', 'v', 'Supporting'], ['Saudi food is tasty and different in every region.', 'n', 'Concluding']] },
                { type: 'breakdown', parts: [['France is known for its bakeries.', 's', 'Topic'], ['You can get delicious bread and cakes there.', 'v', 'Supporting'], ['French bakeries are famous around the world.', 'n', 'Concluding']] },
                { type: 'try', task: 'اكتب concluding sentence لبارقراف عن أكل مدينتك.', placeholder: 'The food in Yanbu is fresh and tasty.' },

                { type: 'note', text: 'غلط شائع في الختامية: تضيف معلومة جديدة (Also, pizza is from Italy.) بدل ما تعيد الفكرة.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Which code?',
                    instructions: 'وش رمز الخطأ؟',
                    items: [
                        { q: 'Dates is very sweet.', choices: ['[G]', '[SP]', '[CL]'], a: '[G]' },
                        { q: 'Kabsa is served for salad.', choices: ['[WP]', '[SP]', '[G]'], a: '[WP]' },
                        { q: 'My favourite cusine is Indian food.', choices: ['[SP]', '[CL]', '[P]'], a: '[SP]' },
                        { q: 'I drink coffee milk.', choices: ['[MW]', '[G]', '[C]'], a: '[MW]' },
                        { q: 'Sushi is from Egypt.', choices: ['[C]', '[CL]', '[G]'], a: '[C]' },
                        { q: 'I like almonds', choices: ['[P]', '[SP]', '[G]'], a: '[P]' },
                        { q: 'We eat dates in ramadan.', choices: ['[CL]', '[WP]', '[C]'], a: '[CL]' },
                        { q: 'It is made for wheat and milk.', choices: ['[WP]', '[MW]', '[SP]'], a: '[WP]' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Concluding sentence',
                    instructions: 'اختر أفضل جملة ختامية.',
                    items: [
                        { q: 'At a Saudi restaurant, you can find delicious dishes. Kabsa is rice with chicken. Mandi is cooked under the ground.', choices: ['Saudi restaurants have many delicious dishes.', 'My brother likes pizza.', 'Mandi is very hot.'], a: 'Saudi restaurants have many delicious dishes.' },
                        { q: 'France is known for its bakeries. You can get delicious bread and cakes there.', choices: ['French bakeries are famous around the world.', 'Paris is the capital of France.'], a: 'French bakeries are famous around the world.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 7.7 Vocabulary: food and drink (RW ص 157، LS الوحدة 7) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const foodVocab: Topic = {
    slug: 'food-and-drink',
    title: 'Food and drink',
    titleAr: 'مفردات: الأكل والشرب',
    keywords: ['food', 'drink', 'dish', 'cuisine', 'spicy', 'sweet', 'savoury', 'served with', 'made with', 'dates', 'honey', 'أكل', 'شرب', 'طبخ', 'مفردات', 'كلمات', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Food and drink',
            warmup: {
                q: 'أكل فيه فلفل حار كثير:',
                choices: ['sweet', 'spicy', 'savoury'],
                answer: 1,
                why: 'spicy = حار. sweet = حلو. savoury = مالح (مو حلو).',
            },
            blocks: [
                { type: 'text', text: 'نتعلم الكلمات من قائمة مطعم سعودي. الكلمة المهمة ملونة ومعناها تحتها.' },

                { type: 'heading', text: 'المجموعة 1: وصف الطبق' },
                { type: 'text', view: 'both', text: 'من وش مصنوع، ومع وش يتقدم.' },
                { type: 'formula', parts: [['Dish', 's'], ['is made with', 'v'], ['ingredients', 'n'], ['|'], ['is served with', 'v'], ['side dish', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Kabsa is a traditional'], ['dish', 'n', 'طبق'], ['made with', 'v', 'مصنوع من'], ['rice, chicken and'], ['spices', 'n', 'بهارات'], ['.', 'p']] },
                { type: 'breakdown', parts: [['It is'], ['served with', 'v', 'يتقدم مع'], ['salad and'], ['yoghurt', 'n', 'زبادي'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Jareesh is made with'], ['wheat', 'n', 'قمح'], ['and milk'], ['.', 'p']] },
                { type: 'try', task: 'وصّف أكلة: من وش مصنوعة ومع وش تنقدم.', placeholder: 'Mandi is made with rice and meat. It is served with sauce.' },

                { type: 'heading', text: 'المجموعة 2: الطعم' },
                { type: 'breakdown', view: 'both', parts: [['Mutabbaq can be'], ['sweet', 'adj', 'حلو'], ['(with honey) or'], ['savoury', 'adj', 'مالح'], ['(with meat)'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Chillies', 'n', 'فلفل حار'], ['make food'], ['spicy', 'adj', 'حار'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The soup is'], ['delicious', 'adj', 'لذيذ'], ['and'], ['tasty', 'adj', 'طعمه حلو'], ['.', 'p']] },
                { type: 'try', task: 'وش طعم أكلتك المفضلة؟', placeholder: 'Kabsa is a little spicy and very tasty.' },

                { type: 'heading', text: 'المجموعة 3: المكونات' },
                { type: 'breakdown', view: 'both', parts: [['Arabic coffee is served with'], ['dates', 'n', 'تمر'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I eat bread with'], ['honey', 'n', 'عسل'], ['or'], ['jam', 'n', 'مربى'], ['.', 'p']] },
                { type: 'breakdown', parts: [['This cake has'], ['almonds', 'n', 'لوز'], ['on top'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Japanese'], ['cuisine', 'n', 'مطبخ (أكل بلد)'], ['has a lot of fish'], ['.', 'p']] },
                { type: 'try', task: 'وش تطلب لو رحت مطعم؟', placeholder: "I'd like kabsa with yoghurt, please. And some dates." },

                { type: 'note', text: 'غلط شائع: made from / served by ✗ في هالدرس، والصح made with و served with.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the word',
                    instructions: 'اختر الكلمة المناسبة.',
                    items: [
                        { q: 'Bees make ___.', choices: ['honey', 'jam', 'milk'], a: 'honey' },
                        { q: 'I don’t like ___ food. It burns my mouth!', choices: ['spicy', 'sweet', 'savoury'], a: 'spicy' },
                        { q: 'Japanese ___ has a lot of fish.', choices: ['cuisine', 'dish', 'spice'], a: 'cuisine' },
                        { q: 'Cakes and biscuits are ___.', choices: ['sweet', 'savoury', 'spicy'], a: 'sweet' },
                        { q: 'Shawarma is a ___ dish with meat.', choices: ['savoury', 'sweet'], a: 'savoury' },
                        { q: 'Kabsa is ___ with salad and yoghurt.', choices: ['served', 'made', 'cooked'], a: 'served' },
                        { q: 'Jareesh is made with ___ and milk.', choices: ['wheat', 'honey', 'jam'], a: 'wheat' },
                        { q: 'Arabic coffee is usually served with ___.', choices: ['dates', 'chillies', 'onions'], a: 'dates' },
                        { q: 'Kabsa has a lot of ___ like cumin and cardamom.', choices: ['spices', 'almonds', 'yoghurt'], a: 'spices' },
                        { q: 'This cake is very ___. I want more!', choices: ['delicious', 'spicy', 'savoury'], a: 'delicious' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 7.8 Skills: skimming، taking notes، listening for numbers (RW ص 152 و153، LS الوحدة 7) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const unit7Skills: Topic = {
    slug: 'skimming-notes-numbers',
    title: 'Skimming, taking notes and listening for numbers',
    titleAr: 'مهارات: القراءة السريعة وأخذ الملاحظات والأرقام',
    keywords: ['skimming', 'skim', 'taking notes', 'numbers', 'teen', 'ty', 'thirteen thirty', 'pie chart', 'مهارات', 'أرقام', 'قراءة سريعة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Skimming, taking notes and listening for numbers',
            warmup: {
                q: 'thirteen ولا thirty: وين النبرة في thirteen؟',
                choices: ['THIR-teen', 'thir-TEEN'],
                answer: 1,
                why: 'teen مضغوطة، و ty خفيفة.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مهارات: تقرأ بسرعة للفكرة، وتنظّم ملاحظاتك في جدول، وتفرق بين 13 و 30 في الاستماع.' },

                { type: 'heading', text: 'المهارة 1: Skimming للفكرة' },
                { type: 'text', view: 'both', text: 'اقرأ العنوان وأول جملة وآخر جملة بس، وطلع الفكرة.' },
                { type: 'formula', parts: [['Title', 's'], ['+'], ['First sentence', 'n'], ['+'], ['Last sentence', 'n'], ['→'], ['Main idea', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Tea Around the World', 's', 'Title'], ['People drink tea in many countries.', 'n', 'First sentence'], ['Every country has its own tea culture.', 'n', 'Last sentence'], ['tea in different countries', 'v', 'Main idea']] },
                { type: 'try', task: 'العنوان "Breakfast in Japan"، وأول جملة "Japanese people eat a big breakfast." وش الفكرة؟', reference: 'what Japanese people eat for breakfast', placeholder: 'what …' },

                { type: 'heading', text: 'المهارة 2: Scanning و taking notes' },
                { type: 'text', view: 'both', text: 'دوّر على معلومة محددة، واكتبها في جدول تحت عنوانها.' },
                { type: 'breakdown', view: 'both', parts: [['In Malaysia', 's', 'Country'], [', people make tea'], ['with milk and sugar', 'v', 'How?'], ['and eat it with'], ['roti canai', 'n', 'Food'], ['.', 'p']] },
                { type: 'breakdown', parts: [['In the UK', 's', 'Country'], [', people drink tea'], ['with milk', 'v', 'How?'], ['and eat'], ['biscuits', 'n', 'Food'], ['.', 'p']] },
                {
                    type: 'table',
                    head: ['Country', 'How?', 'Food'],
                    rows: [['Malaysia', 'with milk and sugar', 'roti canai'], ['UK', 'with milk', 'biscuits']],
                },
                { type: 'try', task: 'اكتب ملاحظات بنفس الجدول عن الشاي في بلدك.', placeholder: 'Saudi Arabia – with mint – dates' },

                { type: 'heading', text: 'المهارة 3: teen ولا ty؟' },
                { type: 'text', view: 'both', text: 'في teen النبرة على آخر الكلمة، وفي ty على أولها.' },
                { type: 'breakdown', view: 'both', parts: [['thir'], ['TEEN', 'x', 'Stress'], ['= 13', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['THIR', 'x', 'Stress'], ['ty'], ['= 30', 'n']] },
                { type: 'breakdown', parts: [['fif'], ['TEEN', 'x', 'Stress'], ['= 15', 'n'], ['|'], ['FIF', 'x', 'Stress'], ['ty'], ['= 50', 'n']] },
                { type: 'breakdown', parts: [['Forty-five percent', 'x', '45%'], ['of students eat breakfast at home'], ['.', 'p']], ar: 'وفي الرسم الدائري الأرقام نسب.' },
                { type: 'try', task: 'اكتب الأرقام بالكلمات: 13، 30، 18، 80.', reference: 'thirteen, thirty, eighteen, eighty', placeholder: 'thirteen, …' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Skimming or scanning?',
                    instructions: 'أي مهارة تستخدم؟',
                    choices: ['skimming', 'scanning'],
                    items: [
                        { q: 'What is the main idea of the text?', a: 'skimming' },
                        { q: 'What year did the restaurant open?', a: 'scanning' },
                        { q: 'Which paragraph is about the history of tea?', a: 'skimming' },
                        { q: 'How much does the dish cost?', a: 'scanning' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: -teen or -ty?',
                    instructions: 'وش الرقم؟',
                    items: [
                        { q: 'FOR-ty', choices: ['14', '40'], a: '40' },
                        { q: 'fif-TEEN', choices: ['15', '50'], a: '15' },
                        { q: 'EIGH-ty', choices: ['18', '80'], a: '80' },
                        { q: 'nine-TEEN', choices: ['19', '90'], a: '19' },
                        { q: 'SIX-ty', choices: ['16', '60'], a: '60' },
                        { q: 'thir-TEEN', choices: ['13', '30'], a: '13' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 7: popular food in your country + survey report (RW ص 165 و166، LS الوحدة 7) ───────────────
// نمط أول أربع دروس: 3 بارقرافات، كل واحد: topic ← supporting ← concluding ملونة ← كتابة.
const unit7Task: Topic = {
    slug: 'popular-food-in-your-country',
    title: 'Writing task: popular food in your country',
    titleAr: 'مهمة الوحدة: أكل مشهور في بلدك',
    keywords: ['writing task', 'popular food', 'descriptive paragraph', 'food paragraph', 'survey', 'report', 'بارقراف', 'كتابة', 'أكل', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: popular food in your country',
            warmup: {
                q: 'كل بارقراف في المهمة ينتهي بـ:',
                choices: ['concluding sentence', 'سؤال', 'رقم'],
                answer: 0,
                why: 'المهمة 3 بارقرافات، وكل واحد ينتهي بجملة ختامية.',
            },
            blocks: [
                { type: 'text', text: 'المهمة: 3 بارقرافات عن الأكل المشهور في بلدك. كل بارقراف: topic، ثم تفاصيل، ثم جملة ختامية.' },

                { type: 'heading', text: 'البارقراف 1: وش ياكل الناس' },
                { type: 'breakdown', view: 'both', parts: [['Saudi people eat a lot of rice and meat.', 's', 'Topic'], ['Two popular dishes are kabsa and jareesh.', 'v', 'Supporting'], ['Food is an important part of our culture.', 'n', 'Concluding']] },
                { type: 'try', task: 'اكتب البارقراف الأول عن بلدك.', placeholder: '… people eat a lot of …' },

                { type: 'heading', text: 'البارقراف 2: الأكلة الأولى' },
                { type: 'breakdown', view: 'both', parts: [['Kabsa is a traditional dish.', 's', 'Topic'], ['It is made with rice, chicken and spices. It is served with salad.', 'v', 'Supporting'], ['It is a delicious meal for the whole family.', 'n', 'Concluding']], ar: 'made with = مصنوع من، و served with = يتقدم مع.' },
                { type: 'try', task: 'اكتب عن أكلة: من وش، ومع وش، وجملة ختامية.', placeholder: '… is a traditional dish. It is made with …' },

                { type: 'heading', text: 'البارقراف 3: الأكلة الثانية' },
                { type: 'breakdown', view: 'both', parts: [['Jareesh is popular in Najd.', 's', 'Topic'], ['It is made with wheat, milk and some meat. Many families eat it in Ramadan.', 'v', 'Supporting'], ['It is simple but very tasty.', 'n', 'Concluding']], ar: 'some + اللي ما ينعد (meat).' },
                { type: 'try', task: 'اكتب البارقراف الثالث.', placeholder: '… is popular in …' },

                { type: 'note', text: 'قبل ما ترسل: الفعل يناسب الفاعل (Rice is، Dates are)، و a / an / some صحيحة، وكل بارقراف له جملة ختامية.' },
                { type: 'try', view: 'both', task: 'اجمع البارقرافات الثلاثة وراجعها.', placeholder: '… people eat a lot of …' },

                { type: 'heading', text: 'التحدث: تقرير استبيان' },
                { type: 'text', view: 'both', text: 'تقديم، ثم كم سألت، ثم النتائج بالأرقام، بالماضي.' },
                { type: 'breakdown', view: 'both', parts: [['We asked', 'v', 'Past'], ['20 students', 'n', 'How many?'], ['about breakfast'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Twelve students', 'n', 'Result'], ['ate', 'v', 'Past'], ['breakfast at home yesterday'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Five students', 'n', 'Result'], ["didn't eat", 'v', 'Past negative'], ['breakfast'], ['.', 'p']] },
                { type: 'try', task: 'اكتب 3 جمل تقرير عن استبيان (اخترع الأرقام).', placeholder: 'We asked 10 students about lunch. Six students …' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Check the paragraphs',
                    instructions: 'هذي جمل من بارقرافات طالب. اختر الصحيح.',
                    items: [
                        { q: 'Rice ___ very popular in my country.', choices: ['is', 'are'], a: 'is' },
                        { q: 'Dates ___ sweet.', choices: ['is', 'are'], a: 'are' },
                        { q: 'Kabsa is made ___ rice and chicken.', choices: ['with', 'for'], a: 'with' },
                        { q: 'It is served with ___ salad.', choices: ['a', 'some'], a: 'some' },
                        { q: 'Mandi is ___ traditional dish.', choices: ['a', 'an'], a: 'a' },
                        { q: 'Saudi people ___ a lot of coffee.', choices: ['drink', 'drinks'], a: 'drink' },
                        { q: 'Twelve students ___ breakfast at home yesterday.', choices: ['eat', 'ate'], a: 'ate' },
                        { q: 'Which is a good concluding sentence?', choices: ['Saudi food is tasty and different in every region.', 'Pizza is from Italy.'], a: 'Saudi food is tasty and different in every region.' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT7_TOPICS: Topic[] = [countable, canCannot, sva, determiners, pastSimple1, errorCorrection, foodVocab, unit7Skills, unit7Task];
