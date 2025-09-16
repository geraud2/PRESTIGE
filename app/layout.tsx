import './globals.css';
import type { Metadata } from 'next';
import ClientLayout from '@/components/Clientlayout';

export const metadata: Metadata = {
  title: 'DJOK PRESTIGE - VTC, Location, Formations & Entrepreneuriat',
  description:
    'Services de VTC, location de véhicules, formations professionnelles et accompagnement entrepreneurial en Afrique',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
