// ENG 001 (التحضيري، Unlock Level 1) · الوحدة 5: Jobs
// كل الأمثلة والتمارين من كتابتنا، والترتيب حسب الكتابين RW و LS.
// المعيار: نمط أول أربع دروس: كل قسم سطر ← معادلة ← جمل ملونة ← كتابة، ثم تمارين طويلة.

import type { Topic } from './lessons';

const COURSE = 'ENG 001';
const UNIT = 'Unit 5 · Jobs';
const base = ['تحضيري', 'ENG 001', 'Unit 5', 'Jobs'];

// ─────────────── 5.1 Adjective phrases (RW ص 113) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const adjectivePhrases: Topic = {
    slug: 'adjective-phrases',
    title: 'Adjective phrases',
    titleAr: 'شبه الجملة الوصفية: very و good at و good with',
    keywords: ['adjective phrase', 'adjective phrases', 'good at', 'good with', 'very', 'adjective and adjective', 'صفة', 'شاطر في', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Adjective phrases',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'My sister is a teacher. She is good ___ children.',
                choices: ['at', 'with'],
                answer: 1,
                why: 'good with للتعامل مع ناس أو أشياء. و good at لمهارة أو مادة.',
            },
            blocks: [
                { type: 'text', text: 'الـ adjective phrase صفة ومعها كلمات توضحها، مثل very careful و good with people. تكثر في إعلانات الوظائف.' },

                { type: 'heading', text: 'الشكل 1: very + صفة' },
                { type: 'text', view: 'both', text: 'very يعني "جدًا"، ومكانها قبل الصفة دايم.' },
                { type: 'formula', parts: [['very', 'adv'], ['Adjective', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['A pilot', 's'], ['must be', 'v'], ['very', 'adv'], ['careful', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Software engineers', 's'], ['are', 'v'], ['very', 'adv'], ['intelligent', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The job', 's'], ['is', 'v'], ['very', 'adv'], ['interesting', 'adj'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة عن وظيفة فيها very.', placeholder: 'A doctor must be very clever.' },

                { type: 'heading', text: 'الشكل 2: صفة + and + صفة' },
                { type: 'text', view: 'both', text: 'صفتين لنفس الشخص بينهم and (و).' },
                { type: 'formula', parts: [['Adjective', 'adj'], ['and', 'co'], ['Adjective', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['Teachers', 's'], ['are', 'v'], ['patient', 'adj'], ['and', 'co'], ['kind', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Pilots', 's'], ['must be', 'v'], ['calm', 'adj'], ['and', 'co'], ['careful', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [["I'm", 'v', 'I + am'], ['friendly', 'adj'], ['and', 'co'], ['hard-working', 'adj'], ['.', 'p']] },
                { type: 'try', task: 'وصّف شخصيتك بصفتين و and.', placeholder: "I'm friendly and hard-working." },

                { type: 'heading', text: 'الشكل 3: good at + مهارة' },
                { type: 'text', view: 'both', text: 'good at يعني "شاطر في": بعدها مادة أو مهارة، وإذا جا فعل ياخذ ing.' },
                { type: 'formula', parts: [['good at', 'adj'], ['skill / subject / verb + ing', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['My brother', 's'], ['is', 'v'], ['good at', 'adj'], ['Maths', 'n', 'Subject'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A chef', 's'], ['must be', 'v'], ['good at', 'adj'], ['cooking', 'n', 'Verb + ing'], ['.', 'p']] },
                { type: 'breakdown', parts: [['He', 's'], ['is', 'v'], ['good at', 'adj'], ['fixing cars', 'n', 'Verb + ing'], ['.', 'p']], ar: 'good at fix ✗' },
                { type: 'try', task: 'وش أنت good at؟', placeholder: "I'm good at football." },

                { type: 'heading', text: 'الشكل 4: good with + ناس أو أشياء' },
                { type: 'text', view: 'both', text: 'good with يعني "يعرف يتعامل مع": ناس، أو حيوانات، أو أجهزة.' },
                { type: 'formula', parts: [['good with', 'adj'], ['people / things', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['Nurses', 's'], ['are', 'v'], ['good with', 'adj'], ['people', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Vets', 's'], ['are', 'v'], ['good with', 'adj'], ['animals', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['IT workers', 's'], ['are', 'v'], ['good with', 'adj'], ['computers', 'n'], ['.', 'p']] },
                { type: 'try', task: 'مع وش أنت good with؟', placeholder: "I'm good with children." },

                { type: 'note', text: 'غلط شائع: good with Maths ✗ (الصح good at)، و interesting very ✗، و good at fix ✗.' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: at or with?',
                    instructions: 'اختر at أو with.',
                    choices: ['at', 'with'],
                    items: [
                        { q: 'Ali is good ___ solving problems.', a: 'at' },
                        { q: 'A teacher should be good ___ students.', a: 'with' },
                        { q: 'My sister is good ___ cooking.', a: 'at' },
                        { q: 'He is good ___ languages.', a: 'at' },
                        { q: 'Farmers are good ___ animals.', a: 'with' },
                        { q: 'She is good ___ drawing.', a: 'at' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'Sarah is a primary school English teacher. She is _____ children. She is also _____ teaching English.', choices: ['good with / good at', 'good at / good with', 'good with / good with'], a: 'good with / good at' },
                        { q: 'My sister is ___ cooking.', choices: ['good at', 'good on', 'good with', 'good to'], a: 'good at' },
                        { q: 'My brother is good at ___ cars.', choices: ['fix', 'fixing', 'fixed'], a: 'fixing' },
                        { q: 'The new manager is friendly ___ helpful.', choices: ['and', 'at', 'with'], a: 'and' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Describe the job',
                    instructions: 'اكتب وش لازم يكون صاحب الوظيفة. استخدم adjective phrase.',
                    items: [
                        { q: 'a footballer', a: 'A footballer must be very fit and strong.' },
                        { q: 'a school teacher', a: 'A school teacher must be good with children.' },
                        { q: 'a journalist', a: 'A journalist must be good at writing.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 5.2 Must, have to, should (RW ص 116، LS ص 117 إلى 119) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const modals: Topic = {
    slug: 'must-have-to-should',
    title: 'Must, have to and should',
    titleAr: 'must و have to و should',
    keywords: ['must', "mustn't", 'have to', 'has to', "don't have to", "doesn't have to", 'should', "shouldn't", 'necessary', 'advice', 'لازم', 'يجب', 'نصيحة', 'المفروض', ...base, 'Unit 6', 'opinion'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Must, have to and should',
            warmup: {
                q: 'وش الصحيح؟',
                sentence: 'A pilot ___ to work at night sometimes.',
                choices: ['have', 'has', 'must'],
                answer: 1,
                why: 'مع he و she و it نقول has to. ومع must ما نحط to أبدًا.',
            },
            blocks: [
                { type: 'text', text: 'هالكلمات تقول قد إيش الشي مهم: لازم، أو مو لازم، أو ممنوع، أو نصيحة. وبعدها كلها الفعل الأساسي.' },

                { type: 'heading', text: 'الكلمة 1: must = لازم' },
                { type: 'text', view: 'both', text: 'must ما تتغير أبدًا، وما بعدها to.' },
                { type: 'formula', parts: [['Subject', 's'], ['must', 'hv'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Students', 's'], ['must', 'hv'], ['bring', 'v'], ['their ID cards'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A nurse', 's'], ['must', 'hv'], ['be', 'v'], ['kind'], ['.', 'p']], ar: 'must to ✗ و musts ✗' },
                { type: 'breakdown', parts: [['Doctors', 's'], ['must', 'hv'], ['study', 'v'], ['for many years'], ['.', 'p']] },
                { type: 'try', task: 'اكتب شي لازم في وظيفة تحبها بـ must.', placeholder: 'A pilot must be careful.' },

                { type: 'heading', text: 'الكلمة 2: have to / has to = لازم' },
                { type: 'text', view: 'both', text: 'نفس معنى must، بس تصير has to مع he و she و it.' },
                { type: 'formula', parts: [['Subject', 's'], ['have to / has to', 'hv'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['Pilots', 's'], ['have to', 'hv'], ['work', 'v'], ['at night'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My father', 's'], ['has to', 'hv', 'he → has to'], ['wake up', 'v'], ['at 5 am'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I', 's'], ['have to', 'hv'], ['study', 'v'], ['tonight'], ['.', 'p']], ar: 'وتنطق في الكلام: /ˈhæftə/.' },
                { type: 'try', task: 'وش لازم يسوي واحد من عائلتك كل يوم؟ استخدم has to.', placeholder: 'My brother has to go to work at 7.' },

                { type: 'heading', text: "الكلمة 3: don't have to = مو لازم" },
                { type: 'text', view: 'both', text: "براحتك، إذا تبي سوّه. ومع he و she تصير doesn't have to." },
                { type: 'formula', parts: [['Subject', 's'], ["don't / doesn't have to", 'hv'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['You', 's'], ["don't have to", 'hv'], ['wear', 'v'], ['a suit'], ['.', 'p']] },
                { type: 'breakdown', parts: [['She', 's'], ["doesn't have to", 'hv'], ['work', 'v'], ['at weekends'], ['.', 'p']] },
                { type: 'breakdown', parts: [["Tomorrow is Friday. I", 's'], ["don't have to", 'hv'], ['get up', 'v'], ['early'], ['.', 'p']] },
                { type: 'try', task: "اكتب شي مو لازم في معهدك بـ don't have to.", placeholder: "We don't have to wear a uniform." },

                { type: 'heading', text: "الكلمة 4: mustn't = ممنوع" },
                { type: 'text', view: 'both', text: "انتبه: mustn't غير don't have to تمامًا. هذي ممنوع." },
                { type: 'formula', parts: [['Subject', 's'], ["mustn't", 'x', 'Not allowed'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['You', 's'], ["mustn't", 'x', 'Not allowed'], ['smoke', 'v'], ['in the hospital'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You', 's'], ["mustn't", 'x', 'Not allowed'], ['use', 'v'], ['your phone in the exam'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Drivers', 's'], ["mustn't", 'x', 'Not allowed'], ['park', 'v'], ['here'], ['.', 'p']] },
                { type: 'try', task: "اكتب قاعدة لمعهدك بـ mustn't.", placeholder: "Students mustn't eat in class." },

                { type: 'heading', text: 'الكلمة 5: should = أنصحك' },
                { type: 'text', view: 'both', text: 'أخف من must: فكرة زينة مو قانون. ونستخدمها للرأي: I think he should …' },
                { type: 'formula', parts: [['Subject', 's'], ["should / shouldn't", 'hv'], ['base verb', 'v']] },
                { type: 'breakdown', view: 'both', parts: [['You', 's'], ['should', 'hv'], ['see', 'v'], ['a doctor'], ['.', 'p']] },
                { type: 'breakdown', parts: [['He', 's'], ["shouldn't", 'hv'], ['sleep', 'v'], ['late'], ['.', 'p']] },
                { type: 'breakdown', parts: [['I think a manager', 's'], ['should', 'hv'], ['be', 'v'], ['helpful'], ['.', 'p']] },
                { type: 'try', task: "زميلك عنده اختبار بكرة. اعطه نصيحتين: should و shouldn't.", placeholder: "You should sleep early. You shouldn't drink coffee at night." },

                {
                    type: 'table',
                    head: ['Meaning', 'Words'],
                    rows: [
                        ['لازم', 'must / have to / has to'],
                        ['مو لازم', "don't have to / doesn't have to"],
                        ['ممنوع', "mustn't"],
                        ['أنصحك', "should / shouldn't"],
                    ],
                },
                { type: 'note', text: "غلط شائع: She have to ✗، و must to ✗، و should studies ✗، و تخلط بين mustn't و don't have to." },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Choose the correct form',
                    instructions: 'اختر الصحيح.',
                    items: [
                        { q: 'A football player ___ be very fit.', choices: ['must', 'musts'], a: 'must' },
                        { q: 'Pilots sometimes ___ to work at night.', choices: ['has', 'have'], a: 'have' },
                        { q: 'She must ___ her ID.', choices: ['bring', 'brings', 'to bring'], a: 'bring' },
                        { q: 'She should ___ before the exam.', choices: ['study', 'studies', 'to study'], a: 'study' },
                        { q: 'A language teacher ___ be good at speaking.', choices: ['musts', 'has to'], a: 'has to' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Which meaning?',
                    instructions: 'الجملة وش معناها؟',
                    choices: ['necessary', 'not necessary', 'not allowed', 'advice'],
                    items: [
                        { q: 'You must wear a seat belt.', a: 'necessary' },
                        { q: "You don't have to pay. It's free.", a: 'not necessary' },
                        { q: "You mustn't take photos here.", a: 'not allowed' },
                        { q: 'You should eat more vegetables.', a: 'advice' },
                        { q: "He doesn't have to wear a tie.", a: 'not necessary' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'When your teacher is speaking, you ___ listen carefully. You ___ speak loudly and disturb the class.', choices: ["should / shouldn't", "shouldn't / should", 'should / should'], a: "should / shouldn't" },
                        { q: 'Inside the hospital, visitors _____ stay quiet and _____ smoke at all times.', choices: ["must / mustn't", "mustn't / must", 'must / must'], a: "must / mustn't" },
                        { q: 'I ___ get up early tomorrow. I have an exam.', choices: ['have', 'has to', "doesn't", 'have to'], a: 'have to' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise D: Write a job advert',
                    instructions: 'اكتب 3 جمل لإعلان وظيفة: must، و have to، و don’t have to.',
                    items: [{ q: 'Job: fitness instructor', a: "You must be fit and healthy. You have to work at weekends. You don't have to have experience." }],
                },
            ],
        },
    ],
};

// ─────────────── 5.3 The pronoun you (RW ص 117) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const pronounYou: Topic = {
    slug: 'the-pronoun-you',
    title: 'The pronoun you',
    titleAr: 'الضمير you',
    keywords: ['you', 'pronoun you', 'you in general', 'people in general', 'ضمير', 'أنت', 'أنتم', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'The pronoun you',
            warmup: {
                q: 'في إعلان وظيفة: "You must be fit and healthy." مين you؟',
                choices: ['شخص معين', 'أي شخص يتقدم للوظيفة'],
                answer: 1,
                why: 'you في الإعلانات معناها "أي شخص"، مو شخص معين.',
            },
            blocks: [
                { type: 'text', text: 'كلمة you لها 3 معاني، والفعل معها ما يتغير. تعرف المعنى من باقي الكلام.' },

                { type: 'heading', text: 'المعنى 1: أنت (شخص واحد)' },
                { type: 'text', view: 'both', text: 'تكلم شخص معين، وغالبًا تذكر اسمه.' },
                { type: 'breakdown', view: 'both', parts: [['Ali', 'n', 'One person'], [','], ['you', 's', 'you = Ali'], ['are', 'v'], ['a good student'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Thank', 'v'], ['you', 's', 'you = Noura'], [','], ['Noura', 'n', 'One person'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة تكلم فيها زميل باسمه.', placeholder: 'Saad, you are very helpful.' },

                { type: 'heading', text: 'المعنى 2: أنتم (مجموعة)' },
                { type: 'text', view: 'both', text: 'تكلم أكثر من شخص، مثل فصل أو فريق.' },
                { type: 'breakdown', view: 'both', parts: [['Class', 'n', 'Group'], [','], ['you', 's', 'you = the class'], ['can go', 'v'], ['home now'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You', 's', 'you = everyone here'], ['are', 'v'], ['all'], ['welcome', 'adj'], ['.', 'p']], ar: 'all تبين إنهم مجموعة.' },
                { type: 'try', task: 'اكتب جملة يقولها المدرس للفصل كله.', placeholder: 'Students, you have an exam on Sunday.' },

                { type: 'heading', text: 'المعنى 3: الناس عمومًا' },
                { type: 'text', view: 'both', text: 'أي شخص. تكثر في إعلانات الوظائف وفي الكلام عن وظيفة.' },
                { type: 'breakdown', view: 'both', parts: [['To be a pilot', 'x', 'Any person'], [','], ['you', 's', 'you = anyone'], ['have to', 'hv'], ['study', 'v'], ['for a long time'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You', 's', 'you = anyone'], ['must', 'hv'], ['have', 'v'], ['five years’ experience'], ['.', 'p']], ar: 'من إعلان وظيفة.' },
                { type: 'breakdown', parts: [['A vet', 's', 'Academic'], ['has to', 'hv'], ['be', 'v'], ['good with animals'], ['.', 'p']], ar: 'في الكتابة الأكاديمية نقول a vet أو people بدل you.' },
                { type: 'try', task: 'اكتب جملتين لإعلان وظيفة بـ you، وبعدها نفس الفكرة بدون you.', placeholder: 'You must be good with computers. A software engineer must be good with computers.' },

                { type: 'note', text: 'غلط شائع: you is ✗ حتى لو شخص واحد (الصح you are).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Who is "you"?',
                    instructions: 'you هنا شخص معين، ولا أكثر من شخص، ولا الناس عمومًا؟',
                    choices: ['one person', 'a group', 'people in general'],
                    items: [
                        { q: 'Ali, you are late again!', a: 'one person' },
                        { q: 'To be a doctor, you must study for many years.', a: 'people in general' },
                        { q: 'Students, you can go home now.', a: 'a group' },
                        { q: 'You have to wear a uniform in this job.', a: 'people in general' },
                        { q: 'Mum, you are the best cook in the world!', a: 'one person' },
                        { q: 'Team, you played very well today.', a: 'a group' },
                        { q: 'In Saudi Arabia, you can see deserts and mountains.', a: 'people in general' },
                        { q: 'Boys, you have to be quiet in the library.', a: 'a group' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Write a job advert',
                    instructions: 'اكتب جملتين لإعلان وظيفة باستخدام you.',
                    items: [
                        { q: 'Farmer: be fit and strong · work at the weekend', a: 'You must be fit and strong. You have to work at the weekend.' },
                        { q: 'Journalist: be good at writing · have two years’ experience', a: 'You must be good at writing. You have to have two years’ experience.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 5.4 Comparative adjectives (LS ص 120 و121، RW ص 140) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const comparatives: Topic = {
    slug: 'comparative-adjectives',
    title: 'Comparative adjectives',
    titleAr: 'صيغة المقارنة (taller than)',
    keywords: ['comparative', 'comparatives', 'comparative adjectives', 'than', 'more than', 'bigger', 'better', 'worse', 'مقارنة', 'أفعل من', ...base, 'Unit 6', 'Homes and Buildings'],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Comparative adjectives',
            warmup: {
                q: 'وش الصحيح؟',
                choices: ['Chinese is more easier than Spanish.', 'Chinese is more difficult than Spanish.', 'Chinese is most difficult than Spanish.'],
                answer: 1,
                why: 'difficult طويلة، فناخذ more. وما نجمع more مع er.',
            },
            blocks: [
                { type: 'text', text: 'صيغة المقارنة مثل "أطول" و"أرخص" في العربي: تقارن شيئين. نغيّر الصفة ونحط بعدها than (يعني "من"). وكيف تتغير؟ حسب عدد مقاطعها: المقطع جزء ينطق مرة وحدة، cheap مقطع واحد، و pop-u-lar ثلاث مقاطع.' },
                { type: 'formula', parts: [['A', 's'], ['is', 'v'], ['Comparative', 'adj'], ['than', 'x', 'than'], ['B', 'n']] },

                { type: 'heading', text: 'القاعدة 1: صفة قصيرة + er' },
                { type: 'text', view: 'both', text: 'الصفة اللي مقطع واحد ناخذ لها er، وإذا تنتهي بـ e نزيد r بس.' },
                { type: 'formula', parts: [['short adjective', 'adj'], ['+ er', 'x', 'ending'], ['than', 'x', 'than']] },
                { type: 'breakdown', view: 'both', parts: [['The bus', 's'], ['is'], ['cheap', 'adj'], ['er', 'x', '+ er'], ['than', 'x', 'than'], ['a taxi', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Ahmed', 's'], ['is'], ['tall', 'adj'], ['er', 'x', '+ er'], ['than', 'x', 'than'], ['Sami', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My room', 's'], ['is'], ['large', 'adj'], ['r', 'x', 'e + r'], ['than', 'x', 'than'], ['yours', 'n'], ['.', 'p']] },
                { type: 'try', task: 'قارن بينك وبين واحد من عائلتك بـ tall أو old.', placeholder: 'My brother is older than me.' },

                { type: 'heading', text: 'القاعدة 2: نضاعف الحرف الأخير' },
                { type: 'text', view: 'both', text: 'إذا الصفة القصيرة: حرف ساكن + علة + ساكن، نضاعف الأخير.' },
                { type: 'breakdown', view: 'both', parts: [['Riyadh', 's'], ['is'], ['big', 'adj'], ['ger', 'x', 'g → gg + er'], ['than', 'x', 'than'], ['Yanbu', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['Jeddah', 's'], ['is'], ['hot', 'adj'], ['ter', 'x', 't → tt + er'], ['than', 'x', 'than'], ['Taif', 'n'], ['.', 'p']] },
                { type: 'try', task: 'قارن بين مدينتين بـ big أو hot.', placeholder: 'Dammam is hotter than Abha.' },

                { type: 'heading', text: 'القاعدة 3: ساكن + y تصير ier' },
                { type: 'text', view: 'both', text: 'إذا الصفة تنتهي بحرف ساكن ثم y، نشيل y ونحط ier.' },
                { type: 'breakdown', view: 'both', parts: [['A doctor', 's'], ['is'], ['bus', 'adj'], ['ier', 'x', 'y → ier'], ['than', 'x', 'than'], ['a teacher', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['English', 's'], ['is'], ['eas', 'adj'], ['ier', 'x', 'y → ier'], ['than', 'x', 'than'], ['Chinese', 'n'], ['.', 'p']] },
                { type: 'try', task: 'قارن بين يومين في أسبوعك بـ busy.', placeholder: 'Sunday is busier than Friday.' },

                { type: 'heading', text: 'القاعدة 4: صفة طويلة: more' },
                { type: 'text', view: 'both', text: 'مقطعين أو أكثر: more قبل الصفة، والصفة ما تتغير. والعكس less.' },
                { type: 'formula', parts: [['more / less', 'x', 'more'], ['long adjective', 'adj'], ['than', 'x', 'than']] },
                { type: 'breakdown', view: 'both', parts: [['Football', 's'], ['is'], ['more', 'x', 'more'], ['popular', 'adj'], ['than', 'x', 'than'], ['tennis', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A pilot’s job', 's'], ['is'], ['more', 'x', 'more'], ['dangerous', 'adj'], ['than', 'x', 'than'], ['a teacher’s job', 'n'], ['.', 'p']] },
                { type: 'breakdown', parts: [['This car', 's'], ['is'], ['less', 'x', 'less'], ['expensive', 'adj'], ['than', 'x', 'than'], ['that one', 'n'], ['.', 'p']] },
                { type: 'try', task: 'قارن بين وظيفتين بـ more.', placeholder: 'A doctor’s job is more difficult than a chef’s job.' },

                { type: 'heading', text: 'القاعدة 5: الشاذة: good و bad' },
                { type: 'text', view: 'both', text: 'كلمتين ما يمشون على القاعدة وتنحفظ: good (زين) تصير better (أحسن)، و bad (سيء) تصير worse (أسوأ).' },
                { type: 'breakdown', view: 'both', parts: [['good', 'adj'], ['→'], ['better', 'x', 'Irregular']] },
                { type: 'breakdown', view: 'both', parts: [['bad', 'adj'], ['→'], ['worse', 'x', 'Irregular']] },
                { type: 'breakdown', parts: [['My new phone', 's'], ['is'], ['better', 'x', 'good →'], ['than', 'x', 'than'], ['my old phone', 'n'], ['.', 'p']] },
                { type: 'try', task: 'اكتب جملة فيها better أو worse.', placeholder: 'The weather today is better than yesterday.' },

                { type: 'note', text: 'غلط شائع: more taller ✗، و more easy ✗، و gooder ✗، و taller Sami ✗ (ناقص than).' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Make the comparative',
                    instructions: 'اختر صيغة المقارنة.',
                    items: [
                        { q: 'easy', choices: ['easier', 'easyer', 'more easy'], a: 'easier' },
                        { q: 'interesting', choices: ['interestinger', 'more interesting'], a: 'more interesting' },
                        { q: 'good', choices: ['gooder', 'better', 'more good'], a: 'better' },
                        { q: 'hot', choices: ['hoter', 'hotter'], a: 'hotter' },
                        { q: 'bad', choices: ['badder', 'worse'], a: 'worse' },
                        { q: 'modern', choices: ['moderner', 'more modern'], a: 'more modern' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Exam style',
                    instructions: 'نفس شكل أسئلة الكويز.',
                    items: [
                        { q: 'Ahmed is ___ Sami.', choices: ['taller', 'more taller', 'taller than', 'more tall'], a: 'taller than' },
                        { q: 'A truck is ___ than a car.', choices: ['big', 'bigger', 'biggest'], a: 'bigger' },
                        { q: 'This book is ___ interesting than that one.', choices: ['more', 'most', 'much'], a: 'more' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Compare',
                    instructions: 'اكتب جملة مقارنة من المعلومات.',
                    items: [
                        { q: 'Car: 200 km/h · Bike: 30 km/h (fast)', a: 'A car is faster than a bike.' },
                        { q: 'Job A: 5,000 riyals · Job B: 9,000 riyals (good pay)', a: 'Job B has better pay than Job A.' },
                        { q: 'English: easy for me · Chinese: difficult for me', a: 'Chinese is more difficult than English.' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 5.5 Joining sentences with and + writing an email (RW ص 118 إلى 120) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const joiningWithAnd: Topic = {
    slug: 'joining-with-and-email',
    title: 'Joining sentences with and, and writing an email',
    titleAr: 'ربط الجمل بـ and وكتابة إيميل',
    keywords: ['and', 'compound sentence', 'simple sentence', 'joining sentences', 'email', 'greeting', 'closing', 'ربط', 'إيميل', 'بريد', 'جملة مركبة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Joining sentences with and, and writing an email',
            warmup: {
                q: 'وين الفاصلة؟',
                sentence: 'The pay is good and the job is interesting.',
                choices: ['قبل and', 'بعد and', 'ما تحتاج'],
                answer: 0,
                why: 'فاعلين مختلفين (The pay، the job)، فنحط فاصلة قبل and.',
            },
            blocks: [
                { type: 'text', text: 'الجمل القصيرة ورا بعض تحسها مقطعة، فنربطها بـ and. وفيه حالتين حسب الفاعل، وبعدها نكتب إيميل.' },

                { type: 'heading', text: 'الحالة 1: نفس الفاعل، بدون فاصلة' },
                { type: 'text', view: 'both', text: 'الفاعل مرة وحدة، والفكرتين بعده.' },
                { type: 'formula', parts: [['Subject', 's'], ['Idea 1', 'v'], ['and', 'co'], ['Idea 2', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['You', 's'], ['are friendly', 'v', 'Idea 1'], ['and', 'co'], ['good with people', 'n', 'Idea 2'], ['.', 'p']], ar: 'من: You are friendly. You are good with people.' },
                { type: 'breakdown', parts: [['Ali', 's'], ['works in a bank', 'v', 'Idea 1'], ['and', 'co'], ['speaks three languages', 'n', 'Idea 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My sister', 's'], ['is kind', 'v', 'Idea 1'], ['and', 'co'], ['good with children', 'n', 'Idea 2'], ['.', 'p']] },
                { type: 'try', task: 'اربط: My uncle is a farmer. My uncle works on weekends.', reference: 'My uncle is a farmer and works on weekends.', placeholder: 'My uncle is a farmer and …' },

                { type: 'heading', text: 'الحالة 2: فاعلين، , and' },
                { type: 'text', view: 'both', text: 'كل فكرة لها فاعل، وقبل and فاصلة. هذي compound sentence ومطلوبة في تكليف 1.' },
                { type: 'formula', parts: [['Subject 1 + verb', 'v'], [',', 'p'], ['and', 'co'], ['Subject 2 + verb', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['The pay is good', 'v', 'Sentence 1'], [',', 'p'], ['and', 'co'], ['the job is interesting', 'n', 'Sentence 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['My brother is a doctor', 'v', 'Sentence 1'], [',', 'p'], ['and', 'co'], ['my sister is a nurse', 'n', 'Sentence 2'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The job is in Jeddah', 'v', 'Sentence 1'], [',', 'p'], ['and', 'co'], ['the hours are short', 'n', 'Sentence 2'], ['.', 'p']] },
                { type: 'try', task: 'اكتب compound sentence عن وظيفتين في عائلتك.', placeholder: 'My father is an engineer, and my mother is a teacher.' },

                { type: 'heading', text: 'الحالة 3: الإيميل' },
                { type: 'text', view: 'both', text: 'تحية، ثم الموضوع، ثم ختام، ثم اسمك. Hi لصديق و Dear لرسمي.' },
                { type: 'formula', parts: [['Greeting', 's'], ['Body', 'v'], ['Closing', 'n'], ['Name', 'adj']] },
                { type: 'breakdown', view: 'both', parts: [['Hi Omar,', 's', 'Greeting'], ["I hope you're well. I found a great job for you. It's at a hospital, and the pay is good.", 'v', 'Body'], ['Good luck!', 'n', 'Closing'], ['Saad', 'adj', 'Name']] },
                { type: 'breakdown', parts: [['Dear Dr. Saleh,', 's', 'Greeting'], ['I am interested in the job of lab assistant. I am good with computers.', 'v', 'Body'], ['Best wishes,', 'n', 'Closing'], ['Faisal', 'adj', 'Name']], ar: 'رسمي: Dear، وبدون اختصارات.' },
                { type: 'try', task: 'اكتب إيميل قصير لصديقك: "خلنا نتقابل على قهوة، عندي خبر عن شغلي".', placeholder: "Hi …, Let's meet for coffee. … Talk soon, …" },

                { type: 'note', text: 'غلط شائع: فاعلين بدون فاصلة (The pay is good and the job …)، أو فاصلة مع نفس الفاعل (He works, and enjoys …).' },

                // ── التمارين ──
                {
                    type: 'exercise',
                    title: 'Exercise A: Comma or no comma?',
                    instructions: 'الجملة صحيحة؟',
                    choices: ['Correct', 'Wrong'],
                    items: [
                        { q: 'Suzi is healthy and fit.', a: 'Correct' },
                        { q: 'The pay is good and the hours are short.', a: 'Wrong', why: 'فاعلين، تحتاج فاصلة قبل and.' },
                        { q: 'He works at weekends, and enjoys his job.', a: 'Wrong', why: 'نفس الفاعل، بدون فاصلة.' },
                        { q: 'My sister is a nurse, and my brother is a pilot.', a: 'Correct' },
                        { q: 'Omar is kind and helpful.', a: 'Correct' },
                        { q: 'The office is big, and modern.', a: 'Wrong', why: 'صفتين لنفس الفاعل، بدون فاصلة.' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Email parts',
                    instructions: 'هذا من أي جزء في الإيميل؟',
                    choices: ['Greeting', 'Body', 'Closing'],
                    items: [
                        { q: 'Dear Mr. Khalid,', a: 'Greeting' },
                        { q: 'Talk to you soon,', a: 'Closing' },
                        { q: 'The job is in Jeddah, and the pay is good.', a: 'Body' },
                        { q: 'Good luck!', a: 'Closing' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise C: Join the text',
                    instructions: 'اربط الجمل بـ and وخلّ النص 3 جمل بس.',
                    items: [{ q: 'My friend Suzi is a fitness instructor. She is healthy. She is fit. Her pay is good. She enjoys her job.', a: 'My friend Suzi is a fitness instructor. She is healthy and fit. Her pay is good, and she enjoys her job.' }],
                },
            ],
        },
    ],
};

// ─────────────── 5.6 Vocabulary: jobs and workplaces (RW ص 107 و112، LS ص 107) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const jobsVocab: Topic = {
    slug: 'jobs-and-workplaces',
    title: 'Jobs and workplaces',
    titleAr: 'مفردات: الوظائف وأماكن العمل',
    keywords: ['jobs', 'workplaces', 'pay', 'full-time', 'part-time', 'experience', 'company', 'office', 'vet', 'software engineer', 'fitness instructor', 'وظائف', 'شغل', 'مفردات', 'كلمات', 'راتب', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Jobs and workplaces',
            warmup: {
                q: '"He has worked for ten years, so he has a lot of ___."',
                choices: ['pay', 'experience', 'advice'],
                answer: 1,
                why: 'experience = خبرة.',
            },
            blocks: [
                { type: 'text', text: 'نتعلم كلمات الشغل من إعلانات وظائف. الكلمة المهمة ملونة ومعناها تحتها.' },

                { type: 'heading', text: 'المجموعة 1: الدوام والخبرة' },
                { type: 'text', view: 'both', text: 'أول شي في أي إعلان: كم ساعة، وكم خبرة.' },
                { type: 'breakdown', view: 'both', parts: [['NURSE, King Fahd Hospital.'], ['Full-time', 'n', 'دوام كامل'], ['.', 'p']] },
                { type: 'breakdown', parts: [['FITNESS INSTRUCTOR, City Gym.'], ['Part-time', 'n', 'دوام جزئي'], ['(four hours a day)'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You must have two years’'], ['experience', 'n', 'خبرة'], ['.', 'p']] },
                { type: 'try', task: 'اكتب أول سطر لإعلان وظيفة: الوظيفة والدوام.', placeholder: 'CHEF, a restaurant in Jeddah. Full-time.' },

                { type: 'heading', text: 'المجموعة 2: الراتب والشركة' },
                { type: 'breakdown', view: 'both', parts: [['SOFTWARE ENGINEER, a technology'], ['company', 'n', 'شركة'], ['in Riyadh'], ['.', 'p']] },
                { type: 'breakdown', parts: [['The'], ['pay', 'n', 'راتب'], ['is 9,000 riyals a month'], ['.', 'p']], ar: 'ومثلها salary.' },
                { type: 'breakdown', parts: [['If you have a problem, ask your boss for'], ['advice', 'n', 'نصيحة'], ['.', 'p']] },
                { type: 'try', task: 'اكتب سطر الراتب لإعلانك.', placeholder: 'The pay is 7,000 riyals a month.' },

                { type: 'heading', text: 'المجموعة 3: وصف الوظيفة' },
                { type: 'breakdown', view: 'both', parts: [['A mountain guide’s job is'], ['dangerous', 'adj', 'خطير'], ['.', 'p']] },
                { type: 'breakdown', parts: [['An office job is'], ['safe', 'adj', 'آمن'], ['but sometimes'], ['boring', 'adj', 'ممل'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A doctor has a'], ['busy', 'adj', 'مشغول'], ['day'], ['.', 'p']] },
                { type: 'try', task: 'وصّف وظيفة بصفتين.', placeholder: 'A pilot’s job is exciting but dangerous.' },

                { type: 'heading', text: 'المجموعة 4: مكان الشغل' },
                { type: 'formula', parts: [['Job', 's'], ['works in / at', 'v'], ['Workplace', 'n']] },
                { type: 'breakdown', view: 'both', parts: [['A vet', 's'], ['works in', 'v'], ['an animal clinic', 'n', 'عيادة حيوانات'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A footballer', 's'], ['plays in', 'v'], ['a stadium', 'n', 'ملعب'], ['.', 'p']] },
                { type: 'breakdown', parts: [['A manager', 's'], ['works in', 'v'], ['an office', 'n', 'مكتب'], ['.', 'p']] },
                { type: 'try', task: 'وش وظيفة أحلامك ووين مكانها؟', placeholder: 'My dream job is a pilot. Pilots work at airports.' },

                { type: 'note', text: 'غلط شائع: experiences ✗ بمعنى خبرة (الصح experience)، و advices ✗ (الصح advice).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Exam style',
                    instructions: 'نفس شكل قسم Vocabulary في الكويز.',
                    items: [
                        { q: 'Ahmad is a mountain guide. He ___ tall mountains with tourists every week.', choices: ['walks', 'arrives', 'goes', 'climbs'], a: 'climbs' },
                        { q: 'His job is ___ because the mountains are high and the weather changes fast.', choices: ['safe', 'dangerous', 'busy', 'boring'], a: 'dangerous' },
                        { q: 'He does not save much money because his ___ is very low.', choices: ['job', 'experience', 'pay', 'money'], a: 'pay' },
                        { q: 'If Ahmad has a problem, he asks his boss for useful ___.', choices: ['advice', 'experience', 'pay', 'view'], a: 'advice' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Where do they work?',
                    instructions: 'اختر مكان الشغل.',
                    items: [
                        { q: 'a vet', choices: ['animal clinic', 'stadium'], a: 'animal clinic' },
                        { q: 'a manager', choices: ['office', 'farm'], a: 'office' },
                        { q: 'a farmer', choices: ['farm', 'gym'], a: 'farm' },
                        { q: 'a footballer', choices: ['stadium', 'office'], a: 'stadium' },
                        { q: 'a fitness instructor', choices: ['gym', 'clinic'], a: 'gym' },
                        { q: 'a nurse', choices: ['hospital', 'farm'], a: 'hospital' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── 5.7 Skills: reading for detail، listening for opinions، evaluating opinions (RW ص 108 و114، LS ص 109 و113) ───────────────
// نمط أول أربع دروس: كل قسم: سطر ← معادلة ← جمل ملونة ← كتابة.
const unit5Skills: Topic = {
    slug: 'reading-for-detail-opinions',
    title: 'Reading for detail and listening for opinions',
    titleAr: 'مهارات: القراءة للتفاصيل والاستماع للآراء',
    keywords: ['reading for detail', 'listening for opinions', 'opinions', 'likert scale', 'agree', 'disagree', 'مهارات', 'رأي', 'تفاصيل', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Reading for detail and listening for opinions',
            warmup: {
                q: '"I think the job is very interesting." هذي:',
                choices: ['معلومة (fact)', 'رأي (opinion)'],
                answer: 1,
                why: 'I think = رأي.',
            },
            blocks: [
                { type: 'text', text: 'مهارتين: تلقى تفصيلة في إعلان، وتفرق بين المعلومة والرأي.' },

                { type: 'heading', text: 'المهارة 1: Reading for detail' },
                { type: 'text', view: 'both', text: 'اقرأ السؤال، وطلّع الكلمة المهمة، ودوّرها في النص، واقرأ جملتها بتمعن.' },
                { type: 'formula', parts: [['Question', 's'], ['→'], ['Key word', 'x', 'Key word'], ['→'], ['Answer', 'v']] },
                { type: 'example', view: 'both', en: 'Renji Hospital, Shanghai. We are looking for a nurse. You must have five years’ experience and speak Chinese and English. Pay: 16,800 per month. Full time.' },
                { type: 'breakdown', view: 'both', parts: [['How much experience do you need?', 's', 'Question'], ['experience', 'x', 'Key word'], ['five years', 'v', 'Answer']] },
                { type: 'breakdown', parts: [['What languages do you need?', 's', 'Question'], ['speak', 'x', 'Key word'], ['Chinese and English', 'v', 'Answer']] },
                { type: 'breakdown', parts: [['Is the job part time?', 's', 'Question'], ['time', 'x', 'Key word'], ['No, full time', 'v', 'Answer']] },
                { type: 'try', task: 'من نفس الإعلان: كم الراتب؟', reference: '16,800 per month.', placeholder: '…' },

                { type: 'heading', text: 'المهارة 2: Fact' },
                { type: 'text', view: 'both', text: 'المعلومة صحيحة للكل، وتقدر تتأكد منها.' },
                { type: 'breakdown', view: 'both', parts: [['Pilots work at night.', 's', 'Fact']] },
                { type: 'breakdown', parts: [['The job is in Shanghai.', 's', 'Fact']] },
                { type: 'breakdown', parts: [['The pay is 5,000 dollars a month.', 's', 'Fact']] },
                { type: 'try', task: 'اكتب معلومة (fact) عن وظيفة.', placeholder: 'Nurses work in hospitals.' },

                { type: 'heading', text: 'المهارة 3: Opinion' },
                { type: 'text', view: 'both', text: 'الرأي يختلف من شخص لشخص، وتعرفه من كلمات مثل I think و In my opinion و should.' },
                { type: 'breakdown', view: 'both', parts: [['I think', 'x', 'Opinion word'], ['Sara is the best person for the job.', 'v']] },
                { type: 'breakdown', parts: [['In my opinion,', 'x', 'Opinion word'], ['nurses should get more money.', 'v']] },
                { type: 'breakdown', parts: [['I agree.', 'x', 'Opinion word'], ['A pilot’s job is very exciting.', 'v']] },
                { type: 'try', task: 'اكتب رأيك عن وظيفة تحبها.', placeholder: 'I think nursing is a great job.' },

                { type: 'note', text: 'في الاستماع، الرأي يجي بعد I think أو because. والمقياس من 1 (strongly disagree) لين 5 (strongly agree).' },


                {
                    type: 'exercise',
                    title: 'Exercise A: Fact or opinion?',
                    instructions: 'معلومة ولا رأي؟',
                    choices: ['fact', 'opinion'],
                    items: [
                        { q: 'The job is in Shanghai.', a: 'fact' },
                        { q: 'I think Sara is the best person for the job.', a: 'opinion' },
                        { q: 'The pay is 5,000 dollars a month.', a: 'fact' },
                        { q: 'In my opinion, nurses should get more money.', a: 'opinion' },
                        { q: 'Nurses work in hospitals.', a: 'fact' },
                        { q: 'I think a pilot’s job is exciting.', a: 'opinion' },
                        { q: 'He should get the job because he is friendly.', a: 'opinion' },
                    ],
                },
                {
                    type: 'exercise',
                    title: 'Exercise B: Read for detail',
                    instructions: 'الإعلان: "FlyHigh Air Transport Company. We are looking for a pilot. You must have two years’ experience and you have to work weekends. Pay: 200,000 per year. Part time."',
                    items: [
                        { q: 'What is the job?', choices: ['a pilot', 'a driver'], a: 'a pilot' },
                        { q: 'Do you have to work weekends?', choices: ['yes', 'no'], a: 'yes' },
                        { q: 'Is the job full time?', choices: ['yes', 'no'], a: 'no' },
                    ],
                },
            ],
        },
    ],
};

// ─────────────── مهمة الوحدة 5: email about a job + choose a person (RW ص 120 إلى 122، LS ص 125) ───────────────
// نمط أول أربع دروس: الإيميل جزء جزء، كل جزء: جمل ملونة ← كتابة.
const unit5Task: Topic = {
    slug: 'email-about-a-job',
    title: 'Writing task: an email about a job',
    titleAr: 'مهمة الوحدة: إيميل عن وظيفة',
    keywords: ['writing task', 'email', 'job email', 'email about a job', 'choose a person for a job', 'إيميل', 'كتابة', 'وظيفة', ...base],
    lessons: [
        {
            course: COURSE,
            unit: UNIT,
            title: 'Writing task: an email about a job',
            warmup: {
                q: 'الإيميل لصديقك يبدأ بـ:',
                choices: ['Hi Saad,', 'To whom it may concern', 'Yours faithfully'],
                answer: 0,
                why: 'الإيميل لصديق غير رسمي: Hi + الاسم + فاصلة.',
            },
            blocks: [
                { type: 'text', text: 'المهمة: إيميل لزميلك عن وظيفة تناسبه. نبنيه 4 أجزاء، وبعد كل جزء تكتب جزءك.' },

                { type: 'heading', text: 'النموذج اللي بنبنيه' },
                { type: 'example', view: 'both', en: "Hi Mona,\nI hope you're well. I have a great job for you. It's for a vet nurse at an animal clinic in Abha. You must be good with animals, and you have to be kind and patient. You don't have to have experience. The job is full-time, and the pay is good.\nTalk soon,\nReem" },
                { type: 'text', text: 'الحين نفككه 4 أجزاء: التحية، ثم الوظيفة، ثم الشخص المطلوب، ثم الدوام والختام.' },

                { type: 'heading', text: 'الجزء 1: التحية' },
                { type: 'breakdown', view: 'both', parts: [['Hi Mona,', 's', 'Greeting'], ["I hope you're well.", 'v'], ['I have a great job for you.', 'v']] },
                { type: 'try', task: 'اكتب التحية وأول جملة.', placeholder: "Hi …, I hope you're well." },

                { type: 'heading', text: 'الجزء 2: الوظيفة ووينها' },
                { type: 'breakdown', view: 'both', parts: [["It's for", 'v'], ['a vet nurse', 'n', 'Job'], ['at an animal clinic in Abha', 'x', 'Where?'], ['.', 'p']] },
                { type: 'try', task: 'اكتب وش الوظيفة ووينها.', placeholder: "It's for a … at …" },

                { type: 'heading', text: 'الجزء 3: الشخص المطلوب' },
                { type: 'text', view: 'both', text: "must و have to للازم، و don't have to لمو لازم، وصفات مثل good with." },
                { type: 'breakdown', view: 'both', parts: [['You', 's'], ['must', 'hv'], ['be', 'v'], ['good with animals', 'adj', 'Adjective phrase'], [',', 'p'], ['and', 'co'], ['you', 's'], ['have to', 'hv'], ['be', 'v'], ['kind and patient', 'adj'], ['.', 'p']] },
                { type: 'breakdown', parts: [['You', 's'], ["don't have to", 'hv'], ['have', 'v'], ['experience'], ['.', 'p']] },
                { type: 'try', task: 'اكتب وش لازم يكون الشخص، وشي مو لازم.', placeholder: "You must be … You don't have to …" },

                { type: 'heading', text: 'الجزء 4: الدوام والراتب والختام' },
                { type: 'breakdown', view: 'both', parts: [['The job is full-time', 'v'], [',', 'p'], ['and', 'co'], ['the pay is good', 'n'], ['.', 'p'], ['Talk soon,', 's', 'Closing'], ['Reem', 'adj', 'Name']] },
                { type: 'try', task: 'اكتب الدوام والراتب والختام.', placeholder: 'The job is …, and the pay is … Talk soon, …' },

                { type: 'heading', text: 'اجمع الأجزاء' },
                { type: 'note', text: 'قبل ما ترسل: تحية وختام، و must / have to صحيحة، وفاصلة قبل and إذا الفاعلين مختلفين.' },
                { type: 'try', view: 'both', task: 'اجمع الأجزاء: الإيميل كامل لزميلك.', placeholder: 'Hi …,' },

                { type: 'heading', text: 'التحدث: اختر شخص للوظيفة' },
                { type: 'text', view: 'both', text: 'رأيك، وبعده because، وبعده مقارنة.' },
                { type: 'breakdown', view: 'both', parts: [['I think', 'x', 'Opinion'], ['Faisal is better for the job', 'v'], ['because', 'co'], ['he is more experienced than Omar', 'adj', 'Comparative'], ['.', 'p']] },
                { type: 'try', task: 'شخصين يبون وظيفة مدرس: واحد صبور، وواحد عنده خبرة. مين تختار وليش؟', placeholder: 'I think … should get the job because …' },

                {
                    type: 'exercise',
                    title: 'Exercise A: Check the email',
                    instructions: 'هذي جمل من إيميل طالب. اختر الصحيح.',
                    items: [
                        { q: '___ Omar,', choices: ['Hi', 'Yours'], a: 'Hi' },
                        { q: 'You ___ be good with people.', choices: ['must', 'must to'], a: 'must' },
                        { q: 'She ___ to work at weekends.', choices: ['have', 'has'], a: 'has' },
                        { q: 'You ___ have experience. It is not necessary.', choices: ["mustn't", "don't have to"], a: "don't have to" },
                        { q: 'You must be good ___ children.', choices: ['at', 'with'], a: 'with' },
                        { q: 'Choose the correct sentence.', choices: ['The job is full-time, and the pay is good.', 'The job is full-time and, the pay is good.'], a: 'The job is full-time, and the pay is good.' },
                        { q: 'Faisal is ___ than Omar.', choices: ['more experienced', 'experienceder'], a: 'more experienced' },
                        { q: 'Best closing for a friend:', choices: ['Talk soon,', 'Dear Sir,'], a: 'Talk soon,' },
                    ],
                },
            ],
        },
    ],
};

export const UNIT5_TOPICS: Topic[] = [adjectivePhrases, modals, pronounYou, comparatives, joiningWithAnd, jobsVocab, unit5Skills, unit5Task];
