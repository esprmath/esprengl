// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 1: People
// الدروس 1.2 إلى 1.6 ومهمة الوحدة. درس 1.1 (Nouns and verbs) في lessons.ts.
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: طريقة عرض تناسب الدرس، أسئلة سريعة وسط الشرح، أمثلة لكل شكل وبعدها كتابة، وتمارين متدرجة ما تتكرر.

import type { CourseLesson, Topic, TreeNode } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 1 · People';

/** خيارات تمرين "وش الخطأ؟" في درس الجملة البسيطة */
const SENTENCE_CHECK = ['Correct', 'No verb', 'No subject', 'Word order', 'Capital letter'];


// ─────────────── 1.2 Subject pronouns + possessive adjectives (RW ص 27 و31، LS ص 22) ───────────────
// الجو: "صورة عائلة فهد". فهد يعرّف بأهله: كل واحد اسمه مرة وبعدها ضمير، وأغراضهم بالملكية.
// بدون قسم أمثلة: كل جزء شرح ← مثال ← سؤال ← بطاقة تصحيح. التدريب: 3 تمارين اختيار + كتابة اختيارية.
const pronouns: Topic = {
    slug: 'pronouns-and-possessives',
    title: 'Subject pronouns and possessive adjectives',
    titleAr: 'الضمائر وصفات الملكية',
    keywords: ['pronoun', 'pronouns', 'subject pronouns', 'possessive', 'possessive adjectives', 'ضمير', 'ضمائر', 'ملكية', 'he his', 'she her', 'they their', 'its', 'my your', 'تحضيري', 'ENG 001', 'Unit 1'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Subject pronouns and possessive adjectives',
            noExamples: true, // الأمثلة داخل الشرح: شرح ← مثال ← سؤال
            summary: {
                rule: 'الضمير (he / she / they) يجي قبل فعل، وصفة الملكية (his / her / their) تجي قبل اسم. شوف وش بعد الفراغ: فعل ← ضمير، اسم ← ملكية. والملكية حسب صاحب الشي، مو حسب الشي نفسه.',
                formulas: [
                    [['He / She / They', 's', 'pronoun'], ['Verb', 'v', 'verb']],
                    [['His / Her / Their', 'adj', 'possessive'], ['Noun', 'n', 'noun']],
                ],
                examples: [
                    { parts: [['Reem', 'n', 'name'], ['is my sister.'], ['She', 's', 'pronoun'], ['studies', 'v', 'verb'], ['at KAU.']], ar: 'بعد She فعل (studies). She = Reem.' },
                    { parts: [['Omar', 'n', 'name'], ['is my cousin.'], ['He', 's', 'pronoun'], ['plays', 'v', 'verb'], ['football.']], ar: 'بعد He فعل (plays).' },
                    { parts: [['Omar', 'n', 'name'], ['loves'], ['his', 'adj', 'possessive'], ['team', 'n', 'noun'], ['.', 'p']], ar: 'بعد his اسم (team)، والفريق حق عمر.' },
                    { parts: [['We', 's', 'pronoun'], ['love'], ['our', 'adj', 'possessive'], ['house', 'n', 'noun'], ['.', 'p']], ar: 'We ← our (حقنا).' },
                    { parts: [['My grandparents', 'n', 'name'], ['have a farm.'], ['They', 's', 'pronoun'], ['sell'], ['their', 'adj', 'possessive'], ['dates', 'n', 'noun'], ['.', 'p']], ar: 'They ← their. They قبل فعل، و their قبل اسم.' },
                    { parts: [['Reem', 'n', 'name'], ['lives with'], ['her', 'adj', 'possessive'], ['brother', 'n', 'noun'], ['.', 'p']], ar: 'her لأن صاحبة الأخ ريم، حتى لو الأخ ولد.' },
                ],
                mistakes: [
                    { wrong: 'He name is Saad.', right: 'His name is Saad.', why: 'بعده اسم (name)، فنحط ملكية: His.' },
                    { wrong: 'Her is a nurse.', right: 'She is a nurse.', why: 'بعده فعل (is)، فنحط ضمير: She.' },
                    { wrong: 'The cat likes it’s bed.', right: 'The cat likes its bed.', why: 'it’s = it is. الملكية its بدون فاصلة علوية.' },
                    { wrong: 'Reem lives with his brother.', right: 'Reem lives with her brother.', why: 'الملكية حسب صاحبة الأخ (ريم)، مو حسب الأخ.' },
                ],
                tables: [
                    {
                        title: 'الضمير وصفة الملكية',
                        head: ['Pronoun (قبل فعل)', 'Possessive (قبل اسم)', 'مثال'],
                        rows: [
                            ['I', 'my', 'my phone'],
                            ['you', 'your', 'your name'],
                            ['he', 'his', 'his car'],
                            ['she', 'her', 'her bag'],
                            ['it', 'its', 'its bed'],
                            ['we', 'our', 'our house'],
                            ['they', 'their', 'their school'],
                        ],
                    },
                ],
            },
            warmup: {
                q: 'من صورة عائلة {nameAr}. وش الكلمة الصحيحة؟',
                sentence: 'This is my brother Saad. ___ car is new.',
                choices: ['He', 'His', 'Her'],
                answer: 1,
                why: 'بعد الفراغ اسم (car)، فنحط صفة ملكية: His. ولو بعده فعل مثل is نقول He.',
            },
            blocks: [
                { type: 'names' },
                { type: 'text', text: 'هذي صورة عائلة {nameAr}، ونتعرف على كل واحد فيها. نقول اسمه مرة وحدة، وبعدها نحط مكانه ضمير (pronoun) مثل he و she عشان ما نكرره. ولما نتكلم عن أغراضهم نستخدم صفة ملكية (possessive) مثل his و her.' },
                {
                    type: 'table',
                    head: ['Pronoun', 'Possessive'],
                    rows: [['I (أنا)', 'my (حقي)'], ['you (أنت)', 'your (حقك)'], ['he (هو)', 'his (حقه)'], ['she (هي)', 'her (حقها)'], ['it (لغير العاقل)', 'its (حقه أو حقها)'], ['we (نحن)', 'our (حقنا)'], ['they (هم)', 'their (حقهم)']],
                },

                // ── 1) الضمير ──
                { type: 'heading', text: 'الضمير: بدل الاسم، وبعده فعل' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'نقول اسم الشخص مرة، وبعدها نحط he أو she مكانه. والضمير بعده فعل دايمًا.' },
                { type: 'formula', parts: [['He / She / They', 's', 'Pronoun'], ['Verb', 'v']] },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['This is'], ['my sister Reem', 'n', 'Name'], ['.'], ['She', 's', '= Reem'], ['is', 'v', 'Verb'], ['16'], ['.', 'p']], ar: 'Reem مرة وحدة، وبعدها She. وبعد She فعل (is).' },
                { type: 'breakdown', parts: [['Omar', 'n', 'Name'], ['is my cousin.'], ['He', 's', '= Omar'], ['plays', 'v', 'Verb'], ['football'], ['.', 'p']], ar: 'نفس الفكرة: Omar ثم He، وبعده فعل plays.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Saad is my brother. ___ studies in Jeddah.', choices: ['His', 'Her', 'He'], a: 'He', why: 'بعد الفراغ فعل (studies)، فنحط ضمير.' }] },
                {
                    type: 'fix',
                    label: 'ضمير مكان ملكية',
                    kind: 's',
                    wrong: 'Aunt Mona is a doctor. Her works in Jeddah.',
                    mark: 'Her works',
                    options: ['Aunt Mona is a doctor. Hers works in Jeddah.', 'Aunt Mona is a doctor. She works in Jeddah.', 'Aunt Mona is a doctor. Her work in Jeddah.'],
                    answer: 'Aunt Mona is a doctor. She works in Jeddah.',
                    parts: [['Aunt Mona', 'n'], ['is a doctor.'], ['She', 's', '= Mona'], ['works', 'v'], ['in Jeddah'], ['.', 'p']],
                    why: 'بعده فعل (works)، فنحط ضمير She. Her معناها "حقها" وتجي قبل اسم.',
                },

                // ── 2) صفة الملكية ──
                { type: 'heading', text: 'صفة الملكية: حق مين؟ وبعدها اسم' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'لما نقول إن الشي حق شخص نستخدم his أو her أو their. وبعدها اسم دايمًا.' },
                { type: 'formula', parts: [['His / Her / Their', 'adj', 'Possessive'], ['Noun', 'n']] },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['Reem', 'n'], ['loves'], ['her', 'adj', 'حقها'], ['phone', 'n', 'Noun'], ['.', 'p']], ar: 'الجوال حق ريم، فنقول her. وبعد her اسم (phone).' },
                { type: 'breakdown', parts: [['Omar', 'n'], ['is very proud of'], ['his', 'adj', 'حقه'], ['team', 'n', 'Noun'], ['.', 'p']], ar: 'الفريق حق عمر، فـ his. وبعده اسم (team).' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'This is my father. ___ car is white.', choices: ['His', 'He', 'Her'], a: 'His', why: 'بعد الفراغ اسم (car)، والسيارة حق الأب.' }] },
                {
                    type: 'fix',
                    label: 'ضمير مكان ملكية',
                    kind: 'adj',
                    wrong: 'He name is Saad.',
                    mark: 'He',
                    options: ['His name is Saad.', 'Him name is Saad.', 'Hes name is Saad.'],
                    answer: 'His name is Saad.',
                    parts: [['His', 'adj', 'حقه'], ['name', 'n'], ['is', 'v'], ['Saad'], ['.', 'p']],
                    why: 'بعده اسم (name)، فنحط ملكية: His.',
                },

                // ── 3) they و it ──
                { type: 'heading', text: 'they و it في الصورة' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'they لأكثر من شخص، و it لشي أو مكان أو حيوان. وملكيتهم their و its.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['My grandparents', 'n', 'Name'], ['live in AlUla.'], ['They', 's', '= my grandparents'], ['have'], ['a farm', 'n'], ['.'], ['Its', 'adj', 'حق المزرعة'], ['palm trees', 'n'], ['are tall'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My cat', 'n'], ['is small.'], ['It', 's', '= my cat'], ['sleeps on'], ['its', 'adj', 'حق القطة'], ['bed', 'n'], ['.', 'p']], ar: 'its بدون فاصلة علوية. it’s = it is.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'The farm is big. ___ is near AlUla.', choices: ['Its', 'They', 'It'], a: 'It', why: 'بعد الفراغ فعل (is)، والمزرعة شي واحد.' }] },
                {
                    type: 'fix',
                    label: 'its و it’s',
                    kind: 'adj',
                    wrong: 'The dog loves it’s ball.',
                    mark: 'it’s',
                    options: ['The dog loves its ball.', 'The dog loves it ball.', 'The dog loves their ball.'],
                    answer: 'The dog loves its ball.',
                    parts: [['The dog', 'n'], ['loves', 'v'], ['its', 'adj', 'حقه'], ['ball', 'n'], ['.', 'p']],
                    why: 'it’s معناها it is. للملكية نكتب its بدون فاصلة.',
                },

                // ── 4) السر ──
                { type: 'heading', text: 'السر: شوف وش بعد الفراغ' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'قبل ما تختار الكلمة شوف اللي بعدها. فعل ← ضمير. اسم ← ملكية.' },
                {
                    type: 'steps',
                    items: [
                        { kind: 's', title: 'بعدها فعل ← ضمير', ar: 'اللي يسوي الفعل.', en: 'He is · She works · They live' },
                        { kind: 'adj', title: 'بعدها اسم ← ملكية', ar: 'حق مين؟', en: 'His car · Her phone · Their school' },
                    ],
                },
                { type: 'text', text: 'وانتبه: الملكية حسب صاحب الشي، مو حسب الشي نفسه.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['Reem', 'n', 'Owner'], ['lives with'], ['her', 'adj', 'حق ريم'], ['{brother}', 'n'], ['{name}'], ['.', 'p']], ar: 'her لأن صاحبة الكلمة ريم، والملكية حسب صاحبها. حتى لو الأخ ولد.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Noura loves her brother. ___ name is Majed.', choices: ['Her', 'His', 'She'], a: 'His', why: 'الاسم حق الأخ (ولد)، وبعده اسم، فنحط His.' }] },
                { type: 'note', text: 'غلط شائع: He name is Saad ✗ (الصح His name)، و Her is a nurse ✗ (الصح She is)، و it’s بدل its للملكية ✗.' },

                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'عرّف بواحد من عائلتك في جملتين: الأولى فيها اسمه، والثانية فيها he أو she.', reference: 'My uncle Majed is a teacher. He works in Taif.', placeholder: 'My uncle Faisal is a pilot. He …' },
                { type: 'try', task: 'اكتب جملة عن شي حق واحد من عائلتك (his أو her أو their).', reference: 'My sister loves her new phone.', placeholder: 'My sister loves her …' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Pronoun or possessive?',
                    instructions: 'شوف وش بعد الفراغ: فعل ولا اسم؟',
                    items: [
                        { q: 'Omar is my cousin. ___ bike is red.', choices: ['He', 'His', 'Her'], a: 'His', why: 'بعده اسم (bike).' },
                        { q: 'This is Noura. ___ is from Madinah.', choices: ['Her', 'Their', 'She'], a: 'She', why: 'بعده فعل (is).' },
                        { q: 'My friends study at KAU. ___ university is in Jeddah.', choices: ['Their', 'They', 'Our'], a: 'Their', why: 'بعده اسم، والجامعة حق الأصدقاء.' },
                        { q: 'We have a new teacher. ___ teacher is from Egypt.', choices: ['We', 'Their', 'Our'], a: 'Our', why: 'المدرس حقنا (we).' },
                        { q: 'I love Yanbu. ___ beaches are amazing.', choices: ["It's", 'Its', 'It'], a: 'Its', why: "it's = it is، والملكية its." },
                        { q: 'Excuse me, what is ___ name?', choices: ['your', 'you', 'my'], a: 'your', why: 'بعده اسم (name)، فصفة ملكية: your.' },
                        { q: 'Mohammed has a sister. ___ name is Lama.', choices: ['His', 'Her', 'She'], a: 'Her', why: 'الاسم حق الأخت.' },
                        { q: 'My parents work hard. ___ are teachers.', choices: ['Their', 'We', 'They'], a: 'They', why: 'بعده فعل (are).' },
                        { q: 'The dog is hungry. ___ wants food.', choices: ['It', 'Its', 'He'], a: 'It', why: 'بعده فعل، والكلب حيوان.' },
                        { q: 'I live with ___ grandparents.', choices: ['I', 'your', 'my'], a: 'my', why: 'بعده اسم.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: '___ has a car. ___ car is blue.', choices: ['His / he', 'He / his', 'She / it', 'My / her'], a: 'He / his', why: 'الأول قبل فعل (has)، والثاني قبل اسم (car).' },
                        { q: 'We are in class 3B. This is ___ classroom.', choices: ['their', 'your', 'our', 'his'], a: 'our', why: 'الفصل حقنا (we).' },
                        { q: 'Faisal takes the bus to work. The bus is cheap. Which pronoun can replace "the bus"?', choices: ['He', 'She', 'They', 'It'], a: 'It', why: 'الباص شي واحد.' },
                        { q: 'Look at that cat! ___ tail is very long.', choices: ['Its', "It's", 'Their', 'His'], a: 'Its', why: 'بعده اسم (tail)، فملكية: its.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Choose the correct sentence',
                    instructions: 'كل سؤال فيه ثلاث جمل، وواحدة بس صحيحة.',
                    items: [
                        { q: 'About Layla and her sister:', choices: ['They is students at KAU.', 'They are students at KAU.', 'Their are students at KAU.'], a: 'They are students at KAU.', why: 'They وبعده فعل. Their تجي قبل اسم.' },
                        { q: 'About Yousef’s bike:', choices: ['Yousef loves he bike.', 'Yousef loves him bike.', 'Yousef loves his bike.'], a: 'Yousef loves his bike.', why: 'بعده اسم (bike)، والدراجة حق يوسف.' },
                        { q: 'About our school:', choices: ['Our school is big. Its has a library.', 'Our school is big. It has a library.', 'Our school is big. It’s a library has.'], a: 'Our school is big. It has a library.', why: 'بعده فعل (has)، فنحط ضمير It.' },
                        { q: 'About Reem and Noura:', choices: ['Reem and Noura love there school.', 'Reem and Noura love they school.', 'Reem and Noura love their school.'], a: 'Reem and Noura love their school.', why: 'بعده اسم (school)، فملكية: their.' },
                        { q: 'About my father:', choices: ['My father works in Yanbu. His office is big.', 'My father works in Yanbu. He office is big.', 'My father works in Yanbu. Him office is big.'], a: 'My father works in Yanbu. His office is big.', why: 'بعده اسم (office)، والمكتب حق الأب.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: "Exercise D: Don't repeat the noun",
                    instructions: 'اكتب الجملتين مرة ثانية، وحط ضمير أو صفة ملكية مكان الكلمة المكررة. (كتابة اختيارية)',
                    items: [
                        { q: 'My uncle is a farmer. My uncle lives in AlUla.', a: 'My uncle is a farmer. He lives in AlUla.' },
                        { q: "Jeddah is a big city. Jeddah's weather is hot.", a: 'Jeddah is a big city. Its weather is hot.' },
                        { q: "Nora and Huda are my sisters. Nora and Huda's school is near our house.", a: 'Nora and Huda are my sisters. Their school is near our house.' },
                        { q: "My father works in a bank. My father's office is in Yanbu.", a: 'My father works in a bank. His office is in Yanbu.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 1.3 The verb be (RW ص 28 إلى 30، LS ص 23) ───────────────
// الجو: "أول يوم في المعهد". فهد يتعرف على زميله حمزة، والحوار فيه المثبت والنفي والسؤال.
// بدون قسم أمثلة: المثبت ثم النفي ثم السؤال، وكل واحد شرح ← مثال ← سؤال ← بطاقة تصحيح.
const verbBe: Topic = {
    slug: 'verb-be',
    title: 'The verb be',
    titleAr: 'فعل الكينونة am / is / are',
    keywords: ['be', 'verb be', 'am', 'is', 'are', 'am is are', "isn't", "aren't", 'contractions', 'short answers', 'اختصارات', 'فعل الكينونة', 'تحضيري', 'ENG 001', 'Unit 1'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'The verb be',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'be له ثلاث أشكال حسب الفاعل: I ← am، he / she / it ← is، you / we / they ← are. العربي يقول "أنا طالب" بدون فعل، أما الإنجليزي فلازم I am a student. النفي بـ not بعد be، والسؤال be قبل الفاعل.',
                formulas: [
                    [['Subject', 's', 'subject'], ['am / is / are', 'v', 'be'], ['…']],
                    [['Subject', 's', 'subject'], ['am / is / are', 'v', 'be'], ['not', 'x', 'not']],
                    [['Am / Is / Are', 'v', 'be'], ['Subject', 's', 'subject'], ['…?']],
                ],
                examples: [
                    { parts: [['I', 's', 'subject'], ['am', 'v', 'be'], ['from Yanbu.']], ar: 'I ← am دايمًا. اختصارها I’m.' },
                    { parts: [['Hamza', 's', 'subject'], ['is', 'v', 'be'], ['from Egypt.']], ar: 'Hamza = he، فنقول is.' },
                    { parts: [['We', 's', 'subject'], ['are', 'v', 'be'], ['in class 3B.']], ar: 'we و you و they مع are.' },
                    { parts: [['I', 's', 'subject'], ['am', 'v', 'be'], ['not', 'x', 'not'], ['Saudi.']], ar: 'not بعد be. ونقول I’m not (ما فيه amn’t).' },
                    { parts: [['Mr. John', 's', 'subject'], ['is', 'v', 'be'], ['not', 'x', 'not'], ['Saudi.']], ar: 'isn’t = is not.' },
                    { parts: [['Are', 'v', 'be'], ['you', 's', 'subject'], ['a new student?'], ['Yes, I am.', 'n', 'short answer']], ar: 'be قبل الفاعل. والجواب القصير بنفس be.' },
                ],
                mistakes: [
                    { wrong: 'My name are Khalid.', right: 'My name is Khalid.', why: 'name شي واحد (it)، فنقول is.' },
                    { wrong: 'I from Tabuk.', right: 'I am from Tabuk.', why: 'العربي بدون فعل، الإنجليزي لازم am.' },
                    { wrong: 'I not am a teacher.', right: 'I am not a teacher.', why: 'not بعد be مو قبلها.' },
                    { wrong: 'Is Reem your sister? Yes, she’s.', right: 'Is Reem your sister? Yes, she is.', why: 'في جواب Yes ما نختصر.' },
                ],
                tables: [
                    {
                        title: 'الاختصارات',
                        head: ['الفاعل', 'مثبت', 'منفي'],
                        rows: [
                            ['I', 'I’m', 'I’m not'],
                            ['he / she / it', 'he’s / she’s / it’s', 'isn’t'],
                            ['you / we / they', 'you’re / we’re / they’re', 'aren’t'],
                        ],
                    },
                ],
            },
            warmup: {
                q: 'أول يوم لـ{nameAr} في المعهد، والتعارف مع زميل جديد. وش الصحيح؟',
                sentence: 'Hi! I ___ {name}.',
                choices: ['is', 'am', 'are'],
                answer: 1,
                why: 'مع I دايم am. في العربي نقول "أنا {nameAr}" بدون فعل، بس في الإنجليزي لازم am.',
            },
            blocks: [
                { type: 'names' },
                { type: 'text', text: 'أول يوم لـ{nameAr} في معهد التحضيري، والتعارف مع الزميل حمزة. وكل جملة تعارف تحتاج فعل اسمه be. في العربي نقول "أنا من ينبع" بدون فعل، أما الإنجليزي فلازم: I am from Yanbu. وله ثلاث أشكال حسب الفاعل:' },
                { type: 'rule', text: 'I → am  |  he / she / it → is  |  you / we / they → are' },
                { type: 'example', en: "{name}: Hi! I'm {name}. I'm from Yanbu.\nHamza: Hello, {name}. I'm Hamza. I'm not Saudi. I'm from Egypt.\n{name}: Are you a new student?\nHamza: Yes, I am. Is Mr. John our teacher?\n{name}: Yes, he is. He's British.", ar: 'الحوار فيه كل أشكال be. نفككه تحت.' },

                // ── 1) المثبت ──
                { type: 'heading', text: 'المثبت: am و is و are' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'formula', parts: [['Subject', 's'], ['am / is / are', 'v', 'be'], ['…']] },
                { type: 'text', text: "I’m اختصار I am. ومثلها he’s و she’s و we’re و they’re." },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['I', 's'], ["'m", 'v', 'am'], ['{name}.'], ['Hamza', 's', 'he'], ['is', 'v', 'is'], ['from Egypt.'], ['We', 's'], ['are', 'v', 'are'], ['in class 3B'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My father', 's', 'he'], ['is', 'v'], ['an engineer'], ['.', 'p']], ar: 'أبوي = he.' },
                { type: 'breakdown', parts: [['Saad and Omar', 's', 'they'], ['are', 'v'], ['my cousins'], ['.', 'p']], ar: 'شخصين = they.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Hamza and I ___ in class 3B.', choices: ['is', 'am', 'are'], a: 'are', why: 'Hamza and I = we، و we ياخذ are.' }] },
                {
                    type: 'fix',
                    label: 'ناقصها am / is / are',
                    kind: 'v',
                    wrong: 'My name are Khalid.',
                    mark: 'are',
                    options: ['My name am Khalid.', 'My name Khalid.', 'My name is Khalid.'],
                    answer: 'My name is Khalid.',
                    parts: [['My name', 's', 'it'], ['is', 'v', 'is'], ['Khalid'], ['.', 'p']],
                    why: 'name شي واحد (it)، فنقول is مو are.',
                },
                {
                    type: 'fix',
                    label: 'ناقصها فعل be',
                    kind: 'v',
                    wrong: 'I from Tabuk.',
                    mark: 'I from',
                    options: ['I from am Tabuk.', 'I am from Tabuk.', 'Am I from Tabuk.'],
                    answer: 'I am from Tabuk.',
                    parts: [['I', 's'], ['am', 'v', 'am'], ['from Tabuk'], ['.', 'p']],
                    why: 'العربي يقول "أنا من تبوك" بدون فعل، أما الإنجليزي فلازم am بعد I.',
                },

                // ── 2) النفي ──
                { type: 'heading', text: 'النفي: not بعد be' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'formula', parts: [['Subject', 's'], ['am / is / are', 'v', 'be'], ['not', 'x', 'not'], ['…']] },
                { type: 'text', text: "واختصاراتها: isn't و aren't و I'm not (ما فيه amn't)." },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['I', 's'], ["'m", 'v', 'am'], ['not', 'x', 'not'], ['Saudi.'], ['Mr. John', 's'], ["isn't", 'x', 'is + not'], ['Saudi.'], ['We', 's'], ["aren't", 'x', 'are + not'], ['late'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The library', 's', 'it'], ["isn't", 'x', 'is + not'], ['open on Fridays'], ['.', 'p']] },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: "Hamza ___ from Jordan. He's from Egypt.", choices: ["aren't", "isn't", 'not'], a: "isn't", why: 'Hamza = he، والنفي is + not.' }] },
                {
                    type: 'fix',
                    label: 'not في مكان غلط',
                    kind: 'x',
                    wrong: 'I not am a teacher.',
                    mark: 'not am',
                    options: ['I am not a teacher.', 'I not a teacher.', 'I amn’t a teacher.'],
                    answer: 'I am not a teacher.',
                    parts: [['I', 's'], ['am', 'v', 'am'], ['not', 'x', 'not'], ['a teacher'], ['.', 'p']],
                    why: 'not دايمًا بعد be (am not). وما فيه amn’t.',
                },

                // ── 3) السؤال ──
                { type: 'heading', text: 'السؤال والجواب القصير' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'be تطلع قبل الفاعل. والجواب القصير بنفس be، و Yes بدون اختصار: Yes, he is (مو Yes, he’s).' },
                { type: 'formula', parts: [['Am / Is / Are', 'v', 'be'], ['Subject', 's'], ['…?']] },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['Are', 'v', 'be'], ['you', 's'], ['a new student'], ['?', 'p'], ['Yes, I am.', 'n', 'Short answer']] },
                { type: 'breakdown', parts: [['Is', 'v', 'be'], ['Mr. John', 's'], ['our teacher'], ['?', 'p'], ['Yes, he is.', 'n', 'Short answer']] },
                { type: 'breakdown', parts: [['Are', 'v'], ['your parents', 's'], ['from Yanbu'], ['?', 'p'], ["No, they aren't.", 'x', 'Short answer']] },
                { type: 'breakdown', parts: [['Where', 'n', 'Question word'], ['are', 'v'], ['you', 's'], ['from'], ['?', 'p'], ["I'm from Jeddah.", 'n', 'Answer']], ar: 'كلمة السؤال، بعدها be، بعدها الفاعل.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Is Reem your sister? Yes, ___', choices: ["she's.", 'she are.', 'she is.'], a: 'she is.', why: 'في جواب Yes ما نختصر.' }] },
                {
                    type: 'fix',
                    label: 'جواب Yes مختصر',
                    kind: 'x',
                    wrong: 'Is Mr. John your teacher? Yes, he’s.',
                    mark: 'he’s',
                    options: ['Is Mr. John your teacher? Yes, he does.', 'Is Mr. John your teacher? Yes, he is.', 'Is Mr. John your teacher? Yes, he are.'],
                    answer: 'Is Mr. John your teacher? Yes, he is.',
                    parts: [['Is', 'v'], ['Mr. John', 's'], ['your teacher'], ['?', 'p'], ['Yes, he is.', 'n', 'Short answer']],
                    why: 'جواب Yes القصير ما ينختصر: Yes, he is. أما No فنقدر نختصر: No, he isn’t.',
                },
                { type: 'note', text: 'غلط شائع: I not am ✗، و My father a doctor ✗ (ناقص is)، و Yes, she’s ✗.' },

                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'عرّف بنفسك في ثلاث جمل: اسمك، ومن وين، وكم عمرك.', reference: "My name is Sami. I'm from Abha. I'm 18 years old.", placeholder: "My name is … I'm from … I'm … years old." },
                { type: 'try', task: 'اكتب سؤال لزميل جديد بـ Are you، وجاوبه بجواب قصير.', reference: "Are you from Jeddah? No, I'm not.", placeholder: 'Are you from …? …' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: am, is, or are?',
                    instructions: 'جمل من أول يوم في المعهد. اختر الشكل الصحيح.',
                    choices: ['am', 'is', 'are'],
                    items: [
                        { q: 'Our classroom ___ on the second floor.', a: 'is', why: 'classroom شي واحد = it.' },
                        { q: 'I ___ very happy today.', a: 'am', why: 'I دايمًا مع am.' },
                        { q: 'The students ___ from different cities.', a: 'are', why: 'students جمع = they.' },
                        { q: 'Mr. John ___ our English teacher.', a: 'is', why: 'Mr. John = he.' },
                        { q: 'You ___ in my class!', a: 'are', why: 'you دايم are، حتى لو شخص واحد.' },
                        { q: 'Hamza and Yousef ___ friends.', a: 'are', why: 'شخصين = they.' },
                        { q: 'I ___ not late.', a: 'am', why: 'not بعد am، و I دايم am.' },
                        { q: 'The library ___ big.', a: 'is', why: 'library شي واحد = it.' },
                        { q: 'We ___ new students.', a: 'are', why: 'We مع are.' },
                        { q: 'It ___ 8 am now.', a: 'is', why: 'It مع is.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Questions and short answers',
                    instructions: 'اختر الجواب الصحيح.',
                    items: [
                        { q: '___ you from Jeddah?', choices: ['Is', 'Am', 'Are'], a: 'Are', why: 'you ياخذ are، و be أول السؤال.' },
                        { q: 'Is Hamza your classmate? Yes, ___', choices: ["he's.", 'he is.', 'he does.'], a: 'he is.', why: 'في Yes ما نختصر.' },
                        { q: 'Are they at the library? No, ___', choices: ["they aren't.", "they isn't.", "they don't."], a: "they aren't.", why: 'they مع aren’t، و don’t ما تجي مع be.' },
                        { q: 'Where ___ Mr. John from?', choices: ['are', 'am', 'is'], a: 'is', why: 'Mr. John = he.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Choose the correct sentence',
                    instructions: 'كل سؤال فيه ثلاث جمل، وواحدة بس صحيحة.',
                    items: [
                        { q: 'About my brother:', choices: ['My brother are in Jeddah.', 'My brother is in Jeddah.', 'My brother am in Jeddah.'], a: 'My brother is in Jeddah.', why: 'brother واحد = he، فنقول is.' },
                        { q: 'About Madinah:', choices: ['I am not from Madinah.', 'I not from Madinah.', 'I amn’t from Madinah.'], a: 'I am not from Madinah.', why: 'ما فيه amn’t، ولازم be قبل not.' },
                        { q: 'About two sisters:', choices: ['Is Noura and Huda sisters?', 'Noura and Huda are sisters?', 'Are Noura and Huda sisters?'], a: 'Are Noura and Huda sisters?', why: 'اثنين = they، والسؤال be قبل الفاعل: Are.' },
                        { q: 'About us today:', choices: ['We isn’t late today.', 'We aren’t late today.', 'We don’t late today.'], a: 'We aren’t late today.', why: 'We مع aren’t.' },
                        { q: 'About the library:', choices: ['Is the library open? Yes, it’s.', 'Is the library open? Yes, it are.', 'Is the library open? Yes, it is.'], a: 'Is the library open? Yes, it is.', why: 'في Yes ما نختصر.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Correct the sentence',
                    instructions: 'كل جملة فيها خطأ في be. اكتبها صحيحة. (كتابة اختيارية)',
                    items: [
                        { q: 'My sisters is at school.', a: 'My sisters are at school.' },
                        { q: 'We is a big family.', a: 'We are a big family.' },
                        { q: 'Our teacher a kind man.', a: 'Our teacher is a kind man.' },
                        { q: 'They not are late.', a: 'They are not late.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise E: Make it negative',
                    instructions: 'اكتب الجملة منفية. (كتابة اختيارية)',
                    items: [
                        { q: 'I am from Riyadh.', a: "I'm not from Riyadh." },
                        { q: 'The teacher is Saudi.', a: "The teacher isn't Saudi." },
                        { q: 'They are in the library.', a: "They aren't in the library." },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 1.4 Writing simple sentences (RW ص 32) ───────────────
// الجو: "ورقة فهد المصححة". ورقة فيها 4 أخطاء، تحت كل جملة قوس باسم خطئها، والطالب يختار خطأ فيفتح شرحه تحت ويصلحه.
// بدون قسم أمثلة: كل جزء شرح ← مثال ← سؤال (الشروط الأربعة، ثم كل خطأ في الورقة). التدريب: 3 تمارين اختيار + كتابة اختيارية.
// يندرج تحت عنوان Sentences الموجود (ENGL 101)، عشان البحث عن sentence يطلع الدرسين
export const SENTENCES_ENG001: CourseLesson = {
    course: COURSE,
    unit: UNIT,
    title: 'Writing simple sentences',
    noExamples: true, // الأمثلة داخل الشرح: شرح ← مثال ← سؤال
    summary: {
        rule: 'الجملة البسيطة (simple sentence) تحتاج 4 شروط: حرف كبير في أولها، وفاعل (مين؟)، وفعل (وش يسوي أو وش هو؟)، ونقطة في آخرها. والترتيب دايمًا: فاعل ثم فعل ثم الباقي. العربي يقول "أخوي طالب" بدون فعل، أما الإنجليزي فلازم is.',
        formulas: [
            [['Subject', 's', 'subject'], ['Verb', 'v', 'verb'], ['the rest'], ['.', 'p', 'full stop']],
        ],
        examples: [
            { parts: [['My mother', 's', 'subject'], ['is', 'v', 'verb'], ['a teacher'], ['.', 'p']], ar: 'الأربعة كلها: حرف كبير ✓ فاعل ✓ فعل ✓ نقطة ✓' },
            { parts: [['Hamza', 's', 'subject'], ['speaks', 'v', 'verb'], ['Arabic and English'], ['.', 'p']], ar: 'اللغات أسماء، فبحرف كبير: Arabic، English.' },
            { parts: [['I', 's', 'subject'], ['am', 'v', 'verb'], ['from Yanbu'], ['.', 'p']], ar: 'I دايمًا بحرف كبير، والمدينة بحرف كبير.' },
            { parts: [['Noura', 's', 'subject'], ['works', 'v', 'verb'], ['in a hospital'], ['.', 'p']], ar: 'اسم الشخص فاعل، وبعده الفعل على طول.' },
            { parts: [['We', 's', 'subject'], ['play', 'v', 'verb'], ['football on Fridays'], ['.', 'p']], ar: 'الفعل play بعد We مباشرة.' },
            { parts: [['The weather', 's', 'subject'], ['is', 'v', 'verb'], ['very hot today'], ['.', 'p']], ar: 'is بين الفاعل ووصفه (very hot).' },
        ],
        mistakes: [
            { wrong: 'my sister lives in jeddah.', right: 'My sister lives in Jeddah.', why: 'أول كلمة واسم المدينة بحرف كبير.' },
            { wrong: 'I from Yanbu.', right: 'I am from Yanbu.', why: 'العربي بدون فعل، الإنجليزي لازم am / is / are.' },
            { wrong: 'Study at the institute.', right: 'I study at the institute.', why: 'العربي يخفي الفاعل داخل الفعل، الإنجليزي لازم يكتبه.' },
            { wrong: 'My brother engineering studies.', right: 'My brother studies engineering.', why: 'الفعل بعد الفاعل مباشرة، ثم الباقي.' },
        ],
        tables: [
            {
                title: 'أخطاء ورقة فهد',
                head: ['الخطأ', 'مثال', 'الصح'],
                rows: [
                    ['حرف كبير', 'my name is Fahad.', 'My name is Fahad.'],
                    ['ناقص فعل', 'I from Yanbu.', 'I am from Yanbu.'],
                    ['ناقص فاعل', 'Study at the institute.', 'I study at the institute.'],
                    ['الترتيب', 'My brother engineering studies.', 'My brother studies engineering.'],
                ],
            },
        ],
    },
    warmup: {
        q: 'هالجملة من ورقة {nameAr}. كم خطأ فيها؟',
        sentence: 'my brother a student.',
        choices: ['خطأ واحد', 'خطأين', 'ما فيها خطأ'],
        answer: 1,
        why: 'my لازم بحرف كبير، وناقصها فعل: My brother is a student.',
    },
    blocks: [
        { type: 'names' },
        { type: 'text', text: 'الجملة البسيطة (simple sentence) أصغر جملة كاملة، وكل كتابتك في التحضيري مبنية عليها.' },

        // ── 1) شرح ← مثال ← سؤال: الشروط الأربعة ──
        { type: 'label', icon: '📘', text: 'الشرح: لازم تحقق 4 شروط' },
        {
            type: 'steps',
            items: [
                { kind: 'dep', title: 'حرف كبير', ar: 'أول كلمة، و I، وأسماء الناس والمدن.', en: 'My · I · Yanbu' },
                { kind: 's', title: 'فاعل (subject)', ar: 'اللي نتكلم عنه.', en: 'My brother' },
                { kind: 'v', title: 'فعل (verb)', ar: 'وش يسوي أو وش هو.', en: 'studies · is' },
                { kind: 'p', title: 'نقطة (full stop)', ar: 'تقفل الجملة.', en: '.' },
            ],
        },
        { type: 'label', icon: '👀', text: 'مثال: جمل فيها الأربعة كلها' },
        { type: 'text', text: 'الفاعل بالأزرق، والفعل بالأخضر، والنقطة بالبرتقالي.' },
        { type: 'breakdown', parts: [['My mother', 's'], ['is', 'v'], ['a teacher'], ['.', 'p']], ar: 'حرف كبير ✓ · فاعل My mother ✓ · فعل is ✓ · نقطة ✓' },
        { type: 'breakdown', parts: [['Hamza', 's'], ['speaks', 'v'], ['Arabic and English'], ['.', 'p']], ar: 'اللغات اسماء، فبحرف كبير: Arabic، English.' },
        { type: 'label', icon: '❓', text: 'سؤال' },
        { type: 'check', items: [{ q: 'Which one is a complete simple sentence?', choices: ['Reem in Jeddah.', 'Reem lives in Jeddah.', 'lives in Jeddah.'], a: 'Reem lives in Jeddah.', why: 'الأولى ناقصها فعل، والثالثة ناقصها فاعل.' }] },

        // ── 2) ورقة فهد: كل خطأ شرح ← مثال ← سؤال ──
        { type: 'text', text: 'ورقة {nameAr} رجّعها المدرس وفيها 4 أخطاء، وكل خطأ كسر شرط. اضغط على خطأ وصلّحه، وبعدها الخطأ اللي بعده:' },
        {
            type: 'errors',
            title: 'ورقة {nameAr}',
            fixed: 'My name is {name}. I am from Yanbu. I study at the Preparatory Year Institute. My brother Saad studies engineering.',
            items: [
                {
                    label: 'الحرف الكبير',
                    short: 'الحرف الكبير',
                    kind: 'dep',
                    line: 'my name is {name}.',
                    mark: 'my',
                    blocks: [
                        { type: 'label', icon: '📘', text: 'الشرح' },
                        { type: 'text', text: 'أول كلمة في الجملة بحرف كبير. وكذلك I، وأسماء الناس والمدن ({name}، Yanbu).' },
                        { type: 'label', icon: '👀', text: 'مثال' },
                        { type: 'breakdown', parts: [['my', 'x', 'Capital ✗'], ['name is {name}'], ['.', 'p']], ar: 'الصح: My name is {name}. أول كلمة لازم كبيرة.' },
                        { type: 'breakdown', parts: [['i', 'x', 'Capital ✗'], ['study in'], ['yanbu', 'x', 'Capital ✗'], ['.', 'p']], ar: 'الصح: I study in Yanbu. حرف I دايمًا كبير، والمدينة اسم.' },
                        { type: 'label', icon: '❓', text: 'سؤال' },
                        { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['i live in yanbu.', 'I live in Yanbu', 'I live in Yanbu.'], a: 'I live in Yanbu.', why: 'I و Yanbu بحرف كبير، وفي الآخر نقطة.' }] },
                        {
                            type: 'fix',
                            label: 'الحرف الكبير',
                            kind: 'dep',
                            wrong: 'my sister lives in jeddah.',
                            mark: 'my',
                            options: ['My sister lives in jeddah.', 'my sister lives in Jeddah.', 'My sister lives in Jeddah.'],
                            answer: 'My sister lives in Jeddah.',
                            parts: [['My sister', 's'], ['lives', 'v'], ['in Jeddah'], ['.', 'p']],
                            why: 'أول الجملة بحرف كبير (My)، واسم المدينة بحرف كبير (Jeddah).',
                        },
                    ],
                },
                {
                    label: 'ناقصها فعل',
                    short: 'ناقص فعل',
                    kind: 'v',
                    line: 'I from Yanbu.',
                    mark: 'I from',
                    blocks: [
                        { type: 'label', icon: '📘', text: 'الشرح' },
                        { type: 'text', text: 'أكثر خطأ عند الطالب العربي، لأن العربي يقول "أنا من ينبع" بدون فعل. الإنجليزي لازم فيه فعل، وهي اللي ننساها: is و am و are.' },
                        { type: 'label', icon: '👀', text: 'مثال' },
                        { type: 'breakdown', parts: [['I', 's'], ['(?)', 'x', 'No verb ✗'], ['from Yanbu'], ['.', 'p']], ar: 'الصح: I am from Yanbu.' },
                        { type: 'breakdown', parts: [['Noura', 's'], ['(?)', 'x', 'No verb ✗'], ['happy today'], ['.', 'p']], ar: 'الصح: Noura is happy today. الوصف (happy) يحتاج is قبله.' },
                        { type: 'label', icon: '❓', text: 'سؤال' },
                        { type: 'check', items: [{ q: 'My uncle a pilot. What is missing?', choices: ['a subject', 'a verb', 'a full stop'], a: 'a verb', why: 'الصح: My uncle is a pilot.' }] },
                        {
                            type: 'fix',
                            label: 'ناقصها فعل',
                            kind: 'v',
                            wrong: 'The weather very hot today.',
                            mark: 'weather very',
                            options: ['The weather is very hot today.', 'The weather very is hot today.', 'The weather very hot today is.'],
                            answer: 'The weather is very hot today.',
                            parts: [['The weather', 's'], ['is', 'v'], ['very hot today'], ['.', 'p']],
                            why: 'very hot يوصف الطقس، والإنجليزي يحتاج is بين الفاعل ووصفه.',
                        },
                    ],
                },
                {
                    label: 'ناقصها فاعل',
                    short: 'ناقص فاعل',
                    kind: 's',
                    line: 'Study at the Preparatory Year Institute.',
                    mark: 'Study',
                    blocks: [
                        { type: 'label', icon: '📘', text: 'الشرح' },
                        { type: 'text', text: 'في العربي الفاعل يختفي داخل الفعل ("أدرس" فيها أنا)، أما الإنجليزي فلازم تكتبه.' },
                        { type: 'label', icon: '👀', text: 'مثال' },
                        { type: 'breakdown', parts: [['(?)', 'x', 'No subject ✗'], ['Study', 'v'], ['at the institute'], ['.', 'p']], ar: 'الصح: I study at the institute.' },
                        { type: 'breakdown', parts: [['(?)', 'x', 'No subject ✗'], ['Works', 'v'], ['in a hospital'], ['.', 'p']], ar: 'الصح: She works in a hospital. مين يشتغل؟ لازم نكتبه.' },
                        { type: 'label', icon: '❓', text: 'سؤال' },
                        { type: 'check', items: [{ q: 'Lives in AlUla. What is missing?', choices: ['a verb', 'a capital letter', 'a subject'], a: 'a subject', why: 'مين يعيش؟ الصح مثلًا: He lives in AlUla.' }] },
                        {
                            type: 'fix',
                            label: 'ناقصها فاعل',
                            kind: 's',
                            wrong: 'Is my best friend.',
                            mark: 'Is',
                            options: ['Is my best friend.', 'He is my best friend.', 'Is he my best friend.'],
                            answer: 'He is my best friend.',
                            parts: [['He', 's'], ['is', 'v'], ['my best friend'], ['.', 'p']],
                            why: 'مين صديقك؟ ما ذكرناه. لازم نكتب الفاعل قبل الفعل.',
                        },
                    ],
                },
                {
                    label: 'ترتيب الكلمات',
                    short: 'الترتيب',
                    kind: 'x',
                    line: 'My brother Saad engineering studies.',
                    mark: 'engineering studies',
                    blocks: [
                        { type: 'label', icon: '📘', text: 'الشرح' },
                        { type: 'text', text: 'الفاعل أول، بعده الفعل، بعده الباقي. الإنجليزي ما يقبل ترتيب ثاني.' },
                        { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['the rest']] },
                        { type: 'label', icon: '👀', text: 'مثال' },
                        { type: 'breakdown', parts: [['My brother Saad', 's'], ['engineering', 'x', 'Wrong place ✗'], ['studies', 'v'], ['.', 'p']], ar: 'الصح: My brother Saad studies engineering.' },
                        { type: 'breakdown', parts: [['We', 's'], ['football', 'x', 'Wrong place ✗'], ['play', 'v'], ['on Fridays'], ['.', 'p']], ar: 'الصح: We play football on Fridays. الفعل play يجي بعد We على طول.' },
                        { type: 'label', icon: '❓', text: 'سؤال' },
                        { type: 'check', items: [{ q: 'Choose the correct order.', choices: ['Reem English speaks.', 'Speaks Reem English.', 'Reem speaks English.'], a: 'Reem speaks English.', why: 'فاعل، ثم فعل، ثم الباقي.' }] },
                        {
                            type: 'fix',
                            label: 'ترتيب الكلمات',
                            kind: 'x',
                            wrong: 'Hamza Arabic speaks.',
                            mark: 'Arabic speaks',
                            options: ['Speaks Hamza Arabic.', 'Arabic Hamza speaks.', 'Hamza speaks Arabic.'],
                            answer: 'Hamza speaks Arabic.',
                            parts: [['Hamza', 's'], ['speaks', 'v'], ['Arabic'], ['.', 'p']],
                            why: 'الترتيب دايمًا: فاعل، ثم فعل، ثم الباقي.',
                        },
                    ],
                },
            ],
        },

        // ── 3) تحدي: أكثر من خطأ في جملة ──
        { type: 'heading', text: 'تحدي: خطأين في جملة وحدة' },
        {
            type: 'fix',
            label: 'خطأين: فعل وحرف كبير',
            kind: 'dep',
            wrong: 'my cousin a nurse in jeddah.',
            mark: 'my',
            options: ['My cousin a nurse in Jeddah.', 'My cousin is a nurse in Jeddah.', 'my cousin is a nurse in jeddah.'],
            answer: 'My cousin is a nurse in Jeddah.',
            parts: [['My cousin', 's'], ['is', 'v'], ['a nurse in Jeddah'], ['.', 'p']],
            why: 'فيها خطأين: ناقصها is، وناقصها حرف كبير في My و Jeddah.',
        },
        { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
        { type: 'try', view: 'explain', task: 'اكتب جملتين بسيطتين عن مدينتك، وتأكد من الشروط الأربعة.', reference: 'Yanbu is a city on the Red Sea. It has a big port.', placeholder: 'Yanbu is …' },
        { type: 'try', view: 'explain', task: 'صحح: reem a student at kau.', reference: 'Reem is a student at KAU.', placeholder: 'Reem is …' },

        // ── التمارين: ثلاثة اختيار (لازم يخلصها بالترتيب)، وتمرينين كتابة اختياريين ──
        {
            type: 'exercise',
            title: "Exercise A: What's wrong?",
            instructions: 'إذا الجملة صحيحة اختر Correct، وإذا فيها خطأ اختر نوعه.',
            items: [
                { q: 'My grandfather lives in Taif.', choices: SENTENCE_CHECK, a: 'Correct' },
                { q: 'My sister a student at KAU.', choices: SENTENCE_CHECK, a: 'No verb', why: 'ناقص is.' },
                { q: 'Teaches at a big school.', choices: SENTENCE_CHECK, a: 'No subject', why: 'مين يدرّس؟' },
                { q: 'My brother coffee drinks every morning.', choices: SENTENCE_CHECK, a: 'Word order', why: 'الفعل drinks قبل coffee.' },
                { q: 'my father is from abha.', choices: SENTENCE_CHECK, a: 'Capital letter', why: 'my أول الجملة، و Abha اسم مدينة.' },
                { q: 'They are from Egypt.', choices: SENTENCE_CHECK, a: 'Correct' },
                { q: 'Are in the classroom.', choices: SENTENCE_CHECK, a: 'No subject', why: 'مين اللي في الفصل؟' },
                { q: 'Our teacher very kind.', choices: SENTENCE_CHECK, a: 'No verb', why: 'ناقص is.' },
                { q: 'Saad English studies.', choices: SENTENCE_CHECK, a: 'Word order', why: 'الفعل studies لازم قبل English.' },
                { q: 'i live in riyadh.', choices: SENTENCE_CHECK, a: 'Capital letter', why: 'I و Riyadh بحرف كبير.' },
            ],
        },
        {
            type: 'exercise',
            title: 'Exercise B: Choose the correct sentence',
            instructions: 'كل سؤال فيه ثلاث جمل، وواحدة بس صحيحة.',
            items: [
                { q: 'About Reem’s father:', choices: ['My father at a bank works.', 'My father works at a bank.', 'Works at a bank.'], a: 'My father works at a bank.', why: 'فاعل، ثم فعل، ثم الباقي.' },
                { q: 'About the weather in Abha:', choices: ['The weather in Abha cool.', 'the weather in abha is cool.', 'The weather in Abha is cool.'], a: 'The weather in Abha is cool.', why: 'الأولى ناقصها is، والثانية ناقصها الحروف الكبيرة.' },
                { q: 'About Noura’s hobby:', choices: ['Noura reads English books.', 'Noura English books reads.', 'Reads Noura English books.'], a: 'Noura reads English books.', why: 'الفعل بعد الفاعل مباشرة.' },
                { q: 'About Omar’s class:', choices: ['Omar is a student in my class', 'Omar is a student in my class.', 'Omar a student in my class.'], a: 'Omar is a student in my class.', why: 'الأولى ما فيها نقطة، والثالثة ناقصها is.' },
                { q: 'About two brothers:', choices: ['My brothers in Tabuk live.', 'Live in Tabuk my brothers.', 'My brothers live in Tabuk.'], a: 'My brothers live in Tabuk.', why: 'فاعل ثم فعل ثم مكان.' },
                { q: 'About a trip:', choices: ['we are in abha today.', 'We are in Abha today.', 'We in Abha today.'], a: 'We are in Abha today.', why: 'We و Abha بحرف كبير، ومعها are.' },
            ],
        },
        {
            type: 'exercise',
            title: "Exercise C: Khalid's paper",
            instructions: 'هذي ورقة خالد، كل جملة فيها خطأ. اختر الجملة الصحيحة.',
            items: [
                { q: 'my name khalid.', choices: ['my name is khalid.', 'My name Khalid.', 'My name is Khalid.'], a: 'My name is Khalid.', why: 'ناقص is، وناقص حرف كبير في My و Khalid.' },
                { q: 'I 19 years old.', choices: ['I am 19 years old.', 'I 19 am years old.', 'Am I 19 years old.'], a: 'I am 19 years old.', why: 'ناقص am بعد I.' },
                { q: 'Live in tabuk with my family.', choices: ['Live in Tabuk with my family.', 'I live in tabuk with my family.', 'I live in Tabuk with my family.'], a: 'I live in Tabuk with my family.', why: 'ناقص الفاعل I، و Tabuk بحرف كبير.' },
                { q: 'My father a doctor.', choices: ['My father is a doctor', 'My father is a doctor.', 'My father a doctor is.'], a: 'My father is a doctor.', why: 'ناقص is، وفي الآخر نقطة.' },
                { q: 'I two sisters have.', choices: ['Have two sisters.', 'I have two sisters.', 'I two have sisters.'], a: 'I have two sisters.', why: 'الفعل have بعد I، وبعده الباقي.' },
            ],
        },
        {
            type: 'exercise',
            title: 'Exercise D: Put the words in order',
            instructions: 'رتب الكلمات، وحط الحرف الكبير والنقطة. (كتابة اختيارية)',
            items: [
                { q: 'is / my brother / a pilot', a: 'My brother is a pilot.' },
                { q: 'live / in Jeddah / my grandparents', a: 'My grandparents live in Jeddah.' },
                { q: 'speaks / she / three languages', a: 'She speaks three languages.' },
                { q: 'football / watch / on TV / we', a: 'We watch football on TV.' },
            ],
        },
        {
            type: 'exercise',
            title: "Exercise E: Write Khalid's sentences",
            instructions: 'اكتب كل جملة من ورقة خالد صحيحة. (كتابة اختيارية)',
            items: [
                { q: 'my name khalid.', a: 'My name is Khalid.' },
                { q: 'I 19 years old.', a: 'I am 19 years old.' },
                { q: 'Live in tabuk with my family.', a: 'I live in Tabuk with my family.' },
                { q: 'My father a doctor.', a: 'My father is a doctor.' },
                { q: 'I two sisters have.', a: 'I have two sisters.' },
            ],
        },
    ],
};

// ─────────────── 1.5 Vocabulary: family، countries & nationalities، jobs (RW ص 24، LS ص 30 و31) ───────────────
// الجو: "شجرة عائلة فهد". كلمات العائلة والوظائف كلها على شجرة وحدة، والجنسيات من زملاء فهد في المعهد.
// بدون قسم أمثلة: العائلة، ثم الوظائف، ثم الجنسيات، ثم الاستثناءات، وكل واحد شرح ← مثال ← سؤال ← بطاقة تصحيح.
const FAMILY_TREE: TreeNode = {
    person: { name: 'Saleh', role: 'grandfather', emoji: '👴' },
    spouse: { name: 'Noura', role: 'grandmother', emoji: '👵' },
    children: [
        { person: { name: 'Faisal', role: 'uncle', job: 'pilot', emoji: '✈️' }, children: [{ person: { name: 'Omar', role: 'cousin', emoji: '⚽' } }] },
        {
            person: { name: 'Ahmed', role: 'father', job: 'engineer', emoji: '👨' },
            spouse: { name: 'Huda', role: 'mother', job: 'teacher', emoji: '👩' },
            children: [
                { person: { name: 'Saad', role: 'brother', emoji: '🎓' } },
                { person: { name: '{name}', role: 'me', emoji: '{emoji}', me: true } },
                { person: { name: 'Reem', role: 'sister', emoji: '📚' } },
            ],
        },
        { person: { name: 'Mona', role: 'aunt', job: 'doctor', emoji: '🩺' } },
    ],
};

const vocabulary: Topic = {
    slug: 'family-countries-jobs',
    title: 'Family, countries and jobs',
    titleAr: 'مفردات: العائلة والدول والوظائف',
    keywords: ['vocabulary', 'family', 'countries', 'nationalities', 'jobs', 'مفردات', 'كلمات', 'عائلة', 'العائلة', 'دول', 'جنسيات', 'وظائف', 'وظايف', 'uncle', 'cousin', 'journalist', 'family tree', 'شجرة العائلة', 'تحضيري', 'ENG 001', 'Unit 1'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Family, countries and jobs',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'الإنجليزي ما يفرق بين العم والخال (uncle) ولا بين العمة والخالة (aunt). الوظيفة غالبًا فعل + er / or / ist، وقبلها a أو an. والجنسية غالبًا الدولة + ian / ese / i وتبدأ بحرف كبير، وفيه استثناءات تنحفظ.',
                formulas: [
                    [['Country', 'n', 'country'], ['+ ian / ese / i', 'x', 'ending'], ['Nationality', 'adj', 'nationality']],
                    [['teach', 'v', 'verb'], ['+ er / or / ist', 'x', 'ending'], ['Job', 'n', 'job']],
                    [['a / an', 'x', 'clue'], ['Job', 'n', 'job']],
                ],
                examples: [
                    { parts: [['Faisal', 'n', 'name'], ['is my father’s brother. He is'], ['my uncle', 'x', 'family'], ['.', 'p']], ar: 'أخو الأب = uncle، وأخو الأم = uncle بعد.' },
                    { parts: [['Omar', 'n', 'name'], ['is my uncle’s son. He is'], ['my cousin', 'x', 'family'], ['.', 'p']], ar: 'عيال العم والعمة والخال والخالة كلهم cousin.' },
                    { parts: [['Ahmed and Huda', 'n', 'names'], ['are'], ['my parents', 'x', 'family'], ['.', 'p']], ar: 'parents = أبوي وأمي.' },
                    { parts: [['My father', 's'], ['is'], ['an', 'x', 'an'], ['engineer', 'n', 'job'], ['.', 'p']], ar: 'engineer تبدأ بصوت علة، فقبلها an.' },
                    { parts: [['Hamza', 'n', 'name'], ['is from'], ['Egypt', 'n', 'country'], ['. He is'], ['Egyptian', 'adj', 'nationality'], ['.', 'p']], ar: 'Egypt + ian، وبحرف كبير.' },
                    { parts: [['Mr. John', 'n', 'name'], ['is from'], ['the UK', 'n', 'country'], ['. He is'], ['British', 'x', 'exception'], ['.', 'p']], ar: 'استثناء: ما نقول UKish، نقول British.' },
                ],
                mistakes: [
                    { wrong: 'He is Egypt.', right: 'He is Egyptian.', why: 'Egypt اسم الدولة، والجنسية Egyptian.' },
                    { wrong: 'He is egyptian.', right: 'He is Egyptian.', why: 'الجنسية بحرف كبير.' },
                    { wrong: 'My father brother is a pilot.', right: 'My father’s brother is a pilot.', why: 'الملكية بين اسمين: ’s.' },
                    { wrong: 'My father is engineer.', right: 'My father is an engineer.', why: 'قبل الوظيفة a أو an.' },
                ],
                tables: [
                    {
                        title: 'كلمات العائلة',
                        head: ['Word', 'معناه'],
                        rows: [
                            ['uncle', 'عم أو خال'],
                            ['aunt', 'عمة أو خالة'],
                            ['cousin', 'ولد أو بنت العم أو الخال'],
                            ['parents', 'الأب والأم'],
                            ['grandparents', 'الأجداد'],
                            ['grandchildren', 'الأحفاد'],
                        ],
                    },
                    {
                        title: 'الدولة والجنسية',
                        head: ['Country', 'Nationality', 'القاعدة'],
                        rows: [
                            ['Egypt', 'Egyptian', '+ ian'],
                            ['China', 'Chinese', '+ ese'],
                            ['Oman', 'Omani', '+ i'],
                            ['Saudi Arabia', 'Saudi', 'استثناء'],
                            ['the UK', 'British', 'استثناء'],
                            ['Türkiye', 'Turkish', 'استثناء'],
                        ],
                    },
                ],
            },
            warmup: {
                q: 'فيصل أخو أبو {nameAr}. وش يكون لـ{nameAr} بالإنجليزي؟',
                choices: ['cousin', 'uncle', 'brother'],
                answer: 1,
                why: 'أخو الأب أو أخو الأم كلهم uncle. تحت شجرة عائلة {nameAr} كاملة.',
            },
            blocks: [
                { type: 'names' },
                { type: 'text', text: 'هذي شجرة عائلة {nameAr}، وكل الكلمات في الدرس عليها: العائلة، ووظيفة كل واحد. وبعدها نتعرف على زملاء {nameAr} في المعهد ونتعلم الجنسيات.' },
                { type: 'tree', root: FAMILY_TREE, caption: 'شجرة عائلة {nameAr}: الأجداد فوق، وتحتهم عيالهم (العم فيصل، والأب أحمد مع الأم هدى، والعمة منى)، وتحت كل واحد عياله.' },

                // ── 1) العائلة ──
                { type: 'heading', text: 'كلمات العائلة على الشجرة' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'الإنجليزي ما يفرق بين العم والخال: الاثنين uncle. والعمة والخالة aunt، وعيالهم كلهم cousin.' },
                { type: 'text', text: 'وكلمات للمجموعة: parents (أبوي وأمي)، و grandparents (أجدادي)، و children (العيال)، و grandchildren (الأحفاد).' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['Faisal', 'n'], ['is'], ["my father's brother", 'adj', 'أخو أبوي'], ['. He is'], ['my uncle', 'x', 'Family word'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Omar', 'n'], ['is'], ["my uncle's son", 'adj', 'ولد عمي'], ['. He is'], ['my cousin', 'x', 'Family word'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Mona', 'n'], ['is'], ["my father's sister", 'adj', 'أخت أبوي'], ['. She is'], ['my aunt', 'x', 'Family word'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Ahmed and Huda', 'n'], ['are'], ['my parents', 'x', 'Family word'], ['. They have three'], ['children', 'x', 'Family word'], ['.', 'p']] },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Look at the tree. Saleh and Noura are {name}’s ___.', choices: ['parents', 'cousins', 'grandparents'], a: 'grandparents', why: 'فوق الأب والأم في الشجرة.' }] },
                {
                    type: 'fix',
                    label: 'الملكية بين اسمين',
                    kind: 'x',
                    wrong: 'My father brother is a pilot.',
                    mark: 'father brother',
                    options: ['My fathers brother is a pilot.', 'My father’s brother is a pilot.', 'My father his brother is a pilot.'],
                    answer: 'My father’s brother is a pilot.',
                    parts: [['My father’s', 'adj', 'حق أبوي'], ['brother', 'n'], ['is', 'v'], ['a pilot'], ['.', 'p']],
                    why: 'الشي حق شخص نكتب ’s بعد اسمه: my father’s brother = أخو أبوي.',
                },

                // ── 2) الوظائف ──
                { type: 'heading', text: 'الوظائف تحت كل اسم' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'كثير من الوظائف كلمة + نهاية: er أو or أو ist. وفيه وظائف ما لها قاعدة وتنحفظ: pilot و doctor و nurse و engineer. وقبل الوظيفة a، و an إذا تبدأ بصوت علة.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['teach', 'v'], ['+ er', 'x', 'ending'], ['= teacher', 'n', 'Job'], ['|'], ['act', 'v'], ['+ or', 'x', 'ending'], ['= actor', 'n', 'Job'], ['|'], ['art', 'v'], ['+ ist', 'x', 'ending'], ['= artist', 'n', 'Job']], ar: 'أم {nameAr} teacher: teach + er.' },
                { type: 'breakdown', parts: [['My uncle', 's'], ['is'], ['a', 'x', 'a / an'], ['pilot', 'n', 'Job'], ['.'], ['My father', 's'], ['is'], ['an', 'x', 'a / an'], ['engineer', 'n', 'Job'], ['.', 'p']], ar: 'قبل الوظيفة a، و an إذا تبدأ بصوت علة.' },
                { type: 'breakdown', parts: [['My cousin Omar'], ['wants to be a'], ['journalist', 'n', 'journal + ist'], ['.', 'p']] },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Aunt Mona works in a hospital. She is ___.', choices: ['a teacher', 'a doctor', 'an engineer'], a: 'a doctor', why: 'شوف الشجرة: Mona · doctor.' }] },
                {
                    type: 'fix',
                    label: 'ناقص a / an',
                    kind: 'x',
                    wrong: 'My father is engineer.',
                    mark: 'engineer',
                    options: ['My father is a engineer.', 'My father is an engineer.', 'My father an engineer.'],
                    answer: 'My father is an engineer.',
                    parts: [['My father', 's'], ['is', 'v'], ['an', 'x', 'an'], ['engineer', 'n', 'Job'], ['.', 'p']],
                    why: 'قبل الوظيفة لازم a أو an. engineer تبدأ بصوت علة، فنقول an.',
                },

                // ── 3) الجنسيات ──
                { type: 'heading', text: 'زملاء {nameAr}: الدولة والجنسية' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'في فصل {nameAr} طلاب من دول ثانية. الجنسية غالبًا = اسم الدولة + نهاية، وتبدأ بحرف كبير.' },
                { type: 'formula', parts: [['He is from', 's'], ['Country', 'n'], ['→'], ['He is', 's'], ['Nationality', 'adj']] },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['Egypt', 'n', 'Hamza'], ['+ ian', 'x', 'ending'], ['Egyptian', 'adj'], ['|'], ['China', 'n', 'Li'], ['+ ese', 'x', 'ending'], ['Chinese', 'adj'], ['|'], ['Oman', 'n', 'Salem'], ['+ i', 'x', 'ending'], ['Omani', 'adj']], ar: 'ومثلها Jordan → Jordanian، Japan → Japanese، Kuwait → Kuwaiti.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Yousef is from Jordan. He is ___.', choices: ['Jordan', 'Jordanian', 'Jordanese'], a: 'Jordanian', why: 'Jordan + ian.' }] },
                {
                    type: 'fix',
                    label: 'دولة مكان الجنسية',
                    kind: 'adj',
                    wrong: 'Hamza is from Egypt. He is Egypt.',
                    mark: 'He is Egypt',
                    options: ['Hamza is from Egypt. He is Egyptian.', 'Hamza is from Egypt. He is egyptian.', 'Hamza is from Egypt. He is Egyptish.'],
                    answer: 'Hamza is from Egypt. He is Egyptian.',
                    parts: [['Hamza', 'n'], ['is from Egypt. He is'], ['Egyptian', 'adj', 'Nationality'], ['.', 'p']],
                    why: 'بعد He is نحط الجنسية (Egyptian) مو اسم الدولة، وبحرف كبير.',
                },

                // ── 4) الاستثناءات ──
                { type: 'heading', text: 'استثناءات تنحفظ' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'هذي ما تمشي على قاعدة "الدولة + نهاية"، فتنحفظ لحالها:' },
                { type: 'table', head: ['Country', 'Nationality'], rows: [['Saudi Arabia', 'Saudi'], ['the UK', 'British'], ['Türkiye', 'Turkish'], ['the UAE', 'Emirati']] },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['Our teacher, Mr. John,'], ['is from'], ['the UK', 'n', 'Country'], ['. He is'], ['British', 'x', 'Exception'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Ahmet', 'n'], ['is from'], ['Türkiye', 'n', 'Country'], ['. He is'], ['Turkish', 'x', 'Exception'], ['.', 'p']] },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Mona’s friend is from Saudi Arabia. She is ___.', choices: ['Saudian', 'Saudi', 'Saudish'], a: 'Saudi', why: 'استثناء: Saudi Arabia → Saudi.' }] },
                { type: 'note', text: 'غلط شائع: He is Egypt ✗ (الدولة مكان الجنسية)، و egyptian ✗ (بحرف صغير)، و my father brother ✗ (الصح my father’s brother).' },

                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'اكتب جملتين عن أقاربك: عمك أو خالك، وعياله.', reference: 'My uncle lives in Riyadh. His son Khalid is my cousin.', placeholder: 'My uncle … His son is my cousin.' },
                { type: 'try', task: 'اكتب جملة عن زميل من دولة ثانية: من وين وجنسيته.', reference: 'My friend Yousef is from Jordan. He is Jordanian.', placeholder: 'My friend is from … He is …' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Read the family tree',
                    instructions: 'ارجع لشجرة عائلة {nameAr} واختر الصحيح.',
                    items: [
                        { q: 'Reem is {name}’s ___.', choices: ['sister', 'cousin', 'aunt'], a: 'sister', why: 'Reem بنت أحمد وهدى مثل {name}.' },
                        { q: 'Faisal is Omar’s ___.', choices: ['uncle', 'grandfather', 'father'], a: 'father', why: 'Omar ولد Faisal.' },
                        { q: 'Huda is Saad’s ___.', choices: ['aunt', 'mother', 'sister'], a: 'mother', why: 'Saad ولد أحمد وهدى.' },
                        { q: 'Mona is Reem’s ___.', choices: ['mother', 'cousin', 'aunt'], a: 'aunt', why: 'Mona أخت أبوها.' },
                        { q: '{name} and Reem are Ahmed’s ___.', choices: ['parents', 'children', 'grandchildren'], a: 'children', why: 'هم عياله.' },
                        { q: 'Omar is Saleh’s ___.', choices: ['son', 'grandson', 'cousin'], a: 'grandson', why: 'ولد ولده.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Country → nationality',
                    instructions: 'اختر الجنسية الصحيحة. انتبه للاستثناءات.',
                    items: [
                        { q: 'She is from Japan. She is ___.', choices: ['Japanese', 'Japan', 'Japanian'], a: 'Japanese', why: 'Japan + ese.' },
                        { q: 'They are from the UAE. They are ___.', choices: ['UAE', 'Emiratian', 'Emirati'], a: 'Emirati', why: 'استثناء: the UAE → Emirati.' },
                        { q: 'He is from the UK. He is ___.', choices: ['English', 'British', 'UK'], a: 'British', why: 'استثناء: the UK → British.' },
                        { q: 'We are from Kuwait. We are ___.', choices: ['Kuwaiti', 'Kuwaitian', 'Kuwait'], a: 'Kuwaiti', why: 'Kuwait + i.' },
                        { q: 'Hamza is ___.', choices: ['egyptian', 'Egypt', 'Egyptian'], a: 'Egyptian', why: 'الجنسية بحرف كبير.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Exam style',
                    instructions: 'نفس شكل قسم Vocabulary في الكويز.',
                    items: [
                        { q: 'Ali is a ___ working for a newspaper. He writes articles about sport.', choices: ['farmer', 'journalist', 'pilot', 'chef'], a: 'journalist', why: 'journal + ist.' },
                        { q: 'Huda is a ___. She works in a hospital and helps doctors.', choices: ['manager', 'writer', 'nurse', 'farmer'], a: 'nurse', why: 'تساعد الدكاترة في المستشفى.' },
                        { q: 'Mr. Saleh is a ___. He cooks in a big restaurant.', choices: ['dancer', 'scientist', 'actor', 'chef'], a: 'chef', why: 'يطبخ في مطعم.' },
                        { q: 'Faisal is an ___. He designs roads and bridges.', choices: ['engineer', 'actor', 'artist', 'editor'], a: 'engineer', why: 'يصمم طرق وجسور.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Make the job',
                    instructions: 'اكتب الوظيفة من راسك. (كتابة اختيارية)',
                    items: [
                        { q: 'drive → ___', a: 'driver' },
                        { q: 'farm → ___', a: 'farmer' },
                        { q: 'direct → ___', a: 'director' },
                        { q: 'journal → ___', a: 'journalist' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 1.6 Skills: previewing، taking notes، syllable stress (RW ص 18، LS ص 19 و26 و32) ───────────────
// الجو: "مقال لمى من البداية للنهاية". فهد يقرأ مقال عن طباخة سعودية: قبل القراءة يتصفح، وأثناء المقابلة ياخذ ملاحظات، وبعدها ينطق كلماتها صح.
// بدون قسم أمثلة: كروت ثلاث مهارات فوق، وكل مهارة شرح ← مثال ← سؤال.
const skills: Topic = {
    slug: 'previewing-notes-stress',
    title: 'Previewing, taking notes and word stress',
    titleAr: 'مهارات: تصفح النص وأخذ الملاحظات ونبرة الكلمة',
    keywords: ['previewing', 'preview', 'taking notes', 'notes', 'syllable', 'syllable stress', 'stress', 'word stress', 'reading skills', 'listening skills', 'pronunciation', 'مهارات', 'قراءة', 'استماع', 'ملاحظات', 'نبرة', 'نطق', 'تحضيري', 'ENG 001', 'Unit 1'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Previewing, taking notes and word stress',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'ثلاث مهارات على نفس النص. قبل القراءة: شوف العنوان والصورة وتوقع الكلمات (previewing). أثناء الاستماع: اكتب المهم بس بكلمات مو جمل (الاسم والرقم والمكان والوظيفة). وبعدها في النطق: الكلمة مقاطع، وواحد منها ننطقه أقوى (stress).',
                formulas: [
                    [['title + picture', 'n', 'previewing'], ['words I expect', 'adj', 'predict']],
                    [['what I hear', 'x', 'listening'], ['Name – Age – Place – Job', 'v', 'notes']],
                    [['KITCH', 'x', 'stress'], ['en', 'n', 'weak']],
                ],
                examples: [
                    { parts: [['Meet Lama:', 'n', 'who?'], ['A Young Saudi Chef', 'adj', 'job?']], ar: 'من العنوان نتوقع كلمات مثل: food، kitchen، restaurant.' },
                    { parts: [['Life on', 'n', 'what?'], ['a Small Island', 'adj', 'where?']], ar: 'نتوقع: sea، boat، fish، people.' },
                    { parts: [['Lama', 'n', 'name'], ['–', 'p'], ['24', 'adj', 'age'], ['–', 'p'], ['Riyadh → Jeddah', 's', 'places'], ['–', 'p'], ['cook', 'v', 'job']], ar: 'ملاحظات: كلمات بس، والرقم بالأرقام.' },
                    { parts: [['Khalid', 'n', 'name'], ['–', 'p'], ['19', 'adj', 'age'], ['–', 'p'], ['Tabuk', 's', 'place'], ['–', 'p'], ['student', 'v', 'job']], ar: 'سمعت: "I’m Khalid. I’m 19 and I’m a student in Tabuk."' },
                    { parts: [['KITCH', 'x', '1st'], ['en'], ['|'], ['i'], ['TAL', 'x', '2nd'], ['ian']], ar: 'kitchen النبرة أول، و Italian في النص.' },
                    { parts: [['Jap'], ['a'], ['NESE', 'x', 'last']], ar: 'Japanese النبرة في الآخر.' },
                ],
                mistakes: [
                    { wrong: 'Note: "Lama is 24 and she is from Riyadh"', right: 'Note: Lama – 24 – Riyadh', why: 'نكتب كلمات مهمة بس، مو الجملة كاملة.' },
                    { wrong: 'Before reading: translate every hard word', right: 'Before reading: look at the title and picture', why: 'نتوقع الكلمات من العنوان، ما نترجم قبل ما نقرأ.' },
                    { wrong: 'res-TAU-rant', right: 'RES-tau-rant', why: 'النبرة على أول مقطع.' },
                    { wrong: 'Writing "twenty-four"', right: 'Writing 24', why: 'الأرقام تنكتب أرقام في الملاحظات، أسرع.' },
                ],
                tables: [
                    {
                        title: 'وش نكتب في الملاحظات',
                        head: ['النوع', 'من الجملة', 'نكتب'],
                        rows: [
                            ['Name', 'My name is Lama', 'Lama'],
                            ['Age', 'I am 24', '24'],
                            ['Place', 'I work in Jeddah', 'Jeddah'],
                            ['Job', 'I cook Saudi food', 'cook'],
                        ],
                    },
                    {
                        title: 'مكان النبرة',
                        head: ['Word', 'Stress', 'المقطع'],
                        rows: [
                            ['kitchen', 'KITCH-en', 'الأول'],
                            ['Italian', 'i-TAL-ian', 'الثاني'],
                            ['Japanese', 'Jap-a-NESE', 'الأخير'],
                        ],
                    },
                ],
            },
            warmup: {
                q: 'مع {nameAr} مقال عنوانه "Meet Lama: A Young Saudi Chef". قبل القراءة، وش أول شي نسويه؟',
                choices: ['يقرأ كلمة كلمة من أوله', 'يترجم كل الكلمات الصعبة', 'يشوف العنوان والصورة ويتوقع الموضوع'],
                answer: 2,
                why: 'هذا اسمه previewing: نظرة سريعة قبل القراءة تخليك تفهم أسرع.',
            },
            blocks: [
                { type: 'names' },
                { type: 'text', text: 'نقرأ مع {nameAr} مقال عن لمى، طباخة سعودية، وبعدها نسمع مقابلة معها. ثلاث مهارات تسهّل عليك القراءة والاستماع في الكويز، ومرتبة حسب وقتها:' },
                {
                    type: 'steps',
                    items: [
                        { kind: 'n', title: 'قبل القراءة', ar: 'تتصفح العنوان والصورة وتتوقع.', en: 'Previewing' },
                        { kind: 'v', title: 'أثناء الاستماع', ar: 'تكتب المهم بس.', en: 'Taking notes' },
                        { kind: 'x', title: 'بعد الاستماع', ar: 'تنطق الكلمات بنبرتها الصح.', en: 'Word stress' },
                    ],
                },

                // ── 1) قبل القراءة ──
                { type: 'heading', text: '1) قبل القراءة: Previewing' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'شوف العنوان والصورة، واسأل: عن مين؟ وعن وش؟ وتوقع الكلمات اللي بتجي. كذا لما تقرأ، تلقى كلمات متوقعها.' },
                { type: 'formula', parts: [['Title + picture', 'n'], ['Who? What?', 'x', 'Ask'], ['Words I expect', 'adj']] },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['Meet Lama:', 'n', 'Who? a woman'], ['A Young Saudi Chef', 'adj', 'Her job: cooking']], ar: 'والصورة: بنت في مطبخ. أتوقع كلمات مثل: food، kitchen، restaurant، cook.' },
                { type: 'breakdown', parts: [['Life on', 'n', 'What?'], ['a Small Island', 'adj', 'Where?']], ar: 'أتوقع كلمات: sea، boat، fish، people.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Which word will {name} probably see in the article?', choices: ['airport', 'kitchen', 'farm'], a: 'kitchen', why: 'العنوان عن طباخة، فالمطبخ متوقع.' }] },

                // ── 2) أثناء الاستماع ──
                { type: 'heading', text: '2) أثناء الاستماع: Taking notes' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'نسمع مع {nameAr} مقابلة لمى. ما نكتب كل كلمة، نكتب المهم بس: الأسماء والأرقام والأماكن والوظائف.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'example', en: '"My name is Lama and I am 24. I am from Riyadh, but I work in Jeddah now. I cook Saudi and Italian food."', ar: 'هذا اللي سمعناه.' },
                { type: 'breakdown', parts: [['Lama', 'n', 'Name'], ['–', 'p'], ['24', 'adj', 'Age'], ['–', 'p'], ['Riyadh → Jeddah', 's', 'Places'], ['–', 'p'], ['Saudi + Italian food', 'v', 'Job']], ar: 'وهذي ملاحظاته: كلمات بس، والرقم بالأرقام.' },
                { type: 'breakdown', parts: [['Khalid', 'n', 'Name'], ['–', 'p'], ['19', 'adj', 'Age'], ['–', 'p'], ['Tabuk', 's', 'Place'], ['–', 'p'], ['student', 'v', 'Job']], ar: 'سمعت: "Hi, I’m Khalid. I’m 19 and I’m a student in Tabuk."' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Lama says: "My restaurant is in Al-Balad." Which note is best?', choices: ['My restaurant is in', 'restaurant – Al-Balad', 'is in Al-Balad'], a: 'restaurant – Al-Balad', why: 'الشي والمكان بس.' }] },

                // ── 3) بعد الاستماع ──
                { type: 'heading', text: '3) بعد الاستماع: Syllable stress' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'بعدها نعيد كلمات لمى بصوتنا. الكلمة تنقسم مقاطع (المقطع جزء ينطق مرة وحدة)، وواحد منها ننطقه أقوى. المقطع المضغوط بالأحمر، ومكانه يختلف.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['KITCH', 'x', '1st'], ['en'], ['|'], ['i'], ['TAL', 'x', '2nd'], ['ian'], ['|'], ['Jap'], ['a'], ['NESE', 'x', 'last']], ar: 'kitchen النبرة أول، و Italian في النص، و Japanese في الآخر.' },
                { type: 'breakdown', parts: [['STU', 'x', '1st'], ['dent'], ['|'], ['SAU', 'x', '1st'], ['di'], ['|'], ['u'], ['ni'], ['VER', 'x', '3rd'], ['si'], ['ty']], ar: 'student و Saudi النبرة أول، و university في المقطع الثالث.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Where is the stress in restaurant?', choices: ['res-TAU-rant', 'RES-tau-rant', 'res-tau-RANT'], a: 'RES-tau-rant', why: 'النبرة على أول مقطع.' }] },
                { type: 'note', text: 'النبرة الغلط تخلي الكلمة ما تنفهم، حتى لو الحروف صح. لما تتعلم كلمة جديدة، احفظ نبرتها معها.' },

                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'العنوان: "My Grandfather’s Farm". اكتب 3 كلمات تتوقعها في النص.', reference: 'dates, palm trees, animals', placeholder: 'dates, …' },
                { type: 'try', task: 'اكتب ملاحظات (مو جمل): "My cousin Reem is 22. She lives in Riyadh and she works as a nurse."', reference: 'Reem – 22 – Riyadh – nurse', placeholder: 'Reem – …' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Where is the stress?',
                    instructions: 'اختر المقطع المضغوط.',
                    items: [
                        { q: 'family', choices: ['fam-I-ly', 'FAM-i-ly', 'fam-i-LY'], a: 'FAM-i-ly', why: 'النبرة على أول مقطع.' },
                        { q: 'computer', choices: ['COM-pu-ter', 'com-pu-TER', 'com-PU-ter'], a: 'com-PU-ter', why: 'النبرة على المقطع الثاني.' },
                        { q: 'engineer', choices: ['en-gi-NEER', 'EN-gi-neer', 'en-GI-neer'], a: 'en-gi-NEER', why: 'النبرة في الآخر، مثل Japanese.' },
                        { q: 'Egyptian', choices: ['E-gyp-tian', 'e-GYP-tian', 'e-gyp-TIAN'], a: 'e-GYP-tian', why: 'النبرة على المقطع الثاني.' },
                        { q: 'Which word has the stress on the first syllable?', choices: ['hotel', 'Chinese', 'doctor'], a: 'doctor', why: 'DOC-tor، أما ho-TEL و chi-NESE فالنبرة في الآخر.' },
                        { q: 'Which word has the stress on the last syllable?', choices: ['brother', 'Chinese', 'teacher'], a: 'Chinese', why: 'chi-NESE، مثل Japanese.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Good notes',
                    instructions: 'اختر أفضل ملاحظات للي سمعته.',
                    items: [
                        { q: '"Our teacher is from Egypt and he speaks three languages."', choices: ['Our teacher is from', 'he speaks', 'teacher – Egypt – 3 languages'], a: 'teacher – Egypt – 3 languages', why: 'الوظيفة والمكان والرقم.' },
                        { q: '"Haruki Murakami is a famous writer from Japan."', choices: ['Murakami – writer – Japan', 'is a famous', 'Haruki is a'], a: 'Murakami – writer – Japan', why: 'الاسم والوظيفة والمكان.' },
                        { q: '"My brother Saad is 23 and he studies in Jeddah."', choices: ['and he studies', 'Saad – 23 – Jeddah', 'My brother is'], a: 'Saad – 23 – Jeddah', why: 'الاسم والعمر والمكان.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Preview the title',
                    instructions: 'من العنوان بس، وش تتوقع؟',
                    items: [
                        { q: '"A Day at the Zoo". Which word will you probably see?', choices: ['lion', 'pilot', 'snow'], a: 'lion', why: 'الحديقة فيها حيوانات.' },
                        { q: '"The World’s Tallest Man". What is the text about?', choices: ['a building', 'a person', 'a mountain'], a: 'a person', why: 'كلمة Man في العنوان.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Write the notes',
                    instructions: 'اكتب ملاحظات قصيرة (كلمات، مو جمل). (كتابة اختيارية)',
                    items: [
                        { q: '"Hi, I’m Sara. I’m 20 and I’m from Abha. I want to be a doctor."', a: 'Sara – 20 – Abha – doctor' },
                        { q: '"My father is 50. He works in a bank in Riyadh."', a: 'father – 50 – bank – Riyadh' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة: family profile + الحديث عن شخص مشهور (RW ص 33 و34، LS ص 33) ───────────────
// الجو: "بطاقة فهد تمتلي". نهاية خيط الوحدة: الـ profile حق فهد نفسه، وكل جزء يعبي خانة في بطاقته، وبعدها الطالب يعبي بطاقته.
// بدون قسم أمثلة: كل خانة شرح ← مثال ← سؤال ← جرب بنفسك، وبعدها التحدث بنفس الطريقة.
const PROFILE_CARD: string[][] = [
    ['~{NAME}’S PROFILE CARD'],
    ['🙋 Me: name, age, city', '👨‍👩 My parents: jobs'],
    ['👫 Brothers and sisters', '📚 My studies and hobbies'],
];

const familyProfile: Topic = {
    slug: 'family-profile',
    title: 'Writing task: a family profile',
    titleAr: 'مهمة الوحدة: بارقراف عن عائلتك',
    keywords: ['profile', 'family profile', 'profile paragraph', 'writing task', 'paragraph', 'بارقراف', 'فقرة', 'كتابة', 'تكليف', 'assignment', 'famous person', 'talk', 'تحدث', 'تحضيري', 'ENG 001', 'Unit 1'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: a family profile',
            noExamples: true, // الأمثلة داخل الشرح
            summary: {
                rule: 'الـ profile بارقراف قصير تعرّف فيه بنفسك وبعائلتك في 4 خانات: أنا، والديّ، إخواني وأخواتي، دراستي وهواياتي. كل جملة فيها فاعل وفعل وحرف كبير ونقطة. اسم الشخص مرة وبعدها he أو she، و his / her قبل الاسم.',
                formulas: [
                    [['1 Me', 'n', 'name, age, city'], ['2 Parents', 's', 'jobs'], ['3 Brothers + sisters', 'v', 'names, ages'], ['4 Studies', 'adj', 'hobbies']],
                ],
                examples: [
                    { parts: [['My name', 's'], ['’s', 'v', 'is'], ['Sami'], ['and'], ['I', 's'], ['’m', 'v', 'am'], ['18 years old'], ['.', 'p']], ar: 'الخانة 1: اسمك وعمرك. والاختصار طبيعي هنا.' },
                    { parts: [['I', 's'], ['’m', 'v', 'am'], ['from Abha'], ['.', 'p']], ar: 'ومن وين.' },
                    { parts: [['My father', 's'], ['is', 'v'], ['a doctor', 'n', 'job'], ['.'], ['He', 's', '= my father'], ['works', 'v'], ['at a hospital'], ['.', 'p']], ar: 'الخانة 2: اسمه مرة، وبعدها He.' },
                    { parts: [['I', 's'], ['have', 'v'], ['two brothers', 'n', 'plural'], ['.'], ['Their', 'adj', 'possessive'], ['names', 'n'], ['are', 'v'], ['Ali and Majed'], ['.', 'p']], ar: 'الخانة 3: two = جمع (brothers).' },
                    { parts: [['My hobbies', 's', 'plural'], ['are', 'v'], ['swimming and drawing'], ['.', 'p']], ar: 'الخانة 4: hobbies جمع فنقول are.' },
                    { parts: [['He’s', 'v', 'He + is'], ['a famous Saudi footballer', 'n', 'job'], ['.'], ['He’s', 'v'], ['from Riyadh', 'n', 'place'], ['.', 'p']], ar: 'التحدث عن مشهور: وظيفته ومن وين.' },
                ],
                mistakes: [
                    { wrong: 'my name is Saleh.', right: 'My name is Saleh.', why: 'أول الجملة بحرف كبير.' },
                    { wrong: 'My mother a nurse.', right: 'My mother is a nurse.', why: 'ناقص is.' },
                    { wrong: 'He name is Majed.', right: 'His name is Majed.', why: 'بعده اسم، فملكية: His.' },
                    { wrong: 'My hobbies is football.', right: 'My hobbies are football.', why: 'hobbies جمع، فنقول are.' },
                ],
                tables: [
                    {
                        title: 'الحديث عن شخص مشهور',
                        head: ['الجزء', 'الجملة'],
                        rows: [
                            ['1 المقدمة', 'I’m going to tell you about …'],
                            ['2 الوظيفة والمكان', 'He’s a famous … He’s from …'],
                            ['3 ليش مشهور', 'Many people know him because …'],
                        ],
                    },
                ],
            },
            warmup: {
                q: 'هذا الـ profile حق {nameAr}. أي جملة تناسب البداية؟',
                choices: ['Football is a popular sport.', "My name's {name} and I'm 19 years old.", 'Yanbu has a big port.'],
                answer: 1,
                why: 'الـ profile يبدأ بتعريف نفسك، وبعدها عائلتك.',
            },
            blocks: [
                { type: 'names' },
                { type: 'text', text: 'الـ profile بارقراف تعرّف فيه بنفسك وبعائلتك، ومطلوب في تكليف 2. عرفت عائلة {nameAr} في دروس الوحدة، والحين نشوف الـ profile كامل، وبعدها نعبي البطاقة خانة خانة، وأنت تعبي بطاقتك معها.' },
                { type: 'map', rows: PROFILE_CARD, caption: 'بطاقة {nameAr}: 4 خانات، وكل خانة جملتين أو ثلاث.' },

                { type: 'heading', text: 'الـ profile حق {nameAr} كامل' },
                { type: 'example', en: "My name's {name} and I'm 19 years old. I'm from Yanbu. My father, Ahmed, is an engineer. He works at a big company. My mother, Huda, is a teacher. I have one brother and one sister. My brother Saad is 23 and he studies engineering in Jeddah. My sister Reem is 16. She is at school. I study English at the Preparatory Year Institute. My hobbies are football and reading." },

                // ── الخانة 1 ──
                { type: 'heading', text: 'الخانة 1: أنا' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'اسمك، وعمرك، ومن وين. والاختصار طبيعي هنا: My name’s و I’m.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['My name', 's'], ["'s", 'v', 'is'], ['{name}'], ['and'], ['I', 's'], ["'m", 'v', 'am'], ['19 years old'], ['.', 'p']] },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['I 19 years old.', "I'm 19 years old.", 'I have 19 years.'], a: "I'm 19 years old.", why: 'العمر بـ am، مو have.' }] },
                {
                    type: 'fix',
                    label: 'ناقص am',
                    kind: 'v',
                    wrong: 'My name’s Sami and I 18 years old.',
                    mark: 'I 18',
                    options: ['My name’s Sami and I have 18 years old.', 'My name’s Sami and I’m 18 years old.', 'My name’s Sami and I 18 am years old.'],
                    answer: 'My name’s Sami and I’m 18 years old.',
                    parts: [['My name’s Sami and'], ['I', 's'], ['’m', 'v', 'am'], ['18 years old'], ['.', 'p']],
                    why: 'العربي يقول "عمري 18" بدون فعل، أما الإنجليزي فلازم am بعد I.',
                },
                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'عبّ خانتك الأولى: اسمك وعمرك ومن وين.', reference: "My name's Sami and I'm 18 years old. I'm from Abha.", placeholder: "My name's … and I'm …" },

                // ── الخانة 2 ──
                { type: 'heading', text: 'الخانة 2: والديّ' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'وش يشتغلون ووين. اسمه مرة، وبعدها he أو she.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['My father', 's'], ['is', 'v'], ['an engineer', 'n', 'Job'], ['.'], ['He', 's', '= my father'], ['works', 'v'], ['at a big company'], ['.', 'p']] },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'My mother is a teacher. ___ works at a girls’ school.', choices: ['Her', 'He', 'She'], a: 'She', why: 'بعده فعل، والأم she.' }] },
                {
                    type: 'fix',
                    label: 'ملكية مكان ضمير',
                    kind: 's',
                    wrong: 'My mother is a nurse. Her works at a hospital.',
                    mark: 'Her works',
                    options: ['My mother is a nurse. She works at a hospital.', 'My mother is a nurse. Hers works at a hospital.', 'My mother is a nurse. Her work at a hospital.'],
                    answer: 'My mother is a nurse. She works at a hospital.',
                    parts: [['My mother', 'n'], ['is a nurse.'], ['She', 's', '= my mother'], ['works', 'v'], ['at a hospital'], ['.', 'p']],
                    why: 'بعده فعل (works)، فنحط ضمير She. Her تجي قبل اسم.',
                },
                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'عبّ خانة والديك: جملتين أو ثلاث.', reference: 'My father is a doctor. He works at a hospital. My mother is a nurse.', placeholder: 'My father is … He works …' },

                // ── الخانة 3 ──
                { type: 'heading', text: 'الخانة 3: إخواني وأخواتي' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'كم واحد، وأسماءهم وأعمارهم، ووش يسوون.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['I', 's'], ['have', 'v'], ['one brother and one sister', 'n'], ['.'], ['His', 'adj', 'Possessive'], ['name', 'n'], ['is', 'v'], ['Saad'], ['.', 'p']] },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'I have two ___.', choices: ['sister', 'sisters', 'sisteres'], a: 'sisters', why: 'two = جمع.' }] },
                {
                    type: 'fix',
                    label: 'جمع ناقص',
                    kind: 'x',
                    wrong: 'I have two brother.',
                    mark: 'two brother',
                    options: ['I have two brotheres.', 'I have two a brother.', 'I have two brothers.'],
                    answer: 'I have two brothers.',
                    parts: [['I', 's'], ['have', 'v'], ['two', 'x', 'clue'], ['brothers', 'n', 'plural'], ['.', 'p']],
                    why: 'بعد two نحط الجمع: brothers (+ s).',
                },
                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'عبّ خانة إخوانك وأخواتك.', reference: 'I have two brothers. Their names are Ali and Majed.', placeholder: 'I have … His name is …' },

                // ── الخانة 4 ──
                { type: 'heading', text: 'الخانة 4: دراستي وهواياتي' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'وش تدرس، وهواياتك. وانتبه لـ be: hobby مفرد (is)، و hobbies جمع (are).' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [['My hobbies', 's', 'Plural'], ['are', 'v'], ['football and reading'], ['.', 'p']], ar: 'hobbies جمع، فنقول are.' },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'My favourite hobby ___ swimming.', choices: ['are', 'am', 'is'], a: 'is', why: 'hobby مفرد.' }] },
                {
                    type: 'fix',
                    label: 'be غلط',
                    kind: 'v',
                    wrong: 'My hobbies is football.',
                    mark: 'is',
                    options: ['My hobbies are football.', 'My hobbies am football.', 'My hobbies be football.'],
                    answer: 'My hobbies are football.',
                    parts: [['My hobbies', 's', 'Plural'], ['are', 'v'], ['football'], ['.', 'p']],
                    why: 'hobbies جمع (they)، فنقول are.',
                },
                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'عبّ خانة دراستك وهواياتك.', reference: 'I study English at the institute. My hobbies are swimming and drawing.', placeholder: 'I study … My hobbies are …' },

                // ── اجمع البطاقة ──
                { type: 'heading', text: 'اجمع البطاقة' },
                { type: 'note', text: 'قبل ما ترسل: كل جملة فيها فاعل وفعل، وحرف كبير ونقطة، و am / is / are صحيحة، و his / her قبل الاسم.' },
                { type: 'try', task: 'اجمع خاناتك الأربع: اكتب الـ profile كامل في 6 إلى 8 جمل.', reference: "My name's Sami and I'm 18 years old. I'm from Abha. My father is a doctor. He works at a hospital. My mother is a nurse. I have two brothers. Their names are Ali and Majed. I study English at the institute. My hobbies are swimming and drawing.", placeholder: "My name's …" },

                // ── التحدث ──
                { type: 'heading', text: 'التحدث: عرّف بشخص مشهور' },
                { type: 'label', icon: '📘', text: 'الشرح' },
                { type: 'text', text: 'نفس فكرة البطاقة، بس عن شخص مشهور: مين، ثم وظيفته ومن وين، ثم ليش مشهور.' },
                { type: 'label', icon: '👀', text: 'مثال' },
                { type: 'breakdown', parts: [["I'm going to tell you about", 'x', 'Introduction'], ['Salem Al-Dawsari'], ['.', 'p']] },
                { type: 'breakdown', parts: [["He's", 'v', 'He + is'], ['a famous Saudi footballer', 'n', 'Job'], ['.'], ["He's", 'v'], ['from Riyadh', 'n', 'Place'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Many people know him because of', 'x', 'Why famous?'], ['his goal against Argentina at the 2022 World Cup'], ['.', 'p']] },
                { type: 'label', icon: '❓', text: 'سؤال' },
                { type: 'check', items: [{ q: 'Which sentence tells us WHERE a famous person is from?', choices: ['He’s a famous singer.', 'He’s from Jeddah.', 'Many people love his songs.'], a: 'He’s from Jeddah.', why: 'الجملة الثانية عن المكان، والأولى عن الوظيفة.' }] },
                { type: 'label', icon: '✍️', text: 'جرب بنفسك' },
                { type: 'try', task: 'اكتب حديث قصير (3 إلى 4 جمل) عن شخص مشهور من بلدك.', reference: "I'm going to tell you about Majed Abdullah. He's a famous Saudi footballer. He's from Jeddah. Many people know him because he scored many goals for Saudi Arabia.", placeholder: "I'm going to tell you about …" },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Check the profile',
                    instructions: 'هذي جمل من profile طالب. اختر الصحيح.',
                    items: [
                        { q: 'My father ___ a pilot.', choices: ['are', 'is', 'am'], a: 'is', why: 'father = he، فنقول is.' },
                        { q: 'I have one brother. ___ name is Abdullah.', choices: ['He', 'Her', 'His'], a: 'His', why: 'بعده اسم.' },
                        { q: 'My grandparents live in Abha. ___ house is big.', choices: ['Their', 'They', 'There'], a: 'Their', why: 'بعده اسم (house)، والبيت حق الأجداد.' },
                        { q: 'I live in ___.', choices: ['yanbu', 'Yanbu', 'YANBU'], a: 'Yanbu', why: 'اسم المدينة بحرف كبير أوله بس.' },
                        { q: 'My hobbies ___ swimming and reading.', choices: ['is', 'am', 'are'], a: 'are', why: 'hobbies جمع.' },
                        { q: 'My uncle is ___ engineer.', choices: ['an', 'a', 'the'], a: 'an', why: 'engineer تبدأ بصوت علة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Choose the correct sentence',
                    instructions: 'كل سؤال فيه ثلاث جمل من profile طالب، وواحدة بس صحيحة.',
                    items: [
                        { q: 'Saleh introduces himself:', choices: ['my name is Saleh and i am 18.', "My name's Saleh and I'm 18 years old.", 'My name Saleh and I 18 years old.'], a: "My name's Saleh and I'm 18 years old.", why: 'حرف كبير في My و I، ومعها is و am.' },
                        { q: 'Saleh’s father:', choices: ['My father is a pilot. He works in Jeddah.', 'My father is a pilot. His works in Jeddah.', 'My father pilot. He works in Jeddah.'], a: 'My father is a pilot. He works in Jeddah.', why: 'بعده فعل (works)، فنحط ضمير He.' },
                        { q: 'Saleh’s sisters:', choices: ['I have three sister.', 'I has three sisters.', 'I have three sisters.'], a: 'I have three sisters.', why: 'three = جمع (sisters)، و I مع have.' },
                        { q: 'Saleh’s hobbies:', choices: ['My hobbies is swimming and drawing.', 'My hobbies are swimming and drawing.', 'My hobbies am swimming and drawing.'], a: 'My hobbies are swimming and drawing.', why: 'hobbies جمع، فنقول are.' },
                        { q: 'Saleh’s sister:', choices: ['I have one sister. Her name is Noura.', 'I have one sister. She name is Noura.', 'I have one sister. Hers name is Noura.'], a: 'I have one sister. Her name is Noura.', why: 'بعده اسم (name)، فملكية: Her.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Speak about a famous person',
                    instructions: 'اختر الجملة الصحيحة للتحدث عن شخص مشهور.',
                    items: [
                        { q: 'Which sentence is a good INTRODUCTION?', choices: ['He’s from Argentina.', "I'm going to tell you about Lionel Messi.", 'He scored many goals.'], a: "I'm going to tell you about Lionel Messi.", why: 'المقدمة تعلن عن مين بنتكلم.' },
                        { q: 'Which sentence tells us his JOB?', choices: ['He’s a famous footballer.', 'He’s from Argentina.', 'Many people love him.'], a: 'He’s a famous footballer.', why: 'footballer هي وظيفته.' },
                        { q: 'Which sentence tells us WHY he is famous?', choices: ['He is from Rosario.', 'He plays for Inter Miami.', 'He is famous because he scored many goals.'], a: 'He is famous because he scored many goals.', why: 'because يجاوب ليش.' },
                        { q: 'Pick the right sentence about nationality.', choices: ['He’s Saudi Arabia.', 'He’s Saudi.', 'He Saudi.'], a: 'He’s Saudi.', why: 'الجنسية Saudi، ومعها He’s.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: "Exercise D: Fix Saleh's profile",
                    instructions: 'كل جملة فيها خطأ. اكتبها صحيحة. (كتابة اختيارية)',
                    items: [
                        { q: 'my name is Saleh.', a: 'My name is Saleh.' },
                        { q: 'My mother a nurse.', a: 'My mother is a nurse.' },
                        { q: 'He name is Majed.', a: 'His name is Majed.' },
                    ],
                },
            ],
        },
    ],
};

/** عناوين الوحدة 1 الجديدة بترتيب الخطة (درس 1.4 داخل عنوان Sentences في lessons.ts) */
export const UNIT1_TOPICS: Topic[] = [pronouns, verbBe, vocabulary, skills, familyProfile];
