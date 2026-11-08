// جلسات التحسين العام.
// كل الجلسات لها نفس القالب الثابت (SECTIONS): كلمات، قاعدة، قراءة، استماع، نطق، كتابة.
// اللي يتغير من جلسة لجلسة هو المحتوى، فالطالب ما يعيد نفس الشي.
// الجلسة كاملة حوالي 25 دقيقة، تنخلص في قعدة وحدة.
//
// لإضافة جلسة: انسخ آخر جلسة، وغيّر slug (حروف إنجليزية صغيرة وشرطات) والمحتوى.
// لا تغيّر slug جلسة منشورة، لأنه اللي ينحفظ للطالب إنه خلصها.
// الاستماع والنطق يقرأهم المتصفح بصوت إنجليزي، فما تحتاج ملفات صوت.

/** الفكرة موقفة حاليًا والموقع مصادر فقط. حطها true عشان يرجع تبويب الجلسات وصفحاتها */
export const SESSIONS_ENABLED = false;

export interface Choice {
    q: string;
    options: string[];
    /** رقم الخيار الصحيح، يبدأ من 0 */
    answer: number;
}

export interface Session {
    slug: string;
    /** موضوع الجلسة بالعربي، تدور حوله كل الأقسام */
    theme: string;
    icon: string;
    words: { en: string; ar: string; example: string }[];
    grammar: { title: string; explain: string; examples: string[]; check: Choice };
    reading: { text: string; questions: Choice[] };
    /** النص يُقرأ بصوت ويبقى مخفي حتى يجاوب الطالب */
    listening: { text: string; question: Choice };
    speaking: { sentences: string[]; prompt: string };
    writing: { prompt: string; minWords: number };
}

export type SectionKey = 'words' | 'grammar' | 'reading' | 'listening' | 'speaking' | 'writing';

/** القالب الثابت لكل جلسة، بالترتيب */
export const SECTIONS: { key: SectionKey; label: string; icon: string; minutes: number }[] = [
    { key: 'words', label: 'كلمات جديدة', icon: '🧠', minutes: 4 },
    { key: 'grammar', label: 'قاعدة تنتبه لها', icon: '📐', minutes: 3 },
    { key: 'reading', label: 'قراءة', icon: '📖', minutes: 5 },
    { key: 'listening', label: 'استماع', icon: '🎧', minutes: 4 },
    { key: 'speaking', label: 'نطق ومحادثة', icon: '🗣️', minutes: 4 },
    { key: 'writing', label: 'كتابة', icon: '✍️', minutes: 5 },
];

export const SESSION_MINUTES = SECTIONS.reduce((sum, s) => sum + s.minutes, 0);

