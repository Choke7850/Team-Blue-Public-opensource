import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Team Blue Staff Portal | ระบบฝ่ายสตาฟและกรรมการ คณะสีฟ้า 💙',
  description: 'ระบบบันทึกผลการแข่งขันและฝ่ายปฏิบัติการ คณะสีฟ้า',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
