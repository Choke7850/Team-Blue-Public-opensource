import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Team Blue Admin Portal | ระบบจัดการกีฬาสี คณะสีฟ้า 💙',
  description: 'ระบบศูนย์กลางผู้ดูแลและบริหารจัดการกิจกรรมกีฬาสี คณะสีฟ้า',
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
