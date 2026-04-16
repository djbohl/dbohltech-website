'use client'

import { Bebas_Neue } from 'next/font/google'
import QRCode from 'react-qr-code'
import html2canvas from 'html2canvas'
import { useRef } from 'react'
import styles from './card.module.css'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

export default function CardPage() {
  const cardRef = useRef<HTMLDivElement>(null)

  const downloadCardPNG = async () => {
    if (!cardRef.current) return

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3, // High DPI for quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      })

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'dbohltech-business-card.png'
      link.click()
    } catch (err) {
      console.error('Failed to download card:', err)
    }
  }

  return (
    <main className={`${styles.page} ${bebas.variable}`}>
      {/* ── Business Card ─── */}
      <div className={styles.cardWrap} ref={cardRef}>
        <div className={styles.card}>
          <div className={styles.glow} />

          <div className={styles.top}>
            <div className={styles.name}>DBOHLTECH</div>
            <div className={styles.title}>Donna Bohl</div>
          </div>

          <div className={styles.logo}>
            <img src="/site/logo.png" alt="dbohltech logo" />
          </div>

          <div className={styles.bottom}>
            <div className={styles.contacts}>
              <div className={styles.contactItem}>
                <span className={styles.dot} />
                contact@dbohl.tech
              </div>
              <div className={styles.contactItem}>
                <span className={styles.dot} />
                267-907-5601
              </div>
              <div className={styles.contactItem}>
                <span className={styles.dot} />
                dbohl.tech
              </div>
            </div>

            <div className={styles.github}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <div className={styles.githubLabel}>GitHub</div>
              <div className={styles.githubHandle}>djbohl</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ─── */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <div className={styles.dividerText}>Scan to connect</div>
        <div className={styles.dividerLine} />
      </div>

      {/* ── QR Code ─── */}
      <div className={styles.sharePanel}>
        <div className={styles.shareLabel}>Share</div>
        <div className={styles.qrBracket}>
          <div className={`${styles.bracketCorner} ${styles.tl}`} />
          <div className={`${styles.bracketCorner} ${styles.tr}`} />
          <div className={`${styles.bracketCorner} ${styles.bl}`} />
          <div className={`${styles.bracketCorner} ${styles.br}`} />
          <QRCode
            value="https://card.dbohl.tech"
            size={110}
            fgColor="#ccf8ff"
            bgColor="#0d0d0d"
          />
        </div>
        <div className={styles.qrUrl}>card.dbohl.tech</div>
      </div>

      {/* ── Download Button ─── */}
      <button className={styles.printBtn} onClick={downloadCardPNG}>
        Download as PNG
      </button>

    </main>
  )
}
