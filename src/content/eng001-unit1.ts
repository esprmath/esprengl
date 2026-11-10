// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 1: People
// الدروس 1.2 إلى 1.6 ومهمة الوحدة. درس 1.1 (Nouns and verbs) في lessons.ts.
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: طريقة عرض تناسب الدرس، أسئلة سريعة وسط الشرح، أمثلة لكل شكل وبعدها كتابة، وتمارين متدرجة ما تتكرر.

import type { CourseLesson, Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 1 · People';

/** خيارات تمرين "وش الخطأ؟" في درس الجملة البسيطة */
const SENTENCE_CHECK = ['Correct', 'No verb', 'No subject', 'Word order', 'Capital letter'];

// ─────────────── 1.2 Subject pronouns + possessive adjectives (RW ص 27 و31، LS ص 22) ───────────────
// نمط أول أربع دروس: كل شكل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
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
            warmup: {
                q: 'وش الكلمة الصحيحة في الفراغ؟',
                sentence: 'Ali is my friend. ___ father is a doctor.',
                choices: ['He', 'His'],
                answer: 1,
                why: 'بعد الفراغ اسم (father)، فنحط صفة ملكية: his. ولو بعده فعل مثل is نقول He.',
            },
            blocks: [
                { type: 'text', text: 'الدرس عن نوعين من الكلمات الصغيرة. الضمير (pronoun) كلمة نحطها مكان الاسم عشان ما نكرره: بدل ما نقول Ali مرتين، نقول He. وصفة الملكية (possessive) تقول الشي حق مين: his car يعني سيارته.' },
                {
                    type: 'table',
                    head: ['Pronoun', 'Possessive'],
                    rows: [['I (أنا)', 'my (حقي)'], ['you (أنت)', 'your (حقك)'], ['he (هو)', 'his (حقه)'], ['she (هي)', 'her (حقها)'], ['it (لغير العاقل)', 'its (حقه أو حقها)'], ['we (نحن)', 'our (حقنا)'], ['they (هم)', 'their (حقهم)']],
                },

                { type: 'heading', text: 'الشكل 1: الضمير قبل الفعل' },
                { type: 'text', view: 'both', text: 'الضمير يجي مكان الاسم، وبعده فعل.' },
                { type: 'formula', parts: [['Subject pronoun', 's'], ['Verb', 'v'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [['My sister', 's', 'Noun'], ['is a nurse.'], ['She', 's', 'Pronoun = my sister'], ['works', 'v'], ['in a hospital'], ['.', 'p']], ar: 'أول مرة نقول my sister، والمرة الثانية She بدالها.' },
                { type: 'breakdown', parts: [['They', 's', 'Subject pronoun'], ['play', 'v'], ['football on Fridays'], ['.', 'p']], ar: 'They مكان أكثر من شخص.' },
                { type: 'breakdown', parts: [['It', 's', 'Subject pronoun'], ['is', 'v'], ['very hot in summer'], ['.', 'p']], ar: 'It لمكان أو شي، مثل Riyadh.' },
                { type: 'try', task: 'اكتب جملتين عن واحد من عائلتك: الأولى فيها اسمه، والثانية فيها ضمير مكانه.', placeholder: 'My uncle is a pilot. He works for Saudia.' },

                { type: 'heading', text: 'الشكل 2: صفة الملكية قبل الاسم' },
                { type: 'text', view: 'both', text: 'صفة الملكية تقول الشي حق مين، وبعدها اسم.' },
                { type: 'formula', parts: [['Possessive', 'adj', 'Possessive adjective'], ['Noun', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['My', 'adj', 'Possessive'], ['father', 'n'], ['is', 'v'], ['an engineer'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Ali', 's'], ['loves', 'v'], ['his', 'adj', 'Possessive'], ['car', 'n'], ['.', 'p']], ar: 'السيارة حق علي (he)، فنقول his.' },
                { type: 'breakdown', parts: [['Noura', 's'], ['visits', 'v'], ['her', 'adj', 'Possessive'], ['grandmother', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Yanbu', 's'], ['is', 'v'], ['famous for'], ['its', 'adj', 'Possessive'], ['beaches', 'n'], ['.', 'p']], ar: 'its بدون فاصلة علوية. it’s = it is.' },
                { type: 'try', task: 'اكتب جملتين: وحدة فيها his أو her، ووحدة فيها their.', placeholder: 'My brother loves his job. My grandparents like their garden.' },

                { type: 'heading', text: 'الشكل 3: الاثنين في جملتين ورا بعض' },
                { type: 'text', view: 'both', text: 'الضمير قبل فعل، والملكية قبل اسم.' },
                { type: 'breakdown', view: 'both', parts: [['She', 's', 'Subject pronoun'], ['is', 'v'], ['my cousin'], ['.', 'p'], ['Her', 'adj', 'Possessive'], ['mother', 'n'], ['is', 'v'], ['my aunt'], ['.', 'p']] },
                { type: 'breakdown', parts: [['They', 's', 'Subject pronoun'], ['live', 'v'], ['in Jeddah'], ['.', 'p'], ['Their', 'adj', 'Possessive'], ['house', 'n'], ['is', 'v'], ['near the sea'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Sara', 's'], ['lives', 'v'], ['with'], ['her', 'adj', 'Possessive'], ['brother', 'n'], ['.', 'p']], ar: 'her لأن الأخ حق سارة، حتى لو هو رجل.' },
                { type: 'try', task: 'عرّف بصديقك في جملتين: وحدة فيها he، ووحدة فيها his.', placeholder: 'Nawaf is my friend. He is from Taif. His father is a teacher.' },

                { type: 'note', text: 'غلط شائع: He name is Ali ✗ (الصح His name)، و Her is a doctor ✗ (الصح She is). وللملكية نكتب its، مو it’s.' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Pronoun or possessive?',
                    instructions: 'شوف الكلمة اللي بعد الفراغ: فعل ولا اسم؟ وبعدين اضغط تحقق.',
                    items: [
                        { q: 'Omar is my brother. ___ car is new.', choices: ['He', 'His'], a: 'His', why: 'بعدها اسم (car).' },
                        { q: 'This is Noura. ___ is from Madinah.', choices: ['She', 'Her'], a: 'She', why: 'بعدها فعل (is).' },
                        { q: 'My friends study at KAU. ___ university is in Jeddah.', choices: ['They', 'Their'], a: 'Their' },
                        { q: 'We have a new teacher. ___ teacher is from Egypt.', choices: ['We', 'Our'], a: 'Our' },
                        { q: 'I love Yanbu. ___ beaches are amazing.', choices: ["It's", 'Its'], a: 'Its' },
                        { q: 'Excuse me, what is ___ name?', choices: ['you', 'your'], a: 'your' },
                        { q: 'Mohammed has a sister. ___ name is Lama.', choices: ['His', 'Her'], a: 'Her', why: 'الاسم اسم الأخت.' },
                        { q: 'My parents work hard. ___ are teachers.', choices: ['They', 'Their'], a: 'They' },
                        { q: 'My cat is small. ___ eats a lot!', choices: ['It', 'Its'], a: 'It' },
                        { q: 'I live with ___ grandparents.', choices: ['I', 'my'], a: 'my' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: '___ has a car. ___ car is blue.', choices: ['My / her', 'His / he', 'She / it', 'He / his'], a: 'He / his' },
                        { q: 'We are in class 3B. This is ___ classroom.', choices: ['their', 'your', 'our', 'his'], a: 'our' },
                        { q: 'They have a garden. ___ garden is big.', choices: ['My', 'Our', 'His', 'Their'], a: 'Their' },
                        { q: 'Faisal takes the bus to work. The bus is cheap. Which pronoun can replace "the bus"?', choices: ['It', 'He', 'She', 'They'], a: 'It' },
                        { q: 'Look at that cat! ___ tail is very long.', choices: ["It's", 'Its', 'Their', 'His'], a: 'Its' },
                    ],
                },
                {
                    type: 'exercise',
                    title: "Exercise C: Don't repeat the noun",
                    instructions: 'اكتب الجملتين مرة ثانية، وحط ضمير أو صفة ملكية مكان الاسم المكرر.',
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
// نمط أول أربع دروس: كل شكل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
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
            warmup: {
                q: 'وش الصحيح في الفراغ؟',
                sentence: 'My sisters ___ at school.',
                choices: ['is', 'are'],
                answer: 1,
                why: 'sisters جمع (they)، والجمع ياخذ are.',
            },
            blocks: [
                { type: 'text', text: 'في العربي نقول "أبوي دكتور" بدون فعل. في الإنجليزي لازم فعل بينهم اسمه be، وله ثلاث أشكال: am و is و are.' },
                { type: 'rule', text: 'I → am  |  he / she / it → is  |  you / we / they → are' },

                { type: 'heading', text: 'الشكل 1: المثبت' },
                { type: 'text', view: 'both', text: 'الفاعل، بعده am أو is أو are، بعده الباقي.' },
                { type: 'formula', parts: [['Subject', 's'], ['am / is / are', 'v', 'be'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['am', 'v', 'be'], ['from Yanbu'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My father', 's'], ['is', 'v', 'be'], ['a pilot'], ['.', 'p']], ar: 'My father = he، فياخذ is.' },
                { type: 'breakdown', parts: [['My cousins', 's'], ['are', 'v', 'be'], ['at university'], ['.', 'p']], ar: 'جمع، فياخذ are.' },
                { type: 'breakdown', parts: [["It's", 'v', 'It + is'], ['a beautiful day'], ['.', 'p']], ar: 'الاختصار: I’m، he’s، she’s، it’s، we’re، they’re.' },
                { type: 'try', task: 'عرّف بنفسك في ثلاث جمل: اسمك، ومن وين، وكم عمرك.', placeholder: "My name is Fahad. I'm from Yanbu. I'm 18 years old." },

                { type: 'heading', text: 'الشكل 2: النفي' },
                { type: 'text', view: 'both', text: 'not تجي بعد be مباشرة.' },
                { type: 'formula', parts: [['Subject', 's'], ['am / is / are', 'v', 'be'], ['not', 'x', 'not'], ['…']] },
                { type: 'breakdown', view: 'both', parts: [['She', 's'], ['is', 'v', 'be'], ['not', 'x', 'not'], ['a teacher'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ["aren't", 'v', 'are + not'], ['late'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ["'m not", 'v', 'am + not'], ['hungry'], ['.', 'p']], ar: 'ما فيه amn’t.' },
                { type: 'try', task: 'اكتب جملتين منفيتين عن نفسك.', placeholder: "I'm not from Riyadh. I'm not a teacher." },

                { type: 'heading', text: 'الشكل 3: السؤال والجواب القصير' },
                { type: 'text', view: 'both', text: 'be تطلع قبل الفاعل. والجواب القصير بنفس be.' },
                { type: 'formula', parts: [['Am / Is / Are', 'v', 'be'], ['Subject', 's'], ['…?']] },
                { type: 'breakdown', view: 'both', parts: [['Are', 'v', 'be'], ['you', 's'], ['a student'], ['?', 'p']], ar: "Yes, I am. / No, I'm not." },
                { type: 'breakdown', parts: [['Is', 'v', 'be'], ['your sister', 's'], ['a doctor'], ['?', 'p']], ar: "Yes, she is. / No, she isn't." },
                { type: 'breakdown', parts: [['Where', 'x', 'Question word'], ['are', 'v', 'be'], ['your parents', 's'], ['from'], ['?', 'p']], ar: 'They’re from Taif.' },
                { type: 'try', task: 'اكتب سؤال لزميلك بـ Is أو Are، وجاوبه بجواب قصير.', placeholder: "Are you from Jeddah? No, I'm not." },

                { type: 'note', text: 'غلط شائع: I not am ✗، و My father a doctor ✗ (ناقص is)، و Yes, she’s ✗ (الصح Yes, she is).' },

                {
                    type: 'exercise',
                    title: 'Exercise A: am, is, or are?',
                    instructions: 'اختر الشكل الصحيح، وبعدين اضغط تحقق.',
                    choices: ['am', 'is', 'are'],
                    items: [
                        { q: 'I ___ a new student.', a: 'am' },
                        { q: 'My brother ___ 22 years old.', a: 'is' },
                        { q: 'We ___ in the same class.', a: 'are' },
                        { q: 'Riyadh ___ the capital of Saudi Arabia.', a: 'is' },
                        { q: 'My parents ___ from Madinah.', a: 'are' },
                        { q: 'You ___ very kind.', a: 'are' },
                        { q: 'Ahmed and Saad ___ engineers.', a: 'are', why: 'شخصين = they.' },
                        { q: 'I ___ not from Jeddah.', a: 'am' },
                        { q: 'The book ___ on the table.', a: 'is' },
                        { q: 'It ___ hot today.', a: 'is' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Questions and short answers',
                    instructions: 'اختر الجواب الصحيح.',
                    items: [
                        { q: '___ you from Jeddah?', choices: ['Is', 'Are', 'Am'], a: 'Are' },
                        { q: 'Is Ali your brother? Yes, ___', choices: ['he is.', "he's.", 'he does.'], a: 'he is.' },
                        { q: 'Are they at school? No, ___', choices: ["they aren't.", "they don't.", "they isn't."], a: "they aren't." },
                        { q: 'Is it cold today? Yes, ___', choices: ['it is.', "it's.", 'it does.'], a: 'it is.' },
                        { q: 'Where ___ your parents from?', choices: ['is', 'are', 'do'], a: 'are' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Correct the text',
                    instructions: 'النص فيه 5 أخطاء في be. اكتبه صحيح.',
                    items: [
                        {
                            q: 'My name are Khalid. I from Yanbu. My sisters is at school. My brother are a teacher in Riyadh. We is a big family.',
                            a: 'My name is Khalid. I am from Yanbu. My sisters are at school. My brother is a teacher in Riyadh. We are a big family.',
                        },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 1.4 Writing simple sentences (RW ص 32) ───────────────
// نفس نمط درس What is a sentence? في ENGL 101: الشروط، ثم جمل صحيحة ملونة، ثم كل خطأ بجملة فيها الجزء الناقص بالأحمر.
// يندرج تحت عنوان Sentences الموجود (ENGL 101)، عشان البحث عن sentence يطلع الدرسين
export const SENTENCES_ENG001: CourseLesson = {
    course: COURSE,
    unit: UNIT,
    title: 'Writing simple sentences',
    warmup: {
        q: 'هل هذي جملة صحيحة؟',
        sentence: 'My father a doctor.',
        choices: ['إيه، صحيحة', 'لا، ناقصة'],
        answer: 1,
        why: 'ناقصها فعل: My father is a doctor. تحت الشروط الأربعة للجملة.',
    },
    blocks: [
        { type: 'text', text: 'الجملة البسيطة (simple sentence) هي أصغر جملة كاملة، وكل كتابتك في التحضيري مبنية عليها. لها 4 شروط، وإذا نقص واحد صارت غلط:' },
        { type: 'list', lang: 'ar', ordered: true, items: ['فيها فاعل (subject): اللي نتكلم عنه أو اللي يسوي الشي، مثل My mother.', 'فيها فعل (verb): وش يسوي أو وش هو، مثل works أو is.', 'تبدأ بحرف كبير (capital letter).', 'تنتهي بنقطة (full stop).'] },
        { type: 'formula', parts: [['Capital letter + Subject', 's', 'Subject'], ['Verb', 'v'], ['the rest'], ['.', 'p']] },

        { type: 'heading', text: 'الشكل 1: جمل صحيحة' },
        { type: 'text', view: 'both', text: 'هذي جملة فيها الشروط الأربعة: الفاعل بالأزرق، والفعل بالأخضر، والنقطة بالبرتقالي.' },
        { type: 'breakdown', view: 'both', parts: [['My mother', 's'], ['is', 'v'], ['a teacher'], ['.', 'p']] },
        { type: 'breakdown', parts: [['I', 's'], ['live', 'v'], ['in Yanbu'], ['.', 'p']], ar: 'I و Yanbu بحرف كبير.' },
        { type: 'breakdown', parts: [['My cousins', 's'], ['speak', 'v'], ['Arabic and English'], ['.', 'p']], ar: 'اللغات بحرف كبير.' },
        { type: 'breakdown', parts: [['He', 's'], ['watches', 'v'], ['TV'], ['.', 'p']] },
        { type: 'try', task: 'اكتب جملة بسيطة عن مدينتك.', placeholder: 'Yanbu is a city in Saudi Arabia.' },

        { type: 'heading', text: 'الشكل 2: ناقصها فعل' },
        { type: 'text', view: 'both', text: 'أكثر خطأ عند الطالب العربي، لأن العربي يقول "أخوي طالب" بدون فعل.' },
        { type: 'breakdown', view: 'both', parts: [['My uncle', 's'], ['(?)', 'x', 'No verb ✗'], ['a pilot'], ['.', 'p']], ar: 'الصحيح: My uncle is a pilot.' },
        { type: 'breakdown', parts: [['The students', 's'], ['(?)', 'x', 'No verb ✗'], ['in the library'], ['.', 'p']], ar: 'الصحيح: The students are in the library.' },
        { type: 'try', task: 'صحح: My sister a nurse in Jeddah.', reference: 'My sister is a nurse in Jeddah.', placeholder: 'My sister …' },

        { type: 'heading', text: 'الشكل 3: ناقصها فاعل' },
        { type: 'text', view: 'both', text: 'في العربي الفاعل يختفي داخل الفعل (يشتغل)، بس في الإنجليزي لازم تكتبه.' },
        { type: 'breakdown', view: 'both', parts: [['(?)', 'x', 'No subject ✗'], ['Works', 'v'], ['in a bank'], ['.', 'p']], ar: 'الصحيح: He works in a bank.' },
        { type: 'breakdown', parts: [['(?)', 'x', 'No subject ✗'], ['Is', 'v'], ['very hot today'], ['.', 'p']], ar: 'الصحيح: It is very hot today.' },
        { type: 'try', task: 'صحح: Lives in Abha with her family.', reference: 'She lives in Abha with her family.', placeholder: 'She …' },

        { type: 'heading', text: 'الشكل 4: الترتيب غلط' },
        { type: 'text', view: 'both', text: 'الفاعل أول، بعده الفعل، بعده الباقي.' },
        { type: 'formula', parts: [['Subject', 's'], ['Verb', 'v'], ['the rest']] },
        { type: 'example', view: 'both', en: '✗ My brother football plays.\n✓ My brother plays football.' },
        { type: 'example', en: '✗ Ahmed English speaks.\n✓ Ahmed speaks English.' },
        { type: 'try', task: 'رتب: coffee / my father / every morning / drinks', reference: 'My father drinks coffee every morning.', placeholder: 'My father …' },

        { type: 'note', text: 'غلط شائع: my name is fahad ✗. الصح My name is Fahad. (حرف كبير أول الجملة وللأسماء، ونقطة في الآخر.)' },

        {
            type: 'exercise',
            title: "Exercise A: What's wrong?",
            instructions: 'إذا الجملة صحيحة اختر Correct، وإذا فيها خطأ اختر نوعه.',
            items: [
                { q: 'My grandfather lives in Taif.', choices: SENTENCE_CHECK, a: 'Correct' },
                { q: 'My sister a student at KAU.', choices: SENTENCE_CHECK, a: 'No verb' },
                { q: 'Works in a bank.', choices: SENTENCE_CHECK, a: 'No subject' },
                { q: 'My brother coffee drinks every morning.', choices: SENTENCE_CHECK, a: 'Word order' },
                { q: 'my father is from abha.', choices: SENTENCE_CHECK, a: 'Capital letter' },
                { q: 'They are from Egypt.', choices: SENTENCE_CHECK, a: 'Correct' },
                { q: 'Is my best friend.', choices: SENTENCE_CHECK, a: 'No subject' },
                { q: 'The students in the library.', choices: SENTENCE_CHECK, a: 'No verb' },
                { q: 'Saad English studies.', choices: SENTENCE_CHECK, a: 'Word order' },
                { q: 'i live in riyadh.', choices: SENTENCE_CHECK, a: 'Capital letter' },
            ],
        },
        {
            type: 'exercise',
            title: 'Exercise B: Put the words in order',
            instructions: 'رتب الكلمات، وحط الحرف الكبير والنقطة.',
            items: [
                { q: 'is / my brother / a pilot', a: 'My brother is a pilot.' },
                { q: 'live / in Jeddah / my grandparents', a: 'My grandparents live in Jeddah.' },
                { q: 'and I / are / students / my cousin', a: 'My cousin and I are students.' },
                { q: 'speaks / she / three languages', a: 'She speaks three languages.' },
                { q: 'football / watch / on TV / we', a: 'We watch football on TV.' },
            ],
        },
        {
            type: 'exercise',
            title: 'Exercise C: Correct the paragraph',
            instructions: 'في البارقراف 10 أخطاء: أفعال ناقصة وحروف كبيرة. اكتبه صحيح.',
            items: [
                {
                    q: 'my name fahad. I from yanbu. I 19 years old. My father a teacher and my mother a nurse. i have two sisters. They at school.',
                    a: 'My name is Fahad. I am from Yanbu. I am 19 years old. My father is a teacher and my mother is a nurse. I have two sisters. They are at school.',
                },
            ],
        },
    ],
};

// ─────────────── 1.5 Vocabulary: family، countries & nationalities، jobs (RW ص 24، LS ص 30 و31) ───────────────
// نمط أول أربع دروس: كل مجموعة كلمات قسم: سطر ← معادلة بناء الكلمة ← جمل ملونة ← كتابة.
const vocabulary: Topic = {
    slug: 'family-countries-jobs',
    title: 'Family, countries and jobs',
    titleAr: 'مفردات: العائلة والدول والوظائف',
    keywords: ['vocabulary', 'family', 'countries', 'nationalities', 'jobs', 'مفردات', 'كلمات', 'عائلة', 'العائلة', 'دول', 'جنسيات', 'وظائف', 'وظايف', 'uncle', 'cousin', 'journalist', 'تحضيري', 'ENG 001', 'Unit 1'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Family, countries and jobs',
            warmup: {
                q: 'وش الجنسية من Egypt؟',
                choices: ['Egyptish', 'Egyptian', 'Egypter'],
                answer: 1,
                why: 'الجنسية تتكون من اسم الدولة + نهاية. تحت النهايات كلها.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مجموعات كلمات تحتاجها عشان تعرّف بنفسك وبعائلتك: العائلة، والجنسيات، والوظائف.' },

                { type: 'heading', text: 'المجموعة 1: العائلة' },
                { type: 'text', view: 'both', text: 'الإنجليزي ما يفرق بين العم والخال: الاثنين uncle، والعمة والخالة aunt.' },
                { type: 'formula', parts: [["My father's / mother's", 'n', 'Whose?'], ['brother', 'n'], ['='], ['my uncle', 'adj', 'Word']] },
                { type: 'breakdown', view: 'both', parts: [["My father's", 'n', 'Whose?'], ['brother', 'n'], ['is'], ['my uncle', 'adj', 'Family word'], ['.', 'p']] },
                { type: 'breakdown', parts: [["My mother's", 'n', 'Whose?'], ['sister', 'n'], ['is'], ['my aunt', 'adj', 'Family word'], ['.', 'p']] },
                { type: 'breakdown', parts: [["My uncle's", 'n', 'Whose?'], ['son', 'n'], ['is'], ['my cousin', 'adj', 'Family word'], ['.', 'p']] },
                { type: 'breakdown', parts: [["My father's", 'n', 'Whose?'], ['father', 'n'], ['is'], ['my grandfather', 'adj', 'Family word'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن أقاربك: عمك أو خالك، وعياله.', placeholder: "My uncle lives in Jeddah. His son is my cousin." },

                { type: 'heading', text: 'المجموعة 2: الدولة والجنسية' },
                { type: 'text', view: 'both', text: 'الجنسية = الدولة + نهاية. وكلها بحرف كبير.' },
                { type: 'formula', parts: [['He is from'], ['Country', 'n'], ['→'], ['He is'], ['Nationality', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['Egypt', 'n', 'Country'], ['+ ian', 'x', 'ending'], ['Egyptian', 'adj', 'Nationality']], ar: 'وبنفس الطريقة: Mexico → Mexican، Korea → Korean.' },
                { type: 'breakdown', parts: [['Japan', 'n', 'Country'], ['+ ese', 'x', 'ending'], ['Japanese', 'adj', 'Nationality']], ar: 'و China → Chinese.' },
                { type: 'breakdown', parts: [['Türkiye', 'n', 'Country'], ['+ ish', 'x', 'ending'], ['Turkish', 'adj', 'Nationality']], ar: 'و the UK → British، و Spain → Spanish.' },
                { type: 'breakdown', parts: [['Oman', 'n', 'Country'], ['+ i', 'x', 'ending'], ['Omani', 'adj', 'Nationality']], ar: 'و Saudi Arabia → Saudi، و the UAE → Emirati، و Kuwait → Kuwaiti.' },
                { type: 'try', task: 'اكتب جملة عن شخص من دولة ثانية: من وين وجنسيته.', placeholder: 'My friend is from Kuwait. He is Kuwaiti.' },

                { type: 'heading', text: 'المجموعة 3: الوظائف' },
                { type: 'text', view: 'both', text: 'كثير من الوظائف كلمة عادية + نهاية.' },
                { type: 'formula', parts: [['Verb / noun', 'v'], ['+ er / or / ist', 'x', 'ending'], ['Job', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['teach', 'v', 'Verb'], ['+ er', 'x', 'ending'], ['teacher', 'n', 'Job']], ar: 'و drive → driver، و manage → manager، و farm → farmer.' },
                { type: 'breakdown', parts: [['act', 'v', 'Verb'], ['+ or', 'x', 'ending'], ['actor', 'n', 'Job']], ar: 'و direct → director، و edit → editor.' },
                { type: 'breakdown', parts: [['journal', 'n', 'Noun'], ['+ ist', 'x', 'ending'], ['journalist', 'n', 'Job']], ar: 'و art → artist، و science → scientist.' },
                { type: 'breakdown', parts: [['My uncle', 's'], ['is', 'v'], ['a'], ['pilot', 'n', 'Job'], ['.', 'p']], ar: 'وظائف ما تتكون من كلمة: doctor، nurse، engineer، pilot، chef. وقبل الوظيفة a أو an.' },
                { type: 'try', task: 'اكتب جملتين: وش يشتغل واحد من عائلتك، ووين.', placeholder: 'My father is an accountant. He works in a bank.' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Family',
                    instructions: 'اختر الكلمة الصحيحة، وبعدين اضغط تحقق.',
                    items: [
                        { q: "My father's brother is my ___.", choices: ['cousin', 'uncle', 'grandfather'], a: 'uncle' },
                        { q: "My mother's mother is my ___.", choices: ['aunt', 'grandmother', 'sister'], a: 'grandmother' },
                        { q: 'My parents have two ___: me and my sister.', choices: ['children', 'sons', 'brothers'], a: 'children' },
                        { q: "My father's sister is my ___.", choices: ['aunt', 'uncle', 'daughter'], a: 'aunt' },
                        { q: 'My mother and father are my ___.', choices: ['parents', 'grandparents', 'cousins'], a: 'parents' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Country → nationality',
                    instructions: 'اختر الجنسية الصحيحة.',
                    items: [
                        { q: 'She is from Egypt. She is ___.', choices: ['Egyptian', 'Egyptese', 'Egyptish'], a: 'Egyptian' },
                        { q: 'They are from the UAE. They are ___.', choices: ['UAEian', 'Emirati', 'Emiratish'], a: 'Emirati' },
                        { q: 'We are from Türkiye. We are ___.', choices: ['Turkian', 'Turkese', 'Turkish'], a: 'Turkish' },
                        { q: 'He is from the UK. He is ___.', choices: ['Britain', 'British', 'Britese'], a: 'British' },
                        { q: 'He is from China. He is ___.', choices: ['Chinish', 'Chinese', 'Chinan'], a: 'Chinese' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Make the job',
                    instructions: 'حوّل الكلمة لوظيفة.',
                    items: [
                        { q: 'teach → ___', choices: ['teachor', 'teacher', 'teachist'], a: 'teacher' },
                        { q: 'journal → ___', choices: ['journaler', 'journalor', 'journalist'], a: 'journalist' },
                        { q: 'drive → ___', choices: ['driver', 'drivor', 'drivist'], a: 'driver' },
                        { q: 'science → ___', choices: ['sciencer', 'scientist', 'scientor'], a: 'scientist' },
                        { q: 'direct → ___', choices: ['directer', 'director', 'directist'], a: 'director' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Exam style',
                    instructions: 'نفس شكل قسم Vocabulary في الكويز.',
                    items: [
                        { q: 'Ali is a ___ working for a newspaper. He writes articles about sport.', choices: ['farmer', 'pilot', 'journalist', 'chef'], a: 'journalist' },
                        { q: 'Huda is a ___. She works in a hospital and helps doctors.', choices: ['nurse', 'manager', 'writer', 'farmer'], a: 'nurse' },
                        { q: 'Mr. Saleh is a ___. He cooks in a big restaurant.', choices: ['chef', 'dancer', 'scientist', 'actor'], a: 'chef' },
                        { q: 'My grandfather is a ___. He grows dates on his farm.', choices: ['farmer', 'pilot', 'artist', 'journalist'], a: 'farmer' },
                        { q: 'Faisal is an ___. He designs roads and bridges.', choices: ['engineer', 'actor', 'artist', 'editor'], a: 'engineer' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 1.6 Skills: previewing، taking notes، syllable stress (RW ص 18، LS ص 19 و26 و32) ───────────────
// نمط أول أربع دروس: كل مهارة قسم: سطر ← شكل ملون (العنوان المفكك، الملاحظات، المقطع المضغوط) ← كتابة.
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
            warmup: {
                q: 'قبل ما تقرأ نص، وش أول شي تسويه؟',
                choices: ['أقرأه كلمة كلمة من أوله', 'أشوف العنوان والصور وأتوقع موضوعه', 'أترجم كل الكلمات الصعبة'],
                answer: 1,
                why: 'هذا اسمه previewing: نظرة سريعة قبل القراءة تخليك تفهم أسرع.',
            },
            blocks: [
                { type: 'text', text: 'ثلاث مهارات تسهّل عليك القراءة والاستماع في الكويز: وحدة قبل ما تقرأ، ووحدة وقت ما تسمع، ووحدة للنطق.' },

                { type: 'heading', text: 'المهارة 1: Previewing، العنوان يقول لك الموضوع' },
                { type: 'text', view: 'both', text: 'قبل ما تقرأ، فكك العنوان: عن مين؟ وعن وش؟ وتوقع الكلمات اللي بتجي.' },
                { type: 'formula', parts: [['Title', 'n', 'Who / what?'], ['→'], ['Topic', 'adj', 'What is it about?'], ['→'], ['Words I expect', 'v', 'Prediction']] },
                { type: 'breakdown', view: 'both', parts: [['Meet Lama:', 'n', 'Who?'], ['A Young Saudi Chef', 'adj', 'Her job']], ar: 'أتوقع كلمات: cook، food، restaurant.' },
                { type: 'breakdown', parts: [['Life on', 'n', 'What?'], ['a Small Island', 'adj', 'Where?']], ar: 'أتوقع كلمات: sea، boat، fish، people.' },
                { type: 'breakdown', parts: [['A Very Tall', 'adj', 'What is special?'], ['Man', 'n', 'Who?']], ar: 'أتوقع كلمات: height، cm، family، clothes.' },
                { type: 'try', task: 'العنوان: "My Grandfather’s Farm". اكتب 3 كلمات تتوقعها في النص.', placeholder: 'dates, animals, trees' },

                { type: 'heading', text: 'المهارة 2: Taking notes، الكلمات المهمة بس' },
                { type: 'text', view: 'both', text: 'لما تسمع، اكتب الأسماء والأرقام والأماكن والوظائف بس، وخلّ الباقي.' },
                { type: 'formula', parts: [['Name', 'n'], ['–', 'p'], ['Number', 'adj'], ['–', 'p'], ['Place / job', 's']] },
                { type: 'breakdown', view: 'both', parts: [['Khalid', 'n', 'Name'], ['–', 'p'], ['19', 'adj', 'Age'], ['–', 'p'], ['Jeddah → Yanbu', 's', 'Places']], ar: 'سمعت: "My name is Khalid and I am 19. I am from Jeddah, but I live in Yanbu now."' },
                { type: 'breakdown', parts: [['father', 'n', 'Who'], [':'], ['engineer', 's', 'Job'], ['+', 'p'], ['mother', 'n', 'Who'], [':'], ['teacher', 's', 'Job']], ar: 'سمعت: "My father is an engineer and my mother is a teacher."' },
                { type: 'breakdown', parts: [['3', 'adj', 'Number'], ['sisters', 'n'], ['+', 'p'], ['1', 'adj', 'Number'], ['brother', 'n']], ar: 'سمعت: "I have three sisters and one brother." (اكتب الرقم مو الكلمة)' },
                { type: 'try', task: 'اكتب ملاحظات (مو جمل): "My cousin Reem is 22. She lives in Riyadh and she works as a nurse."', reference: 'Reem – 22 – Riyadh – nurse', placeholder: 'Reem – …' },

                { type: 'heading', text: 'المهارة 3: Syllable stress، وين القوة في الكلمة؟' },
                { type: 'text', view: 'both', text: 'الكلمة تنقسم مقاطع، وواحد منها ننطقه أقوى. هنا المضغوط بالأحمر.' },
                { type: 'breakdown', view: 'both', parts: [['TEACH', 'x', 'Stress'], ['er']], ar: 'النبرة على أول مقطع، ومثلها: FAM-i-ly، BROTH-er، DOC-tor.' },
                { type: 'breakdown', parts: [['com'], ['PU', 'x', 'Stress'], ['ter']], ar: 'النبرة على ثاني مقطع، ومثلها: ho-TEL، e-GYP-tian.' },
                { type: 'breakdown', parts: [['en'], ['gi'], ['NEER', 'x', 'Stress']], ar: 'النبرة على آخر مقطع، ومثلها: Jap-a-NESE، Chi-NESE.' },
                { type: 'breakdown', parts: [['My'], ['BROTHER', 'x', 'Stress'], ['is a famous'], ['FOOTballer', 'x', 'Stress'], ['.', 'p']], ar: 'وفي الجملة: الكلمات المهمة مضغوطة، و is و a خفيفة.' },
                { type: 'try', task: 'اكتب جملة تعرّف فيها بشخص مشهور، وحط الكلمات المضغوطة بحروف كبيرة.', placeholder: 'SALEM is a FAMOUS SAUDI FOOTballer.' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Where is the stress?',
                    instructions: 'اختر المقطع المضغوط، وبعدين اضغط تحقق.',
                    items: [
                        { q: 'doctor', choices: ['DOC-tor', 'doc-TOR'], a: 'DOC-tor' },
                        { q: 'hotel', choices: ['HO-tel', 'ho-TEL'], a: 'ho-TEL' },
                        { q: 'family', choices: ['FAM-i-ly', 'fam-I-ly', 'fam-i-LY'], a: 'FAM-i-ly' },
                        { q: 'computer', choices: ['COM-pu-ter', 'com-PU-ter', 'com-pu-TER'], a: 'com-PU-ter' },
                        { q: 'engineer', choices: ['EN-gi-neer', 'en-GI-neer', 'en-gi-NEER'], a: 'en-gi-NEER' },
                        { q: 'Chinese', choices: ['CHI-nese', 'chi-NESE'], a: 'chi-NESE' },
                        { q: 'brother', choices: ['BROTH-er', 'broth-ER'], a: 'BROTH-er' },
                        { q: 'Egyptian', choices: ['E-gyp-tian', 'e-GYP-tian', 'e-gyp-TIAN'], a: 'e-GYP-tian' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Good notes',
                    instructions: 'اختر أفضل ملاحظات للي سمعته.',
                    items: [
                        { q: '"My sister Reem is 25. She works as a nurse in Riyadh."', choices: ['Reem – 25 – nurse – Riyadh', 'My sister Reem is 25 and she works as', 'sister, she, works, as'], a: 'Reem – 25 – nurse – Riyadh' },
                        { q: '"Our teacher is from Egypt and he speaks three languages."', choices: ['teacher – Egypt – 3 languages', 'Our teacher is from', 'he speaks'], a: 'teacher – Egypt – 3 languages' },
                        { q: '"Haruki Murakami is a famous writer from Japan."', choices: ['Murakami – writer – Japan', 'is a famous', 'Haruki is a'], a: 'Murakami – writer – Japan' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Preview the title',
                    instructions: 'من العنوان بس، وش تتوقع؟',
                    items: [
                        { q: '"Meet Lama: A Young Saudi Chef". What is the text about?', choices: ['a person', 'a city', 'a restaurant menu'], a: 'a person' },
                        { q: '"Meet Lama: A Young Saudi Chef". Which word will you probably see?', choices: ['cooking', 'flying', 'swimming'], a: 'cooking' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة: family profile + الحديث عن شخص مشهور (RW ص 33 و34، LS ص 33) ───────────────
// نمط أول أربع دروس: الـ profile جزء جزء، كل جزء: سطر ← جمل ملونة ← كتابة.
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
            warmup: {
                q: 'أي جملة تناسب أول الـ profile؟',
                choices: ["My name's Fahad and I'm 19 years old.", 'Football is a popular sport.', 'Yanbu has a big port.'],
                answer: 0,
                why: 'الـ profile يبدأ بتعريف نفسك، وبعدها عائلتك.',
            },
            blocks: [
                { type: 'text', text: 'الـ profile بارقراف تعرّف فيه بنفسك وبعائلتك، ويجي في تكليف 2. نبنيه 4 أجزاء، وبعد كل جزء تكتب جزءك.' },

                { type: 'heading', text: 'النموذج اللي بنبنيه' },
                { type: 'example', view: 'both', en: "My name's Fahad and I'm 19 years old. I'm from Yanbu and I live with my family near the sea. My father is an engineer and he works at a big company. My mother is a teacher. I have two brothers and one sister. My brother Saad is 23 and he studies at university in Jeddah. My sister Reem is at school. I study English at the Preparatory Year Institute. My hobbies are playing football and reading." },
                { type: 'text', text: 'الحين نفككه 4 أجزاء: أنت، ثم والديك، ثم إخوانك، ثم دراستك وهواياتك.' },

                { type: 'heading', text: 'الجزء 1: أنت' },
                { type: 'text', view: 'both', text: 'اسمك، وعمرك، ومن وين.' },
                { type: 'breakdown', view: 'both', parts: [['My name', 's'], ["'s", 'v', 'is'], ['Fahad'], ['and'], ['I', 's'], ["'m", 'v', 'am'], ['19 years old'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ["'m", 'v', 'am'], ['from Yanbu'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن نفسك.', placeholder: "My name's … and I'm … years old." },

                { type: 'heading', text: 'الجزء 2: والديك' },
                { type: 'text', view: 'both', text: 'وش يشتغلون ووين. استخدم he و she عشان ما تكرر.' },
                { type: 'breakdown', view: 'both', parts: [['My father', 's'], ['is', 'v'], ['an engineer'], ['.', 'p']] },
                { type: 'breakdown', parts: [['He', 's', 'Pronoun'], ['works', 'v'], ['at a big company'], ['.', 'p']], ar: 'He مكان my father.' },
                { type: 'breakdown', parts: [['My mother', 's'], ['is', 'v'], ['a teacher'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين أو ثلاث عن والديك.', placeholder: 'My father is … He works …' },

                { type: 'heading', text: 'الجزء 3: إخوانك وأخواتك' },
                { type: 'text', view: 'both', text: 'كم واحد، وأسمائهم، ووش يسوون.' },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['have', 'v'], ['two brothers and one sister'], ['.', 'p']] },
                { type: 'breakdown', parts: [['His', 'adj', 'Possessive'], ['name', 'n'], ['is', 'v'], ['Saad'], ['.', 'p'], ['He', 's'], ['studies', 'v'], ['at university'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن إخوانك أو أخواتك.', placeholder: 'I have … His name is …' },

                { type: 'heading', text: 'الجزء 4: دراستك وهواياتك' },
                { type: 'breakdown', view: 'both', parts: [['I', 's'], ['study', 'v'], ['English at the Preparatory Year Institute'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My hobbies', 's'], ['are', 'v'], ['playing football and reading'], ['.', 'p']], ar: 'hobbies جمع، فنقول are.' },
                { type: 'try', task: 'اكتب جملة عن دراستك وجملة عن هواياتك.', placeholder: 'I study … My hobbies are …' },

                { type: 'heading', text: 'اجمع الأجزاء' },
                { type: 'note', text: 'قبل ما ترسل: كل جملة فيها فاعل وفعل، وحرف كبير ونقطة، و am / is / are صحيحة، و my / his / her قبل الاسم.' },
                { type: 'try', view: 'both', task: 'اجمع الأجزاء: اكتب الـ profile كامل في 6 إلى 8 جمل.', placeholder: "My name's …" },

                { type: 'heading', text: 'التحدث: عرّف بشخص مشهور' },
                { type: 'text', view: 'both', text: 'نفس الترتيب: تقديم، ثم الوظيفة ومن وين، ثم ليش مشهور.' },
                { type: 'breakdown', view: 'both', parts: [["I'm going to tell you about", 'x', 'Introduction'], ['Salem Al-Dawsari'], ['.', 'p']] },
                { type: 'breakdown', parts: [["He's", 'v', 'He + is'], ['a famous Saudi footballer', 'n', 'Job'], ['.', 'p'], ["He's", 'v'], ['from Riyadh', 'n', 'Place'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Many people know him because of', 'x', 'Why famous?'], ['his goal against Argentina at the 2022 World Cup'], ['.', 'p']] },
                { type: 'try', task: 'اكتب حديث قصير (3 إلى 4 جمل) عن شخص مشهور من بلدك.', placeholder: "I'm going to tell you about …" },

                {
                    type: 'exercise',
                    title: 'Exercise A: Check the profile',
                    instructions: 'هذي جمل من profile طالب. اختر الكلمة الصحيحة، وبعدين اضغط تحقق.',
                    items: [
                        { q: 'My father ___ a pilot.', choices: ['is', 'are', 'am'], a: 'is' },
                        { q: 'I have one brother. ___ name is Abdullah.', choices: ['He', 'His', 'Him'], a: 'His' },
                        { q: 'My grandparents live in Abha. ___ house is big.', choices: ['They', 'Their', 'There'], a: 'Their' },
                        { q: 'My mother ___ English and Arabic.', choices: ['speak', 'speaks', 'speaking'], a: 'speaks' },
                        { q: 'I live in ___.', choices: ['yanbu', 'Yanbu'], a: 'Yanbu' },
                        { q: 'My hobbies ___ swimming and reading.', choices: ['is', 'are'], a: 'are' },
                        { q: 'My sister ___ a student.', choices: ['is', 'are'], a: 'is' },
                        { q: '___ 18 years old.', choices: ["I'm", 'I'], a: "I'm" },
                    ],
                },
            ],
        },
    ],
};

/** عناوين الوحدة 1 الجديدة بترتيب الخطة (درس 1.4 داخل عنوان Sentences في lessons.ts) */
export const UNIT1_TOPICS: Topic[] = [pronouns, verbBe, vocabulary, skills, familyProfile];