export const SESSIONS: Session[] = [
    {
        slug: 'college-day',
        theme: 'يومي في الكلية',
        icon: '🎒',
        words: [
            { en: 'schedule', ar: 'جدول', example: 'I check my schedule every morning.' },
            { en: 'lecture', ar: 'محاضرة', example: 'My first lecture starts at eight.' },
            { en: 'assignment', ar: 'واجب / تكليف', example: 'The assignment is about climate change.' },
            { en: 'deadline', ar: 'آخر موعد للتسليم', example: 'The deadline is next Sunday.' },
            { en: 'library', ar: 'مكتبة', example: 'I study in the library after class.' },
        ],
        grammar: {
            title: 'Present simple مع he و she و it',
            explain: 'للعادات والأشياء اللي تتكرر نستخدم المضارع البسيط. ومع he و she و it نضيف s أو es للفعل.',
            examples: ['He studies every night.', 'She goes to the library on Mondays.', 'It starts at eight.'],
            check: { q: 'أي جملة صحيحة؟', options: ['He study every night.', 'He studies every night.', 'He studying every night.'], answer: 1 },
        },
        reading: {
            text: 'Omar is a first-year student. He wakes up at six thirty every morning and checks his schedule. His first lecture starts at eight. After class, he usually goes to the library because it is quiet. He finishes his assignments there before the deadline. In the evening, he plays football with his friends. Omar says that a clear schedule helps him stay calm.',
            questions: [
                { q: 'Why does Omar go to the library?', options: ['It is quiet.', 'It is near his house.', 'His friends are there.'], answer: 0 },
                { q: 'What helps Omar stay calm?', options: ['Football', 'A clear schedule', 'Coffee'], answer: 1 },
            ],
        },
        listening: {
            text: "Hi, I'm Lina. I study nursing. On Mondays I have three lectures, so I bring my lunch from home. On Thursdays I only have one class, and I spend the afternoon with my family.",
            question: { q: 'How many lectures does Lina have on Mondays?', options: ['One', 'Two', 'Three'], answer: 2 },
        },
        speaking: {
            sentences: ['I check my schedule every morning.', 'She finishes her assignment before the deadline.', 'My first lecture starts at eight.'],
            prompt: 'تكلم دقيقة عن يومك في الكلية، واستخدم كلمتين على الأقل من كلمات اليوم.',
        },
        writing: { prompt: 'اكتب 5 جمل عن يومك المعتاد. استخدم المضارع البسيط و3 كلمات جديدة على الأقل.', minWords: 40 },
    },
    {
        slug: 'shopping',
        theme: 'التسوق والأسعار',
        icon: '🛍️',
        words: [
            { en: 'receipt', ar: 'فاتورة / إيصال', example: 'Keep the receipt in case you return it.' },
            { en: 'discount', ar: 'خصم', example: 'There is a 20% discount today.' },
            { en: 'cash', ar: 'كاش / نقد', example: 'Can I pay in cash?' },
            { en: 'expensive', ar: 'غالي', example: 'This phone is too expensive.' },
            { en: 'compare', ar: 'يقارن', example: 'I always compare prices online.' },
        ],
        grammar: {
            title: 'Past simple للأفعال المنتظمة',
            explain: 'للكلام عن شي صار وخلص في الماضي، نضيف ed للفعل المنتظم. ومع النفي والسؤال نستخدم did والفعل يرجع لأصله.',
            examples: ['She compared the prices.', 'I paid in cash.', "He didn't keep the receipt."],
            check: { q: 'Yesterday I ___ prices in two shops.', options: ['compare', 'compared', 'comparing'], answer: 1 },
        },
        reading: {
            text: 'Sara wanted a new laptop for college. She did not buy the first one she saw. She compared prices in three shops and online. One shop had a big discount, but the laptop was old. In the end, she paid in cash in a small shop near her house. She kept the receipt in case she needed to return it.',
            questions: [
                { q: 'Where did Sara buy the laptop?', options: ['Online', 'In a small shop near her house', 'In the first shop'], answer: 1 },
                { q: 'Why did she keep the receipt?', options: ['To return the laptop if needed', 'To get a discount', 'To show her friends'], answer: 0 },
            ],
        },
        listening: {
            text: "Excuse me, how much is this jacket? It's two hundred riyals, but today there is a twenty percent discount. Great, can I pay by card? Sorry, we only accept cash today.",
            question: { q: 'How can the customer pay today?', options: ['By card', 'Only in cash', 'Online'], answer: 1 },
        },
        speaking: {
            sentences: ['I compared the prices before I bought it.', 'Can I have the receipt, please?', "It's too expensive for me."],
            prompt: 'تكلم دقيقة عن آخر شي اشتريته: وش هو، ومن وين، وكم سعره؟',
        },
        writing: { prompt: 'اكتب رسالة قصيرة لصديقك عن شي اشتريته الأسبوع الماضي. استخدم الماضي البسيط.', minWords: 40 },
    },
    {
        slug: 'travel-plans',
        theme: 'السفر والخطط',
        icon: '✈️',
        words: [
            { en: 'destination', ar: 'الوجهة', example: 'Our first destination is Kuala Lumpur.' },
            { en: 'luggage', ar: 'العفش / الشنط', example: 'My luggage is too heavy.' },
            { en: 'booking', ar: 'حجز', example: 'I made the booking online.' },
            { en: 'flight', ar: 'رحلة طيران', example: 'The flight leaves at nine.' },
            { en: 'explore', ar: 'يستكشف', example: 'We want to explore the old city.' },
        ],
        grammar: {
            title: 'going to للخطط',
            explain: 'للخطط اللي قررتها من قبل نستخدم am أو is أو are ثم going to ثم الفعل بأصله.',
            examples: ['I am going to travel next month.', 'She is going to visit Jeddah.', 'We are going to explore the city.'],
            check: { q: 'Next week, we ___ visit our grandparents.', options: ['are going to', 'going to', 'is going'], answer: 0 },
        },
        reading: {
            text: 'Faisal and his brother are going to travel to Malaysia next month. They made their booking two weeks ago because flights get expensive in summer. Their first destination is Kuala Lumpur. They are going to stay there for four days and explore the city. Faisal is going to pack light luggage, only one small bag, so he can move easily.',
            questions: [
                { q: 'Why did they book early?', options: ['Flights get expensive in summer.', 'They had a discount.', 'The hotel was full.'], answer: 0 },
                { q: 'How long are they going to stay in Kuala Lumpur?', options: ['Two days', 'Four days', 'Seven days'], answer: 1 },
            ],
        },
        listening: {
            text: 'Good morning. This is a message for passengers on flight 302 to Dubai. The flight is going to leave from gate twelve, not gate five. Boarding is going to start at nine fifteen.',
            question: { q: 'Which gate is the flight going to leave from?', options: ['Gate five', 'Gate twelve', 'Gate fifteen'], answer: 1 },
        },
        speaking: {
            sentences: ['We are going to explore the old city.', 'My luggage is too heavy.', 'I made the booking online.'],
            prompt: 'تكلم دقيقة عن رحلة تبي تسويها: وين بتروح، ووش بتسوي هناك؟',
        },
        writing: { prompt: 'اكتب عن خططك للإجازة الجاية. استخدم going to ثلاث مرات على الأقل.', minWords: 40 },
    },
];

export const findSession = (slug: string) => SESSIONS.find((s) => s.slug === slug);

/** أول جلسة ما خلصها الطالب، ولو خلصها كلها يرجع null */
export const nextSession = (completed: Set<string>) => SESSIONS.find((s) => !completed.has(s.slug)) ?? null;
