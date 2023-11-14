import '@/app/ui/global.css';
import { notoSansJp } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansJp.className} antialiased`}>{children}</body>
    </html>
  );
}
