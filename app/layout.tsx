import '@/app/ui/global.css';
import { Metadata } from 'next';
import { notoSansJp } from './ui/fonts';

export const metadata: Metadata = {
  title: '%s | Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

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
