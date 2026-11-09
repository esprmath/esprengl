import { ImageResponse } from 'next/og'

// أيقونة الموقع لما أحد يضيفه للشاشة الرئيسية في الآيفون
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
                    color: '#ffffff',
                    fontSize: 120,
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
