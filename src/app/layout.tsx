import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'FarmaClínica Pro - App de Estudio',
  description: 'Simulador interactivo de Farmacología Clínica y Terapéutica para preparación de parciales.',
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
  themeColor: '#08080a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark h-full">
      <body className="bg-[#08080a] text-zinc-100 antialiased h-full overflow-x-hidden selection:bg-emerald-500 selection:text-zinc-950 font-sans">
        {children}
      </body>
    </html>
  );
}
