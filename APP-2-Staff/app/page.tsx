'use client';

import { useState } from 'react';

export default function StaffPage() {
  const [matches, setMatches] = useState([
    { id: 1, sport: 'ฟุตบอลชาย (รอบชิง)', teamA: 'สีฟ้า', teamB: 'สีแดง', scoreA: 3, scoreB: 1, status: 'กำลังแข่งขัน' },
    { id: 2, sport: 'บาสเกตบอลหญิง', teamA: 'สีฟ้า', teamB: 'สีเขียว', scoreA: 42, scoreB: 38, status: 'จบการแข่งขัน' },
    { id: 3, sport: 'วิ่งผลัด 4x100 ม.', teamA: 'สีฟ้า', teamB: 'รวมสี', scoreA: 1, scoreB: 2, status: 'รอการแข่งขัน' }
  ]);

  const [recordedMsg, setRecordedMsg] = useState('');

  const handleQuickRecord = () => {
    setRecordedMsg('บันทึกผลคะแนนเข้าสู่ระบบส่วนกลางสำเร็จ! ข้อมูลถูกส่งต่อไปยัง Admin และ User แล้ว');
    setTimeout(() => setRecordedMsg(''), 4000);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo-badge">
          <div className="staff-icon">📋</div>
          <div className="logo-text">
            <h1>TEAM BLUE — STAFF & REFEREE PORTAL</h1>
            <span>ระบบฝ่ายปฏิบัติการและกรรมการตัดสิน คณะสีฟ้า</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div className="status-badge">
            <div className="pulse-dot"></div>
            <span>PORT 3007 • STAFF ACTIVE</span>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <span className="hero-tag">Field Operations Unit</span>
        <h2 className="hero-title">ระบบฝ่ายสตาฟและสนามแข่งขัน 🏃‍♂️⚡</h2>
        <p className="hero-subtitle">
          บันทึกผลคะแนนสดจากข้างสนาม ตรวจเช็ครายชื่อนักกีฬาประจำจุด และประสานงานกรรมการตัดสินทุกชนิดกีฬาของคณะสีฟ้า
        </p>
      </section>

      {recordedMsg && (
        <div style={{
          padding: '1rem',
          background: 'rgba(16, 185, 129, 0.2)',
          border: '1px solid #10b981',
          borderRadius: '8px',
          color: '#6ee7b7',
          marginBottom: '1.5rem',
          fontSize: '0.9rem'
        }}>
          ✅ {recordedMsg}
        </div>
      )}

      {/* Field Stats */}
      <div className="grid-stats">
        <div className="stat-card">
          <div className="stat-label">การแข่งขันที่รับผิดชอบวันนี้</div>
          <div className="stat-value">8 <span>คู่แข่งขัน</span></div>
          <div className="stat-meta">เสร็จสิ้นแล้ว 5 คู่ (รอแข่งขัน 3 คู่)</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">กรรมการสตาฟประจำจุด</div>
          <div className="stat-value">28 <span>ท่าน</span></div>
          <div className="stat-meta">ประจำสนาม A, B, โรงยิม, ลู่วิ่ง</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">คะแนนที่บันทึกแล้ววันนี้</div>
          <div className="stat-value" style={{ color: 'var(--cyan-accent)' }}>+480 <span>แต้ม</span></div>
          <div className="stat-meta">จากชัยชนะ 6 แมตช์ล่าสุด</div>
        </div>
      </div>

      {/* Match Operations Table */}
      <div className="action-card" style={{ marginBottom: '2rem' }}>
        <h3>🏆 ตารางแมตช์และบันทึกคะแนนสนาม (Live Match Tracking)</h3>
        <p>ตรวจสอบสถานะการแข่งขันแบบ Real-time และบันทึกคะแนนอย่างแม่นยำ</p>

        <div style={{ overflowX: 'auto' }}>
          <table className="table-custom">
            <thead>
              <tr>
                <th>ชนิดกีฬา</th>
                <th>คู่แข่งขัน</th>
                <th>ผลคะแนน</th>
                <th>สถานะ</th>
                <th>จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((m) => (
                <tr key={m.id}>
                  <td style={{ fontWeight: 600 }}>{m.sport}</td>
                  <td>{m.teamA} VS {m.teamB}</td>
                  <td style={{ color: 'var(--blue-light)', fontWeight: 700 }}>{m.scoreA} - {m.scoreB}</td>
                  <td>
                    {m.status === 'กำลังแข่งขัน' ? (
                      <span className="badge-live">LIVE</span>
                    ) : m.status === 'จบการแข่งขัน' ? (
                      <span className="badge-done">DONE</span>
                    ) : (
                      <span style={{ color: 'var(--text-sub)', fontSize: '0.78rem' }}>WAITING</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={handleQuickRecord}
                      style={{
                        padding: '0.35rem 0.75rem',
                        background: 'rgba(14, 165, 233, 0.2)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--cyan-accent)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                      }}
                    >
                      อัปเดตผล
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Staff Actions Grid */}
      <div className="grid-cards">
        <div className="action-card">
          <h3>📝 เช็คชื่อนักกีฬาและบัตรประจำตัว</h3>
          <p>ตรวจเช็คความพร้อมก่อนลงแข่งขัน ตรวจสอบรายชื่อตัวจริงและตัวสำรองของคณะสีฟ้า</p>
          <button className="btn-cyan" onClick={() => alert('เปิดระบบเช็คชื่อนักกีฬา')}>
            เปิดหน้าเช็คชื่อสนาม →
          </button>
        </div>

        <div className="action-card">
          <h3>⚽ เบิก-คืนอุปกรณ์การแข่งขัน</h3>
          <p>ระบบบันทึกการยืมอุปกรณ์ ลูกฟุตบอล ลูกบาส ชุดวอร์ม และอุปกรณ์เชียร์ลีดเดอร์</p>
          <button className="btn-cyan" onClick={() => alert('เปิดระบบเบิกอุปกรณ์')}>
            ระบบคลังอุปกรณ์สีฟ้า →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2026 Team Blue Staff System (Port 3007) — คณะสีฟ้า ฝ่ายปฏิบัติการและสนามแข่งขัน
      </footer>
    </div>
  );
}
