// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 6: Homes and Buildings
// صيغة المقارنة (6.3) في الوحدة 5 (5.4)، و should (6.4) في 5.2.
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 6 · Homes and Buildings';
const base = ['تحضيري', 'ENG 001', 'Unit 6', 'Homes and Buildings'];

// ─────────────── 6.1 Pronouns (referents) + adjectives (RW ص 134 و135) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const pronounReferents: Topic = {
    slug: 'pronoun-referents',
    title: 'Pronouns in a text: it and they',
    titleAr: 'الضمير في النص: it و they يرجعون على وش؟',
    keywords: ['pronoun referents', 'referent', 'it', 'they', 'pronouns', 'opposites', 'adjectives', 'ضمير', 'يعود على', 'أضداد', ...base, 'Unit 8', 'linking sentences with pronouns'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Pronouns in a text: it and they',
            warmup: {
                q: '"Yanbu Airport is small. It has one terminal." وش يعني It؟',
                choices: ['Yanbu', 'Yanbu Airport', 'terminal'],
                answer: 1,
                why: 'It ترجع على أقرب اسم مفرد يناسب المعنى: Yanbu Airport.',
            },
            blocks: [
                { type: 'text', text: 'الضمير (pronoun) كلمة مثل it و they نحطها بدل اسم عشان ما نكرره. وفي الكويز يجيك سؤال: What does it refer to? يعني: الضمير هذا يرجع على أي اسم قبله؟ هنا الضمير واسمه بنفس اللون.' },

                { type: 'heading', text: 'الضمير 1: it = شي أو مكان واحد' },
                { type: 'text', view: 'both', text: 'ارجع لورا، ودوّر على اسم مفرد يناسب المعنى.' },
                { type: 'formula', parts: [['Singular noun', 'n'], ['…'], ['it', 'n', '= the noun']] },
                { type: 'breakdown', view: 'both', parts: [['Yanbu Airport', 'n', 'Noun'], ['is small.'], ['It', 'n', '= Yanbu Airport'], ['has one terminal'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The new mall', 'n', 'Noun'], ['has three floors.'], ['It', 'n', '= the new mall'], ['also has a car park'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Faisal', 'adj', 'Not it (he)'], ['takes'], ['the metro', 'n', 'Noun'], ['.'], ['It', 'n', '= the metro'], ['is cheap'], ['.', 'p']], ar: 'Faisal شخص فيكون he، فـ it ترجع على the metro.' },
                { type: 'try', task: 'اكتب جملتين عن بيتك: الأولى فيها اسم، والثانية فيها it ترجع عليه.', placeholder: 'Our house has a garden. It is small but beautiful.' },

                { type: 'heading', text: 'الضمير 2: they = أكثر من واحد' },
                { type: 'text', view: 'both', text: 'دوّر على اسم جمع، أو اسمين بينهم and.' },
                { type: 'formula', parts: [['Plural noun', 'n'], ['…'], ['they', 'n', '= the noun']] },
                { type: 'breakdown', view: 'both', parts: [['Airports', 'n', 'Noun'], ['are like small cities.'], ['They', 'n', '= airports'], ['have shops'], ['.', 'p']], ar: 'cities جمع بعد، بس المعنى يقول airports.' },
                { type: 'breakdown', parts: [['My parents', 'n', 'Noun'], ['have'], ['a new house', 'adj', 'Not they (it)'], ['.'], ['They', 'n', '= my parents'], ['love the garden'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The windows', 'n', 'Noun'], ['are big.'], ['They', 'n', '= the windows'], ['let in a lot of sun'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين: الأولى فيها اسم جمع، والثانية فيها they.', placeholder: 'My cousins live in Abha. They have a big farm.' },

                { type: 'heading', text: 'الضمير 3: its و their' },
                { type: 'text', view: 'both', text: 'its يعني "حقه / حقها" لشي واحد، و their يعني "حقهم" للجمع. وترجع على نفس الاسم.' },
                { type: 'breakdown', view: 'both', parts: [['King Fahd Airport', 'n', 'Noun'], ['is very big.'], ['Its', 'n', '= the airport’s'], ['terminals are modern'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My neighbours', 'n', 'Noun'], ['are kind.'], ['Their', 'n', '= my neighbours’'], ['house is next to ours'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن مبنى تعرفه، والثانية فيها its.', placeholder: 'The library is old. Its books are interesting.' },

                { type: 'heading', text: 'الضمير 4: الصفات وأضدادها' },
                { type: 'text', view: 'both', text: 'نصوص المباني مليانة صفات، احفظها أزواج.' },
                { type: 'breakdown', view: 'both', parts: [['My school is'], ['old', 'adj', 'Adjective'], [', but the new mall is'], ['modern', 'n', 'Opposite'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The metro is'], ['fast', 'adj', 'Adjective'], [', but the bus is'], ['slow', 'n', 'Opposite'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The villa is'], ['expensive', 'adj', 'Adjective'], [', but the flat is'], ['cheap', 'n', 'Opposite'], ['.', 'p']], ar: 'ومثلها: tall / short، high / low، beautiful / ugly، traditional / modern.' },
                { type: 'try', task: 'اكتب جملة فيها صفة وضدها عن مبنيين.', placeholder: 'Our house is small, but my uncle’s house is big.' },

                { type: 'note', text: 'غلط شائع: تاخذ أقرب كلمة وبس. تأكد إن الاسم يناسب الضمير في العدد والمعنى.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: What does it refer to?',
                    instructions: 'الضمير اللي تحته خط يرجع على وش؟',
                    items: [
                        { q: 'These days, airports are like small cities. **They** have shops and restaurants.', choices: ['airports', 'cities', 'shops'], a: 'airports' },
                        { q: 'Changi Airport opened with one terminal. **It** now has four.', choices: ['Changi Airport', 'one terminal'], a: 'Changi Airport' },
                        { q: 'Dubai Airport was very small when **it** opened.', choices: ['Dubai', 'Dubai Airport'], a: 'Dubai Airport' },
                        { q: 'My cousins live in Abha. **They** have a big house.', choices: ['my cousins', 'Abha'], a: 'my cousins' },
                        { q: 'Maha drives a car. She likes **it**.', choices: ['Maha', 'a car'], a: 'a car' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Opposites',
                    instructions: 'اختر الضد.',
                    items: [
                        { q: 'cheap', choices: ['expensive', 'small', 'fast'], a: 'expensive' },
                        { q: 'fast', choices: ['low', 'slow', 'ugly'], a: 'slow' },
                        { q: 'high', choices: ['low', 'big', 'new'], a: 'low' },
                        { q: 'beautiful', choices: ['ugly', 'tall'], a: 'ugly' },
                        { q: 'traditional', choices: ['modern', 'cheap'], a: 'modern' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 6.2 Comparing quantities: more / fewer / less (RW ص 138) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const comparingQuantities: Topic = {
    slug: 'comparing-quantities',
    title: 'Comparing quantities: more, fewer and less',
    titleAr: 'مقارنة الكميات: more و fewer و less',
    keywords: ['more than', 'fewer than', 'less than', 'fewer', 'less', 'comparing quantities', 'countable', 'uncountable', 'أكثر', 'أقل', 'مقارنة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Comparing quantities: more, fewer and less',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'Building B has ___ lifts than Building A.',
                choices: ['less', 'fewer'],
                answer: 1,
                why: 'lifts تنعد، فنقول fewer. و less للي ما ينعد (money، water).',
            },
            blocks: [
                { type: 'text', text: 'لما تقارن أعداد وكميات (مين عنده أكثر ومين أقل) تستخدم more (أكثر)، و fewer و less (الاثنين معناهم أقل). والفرق بينهم: هل الشي ينعد (1، 2، 3) ولا لا. الأمثلة من هالجدول:' },
                {
                    type: 'table',
                    head: ['', 'Building A', 'Building B'],
                    rows: [['floors', '50', '30'], ['lifts', '20', '8'], ['cost', '2 billion riyals', '900 million riyals']],
                },

                { type: 'heading', text: 'الكلمة 1: more = أكثر' },
                { type: 'text', view: 'both', text: 'more تنفع مع اللي ينعد واللي ما ينعد.' },
                { type: 'formula', parts: [['more', 'adj'], ['noun', 'n'], ['than', 'x', 'than']] },
                { type: 'breakdown', view: 'both', parts: [['Building A', 's'], ['has', 'v'], ['more', 'adj'], ['floors', 'n', 'Countable'], ['than', 'x', 'than'], ['Building B', 's'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Building A', 's'], ['cost', 'v'], ['more', 'adj'], ['money', 'n', 'Uncountable'], ['than', 'x', 'than'], ['Building B', 's'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Riyadh', 's'], ['has', 'v'], ['more', 'adj'], ['people', 'n', 'Countable'], ['than', 'x', 'than'], ['Yanbu', 's'], ['.', 'p']] },
                { type: 'try', task: 'قارن بين مدينتين بـ more.', placeholder: 'Jeddah has more malls than Taif.' },

                { type: 'heading', text: 'الكلمة 2: fewer + شي ينعد' },
                { type: 'text', view: 'both', text: 'أقل، مع الجمع اللي تقدر تعده.' },
                { type: 'formula', parts: [['fewer', 'adj'], ['plural noun', 'n'], ['than', 'x', 'than']] },
                { type: 'breakdown', view: 'both', parts: [['Building B', 's'], ['has', 'v'], ['fewer', 'adj'], ['lifts', 'n', 'Countable'], ['than', 'x', 'than'], ['Building A', 's'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My house', 's'], ['has', 'v'], ['fewer', 'adj'], ['rooms', 'n', 'Countable'], ['than', 'x', 'than'], ['my uncle’s house', 's'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Small cities', 's'], ['have', 'v'], ['fewer', 'adj'], ['shopping centres', 'n', 'Countable'], ['.', 'p']] },
                { type: 'try', task: 'قارن بيتك ببيت قريبك بـ fewer.', placeholder: 'My house has fewer windows than my cousin’s house.' },

                { type: 'heading', text: 'الكلمة 3: less + شي ما ينعد' },
                { type: 'text', view: 'both', text: 'أقل، مع money و water و time و traffic.' },
                { type: 'formula', parts: [['less', 'adj'], ['uncountable noun', 'n'], ['than', 'x', 'than']] },
                { type: 'breakdown', view: 'both', parts: [['Building B', 's'], ['cost', 'v'], ['less', 'adj'], ['money', 'n', 'Uncountable'], ['than', 'x', 'than'], ['Building A', 's'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A small car', 's'], ['uses', 'v'], ['less', 'adj'], ['petrol', 'n', 'Uncountable'], ['than', 'x', 'than'], ['a big car', 's'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Villages', 's'], ['have', 'v'], ['less', 'adj'], ['traffic', 'n', 'Uncountable'], ['than', 'x', 'than'], ['cities', 's'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة بـ less عن الوقت أو الفلوس.', placeholder: 'I have less time on Sunday than on Friday.' },

                { type: 'note', text: 'غلط شائع: less lifts ✗ (الصح fewer lifts)، و fewer money ✗ (الصح less money).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: more, fewer or less?',
                    instructions: 'اختر الكلمة الصحيحة.',
                    choices: ['more', 'fewer', 'less'],
                    items: [
                        { q: 'Dubai Airport has ___ passengers than Yanbu Airport.', a: 'more' },
                        { q: 'The new house costs ___ money than the old one.', a: 'less' },
                        { q: 'Small cities have ___ shopping centres than big cities.', a: 'fewer' },
                        { q: 'I have ___ time at the weekend, so I relax more.', a: 'more' },
                        { q: 'Villages have ___ traffic than cities.', a: 'less', why: 'traffic ما تنعد.' },
                        { q: 'This flat has ___ bedrooms than our old flat. It is too small.', a: 'fewer' },
                        { q: 'Solar houses use ___ electricity.', a: 'less' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Put the words in order',
                    instructions: 'رتب الكلمات.',
                    items: [
                        { q: 'more / than / King Khalid Airport / Yanbu Airport / has / terminals', a: 'King Khalid Airport has more terminals than Yanbu Airport.' },
                        { q: 'has / fewer / my school / than / your school / students', a: 'My school has fewer students than your school.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Your home',
                    instructions: 'اكتب جملتين تقارن بيتك ببيت زميلك (more و fewer).',
                    items: [{ q: 'Compare your home with your partner’s home.', a: 'My home has more rooms than his home. It has fewer floors.' }],
                },
            ],
        },
    ],
};

// ─────────────── 6.5 Compound sentences with but + double consonants + supporting sentences (RW ص 140 إلى 142) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const butAndSupporting: Topic = {
    slug: 'compound-sentences-with-but',
    title: 'Compound sentences with but, spelling and supporting sentences',
    titleAr: 'الربط بـ but وإملاء الحروف المضاعفة والجمل الداعمة',
    keywords: ['but', 'compound sentence', 'contrast', 'double consonants', 'spelling', 'supporting sentences', 'details', 'لكن', 'ربط', 'إملاء', 'بارقراف', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Compound sentences with but, spelling and supporting sentences',
            warmup: {
                q: 'وش الصحيح؟',
                choices: ['The room is small but it is comfortable.', 'The room is small, but it is comfortable.'],
                answer: 1,
                why: 'but تربط جملتين كاملتين متضادتين، وقبلها فاصلة.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مهارات تحتاجها لبارقراف المقارنة: الربط بـ but، وإملاء الحرف المضاعف، والجمل الداعمة.' },

                { type: 'heading', text: 'المهارة 1: , but' },
                { type: 'text', view: 'both', text: 'but يعني "لكن": تربط جملتين كاملتين عكس بعض، وقبلها فاصلة.' },
                { type: 'formula', parts: [['Sentence 1', 'ind'], [',', 'p'], ['but', 'co'], ['Sentence 2', 'ind']] },
                { type: 'breakdown', view: 'both', parts: [['The Kingdom Centre is tall', 'ind', 'Sentence 1'], [',', 'p'], ['but', 'co'], ['the Burj Khalifa is taller', 'ind', 'Sentence 2'], ['.', 'p']], ar: 'ما نكرر than the Kingdom Centre.' },
                { type: 'breakdown', parts: [['The apartment is small', 'ind', 'Sentence 1'], [',', 'p'], ['but', 'co'], ['it is comfortable', 'ind', 'Sentence 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Mall A has many shops', 'ind', 'Sentence 1'], [',', 'p'], ['but', 'co'], ['Mall B has more', 'ind', 'Sentence 2'], ['.', 'p']] },
                { type: 'try', task: 'اكتب compound sentence بـ but عن بيتك أو مدرستك.', placeholder: 'My school is small, but it has a big library.' },

                { type: 'heading', text: 'المهارة 2: الحرف المضاعف' },
                { type: 'text', view: 'both', text: 'مثل big ← bigger و swim ← swimming. مع er أو ing نضاعف الحرف الأخير إذا الكلمة مقطع واحد وآخرها: حرف علة واحد + ساكن واحد.' },
                { type: 'breakdown', view: 'both', parts: [['big', 'adj'], ['g', 'x', 'Double'], ['er']], ar: 'i + g: علة وحدة وساكن واحد.' },
                { type: 'breakdown', parts: [['swim', 'v'], ['m', 'x', 'Double'], ['ing']], ar: 'ومثلها shop → shopping، run → running.' },
                { type: 'breakdown', parts: [['cheap', 'adj', 'ea: 2 vowels'], ['er']], ar: 'علتين، فما نضاعف.' },
                { type: 'breakdown', parts: [['fast', 'adj', 'st: 2 consonants'], ['er']], ar: 'ساكنين، فما نضاعف.' },
                { type: 'try', task: 'اكتب: hot + er، و clean + er، و sit + ing.', reference: 'hotter, cleaner, sitting', placeholder: 'hotter, …' },

                { type: 'heading', text: 'المهارة 3: الجمل الداعمة' },
                { type: 'text', view: 'both', text: 'الـ topic sentence هي الجملة الرئيسية في أول البارقراف، والجمل الداعمة (supporting) تجي بعدها بأرقام وأمثلة تثبت كلامها، وكلها عن نفس الموضوع.' },
                { type: 'breakdown', view: 'both', parts: [['Skyscrapers are very expensive.', 's', 'Topic'], ['The Burj Khalifa cost 1.5 billion dollars.', 'v', 'Supporting'], ['One World Trade Center cost 3.9 billion dollars.', 'v', 'Supporting']] },
                { type: 'breakdown', parts: [['Jeddah has many interesting buildings.', 's', 'Topic'], ['The houses in Al-Balad are more than 100 years old.', 'v', 'Supporting'], ['My brother works in a bank.', 'x', 'Not supporting ✗']] },
                { type: 'try', task: 'اكتب topic sentence عن مدينتك وجملتين داعمتين.', placeholder: 'Yanbu has beautiful places. The Corniche is long and clean. …' },

                { type: 'note', text: 'غلط شائع: but بدون فاصلة، و biger ✗، و cheapper ✗، وجملة داعمة ما لها علاقة.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Join with but',
                    instructions: 'اكتب compound sentence بـ but.',
                    items: [
                        { q: 'The Metro Centre has a lot of restaurants. The Country Club Plaza has more restaurants.', a: 'The Metro Centre has a lot of restaurants, but the Country Club Plaza has more.' },
                        { q: 'The Country Club Plaza is modern. The Metro Centre is more modern.', a: 'The Country Club Plaza is modern, but the Metro Centre is more modern.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Spelling',
                    instructions: 'اختر الإملاء الصحيح.',
                    items: [
                        { q: 'big + er', choices: ['biger', 'bigger'], a: 'bigger' },
                        { q: 'swim + ing', choices: ['swiming', 'swimming'], a: 'swimming' },
                        { q: 'tall + er', choices: ['taller', 'tallller'], a: 'taller' },
                        { q: 'thin + er', choices: ['thiner', 'thinner'], a: 'thinner' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Supporting sentence or not?',
                    instructions: 'Topic sentence: "Skyscrapers have many lifts." هل الجملة تدعمها؟',
                    choices: ['Yes', 'No'],
                    items: [
                        { q: 'The Burj Khalifa has 57 lifts.', a: 'Yes' },
                        { q: 'The Shanghai Tower has more lifts than One World Trade Center.', a: 'Yes' },
                        { q: 'It opened in 1960.', a: 'No' },
                        { q: 'Skyscrapers are in many cities.', a: 'No' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 6.6 Vocabulary: buildings and furniture (RW ص 129 و135، LS ص 132 و137) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const buildingsVocab: Topic = {
    slug: 'buildings-and-furniture',
    title: 'Buildings and furniture',
    titleAr: 'مفردات: المباني والأثاث',
    keywords: ['buildings', 'furniture', 'apartment', 'floor', 'lift', 'stairs', 'roof', 'ceiling', 'entrance', 'exit', 'sofa', 'wardrobe', 'مباني', 'أثاث', 'بيت', 'مفردات', 'كلمات', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Buildings and furniture',
            warmup: {
                q: 'الشي اللي يطلعك من الدور الأول للعاشر بدون درج:',
                choices: ['a lift', 'a roof', 'a ceiling'],
                answer: 0,
                why: 'lift = مصعد.',
            },
            blocks: [
                { type: 'text', text: 'نسوي جولة: ندخل عمارة ونطلع لشقة. الكلمة الجديدة ملونة ومعناها تحتها.' },

                { type: 'heading', text: 'المجموعة 1: العمارة من برا' },
                { type: 'breakdown', view: 'both', parts: [['This is a big'], ['apartment building', 'n', 'عمارة'], ['with 90 apartments'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You park your car in the'], ['car park', 'n', 'موقف سيارات'], ['under the building'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You go in through the'], ['entrance', 'n', 'مدخل'], ['and leave through the'], ['exit', 'n', 'مخرج'], ['.', 'p']] },
                { type: 'try', task: 'وصّف عمارتك أو بيتك من برا بجملتين.', placeholder: 'My building has a small car park. The entrance is next to a shop.' },

                { type: 'heading', text: 'المجموعة 2: داخل العمارة' },
                { type: 'breakdown', view: 'both', parts: [['There are 20'], ['floors', 'n', 'أدوار'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You can take the'], ['lift', 'n', 'مصعد'], ['or use the'], ['stairs', 'n', 'درج'], ['.', 'p']] },
                { type: 'breakdown', parts: [['On the'], ['roof', 'n', 'سطح (من برا)'], [', there is a small garden'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The'], ['ceiling', 'n', 'سقف (من داخل)'], ['in my room is white'], ['.', 'p']], ar: 'roof فوق المبنى، و ceiling فوقك وأنت داخل الغرفة.' },
                { type: 'try', task: 'كم دور في بيتك؟ وفيه مصعد ولا درج؟', placeholder: 'My house has two floors. There are stairs but no lift.' },

                { type: 'heading', text: 'المجموعة 3: الأثاث' },
                { type: 'text', view: 'both', text: 'furniture ما ينعد: a lot of furniture، مو furnitures.' },
                { type: 'breakdown', view: 'both', parts: [['In the living room, there is a big'], ['sofa', 'n', 'كنب'], ['and two'], ['armchairs', 'n', 'كراسي مريحة'], ['.', 'p']] },
                { type: 'breakdown', parts: [['In the bedroom, there is a bed and a'], ['wardrobe', 'n', 'دولاب ملابس'], ['.', 'p']] },
                { type: 'breakdown', parts: [['There is a'], ['lamp', 'n', 'أباجورة'], ['on the desk and a'], ['carpet', 'n', 'سجادة'], ['on the floor'], ['.', 'p']] },
                { type: 'try', task: 'وش فيه من أثاث في غرفتك؟', placeholder: 'There is a bed, a desk and a wardrobe.' },

                { type: 'heading', text: 'المجموعة 4: وصف الأثاث' },
                { type: 'breakdown', view: 'both', parts: [['The chair is very'], ['comfortable', 'adj', 'مريح'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We have a'], ['wooden', 'adj', 'خشب'], ['table and'], ['glass', 'adj', 'زجاج'], ['shelves'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My grandfather’s house is'], ['traditional', 'adj', 'تقليدي'], [', but ours is'], ['modern', 'adj', 'حديث'], ['.', 'p']] },
                { type: 'try', task: 'وصّف أثاث غرفتك بصفتين.', placeholder: 'My desk is wooden and my chair is comfortable.' },

                { type: 'note', text: 'غلط شائع: furnitures ✗، و roof بدل ceiling للسقف من داخل.' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the word',
                    instructions: 'اختر الكلمة المناسبة.',
                    items: [
                        { q: 'You need to go to the 10th floor? Take the ___.', choices: ['lift', 'roof', 'wall'], a: 'lift' },
                        { q: 'Park your car in the ___ under the mall.', choices: ['car park', 'garden', 'ceiling'], a: 'car park' },
                        { q: 'There is a garden on the ___ of the building.', choices: ['roof', 'ceiling', 'exit'], a: 'roof' },
                        { q: 'This chair is very ___. I can sit on it for hours.', choices: ['comfortable', 'ugly', 'plastic'], a: 'comfortable' },
                        { q: 'Please leave through the ___ at the back.', choices: ['exit', 'entrance', 'stairs'], a: 'exit' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Where is it?',
                    instructions: 'وين تلقى الشي عادةً؟',
                    items: [
                        { q: 'a bed', choices: ['bedroom', 'car park'], a: 'bedroom' },
                        { q: 'a sofa', choices: ['living room', 'roof'], a: 'living room' },
                        { q: 'cars', choices: ['car park', 'wardrobe'], a: 'car park' },
                        { q: 'a garden on top of the building', choices: ['roof', 'ceiling'], a: 'roof' },
                        { q: 'clothes', choices: ['wardrobe', 'lift'], a: 'wardrobe' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 6.7 Skills: analyzing data، listening for reasons، linking words (RW ص 137، LS ص 131 و134) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const unit6Skills: Topic = {
    slug: 'analyzing-data-reasons-linking',
    title: 'Analyzing data, listening for reasons and linking words',
    titleAr: 'مهارات: قراءة البيانات والأسباب في الاستماع وربط الكلمات في النطق',
    keywords: ['analyzing data', 'data', 'table', 'listening for reasons', 'because', 'linking words', 'pronunciation', 'مهارات', 'بيانات', 'جدول', 'أسباب', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Analyzing data, listening for reasons and linking words',
            warmup: {
                q: 'لما تسمع because، اللي بعدها:',
                choices: ['السبب', 'النتيجة', 'الوقت'],
                answer: 0,
                why: 'because تجيب السبب.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مهارات: تقرأ جدول وتقارن منه، وتسمع السبب، وتفهم الكلمات المربوطة في النطق.' },

                { type: 'heading', text: 'المهارة 1: Analyzing data' },
                { type: 'text', view: 'both', text: 'تحليل البيانات: اقرأ عناوين الأعمدة، ولقَ صف كل مبنى، وقارن الأرقام.' },
                {
                    type: 'table',
                    head: ['Building', 'Height', 'Floors', 'Year'],
                    rows: [['Kingdom Centre (Riyadh)', '302 m', '41', '2002'], ['Burj Khalifa (Dubai)', '828 m', '163', '2010'], ['Abraj Al Bait (Makkah)', '601 m', '120', '2012']],
                },
                { type: 'formula', parts: [['Column', 's'], ['→'], ['Numbers', 'n'], ['→'], ['Comparison sentence', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Height', 's', 'Column'], ['828 m > 601 m', 'n', 'Numbers'], ['The Burj Khalifa is taller than Abraj Al Bait.', 'v', 'Sentence']] },
                { type: 'breakdown', parts: [['Floors', 's', 'Column'], ['41 < 120', 'n', 'Numbers'], ['The Kingdom Centre has fewer floors than Abraj Al Bait.', 'v', 'Sentence']] },
                { type: 'breakdown', parts: [['Year', 's', 'Column'], ['2002 < 2010', 'n', 'Numbers'], ['The Kingdom Centre is older than the Burj Khalifa.', 'v', 'Sentence']] },
                { type: 'try', task: 'من الجدول: قارن بين Abraj Al Bait و Burj Khalifa في السنة.', reference: 'Abraj Al Bait is newer than the Burj Khalifa.', placeholder: 'Abraj Al Bait is …' },

                { type: 'heading', text: 'المهارة 2: Listening for reasons' },
                { type: 'text', view: 'both', text: 'الاستماع للأسباب: السبب يجي بعد because (لأن) و The reason is (السبب) و That’s why (عشان كذا). ركّز على اللي بعدها.' },
                { type: 'breakdown', view: 'both', parts: [['I like this café'], ['because', 'x', 'Reason word'], ['it is quiet', 'v', 'Reason'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We should build a garden on the roof'], ['because', 'x', 'Reason word'], ['people need green places', 'v', 'Reason'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The reason is', 'x', 'Reason word'], ['that the rooms are too small', 'v', 'Reason'], ['.', 'p']] },
                { type: 'try', task: 'اكتب رأيك عن مكان تحبه مع السبب.', placeholder: 'I like the Corniche because it is beautiful at night.' },

                { type: 'heading', text: 'المهارة 3: Linking words' },
                { type: 'text', view: 'both', text: 'ربط الكلمات في النطق: كلمة تنتهي بساكن، وبعدها كلمة تبدأ بعلة، ننطقهم كأنهم كلمة وحدة.' },
                { type: 'breakdown', view: 'both', parts: [['an', 'n'], ['_', 'x', 'Link'], ['apartment', 'n']] },
                { type: 'breakdown', parts: [['It', 'n'], ['_', 'x', 'Link'], ['is', 'n'], ['_', 'x', 'Link'], ['a big office.']] },
                { type: 'breakdown', parts: [['There', 'n'], ['_', 'x', 'Link'], ['are', 'n'], ['_', 'x', 'Link'], ['eight floors.']] },
                { type: 'try', task: 'حط _ بين الكلمات اللي تنربط: "It is an old office."', reference: 'It_is_an_old_office.', placeholder: 'It_is …' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Read the data',
                    instructions: 'استخدم الجدول.',
                    items: [
                        { q: 'Which building is taller?', choices: ['Kingdom Centre', 'Burj Khalifa'], a: 'Burj Khalifa' },
                        { q: 'Kingdom Centre has ___ floors than Abraj Al Bait.', choices: ['more', 'fewer'], a: 'fewer' },
                        { q: 'Which building has 163 floors?', choices: ['Burj Khalifa', 'Abraj Al Bait', 'Kingdom Centre'], a: 'Burj Khalifa' },
                        { q: 'When did Abraj Al Bait open?', choices: ['2002', '2012'], a: '2012' },
                        { q: 'Abraj Al Bait is ___ than the Kingdom Centre.', choices: ['taller', 'shorter'], a: 'taller' },
                        { q: 'Which building is the oldest?', choices: ['Kingdom Centre', 'Abraj Al Bait'], a: 'Kingdom Centre' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Find the reason',
                    instructions: 'وش السبب؟',
                    items: [
                        { q: '"We should build a garden on the roof because people need green places."', choices: ['people need green places', 'we should build a garden'], a: 'people need green places' },
                        { q: '"The reason is that the rooms are too small."', choices: ['the rooms are too small', 'the reason'], a: 'the rooms are too small' },
                        { q: '"I don’t like the office because it is noisy."', choices: ['it is noisy', 'I don’t like the office'], a: 'it is noisy' },
                        { q: '"There are no shops near here. That’s why we drive to the mall."', choices: ['there are no shops near here', 'we drive to the mall'], a: 'there are no shops near here' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 6: comparison of two buildings + café ideas (RW ص 143 و144، LS ص 141) ───────────────
// نمط أول أربع دروس: بارقراف المقارنة جملة جملة، كل جزء: جمل ملونة ← كتابة.
const unit6Task: Topic = {
    slug: 'comparing-two-buildings',
    title: 'Writing task: a comparison of two buildings',
    titleAr: 'مهمة الوحدة: مقارنة بين مبنيين',
    keywords: ['writing task', 'comparative paragraph', 'compare two buildings', 'comparison', 'opinions', 'agree', 'disagree', 'بارقراف مقارنة', 'كتابة', 'رأي', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: a comparison of two buildings',
            warmup: {
                q: 'بارقراف المقارنة يحتاج أكثر شي:',
                choices: ['صيغة المقارنة و but', 'المضارع البسيط بس', 'أسئلة'],
                answer: 0,
                why: 'تقارن بـ taller than و more … than، وتربط الاختلاف بـ but.',
            },
            blocks: [
                { type: 'text', text: 'المهمة: بارقراف تقارن فيه بين مبنيين مشهورين. نبنيه 4 أجزاء، وبعد كل جزء تكتب جزءك.' },

                { type: 'heading', text: 'النموذج اللي بنبنيه' },
                { type: 'example', view: 'both', en: 'There are two famous buildings in the Gulf: the Kingdom Centre in Riyadh and the Burj Khalifa in Dubai. The Kingdom Centre opened in 2002, but the Burj Khalifa is newer. It opened in 2010. The Burj Khalifa is taller than the Kingdom Centre. It is 828 metres tall, and it has 163 floors. The Kingdom Centre has fewer floors. Both buildings are popular with tourists.' },
                { type: 'text', text: 'الحين نفككه 4 أجزاء: الجملة الرئيسية، ثم مقارنة بـ but، ثم مقارنة بأرقام، ثم الخاتمة.' },

                { type: 'heading', text: 'الجزء 1: topic sentence' },
                { type: 'text', view: 'both', text: 'اسم المبنيين ووينهم.' },
                { type: 'breakdown', view: 'both', parts: [['There are two famous buildings in the Gulf', 's', 'Topic'], [':'], ['the Kingdom Centre in Riyadh', 'n', 'Building 1'], ['and'], ['the Burj Khalifa in Dubai', 'adj', 'Building 2'], ['.', 'p']] },
                { type: 'try', task: 'اكتب topic sentence فيها اسم المبنيين.', placeholder: 'There are two famous buildings …' },

                { type: 'heading', text: 'الجزء 2: مقارنة بـ but' },
                { type: 'breakdown', view: 'both', parts: [['The Kingdom Centre opened in 2002', 'ind'], [',', 'p'], ['but', 'co'], ['the Burj Khalifa is newer', 'ind'], ['.', 'p']] },
                { type: 'breakdown', parts: [['It', 'n', '= the Burj Khalifa'], ['opened in 2010'], ['.', 'p']] },
                { type: 'try', task: 'قارن السنة بين مبنييك بـ but.', placeholder: '… opened in …, but … is newer.' },

                { type: 'heading', text: 'الجزء 3: مقارنة بأرقام' },
                { type: 'breakdown', view: 'both', parts: [['The Burj Khalifa', 's'], ['is'], ['taller', 'adj'], ['than', 'x', 'than'], ['the Kingdom Centre', 's'], ['.', 'p']] },
                { type: 'breakdown', parts: [['It is 828 metres tall'], [',', 'p'], ['and', 'co'], ['it has 163 floors'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The Kingdom Centre', 's'], ['has'], ['fewer', 'adj'], ['floors', 'n'], ['.', 'p']] },
                { type: 'try', task: 'قارن الطول والأدوار بأرقام.', placeholder: '… is taller than … It has … floors.' },

                { type: 'heading', text: 'الجزء 4: الخاتمة' },
                { type: 'breakdown', view: 'both', parts: [['Both buildings are popular with tourists.', 'n', 'Concluding']] },
                { type: 'try', task: 'اكتب جملة الخاتمة.', placeholder: 'Both buildings are …' },

                { type: 'heading', text: 'اجمع الأجزاء' },
                { type: 'note', text: 'قبل ما ترسل: than بعد كل مقارنة، و fewer مع اللي ينعد، وفاصلة قبل but، و it / they بدل تكرار اسم المبنى.' },
                { type: 'try', view: 'both', task: 'اجمع الأجزاء: البارقراف كامل (6 إلى 8 جمل).', placeholder: 'There are two famous buildings …' },

                { type: 'heading', text: 'التحدث: أفكار لمقهى جديد' },
                { type: 'text', view: 'both', text: 'رأي، وسبب، وسؤال لزميلك، وموافقة أو اعتراض.' },
                { type: 'breakdown', view: 'both', parts: [['I think we should', 'x', 'Opinion'], ['have big windows'], ['because', 'co'], ['people like the sun', 'v', 'Reason'], ['.', 'p'], ['What do you think?', 's', 'Ask']] },
                { type: 'breakdown', parts: [['I agree.', 'x', 'Agree'], ['We should also have comfortable sofas.', 'v']] },
                { type: 'breakdown', parts: [["I'm not sure", 'x', 'Disagree'], ['because', 'co'], ['big windows make the café hot', 'v', 'Reason'], ['.', 'p']] },
                { type: 'try', task: 'اكتب فكرتين لمقهى جديد مع السبب.', placeholder: 'I think we should have a garden because …' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Check the paragraph',
                    instructions: 'هذي جمل من بارقراف طالب. اختر الصحيح.',
                    items: [
                        { q: 'The Burj Khalifa is ___ the Kingdom Centre.', choices: ['taller than', 'more tall than', 'tallest'], a: 'taller than' },
                        { q: 'The Kingdom Centre has ___ floors.', choices: ['less', 'fewer'], a: 'fewer' },
                        { q: 'I think we ___ have a garden.', choices: ['should', 'should to'], a: 'should' },
                        { q: 'Choose the correct sentence.', choices: ['It opened in 2002, but the other one is newer.', 'It opened in 2002 but, the other one is newer.'], a: 'It opened in 2002, but the other one is newer.' },
                        { q: 'Abraj Al Bait is ___ modern than the Kingdom Centre.', choices: ['more', 'most'], a: 'more' },
                        { q: 'The Burj Khalifa is very tall. ___ has 163 floors.', choices: ['It', 'They'], a: 'It' },
                        { q: 'The new building cost ___ money.', choices: ['fewer', 'less'], a: 'less' },
                        { q: 'Which is the best topic sentence?', choices: ['It has 163 floors.', 'There are two famous buildings in the Gulf.', 'Both are popular.'], a: 'There are two famous buildings in the Gulf.' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT6_TOPICS: Topic[] = [pronounReferents, comparingQuantities, butAndSupporting, buildingsVocab, unit6Skills, unit6Task];
