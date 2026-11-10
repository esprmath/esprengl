// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 3: Lifestyle
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 3 · Lifestyle';
const base = ['تحضيري', 'ENG 001', 'Unit 3', 'Lifestyle'];

// ─────────────── 3.1 Time expressions + prepositions of time (RW ص 71، LS ص 75) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
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
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'I have a class ___ Monday morning.',
                choices: ['in', 'on', 'at'],
                answer: 1,
                why: 'مع اليوم نستخدم on، حتى لو معه جزء من اليوم: on Monday morning.',
            },
            blocks: [
                { type: 'text', text: 'تعابير الوقت تقول متى يصير الشي وكم مرة، وتحتاجها كل ما وصفت يومك. والصعب فيها ثلاث كلمات: at و in و on. الثلاث معناها "في" بالعربي، والفرق بينها نوع الوقت: ساعة، ولا فترة، ولا يوم.' },

                { type: 'heading', text: 'الحرف 1: at + ساعة' },
                { type: 'text', view: 'both', text: 'للوقت المحدد مثل النقطة: الساعة، و night، و the weekend.' },
                { type: 'formula', parts: [['at', 'x', 'Preposition'], ['clock time / night / the weekend', 'n', 'Time']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['get up', 'v'], ['at', 'x', 'Preposition'], ['6:30', 'n', 'Clock time'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My father', 's'], ['works', 'v'], ['at', 'x', 'Preposition'], ['night', 'n', 'Time'], ['.', 'p']], ar: 'نقول at night، مو in the night.' },
                { type: 'breakdown', parts: [['We', 's'], ['visit', 'v'], ['our cousins'], ['at', 'x', 'Preposition'], ['the weekend', 'n', 'Time'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن يومك فيها at مع ساعة.', placeholder: 'I leave home at 7:15. Classes finish at 12:00.' },

                { type: 'heading', text: 'الحرف 2: in + جزء من اليوم أو شهر أو فصل' },
                { type: 'text', view: 'both', text: 'للفترة الأطول: الصبح، والعصر، والشهر، والفصل، والسنة.' },
                { type: 'formula', parts: [['in', 'x', 'Preposition'], ['the morning / July / summer / 2026', 'n', 'Time']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['study', 'v'], ['in', 'x', 'Preposition'], ['the afternoon', 'n', 'Part of day'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ['travel', 'v'], ['to Abha'], ['in', 'x', 'Preposition'], ['summer', 'n', 'Season'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My brother', 's'], ['was born', 'v'], ['in', 'x', 'Preposition'], ['2005', 'n', 'Year'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة فيها in + جزء من اليوم، وجملة فيها in + شهر.', placeholder: 'I relax in the evening. My birthday is in March.' },

                { type: 'heading', text: 'الحرف 3: on + يوم أو تاريخ' },
                { type: 'text', view: 'both', text: 'وإذا جا اليوم مع جزء من اليوم، تبقى on.' },
                { type: 'formula', parts: [['on', 'x', 'Preposition'], ['Sunday / 10 May / Monday morning', 'n', 'Day']] },
                { type: 'breakdown', view: 'both', parts: [['We', 's'], ['have', 'v'], ['no classes'], ['on', 'x', 'Preposition'], ['Friday', 'n', 'Day'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My birthday', 's'], ['is', 'v'], ['on', 'x', 'Preposition'], ['5 March', 'n', 'Date'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ['play', 'v'], ['football'], ['on', 'x', 'Preposition'], ['Tuesday afternoon', 'n', 'Day + part'], ['.', 'p']], ar: 'اليوم يكسب: on Tuesday afternoon، مو in.' },
                { type: 'try', task: 'اكتب جملة عن شي تسويه في يوم معين.', placeholder: 'I visit my grandparents on Thursday evening.' },

                { type: 'heading', text: 'الحرف 4: كم مرة؟ every و on Fridays' },
                { type: 'text', view: 'both', text: 'every بعدها مفرد وما قبلها on. و on Fridays (بـ s) تعني كل جمعة.' },
                { type: 'formula', parts: [['every', 'x', 'How often?'], ['singular noun', 'n'], ['|'], ['on', 'x', 'Preposition'], ['day + s', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['My mother', 's'], ['calls', 'v'], ['my grandmother'], ['every', 'x', 'How often?'], ['day', 'n', 'Singular'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ['go', 'v'], ['to the gym'], ['every', 'x', 'How often?'], ['Monday', 'n', 'Singular'], ['.', 'p']], ar: 'on every Monday ✗' },
                { type: 'breakdown', parts: [['We', 's'], ['eat', 'v'], ['kabsa'], ['on', 'x', 'Preposition'], ['Fridays', 'n', 'Every Friday'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين: وحدة بـ every، ووحدة بـ on + days.', placeholder: 'I visit my uncle every Thursday. We go to the beach on Fridays.' },

                {
                    type: 'table',
                    head: ['at', 'in', 'on'],
                    rows: [
                        ['7:00, midday', 'the morning, the evening', 'Sunday, Monday morning'],
                        ['night, the weekend', 'July, summer, 2026', '10 May, Fridays'],
                    ],
                },
                { type: 'note', text: 'غلط شائع: in the night ✗، و in Monday morning ✗، و every days ✗.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: in, on or at?',
                    instructions: 'اختر حرف الجر الصحيح.',
                    choices: ['in', 'on', 'at'],
                    items: [
                        { q: 'We meet ___ the afternoon.', a: 'in' },
                        { q: 'I visit my uncle ___ Saturdays.', a: 'on' },
                        { q: 'They play football ___ the weekend.', a: 'at' },
                        { q: 'It is very hot ___ August.', a: 'in' },
                        { q: 'My birthday is ___ 5 March.', a: 'on' },
                        { q: 'The shop closes ___ 11 pm.', a: 'at' },
                        { q: 'I read ___ night before I sleep.', a: 'at' },
                        { q: 'We have Physics ___ Tuesday morning.', a: 'on' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Correct the time expression',
                    instructions: 'كل جملة فيها خطأ: اكتبها صحيحة.',
                    items: [
                        { q: 'I go to the gym on every Monday.', a: 'I go to the gym every Monday.' },
                        { q: 'She studies in the night.', a: 'She studies at night.' },
                        { q: 'We have a test in Sunday.', a: 'We have a test on Sunday.' },
                        { q: 'He drinks coffee every mornings.', a: 'He drinks coffee every morning.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'I visit my family ___ Mondays.', choices: ['in', 'on', 'at'], a: 'on' },
                        { q: 'Classes start ___ 8 am and finish ___ the afternoon.', choices: ['at / in', 'in / at', 'on / in', 'at / on'], a: 'at / in' },
                        { q: 'Min and Fen meet ___ 7:45 every day.', choices: ['on', 'in', 'at'], a: 'at' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: About you',
                    instructions: 'جاوب بجملة كاملة.',
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
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
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
            warmup: {
                q: 'وش المفعول به (object) في الجملة؟',
                sentence: 'My brother loves football.',
                choices: ['My brother', 'loves', 'football'],
                answer: 2,
                why: 'المفعول هو الشي اللي يقع عليه الفعل: loves وش؟ football.',
            },
            blocks: [
                { type: 'text', text: 'الفاعل (subject) اللي يسوي الشي، والفعل (verb) وش يسوي، والمفعول (object) الشي اللي يقع عليه الفعل. الجملة أقل شي فاعل + فعل، وبعدها نقدر نزيد مفعول (وش؟ مين؟) أو حرف جر ومكان أو وقت (وين؟ متى؟). نشوف نفس الجملة تكبر خطوة خطوة.' },

                { type: 'heading', text: 'النمط 1: Subject + Verb' },
                { type: 'text', view: 'both', text: 'أصغر جملة كاملة.' },
                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Saad', 's'], ['studies', 'v'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Abdullah', 's'], ['relaxes', 'v'], ['.', 'p']] },
                { type: 'breakdown', parts: [['People and plants', 's'], ['change', 'v'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة من فاعل وفعل بس.', placeholder: 'My brother sleeps.' },

                { type: 'heading', text: 'النمط 2: Subject + Verb + Object' },
                { type: 'text', view: 'both', text: 'اسأل بعد الفعل "وش؟" أو "مين؟"، والجواب هو المفعول.' },
                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['Object', 'n', 'What? / Who?']] },
                { type: 'breakdown', view: 'both', parts: [['Saad', 's'], ['studies', 'v'], ['English', 'n', 'Object'], ['.', 'p']], ar: 'studies وش؟ English.' },
                { type: 'breakdown', parts: [['He', 's'], ['has', 'v'], ['a busy timetable', 'n', 'Object'], ['.', 'p']], ar: 'المفعول ممكن يكون noun phrase.' },
                { type: 'breakdown', parts: [['I', 's'], ['love', 'v'], ['it', 'n', 'Object'], ['.', 'p']], ar: 'وممكن يكون ضمير.' },
                { type: 'try', task: 'اكتب جملة فيها مفعول عن شي تحبه.', placeholder: 'I love kabsa.' },

                { type: 'heading', text: 'النمط 3: Subject + Verb + Prepositional phrase' },
                { type: 'text', view: 'both', text: 'حرف جر + مكان أو وقت. هذا مو مفعول، معلومة زيادة.' },
                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['Prepositional phrase', 'x', 'Where? / When?']] },
                { type: 'breakdown', view: 'both', parts: [['We', 's'], ['live', 'v'], ['in Yanbu', 'x', 'Where?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My father', 's'], ['works', 'v'], ['in a hospital', 'x', 'Where?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Classes', 's'], ['start', 'v'], ['at 8 am', 'x', 'When?'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة: وين تشتغل أو تدرس.', placeholder: 'I study at the institute.' },

                { type: 'heading', text: 'النمط 4: Subject + Verb + Object + Prepositional phrase' },
                { type: 'text', view: 'both', text: 'الجملة كاملة، والترتيب ما يتغير: المفعول قبل الـ prepositional phrase.' },
                { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['Object', 'n'], ['Prepositional phrase', 'x', 'Where? / When?']] },
                { type: 'breakdown', view: 'both', parts: [['Saad', 's'], ['studies', 'v'], ['English', 'n', 'Object'], ['at the institute', 'x', 'Where?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['She', 's'], ['eats', 'v'], ['breakfast', 'n', 'Object'], ['at 7 am', 'x', 'When?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ['meet', 'v'], ['our friends', 'n', 'Object'], ['at the weekend', 'x', 'When?'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة فيها الأجزاء الأربعة. استخدم have أو drink أو meet.', placeholder: 'I drink coffee in the morning.' },

                { type: 'note', text: 'غلط شائع: I in the morning drink coffee ✗. الترتيب: فاعل، فعل، مفعول، ثم الوقت أو المكان.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Which pattern?',
                    instructions: 'اختر نوع الجملة.',
                    choices: ['S+V', 'S+V+O', 'S+V+PP', 'S+V+O+PP'],
                    items: [
                        { q: 'Ali sleeps.', a: 'S+V' },
                        { q: 'My sister studies Biology.', a: 'S+V+O' },
                        { q: 'We live in Yanbu.', a: 'S+V+PP' },
                        { q: 'I drink coffee in the morning.', a: 'S+V+O+PP' },
                        { q: 'Abdullah studies Arab History at university.', a: 'S+V+O+PP' },
                        { q: 'He has a busy timetable.', a: 'S+V+O' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Find the object',
                    instructions: 'وش المفعول؟ (إذا ما فيه اختر none)',
                    items: [
                        { q: 'Mandy grows vegetables in the summer.', choices: ['Mandy', 'vegetables', 'in the summer', 'none'], a: 'vegetables' },
                        { q: 'Mandy works in a greenhouse.', choices: ['Mandy', 'works', 'in a greenhouse', 'none'], a: 'none' },
                        { q: 'They watch TV every evening.', choices: ['They', 'TV', 'every evening', 'none'], a: 'TV' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Put the words in order',
                    instructions: 'رتب الكلمات.',
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
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const presentSimple: Topic = {
    slug: 'present-simple',
    title: 'The present simple',
    titleAr: 'المضارع البسيط',
    keywords: ['present simple', 'simple present', 'do does', "don't", "doesn't", 'he she it s', 'third person', 'routines', 'مضارع', 'المضارع البسيط', 'روتين', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'The present simple',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'My sister ___ English every day.',
                choices: ['study', 'studies', 'studys'],
                answer: 1,
                why: 'مع he و she و it الفعل ياخذ s، و study تصير studies. تحت بالتفصيل.',
            },
            blocks: [
                { type: 'text', text: 'المضارع البسيط للروتين (اللي تسويه كل يوم) وللحقائق (اللي صحيحة دايم). وهو مطلوب في تكليف 1.' },

                { type: 'heading', text: 'الشكل 1: I / you / we / they + الفعل' },
                { type: 'text', view: 'both', text: 'الفعل يبقى على أصله بدون إضافة.' },
                { type: 'formula', parts: [['I / you / we / they', 's'], ['Verb', 'v'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['have', 'v'], ['breakfast'], ['every morning'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ['live', 'v'], ['in Yanbu'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My parents', 's', 'They'], ['work', 'v'], ['in a hospital'], ['.', 'p']], ar: 'الجمع مثل they.' },
                { type: 'try', task: 'اكتب جملتين عن روتينك.', placeholder: 'I get up at 6:00. I go to the institute by bus.' },

                { type: 'heading', text: 'الشكل 2: he / she / it + الفعل + s' },
                { type: 'text', view: 'both', text: 'مع he أو she أو it، أو أي اسم مفرد مثل My father، نزيد s على الفعل.' },
                { type: 'formula', parts: [['he / she / it', 's'], ['Verb', 'v'], ['+ s', 'x', 's']] },
                { type: 'breakdown', view: 'both', parts: [['My father', 's', 'He'], ['leave', 'v'], ['s', 'x', 's'], ['home at 7 am'], ['.', 'p']] },
                { type: 'breakdown', parts: [['She', 's'], ['cook', 'v'], ['s', 'x', 's'], ['dinner every evening'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The bus', 's', 'It'], ['arrive', 'v'], ['s', 'x', 's'], ['at 7:15'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن روتين واحد من عائلتك.', placeholder: 'My brother gets up at 6. He drinks coffee.' },

                { type: 'heading', text: 'الشكل 3: إملاء الـ s' },
                { type: 'text', view: 'both', text: 'أغلب الأفعال + s، بس فيه حالات تتغير.' },
                { type: 'breakdown', view: 'both', parts: [['watch', 'v'], ['es', 'x', 's, sh, ch, x → es']], ar: 'و wash → washes، relax → relaxes، go → goes، do → does.' },
                { type: 'breakdown', parts: [['stud', 'v'], ['ies', 'x', 'consonant + y → ies']], ar: 'و fly → flies.' },
                { type: 'breakdown', parts: [['play', 'v'], ['s', 'x', 'vowel + y → s']], ar: 'و say → says.' },
                { type: 'breakdown', parts: [['ha', 'v'], ['s', 'x', 'have → has']], ar: 'have شاذ: he has.' },
                { type: 'try', task: 'حوّل مع she: watch، study، play، go.', reference: 'watches, studies, plays, goes', placeholder: 'watches, …' },

                { type: 'heading', text: "الشكل 4: النفي، don't و doesn't" },
                { type: 'text', view: 'both', text: "بعد doesn't الفعل يرجع بدون s، لأن الـ s راحت لـ does." },
                { type: 'formula', parts: [['Subject', 's'], ["don't / doesn't", 'hv'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ["don't", 'hv'], ['walk', 'v'], ['to school'], ['.', 'p']] },
                { type: 'breakdown', view: 'both', parts: [['She', 's'], ["doesn't", 'hv', 'does + not'], ['watch', 'v', 'No s'], ['TV'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My friends', 's'], ["don't", 'hv'], ['play', 'v'], ['video games'], ['.', 'p']] },
                { type: 'try', task: "اكتب جملة عنك بـ don't، وجملة عن صديق بـ doesn't.", placeholder: "I don't like fast food. My friend doesn't play football." },

                { type: 'heading', text: 'الشكل 5: السؤال، Do / Does' },
                { type: 'text', view: 'both', text: 'Do أو Does أول، والفعل بدون s، والجواب القصير بنفس do / does.' },
                { type: 'formula', parts: [['Do / Does', 'hv'], ['Subject', 's'], ['base verb', 'v'], ['…?']] },
                { type: 'breakdown', view: 'both', parts: [['Do', 'hv'], ['you', 's'], ['cook', 'v'], ['?', 'p']], ar: "Yes, I do. / No, I don't." },
                { type: 'breakdown', parts: [['Does', 'hv'], ['your brother', 's'], ['play', 'v'], ['football'], ['?', 'p']], ar: "Yes, he does. / No, he doesn't." },
                { type: 'try', task: 'اكتب سؤال لزميلك بـ Do you، وجاوبه.', placeholder: "Do you live near the institute? No, I don't." },

                { type: 'heading', text: 'الشكل 6: أسئلة wh-' },
                { type: 'text', view: 'both', text: 'نفس السؤال، وقبله كلمة سؤال: What، Where، When، How many.' },
                { type: 'formula', parts: [['Wh- word', 'x', 'Question word'], ['do / does', 'hv'], ['Subject', 's'], ['base verb', 'v'], ['?', 'p']] },
                { type: 'breakdown', view: 'both', parts: [['Where', 'x', 'Question word'], ['do', 'hv'], ['you', 's'], ['study', 'v'], ['?', 'p']], ar: 'I study at the institute.' },
                { type: 'breakdown', parts: [['What time', 'x', 'Question word'], ['does', 'hv'], ['the bus', 's'], ['leave', 'v'], ['?', 'p']], ar: 'It leaves at 7:15.' },
                { type: 'breakdown', parts: [['How many hours', 'x', 'Question word'], ['do', 'hv'], ['you', 's'], ['sleep', 'v'], ['?', 'p']] },
                { type: 'try', task: 'اكتب سؤالين wh- لزميلك عن روتينه.', placeholder: 'What time do you get up? Where do you have lunch?' },

                { type: 'heading', text: 'الشكل 7: نطق الـ s' },
                { type: 'text', view: 'both', text: 'ثلاث أصوات: /s/ و /z/ و /ɪz/ (مقطع زيادة).' },
                { type: 'breakdown', view: 'both', parts: [['get', 'v'], ['s', 'x', '/s/']], ar: 'بعد p، t، k، f: sleeps، takes.' },
                { type: 'breakdown', parts: [['play', 'v'], ['s', 'x', '/z/']], ar: 'بعد أغلب الأصوات: goes، lives، studies.' },
                { type: 'breakdown', parts: [['watch', 'v'], ['es', 'x', '/ɪz/']], ar: 'بعد s، sh، ch، x: washes، relaxes.' },

                { type: 'note', text: "غلط شائع: She doesn't works ✗، و Is she drive? ✗ (الصح Does she drive?)، و He go ✗." },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Spell the verb',
                    instructions: 'اختر شكل الفعل مع he / she.',
                    items: [
                        { q: 'Ali ___ (watch) TV after school.', choices: ['watchs', 'watches'], a: 'watches' },
                        { q: 'She ___ (fly) to Riyadh every month.', choices: ['flys', 'flies'], a: 'flies' },
                        { q: 'My brother ___ (go) to the gym on Sundays.', choices: ['gos', 'goes'], a: 'goes' },
                        { q: 'He ___ (have) a big family.', choices: ['haves', 'has'], a: 'has' },
                        { q: 'She ___ (say) hello to everyone.', choices: ['saies', 'says'], a: 'says' },
                        { q: 'The bus ___ (leave) at 7:15.', choices: ['leave', 'leaves'], a: 'leaves' },
                    ],
                },
                {
                    type: 'exercise',
                    title: "Exercise B: do, does, don't or doesn't?",
                    instructions: 'اختر الكلمة الصحيحة.',
                    choices: ['do', 'does', "don't", "doesn't"],
                    items: [
                        { q: 'I ___ like fast food.', a: "don't" },
                        { q: 'Faisal ___ work at weekends.', a: "doesn't" },
                        { q: '___ you play video games?', a: 'do' },
                        { q: 'Where ___ your uncle live?', a: 'does' },
                        { q: 'They ___ have classes on Friday.', a: "don't" },
                        { q: 'How many hours ___ she sleep?', a: 'does' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'My sister _____ home from work at 4:00 pm. She usually _____ to go out on weekdays, but she _____ dinner with me every Friday.', choices: ["arrive / doesn't likes / has", "arrives / don't like / have", "arrives / doesn't like / has", "arrive / don't like / have"], a: "arrives / doesn't like / has" },
                        { q: 'Sara drives to work. Her work starts at 9:00. 1) Does Sara drive to work? 2) When does her work start?', choices: ['1) Yes, she drives. 2) It start at 9:00.', '1) Yes, she does. 2) It starts at 9:00.', '1) Yes, she is. 2) It starts at 9:00.'], a: '1) Yes, she does. 2) It starts at 9:00.' },
                        { q: 'They ___ English on the weekends.', choices: ['study', 'studies', 'studying', 'studys'], a: 'study' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Pronunciation of -s',
                    instructions: 'وش صوت آخر الكلمة؟',
                    choices: ['/s/', '/z/', '/ɪz/'],
                    items: [
                        { q: 'gets', a: '/s/' },
                        { q: 'plays', a: '/z/' },
                        { q: 'watches', a: '/ɪz/' },
                        { q: 'takes', a: '/s/' },
                        { q: 'lives', a: '/z/' },
                        { q: 'relaxes', a: '/ɪz/' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise E: Write (Assignment 1 style)',
                    instructions: 'اكتب بالمضارع البسيط.',
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
// درس مستقل: وش هي الفكرة الرئيسية ← نموذج بارقراف مفكك ← كيف تلقاها ← أنواع التفاصيل بمثال لكل نوع ← التفصيل اللي ما يخدم ← سؤال الكويز.
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
            warmup: {
                q: 'صديقك كتب لك: "يومي كان متعب. صحيت 5 الفجر، وعندي 4 محاضرات، ورجعت البيت 9 بالليل." لو أحد سألك: عن وش كلامه؟',
                choices: ['إنه صحى 5 الفجر', 'إن يومه كان متعب', 'إنه رجع 9 بالليل'],
                answer: 1,
                why: '"يومه كان متعب" هي الفكرة الرئيسية. والباقي تفاصيل تثبتها. هذا بالضبط درس اليوم، بس بالإنجليزي.',
            },
            blocks: [
                // ── 1. وش يعني ──
                { type: 'heading', text: 'وش يعني main idea و details؟' },
                { type: 'text', text: 'البارقراف (paragraph) مجموعة جمل عن موضوع واحد. وجمله نوعين:' },
                {
                    type: 'table',
                    head: ['الجزء', 'وش هو؟', 'يجاوب على'],
                    rows: [
                        ['Main idea (الفكرة الرئيسية)', 'جملة وحدة عامة تقول الفكرة كلها', 'عن وش البارقراف؟'],
                        ['Details (التفاصيل)', 'جمل بعدها تشرح الفكرة وتثبتها', 'كيف؟ متى؟ كم؟ مثل وش؟'],
                    ],
                },
                { type: 'text', text: 'تخيلها مظلة: الفكرة الرئيسية هي المظلة فوق، والتفاصيل كلها تحتها. أي جملة ما تدخل تحت المظلة، ما لها مكان في البارقراف.' },

                // ── 2. نموذج ──
                { type: 'heading', text: 'نشوفها في بارقراف حقيقي' },
                { type: 'text', text: 'هذا بارقراف عن طالبة اسمها ريم. الجملة الأولى (بالأزرق) هي الفكرة الرئيسية، والباقي (بالأخضر) تفاصيل:' },
                { type: 'breakdown', view: 'both', parts: [['Reem is a busy student.', 's', 'Main idea'], ['She studies English for four hours every day.', 'v', 'Detail'], ['She has classes from 8 am to 12 pm.', 'v', 'Detail'], ['In the evening, she does her homework.', 'v', 'Detail']], ar: 'كل تفصيل يثبت إنها busy: 4 ساعات إنجليزي، ودوام من 8 لـ 12، وواجبات بالليل.' },

                // ── 3. كيف تلقاها ──
                { type: 'heading', text: 'كيف تعرف الفكرة الرئيسية؟' },
                { type: 'list', lang: 'ar', ordered: true, items: ['غالبًا هي أول جملة.', 'هي الأعم: باقي الجمل تشرحها، وهي ما تشرح جملة ثانية.', 'اختبرها: لو قلتها لحالها، يفهم السامع عن وش البارقراف.'] },
                { type: 'breakdown', view: 'both', parts: [['Reem is a busy student.', 's', 'General = main idea'], ['She has classes from 8 am to 12 pm.', 'v', 'Specific = detail']], ar: 'الأولى عامة تغطي البارقراف كله، والثانية معلومة وحدة بس.' },
                { type: 'note', text: 'انتبه: الموضوع (topic) كلمة مثل Reem، أما الفكرة الرئيسية فجملة كاملة تقول شي عنها: Reem is a busy student.' },

                // ── 4. أنواع التفاصيل ──
                { type: 'heading', text: 'وش تكون التفاصيل؟' },
                { type: 'text', text: 'التفصيل يعطي معلومة محددة تثبت الفكرة. أشهر أنواعه أربعة: وقت، ورقم، ومثال، ومكان. شوفها كلها في بارقراف واحد:' },
                { type: 'breakdown', view: 'both', parts: [['My uncle has a busy job.', 's', 'Main idea'], ['He works from 7 am to 6 pm.', 'v', 'Time: متى؟'], ['He answers 50 emails a day.', 'v', 'Number: كم؟'], ['For example, he travels to Riyadh every month.', 'v', 'Example: مثل وش؟'], ['He has meetings in three offices.', 'v', 'Place: وين؟']], ar: 'كل تفصيل نوع مختلف، وكلها تثبت إن شغله busy. وكلمة For example تبين لك إن اللي بعدها مثال.' },

                // ── 5. التفصيل اللي ما يخدم ──
                { type: 'heading', text: 'التفصيل لازم يكون عن نفس الفكرة' },
                { type: 'text', text: 'لو البارقراف عن دراسة ريم، ما تكتب عن سيارة أبوها حتى لو المعلومة صحيحة. هذا اسمه relevant information.' },
                { type: 'breakdown', view: 'both', parts: [['Reem is a busy student.', 's', 'Main idea'], ['She has classes from 8 am to 12 pm.', 'v', 'Detail ✓'], ['Her father has a new car.', 'x', 'Not relevant ✗'], ['She does her homework every evening.', 'v', 'Detail ✓']] },

                // ── 6. في الاختبار ──
                { type: 'heading', text: 'في الكويز' },
                { type: 'text', text: 'السؤال يجي كذا: What is the main idea of the paragraph? والخيار الغلط المشهور: تفصيل صحيح من النص. اسأل نفسك: هل هالخيار يغطي البارقراف كله، ولا جملة وحدة بس؟' },

                // ── أمثلة إضافية ──
                { type: 'heading', text: 'بارقرافات ثانية' },
                { type: 'breakdown', view: 'both', parts: [['Faisal has a healthy lifestyle.', 's', 'Main idea'], ['He goes to the gym four times a week.', 'v', 'Number'], ['He eats a lot of vegetables.', 'v', 'Example'], ['He sleeps for eight hours every night.', 'v', 'Time']] },
                { type: 'breakdown', parts: [['My grandmother has a simple life.', 's', 'Main idea'], ['She gets up early.', 'v', 'Time'], ['She works in her garden every morning.', 'v', 'Place'], ['In the evening, she tells us stories.', 'v', 'Example']] },
                { type: 'try', task: 'اكتب main idea عن شخص تعرفه، وتحتها تفصيلين: واحد فيه وقت، وواحد فيه رقم.', placeholder: 'My brother has a busy week. He works from 8 am to 5 pm. He has three exams.' },
                { type: 'try', task: 'كمّل البارقراف بتفصيل ثالث: "At the weekend, Abdullah relaxes with his friends. Sometimes he goes to the cinema. ______"', reference: 'On Saturday evening, they eat dinner at a restaurant.', placeholder: 'On Saturday …' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Main idea or detail?',
                    instructions: 'البارقراف عن: "My weekends are relaxing." كل جملة تحت: هي الفكرة الرئيسية ولا تفصيل؟',
                    choices: ['Main idea', 'Detail'],
                    items: [
                        { q: 'My weekends are relaxing.', a: 'Main idea' },
                        { q: 'On Friday, I visit my grandparents.', a: 'Detail' },
                        { q: 'I sleep for ten hours on Saturday.', a: 'Detail' },
                        { q: 'In the evening, I play football with my friends.', a: 'Detail' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Find the main idea',
                    instructions: 'اختر الجملة اللي فيها الفكرة الرئيسية.',
                    items: [
                        { q: 'Saad has three classes every weekday morning. He has Physics from 8 am to 9 am. Then he has Maths. His last class is Engineering.', choices: ['Saad has three classes every weekday morning.', 'Then he has Maths.', 'His last class is Engineering.'], a: 'Saad has three classes every weekday morning.' },
                        { q: 'There are many things to do in Yanbu. You can swim in the sea. You can visit the old town. There are big parks for families.', choices: ['You can swim in the sea.', 'There are many things to do in Yanbu.', 'There are big parks for families.'], a: 'There are many things to do in Yanbu.' },
                        { q: 'My cousin Omar loves sport. He plays football on Mondays. He swims every weekend. He watches matches on TV every evening.', choices: ['He swims every weekend.', 'My cousin Omar loves sport.', 'He watches matches on TV.'], a: 'My cousin Omar loves sport.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Relevant or not?',
                    instructions: 'الفكرة الرئيسية: "Saad has three classes every weekday morning." التفصيل يخدمها؟',
                    choices: ['Relevant', 'Not relevant'],
                    items: [
                        { q: 'He has English from 8 am to 9 am.', a: 'Relevant' },
                        { q: 'His brother has a new car.', a: 'Not relevant' },
                        { q: 'Then he has Maths from 9:15 to 10:15.', a: 'Relevant' },
                        { q: 'His favourite food is kabsa.', a: 'Not relevant' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Exam style',
                    instructions: 'نفس شكل سؤال الكويز. انتبه للخيار اللي هو تفصيل بس.',
                    items: [
                        { q: 'Nora works at a hospital in Jeddah. She is a nurse and she helps sick children. She works five days a week. She loves her job. What is the main idea?', choices: ['Nora works five days a week.', 'Nora has a job as a nurse at a hospital.', 'Nora lives in Jeddah.'], a: 'Nora has a job as a nurse at a hospital.' },
                        { q: 'Abha is a good place for a summer holiday. The weather is cool. There are green mountains. Many families go there in July. What is the main idea?', choices: ['The weather in Abha is cool.', 'Many families go to Abha in July.', 'Abha is a good place for a summer holiday.'], a: 'Abha is a good place for a summer holiday.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise E: Write a short paragraph',
                    instructions: 'اكتب main idea و 3 تفاصيل (وقت، ورقم، ومثال).',
                    items: [{ q: 'Write about the busy day of someone in your family.', a: 'My mother has a busy day. She gets up at 5 am. She teaches 30 students at a school. For example, she checks their homework every evening.' }],
                },
            ],
        },
    ],
};

// ─────────────── 3.5 Vocabulary: daily activities، study، collocations (RW ص 69 و70، LS ص 69) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
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
            warmup: {
                q: 'وش الصحيح؟',
                choices: ['make breakfast and do homework', 'do breakfast and make homework'],
                answer: 0,
                why: 'هذي اسمها collocations: كلمات تجي مع بعض دايم، وتنحفظ مع بعض.',
            },
            blocks: [
                { type: 'text', text: 'الـ collocation كلمتين تجي مع بعض دايم، مثل do homework (مو make homework). ما لها قاعدة، فتحفظها مع بعض. أكثرها أربع أفعال:' },

                { type: 'heading', text: 'الفعل 1: have + وجبة أو حصة' },
                { type: 'text', view: 'both', text: 'للوجبات نقول have، مو eat breakfast بس.' },
                { type: 'formula', parts: [['have', 'v'], ['breakfast / lunch / dinner / a class', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['have', 'v'], ['breakfast', 'n'], ['with my family'], ['.', 'p']], ar: 'have breakfast = أفطر، و have lunch = أتغدى، و have dinner = أتعشى، و have a class = عندي حصة.' },
                { type: 'breakdown', parts: [['We', 's'], ['have', 'v'], ['an English class', 'n'], ['at 8 am'], ['.', 'p']] },
                { type: 'breakdown', parts: [['He', 's'], ['has', 'v'], ['lunch', 'n'], ['at home'], ['.', 'p']], ar: 'has مع he.' },
                { type: 'try', task: 'اكتب جملة فيها have + وجبة.', placeholder: 'I have dinner at 9 pm.' },

                { type: 'heading', text: 'الفعل 2: go + to / home / online' },
                { type: 'text', view: 'both', text: 'go to + مكان، بس home و online و to bed لها شكلها.' },
                { type: 'formula', parts: [['go', 'v'], ['to the gym / home / online / to bed', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['go', 'v'], ['to the gym', 'n'], ['at 6 pm'], ['.', 'p']], ar: 'go to the gym = أروح النادي، و go home = أروح البيت، و go online = أدخل النت، و go to bed = أنام.' },
                { type: 'breakdown', parts: [['He', 's'], ['goes', 'v'], ['home', 'n', 'No to'], ['at 1 pm'], ['.', 'p']], ar: 'go to home ✗' },
                { type: 'breakdown', parts: [['My sister', 's'], ['goes', 'v'], ['online', 'n'], ['every evening'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ['go', 'v'], ['to bed', 'n'], ['at 11'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين بـ go عن يومك.', placeholder: 'I go home at 1. I go to bed at 11.' },

                { type: 'heading', text: 'الفعل 3: take + مواصلة أو مادة' },
                { type: 'text', view: 'both', text: 'take للباص والتاكسي، وللمادة اللي تسجلها.' },
                { type: 'formula', parts: [['take', 'v'], ['the bus / a taxi / a course', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['My brother', 's'], ['takes', 'v'], ['the bus', 'n'], ['to university'], ['.', 'p']], ar: 'take the bus = يركب الباص، و take a course = يسجل مادة.' },
                { type: 'breakdown', parts: [['Abdullah', 's'], ['takes', 'v'], ['five courses', 'n'], ['.', 'p']] },
                { type: 'try', task: 'كيف تروح المعهد؟ اكتبها بـ take.', placeholder: 'I take a taxi to the institute.' },

                { type: 'heading', text: 'الفعل 4: do + homework و exercise' },
                { type: 'text', view: 'both', text: 'do homework = أحل الواجب، و do exercise = أتمرن. ولا تقول make homework.' },
                { type: 'formula', parts: [['do', 'v'], ['homework / exercise', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['do', 'v'], ['my homework', 'n'], ['in the afternoon'], ['.', 'p']] },
                { type: 'breakdown', parts: [['She', 's'], ['does', 'v'], ['exercise', 'n'], ['every morning'], ['.', 'p']] },
                { type: 'try', task: 'متى تذاكر؟ اكتبها بـ do.', placeholder: 'I do my homework at 4 pm.' },

                { type: 'heading', text: 'المواد الدراسية' },
                {
                    type: 'table',
                    head: ['Science', 'Arts and Humanities', 'Business', 'Languages'],
                    rows: [
                        ['Maths', 'History', 'Economics', 'English'],
                        ['Physics', 'Geography', 'Management', 'Arabic'],
                        ['Chemistry', 'Art', 'Accounting', 'French'],
                        ['Biology', 'Literature', 'Marketing', 'Chinese'],
                    ],
                    stackBy: 'column',
                },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['want to study', 'v'], ['Computer Science', 'n', 'Capital letters'], ['.', 'p']], ar: 'المادة بحرف كبير، وبدون the.' },

                { type: 'note', text: 'غلط شائع: make homework ✗، و go to home ✗، و eat breakfast صح بس have breakfast أشهر.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the verb',
                    instructions: 'اختر الفعل اللي يجي مع الكلمة.',
                    choices: ['have', 'go', 'take', 'do'],
                    items: [
                        { q: '___ breakfast', a: 'have' },
                        { q: '___ homework', a: 'do' },
                        { q: '___ to the gym', a: 'go' },
                        { q: '___ a class', a: 'have' },
                        { q: '___ online', a: 'go' },
                        { q: '___ a course', a: 'take' },
                        { q: '___ exercise', a: 'do' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل قسم Vocabulary في الكويز.',
                    items: [
                        { q: 'Every working day, Khalid ___ home early to avoid the traffic.', choices: ['gets up', 'leaves', 'lives', 'sleeps'], a: 'leaves' },
                        { q: 'He always ___ to the news on the radio in the car.', choices: ['sends', 'reads', 'studies', 'listens'], a: 'listens' },
                        { q: 'She ___ her car once a week to keep it clean.', choices: ['drives', 'watches', 'washes', 'sells'], a: 'washes' },
                        { q: 'Ahmed studies ___. He learns about money and business.', choices: ['Economics', 'Physics', 'Literature', 'Geography'], a: 'Economics' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Your day',
                    instructions: 'اكتب.',
                    items: [{ q: 'Write four sentences about your day. Use four different collocations.', a: 'I get up at 6. I take the bus to the institute. I have lunch at home. I do my homework in the evening.' }],
                },
            ],
        },
    ],
};

// ─────────────── 3.6 Skills: annotating، listening for main ideas، intonation (RW ص 67، LS ص 63 و64) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const unit3Skills: Topic = {
    slug: 'annotating-main-ideas-intonation',
    title: 'Annotating, listening for main ideas and intonation',
    titleAr: 'مهارات: التعليق على النص والفكرة الرئيسية في الاستماع ونغمة السؤال',
    keywords: ['annotating', 'annotate', 'listening for main ideas', 'intonation', 'questions', 'surveys', 'مهارات', 'تظليل', 'نغمة', 'استماع', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Annotating, listening for main ideas and intonation',
            warmup: {
                q: 'في السؤال "Do you like coffee?" صوتك آخر السؤال:',
                choices: ['يطلع ↗', 'ينزل ↘'],
                answer: 0,
                why: 'سؤال yes/no صوته يطلع ↗، وسؤال wh- ينزل ↘.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مهارات: تظلل الكلمات المهمة وأنت تقرأ، وتلقط الفكرة الرئيسية وأنت تسمع، وتنطق السؤال بنغمة صحيحة.' },

                { type: 'heading', text: 'المهارة 1: Annotating، ظلل المهم' },
                { type: 'text', view: 'both', text: 'ظلل الأسماء والأماكن والأرقام والأوقات، وخلّ الكلمات الصغيرة.' },
                { type: 'breakdown', view: 'both', parts: [['In'], ['summer', 'x', 'When'], [','], ['Mandy Logan', 'n', 'Who'], ['works in a'], ['greenhouse', 'adj', 'What'], ['in'], ['Inuvik, Canada', 's', 'Where'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Noura', 'n', 'Who'], ['studies'], ['Chemistry', 'adj', 'What'], ['at'], ['King Saud University', 's', 'Where'], ['.', 'p']] },
                { type: 'breakdown', parts: [['She has classes from'], ['8 am to 2 pm', 'x', 'When'], ['.', 'p']], ar: 'لما يجي سؤال When؟ ترجع للأحمر على طول.' },
                { type: 'try', task: 'اقرأ: "Ali lives in Taif. He studies Physics. He plays tennis on Fridays." وش تظلل لو السؤال: What does Ali do on Fridays?', reference: 'plays tennis on Fridays', placeholder: 'plays …' },

                { type: 'heading', text: 'المهارة 2: Listening for main ideas' },
                { type: 'text', view: 'both', text: 'أول مرة تسمع، جاوب 3 أسئلة بس: وين؟ مين؟ ليش يتكلمون؟' },
                { type: 'formula', parts: [['Where?', 's'], ['Who?', 'n'], ['Why?', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['"Excuse me, are you a student here? Can I ask you some questions for our survey?"', 'x', 'You hear'], ['university', 's', 'Where?'], ['two students', 'n', 'Who?'], ['to do a survey', 'v', 'Why?']] },
                { type: 'breakdown', parts: [['"Good morning. A table for two, please."', 'x', 'You hear'], ['a restaurant', 's', 'Where?'], ['a customer and a waiter', 'n', 'Who?'], ['to eat', 'v', 'Why?']] },
                { type: 'try', task: 'تسمع: "Hello, I have a pain in my arm." وين؟ مين؟ ليش؟', reference: 'At a hospital. A patient and a doctor. To get help.', placeholder: 'At a … A … and a … To …' },

                { type: 'heading', text: 'المهارة 3: Intonation، يطلع ولا ينزل؟' },
                { type: 'text', view: 'both', text: 'سؤال yes / no صوته يطلع ↗، وسؤال wh- والجواب ينزل ↘.' },
                { type: 'breakdown', view: 'both', parts: [['Do you live with your parents', 's', 'Yes / no'], ['↗', 'x', 'Up']], ar: 'Yes, I do. ↘' },
                { type: 'breakdown', parts: [['Is your timetable busy', 's', 'Yes / no'], ['↗', 'x', 'Up']] },
                { type: 'breakdown', parts: [['What time do you get up', 'v', 'Wh-'], ['↘', 'p', 'Down']], ar: 'At six. ↘' },
                { type: 'breakdown', parts: [['How many hours do you sleep', 'v', 'Wh-'], ['↘', 'p', 'Down']] },
                { type: 'try', task: 'اكتب سؤالين لاستبيان: واحد yes/no وواحد wh-، وحط السهم آخر كل واحد.', placeholder: 'Do you exercise? ↗ What do you do at the weekend? ↘' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Up or down?',
                    instructions: 'صوتك آخر السؤال يطلع ولا ينزل؟',
                    choices: ['↗ up', '↘ down'],
                    items: [
                        { q: 'Do you live with your parents?', a: '↗ up' },
                        { q: 'Where do you study?', a: '↘ down' },
                        { q: 'Does your brother work?', a: '↗ up' },
                        { q: 'How many hours do you sleep?', a: '↘ down' },
                        { q: 'What do you do at the weekend?', a: '↘ down' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Annotate',
                    instructions: 'النص: "Noura is a student in Riyadh. She studies Chemistry. She has classes from 8 am to 2 pm. In her free time, she reads books."',
                    items: [
                        { q: 'Which words answer "When are her classes?"', choices: ['in Riyadh', '8 am to 2 pm', 'reads books'], a: '8 am to 2 pm' },
                        { q: 'Which words answer "What does she do in her free time?"', choices: ['studies Chemistry', 'reads books', 'a student'], a: 'reads books' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Main idea of a conversation',
                    instructions: 'المحادثة: "A: Excuse me, are you a student here? B: Yes, I am. A: Can I ask you about your lifestyle? How many hours do you study every day? B: About five hours."',
                    items: [
                        { q: 'Where are the speakers?', choices: ['at a university', 'in a hospital'], a: 'at a university' },
                        { q: 'Why is A speaking?', choices: ['to do a survey', 'to buy food'], a: 'to do a survey' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 3: life of a student + survey (RW ص 77 و78، LS ص 78) ───────────────
// نمط أول أربع دروس: البارقراف جزء جزء، كل جزء: جمل ملونة ← كتابة.
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
            warmup: {
                q: 'لو تكتب عن زميلك، الفعل مع he ياخذ:',
                choices: ['s (He studies)', 'بدون s (He study)'],
                answer: 0,
                why: 'المهمة كلها بالمضارع البسيط مع he أو she.',
            },
            blocks: [
                { type: 'text', text: 'المهمة: بارقراف عن حياة طالب من فصلك، بالمضارع البسيط. نبنيه 3 أجزاء، وبعد كل جزء تكتب جزءك.' },

                { type: 'heading', text: 'النموذج اللي بنبنيه' },
                { type: 'example', view: 'both', en: 'Nawaf is a student in my class at the Preparatory Year Institute. He studies English for twenty hours every week. He gets up at 6 am and he has classes from 8 am to 12 pm. On Monday afternoons, he meets his study group in the library. At the weekend, he plays football with his friends. He enjoys his busy life.' },
                { type: 'text', text: 'الحين نفككه 3 أجزاء: الفكرة الرئيسية، ثم الدراسة والجدول، ثم وقت الفراغ.' },

                { type: 'heading', text: 'الجزء 1: الفكرة الرئيسية' },
                { type: 'text', view: 'both', text: 'مين هو، ووين يدرس.' },
                { type: 'breakdown', view: 'both', parts: [['Nawaf', 's'], ['is', 'v'], ['a student in my class', 'n'], ['at the Preparatory Year Institute', 'x', 'Where?'], ['.', 'p']] },
                { type: 'try', task: 'اكتب الجملة الرئيسية عن زميلك.', placeholder: '… is a student in my class.' },

                { type: 'heading', text: 'الجزء 2: الدراسة والجدول' },
                { type: 'text', view: 'both', text: 'الفعل مع he ياخذ s، والوقت بـ at و from … to.' },
                { type: 'breakdown', view: 'both', parts: [['He', 's'], ['studies', 'v'], ['English', 'n'], ['for twenty hours every week', 'x', 'How long?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['He', 's'], ['gets up', 'v'], ['at 6 am', 'x', 'When?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['He', 's'], ['has', 'v'], ['classes', 'n'], ['from 8 am to 12 pm', 'x', 'When?'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين أو ثلاث عن دراسته وجدوله.', placeholder: 'He studies … He has classes …' },

                { type: 'heading', text: 'الجزء 3: وقت الفراغ' },
                { type: 'breakdown', view: 'both', parts: [['On Monday afternoons', 'x', 'When?'], [',', 'p'], ['he', 's'], ['meets', 'v'], ['his study group', 'n'], ['in the library', 'x', 'Where?'], ['.', 'p']] },
                { type: 'breakdown', parts: [['At the weekend', 'x', 'When?'], [',', 'p'], ['he', 's'], ['plays', 'v'], ['football', 'n'], ['with his friends'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن وقت فراغه.', placeholder: 'At the weekend, he …' },

                { type: 'heading', text: 'اجمع الأجزاء' },
                { type: 'note', text: 'قبل ما ترسل: الفكرة الرئيسية أول، وكل الجمل عنها، والفعل مع he فيه s، و in / on / at صحيحة.' },
                { type: 'try', view: 'both', task: 'اجمع الأجزاء: البارقراف كامل (6 إلى 8 جمل).', placeholder: '… is a student in my class.' },

                { type: 'heading', text: 'التحدث: استبيان (survey)' },
                { type: 'text', view: 'both', text: 'ابدأ بأدب، واسأل، واشكره في الآخر.' },
                { type: 'breakdown', view: 'both', parts: [['Excuse me, can I ask you some questions?', 'x', 'Start']] },
                { type: 'breakdown', parts: [['Do you live with your parents?', 's', 'Yes / no ↗'], ['What time do you get up?', 'v', 'Wh- ↘']] },
                { type: 'breakdown', parts: [['Thank you for your time.', 'x', 'End']] },
                { type: 'try', task: 'اكتب 4 أسئلة استبيان: 2 yes/no و 2 wh-.', placeholder: 'Do you … ? What time … ?' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Check the paragraph',
                    instructions: 'هذي جمل من بارقراف طالب. اختر الصحيح.',
                    items: [
                        { q: 'He ___ up at 6 am.', choices: ['get', 'gets'], a: 'gets' },
                        { q: 'He meets his friends ___ Thursdays.', choices: ['in', 'on', 'at'], a: 'on' },
                        { q: 'He ___ his homework in the evening.', choices: ['does', 'makes'], a: 'does' },
                        { q: 'He ___ football at the weekend.', choices: ['plays', 'plaies'], a: 'plays' },
                        { q: 'He ___ English for twenty hours a week.', choices: ['studys', 'studies'], a: 'studies' },
                        { q: "He ___ live with his parents. He lives with his brother.", choices: ["don't", "doesn't"], a: "doesn't" },
                        { q: 'Classes start ___ 8 am.', choices: ['at', 'in', 'on'], a: 'at' },
                        { q: 'Which is the best first sentence?', choices: ['He gets up at 6 am.', 'Nawaf is a student in my class.', 'He plays football.'], a: 'Nawaf is a student in my class.' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT3_TOPICS: Topic[] = [timeExpressions, partsOfSentence, presentSimple, mainIdeas, dailyVocab, unit3Skills, unit3Task];
