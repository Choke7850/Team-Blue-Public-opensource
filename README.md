# Team Blue - Public Open Source Architecture & Skeleton 💙

คลังโปรเจกต์นี้เป็นเวอร์ชัน **Open Source (เปิดให้ทุกคนเข้าถึงและศึกษาได้)** สำหรับโครงสร้างระบบจัดการกิจกรรมกีฬาสี คณะสีฟ้า (Team Blue)

- **Repository Link:** [https://github.com/Choke7850/Team-Blue-Public-opensource.git](https://github.com/Choke7850/Team-Blue-Public-opensource.git)
- **วันที่อัปเดต:** 15 ตุลาคม 2026

---

## 📢 คำชี้แจงสำหรับเวอร์ชัน Open Source (Public Notice)

> **หมายเหตุความปลอดภัย:** โปรเจกต์นี้ถูกออกแบบเป็น **Architecture Skeleton (โครงสร้างสถาปัตยกรรมเปล่า)** สำหรับสาธารณะ โดยได้ทำการ:
> 1. **ลบข้อมูลสำคัญทั้งหมด (Sanitized Sensitive Data)** เช่น รหัสผ่านฐานข้อมูล, API Keys, Tokens, และข้อมูลเฉพาะภายในระบบออกแล้ว
> 2. **ตัดการเชื่อมต่อโดเมนส่วนตัว** โดยแทนที่ด้วยค่า Configuration Template และ Environment Variables ตัวอย่าง
> 3. **คงเหลือไว้เฉพาะโครงสร้างหลัก (Clean Architecture)** เพื่อให้ทุกคนสามารถนำไปต่อยอด พัฒนา หรือนำไปใช้เป็นโครงสร้างต้นแบบได้อย่างปลอดภัย

---

## 📁 โครงสร้างโปรเจกต์และตำแหน่งไฟล์ (Project Structure)

```text
Team-Blue-Public-opensource/
├── APP-1-Admin/          # โครงสร้างระบบสำหรับผู้ดูแล (Admin Portal - Port 3006)
├── APP-2-Staff/          # โครงสร้างระบบสำหรับทีมงาน/กรรมการ (Staff Portal - Port 3007)
├── APP-3-User/           # โครงสร้างระบบสำหรับนักเรียน/สมาชิก (User Portal - Port 3008)
├── docker-compose.yml    # ไฟล์ Orchestration จัดการ Containers ทั้งหมด
├── nginx.conf            # Reverse Proxy Router สำหรับจัดการ Routing แต่ละพอร์ต
├── .env.example          # ตัวอย่างการตั้งค่า Environment Variables (ไม่มี Secret จริง)
├── .gitignore            # กฎการไม่ติดตามไฟล์ชั่วคราวและไฟล์ Sensitive
└── README.md             # เอกสารแนะนำโปรเจกต์ฉบับ Open Source
```

---

## ⚙️ ส่วนประกอบของระบบ (System Overview)

1. **APP-1-Admin (Admin Portal)**
   - สิทธิ์ระดับผู้ดูแลระบบ สำหรับจัดการภาพรวม ข้อมูลผู้ใช้งาน และการตั้งค่าระบบ
   - พอร์ตภายใน: `3006`
2. **APP-2-Staff (Staff Portal)**
   - สำหรับฝ่ายปฏิบัติงาน บันทึกคะแนน และประสานงานตารางแข่งขัน
   - พอร์ตภายใน: `3007`
3. **APP-3-User (User Portal)**
   - หน้าสำหรับสมาชิกคณะสีฟ้า ตรวจสอบตารางการแข่งขัน ผลคะแนน และข้อมูลข่าวสาร
   - พอร์ตภายใน: `3008`
4. **Nginx Reverse Proxy Router**
   - ทำหน้าที่รับ Request และกระจายเส้นทางไปยังแต่ละ App ตามพอร์ตที่กำหนด
5. **PostgreSQL Database**
   - ฐานข้อมูลกลาง (PostgreSQL 16) พร้อมการตั้งค่า Resource Optimization เบื้องต้น
6. **Cloudflare Tunnel (Optional)**
   - รองรับการเชื่อมต่อผ่าน Cloudflare Tunnel เพื่อเปิดให้บริการสู่ภายนอกแบบปลอดภัย

---

## 🚀 วิธีการเริ่มต้นใช้งาน (Getting Started)

1. **คัดลอกไฟล์ตั้งค่า Environment:**
   ```bash
   cp .env.example .env
   ```
2. **แก้ไขไฟล์ `.env`** ด้วยข้อมูลหรือรหัสผ่านที่ต้องการใช้งาน
3. **เริ่มต้นรันระบบด้วย Docker Compose:**
   ```bash
   docker compose up -d
   ```

---

## 📄 License & Open Source
โปรเจกต์นี้เปิดให้ศึกษาและนำไปประยุกต์ใช้เป็นโครงสร้างต้นแบบ  
Repository: [https://github.com/Choke7850/Team-Blue-Public-opensource.git](https://github.com/Choke7850/Team-Blue-Public-opensource.git)