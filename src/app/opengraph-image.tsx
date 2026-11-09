import { ImageResponse } from 'next/og'

// الصورة اللي تطلع لما ينرسل رابط الموقع في الواتساب وتويتر وغيرها.
// النص إنجليزي لأن خط الصور الافتراضي ما يدعم العربي.
export const alt = 'EsprEngl'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #2A1A1D 0%, #5A1520 50%, #7a1f2b 100%)',
                    color: '#ffffff',
                    fontFamily: 'Georgia, serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'flex-end', fontStyle: 'italic', fontWeight: 700 }}>
                    <span style={{ fontSize: 80, color: '#E4A3AB', marginBottom: 40 }}>Espr</span>
                    <span style={{ fontSize: 170 }}>Engl</span>
                </div>
                <div style={{ fontSize: 40, color: '#F3DADD', marginTop: 20, letterSpacing: 2 }}>English courses, explained like your class</div>
                <div style={{ fontSize: 30, color: '#E4A3AB', marginTop: 18, letterSpacing: 8 }}>YIC</div>
            </div>
        ),
        size,
    )
}
