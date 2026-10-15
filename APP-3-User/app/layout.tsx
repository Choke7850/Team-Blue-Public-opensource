import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Team Blue Portal | ประตูสู่คณะสีฟ้า 💙 ข่าวกีฬาสี & ผลคะแนนสด',
  description: 'ศูนย์รวมข้อมูล กองเชียร์ และผลการแข่งขันกีฬาสี คณะสีฟ้า',
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
