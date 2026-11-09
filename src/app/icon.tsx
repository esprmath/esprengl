import { ImageResponse } from 'next/og'

// أيقونة الموقع (تطلع في تبويب المتصفح وجنب اسم الموقع في نتائج قوقل): مربع عنابي فيه حرف E
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#7a1f2b',
                    borderRadius: 14,
                    color: '#ffffff',
                    fontSize: 44,
                    fontWeight: 700,
                    fontStyle: 'italic',
                    fontFamily: 'Georgia, serif',
                }}
            >
                E
            </div>
        ),
        size,
    )
}
