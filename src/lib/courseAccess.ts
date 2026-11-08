// src/lib/courseAccess.ts
// قواعد الفتح المشتركة بين صفحة الكورس ولوحة التحكم.

export interface CourseModule {
    id: number;
    course_id: string;
    module_number: number;
    title: string;
    description: string;
    chapters: string[];
    is_open: boolean;
    is_free: boolean;
    opens_at: string | null;
    closes_at: string | null;
}

export type WindowStatus = 'open' | 'scheduled' | 'expired' | 'closed';

export function windowStatus(item: { is_open: boolean; opens_at: string | null; closes_at: string | null }): WindowStatus {
    if (!item.is_open) return 'closed';
    const now = Date.now();
    if (item.opens_at && now < new Date(item.opens_at).getTime()) return 'scheduled';
    if (item.closes_at && now > new Date(item.closes_at).getTime()) return 'expired';
    return 'open';
}

// الاختبارات التي لها صفحة جاهزة في الموقع
const QUIZ_PAGES: Record<string, string[]> = {
    // مثال: '101': ['quiz-1', 'final-review'],
};

export const hasQuizPage = (courseId: string, quizId: string) => QUIZ_PAGES[courseId]?.includes(quizId) ?? false;

export const quizPath = (courseId: string, quizId: string) =>
    quizId === 'final-review' ? `/workspace/${courseId}/final-review` : `/workspace/${courseId}/quizzes/${quizId}`;

// تُستخدم إذا لم يُشغَّل ملف SQL بعد، حتى لا تفرغ صفحة الكورس
export const FALLBACK_MODULES: Record<string, Omit<CourseModule, 'id' | 'course_id' | 'opens_at' | 'closes_at'>[]> = {};
