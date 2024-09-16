import './globals.css';
import '@radix-ui/themes/styles.css';

import { Inter as FontSans } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'sonner';

import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'IA Conteúdo Digital  | ®TM',
  description:
    'Aumente as vendas com conteúdo digital da The Marketing com inteligência artificial, páginas web, redes sociais, anúncios e Google Cloud. Next.js, Firebase e Gemini.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="pt-BR" suppressHydrationWarning>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2614634884939772"
     crossOrigin="anonymous"></Script>
     <Script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></Script>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable)}>{children}</body>
          <Toaster richColors />
      <Analytics />
    </html>
  );
}
