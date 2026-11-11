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

                { type: 'heading', text: 'الضمير: بدل الاسم، وبعده فعل' },
                { type: 'breakdown', view: 'explain', parts: [['This is'], ['my sister Reem', 'n', 'Name'], ['.'], ['She', 's', '= Reem'], ['is', 'v', 'Verb'], ['16'], ['.', 'p']], ar: 'Reem مرة وحدة، وبعدها She. وبعد She فعل (is).' },
                { type: 'check', items: [{ q: 'Saad is my brother. ___ studies in Jeddah.', choices: ['His', 'Her', 'He'], a: 'He', why: 'بعد الفراغ فعل (studies)، فنحط ضمير.' }] },

                { type: 'heading', text: 'صفة الملكية: حق مين؟ وبعدها اسم' },
                { type: 'breakdown', view: 'explain', parts: [['Reem', 'n', 'Name'], ['loves'], ['her', 'adj', 'حقها'], ['phone', 'n', 'Noun'], ['.', 'p']], ar: 'الجوال حق ريم، فنقول her. وبعد her اسم (phone).' },
                { type: 'check', items: [{ q: 'This is my father. ___ car is white.', choices: ['His', 'He', 'Her'], a: 'His', why: 'بعد الفراغ اسم (car)، والسيارة حق الأب.' }] },

                { type: 'heading', text: 'they و it في الصورة' },
                { type: 'text', text: 'they لأكثر من شخص، و it لشي أو مكان. وملكيتهم their و its.' },
                { type: 'breakdown', view: 'explain', parts: [['My grandparents', 'n', 'Name'], ['live in AlUla.'], ['They', 's', '= my grandparents'], ['have'], ['a farm', 'n'], ['.'], ['Its', 'adj', 'حق المزرعة'], ['palm trees'], ['are tall'], ['.', 'p']] },
                { type: 'check', items: [{ q: 'The farm is big. ___ is near AlUla.', choices: ['Its', 'They', 'It'], a: 'It', why: 'بعد الفراغ فعل (is)، والمزرعة شي واحد.' }] },

                { type: 'heading', text: 'السر: شوف وش بعد الفراغ' },
                { type: 'formula', view: 'explain', parts: [['He / She / They', 's', 'Pronoun'], ['Verb', 'v']] },
                { type: 'formula', view: 'explain', parts: [['His / Her / Their', 'adj', 'Possessive'], ['Noun', 'n']] },
                { type: 'text', text: 'وانتبه: الملكية حسب صاحب الشي، مو حسب الشي نفسه. Reem lives with her brother: her لأن الأخ حق ريم، حتى لو هو ولد.' },
                { type: 'note', text: 'غلط شائع: He name is Saad ✗ (الصح His name)، و Her is a nurse ✗ (الصح She is)، و it’s بدل its للملكية ✗.' },

                // ── الأمثلة: باقي الصورة ──
                { type: 'heading', text: 'باقي الصورة' },
                { type: 'text', view: 'examples', text: 'الضمير بالأزرق، والملكية بالوردي، والاسم بالبنفسجي.' },
                { type: 'breakdown', parts: [['Omar', 'n'], ['is my cousin.'], ['He', 's', '= Omar'], ['plays football.'], ['His', 'adj'], ['team', 'n'], ['is very good'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Aunt Mona', 'n'], ['is a doctor.'], ['Her', 'adj'], ['hospital', 'n'], ['is in Jeddah'], ['.', 'p']] },
                { type: 'breakdown', parts: [['We', 's'], ['are a big family.'], ['Our', 'adj'], ['house', 'n'], ['is near the sea'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Reem', 'n'], ['lives with'], ['her', 'adj', 'حق ريم'], ['{brother}', 'n'], ['{name}'], ['.', 'p']], ar: 'her لأن صاحبة الكلمة ريم، والملكية حسب صاحبها.' },
                { type: 'breakdown', parts: [['My cat', 'n'], ['is small.'], ['It', 's'], ['sleeps on'], ['its', 'adj'], ['bed', 'n'], ['.', 'p']], ar: 'its بدون فاصلة علوية. it’s = it is.' },
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
                        { q: 'Excuse me, what is ___ name?', choices: ['your', 'you', 'my'], a: 'your' },
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
                        { q: 'We are in class 3B. This is ___ classroom.', choices: ['their', 'your', 'our', 'his'], a: 'our' },
                        { q: 'Faisal takes the bus to work. The bus is cheap. Which pronoun can replace "the bus"?', choices: ['He', 'She', 'They', 'It'], a: 'It', why: 'الباص شي واحد.' },
                        { q: 'Look at that cat! ___ tail is very long.', choices: ['Its', "It's", 'Their', 'His'], a: 'Its' },
                    ],
                },
                {
                    type: 'exercise',
                    title: "Exercise C: Don't repeat the noun",
                    instructions: 'اكتب الجملتين مرة ثانية، وحط ضمير أو صفة ملكية مكان الكلمة المكررة.',
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
                { type: 'example', view: 'explain', en: "{name}: Hi! I'm {name}. I'm from Yanbu.\nHamza: Hello, {name}. I'm Hamza. I'm not Saudi. I'm from Egypt.\n{name}: Are you a new student?\nHamza: Yes, I am. Is Mr. John our teacher?\n{name}: Yes, he is. He's British.", ar: 'الحوار فيه كل أشكال be. نفككه تحت.' },

                { type: 'heading', text: 'المثبت: am و is و are' },
                { type: 'formula', view: 'explain', parts: [['Subject', 's'], ['am / is / are', 'v', 'be'], ['…']] },
                { type: 'breakdown', view: 'explain', parts: [['I', 's'], ["'m", 'v', 'am'], ['{name}.'], ['Hamza', 's', 'he'], ['is', 'v', 'is'], ['from Egypt.'], ['We', 's'], ['are', 'v', 'are'], ['in class 3B'], ['.', 'p']], ar: "I’m اختصار I am. ومثلها he’s و she’s و we’re و they’re." },
                { type: 'check', items: [{ q: 'Hamza and I ___ in class 3B.', choices: ['is', 'am', 'are'], a: 'are', why: 'Hamza and I = we، و we ياخذ are.' }] },

                { type: 'heading', text: 'النفي: not بعد be' },
                { type: 'text', text: "واختصاراتها: isn't و aren't و I'm not (ما فيه amn't)." },
                { type: 'formula', view: 'explain', parts: [['Subject', 's'], ['am / is / are', 'v', 'be'], ['not', 'x', 'not'], ['…']] },
                { type: 'breakdown', view: 'explain', parts: [['I', 's'], ["'m", 'v', 'am'], ['not', 'x', 'not'], ['Saudi.'], ['Mr. John', 's'], ["isn't", 'x', 'is + not'], ['Saudi.'], ['We', 's'], ["aren't", 'x', 'are + not'], ['late'], ['.', 'p']] },
                { type: 'check', items: [{ q: "Hamza ___ from Jordan. He's from Egypt.", choices: ["aren't", "isn't", 'not'], a: "isn't", why: 'Hamza = he، والنفي is + not.' }] },

                { type: 'heading', text: 'السؤال والجواب القصير' },
                { type: 'text', text: 'be تطلع قبل الفاعل. والجواب القصير بنفس be، و Yes بدون اختصار: Yes, he is (مو Yes, he’s).' },
                { type: 'formula', view: 'explain', parts: [['Am / Is / Are', 'v', 'be'], ['Subject', 's'], ['…?']] },
                { type: 'breakdown', view: 'explain', parts: [['Are', 'v', 'be'], ['you', 's'], ['a new student'], ['?', 'p'], ['Yes, I am.', 'n', 'Short answer']] },
                { type: 'breakdown', view: 'explain', parts: [['Is', 'v', 'be'], ['Mr. John', 's'], ['our teacher'], ['?', 'p'], ['Yes, he is.', 'n', 'Short answer']] },
                { type: 'check', items: [{ q: 'Is Reem your sister? Yes, ___', choices: ["she's.", 'she are.', 'she is.'], a: 'she is.', why: 'في جواب Yes ما نختصر.' }] },
                { type: 'note', text: 'غلط شائع: I not am ✗، و My father a doctor ✗ (ناقص is)، و Yes, she’s ✗.' },

                // ── الأمثلة: باقي اليوم الأول ──
                { type: 'heading', text: 'باقي اليوم الأول' },
                { type: 'text', view: 'examples', text: 'الفاعل بالأزرق، و be بالأخضر، و not بالأحمر.' },
                { type: 'breakdown', parts: [['My father', 's', 'he'], ['is', 'v'], ['an engineer'], ['.', 'p']], ar: 'أبوي = he.' },
                { type: 'breakdown', parts: [['Saad and Omar', 's', 'they'], ['are', 'v'], ['my cousins'], ['.', 'p']] },
                { type: 'breakdown', parts: [["It's", 'v', 'It + is'], ['hot'], ['in Yanbu today'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Are', 'v'], ['your parents', 's'], ['from Yanbu'], ['?', 'p'], ["No, they aren't.", 'x', 'Short answer']] },
                { type: 'breakdown', parts: [['Where', 'n', 'Question word'], ['are', 'v'], ['you', 's'], ['from'], ['?', 'p'], ["I'm from Jeddah.", 'n', 'Answer']], ar: 'كلمة السؤال، بعدها be، بعدها الفاعل.' },
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
                        { q: 'I ___ very happy today.', a: 'am' },
                        { q: 'The students ___ from different cities.', a: 'are', why: 'students جمع = they.' },
                        { q: 'Mr. John ___ our English teacher.', a: 'is' },
                        { q: 'You ___ in my class!', a: 'are', why: 'you دايم are، حتى لو شخص واحد.' },
                        { q: 'Hamza and Yousef ___ friends.', a: 'are', why: 'شخصين = they.' },
                        { q: 'I ___ not late.', a: 'am', why: 'not بعد am، و I دايم am.' },
                        { q: 'The library ___ big.', a: 'is' },
                        { q: 'We ___ new students.', a: 'are' },
                        { q: 'It ___ 8 am now.', a: 'is' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Questions and short answers',
                    instructions: 'اختر الجواب الصحيح.',
                    items: [
                        { q: '___ you from Jeddah?', choices: ['Is', 'Am', 'Are'], a: 'Are' },
                        { q: 'Is Hamza your classmate? Yes, ___', choices: ["he's.", 'he is.', 'he does.'], a: 'he is.', why: 'في Yes ما نختصر.' },
                        { q: 'Are they at the library? No, ___', choices: ["they aren't.", "they isn't.", "they don't."], a: "they aren't." },
                        { q: 'Where ___ Mr. John from?', choices: ['are', 'am', 'is'], a: 'is', why: 'Mr. John = he.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Correct the sentence',
                    instructions: 'كل جملة فيها خطأ في be. اكتبها صحيحة.',
                    items: [
                        { q: 'My name are Khalid.', a: 'My name is Khalid.' },
                        { q: 'I from Tabuk.', a: 'I am from Tabuk.' },
                        { q: 'My sisters is at school.', a: 'My sisters are at school.' },
                        { q: 'I not am a teacher.', a: 'I am not a teacher.' },
                        { q: 'We is a big family.', a: 'We are a big family.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Make it negative',
                    instructions: 'اكتب الجملة منفية.',
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
// الجو: "ورقة فهد المصححة". فهد كتب تعريف عن نفسه فيه 4 أخطاء، وكل قسم يصلح خطأ.
// يندرج تحت عنوان Sentences الموجود (ENGL 101)، عشان البحث عن sentence يطلع الدرسين
export const SENTENCES_ENG001: CourseLesson = {
    course: COURSE,
    unit: UNIT,
    title: 'Writing simple sentences',
    warmup: {
        q: 'هالجملة من ورقة {nameAr}. كم خطأ فيها؟',
        sentence: 'my brother a student.',
        choices: ['خطأ واحد', 'خطأين', 'ما فيها خطأ'],
        answer: 1,
        why: 'my لازم بحرف كبير، وناقصها فعل: My brother is a student.',
    },
    blocks: [
        { type: 'names' },
        { type: 'text', text: 'الجملة البسيطة (simple sentence) أصغر جملة كاملة، وكل كتابتك في التحضيري مبنية عليها. لها 4 شروط:' },
        { type: 'list', lang: 'ar', ordered: true, items: ['تبدأ بحرف كبير (capital letter).', 'فيها فاعل (subject): اللي نتكلم عنه، مثل My brother.', 'فيها فعل (verb): وش يسوي أو وش هو، مثل studies أو is.', 'تنتهي بنقطة (full stop).'] },
        { type: 'text', text: 'هذي ورقة {nameAr}: تعريف بالنفس، والمدرس رجّعها وفيها 4 أخطاء. كل قسم تحت يصلح واحد منها:' },
        { type: 'example', view: 'explain', en: 'my name is {name}. I from Yanbu. Study at the Preparatory Year Institute. My brother Saad engineering studies.' },

        { type: 'heading', text: 'الخطأ 1: الحرف الكبير والنقطة' },
        { type: 'text', text: 'أول كلمة في الجملة بحرف كبير، وكذلك I وأسماء الناس والمدن ({name}، Yanbu). وآخر الجملة نقطة.' },
        { type: 'breakdown', view: 'explain', parts: [['my', 'x', 'Capital ✗'], ['name is {name}'], ['.', 'p']], ar: 'الصح: My name is {name}.' },
        { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['i live in yanbu.', 'I live in Yanbu', 'I live in Yanbu.'], a: 'I live in Yanbu.', why: 'I و Yanbu بحرف كبير، وفي الآخر نقطة.' }] },

        { type: 'heading', text: 'الخطأ 2: ناقصها فعل' },
        { type: 'text', text: 'أكثر خطأ عند الطالب العربي، لأن العربي يقول "أنا من ينبع" بدون فعل. الإنجليزي لازم فيه فعل.' },
        { type: 'breakdown', view: 'explain', parts: [['I', 's'], ['(?)', 'x', 'No verb ✗'], ['from Yanbu'], ['.', 'p']], ar: 'الصح: I am from Yanbu.' },
        { type: 'check', items: [{ q: 'My uncle a pilot. What is missing?', choices: ['a subject', 'a verb', 'a full stop'], a: 'a verb', why: 'الصح: My uncle is a pilot.' }] },

        { type: 'heading', text: 'الخطأ 3: ناقصها فاعل' },
        { type: 'text', text: 'في العربي الفاعل يختفي داخل الفعل ("أدرس" فيها أنا)، أما الإنجليزي فلازم تكتبه.' },
        { type: 'breakdown', view: 'explain', parts: [['(?)', 'x', 'No subject ✗'], ['Study', 'v'], ['at the institute'], ['.', 'p']], ar: 'الصح: I study at the institute.' },
        { type: 'check', items: [{ q: 'Lives in AlUla. What is missing?', choices: ['a verb', 'a capital letter', 'a subject'], a: 'a subject', why: 'مين يعيش؟ الصح مثلًا: He lives in AlUla.' }] },

        { type: 'heading', text: 'الخطأ 4: الترتيب' },
        { type: 'text', text: 'الفاعل أول، بعده الفعل، بعده الباقي. الإنجليزي ما يقبل ترتيب ثاني.' },
        { type: 'formula', view: 'explain', parts: [['Subject', 's'], ['Verb', 'v'], ['the rest']] },
        { type: 'breakdown', view: 'explain', parts: [['My brother Saad', 's'], ['engineering', 'x', 'Wrong place ✗'], ['studies', 'v'], ['.', 'p']], ar: 'الصح: My brother Saad studies engineering.' },
        { type: 'check', items: [{ q: 'Choose the correct order.', choices: ['Reem English speaks.', 'Speaks Reem English.', 'Reem speaks English.'], a: 'Reem speaks English.', why: 'فاعل، ثم فعل، ثم الباقي.' }] },

        { type: 'heading', text: 'ورقة {nameAr} بعد التصحيح' },
        { type: 'example', view: 'explain', en: 'My name is {name}. I am from Yanbu. I study at the Preparatory Year Institute. My brother Saad studies engineering.' },

        // ── الأمثلة: جمل جديدة ──
        { type: 'heading', text: 'جمل صحيحة، وجمل نصلحها' },
        { type: 'text', view: 'examples', text: 'الفاعل بالأزرق، والفعل بالأخضر، والنقطة بالبرتقالي، والخطأ بالأحمر.' },
        { type: 'breakdown', parts: [['My mother', 's'], ['is', 'v'], ['a teacher'], ['.', 'p']] },
        { type: 'breakdown', parts: [['Hamza', 's'], ['speaks', 'v'], ['Arabic and English'], ['.', 'p']], ar: 'اللغات بحرف كبير بعد.' },
        { type: 'breakdown', parts: [['The weather', 's'], ['(?)', 'x', 'No verb ✗'], ['very hot today'], ['.', 'p']], ar: 'الصح: The weather is very hot today.' },
        { type: 'breakdown', parts: [['(?)', 'x', 'No subject ✗'], ['Is', 'v'], ['my best friend'], ['.', 'p']], ar: 'الصح: He is my best friend.' },
        { type: 'try', task: 'اكتب جملتين بسيطتين عن مدينتك، وتأكد من الشروط الأربعة.', reference: 'Yanbu is a city on the Red Sea. It has a big port.', placeholder: 'Yanbu is …' },
        { type: 'try', task: 'صحح: my cousin a nurse in jeddah.', reference: 'My cousin is a nurse in Jeddah.', placeholder: 'My cousin …' },

        // ── التمارين ──
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
                { q: 'Are in the classroom.', choices: SENTENCE_CHECK, a: 'No subject' },
                { q: 'Our teacher very kind.', choices: SENTENCE_CHECK, a: 'No verb', why: 'ناقص is.' },
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
                { q: 'speaks / she / three languages', a: 'She speaks three languages.' },
                { q: 'football / watch / on TV / we', a: 'We watch football on TV.' },
            ],
        },
        {
            type: 'exercise',
            title: "Exercise C: Correct Khalid's paper",
            instructions: 'هذي ورقة خالد، كل جملة فيها خطأ. اكتب كل جملة صحيحة.',
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

                { type: 'heading', text: 'كلمات العائلة على الشجرة' },
                { type: 'text', text: 'الإنجليزي ما يفرق بين العم والخال: الاثنين uncle. والعمة والخالة aunt، وعيالهم كلهم cousin.' },
                { type: 'breakdown', view: 'explain', parts: [['Faisal', 'n'], ['is'], ["my father's brother", 'adj', 'أخو أبوي'], ['. He is'], ['my uncle', 'x', 'Family word'], ['.', 'p']] },
                { type: 'breakdown', view: 'explain', parts: [['Omar', 'n'], ['is'], ["my uncle's son", 'adj', 'ولد عمي'], ['. He is'], ['my cousin', 'x', 'Family word'], ['.', 'p']] },
                { type: 'text', text: 'وكلمات للمجموعة: parents (أبوي وأمي)، و grandparents (أجدادي)، و children (العيال)، و grandchildren (الأحفاد).' },
                { type: 'breakdown', view: 'explain', parts: [['Ahmed and Huda', 'n'], ['are'], ['my parents', 'x', 'Family word'], ['. They have three'], ['children', 'x', 'Family word'], ['.', 'p']] },
                { type: 'check', items: [{ q: 'Look at the tree. Saleh and Noura are {name}’s ___.', choices: ['parents', 'cousins', 'grandparents'], a: 'grandparents', why: 'فوق الأب والأم في الشجرة.' }] },

                { type: 'heading', text: 'الوظائف تحت كل اسم' },
                { type: 'text', text: 'كثير من الوظائف كلمة + نهاية: er أو or أو ist. وفيه وظائف ما لها قاعدة وتنحفظ: pilot و doctor و nurse و engineer.' },
                { type: 'breakdown', view: 'explain', parts: [['teach', 'v'], ['+ er', 'x', 'ending'], ['= teacher', 'n', 'Job'], ['|'], ['act', 'v'], ['+ or', 'x', 'ending'], ['= actor', 'n', 'Job'], ['|'], ['art', 'v'], ['+ ist', 'x', 'ending'], ['= artist', 'n', 'Job']], ar: 'أم {nameAr} teacher: teach + er.' },
                { type: 'breakdown', view: 'explain', parts: [['My uncle', 's'], ['is'], ['a', 'x', 'a / an'], ['pilot', 'n', 'Job'], ['.'], ['My father', 's'], ['is'], ['an', 'x', 'a / an'], ['engineer', 'n', 'Job'], ['.', 'p']], ar: 'قبل الوظيفة a، و an إذا تبدأ بصوت علة.' },
                { type: 'check', items: [{ q: 'Aunt Mona works in a hospital. She is ___.', choices: ['a teacher', 'a doctor', 'an engineer'], a: 'a doctor', why: 'شوف الشجرة: Mona · doctor.' }] },

                { type: 'heading', text: 'زملاء {nameAr}: الدولة والجنسية' },
                { type: 'text', text: 'في فصل {nameAr} طلاب من دول ثانية. الجنسية غالبًا = اسم الدولة + نهاية، وتبدأ بحرف كبير.' },
                { type: 'formula', view: 'explain', parts: [['He is from', 's'], ['Country', 'n'], ['→'], ['He is', 's'], ['Nationality', 'adj']] },
                { type: 'breakdown', view: 'explain', parts: [['Egypt', 'n', 'Hamza'], ['+ ian', 'x'], ['Egyptian', 'adj'], ['|'], ['China', 'n', 'Li'], ['+ ese', 'x'], ['Chinese', 'adj'], ['|'], ['Oman', 'n', 'Salem'], ['+ i', 'x'], ['Omani', 'adj']], ar: 'ومثلها Jordan → Jordanian، Japan → Japanese، Kuwait → Kuwaiti.' },
                { type: 'check', items: [{ q: 'Yousef is from Jordan. He is ___.', choices: ['Jordan', 'Jordanian', 'Jordanese'], a: 'Jordanian', why: 'Jordan + ian.' }] },

                { type: 'heading', text: 'استثناءات تنحفظ' },
                { type: 'text', text: 'هذي ما تمشي على قاعدة "الدولة + نهاية"، فتنحفظ لحالها:' },
                { type: 'table', head: ['Country', 'Nationality'], rows: [['Saudi Arabia', 'Saudi'], ['the UK', 'British'], ['Türkiye', 'Turkish'], ['the UAE', 'Emirati']] },
                { type: 'breakdown', view: 'explain', parts: [['Our teacher, Mr. John,'], ['is from'], ['the UK', 'n', 'Country'], ['. He is'], ['British', 'x', 'Exception'], ['.', 'p']] },
                { type: 'note', text: 'غلط شائع: He is Egypt ✗ (الدولة مكان الجنسية)، و egyptian ✗ (بحرف صغير)، و my father brother ✗ (الصح my father’s brother).' },

                // ── الأمثلة: جمل جديدة عن الشجرة والفصل ──
                { type: 'heading', text: 'من الشجرة ومن الفصل' },
                { type: 'breakdown', parts: [['Mona', 'n'], ['is'], ["my father's sister", 'adj'], ['. She is'], ['my aunt', 'x', 'Family word'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Saleh and Noura', 'n'], ['have four'], ['grandchildren', 'x', 'Family word'], ['.', 'p']], ar: 'Omar و Saad و {name} و Reem.' },
                { type: 'breakdown', parts: [['Ahmet', 'n'], ['is from'], ['Türkiye', 'n', 'Country'], ['. He is'], ['Turkish', 'x', 'Exception'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My cousin Omar'], ['wants to be a'], ['journalist', 'n', 'journal + ist'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملتين عن أقاربك: عمك أو خالك، وعياله.', reference: 'My uncle lives in Riyadh. His son Khalid is my cousin.', placeholder: 'My uncle … His son is my cousin.' },
                { type: 'try', task: 'اكتب جملة عن زميل من دولة ثانية: من وين وجنسيته.', reference: 'My friend Yousef is from Jordan. He is Jordanian.', placeholder: 'My friend is from … He is …' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Read the family tree',
                    instructions: 'ارجع لشجرة عائلة {nameAr} واختر الصحيح.',
                    items: [
                        { q: 'Reem is {name}’s ___.', choices: ['sister', 'cousin', 'aunt'], a: 'sister' },
                        { q: 'Faisal is Omar’s ___.', choices: ['uncle', 'grandfather', 'father'], a: 'father', why: 'Omar ولد Faisal.' },
                        { q: 'Huda is Saad’s ___.', choices: ['aunt', 'mother', 'sister'], a: 'mother' },
                        { q: 'Mona is Reem’s ___.', choices: ['mother', 'cousin', 'aunt'], a: 'aunt', why: 'Mona أخت أبوها.' },
                        { q: '{name} and Reem are Ahmed’s ___.', choices: ['parents', 'children', 'grandchildren'], a: 'children' },
                        { q: 'Omar is Saleh’s ___.', choices: ['son', 'grandson', 'cousin'], a: 'grandson', why: 'ولد ولده.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Country → nationality',
                    instructions: 'اختر الجنسية الصحيحة. انتبه للاستثناءات.',
                    items: [
                        { q: 'She is from Japan. She is ___.', choices: ['Japanese', 'Japan', 'Japanian'], a: 'Japanese' },
                        { q: 'They are from the UAE. They are ___.', choices: ['UAE', 'Emiratian', 'Emirati'], a: 'Emirati', why: 'استثناء: the UAE → Emirati.' },
                        { q: 'He is from the UK. He is ___.', choices: ['English', 'British', 'UK'], a: 'British', why: 'استثناء: the UK → British.' },
                        { q: 'We are from Kuwait. We are ___.', choices: ['Kuwaiti', 'Kuwaitian', 'Kuwait'], a: 'Kuwaiti' },
                        { q: 'Hamza is ___.', choices: ['egyptian', 'Egypt', 'Egyptian'], a: 'Egyptian', why: 'الجنسية بحرف كبير.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Make the job',
                    instructions: 'اكتب الوظيفة من راسك.',
                    items: [
                        { q: 'drive → ___', a: 'driver' },
                        { q: 'farm → ___', a: 'farmer' },
                        { q: 'direct → ___', a: 'director' },
                        { q: 'journal → ___', a: 'journalist' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Exam style',
                    instructions: 'نفس شكل قسم Vocabulary في الكويز.',
                    items: [
                        { q: 'Ali is a ___ working for a newspaper. He writes articles about sport.', choices: ['farmer', 'journalist', 'pilot', 'chef'], a: 'journalist' },
                        { q: 'Huda is a ___. She works in a hospital and helps doctors.', choices: ['manager', 'writer', 'nurse', 'farmer'], a: 'nurse' },
                        { q: 'Mr. Saleh is a ___. He cooks in a big restaurant.', choices: ['dancer', 'scientist', 'actor', 'chef'], a: 'chef' },
                        { q: 'Faisal is an ___. He designs roads and bridges.', choices: ['engineer', 'actor', 'artist', 'editor'], a: 'engineer' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 1.6 Skills: previewing، taking notes، syllable stress (RW ص 18، LS ص 19 و26 و32) ───────────────
// الجو: "مقال لمى من البداية للنهاية". فهد يقرأ مقال عن طباخة سعودية: قبل القراءة يتصفح، وأثناء المقابلة ياخذ ملاحظات، وبعدها ينطق كلماتها صح.
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
                q: 'مع {nameAr} مقال عنوانه "Meet Lama: A Young Saudi Chef". قبل القراءة، وش أول شي نسويه؟',
                choices: ['يقرأ كلمة كلمة من أوله', 'يترجم كل الكلمات الصعبة', 'يشوف العنوان والصورة ويتوقع الموضوع'],
                answer: 2,
                why: 'هذا اسمه previewing: نظرة سريعة قبل القراءة تخليك تفهم أسرع.',
            },
            blocks: [
                { type: 'names' },
                { type: 'text', text: 'نقرأ مع {nameAr} مقال عن لمى، طباخة سعودية، وبعدها نسمع مقابلة معها. نمشي بثلاث مهارات تسهّل عليك القراءة والاستماع في الكويز: قبل ما تقرأ، ووقت ما تسمع، ولما تنطق.' },

                { type: 'heading', text: 'قبل القراءة: Previewing' },
                { type: 'text', text: 'شوف العنوان والصورة، واسأل: عن مين؟ وعن وش؟ وتوقع الكلمات اللي بتجي. كذا لما تقرأ، تلقى كلمات متوقعها.' },
                { type: 'breakdown', view: 'explain', parts: [['Meet Lama:', 'n', 'Who? a woman'], ['A Young Saudi Chef', 'adj', 'Her job: cooking']], ar: 'والصورة: بنت في مطبخ. أتوقع كلمات مثل: food، kitchen، restaurant، cook.' },
                { type: 'check', items: [{ q: 'Which word will {name} probably see in the article?', choices: ['airport', 'kitchen', 'farm'], a: 'kitchen', why: 'العنوان عن طباخة، فالمطبخ متوقع.' }] },

                { type: 'heading', text: 'أثناء الاستماع: Taking notes' },
                { type: 'text', text: 'نسمع مع {nameAr} مقابلة لمى. ما نكتب كل كلمة، نكتب المهم بس: الأسماء والأرقام والأماكن والوظائف.' },
                { type: 'example', view: 'explain', en: '"My name is Lama and I am 24. I am from Riyadh, but I work in Jeddah now. I cook Saudi and Italian food."', ar: 'هذا اللي سمعناه.' },
                { type: 'breakdown', view: 'explain', parts: [['Lama', 'n', 'Name'], ['–', 'p'], ['24', 'adj', 'Age'], ['–', 'p'], ['Riyadh → Jeddah', 's', 'Places'], ['–', 'p'], ['Saudi + Italian food', 'v', 'Job']], ar: 'وهذي ملاحظاته: كلمات بس، والرقم بالأرقام.' },
                { type: 'check', items: [{ q: 'Lama says: "My restaurant is in Al-Balad." Which note is best?', choices: ['My restaurant is in', 'restaurant – Al-Balad', 'is in Al-Balad'], a: 'restaurant – Al-Balad', why: 'الشي والمكان بس.' }] },

                { type: 'heading', text: 'بعد الاستماع: Syllable stress' },
                { type: 'text', text: 'بعدها نعيد كلمات لمى بصوتنا. الكلمة تنقسم مقاطع (المقطع جزء ينطق مرة وحدة)، وواحد منها ننطقه أقوى. المقطع المضغوط بالأحمر، ومكانه يختلف:' },
                { type: 'breakdown', view: 'explain', parts: [['KITCH', 'x', '1st'], ['en'], ['|'], ['i'], ['TAL', 'x', '2nd'], ['ian'], ['|'], ['Jap'], ['a'], ['NESE', 'x', 'last']], ar: 'kitchen النبرة أول، و Italian في النص، و Japanese في الآخر.' },
                { type: 'check', items: [{ q: 'Where is the stress in restaurant?', choices: ['res-TAU-rant', 'RES-tau-rant', 'res-tau-RANT'], a: 'RES-tau-rant', why: 'النبرة على أول مقطع.' }] },
                { type: 'note', text: 'النبرة الغلط تخلي الكلمة ما تنفهم، حتى لو الحروف صح. لما تتعلم كلمة جديدة، احفظ نبرتها معها.' },

                // ── الأمثلة: نفس المهارات على نصوص ثانية ──
                { type: 'heading', text: 'نجرب على نصوص ثانية' },
                { type: 'breakdown', parts: [['Life on', 'n', 'What?'], ['a Small Island', 'adj', 'Where?']], ar: 'أتوقع كلمات: sea، boat، fish، people.' },
                { type: 'breakdown', parts: [['Khalid', 'n', 'Name'], ['–', 'p'], ['19', 'adj', 'Age'], ['–', 'p'], ['Tabuk', 's', 'Place'], ['–', 'p'], ['student', 'v', 'Job']], ar: 'سمعت: "Hi, I’m Khalid. I’m 19 and I’m a student in Tabuk."' },
                { type: 'breakdown', parts: [['TEACH', 'x', 'Stress'], ['er'], ['|'], ['com'], ['PU', 'x', 'Stress'], ['ter'], ['|'], ['en'], ['gi'], ['NEER', 'x', 'Stress']] },
                { type: 'try', task: 'العنوان: "My Grandfather’s Farm". اكتب 3 كلمات تتوقعها في النص.', reference: 'dates, palm trees, animals', placeholder: 'dates, …' },
                { type: 'try', task: 'اكتب ملاحظات (مو جمل): "My cousin Reem is 22. She lives in Riyadh and she works as a nurse."', reference: 'Reem – 22 – Riyadh – nurse', placeholder: 'Reem – …' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Where is the stress?',
                    instructions: 'اختر المقطع المضغوط.',
                    items: [
                        { q: 'family', choices: ['fam-I-ly', 'FAM-i-ly', 'fam-i-LY'], a: 'FAM-i-ly' },
                        { q: 'computer', choices: ['COM-pu-ter', 'com-pu-TER', 'com-PU-ter'], a: 'com-PU-ter' },
                        { q: 'engineer', choices: ['en-gi-NEER', 'EN-gi-neer', 'en-GI-neer'], a: 'en-gi-NEER', why: 'النبرة في الآخر، مثل Japanese.' },
                        { q: 'Egyptian', choices: ['E-gyp-tian', 'e-GYP-tian', 'e-gyp-TIAN'], a: 'e-GYP-tian' },
                        { q: 'Which word has the stress on the first syllable?', choices: ['hotel', 'Chinese', 'doctor'], a: 'doctor', why: 'DOC-tor، أما ho-TEL و chi-NESE فالنبرة في الآخر.' },
                        { q: 'Which word has the stress on the last syllable?', choices: ['brother', 'Chinese', 'teacher'], a: 'Chinese' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Good notes',
                    instructions: 'اختر أفضل ملاحظات للي سمعته.',
                    items: [
                        { q: '"Our teacher is from Egypt and he speaks three languages."', choices: ['Our teacher is from', 'he speaks', 'teacher – Egypt – 3 languages'], a: 'teacher – Egypt – 3 languages' },
                        { q: '"Haruki Murakami is a famous writer from Japan."', choices: ['Murakami – writer – Japan', 'is a famous', 'Haruki is a'], a: 'Murakami – writer – Japan' },
                        { q: '"My brother Saad is 23 and he studies in Jeddah."', choices: ['and he studies', 'Saad – 23 – Jeddah', 'My brother is'], a: 'Saad – 23 – Jeddah' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Preview the title',
                    instructions: 'من العنوان بس، وش تتوقع؟',
                    items: [
                        { q: '"A Day at the Zoo". Which word will you probably see?', choices: ['lion', 'pilot', 'snow'], a: 'lion' },
                        { q: '"The World’s Tallest Man". What is the text about?', choices: ['a building', 'a person', 'a mountain'], a: 'a person', why: 'كلمة Man في العنوان.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Write the notes',
                    instructions: 'اكتب ملاحظات قصيرة (كلمات، مو جمل).',
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
                { type: 'example', view: 'explain', en: "My name's {name} and I'm 19 years old. I'm from Yanbu. My father, Ahmed, is an engineer. He works at a big company. My mother, Huda, is a teacher. I have one brother and one sister. My brother Saad is 23 and he studies engineering in Jeddah. My sister Reem is 16. She is at school. I study English at the Preparatory Year Institute. My hobbies are football and reading." },

                { type: 'heading', text: 'الخانة 1: أنا' },
                { type: 'text', text: 'اسمك، وعمرك، ومن وين. والاختصار طبيعي هنا: My name’s و I’m.' },
                { type: 'breakdown', view: 'explain', parts: [['My name', 's'], ["'s", 'v', 'is'], ['{name}'], ['and'], ['I', 's'], ["'m", 'v', 'am'], ['19 years old'], ['.', 'p']] },
                { type: 'check', items: [{ q: 'Which sentence is correct?', choices: ['I 19 years old.', "I'm 19 years old.", 'I have 19 years.'], a: "I'm 19 years old.", why: 'العمر بـ am، مو have.' }] },
                { type: 'try', view: 'explain', task: 'عبّ خانتك الأولى: اسمك وعمرك ومن وين.', reference: "My name's Sami and I'm 18 years old. I'm from Abha.", placeholder: "My name's … and I'm …" },

                { type: 'heading', text: 'الخانة 2: والديّ' },
                { type: 'text', text: 'وش يشتغلون ووين. اسمه مرة، وبعدها he أو she.' },
                { type: 'breakdown', view: 'explain', parts: [['My father', 's'], ['is', 'v'], ['an engineer', 'n', 'Job'], ['.'], ['He', 's', '= my father'], ['works', 'v'], ['at a big company'], ['.', 'p']] },
                { type: 'check', items: [{ q: 'My mother is a teacher. ___ works at a girls’ school.', choices: ['Her', 'He', 'She'], a: 'She', why: 'بعده فعل، والأم she.' }] },
                { type: 'try', view: 'explain', task: 'عبّ خانة والديك: جملتين أو ثلاث.', reference: 'My father is a doctor. He works at a hospital. My mother is a nurse.', placeholder: 'My father is … He works …' },

                { type: 'heading', text: 'الخانة 3: إخواني وأخواتي' },
                { type: 'text', text: 'كم واحد، وأسماءهم وأعمارهم، ووش يسوون.' },
                { type: 'breakdown', view: 'explain', parts: [['I', 's'], ['have', 'v'], ['one brother and one sister', 'n'], ['.'], ['His', 'adj', 'Possessive'], ['name', 'n'], ['is', 'v'], ['Saad'], ['.', 'p']] },
                { type: 'check', items: [{ q: 'I have two ___.', choices: ['sister', 'sisters', 'sisteres'], a: 'sisters', why: 'two = جمع.' }] },
                { type: 'try', view: 'explain', task: 'عبّ خانة إخوانك وأخواتك.', reference: 'I have two brothers. Their names are Ali and Majed.', placeholder: 'I have … His name is …' },

                { type: 'heading', text: 'الخانة 4: دراستي وهواياتي' },
                { type: 'breakdown', view: 'explain', parts: [['My hobbies', 's', 'Plural'], ['are', 'v'], ['football and reading'], ['.', 'p']], ar: 'hobbies جمع، فنقول are.' },
                { type: 'check', items: [{ q: 'My favourite hobby ___ swimming.', choices: ['are', 'am', 'is'], a: 'is', why: 'hobby مفرد.' }] },
                { type: 'try', view: 'explain', task: 'عبّ خانة دراستك وهواياتك.', reference: 'I study English at the institute. My hobbies are swimming and drawing.', placeholder: 'I study … My hobbies are …' },

                { type: 'heading', text: 'اجمع البطاقة' },
                { type: 'note', text: 'قبل ما ترسل: كل جملة فيها فاعل وفعل، وحرف كبير ونقطة، و am / is / are صحيحة، و his / her قبل الاسم.' },
                { type: 'try', view: 'explain', task: 'اجمع خاناتك الأربع: اكتب الـ profile كامل في 6 إلى 8 جمل.', reference: "My name's Sami and I'm 18 years old. I'm from Abha. My father is a doctor. He works at a hospital. My mother is a nurse. I have two brothers. Their names are Ali and Majed. I study English at the institute. My hobbies are swimming and drawing.", placeholder: "My name's …" },

                // ── الأمثلة: التحدث ──
                { type: 'heading', text: 'التحدث: عرّف بشخص مشهور' },
                { type: 'text', view: 'examples', text: 'نفس فكرة البطاقة، بس عن شخص مشهور: مين، ثم وظيفته ومن وين، ثم ليش مشهور.' },
                { type: 'breakdown', parts: [["I'm going to tell you about", 'x', 'Introduction'], ['Salem Al-Dawsari'], ['.', 'p']] },
                { type: 'breakdown', parts: [["He's", 'v', 'He + is'], ['a famous Saudi footballer', 'n', 'Job'], ['.'], ["He's", 'v'], ['from Riyadh', 'n', 'Place'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Many people know him because of', 'x', 'Why famous?'], ['his goal against Argentina at the 2022 World Cup'], ['.', 'p']] },
                { type: 'try', task: 'اكتب حديث قصير (3 إلى 4 جمل) عن شخص مشهور من بلدك.', reference: "I'm going to tell you about Majed Abdullah. He's a famous Saudi footballer. He's from Jeddah. Many people know him because he scored many goals for Saudi Arabia.", placeholder: "I'm going to tell you about …" },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Check the profile',
                    instructions: 'هذي جمل من profile طالب. اختر الصحيح.',
                    items: [
                        { q: 'My father ___ a pilot.', choices: ['are', 'is', 'am'], a: 'is' },
                        { q: 'I have one brother. ___ name is Abdullah.', choices: ['He', 'Her', 'His'], a: 'His', why: 'بعده اسم.' },
                        { q: 'My grandparents live in Abha. ___ house is big.', choices: ['Their', 'They', 'There'], a: 'Their' },
                        { q: 'I live in ___.', choices: ['yanbu', 'Yanbu', 'YANBU'], a: 'Yanbu', why: 'اسم المدينة بحرف كبير أوله بس.' },
                        { q: 'My hobbies ___ swimming and reading.', choices: ['is', 'am', 'are'], a: 'are' },
                        { q: 'My uncle is ___ engineer.', choices: ['an', 'a', 'the'], a: 'an', why: 'engineer تبدأ بصوت علة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: "Exercise B: Fix Saleh's profile",
                    instructions: 'كل جملة فيها خطأ. اكتبها صحيحة.',
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
