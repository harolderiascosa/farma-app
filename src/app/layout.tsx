import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'FarmaClínica Pro',
  description: 'Estudio interactivo de Farmacología Clínica',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'FarmaPro',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#09090b',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark h-full">
      <body className="bg-zinc-950 text-zinc-100 antialiased h-full overflow-x-hidden selection:bg-emerald-500 selection:text-white pb-24">
        {children}
      </body>
    </html>
  );
}
