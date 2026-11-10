// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 4: Places
// درس There is / There are (4.2) موجود في الوحدة 2 (2.4).
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 4 · Places';
const base = ['تحضيري', 'ENG 001', 'Unit 4', 'Places'];

// ─────────────── 4.1 Noun phrases with of (RW ص 90) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const nounPhrasesOf: Topic = {
    slug: 'noun-phrases-with-of',
    title: 'Noun phrases with of',
    titleAr: 'noun phrases مع of',
    keywords: ['noun phrase with of', 'of', 'the capital of', 'the currency of', 'noun of noun', 'شبه جملة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Noun phrases with of',
            warmup: {
                q: 'كيف تقول "عاصمة السعودية"؟',
                choices: ['Saudi Arabia capital', 'the capital of Saudi Arabia', 'the Saudi Arabia of capital'],
                answer: 1,
                why: 'نستخدم the + اسم + of + اسم.',
            },
            blocks: [
                { type: 'text', text: 'تحتاج هالشكل لما تعطي معلومات عن بلد أو مدينة (عاصمتها، وعملتها، وتاريخها). في العربي نقول "عاصمة السعودية". في الإنجليزي نفس الترتيب، بس قبل الأول the وبينهم of.' },
                { type: 'formula', parts: [['the'], ['Noun 1', 'n'], ['of', 'x', 'of'], ['Noun 2', 's']] },

                { type: 'heading', text: 'المجال 1: العاصمة' },
                { type: 'text', view: 'both', text: 'وش عاصمة الدولة؟' },
                { type: 'breakdown', view: 'both', parts: [['Riyadh'], ['is'], ['the'], ['capital', 'n', 'Noun 1'], ['of', 'x', 'of'], ['Saudi Arabia', 's', 'Noun 2'], ['.', 'p']] },
                { type: 'breakdown', view: 'both', parts: [['Cairo'], ['is'], ['the'], ['capital', 'n', 'Noun 1'], ['of', 'x', 'of'], ['Egypt', 's', 'Noun 2'], ['.', 'p']] },
                { type: 'breakdown', view: 'both', parts: [['London'], ['is'], ['the'], ['capital', 'n', 'Noun 1'], ['of', 'x', 'of'], ['the United Kingdom', 's', 'Noun 2'], ['.', 'p']] },
                { type: 'try', task: 'اكتب عاصمة دولة تعرفها.', placeholder: 'Muscat is the capital of Oman.' },

                { type: 'heading', text: 'المجال 2: العملة' },
                { type: 'text', view: 'both', text: 'ويجي في أول الجملة بعد.' },
                { type: 'breakdown', view: 'both', parts: [['The riyal'], ['is'], ['the'], ['currency', 'n', 'Noun 1'], ['of', 'x', 'of'], ['Saudi Arabia', 's', 'Noun 2'], ['.', 'p']] },
                { type: 'breakdown', view: 'both', parts: [['The'], ['currency', 'n', 'Noun 1'], ['of', 'x', 'of'], ['the UAE', 's', 'Noun 2'], ['is the dirham'], ['.', 'p']], ar: 'هنا الـ noun phrase فاعل في أول الجملة.' },
                { type: 'try', task: 'وش عملة دولة ثانية تعرفها؟', placeholder: 'The currency of Japan is the yen.' },

                { type: 'heading', text: 'المجال 3: الوسط والمكان' },
                { type: 'breakdown', view: 'both', parts: [['The old market is in'], ['the'], ['centre', 'n', 'Noun 1'], ['of', 'x', 'of'], ['Jeddah', 's', 'Noun 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Tabuk is in'], ['the'], ['north', 'n', 'Noun 1'], ['of', 'x', 'of'], ['Saudi Arabia', 's', 'Noun 2'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن مكان في وسط مدينتك.', placeholder: 'There is a big mosque in the centre of Yanbu.' },

                { type: 'heading', text: 'المجال 4: التاريخ واللغات' },
                { type: 'breakdown', view: 'both', parts: [['This book is about'], ['the'], ['history', 'n', 'Noun 1'], ['of', 'x', 'of'], ['AlUla', 's', 'Noun 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['English and French are'], ['the two main'], ['languages', 'n', 'Noun 1'], ['of', 'x', 'of'], ['Canada', 's', 'Noun 2'], ['.', 'p']] },
                { type: 'try', task: 'وش اللغة الرسمية في دولة تعرفها؟', placeholder: 'Arabic is the official language of Jordan.' },

                { type: 'note', text: 'غلط شائع: Egypt capital ✗، و Riyadh is capital of Saudi Arabia ✗ (ناقص the).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the correct phrase',
                    instructions: 'اختر الصحيح.',
                    items: [
                        { q: 'London is ___.', choices: ['the capital of the United Kingdom', 'the United Kingdom capital of'], a: 'the capital of the United Kingdom' },
                        { q: 'The yen is ___.', choices: ['the currency of Japan', 'Japan of the currency'], a: 'the currency of Japan' },
                        { q: 'This book is about ___.', choices: ['the history of Islam', 'history the of Islam'], a: 'the history of Islam' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Write',
                    instructions: 'اكتب جملة كاملة فيها noun phrase مع of.',
                    items: [
                        { q: 'Madrid / capital / Spain', a: 'Madrid is the capital of Spain.' },
                        { q: 'English and French / two main languages / Canada', a: 'English and French are the two main languages of Canada.' },
                        { q: '35 °C / average summer temperature / Kuwait', a: '35 °C is the average summer temperature of Kuwait.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Fix the phrase',
                    instructions: 'كل جملة فيها خطأ في الـ noun phrase: اكتبها صحيحة.',
                    items: [
                        { q: 'Cairo is Egypt capital.', a: 'Cairo is the capital of Egypt.' },
                        { q: 'The market is in centre the city.', a: 'The market is in the centre of the city.' },
                        { q: 'Riyal is currency of Saudi Arabia.', a: 'The riyal is the currency of Saudi Arabia.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 4.3 Articles: a / an / the / Ø (RW ص 95) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const articles: Topic = {
    slug: 'articles',
    title: 'Articles: a, an, the and no article',
    titleAr: 'أدوات التعريف والتنكير a / an / the',
    keywords: ['articles', 'article', 'a an', 'the', 'zero article', 'no article', 'أداة التعريف', 'ال التعريف', 'a or an', ...base, 'Unit 7'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Articles: a, an, the and no article',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: '___ Louvre Museum is in ___ Paris.',
                choices: ['Ø / Ø', 'The / Ø', 'The / the'],
                answer: 1,
                why: 'الأماكن المشهورة تاخذ the، والمدن بدون أداة (Ø = ما فيه أداة).',
            },
            blocks: [
                { type: 'text', text: 'الأداة كلمة صغيرة قبل الاسم. a و an تشبه التنوين في العربي (مدينةٌ: أي مدينة)، و the تشبه "الـ" (المدينة: مدينة معروفة). وأحيانًا ما نحط شي (Ø). الأداة بالأحمر في كل جملة.' },

                { type: 'heading', text: 'الأداة 1: a + صوت ساكن' },
                { type: 'text', view: 'both', text: 'لشي واحد، أول مرة تذكره، والكلمة اللي بعدها تبدأ بصوت ساكن (أي حرف غير a و e و i و o و u).' },
                { type: 'formula', parts: [['a', 'x', 'Article'], ['consonant sound', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Yanbu is'], ['a', 'x', 'Article'], ['city', 'n'], ['on the Red Sea'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My uncle is'], ['a', 'x', 'Article'], ['pilot', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['He studies at'], ['a', 'x', 'Article'], ['university', 'n', '/juː/ sound'], ['.', 'p']], ar: 'university تبدأ بصوت "يو"، فتاخذ a.' },
                { type: 'try', task: 'اكتب وظيفة شخص من عائلتك بـ a.', placeholder: 'My brother is a teacher.' },

                { type: 'heading', text: 'الأداة 2: an + صوت علة' },
                { type: 'text', view: 'both', text: 'إذا الكلمة تبدأ بصوت a، e، i، o، u. العبرة بالصوت مو بالحرف.' },
                { type: 'formula', parts: [['an', 'x', 'Article'], ['vowel sound', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['She is'], ['an', 'x', 'Article'], ['engineer', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Jeddah is'], ['an', 'x', 'Article'], ['old', 'adj'], ['city', 'n'], ['.', 'p']], ar: 'الصفة old هي اللي بعد الأداة، فنقول an.' },
                { type: 'breakdown', parts: [['It takes'], ['an', 'x', 'Article'], ['hour', 'n', 'h silent'], ['.', 'p']], ar: 'h ما تنطق، فأول صوت a.' },
                { type: 'try', task: 'اكتب جملة فيها an.', placeholder: 'My aunt is an artist.' },

                { type: 'heading', text: 'الأداة 3: the للشي المعروف' },
                { type: 'text', view: 'both', text: 'أول مرة a، وثاني مرة the لأن القارئ عرف أي واحد.' },
                { type: 'formula', parts: [['a', 'x', '1st time'], ['→'], ['the', 'x', '2nd time']] },
                { type: 'breakdown', view: 'both', parts: [['There is'], ['a', 'x', '1st time'], ['mosque', 'n'], ['near my house.'], ['The', 'x', '2nd time'], ['mosque', 'n'], ['is very old'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I bought'], ['a', 'x', '1st time'], ['book.'], ['The', 'x', '2nd time'], ['book', 'n'], ['is about AlUla'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين: الأولى تذكر شي بـ a، والثانية تكمل عنه بـ the.', placeholder: 'I have a cat. The cat is white.' },

                { type: 'heading', text: 'الأداة 4: the مع أماكن معينة' },
                { type: 'text', view: 'both', text: 'الأنهار، والبحار، والمحيطات، والأماكن المشهورة، والدول اللي فيها United، وجزر أو جبال كمجموعة.' },
                { type: 'breakdown', view: 'both', parts: [['The', 'x', 'River'], ['Nile', 'n'], ['is a long river'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We swam in'], ['the', 'x', 'Sea'], ['Red Sea', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My uncle lives in'], ['the', 'x', 'United'], ['UAE', 'n'], ['.', 'p']], ar: 'ومثلها the UK و the USA.' },
                { type: 'breakdown', parts: [['We visited'], ['the', 'x', 'Islands'], ['Maldives', 'n'], ['.', 'p']], ar: 'ومثلها the Alps للجبال.' },
                { type: 'try', task: 'اكتب جملة عن بحر أو نهر تعرفه.', placeholder: 'Yanbu is on the Red Sea.' },

                { type: 'heading', text: 'الأداة 5: Ø بدون أداة' },
                { type: 'text', view: 'both', text: 'المدن، وأغلب الدول، والقارات، والبحيرات. (Ø يعني ما تكتب شي.)' },
                { type: 'breakdown', view: 'both', parts: [['Ø', 'x', 'No article'], ['Jeddah', 'n', 'City'], ['is in'], ['Ø', 'x', 'No article'], ['Saudi Arabia', 'n', 'Country'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Ø', 'x', 'No article'], ['Egypt', 'n', 'Country'], ['is in'], ['Ø', 'x', 'No article'], ['Africa', 'n', 'Continent'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Ø', 'x', 'No article'], ['Lake Victoria', 'n', 'Lake'], ['is very big'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن مكان تبي تسافر له، وانتبه للأدوات.', placeholder: 'I want to visit Paris in France.' },

                { type: 'note', text: 'غلط شائع: a engineer ✗، و the Riyadh ✗، و United Kingdom ✗ (الصح the United Kingdom).' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: a or an?',
                    instructions: 'اختر a أو an.',
                    choices: ['a', 'an'],
                    items: [
                        { q: 'He is ___ manager.', a: 'a' },
                        { q: 'She works in ___ office.', a: 'an' },
                        { q: 'He studies at ___ university.', a: 'a' },
                        { q: 'It takes ___ hour.', a: 'an' },
                        { q: 'Tabuk has ___ cold winter.', a: 'a' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: the or no article?',
                    instructions: 'اختر the أو — (بدون أداة).',
                    choices: ['the', '—'],
                    items: [
                        { q: 'We swam in ___ Red Sea.', a: 'the' },
                        { q: '___ Egypt is in Africa.', a: '—' },
                        { q: 'We visited ___ Pyramids.', a: 'the' },
                        { q: 'My cousin lives in ___ Jeddah.', a: '—' },
                        { q: '___ Nile is a long river.', a: 'the' },
                        { q: 'Lake Victoria is in ___ Africa.', a: '—' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'She wants to visit _______ France to see _______ Eiffel Tower in Paris.', choices: ['zero article / the', 'the / zero article', 'a / the', 'the / a'], a: 'zero article / the' },
                        { q: 'I saw ___ elephant at the zoo. ___ elephant was very big.', choices: ['zero article / the', 'an / the', 'a / zero article', 'the / a'], a: 'an / the' },
                        { q: '___ Jeddah is in ___ Saudi Arabia.', choices: ['The / the', 'Ø / Ø', 'The / Ø'], a: 'Ø / Ø' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Correct the mistake',
                    instructions: 'كل جملة فيها خطأ في الأداة: اكتبها صحيحة.',
                    items: [
                        { q: 'She is a engineer.', a: 'She is an engineer.' },
                        { q: 'I live in the Riyadh.', a: 'I live in Riyadh.' },
                        { q: 'United Kingdom is in Europe.', a: 'The United Kingdom is in Europe.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 4.4 Prepositions of place (LS ص 92 و93) ───────────────
// نفس نمط أول أربع دروس: خريطة وحدة فوق، وبعدها كل حرف جر قسم لحاله:
// سطر شرح ← معادلة ← جمل ملونة من الخريطة ← مربع كتابة.
const STREET_MAP: string[][] = [
    ['🅿️ Car park', '', '', ''],
    ['🏦 Bank', '☕ Café', '💊 Pharmacy', '📚 Library'],
    ['', '', '', '🚏 Bus stop'],
    ['~KING FAHD ROAD'],
    ['🌳 Park', '🏥 Hospital', '🏨 Hotel', '🕌 Mosque'],
];

const prepositionsOfPlace: Topic = {
    slug: 'prepositions-of-place',
    title: 'Prepositions of place',
    titleAr: 'حروف الجر للمكان',
    keywords: ['prepositions of place', 'next to', 'between', 'opposite', 'in front of', 'behind', 'near', 'on the corner', 'map', 'مكان', 'حروف الجر', 'خريطة', 'وين', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Prepositions of place',
            warmup: {
                q: 'المقهى في النص، وعلى يمينه البنك وعلى يساره الصيدلية. نقول:',
                choices: ['The café is between the bank and the pharmacy.', 'The café is between the bank to the pharmacy.'],
                answer: 0,
                why: 'between … and …: بين شيئين، ودايم معها and. تحت كل حرف جر على الخريطة.',
            },
            blocks: [
                { type: 'text', text: 'حروف جر المكان تقول وين الشي بالنسبة لشي ثاني. كل الأمثلة تحت عن هذي الخريطة، والصف اللي فوق ورا المباني، والشارع قدامها.' },
                { type: 'map', rows: STREET_MAP },
                { type: 'formula', parts: [['Place 1', 's'], ['is', 'v'], ['preposition', 'sub', 'Preposition'], ['Place 2', 'n']] },

                { type: 'heading', text: 'الحرف 1: next to (جنب)' },
                { type: 'text', view: 'both', text: 'ملاصق له مباشرة، على نفس الصف.' },
                { type: 'breakdown', view: 'both', parts: [['The bank', 's', 'Place 1'], ['is', 'v'], ['next to', 'sub', 'Preposition'], ['the café', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The library', 's', 'Place 1'], ['is', 'v'], ['next to', 'sub', 'Preposition'], ['the pharmacy', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The hospital', 's', 'Place 1'], ['is', 'v'], ['next to', 'sub', 'Preposition'], ['the park', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'try', task: 'وش اللي جنب المسجد في الخريطة؟ اكتب جملة فيها next to.', reference: 'The mosque is next to the hotel.', placeholder: 'The mosque is next to …' },

                { type: 'heading', text: 'الحرف 2: between … and … (بين)' },
                { type: 'text', view: 'both', text: 'في النص بين مكانين، ودايم معها and.' },
                { type: 'formula', parts: [['Place 1', 's'], ['is', 'v'], ['between', 'sub', 'Preposition'], ['Place 2', 'n'], ['and'], ['Place 3', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['The café', 's', 'Place 1'], ['is', 'v'], ['between', 'sub', 'Preposition'], ['the bank', 'n', 'Place 2'], ['and'], ['the pharmacy', 'n', 'Place 3'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The hotel', 's', 'Place 1'], ['is', 'v'], ['between', 'sub', 'Preposition'], ['the hospital', 'n', 'Place 2'], ['and'], ['the mosque', 'n', 'Place 3'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The pharmacy', 's', 'Place 1'], ['is', 'v'], ['between', 'sub', 'Preposition'], ['the café', 'n', 'Place 2'], ['and'], ['the library', 'n', 'Place 3'], ['.', 'p']] },
                { type: 'try', task: 'وين المستشفى؟ اكتب جملة فيها between … and.', reference: 'The hospital is between the park and the hotel.', placeholder: 'The hospital is between …' },

                { type: 'heading', text: 'الحرف 3: opposite (مقابل)' },
                { type: 'text', view: 'both', text: 'في الجهة الثانية من الشارع، بالضبط قباله. وما بعدها of.' },
                { type: 'breakdown', view: 'both', parts: [['The park', 's', 'Place 1'], ['is', 'v'], ['opposite', 'sub', 'Preposition'], ['the bank', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The hospital', 's', 'Place 1'], ['is', 'v'], ['opposite', 'sub', 'Preposition'], ['the café', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The mosque', 's', 'Place 1'], ['is', 'v'], ['opposite', 'sub', 'Preposition'], ['the library', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'try', task: 'وش مقابل الفندق؟ اكتب جملة فيها opposite.', reference: 'The hotel is opposite the pharmacy.', placeholder: 'The hotel is opposite …' },

                { type: 'heading', text: 'الحرف 4: in front of (قدام) و behind (ورا)' },
                { type: 'text', view: 'both', text: 'in front of: بين المكان والشارع. behind: في الصف اللي ورا المكان.' },
                { type: 'breakdown', view: 'both', parts: [['The bus stop', 's', 'Place 1'], ['is', 'v'], ['in front of', 'sub', 'Preposition'], ['the library', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The car park', 's', 'Place 1'], ['is', 'v'], ['behind', 'sub', 'Preposition'], ['the bank', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The library', 's', 'Place 1'], ['is', 'v'], ['behind', 'sub', 'Preposition'], ['the bus stop', 'n', 'Place 2'], ['.', 'p']], ar: 'نفس المكان، بس عكس الجملة الأولى.' },
                { type: 'try', task: 'اكتب جملتين عن الموقف (Car park) في الخريطة: وش وراه؟ وش قدامه؟', reference: 'The car park is behind the bank. The bank is in front of the car park.', placeholder: 'The car park is behind …' },

                { type: 'heading', text: 'الحرف 5: near (قريب) و on (في شارع)' },
                { type: 'text', view: 'both', text: 'near: قريب منه، مو لازم ملاصق. on: مع اسم الشارع، و on the corner of: على الزاوية.' },
                { type: 'breakdown', view: 'both', parts: [['The hotel', 's', 'Place 1'], ['is', 'v'], ['near', 'sub', 'Preposition'], ['the mosque', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The bank', 's', 'Place 1'], ['is', 'v'], ['on', 'sub', 'Preposition'], ['King Fahd Road', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The library', 's', 'Place 1'], ['is', 'v'], ['on the corner of', 'sub', 'Preposition'], ['King Fahd Road', 'n', 'Place 2'], ['.', 'p']] },
                { type: 'try', task: 'وين بيتك؟ اكتب جملة فيها on (اسم شارعك)، وجملة فيها near.', placeholder: 'My house is on Al-Nakheel Street. It is near a big mosque.' },

                { type: 'heading', text: 'الحرف 6: in و on و under (للأشياء الصغيرة)' },
                { type: 'text', view: 'both', text: 'in: داخل. on: فوق ولامس السطح. under: تحت.' },
                { type: 'breakdown', view: 'both', parts: [['My laptop', 's', 'Thing'], ['is', 'v'], ['in', 'sub', 'Preposition'], ['my bag', 'n', 'Place'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The keys', 's', 'Thing'], ['are', 'v'], ['on', 'sub', 'Preposition'], ['the desk', 'n', 'Place'], ['.', 'p']], ar: 'keys جمع، فنقول are.' },
                { type: 'breakdown', parts: [['The cat', 's', 'Thing'], ['is', 'v'], ['under', 'sub', 'Preposition'], ['the chair', 'n', 'Place'], ['.', 'p']] },
                { type: 'try', task: 'وصّف 3 أشياء في غرفتك: وين كل واحد؟', placeholder: 'My phone is on the bed. My books are in my bag. My shoes are under the bed.' },

                { type: 'note', text: 'غلط شائع: next the bank ✗ (الصح next to)، و opposite of the park ✗ (الصح opposite)، و between the bank to the café ✗ (الصح and).' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Read the map',
                    instructions: 'ارجع للخريطة واختر حرف الجر الصحيح، وبعدين اضغط تحقق.',
                    items: [
                        { q: 'The café is ___ the bank and the pharmacy.', choices: ['next to', 'between', 'opposite'], a: 'between' },
                        { q: 'The park is ___ the bank.', choices: ['behind', 'opposite', 'between'], a: 'opposite' },
                        { q: 'The bus stop is ___ the library.', choices: ['in front of', 'behind', 'under'], a: 'in front of' },
                        { q: 'The car park is ___ the bank.', choices: ['behind', 'in front of', 'opposite'], a: 'behind' },
                        { q: 'The hospital is ___ the park.', choices: ['next to', 'between', 'on'], a: 'next to' },
                        { q: 'The mosque is ___ the library.', choices: ['opposite', 'behind', 'between'], a: 'opposite' },
                        { q: 'The library is ___ the corner of King Fahd Road.', choices: ['in', 'on', 'at'], a: 'on' },
                        { q: 'The hotel is ___ the hospital and the mosque.', choices: ['between', 'next to', 'near'], a: 'between' },
                        { q: 'The pharmacy is ___ the library.', choices: ['next to', 'opposite', 'behind'], a: 'next to' },
                        { q: 'All the places are ___ King Fahd Road.', choices: ['in', 'on', 'under'], a: 'on' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: True or false?',
                    instructions: 'حسب الخريطة: الجملة صح ولا غلط؟',
                    choices: ['True', 'False'],
                    items: [
                        { q: 'The hospital is opposite the café.', a: 'True' },
                        { q: 'The car park is in front of the bank.', a: 'False', why: 'هو وراه (behind).' },
                        { q: 'The park is between the bank and the café.', a: 'False', why: 'البارك مقابل البنك، في الجهة الثانية.' },
                        { q: 'The hotel is opposite the pharmacy.', a: 'True' },
                        { q: 'The bus stop is behind the library.', a: 'False', why: 'هو قدامها (in front of).' },
                        { q: 'The mosque is next to the hotel.', a: 'True' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'The drug store is __________ the movie theater and the post office.', choices: ['in front of', 'over', 'between', 'behind'], a: 'between' },
                        { q: 'The book is ___ the box.', choices: ['into', 'across', 'in', 'between'], a: 'in' },
                        { q: 'There are many cafés ___ the school. (all over the area near it)', choices: ['on', 'into', 'along', 'around'], a: 'around' },
                        { q: 'The clinic is across from the park. It is ___ the park.', choices: ['opposite', 'near', 'behind', 'next'], a: 'opposite' },
                        { q: 'Choose the correct sentence.', choices: ['The bank is next the mosque.', 'The bank is next to the mosque.', 'The bank is next of the mosque.'], a: 'The bank is next to the mosque.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Your classroom',
                    instructions: 'وصّف فصلك بجمل كاملة.',
                    items: [
                        { q: 'Where is the board?', a: 'The board is in front of the students.' },
                        { q: 'Where is the door?', a: 'The door is next to the board.' },
                        { q: 'Where is your desk?', a: 'My desk is near the window, between Ali and Saad.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 4.5 The imperative + giving directions (LS ص 94 إلى 97) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const DIRECTIONS_MAP: string[][] = [
    ['🏫 Institute', '', '🏦 Bank', ''],
    ['~FIRST STREET'],
    ['🕌 Mosque', '🚦 Lights', '📚 Library', '☕ Café'],
    ['~SECOND STREET'],
    ['🏥 Hospital', '', '🏬 Mall', '🌳 Park'],
];

const imperative: Topic = {
    slug: 'imperative-and-directions',
    title: 'The imperative and giving directions',
    titleAr: 'جملة الأمر ووصف الطريق',
    keywords: ['imperative', 'directions', 'giving directions', 'asking for directions', 'turn left', 'go straight', 'excuse me', 'أمر', 'وصف الطريق', 'اتجاهات', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'The imperative and giving directions',
            warmup: {
                q: 'وش الصحيح لما توصف الطريق؟',
                choices: ['You turn left.', 'Turn left.', 'Turns left.'],
                answer: 1,
                why: 'جملة الأمر تبدأ بالفعل مباشرة بدون فاعل.',
            },
            blocks: [
                { type: 'text', text: 'لما أحد يسألك عن طريق، تعطيه أوامر قصيرة. هذي اسمها جملة الأمر (imperative): تبدأ بالفعل على طول، بدون فاعل.' },
                { type: 'map', rows: DIRECTIONS_MAP, caption: 'أنت واقف عند المعهد (🏫). كل الأمثلة تبدأ من هنا.' },

                { type: 'heading', text: 'الشكل 1: الفعل أول' },
                { type: 'text', view: 'both', text: 'الفعل الأساسي بدون you وبدون s. أشهرها في الطريق: Turn right (لف يمين)، Turn left (لف يسار)، Go straight on (امش على طول)، Cross (اقطع الشارع)، Go past (تعدّى).' },
                { type: 'formula', parts: [['Base verb', 'v'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [['Turn', 'v'], ['right'], ['at the traffic lights'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Go', 'v'], ['straight on'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Take', 'v'], ['the second left'], ['.', 'p']], ar: 'خذ ثاني لفة يسار.' },
                { type: 'breakdown', parts: [['Open', 'v'], ['your book'], ['.', 'p']], ar: 'والأمر مو بس للطريق: في الفصل بعد.' },
                { type: 'try', task: 'اكتب 3 جمل أمر لزميلك في الفصل.', placeholder: 'Open your book. Write your name. Listen to the teacher.' },

                { type: 'heading', text: "الشكل 2: Don't + الفعل" },
                { type: 'text', view: 'both', text: "للنهي: Don't قبل الفعل." },
                { type: 'formula', parts: [["Don't", 'hv'], ['Base verb', 'v'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [["Don't", 'hv'], ['cross', 'v'], ['here'], ['.', 'p']] },
                { type: 'breakdown', parts: [["Don't", 'hv'], ['turn', 'v'], ['left'], ['.', 'p']] },
                { type: 'breakdown', parts: [["Don't", 'hv'], ['use', 'v'], ['your phone'], ['in class'], ['.', 'p']] },
                { type: 'try', task: "اكتب جملتين بـ Don't عن قوانين فصلك.", placeholder: "Don't be late. Don't eat in class." },

                { type: 'heading', text: 'الشكل 3: طريق على الخريطة' },
                { type: 'text', view: 'both', text: 'من المعهد للمكتبة: كل خطوة جملة أمر، وآخر جملة تقول وين المكان.' },
                { type: 'breakdown', view: 'both', parts: [['Go', 'v'], ['straight on'], ['and'], ['cross', 'v'], ['First Street', 'n'], ['.', 'p']], ar: 'خطوة 1' },
                { type: 'breakdown', view: 'both', parts: [['Walk', 'v'], ['past', 'x', 'Go past'], ['the traffic lights', 'n'], ['.', 'p']], ar: 'خطوة 2' },
                { type: 'breakdown', view: 'both', parts: [['The library', 's'], ['is', 'v'], ['next to', 'x', 'Place'], ['the lights', 'n'], ['.', 'p']], ar: 'خطوة 3: وين المكان.' },
                { type: 'try', task: 'من المعهد في الخريطة: وصّف الطريق للمستشفى.', reference: 'Go straight on. Cross First Street and Second Street. The hospital is opposite the mosque.', placeholder: 'Go straight on …' },

                { type: 'heading', text: 'الشكل 4: السؤال عن الطريق' },
                { type: 'text', view: 'both', text: 'ابدأ بـ Excuse me، وبعدها سؤال.' },
                { type: 'breakdown', view: 'both', parts: [['Excuse me', 'x', 'Polite'], [','], ['where', 's'], ['is', 'v'], ['the library', 'n'], ['?', 'p']] },
                { type: 'breakdown', parts: [['How', 's'], ['do I get to', 'v'], ['the hospital', 'n'], ['?', 'p']] },
                { type: 'try', task: 'اكتب سؤال عن طريق مكان في الخريطة، وجاوبه.', placeholder: 'Excuse me, where is the café? Cross First Street. It is next to the library.' },

                { type: 'note', text: "غلط شائع: You turn left ✗، و Turns left ✗، و Don't turns ✗." },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Correct imperative',
                    instructions: 'اختر جملة الأمر الصحيحة.',
                    items: [
                        { q: '1', choices: ['You go straight on.', 'Go straight on.'], a: 'Go straight on.' },
                        { q: '2', choices: ["Don't turns right.", "Don't turn right."], a: "Don't turn right." },
                        { q: '3', choices: ['Take the first left.', 'Takes the first left.'], a: 'Take the first left.' },
                        { q: '4', choices: ['Not cross the road.', "Don't cross the road."], a: "Don't cross the road." },
                        { q: '5', choices: ['Excuse me, where is the bank?', 'Excuse me, where the bank is?'], a: 'Excuse me, where is the bank?' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Follow the directions',
                    instructions: 'استخدم الخريطة. تبدأ عند المعهد.',
                    items: [
                        { q: 'Cross First Street. Walk past the traffic lights and the library. It’s on the corner.', choices: ['the café', 'the mosque', 'the bank'], a: 'the café' },
                        { q: 'Go straight on. Cross both streets. It’s between the hospital and the park.', choices: ['the mall', 'the library'], a: 'the mall' },
                        { q: 'Walk along First Street. It’s on the same side as the institute, two buildings away.', choices: ['the bank', 'the café'], a: 'the bank' },
                        { q: 'Go straight on. Cross both streets. It’s opposite the mosque.', choices: ['the hospital', 'the park'], a: 'the hospital' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: What does it mean?',
                    instructions: 'اختر المعنى.',
                    items: [
                        { q: 'Skip the first intersection and turn left at the second one.', choices: ['Turn left at the first intersection.', 'Turn left at the second intersection.'], a: 'Turn left at the second intersection.' },
                        { q: 'Go past the hospital.', choices: ['ادخل المستشفى', 'تعدّى المستشفى'], a: 'تعدّى المستشفى' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 4.6 Capital letters + paragraph structure (RW ص 97 و98) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const paragraphStructure: Topic = {
    slug: 'paragraph-structure',
    title: 'Paragraph structure: topic sentences',
    titleAr: 'بناء البارقراف: الجملة الرئيسية',
    keywords: ['paragraph', 'paragraph structure', 'topic sentence', 'supporting sentences', 'concluding sentence', 'capital letters', 'nationalities', 'بارقراف', 'فقرة', 'الجملة الرئيسية', 'كتابة', ...base, 'Unit 6', 'Unit 7'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Paragraph structure: topic sentences',
            warmup: {
                q: 'كم جزء في البارقراف الجيد؟',
                choices: ['جزء واحد', '3 أجزاء', '5 أجزاء'],
                answer: 1,
                why: 'topic sentence، ثم supporting sentences، ثم concluding sentence. وهذا مطلوب في تكليف 3.',
            },
            blocks: [
                { type: 'text', text: 'البارقراف (paragraph) مجموعة جمل عن فكرة وحدة، وله 3 أجزاء ثابتة. تحتاجه في تكليف 3 وفي كل كتابة بعدها.' },
                { type: 'formula', parts: [['Topic sentence', 's'], ['Supporting sentences', 'v'], ['Concluding sentence', 'n']] },
                { type: 'text', text: 'هذا بارقراف كامل عن ينبع بأجزائه الثلاثة، وتحت نشرح كل جزء لحاله:' },
                { type: 'breakdown', view: 'both', parts: [['Yanbu is a small city on the Red Sea.', 's', 'Topic'], ['It has beautiful beaches.', 'v', 'Supporting'], ['There is an old town.', 'v', 'Supporting'], ['Yanbu is a great place to live.', 'n', 'Concluding']] },
                { type: 'text', text: 'topic sentence: الجملة الرئيسية. supporting sentences: الجمل الداعمة. concluding sentence: الجملة الختامية.' },

                { type: 'heading', text: 'الجزء 1: topic sentence' },
                { type: 'text', view: 'both', text: 'أول جملة، وفيها شيئين: الموضوع، والفكرة عنه.' },
                { type: 'formula', parts: [['Topic', 's'], ['+'], ['Idea about it', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['Jeddah', 's', 'Topic'], ['is a great city to visit', 'adj', 'Idea'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Tourism', 's', 'Topic'], ['is an important industry in AlUla', 'adj', 'Idea'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Taif', 's', 'Topic'], ['is a popular summer city', 'adj', 'Idea'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Jeddah', 's', 'Topic'], ['.', 'p'], ['(?)', 'x', 'No idea ✗']], ar: 'ضعيفة: موضوع بدون فكرة.' },
                { type: 'try', task: 'اكتب topic sentence عن مدينتك.', placeholder: 'Yanbu is a small city on the Red Sea.' },

                { type: 'heading', text: 'الجزء 2: supporting sentences' },
                { type: 'text', view: 'both', text: 'تفاصيل تثبت الفكرة: أماكن، وأرقام، وأمثلة.' },
                { type: 'breakdown', view: 'both', parts: [['Yanbu is a small city on the Red Sea.', 's', 'Topic'], ['It has beautiful beaches.', 'v', 'Supporting'], ['There is an old town.', 'v', 'Supporting'], ['The people are friendly.', 'v', 'Supporting']] },
                { type: 'breakdown', parts: [['Tourism is important in AlUla.', 's', 'Topic'], ['There are many new hotels.', 'v', 'Supporting'], ['Many people work as tour guides.', 'v', 'Supporting']] },
                { type: 'try', task: 'اكتب جملتين supporting للـ topic sentence حقتك.', placeholder: 'It has beautiful beaches. There is an old town.' },

                { type: 'heading', text: 'الجزء 3: concluding sentence' },
                { type: 'text', view: 'both', text: 'آخر جملة، ترجع للفكرة بكلام ثاني.' },
                { type: 'breakdown', view: 'both', parts: [['Saudi Arabia is a large country in Asia.', 's', 'Topic'], ['The capital is Riyadh.', 'v', 'Supporting'], ['People speak Arabic.', 'v', 'Supporting'], ['It is a beautiful and interesting country.', 'n', 'Concluding']] },
                { type: 'try', task: 'اكتب concluding sentence للبارقراف حقك.', placeholder: 'Yanbu is a great place to live.' },

                { type: 'heading', text: 'الجزء 4: الحرف الكبير' },
                { type: 'text', view: 'both', text: 'أول كل جملة، والدول والمدن والجنسيات في أي مكان.' },
                { type: 'breakdown', view: 'both', parts: [['He'], ['is'], ['Thai', 'x', 'Nationality'], ['and his wife is'], ['French', 'x', 'Nationality'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There are many beaches in'], ['Portugal', 'x', 'Country'], ['.', 'p']] },
                { type: 'try', task: 'صحح: i am from cairo and my friend is indian.', reference: 'I am from Cairo and my friend is Indian.', placeholder: 'I am from …' },

                { type: 'note', text: 'غلط شائع: تبدأ بتفصيل بدل الفكرة، أو تكتب topic بدون فكرة (Jeddah.)، أو تنسى الـ concluding sentence.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Find the topic sentence',
                    instructions: 'أي جملة هي الـ topic sentence؟',
                    items: [
                        { q: 'The Maldives are islands in the Indian Ocean. The islands are near Sri Lanka. They are famous for their beaches.', choices: ['The Maldives are islands in the Indian Ocean.', 'The islands are near Sri Lanka.', 'They are famous for their beaches.'], a: 'The Maldives are islands in the Indian Ocean.' },
                        { q: 'There are many hotels. Tourism is an important industry in the Maldives. Many people work as fishermen.', choices: ['There are many hotels.', 'Tourism is an important industry in the Maldives.', 'Many people work as fishermen.'], a: 'Tourism is an important industry in the Maldives.', why: 'مو دايم أول جملة! هنا جات ثانية.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Which part?',
                    instructions: 'هذي الجملة من أي جزء في البارقراف؟',
                    choices: ['topic', 'supporting', 'concluding'],
                    items: [
                        { q: 'Jeddah is a big city on the Red Sea.', a: 'topic' },
                        { q: 'It has a famous old town called Al-Balad.', a: 'supporting' },
                        { q: 'For these reasons, Jeddah is a great city to visit.', a: 'concluding' },
                        { q: 'There are many restaurants on the Corniche.', a: 'supporting' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Capital letters',
                    instructions: 'صحح الحروف الكبيرة والنقطة.',
                    items: [
                        { q: 'there are many beautiful beaches in portugal', a: 'There are many beautiful beaches in Portugal.' },
                        { q: 'chicken is very popular in malaysia', a: 'Chicken is very popular in Malaysia.' },
                        { q: 'he is thai and his wife is french', a: 'He is Thai and his wife is French.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Write a topic sentence',
                    instructions: 'اكتب topic sentence للتفاصيل.',
                    items: [{ q: 'Details: Many people live in the capital. There are lots of things to do and see. It is a busy and interesting place.', a: 'Riyadh is a big and exciting city.' }],
                },
            ],
        },
    ],
};

// ─────────────── 4.7 Vocabulary: places (RW ص 84 و89 و91) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const placesVocab: Topic = {
    slug: 'places-vocabulary',
    title: 'Places',
    titleAr: 'مفردات: الأماكن والطبيعة',
    keywords: ['places', 'nature', 'beach', 'desert', 'mountain', 'valley', 'island', 'capital', 'currency', 'population', 'industry', 'tourist', 'أماكن', 'طبيعة', 'مفردات', 'كلمات', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Places',
            warmup: {
                q: 'وش اسم مكان مليان رمل وما فيه مطر؟',
                choices: ['a forest', 'a desert', 'a valley'],
                answer: 1,
                why: 'desert = صحراء.',
            },
            blocks: [
                { type: 'text', text: 'نتعلم كلمات الأماكن من رحلة عائلة فيصل من الرياض لأبها. الكلمة الجديدة ملونة ومعناها تحتها.' },

                { type: 'heading', text: 'المجموعة 1: البر' },
                { type: 'text', view: 'both', text: 'من الرياض لين الجبال.' },
                { type: 'breakdown', view: 'both', parts: [['First, they drove through a big'], ['desert', 'n', 'صحراء'], ['with a lot of sand'], ['.', 'p']] },
                { type: 'breakdown', parts: [['They stopped at a'], ['farm', 'n', 'مزرعة'], ['with green'], ['fields', 'n', 'حقول'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Then they saw'], ['hills', 'n', 'تلال'], ['and high'], ['mountains', 'n', 'جبال'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The village is in a deep'], ['valley', 'n', 'وادي'], ['near a'], ['forest', 'n', 'غابة'], ['.', 'p']] },
                { type: 'try', task: 'وصّف مكان طبيعي في السعودية تحبه بجملة.', placeholder: 'AlUla has big rocks and a beautiful desert.' },

                { type: 'heading', text: 'المجموعة 2: الماء' },
                { type: 'breakdown', view: 'both', parts: [['In Abha, they saw a small'], ['lake', 'n', 'بحيرة'], ['and a'], ['waterfall', 'n', 'شلال'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Farasan is a group of'], ['islands', 'n', 'جزر'], ['in the Red'], ['Sea', 'n', 'بحر'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We swam at the'], ['beach', 'n', 'شاطئ'], ['.', 'p'], ['The Nile is a long'], ['river', 'n', 'نهر'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن شاطئ أو جزيرة زرتها.', placeholder: 'Yanbu has a beautiful beach.' },

                { type: 'heading', text: 'المجموعة 3: معلومات دولة' },
                { type: 'text', view: 'both', text: 'كلمات تحتاجها في مهمة الوحدة.' },
                { type: 'breakdown', view: 'both', parts: [['The'], ['capital', 'n', 'العاصمة'], ['of Canada is Ottawa'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The'], ['population', 'n', 'عدد السكان'], ['is about 41 million'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The'], ['currency', 'n', 'العملة'], ['is the Canadian dollar'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Tourism', 'n', 'السياحة'], ['is an important'], ['industry', 'n', 'قطاع'], ['.', 'p'], ['Many'], ['tourists', 'n', 'سياح'], ['visit Niagara Falls'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن دولة: عاصمتها وعملتها.', placeholder: 'The capital of Egypt is Cairo. The currency is the pound.' },

                { type: 'heading', text: 'المجموعة 4: famous for' },
                { type: 'text', view: 'both', text: 'مشهور بـ: famous for + اسم.' },
                { type: 'formula', parts: [['Place', 's'], ['is famous for', 'v'], ['Noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Jeddah', 's'], ['is famous for', 'v'], ['its old town', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The Maldives', 's'], ['are famous for', 'v'], ['their beaches', 'n'], ['.', 'p']] },
                { type: 'try', task: 'وش مدينتك مشهورة فيه؟', placeholder: 'Yanbu is famous for its beaches.' },

                { type: 'note', text: 'غلط شائع: famous with ✗ (الصح famous for)، و the population are ✗ (الصح is).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Nature words',
                    instructions: 'اختر الكلمة المناسبة.',
                    items: [
                        { q: 'The Maldives is a country of many small ___.', choices: ['islands', 'deserts', 'forests'], a: 'islands' },
                        { q: 'There is a lot of sand in the ___.', choices: ['forest', 'desert', 'river'], a: 'desert' },
                        { q: 'The village is in a ___ between two mountains.', choices: ['valley', 'beach', 'ocean'], a: 'valley' },
                        { q: 'We swam in the ___ near the hotel.', choices: ['sea', 'cliff', 'hill'], a: 'sea' },
                        { q: 'Water falls from the top of the mountain. It is a beautiful ___.', choices: ['waterfall', 'lake', 'valley'], a: 'waterfall' },
                        { q: 'Saudi Arabia is famous ___ its oil.', choices: ['for', 'with', 'of'], a: 'for' },
                        { q: 'They grow dates and vegetables on their ___.', choices: ['farm', 'island', 'cliff'], a: 'farm' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل قسم Vocabulary في الكويز.',
                    items: [
                        { q: 'The city ___ shows all the neighbourhoods. It is easy to read.', choices: ['weather', 'locations', 'map', 'directions'], a: 'map' },
                        { q: 'About 14 million ___ visit Niagara Falls every year.', choices: ['tourists', 'farmers', 'currencies', 'cliffs'], a: 'tourists' },
                        { q: 'The ___ of Canada is about 41 million people.', choices: ['population', 'capital', 'industry', 'currency'], a: 'population' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 4.8 Skills: reading for main ideas، listening for detail، classifying (RW ص 89 و92، LS ص 87 و90) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const unit4Skills: Topic = {
    slug: 'main-ideas-and-listening-for-detail',
    title: 'Reading for main ideas and listening for detail',
    titleAr: 'مهارات: الفكرة الرئيسية في القراءة والتفاصيل في الاستماع',
    keywords: ['reading for main ideas', 'main idea', 'listening for detail', 'detail', 'key words', 'classifying', 'مهارات', 'قراءة', 'استماع', 'الفكرة الرئيسية', 'تفاصيل', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Reading for main ideas and listening for detail',
            warmup: {
                q: 'سؤال "What is the main idea of this passage?" يبيك تختار:',
                choices: ['رقم من النص', 'الموضوع العام للنص كله', 'أول كلمة'],
                answer: 1,
                why: 'الفكرة الرئيسية = عن وش النص كله. وهذا سؤال ثابت في كل كويز.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مهارات: تلقى الفكرة الرئيسية لنص كامل، وتسمع تفصيلة محددة، وتقسّم أفكارك قبل الكتابة.' },

                { type: 'heading', text: 'المهارة 1: Reading for main ideas' },
                { type: 'text', view: 'both', text: 'لكل فقرة موضوع، تلقاه في أول جملة. وإذا جمعت المواضيع طلعت الفكرة الرئيسية للنص كله.' },
                { type: 'formula', parts: [['Topic of ¶1', 's'], ['+'], ['Topic of ¶2', 's'], ['+'], ['Topic of ¶3', 's'], ['→'], ['Main idea', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Canada is in North America. The population is about 41 million.', 'x', '¶1'], ['location and population', 's', 'Topic']] },
                { type: 'breakdown', view: 'both', parts: [['The official languages are English and French. Most French speakers live in Quebec.', 'x', '¶2'], ['languages', 's', 'Topic']] },
                { type: 'breakdown', view: 'both', parts: [['Canada has many beautiful natural places, like Niagara Falls.', 'x', '¶3'], ['natural places', 's', 'Topic']] },
                { type: 'breakdown', view: 'both', parts: [['Fishing and farming are important industries.', 'x', '¶4'], ['industries', 's', 'Topic']] },
                { type: 'breakdown', view: 'both', parts: [['location + languages + places + industries', 's', 'All topics'], ['It gives basic facts about Canada.', 'v', 'Main idea']], ar: 'في الكويز، الخيار الغلط غالبًا تفصيلة من فقرة وحدة.' },
                { type: 'try', task: 'نص فيه 3 فقرات: عن أكل اليابان، ولغتها، ومدنها. وش الفكرة الرئيسية؟', reference: 'It gives basic facts about Japan.', placeholder: 'It gives …' },

                { type: 'heading', text: 'المهارة 2: Listening for detail' },
                { type: 'text', view: 'both', text: 'اقرأ السؤال قبل ما تسمع، وحدد وش تنتظر، وركز عليه بس.' },
                { type: 'formula', parts: [['Question', 's'], ['→'], ['Listen for…', 'adj'], ['→'], ['Answer', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Which store is next to the bookshop?', 's', 'Question'], ['a store name', 'adj', 'Listen for'], ['the sports store', 'v', 'Answer']] },
                { type: 'breakdown', parts: [['What floor is the food court on?', 's', 'Question'], ['a number', 'adj', 'Listen for'], ['the second floor', 'v', 'Answer']] },
                { type: 'try', task: 'السؤال: "How much is a ticket?" وش تنتظر تسمع؟', reference: 'a price (a number + riyals)', placeholder: 'a …' },

                { type: 'heading', text: 'المهارة 3: Classifying' },
                { type: 'text', view: 'both', text: 'قبل الكتابة، وزّع الكلمات المهمة على المواضيع. كل موضوع يصير بارقراف.' },
                { type: 'breakdown', view: 'both', parts: [['geography', 's', 'Topic'], ['desert, mountains, Red Sea, Asia', 'n', 'Key words']] },
                { type: 'breakdown', parts: [['language', 's', 'Topic'], ['Arabic, English', 'n', 'Key words']] },
                { type: 'breakdown', parts: [['industry', 's', 'Topic'], ['oil, tourism, fishing', 'n', 'Key words']] },
                { type: 'try', task: 'اكتب key words عن بلدك لكل موضوع: geography و language و food.', placeholder: 'geography: desert, Red Sea · language: Arabic · food: kabsa, dates' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Main idea',
                    instructions: 'ارجع لنص كندا في الشرح.',
                    items: [
                        { q: 'What is the main idea of this passage?', choices: ['It shows tourists the best places to visit in Canada.', 'It explains why Canada’s economy is strong.', 'It gives readers basic facts about Canada.', 'It compares Canada to other countries.'], a: 'It gives readers basic facts about Canada.' },
                        { q: 'Where do most French speakers live?', choices: ['in Quebec', 'in Ontario', 'in Vancouver'], a: 'in Quebec' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Classify',
                    instructions: 'الكلمة تحت أي موضوع؟',
                    choices: ['geography', 'language', 'industry'],
                    items: [
                        { q: 'mountains', a: 'geography' },
                        { q: 'tourism', a: 'industry' },
                        { q: 'Arabic', a: 'language' },
                        { q: 'island', a: 'geography' },
                        { q: 'fishing', a: 'industry' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Listen for detail (script)',
                    instructions: 'النص المسموع: "Welcome to Red Sea Mall. The customer service centre is on the left. The sports store is next to the bookshop. The food court is on the second floor. Parking is free."',
                    items: [
                        { q: 'The sports store is next to ___.', choices: ['the food court', 'the bookshop', 'the cinema'], a: 'the bookshop' },
                        { q: 'The parking is free.', choices: ['True', 'False'], a: 'True' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 4: facts about your country + directions (RW ص 99 و100، LS ص 99) ───────────────
// نمط أول أربع دروس: 3 بارقرافات قصيرة، كل واحد: topic ملونة ← supporting ← كتابة.
const unit4Task: Topic = {
    slug: 'facts-about-your-country',
    title: 'Writing task: facts about your country',
    titleAr: 'مهمة الوحدة: معلومات عن بلدك',
    keywords: ['writing task', 'facts about your country', 'descriptive paragraph', 'country', 'paragraph', 'بارقراف', 'كتابة', 'بلدك', 'directions', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: facts about your country',
            warmup: {
                q: 'كل بارقراف في المهمة لازم يبدأ بـ:',
                choices: ['topic sentence', 'concluding sentence', 'سؤال'],
                answer: 0,
                why: 'المهمة 3 بارقرافات قصيرة، كل واحد يبدأ بـ topic sentence.',
            },
            blocks: [
                { type: 'text', text: 'المهمة: 3 بارقرافات قصيرة عن بلدك، كل واحد عن موضوع. كل بارقراف: topic sentence، وبعدها جملتين supporting.' },

                { type: 'heading', text: 'البارقراف 1: الجغرافيا' },
                { type: 'text', view: 'both', text: 'وين البلد، ووش فيه من طبيعة، وعاصمته.' },
                { type: 'breakdown', view: 'both', parts: [['Saudi Arabia is a big country in Asia.', 's', 'Topic'], ['There are deserts, mountains and beaches on the Red Sea.', 'v', 'Supporting'], ['The capital is Riyadh.', 'v', 'Supporting']], ar: 'Asia بدون أداة، و the Red Sea.' },
                { type: 'try', task: 'اكتب بارقراف الجغرافيا عن بلدك.', placeholder: '… is a … country in …' },

                { type: 'heading', text: 'البارقراف 2: اللغة والناس' },
                { type: 'breakdown', view: 'both', parts: [['The official language of Saudi Arabia is Arabic.', 's', 'Topic'], ['Many people also speak English.', 'v', 'Supporting'], ['About 35 million people live in the country.', 'v', 'Supporting']], ar: 'the official language of: the + اسم + of + اسم.' },
                { type: 'try', task: 'اكتب بارقراف اللغة والسكان.', placeholder: 'The official language of …' },

                { type: 'heading', text: 'البارقراف 3: الصناعة' },
                { type: 'breakdown', view: 'both', parts: [['Oil is the most important industry in Saudi Arabia.', 's', 'Topic'], ['Tourism is also popular.', 'v', 'Supporting'], ['There are many tourists in AlUla and Jeddah.', 'v', 'Supporting']], ar: 'There are + جمع.' },
                { type: 'try', task: 'اكتب بارقراف الصناعة.', placeholder: '… is an important industry in …' },

                { type: 'note', text: 'قبل ما ترسل: topic sentence لكل بارقراف، و there is / are صحيحة، و the مع البحار، وبدون أداة مع القارات والمدن، والدول بحرف كبير.' },

                { type: 'heading', text: 'التحدث: اسأل عن الطريق ووصّفه' },
                { type: 'text', view: 'both', text: 'سؤال مؤدب، ثم أوامر قصيرة، ثم وين المكان.' },
                { type: 'breakdown', view: 'both', parts: [['Excuse me, is there a bookshop near here?', 'x', 'Ask']] },
                { type: 'breakdown', parts: [['Go', 'v'], ['straight on and'], ['turn', 'v'], ['right at the traffic lights.'], ['The bookshop is next to the bank.', 's', 'Place']] },
                { type: 'try', task: 'اكتب حوار قصير: شخص يسأل عن مكان في مدينتك، وأنت توصف له الطريق.', placeholder: 'A: Excuse me, where is … ? B: Go straight on …' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Check the paragraphs',
                    instructions: 'هذي جمل من بارقرافات طالب. اختر الصحيح.',
                    items: [
                        { q: '___ many beautiful beaches in my country.', choices: ['There is', 'There are'], a: 'There are' },
                        { q: 'Jeddah is on ___ Red Sea.', choices: ['the', '—'], a: 'the' },
                        { q: 'Saudi Arabia is in ___ Asia.', choices: ['the', '—'], a: '—' },
                        { q: 'The capital ___ Saudi Arabia is Riyadh.', choices: ['of', 'in', 'from'], a: 'of' },
                        { q: 'Oil is ___ important industry.', choices: ['a', 'an'], a: 'an' },
                        { q: 'My country is famous ___ its dates.', choices: ['for', 'with'], a: 'for' },
                        { q: 'Which is the best topic sentence?', choices: ['The capital is Riyadh.', 'Saudi Arabia is a big country in Asia.', 'There are mountains.'], a: 'Saudi Arabia is a big country in Asia.' },
                        { q: '___ straight on and turn left.', choices: ['Go', 'You go', 'Goes'], a: 'Go' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT4_TOPICS: Topic[] = [nounPhrasesOf, articles, prepositionsOfPlace, imperative, paragraphStructure, placesVocab, unit4Skills, unit4Task];
