// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 2: Seasons
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 2 · Seasons';
const base = ['تحضيري', 'ENG 001', 'Unit 2', 'Seasons'];

// ─────────────── 2.1 Nouns and adjectives (RW ص 46، LS ص 54) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const adjectives: Topic = {
    slug: 'nouns-and-adjectives',
    title: 'Nouns and adjectives',
    titleAr: 'الاسم والصفة',
    keywords: ['adjective', 'adjectives', 'noun', 'nouns', 'صفة', 'صفات', 'اسم', 'adjective order', 'ترتيب الصفة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Nouns and adjectives',
            warmup: {
                q: 'أي وحدة صحيحة؟',
                choices: ['Yanbu is a city beautiful.', 'Yanbu is a beautiful city.'],
                answer: 1,
                why: 'في العربي نقول "مدينة جميلة": الصفة بعد الاسم. في الإنجليزي العكس: a beautiful city.',
            },
            blocks: [
                { type: 'text', text: 'الاسم (noun) شخص أو شي أو مكان، مثل city و summer. والصفة (adjective) كلمة توصفه: جوه (hot)، أو حجمه (big)، أو لونه (white)، أو عمره (old). تحتاجها كل ما وصفت مكان أو طقس، ولها مكانين بس في الجملة.' },

                { type: 'heading', text: 'القاعدة 1: الصفة قبل الاسم' },
                { type: 'text', view: 'both', text: 'عكس العربي: نقول "مدينة جميلة"، وهم يقولون a beautiful city.' },
                { type: 'formula', parts: [['a / an / the'], ['Adjective', 'adj'], ['Noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Abha', 's'], ['has', 'v'], ['a'], ['cool', 'adj'], ['summer', 'n'], ['.', 'p']], ar: 'صفة طقس.' },
                { type: 'breakdown', parts: [['Riyadh', 's'], ['is', 'v'], ['a'], ['big', 'adj'], ['city', 'n'], ['.', 'p']], ar: 'صفة حجم.' },
                { type: 'breakdown', parts: [['We', 's'], ['live', 'v'], ['in an'], ['old', 'adj'], ['house', 'n'], ['.', 'p']], ar: 'صفة عمر، و an لأن old تبدأ بحرف علة.' },
                { type: 'breakdown', parts: [['I', 's'], ['can see'], ['white', 'adj'], ['clouds', 'n'], ['.', 'p']], ar: 'clouds جمع، والصفة white ما تغيرت.' },
                { type: 'try', task: 'اكتب جملة عن مدينتك فيها صفة قبل اسم.', placeholder: 'Yanbu is a clean city.' },

                { type: 'heading', text: 'القاعدة 2: الصفة بعد be' },
                { type: 'text', view: 'both', text: 'إذا الصفة في آخر الجملة، لازم قبلها am أو is أو are.' },
                { type: 'formula', parts: [['Noun', 'n'], ['am / is / are', 'v', 'be'], ['Adjective', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['The summer', 'n'], ['is', 'v', 'be'], ['hot', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The people', 'n'], ['are', 'v', 'be'], ['kind', 'adj'], ['.', 'p']], ar: 'people جمع، فنقول are.' },
                { type: 'breakdown', parts: [['It', 'n'], ['was', 'v', 'be'], ['windy', 'adj'], ['yesterday'], ['.', 'p']], ar: 'was ماضي is.' },
                { type: 'breakdown', parts: [['The beaches', 'n'], ['are', 'v', 'be'], ['clean', 'adj'], ['and'], ['beautiful', 'adj'], ['.', 'p']], ar: 'صفتين بينهم and.' },
                { type: 'try', task: 'وصّف الجو اليوم بجملة فيها be وصفة.', placeholder: 'The weather is sunny today.' },

                { type: 'heading', text: 'القاعدة 3: very قبل الصفة' },
                { type: 'text', view: 'both', text: 'very تقوّي الصفة، ومكانها قبلها على طول.' },
                { type: 'formula', parts: [['very', 'adv'], ['Adjective', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['The winter', 'n'], ['is', 'v', 'be'], ['very', 'adv'], ['cold', 'adj'], ['in Tabuk'], ['.', 'p']] },
                { type: 'breakdown', parts: [['She', 's'], ['is', 'v', 'be'], ['a'], ['very', 'adv'], ['famous', 'adj'], ['writer', 'n'], ['.', 'p']], ar: 'very + صفة، وبعدها الاسم.' },
                { type: 'breakdown', parts: [['We', 's'], ['have', 'v'], ['very', 'adv'], ['long', 'adj'], ['summers', 'n'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن بلدك فيها very.', placeholder: 'Saudi Arabia is a very big country.' },

                { type: 'note', text: 'غلط شائع: a city beautiful ✗، و The weather hot ✗ (ناقص is)، و kinds people ✗ (الصفة ما تنجمع).' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Find the adjective',
                    instructions: 'وش الصفة في الجملة؟',
                    items: [
                        { q: 'Jeddah is a famous city.', choices: ['Jeddah', 'famous', 'city'], a: 'famous' },
                        { q: 'The mountains are green in spring.', choices: ['mountains', 'green', 'spring'], a: 'green' },
                        { q: 'My teacher is very kind.', choices: ['teacher', 'very', 'kind'], a: 'kind' },
                        { q: 'We have long summers.', choices: ['have', 'long', 'summers'], a: 'long' },
                        { q: 'It is a rainy day.', choices: ['rainy', 'day', 'It'], a: 'rainy' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Where does it go?',
                    instructions: 'اختر الترتيب الصحيح.',
                    items: [
                        { q: 'big / Riyadh is a / city', choices: ['Riyadh is a city big.', 'Riyadh is a big city.'], a: 'Riyadh is a big city.' },
                        { q: 'warm / We have / winters', choices: ['We have warm winters.', 'We have winters warm.'], a: 'We have warm winters.' },
                        { q: 'interesting / She is a very / person', choices: ['She is a person very interesting.', 'She is a very interesting person.'], a: 'She is a very interesting person.' },
                        { q: 'famous / Seville is a / city in Spain', choices: ['Seville is a famous city in Spain.', 'Seville is a city famous in Spain.'], a: 'Seville is a famous city in Spain.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Fix the sentence',
                    instructions: 'كل جملة فيها خطأ: صلحها.',
                    items: [
                        { q: 'The weather very cloudy in March.', a: 'The weather is very cloudy in March.' },
                        { q: 'They are kinds people.', a: 'They are kind people.' },
                        { q: 'It cloudy today.', a: 'It is cloudy today.' },
                        { q: 'Jeddah has beaches beautiful.', a: 'Jeddah has beautiful beaches.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'Which of the following is NOT an adjective?', choices: ['Cold', 'Dry', 'Rainy', 'Rainfall'], a: 'Rainfall', why: 'rainfall اسم: كمية المطر.' },
                        { q: 'The old man has a **long** beard. The part of speech of the underlined word is a:', choices: ['Noun', 'Verb', 'Adjective'], a: 'Adjective' },
                        { q: 'Which of the following is NOT an adjective?', choices: ['Sunny', 'Windy', 'Weather', 'Hot'], a: 'Weather' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise E: Your country',
                    instructions: 'كمّل الجمل عن بلدك.',
                    items: [
                        { q: 'In spring, the weather in my country is …', a: 'In spring, the weather in my country is warm and sunny.' },
                        { q: 'We have … summers in my country.', a: 'We have very hot summers in my country.' },
                        { q: 'The people in my class are …', a: 'The people in my class are friendly and helpful.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.2 Noun phrases (RW ص 47) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const nounPhrases: Topic = {
    slug: 'noun-phrases',
    title: 'Noun phrases',
    titleAr: 'شبه الجملة الاسمية (noun phrase)',
    keywords: ['noun phrase', 'noun phrases', 'a the adjective noun', 'شبه جملة اسمية', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Noun phrases',
            warmup: {
                q: 'وش الـ noun phrase في الجملة؟',
                sentence: 'Taif has a cool summer.',
                choices: ['Taif has', 'a cool summer', 'has a'],
                answer: 1,
                why: 'a cool summer = a + صفة + اسم. وتحت نبنيه خطوة خطوة.',
            },
            blocks: [
                { type: 'text', text: 'الـ noun phrase مجموعة كلمات حول اسم واحد، تخلي وصفك أدق: بدل summer بس، تقول a very hot summer. وفيها: الأداة (a أو an أو the)، والصفة، والاسم. وتمشي في الجملة كأنها كلمة وحدة.' },
                { type: 'breakdown', view: 'both', parts: [['a', 'x', 'Article'], ['very', 'adv', 'very'], ['hot', 'adj', 'Adjective'], ['summer', 'n', 'Noun']], ar: 'نبنيه خطوة خطوة: summer ← hot summer ← a hot summer ← a very hot summer. كلها noun phrase واحد.' },

                { type: 'heading', text: 'الشكل 1: a / the + صفة + اسم مفرد' },
                { type: 'text', view: 'both', text: 'الاسم المفرد ياخذ a أو an أو the قبل الصفة.' },
                { type: 'formula', parts: [['a / an / the', 'x', 'Article'], ['Adjective', 'adj'], ['Noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Riyadh', 's'], ['has', 'v'], ['a', 'x', 'Article'], ['hot', 'adj'], ['summer', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Yanbu', 's'], ['is', 'v'], ['a', 'x', 'Article'], ['clean', 'adj'], ['city', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['It', 's'], ['is', 'v'], ['an', 'x', 'Article'], ['old', 'adj'], ['city', 'n'], ['.', 'p']], ar: 'an لأن old تبدأ بحرف علة.' },
                { type: 'breakdown', parts: [['Jeddah', 's'], ['has', 'v'], ['a', 'x', 'Article'], ['very', 'adv'], ['humid', 'adj'], ['summer', 'n'], ['.', 'p']], ar: 'very بين الأداة والصفة.' },
                { type: 'try', task: 'اكتب جملة عن مدينة تعرفها، وفيها a + صفة + اسم.', placeholder: 'Abha has a cool summer.' },

                { type: 'heading', text: 'الشكل 2: صفة + اسم جمع (بدون a)' },
                { type: 'text', view: 'both', text: 'الجمع والاسم اللي ما ينعد (rainfall) ما ياخذ a.' },
                { type: 'formula', parts: [['Adjective', 'adj'], ['Plural noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Tabuk', 's'], ['has', 'v'], ['cold', 'adj'], ['winters', 'n', 'Plural'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Taif', 's'], ['has', 'v'], ['beautiful', 'adj'], ['gardens', 'n', 'Plural'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Abha', 's'], ['has', 'v'], ['high', 'adj'], ['rainfall', 'n', 'Uncountable'], ['.', 'p']], ar: 'rainfall ما ينعد، فبدون a.' },
                { type: 'try', task: 'اكتب جملة عن بلدك فيها صفة + اسم جمع.', placeholder: 'Saudi Arabia has very hot summers.' },

                { type: 'heading', text: 'الشكل 3: الـ noun phrase في أول الجملة' },
                { type: 'text', view: 'both', text: 'يجي فاعل، وبعده الفعل.' },
                { type: 'formula', parts: [['Noun phrase', 's', 'Subject'], ['Verb', 'v'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [['The rainy season', 's', 'Noun phrase'], ['is', 'v'], ['short'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The average temperature', 's', 'Noun phrase'], ['is', 'v'], ['30 °C'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Cold winters', 's', 'Noun phrase'], ['are', 'v'], ['common in the north'], ['.', 'p']], ar: 'جمع، فنقول are.' },
                { type: 'try', task: 'اكتب جملة تبدأ بـ The … season.', placeholder: 'The hot season is from May to September.' },

                { type: 'note', text: 'غلط شائع: a summer hot ✗، و a cold winters ✗ (الجمع بدون a)، و a old city ✗ (الصح an old city).' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Find the noun phrase',
                    instructions: 'اختر الـ noun phrase اللي فيه صفة.',
                    items: [
                        { q: 'Madinah has a warm spring.', choices: ['Madinah has', 'a warm spring', 'has a'], a: 'a warm spring' },
                        { q: 'The dry season is usually sunny.', choices: ['The dry season', 'is usually', 'usually sunny'], a: 'The dry season' },
                        { q: 'A rainy day is not very nice.', choices: ['A rainy day', 'not very', 'very nice'], a: 'A rainy day' },
                        { q: 'Copenhagen is a clean city.', choices: ['Copenhagen is', 'a clean city', 'is a'], a: 'a clean city' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Build the phrase',
                    instructions: 'اختر الكلمة اللي تكمّل الـ noun phrase.',
                    items: [
                        { q: 'Jeddah has ___ humid summer.', choices: ['a', 'an', '—'], a: 'a' },
                        { q: 'Tabuk has very cold ___.', choices: ['winter', 'winters'], a: 'winters' },
                        { q: 'Abha has ___ rainfall.', choices: ['a high', 'high'], a: 'high' },
                        { q: 'It is ___ old city.', choices: ['a', 'an'], a: 'an' },
                        { q: 'The ___ season is very hot.', choices: ['dry', 'dryly'], a: 'dry' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Make it bigger',
                    instructions: 'زِد صفة (وأداة إذا تحتاج) على الاسم اللي تحته خط.',
                    items: [
                        { q: 'Taif has **summers**.', a: 'Taif has cool summers.' },
                        { q: 'Dubai is **city**.', a: 'Dubai is a modern city.' },
                        { q: '**Season** is short in Jeddah.', a: 'The rainy season is short in Jeddah.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.3 Prepositional phrases (RW ص 50 و51) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const prepositional: Topic = {
    slug: 'prepositional-phrases',
    title: 'Prepositional phrases',
    titleAr: 'شبه الجملة بحرف الجر (prepositional phrase)',
    keywords: ['preposition', 'prepositions', 'prepositional phrase', 'in on at', 'between and', 'from to', 'for', 'about', 'حرف جر', 'حروف الجر', 'فاصلة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Prepositional phrases',
            warmup: {
                q: 'وين تحط الفاصلة؟',
                sentence: 'In the summer the weather is very hot.',
                choices: ['بعد In', 'بعد summer', 'ما تحتاج فاصلة'],
                answer: 1,
                why: 'إذا بدأت الجملة بـ prepositional phrase نحط بعده فاصلة: In the summer, the weather is very hot.',
            },
            blocks: [
                { type: 'text', text: 'حرف الجر (preposition) مثل in و from و for، لحاله ما يعني شي. إذا جا بعده اسم صار معلومة كاملة اسمها prepositional phrase.' },
                { type: 'formula', parts: [['Preposition', 'x', 'Preposition'], ['Noun / noun phrase', 'n']] },

                { type: 'heading', text: 'السؤال 1: وين؟ in و from' },
                { type: 'text', view: 'both', text: 'from يعني "من": البلد أو المدينة اللي أنت منها. و in يعني "في": المكان اللي أنت فيه.' },
                { type: 'breakdown', view: 'both', parts: [['Faisal', 's'], ['is', 'v'], ['from Taif', 'x', 'Where?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ['live', 'v'], ['in Yanbu', 'x', 'Where?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['It', 's'], ['snows', 'v'], ['in the north', 'x', 'Where?'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة فيها from وجملة فيها in.', placeholder: 'I am from Jeddah. I study in Yanbu.' },

                { type: 'heading', text: 'السؤال 2: متى؟ in' },
                { type: 'text', view: 'both', text: 'in بمعنى "في" بعد، بس قبل الفصل والشهر.' },
                { type: 'breakdown', view: 'both', parts: [['It', 's'], ['is', 'v'], ['very hot'], ['in summer', 'x', 'When?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['It', 's'], ['rains', 'v'], ['in January', 'x', 'When?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ['go', 'v'], ['to Abha'], ['in the holiday', 'x', 'When?'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن الجو في شهر معين.', placeholder: 'It is cool in December.' },

                { type: 'heading', text: 'السؤال 3: كم مدة؟ for' },
                { type: 'text', view: 'both', text: 'for يعني "لمدة"، وبعدها مدة: أيام، أو شهور، أو سنين.' },
                { type: 'breakdown', view: 'both', parts: [['The rainy season', 's'], ['lasts', 'v'], ['for three months', 'x', 'How long?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ['lived', 'v'], ['in Jeddah', 'x', 'Where?'], ['for two years', 'x', 'How long?'], ['.', 'p']] },
                { type: 'try', task: 'كم يطول الصيف في مدينتك؟ اكتبها بـ for.', placeholder: 'Summer lasts for five months.' },

                { type: 'heading', text: 'السؤال 4: تقريبًا، about' },
                { type: 'text', view: 'both', text: 'about يعني "تقريبًا"، تجي قبل الرقم إذا ما أنت متأكد منه بالضبط.' },
                { type: 'breakdown', view: 'both', parts: [['The temperature', 's'], ['is', 'v'], ['about 35 °C', 'x', 'Not exact'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Winter', 's'], ['lasts', 'v'], ['for about two months', 'x', 'How long? + not exact'], ['.', 'p']] },
                { type: 'try', task: 'اكتب درجة الحرارة اليوم بـ about.', placeholder: 'It is about 30 °C today.' },

                { type: 'heading', text: 'السؤال 5: من … إلى، between … and و from … to' },
                { type: 'text', view: 'both', text: 'between … and يعني "بين … و…"، و from … to يعني "من … إلى". للمدى بين رقمين أو شهرين.' },
                { type: 'formula', parts: [['between', 'x', 'From'], ['A'], ['and', 'x', 'To'], ['B']] },
                { type: 'breakdown', view: 'both', parts: [['It', 's'], ['is', 'v'], ['between 20 °C and 25 °C', 'x', 'Range'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Summer', 's'], ['is', 'v'], ['from June to August', 'x', 'Range'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن حرارة الشتاء بـ between … and.', placeholder: 'In winter, it is between 12 °C and 20 °C.' },

                { type: 'heading', text: 'السؤال 6: الفاصلة' },
                { type: 'text', view: 'both', text: 'إذا بدأت الجملة بالـ prepositional phrase، حط بعده فاصلة. في آخر الجملة بدون فاصلة.' },
                { type: 'formula', parts: [['Prepositional phrase', 'x', 'Start'], [',', 'p'], ['Subject', 's'], ['Verb', 'v'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [['In the winter', 'x', 'Start'], [',', 'p', 'Comma'], ['it', 's'], ['rains', 'v'], ['a lot'], ['.', 'p']] },
                { type: 'breakdown', parts: [['It', 's'], ['rains', 'v'], ['a lot'], ['in the winter', 'x', 'End'], ['.', 'p']], ar: 'آخر الجملة: بدون فاصلة.' },
                { type: 'breakdown', parts: [['From June to August', 'x', 'Start'], [',', 'p', 'Comma'], ['it', 's'], ['is', 'v'], ['very hot'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة تبدأ بـ In + فصل، وحط الفاصلة.', placeholder: 'In summer, Yanbu is hot and humid.' },

                { type: 'note', text: 'غلط شائع: فاصلة بين الفعل والـ phrase، مثل The temperature is, about 29 °C ✗.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the preposition',
                    instructions: 'اختر حرف الجر المناسب.',
                    choices: ['in', 'from', 'for', 'about', 'between'],
                    items: [
                        { q: 'Sofia is ___ Chicago in the USA.', a: 'from' },
                        { q: 'The weather is warm ___ the summer.', a: 'in' },
                        { q: 'The winter lasts ___ four months.', a: 'for' },
                        { q: 'The average high temperature is ___ 28 °C.', a: 'about' },
                        { q: 'In January, temperatures are ___ –1 °C and –4 °C.', a: 'between' },
                        { q: 'I live ___ Yanbu.', a: 'in' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Comma or no comma?',
                    instructions: 'الفاصلة صحيحة ولا لا؟',
                    choices: ['Correct', 'Wrong'],
                    items: [
                        { q: 'In the dry season, the weather is often cloudy.', a: 'Correct' },
                        { q: 'The average temperature in spring is, between 10 °C and 20 °C.', a: 'Wrong', why: 'ما فيه فاصلة بعد is.' },
                        { q: 'It rains a lot, in the winter.', a: 'Wrong', why: 'آخر الجملة ما تحتاج فاصلة.' },
                        { q: 'From December to March, it is cold.', a: 'Correct' },
                        { q: 'In spring there is a strong wind.', a: 'Wrong', why: 'ناقصها فاصلة بعد In spring.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Match and write',
                    instructions: 'كمّل الجملة بـ prepositional phrase مناسب، وانتبه للفاصلة.',
                    items: [
                        { q: 'It is warm in Madinah …', a: 'It is warm in Madinah in the spring.' },
                        { q: 'In the rainy season …', a: 'In the rainy season, the average rainfall is 146 mm.' },
                        { q: 'The average temperature in winter …', a: 'The average temperature in winter is between 6 °C and 14 °C.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.4 There is / There are (LS ص 47، و RW ص 94) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const thereIs: Topic = {
    slug: 'there-is-there-are',
    title: 'There is / There are',
    titleAr: 'There is و There are (يوجد)',
    keywords: ['there is', 'there are', "there's", "there isn't", "there aren't", 'is there', 'are there', 'some any', 'countable', 'uncountable', 'يوجد', 'فيه', ...base, 'Unit 4', 'Places'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'There is / There are',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'There ___ two banks near my house.',
                choices: ['is', 'are'],
                answer: 1,
                why: 'two banks جمع، والجمع ياخذ There are.',
            },
            blocks: [
                { type: 'text', text: 'لما توصف مكان أو صورة وتقول "فيه مسجد" أو "فيه أشجار"، تستخدم There is أو There are. ولا تقول It has.' },

                { type: 'heading', text: 'الشكل 1: There is + شي واحد' },
                { type: 'text', view: 'both', text: 'للمفرد، واختصارها There’s.' },
                { type: 'formula', parts: [['There is', 'v'], ['a / an + singular noun', 'n'], ['place']] },
                { type: 'breakdown', view: 'both', parts: [['There is', 'v'], ['a mosque', 'n'], ['on my street'], ['.', 'p']] },
                { type: 'breakdown', parts: [["There's", 'v', 'There is'], ['a big mall', 'n'], ['in Yanbu'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There is', 'v'], ['a cat', 'n'], ['under the chair'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن شي واحد موجود في حيّك.', placeholder: 'There is a park near my house.' },

                { type: 'heading', text: 'الشكل 2: There are + أكثر من واحد' },
                { type: 'text', view: 'both', text: 'للجمع، وغالبًا معه رقم أو some أو many.' },
                { type: 'formula', parts: [['There are', 'v'], ['number / some / many + plural noun', 'n'], ['place']] },
                { type: 'breakdown', view: 'both', parts: [['There are', 'v'], ['two parks', 'n'], ['in my area'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There are', 'v'], ['four seasons', 'n'], ['in Abha'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There are', 'v'], ['some white clouds', 'n'], ['in the sky'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن أشياء كثيرة في مدينتك.', placeholder: 'There are many beaches in Yanbu.' },

                { type: 'heading', text: 'الشكل 3: There is + شي ما ينعد' },
                { type: 'text', view: 'both', text: 'rain و snow و water و sand ما تنعد، فتاخذ There is حتى لو كثيرة.' },
                { type: 'formula', parts: [['There is', 'v'], ['a lot of / some + uncountable noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['There is', 'v'], ['a lot of rain', 'n', 'Uncountable'], ['in Abha'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There is', 'v'], ['some snow', 'n', 'Uncountable'], ['on the mountains'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There is', 'v'], ['a lot of sand', 'n', 'Uncountable'], ['in the desert'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن الجو بـ There is a lot of.', placeholder: 'There is a lot of wind today.' },

                { type: 'heading', text: 'الشكل 4: النفي و any' },
                { type: 'text', view: 'both', text: 'نضيف not، و some تصير any.' },
                { type: 'formula', parts: [["There isn't / There aren't", 'v'], ['any', 'x', 'any'], ['noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [["There isn't", 'v', 'is + not'], ['a cinema', 'n'], ['in my area'], ['.', 'p']] },
                { type: 'breakdown', parts: [["There aren't", 'v', 'are + not'], ['any', 'x', 'any'], ['clouds', 'n'], ['in the sky'], ['.', 'p']] },
                { type: 'breakdown', parts: [["There isn't", 'v', 'is + not'], ['any', 'x', 'any'], ['rain', 'n'], ['in summer'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة منفية عن شي مو موجود في مدينتك.', placeholder: "There aren't any mountains in Yanbu." },

                { type: 'heading', text: 'الشكل 5: السؤال والجواب القصير' },
                { type: 'text', view: 'both', text: 'is أو are تطلع قبل there، والجواب بـ there مو it.' },
                { type: 'formula', parts: [['Is / Are', 'v'], ['there', 's'], ['(any) noun', 'n'], ['?', 'p']] },
                { type: 'breakdown', view: 'both', parts: [['Is', 'v'], ['there', 's'], ['a pharmacy', 'n'], ['near here'], ['?', 'p']], ar: "Yes, there is. / No, there isn't." },
                { type: 'breakdown', parts: [['Are', 'v'], ['there', 's'], ['any parks', 'n'], ['in your city'], ['?', 'p']], ar: "Yes, there are. / No, there aren't." },
                { type: 'try', task: 'اكتب سؤال بـ Is there أو Are there عن مدينة زميلك، وجاوبه.', placeholder: 'Are there any beaches in your city? Yes, there are.' },

                { type: 'note', text: 'غلط شائع: There is two shops ✗، و There are a lot of rain ✗، و It has a mosque near my house ✗، و Yes, it is ✗ (الصح Yes, there is).' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: is or are?',
                    instructions: 'اختر is أو are.',
                    choices: ['is', 'are'],
                    items: [
                        { q: 'There ___ a pharmacy near the station.', a: 'is' },
                        { q: 'There ___ two official languages in Canada.', a: 'are' },
                        { q: 'There ___ a lot of snow on the mountains.', a: 'is' },
                        { q: 'There ___ some white clouds in the sky.', a: 'are' },
                        { q: '___ there a bank on this street?', a: 'is' },
                        { q: 'There ___ a strong wind today.', a: 'is' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: some or any?',
                    instructions: 'اختر some أو any.',
                    choices: ['some', 'any'],
                    items: [
                        { q: 'There are ___ green trees in the photo.', a: 'some' },
                        { q: "There isn't ___ rain today.", a: 'any' },
                        { q: 'Are there ___ shops near your house?', a: 'any' },
                        { q: "There aren't ___ people on the beach.", a: 'any' },
                        { q: "There's ___ snow on the mountains.", a: 'some' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'There ___ many old houses in Jeddah. There ___ also a famous fountain.', choices: ['are / is', 'is / are', 'are / are', 'is / is'], a: 'are / is' },
                        { q: '_______ a cat under the chair.', choices: ['There are', 'Their is', 'There is', 'They are'], a: 'There is' },
                        { q: 'Is there a hospital near here?', choices: ['Yes, there is.', 'Yes, it is.', 'Yes, there are.'], a: 'Yes, there is.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Describe a place',
                    instructions: 'اكتب.',
                    items: [
                        { q: 'Describe a photo of a beach in three sentences (there is / there are / there aren’t).', a: "There is a beautiful beach. There are some people in the sea. There aren't any clouds in the sky." },
                        { q: 'Write a question about a place, and its short answer.', a: 'Are there any parks in your city? Yes, there are.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.5 Word order and punctuation (RW ص 53 و54) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const wordOrder: Topic = {
    slug: 'word-order-and-punctuation',
    title: 'Word order and punctuation',
    titleAr: 'ترتيب الجملة وعلامات الترقيم',
    keywords: ['word order', 'punctuation', 'capital letters', 'commas', 'comma', 'list', 'ترتيب الكلمات', 'علامات الترقيم', 'حرف كبير', 'فاصلة', 'months', 'days', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Word order and punctuation',
            warmup: {
                q: 'كم كلمة لازم تبدأ بحرف كبير؟',
                sentence: 'it is very hot in july.',
                choices: ['وحدة', 'ثنتين', 'ثلاث'],
                answer: 1,
                why: 'أول كلمة (It) واسم الشهر (July): It is very hot in July.',
            },
            blocks: [
                { type: 'text', text: 'جمل وصف الطقس والأماكن أغلبها فيها be (يعني am أو is أو are). الدرس يضبط لك ثلاث أشياء: وش يجي بعد be، ومتى الحرف الكبير، ومتى الفاصلة.' },

                { type: 'heading', text: 'القاعدة 1: be + noun phrase' },
                { type: 'text', view: 'both', text: 'بعد be اسم مع الكلمات اللي حوله (هذا اسمه noun phrase)، ويقول وش هو الشي.' },
                { type: 'formula', parts: [['Subject', 's'], ['be', 'v'], ['Noun phrase', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Riyadh', 's'], ['is', 'v'], ['the capital of Saudi Arabia', 'n', 'Noun phrase'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Abha', 's'], ['is', 'v'], ['a city in the south', 'n', 'Noun phrase'], ['.', 'p']] },
                { type: 'breakdown', parts: [['July and August', 's'], ['are', 'v'], ['the hottest months', 'n', 'Noun phrase'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة: مدينتك + is + noun phrase.', placeholder: 'Yanbu is a city on the Red Sea.' },

                { type: 'heading', text: 'القاعدة 2: be + prepositional phrase' },
                { type: 'text', view: 'both', text: 'بعد be حرف جر (from، in، between) واسم بعده (هذا اسمه prepositional phrase)، ويقول وين أو متى.' },
                { type: 'formula', parts: [['Subject', 's'], ['be', 'v'], ['Prepositional phrase', 'x', 'PP']] },
                { type: 'breakdown', view: 'both', parts: [['Summer', 's'], ['is', 'v'], ['from May to September', 'x', 'Prepositional phrase'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The dry season', 's'], ['is', 'v'], ['between April and July', 'x', 'Prepositional phrase'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Tabuk', 's'], ['is', 'v'], ['in the north', 'x', 'Prepositional phrase'], ['.', 'p']] },
                { type: 'try', task: 'متى الشتاء في مدينتك؟ اكتبها بـ is from … to.', placeholder: 'Winter is from December to February.' },

                { type: 'heading', text: 'القاعدة 3: be + adjective' },
                { type: 'text', view: 'both', text: 'بعد be صفة: كيف الشي.' },
                { type: 'formula', parts: [['Subject', 's'], ['be', 'v'], ['Adjective', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['The winters', 's'], ['are', 'v'], ['cold', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The weather', 's'], ['is', 'v'], ['cool', 'adj'], ['in Abha'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Summers', 's'], ['are', 'v'], ['very', 'adv'], ['hot', 'adj'], ['in Riyadh'], ['.', 'p']], ar: 'Hot are summers ✗: الفاعل دايم أول.' },
                { type: 'try', task: 'اكتب جملة عن جو مدينتك اليوم بـ be + صفة.', placeholder: 'The weather is humid today.' },

                { type: 'heading', text: 'القاعدة 4: الحرف الكبير' },
                { type: 'text', view: 'both', text: 'أول كلمة في الجملة، والشهور، والأيام، والدول، والمدن، والجنسيات، والأسماء. أما الفصول فلا.' },
                { type: 'breakdown', view: 'both', parts: [['It'], ['is', 'v'], ['very hot in'], ['July', 'x', 'Month'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We'], ['visit', 'v'], ['Taif', 'x', 'City'], ['every'], ['Friday', 'x', 'Day'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My teacher'], ['is', 'v'], ['Egyptian', 'x', 'Nationality'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I'], ['like', 'v'], ['winter', 'n', 'Season: small'], ['.', 'p']], ar: 'summer و winter و spring و autumn بحرف صغير.' },
                { type: 'try', task: 'صحح: in january we go to abha.', reference: 'In January, we go to Abha.', placeholder: 'In January, …' },

                { type: 'heading', text: 'القاعدة 5: الفاصلة في القائمة' },
                { type: 'text', view: 'both', text: 'ثلاث أشياء أو أكثر: فاصلة بينهم، وقبل الأخير and بدون فاصلة.' },
                { type: 'formula', parts: [['A'], [',', 'p'], ['B'], ['and', 'co'], ['C']] },
                { type: 'breakdown', view: 'both', parts: [['It is hot in'], ['June'], [',', 'p'], ['July'], ['and', 'co'], ['August'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The weather is'], ['hot'], [',', 'p'], ['humid'], ['and', 'co'], ['sunny'], ['.', 'p']] },
                { type: 'breakdown', parts: [['In September', 'x', 'PP'], [',', 'p', 'After PP'], ['it rains a lot'], ['.', 'p']], ar: 'وإذا بدأت الجملة بحرف جر واسمه (In September)، تحط بعدها فاصلة بعد.' },
                { type: 'try', task: 'اكتب جملة فيها ثلاث صفات للجو في مدينتك.', placeholder: 'In summer, Yanbu is hot, humid and windy.' },

                { type: 'note', text: 'غلط شائع: Monday Tuesday and Friday ✗ (ناقص فاصلة)، و in june ✗، و Summer ✗ وسط الجملة.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Put the words in order',
                    instructions: 'رتب الكلمات.',
                    items: [
                        { q: 'are / two seasons / There / in Jeddah', a: 'There are two seasons in Jeddah.' },
                        { q: 'hot / are / in Riyadh / Summers', a: 'Summers in Riyadh are hot.' },
                        { q: 'windy / is / It / in spring', a: 'It is windy in spring.' },
                        { q: 'from June / are / to August / The summer months', a: 'The summer months are from June to August.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Capital letter or not?',
                    instructions: 'الكلمة تحتاج حرف كبير؟',
                    choices: ['Capital', 'Small'],
                    items: [
                        { q: 'january', a: 'Capital' },
                        { q: 'autumn', a: 'Small' },
                        { q: 'egyptian', a: 'Capital' },
                        { q: 'friday', a: 'Capital' },
                        { q: 'weather', a: 'Small' },
                        { q: 'madinah', a: 'Capital' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Commas',
                    instructions: 'الفواصل صحيحة ولا لا؟',
                    choices: ['Correct', 'Wrong'],
                    items: [
                        { q: 'It is autumn in March April and May.', a: 'Wrong', why: 'ناقصها فاصلة بعد March.' },
                        { q: 'In December, the weather is cold.', a: 'Correct' },
                        { q: 'From June to August there is a lot of cold, and rainy weather.', a: 'Wrong', why: 'الفاصلة لازم بعد August، مو بعد cold.' },
                        { q: 'The best months are April, May and October.', a: 'Correct' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Correct the text',
                    instructions: 'صحح الحروف الكبيرة والفواصل والنقاط، وخلّه أربع جمل.',
                    items: [
                        {
                            q: 'in saudi arabia summer is between may and september the weather is very hot in riyadh in the summer months the temperature is about 45 °C winters are cool in november december and january',
                            a: 'In Saudi Arabia, summer is between May and September. The weather is very hot in Riyadh. In the summer months, the temperature is about 45 °C. Winters are cool in November, December and January.',
                        },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.6 Vocabulary: weather، seasons، colours (RW ص 40 و44، LS ص 44 إلى 46) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const weatherVocab: Topic = {
    slug: 'weather-seasons-colours',
    title: 'Weather, seasons and colours',
    titleAr: 'مفردات: الطقس والفصول والألوان',
    keywords: ['weather', 'seasons', 'colours', 'colors', 'climate', 'rainy', 'sunny', 'cloudy', 'windy', 'temperature', 'rainfall', 'طقس', 'الطقس', 'فصول', 'ألوان', 'مفردات', 'كلمات', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Weather, seasons and colours',
            warmup: {
                q: 'إذا فيه rain كثير، كيف نوصف اليوم؟',
                choices: ['a rain day', 'a rainy day', 'a rained day'],
                answer: 1,
                why: 'نحوّل الاسم لصفة بإضافة y: rain ← rainy.',
            },
            blocks: [
                { type: 'text', text: 'كلمات الطقس لها شكلين: اسم (الشي نفسه) وصفة (توصف الجو). وتحتاج تعرف وين تحط كل واحد.' },

                { type: 'heading', text: 'المجموعة 1: الاسم + y = صفة' },
                { type: 'text', view: 'both', text: 'أغلب صفات الطقس = الاسم + y.' },
                { type: 'formula', parts: [['Noun', 'n'], ['+ y', 'x', 'ending'], ['Adjective', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['rain', 'n', 'Noun'], ['+ y', 'x', 'ending'], ['rainy', 'adj', 'Adjective']], ar: 'ومثلها: cloud → cloudy، wind → windy.' },
                { type: 'breakdown', parts: [['snow', 'n', 'Noun'], ['+ y', 'x', 'ending'], ['snowy', 'adj', 'Adjective']], ar: 'و storm → stormy.' },
                { type: 'breakdown', parts: [['sun', 'n', 'Noun'], ['+ ny', 'x', 'ending'], ['sunny', 'adj', 'Adjective']], ar: 'sun تتضاعف فيها n.' },
                { type: 'try', task: 'حوّل: fog و cloud و wind لصفات.', reference: 'foggy, cloudy, windy', placeholder: 'foggy, …' },

                { type: 'heading', text: 'المجموعة 2: وين أحط الاسم ووين الصفة؟' },
                { type: 'text', view: 'both', text: 'بعد is صفة، وبعد a lot of أو the اسم.' },
                { type: 'formula', parts: [['It is', 'v'], ['Adjective', 'adj'], ['|'], ['There is a lot of', 'v'], ['Noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['It', 's'], ['is', 'v'], ['rainy', 'adj'], ['today'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There is', 'v'], ['a lot of'], ['rain', 'n'], ['today'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The'], ['sun', 'n'], ['is', 'v'], ['very hot', 'adj'], ['in July'], ['.', 'p']] },
                { type: 'breakdown', parts: [['It', 's'], ['is', 'v'], ['a'], ['windy', 'adj'], ['day', 'n'], ['.', 'p']], ar: 'صفة + اسم: windy day.' },
                { type: 'try', task: 'اكتب جملة فيها اسم طقس وجملة فيها صفته.', placeholder: 'There is a lot of wind. It is windy.' },

                { type: 'heading', text: 'المجموعة 3: الحرارة والرطوبة' },
                { type: 'text', view: 'both', text: 'من الأحر للأبرد: hot ← warm ← cool ← cold. و dry جاف، و humid رطب.' },
                { type: 'breakdown', view: 'both', parts: [['Riyadh', 's'], ['is', 'v'], ['hot', 'adj'], ['and'], ['dry', 'adj'], ['in summer'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Jeddah', 's'], ['is', 'v'], ['hot', 'adj'], ['and'], ['humid', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The temperature', 'n'], ['is', 'v'], ['about 18 °C', 'x', 'eighteen degrees Celsius'], ['.', 'p']] },
                { type: 'try', task: 'اكتب نشرة جوية قصيرة لمدينتك اليوم.', placeholder: 'Today in Yanbu, it is hot and humid. The temperature is about 35 °C.' },

                { type: 'heading', text: 'الفصول' },
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
                { type: 'note', text: 'غلط شائع: It is sun ✗ (الصح It is sunny)، و There is a lot of rainy ✗ (الصح rain).' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Noun or adjective?',
                    instructions: 'اختر الكلمة الصحيحة.',
                    items: [
                        { q: 'The ___ is very hot in July.', choices: ['sun', 'sunny'], a: 'sun' },
                        { q: 'It is ___ and cold. The sky is grey.', choices: ['cloud', 'cloudy'], a: 'cloudy' },
                        { q: 'There is a strong ___ from the sea.', choices: ['wind', 'windy'], a: 'wind' },
                        { q: 'Tabuk is ___ in January.', choices: ['snow', 'snowy'], a: 'snowy' },
                        { q: 'I like the ___. It makes the plants green.', choices: ['rain', 'rainy'], a: 'rain' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل قسم Vocabulary في الكويز.',
                    items: [
                        { q: 'The ___ in this area is warm and humid all year.', choices: ['climate', 'season', 'umbrella', 'rainfall'], a: 'climate' },
                        { q: 'The average ___ in Abha is high in August. It rains a lot.', choices: ['temperature', 'rainfall', 'wind', 'sun'], a: 'rainfall' },
                        { q: 'It doesn’t rain a lot. The weather is very ___.', choices: ['dry', 'rainy', 'stormy', 'snowy'], a: 'dry' },
                        { q: 'December, January and February are the ___ months.', choices: ['summer', 'winter', 'spring', 'autumn'], a: 'winter' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Read the temperature',
                    instructions: 'اختر طريقة القراءة الصحيحة.',
                    items: [
                        { q: '15 °C', choices: ['fifty degrees Celsius', 'fifteen degrees Celsius'], a: 'fifteen degrees Celsius' },
                        { q: '40 °C', choices: ['forty degrees Celsius', 'fourteen degrees Celsius'], a: 'forty degrees Celsius' },
                        { q: '32 °C', choices: ['thirty-two degrees Celsius', 'twenty-three degrees Celsius'], a: 'thirty-two degrees Celsius' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 2.7 Skills: scanning، predicting from visuals، sentence stress (RW ص 42، LS ص 41 إلى 43 و53) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const unit2Skills: Topic = {
    slug: 'scanning-visuals-sentence-stress',
    title: 'Scanning, using visuals and sentence stress',
    titleAr: 'مهارات: البحث السريع والصور ونبرة الجملة',
    keywords: ['scanning', 'scan', 'predicting', 'visuals', 'sentence stress', 'pauses', 'reading skills', 'listening skills', 'مهارات', 'قراءة سريعة', 'نبرة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Scanning, using visuals and sentence stress',
            warmup: {
                q: 'السؤال: "What is the temperature in July?" وش تدور عليه في النص؟',
                choices: ['كل كلمة من البداية', 'رقم معه °C وكلمة July', 'العنوان بس'],
                answer: 1,
                why: 'هذا اسمه scanning: تدور على معلومة محددة بسرعة.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مهارات: تلقى معلومة بسرعة في نص، وتتوقع من الصورة، وتنطق الجملة بنبرة صحيحة.' },

                { type: 'heading', text: 'المهارة 1: Scanning، دوّر، لا تقرأ' },
                { type: 'text', view: 'both', text: 'شوف السؤال، واعرف وش نوع الجواب (رقم؟ شهر؟ مدينة؟)، ومرّر عيونك على النص لين تلقاه.' },
                { type: 'formula', parts: [['Question', 's'], ['→'], ['Look for…', 'adj', 'number / month / name'], ['→'], ['Answer', 'v']] },
                { type: 'example', view: 'both', en: 'Abha is a city in the south of Saudi Arabia. In summer, the average temperature is about 25 °C. It rains a lot in July and August. In winter, it is cold and the temperature is about 12 °C.' },
                { type: 'breakdown', view: 'both', parts: [['What is the temperature in summer?', 's', 'Question'], ['a number + °C', 'adj', 'Look for'], ['about 25 °C', 'v', 'Answer']] },
                { type: 'breakdown', parts: [['When does it rain a lot?', 's', 'Question'], ['months', 'adj', 'Look for'], ['in July and August', 'v', 'Answer']] },
                { type: 'breakdown', parts: [['Where is Abha?', 's', 'Question'], ['a place', 'adj', 'Look for'], ['in the south of Saudi Arabia', 'v', 'Answer']] },
                { type: 'try', task: 'من نص Abha: كم الحرارة في الشتاء؟ وش دوّرت عليه؟', reference: 'About 12 °C. I looked for a number.', placeholder: 'About … I looked for …' },

                { type: 'heading', text: 'المهارة 2: Predicting from visuals' },
                { type: 'text', view: 'both', text: 'قبل ما تسمع، شوف الصورة: وش الجو؟ وش الفصل؟ وتوقع الكلمات.' },
                { type: 'breakdown', view: 'both', parts: [['Snow on mountains', 'n', 'Photo'], ['→'], ['cold, winter, snowy', 'adj', 'Words I expect']] },
                { type: 'breakdown', parts: [['People on a beach', 'n', 'Photo'], ['→'], ['hot, sunny, swimming', 'adj', 'Words I expect']] },
                { type: 'breakdown', parts: [['Grey sky and umbrellas', 'n', 'Photo'], ['→'], ['rain, cloudy, wet', 'adj', 'Words I expect']] },
                { type: 'try', task: 'صورة صحراء وقت الظهر. اكتب 3 كلمات تتوقع تسمعها.', placeholder: 'hot, dry, sand' },

                { type: 'heading', text: 'المهارة 3: Sentence stress' },
                { type: 'text', view: 'both', text: 'نضغط على الكلمات المهمة (الاسم والفعل والصفة والرقم)، والصغيرة (a، the، is، in) تنقال بسرعة.' },
                { type: 'breakdown', view: 'both', parts: [['My'], ['FAVOURITE', 'x', 'Stress'], ['SEASON', 'x', 'Stress'], ['is'], ['SPRING', 'x', 'Stress'], ['.', 'p']] },
                { type: 'breakdown', parts: [["It's"], ['HOT', 'x', 'Stress'], ['in'], ['JULY', 'x', 'Stress'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There are'], ['WHITE', 'x', 'Stress'], ['CLOUDS', 'x', 'Stress'], ['in the'], ['SKY', 'x', 'Stress'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Hello, everybody.'], ['//', 'p', 'Pause'], ["I'm going to talk about"], ['ABHA', 'x', 'Stress'], ['.', 'p']], ar: 'ووقّف شوي (pause) بين الأفكار.' },
                { type: 'try', task: 'اكتب جملتين عن فصلك المفضل، وحط الكلمات المضغوطة بحروف كبيرة.', placeholder: "My FAVOURITE SEASON is WINTER. It's COOL and SUNNY." },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Scan the text',
                    instructions: 'النص: "Jeddah is on the Red Sea. It has two seasons. Summer is from May to October, and the temperature is about 38 °C. Winter is warm. In January, the temperature is between 18 °C and 28 °C. It rains a little in November." دوّر على الجواب بسرعة.',
                    items: [
                        { q: 'How many seasons does Jeddah have?', choices: ['two', 'four'], a: 'two' },
                        { q: 'When is summer?', choices: ['from May to October', 'in January'], a: 'from May to October' },
                        { q: 'What is the temperature in January?', choices: ['about 38 °C', 'between 18 °C and 28 °C'], a: 'between 18 °C and 28 °C' },
                        { q: 'When does it rain?', choices: ['in November', 'in July'], a: 'in November' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Which words are stressed?',
                    instructions: 'اختر الجملة اللي النبرة فيها صحيحة.',
                    items: [
                        { q: '1', choices: ['IT is a HOT day.', "It's a HOT DAY."], a: "It's a HOT DAY." },
                        { q: '2', choices: ['I LOVE the RAIN.', 'I love THE rain.'], a: 'I LOVE the RAIN.' },
                        { q: '3', choices: ['There ARE some CLOUDS.', 'There are some WHITE CLOUDS.'], a: 'There are some WHITE CLOUDS.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Predict',
                    instructions: 'من وصف الصورة، وش الكلمات اللي بتسمعها؟',
                    items: [
                        { q: 'A photo of a desert at midday.', choices: ['hot, dry, sand', 'rain, snow, cold'], a: 'hot, dry, sand' },
                        { q: 'A photo of trees with orange and red leaves.', choices: ['autumn, leaves, colours', 'beach, swimming, sun'], a: 'autumn, leaves, colours' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 2: weather in your city + describe photos (RW ص 55 و56، LS ص 55) ───────────────
// نمط أول أربع دروس: البارقراف جزء جزء، كل جزء: سطر ← جمل ملونة ← كتابة.
const unit2Task: Topic = {
    slug: 'weather-in-your-city',
    title: 'Writing task: the weather in your city',
    titleAr: 'مهمة الوحدة: الطقس في مدينتك',
    keywords: ['writing task', 'weather in my city', 'describe a place', 'describe photos', 'paragraph', 'بارقراف', 'كتابة', 'وصف مكان', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: the weather in your city',
            warmup: {
                q: 'أي جملة أفضل بداية؟',
                choices: ['I live in Abha in Saudi Arabia.', 'It is 25 °C.', 'And it rains.'],
                answer: 0,
                why: 'ابدأ بالمكان: وين تعيش. وبعدها الفصول والجو.',
            },
            blocks: [
                { type: 'text', text: 'المهمة: بارقراف عن الطقس في مدينتك. نبنيه 4 أجزاء، وبعد كل جزء تكتب جزءك.' },

                { type: 'heading', text: 'النموذج اللي بنبنيه' },
                { type: 'example', view: 'both', en: 'I live in Abha in Saudi Arabia. There are four seasons in Abha. Summer is from June to August, and the weather is cool and rainy. The average temperature in summer is about 25 °C. In winter, it is cold and sometimes foggy. The temperature is between 8 °C and 15 °C. Spring is the best season because the mountains are green.' },
                { type: 'text', text: 'الحين نفككه 4 أجزاء: المكان، ثم فصل، ثم فصل ثاني، ثم الخاتمة.' },

                { type: 'heading', text: 'الجزء 1: المكان والفصول' },
                { type: 'text', view: 'both', text: 'وين تعيش، وكم فصل عندكم.' },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['live', 'v'], ['in Abha in Saudi Arabia', 'x', 'Where?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There are', 'v'], ['four seasons', 'n'], ['in Abha', 'x', 'Where?'], ['.', 'p']] },
                { type: 'try', task: 'اكتب وين تعيش وكم فصل عندكم.', placeholder: 'I live in … There are … seasons in …' },

                { type: 'heading', text: 'الجزء 2: فصل، متى، وجوه، وحرارته' },
                { type: 'breakdown', view: 'both', parts: [['Summer', 's'], ['is', 'v'], ['from June to August', 'x', 'When?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The weather', 's'], ['is', 'v'], ['cool', 'adj'], ['and'], ['rainy', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The average temperature', 's', 'Noun phrase'], ['is', 'v'], ['about 25 °C', 'x', 'Not exact'], ['.', 'p']] },
                { type: 'try', task: 'اكتب عن فصل واحد: متى، وكيف جوه، وكم حرارته.', placeholder: 'Summer is from … to … The weather is …' },

                { type: 'heading', text: 'الجزء 3: فصل ثاني يبدأ بـ In' },
                { type: 'breakdown', view: 'both', parts: [['In winter', 'x', 'When?'], [',', 'p', 'Comma'], ['it', 's'], ['is', 'v'], ['cold', 'adj'], ['and sometimes'], ['foggy', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The temperature', 's'], ['is', 'v'], ['between 8 °C and 15 °C', 'x', 'Range'], ['.', 'p']] },
                { type: 'try', task: 'اكتب عن فصل ثاني بجملة تبدأ بـ In.', placeholder: 'In winter, …' },

                { type: 'heading', text: 'الجزء 4: الخاتمة' },
                { type: 'breakdown', view: 'both', parts: [['Spring', 's'], ['is', 'v'], ['the best season', 'n', 'Noun phrase'], ['because', 'co'], ['the mountains are green'], ['.', 'p']] },
                { type: 'try', task: 'وش أحلى فصل عندكم وليش؟', placeholder: 'Winter is the best season because …' },

                { type: 'heading', text: 'اجمع الأجزاء' },
                { type: 'note', text: 'قبل ما ترسل: الصفة قبل الاسم أو بعد be، وفاصلة بعد In winter في أول الجملة، والشهور والمدن بحرف كبير.' },
                { type: 'try', view: 'both', task: 'اجمع الأجزاء: البارقراف كامل (5 إلى 7 جمل).', placeholder: 'I live in …' },

                { type: 'heading', text: 'التحدث: وصّف صورة مكان تبي تزوره' },
                { type: 'text', view: 'both', text: 'تقديم، ثم الفصل، ثم وش في الصورة، ثم الجو.' },
                { type: 'breakdown', view: 'both', parts: [["Here's my first photo.", 'x', 'Introduction'], ["It's in winter", 'n', 'Season'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There are', 'v'], ['some big rocks', 'n'], ['and'], ["there's", 'v'], ['a blue sky', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [["It's", 'v'], ['sunny', 'adj'], ['and'], ['warm', 'adj'], ['.', 'p']] },
                { type: 'try', task: 'اكتب وصف صورة لمكان تبي تزوره (3 إلى 4 جمل).', placeholder: "Here's my photo. It's in …" },

                {
                    type: 'exercise',
                    title: 'Exercise A: Check the paragraph',
                    instructions: 'هذي جمل من بارقراف طالب. اختر الصحيح.',
                    items: [
                        { q: '___ winter, it is cold.', choices: ['In', 'On', 'At'], a: 'In' },
                        { q: 'Summer is from June ___ August.', choices: ['and', 'to', 'between'], a: 'to' },
                        { q: 'The temperature is between 20 °C ___ 30 °C.', choices: ['to', 'and', 'from'], a: 'and' },
                        { q: 'There ___ four seasons in my city.', choices: ['is', 'are'], a: 'are' },
                        { q: 'It is very hot in ___.', choices: ['july', 'July'], a: 'July' },
                        { q: 'Jeddah has ___ summers.', choices: ['humid', 'humids', 'a humid'], a: 'humid' },
                        { q: 'The weather ___ windy in spring.', choices: ['is', '—'], a: 'is' },
                        { q: 'Choose the correct sentence.', choices: ['In summer, it is hot.', 'In summer it, is hot.'], a: 'In summer, it is hot.' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT2_TOPICS: Topic[] = [adjectives, nounPhrases, prepositional, thereIs, wordOrder, weatherVocab, unit2Skills, unit2Task];
