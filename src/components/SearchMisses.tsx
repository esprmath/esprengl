'use client';

// للمشرف في الصفحة الرئيسية: وش بحث عنه الطلاب وما لقوا له درس.

import { useCallback, useEffect, useState } from 'react';
import { deleteSearchMiss, fetchSearchMisses, type SearchMissRow } from '@/lib/searchLog';

const PRIMARY = '#7a1f2b';

export function SearchMisses() {
    const [rows, setRows] = useState<SearchMissRow[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const load = useCallback(async () => {
        setLoading(true);
        const res = await fetchSearchMisses();
        setRows(res.rows);
        setError(res.error);
        setLoading(false);
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const remove = async (query: string) => {
        const err = await deleteSearchMiss(query);
        if (err) setError(err);
        else setRows((r) => r.filter((x) => x.query !== query));
    };

    return (
        <div style={{ background: '#ffffff', border: '1px solid #ecdcdd', borderRadius: '14px', padding: '18px' }}>
            <p style={{ margin: '0 0 14px', color: '#6B5357', fontSize: '0.92rem', lineHeight: 1.8 }}>
                الكلمات اللي بحث عنها الطلاب في EsprEngl آخر 60 يوم وما طلع لها درس. الأكثر بحثًا أول، فهي أولى درس تكتبه.
                لما تضيف الدرس احذف الكلمة من هنا.
            </p>

            {loading ? (
                <p style={{ color: '#9b8a8d' }}>جاري التحميل…</p>
            ) : error ? (
                <p style={{ color: '#B42318', fontWeight: 'bold' }}>{error}</p>
            ) : rows.length === 0 ? (
                <p style={{ color: '#9b8a8d' }}>ما فيه شي للحين. كل ما بحث طالب عن شي وما لقاه بيطلع هنا.</p>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                        <thead>
                            <tr style={{ color: '#6B5357', textAlign: 'right' }}>
                                <th style={{ padding: '8px' }}>الكلمة</th>
                                <th style={{ padding: '8px' }}>عدد مرات البحث</th>
                                <th style={{ padding: '8px' }}>عدد الطلاب تقريبًا</th>
                                <th style={{ padding: '8px' }}>آخر مرة</th>
                                <th style={{ padding: '8px' }} />
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((r) => (
                                <tr key={r.query} style={{ borderTop: '1px solid #ecdcdd' }}>
                                    <td style={{ padding: '8px', fontWeight: 'bold' }}>
                                        <bdi>{r.query}</bdi>
                                    </td>
                                    <td style={{ padding: '8px', color: PRIMARY, fontWeight: 'bold' }}>{r.count}</td>
                                    <td style={{ padding: '8px' }}>{r.users}</td>
                                    <td style={{ padding: '8px', color: '#6B5357' }}>{new Date(r.last).toLocaleDateString('ar-SA')}</td>
                                    <td style={{ padding: '8px' }}>
                                        <button
                                            onClick={() => remove(r.query)}
                                            style={{ background: 'none', border: '1px solid #ecdcdd', borderRadius: '8px', padding: '4px 10px', color: '#6B5357', cursor: 'pointer', fontSize: '0.8rem' }}
                                        >
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
