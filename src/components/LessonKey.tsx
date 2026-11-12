'use client'

import { createContext, useContext } from 'react'

// اسم الدرس الحالي (topic/course)، عشان الأسئلة والتمارين تعرف لأي درس تسجل نقاطها.
// بدون مزود (مثل صفحات الجلسات) ما تنسجل نقاط.
const LessonKeyContext = createContext<string>('')

export function LessonKeyProvider({ lessonKey, children }: { lessonKey: string; children: React.ReactNode }) {
    return <LessonKeyContext.Provider value={lessonKey}>{children}</LessonKeyContext.Provider>
}

export const useLessonKey = () => useContext(LessonKeyContext)
