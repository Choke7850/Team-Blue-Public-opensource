'use client';

import { useState } from 'react';

export default function UserPage() {
  const [cheerCount, setCheerCount] = useState(1420);
  const [hasCheered, setHasCheered] = useState(false);

  const handleCheer = () => {
    if (!hasCheered) {
      setCheerCount(prev => prev + 1);
      setHasCheered(true);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo-badge">
          <div className="user-icon">💙</div>
          <div className="logo-text">
            <h1>TEAM BLUE — FAN & STUDENT PORTAL</h1>
            <span>ศูนย์รวมพลังใจและกองเชียร์ คณะสีฟ้า</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div className="status-badge">
            <div className="pulse-dot"></div>
            <span>PORT 3008 • LIVE NOW</span>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <span className="hero-tag">Official Blue House Portal</span>
        <h2 className="hero-title">สีฟ้ารวมใจ ก้าวสู่ชัยชนะไปด้วยกัน! 🏆⚡</h2>
        <p className="hero-subtitle">
          ติดตามผลการแข่งขันสด ตารางเชียร์ ชนิดกีฬาที่ลงแข่ง และร่วมส่งเสียงเชียร์เป็นกำลังใจให้นักกีฬาคณะสีฟ้า
        </p>

        <div style={{ marginTop: '1.5rem' }}>
          <button
            onClick={handleCheer}
            style={{
              padding: '0.85rem 2rem',
              fontSize: '1.05rem',
              fontWeight: 800,
              background: hasCheered ? 'rgba(59, 130, 246, 0.4)' : 'linear-gradient(135deg, #38bdf8, #2563eb)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              cursor: hasCheered ? 'default' : 'pointer',
              boxShadow: hasCheered ? 'none' : '0 0 25px rgba(56, 189, 248, 0.6)',
              transition: 'all 0.25s ease'
            }}
          >
            {hasCheered ? '💙 ขอบคุณที่ร่วมส่งใจเชียร์!' : `💙 กดส่งพลังใจให้สีฟ้า (${cheerCount.toLocaleString()} ดวง)`}
          </button>
        </div>
      </section>

      {/* Live Medal Standings */}
      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem' }}>
        🥇 ตารางเหรียญรางวัลของคณะสีฟ้า (Medal Standings)
      </h3>
      <div className="grid-medals">
        <div className="medal-card">
          <div className="medal-icon">🥇</div>
          <div className="medal-count" style={{ color: 'var(--gold)' }}>12</div>
          <div className="medal-type">เหรียญทอง (Gold)</div>
        </div>
        <div className="medal-card">
          <div className="medal-icon">🥈</div>
          <div className="medal-count" style={{ color: 'var(--silver)' }}>8</div>
          <div className="medal-type">เหรียญเงิน (Silver)</div>
        </div>
        <div className="medal-card">
          <div className="medal-icon">🥉</div>
          <div className="medal-count" style={{ color: 'var(--bronze)' }}>5</div>
          <div className="medal-type">เหรียญทองแดง (Bronze)</div>
        </div>
        <div className="medal-card">
          <div className="medal-icon">🏆</div>
          <div className="medal-count" style={{ color: 'var(--blue-bright)' }}>3,850</div>
          <div className="medal-type">คะแนนรวมสะสม (อันดับ 1)</div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid-cards">
        {/* Match Schedule */}
        <div className="content-card">
          <h3>📅 ตารางแข่งถัดไปที่ต้องร่วมเชียร์</h3>
          <div style={{ marginTop: '1rem' }}>
            <div className="schedule-item">
              <div>
                <div style={{ fontWeight: 600 }}>ฟุตบอลชาย รอบชิงชนะเลิศ</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>สนามใหญ่ • 13:30 น.</div>
              </div>
              <span style={{ fontSize: '0.82rem', background: 'rgba(59, 130, 246, 0.2)', padding: '0.25rem 0.6rem', borderRadius: '4px', color: 'var(--blue-bright)' }}>
                สีฟ้า vs สีแดง
              </span>
            </div>

            <div className="schedule-item">
              <div>
                <div style={{ fontWeight: 600 }}>วอลเลย์บอลหญิง รอบตัดเชือก</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>โรงยิมเนเซียม • 14:45 น.</div>
              </div>
              <span style={{ fontSize: '0.82rem', background: 'rgba(59, 130, 246, 0.2)', padding: '0.25rem 0.6rem', borderRadius: '4px', color: 'var(--blue-bright)' }}>
                สีฟ้า vs สีเหลือง
              </span>
            </div>

            <div className="schedule-item">
              <div>
                <div style={{ fontWeight: 600 }}>การประกวดขบวนพาเหรด & ลีดเดอร์</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>ลานหน้าเสาธง • 16:00 น.</div>
              </div>
              <span style={{ fontSize: '0.82rem', background: 'rgba(59, 130, 246, 0.2)', padding: '0.25rem 0.6rem', borderRadius: '4px', color: 'var(--blue-bright)' }}>
                ทุกคณะสี
              </span>
            </div>
          </div>
          <button className="btn-blue" onClick={() => alert('เปิดตารางการแข่งขันฉบับเต็ม')}>
            ดูโปรแกรมการแข่งขันทั้งหมด →
          </button>
        </div>

        {/* Cheer Song Section */}
        <div className="content-card">
          <h3>🎵 บทเพลงเชียร์ประจำคณะสีฟ้า</h3>
          <p style={{ color: 'var(--text-sub)', fontSize: '0.88rem', marginBottom: '1rem' }}>
            ร่วมฝึกร้องเพลงประจำสีเพื่อส่งพลังเสียงสนั่นอัฒจันทร์!
          </p>
          <div className="song-lyrics">
            "สีฟ้าสง่ากล้าหาญ เกียรติก้องกังวานในแดนดิน <br />
            สามัคคีร่วมใจดั่งสายวาริน พร้อมชีวินก้าวสู่ชัย <br />
            สู้ไม่ถอยร่วมแรงและใจ ชัยชนะจะเปรมปรีดิ์ <br />
            พวกเราสีฟ้า จงเจริญ!" 💙🎶
          </div>
          <button className="btn-blue" onClick={() => alert('ดาวน์โหลดสมุดรวมเพลงเชียร์')}>
            เปิดเนื้อเพลงเชียร์ทั้งหมด →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2026 Team Blue Student Portal (Port 3008) — สานฝัน สร้างพลังใจ เพื่อคณะสีฟ้า
      </footer>
    </div>
  );
}
