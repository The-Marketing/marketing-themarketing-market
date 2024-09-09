import '@/app/global.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { inter } from '@/components/fonts/fonts';
import Logo from '@/components/logo';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

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
    <html lang="pt-BR" >
        <body className={cn(
           `${inter.className} antialiased`,
          fontSans.variable
        )}>

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
