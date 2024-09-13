import '@/app/global.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { inter } from '@/components/fonts/fonts';
import ThemeProvider from '@/components/provider';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';

const fontSans = FontSans({
  subsets: ["latin"],
  display: 'swap', 
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "The Marketing: Estratégias de Marketing e Publicidade.",
  description: "The Marketing: Estratégias de Marketing e Publicidade oferece soluções avançadas para otimização de campanhas publicitárias com aplicativos web desenvolvidos em Next.js. Nossa plataforma facilita a criação de estratégias de marketing digital eficazes, aumentando o engajamento e o ROI. Aproveite ferramentas de marketing personalizáveis e suporte especializado para alcançar seus objetivos de publicidade online. Ideal para empresas que buscam inovar e expandir sua presença digital.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
    <html lang="pt-BR" suppressHydrationWarning>
    <body className={cn(
      "h-screen flex flex-col gap-24 items-center justify-center",
      fontSans.variable
    )}>

      <ThemeProvider>
        
          <header className="flex flex-col gap-24 items-center justify-center">
  <div className="tw-flex tw-items-center">
    < Logo />
    <h1 className="tw-text-2xl tw-font-bold">The Marketing</h1>

  </div>
</header>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
      </ThemeProvider>
    </body>
  </html>

  );
}
