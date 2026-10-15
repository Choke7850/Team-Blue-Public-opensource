'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'roster' | 'scores' | 'system'>('overview');

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo-badge">
          <div className="blue-icon">💙</div>
          <div className="logo-text">
            <h1>TEAM BLUE — ADMIN PORTAL</h1>
            <span>ระบบศูนย์กลางผู้ดูแลกิจกรรมกีฬาสี คณะสีฟ้า</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div className="status-badge">
            <div className="pulse-dot"></div>
            <span>PORT 3006 • ONLINE</span>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <span className="hero-tag">Central Command System</span>
        <h2 className="hero-title">ยินดีต้อนรับสู่ระบบผู้ดูแล คณะสีฟ้า 🏆</h2>
        <p className="hero-subtitle">
          บริหารจัดการข้อมูลนักกีฬา สตาฟ จัดตารางเวลาการแข่งขัน และควบคุมระบบผลคะแนนรวมของคณะสีฟ้าแบบ Real-time พร้อมเชื่อมต่อ Cloudflare Tunnel & Reverse Proxy
        </p>
      </section>

      {/* Key Stats */}
      <div className="grid-stats">
        <div className="stat-card">
          <div className="stat-label">สมาชิกคณะสีฟ้าทั้งหมด</div>
          <div className="stat-value">1,248 <span>คน</span></div>
          <div className="stat-meta">↑ เพิ่มขึ้น 100% จากการลงทะเบียน</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">คะแนนรวมสะสมปัจจุบัน</div>
          <div className="stat-value" style={{ color: 'var(--gold-accent)' }}>3,850 <span>แต้ม</span></div>
          <div className="stat-meta">🥇 อันดับที่ 1 ของตารางแข่งขัน</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">รายการแข่งขันที่เข้าร่วม</div>
          <div className="stat-value">16 <span>ชนิดกีฬา</span></div>
          <div className="stat-meta">ผ่านเข้ารอบชิงชนะเลิศ 12 รายการ</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">ทีมงาน & สตาฟที่พร้อมปฏิบัติการ</div>
          <div className="stat-value">45 <span>คน</span></div>
          <div className="stat-meta">ประจำการ 6 จุดสนามแข่งขัน</div>
        </div>
      </div>

      {/* Main Admin Operations */}
      <h3 className="section-title">⚡ แผงควบคุมและการจัดการหลัก (Admin Operations)</h3>
      <div className="grid-cards">
        <div className="action-card">
          <div className="action-header">
            <h3>👥 จัดการรายชื่อนักกีฬาและสมาชิก</h3>
            <p>ตรวจสอบและยืนยันสิทธิ์นักกีฬาคณะสีฟ้า ทั้งระดับ ม.ต้น และ ม.ปลาย พร้อมระบบจัดสรรโควตาการแข่งขัน</p>
          </div>
          <button className="btn-primary" onClick={() => alert('เปิดหน้ารายชื่อนักกีฬาคณะสีฟ้า')}>
            เปิดระบบจัดการสมาชิก →
          </button>
        </div>

        <div className="action-card">
          <div className="action-header">
            <h3>📅 ตารางการแข่งขันและสนาม</h3>
            <p>กำหนดการแข่งขันนัดถัดไป มอบหมายผู้รับผิดชอบแต่ละสนาม และติดตามความพร้อมของอุปกรณ์กีฬา</p>
          </div>
          <button className="btn-primary" onClick={() => alert('เปิดตารางการแข่งขัน')}>
            จัดการตารางแข่งขัน →
          </button>
        </div>

        <div className="action-card">
          <div className="action-header">
            <h3>📣 ประกาศข่าวสารและคะแนน</h3>
            <p>บันทึกและตรวจสอบผลการแข่งขันอย่างเป็นทางการ พร้อมส่งการแจ้งเตือนสดไปยังแอป User และ Staff</p>
          </div>
          <button className="btn-primary" onClick={() => alert('เปิดระบบประกาศคะแนน')}>
            อัปเดตกระดานคะแนน →
          </button>
        </div>
      </div>

      {/* System Status Integration Card */}
      <div className="action-card" style={{ marginBottom: '2.5rem', borderColor: 'rgba(56, 189, 248, 0.35)' }}>
        <div className="action-header">
          <h3>🌐 สถานะสถาปัตยกรรมระบบ (System Integration)</h3>
          <p>ข้อมูลการเชื่อมโยงระบบย่อยทั้ง 3 ของคณะสีฟ้าผ่าน Nginx Reverse Proxy และ Cloudflare Tunnel</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
          <div style={{ padding: '0.85rem', background: 'rgba(2, 6, 23, 0.6)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SERVICE PORT</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--blue-light)', marginTop: '0.2rem' }}>Port 3006 (Admin)</div>
          </div>
          <div style={{ padding: '0.85rem', background: 'rgba(2, 6, 23, 0.6)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>DATABASE</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#34d399', marginTop: '0.2rem' }}>PostgreSQL 16 (Ready)</div>
          </div>
          <div style={{ padding: '0.85rem', background: 'rgba(2, 6, 23, 0.6)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ROUTER / TUNNEL</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--blue-light)', marginTop: '0.2rem' }}>Cloudflare Tunnel Sync</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2026 Team Blue (คณะสีฟ้า) — Nonwit Sports Day Management System | All Rights Reserved.
      </footer>
    </div>
  );
}
