export const metadata = {
    title: 'IA Conteúdo Digital  | ®TM',
    description:
      'Faça login em sua conta AGORA! Cadastre-se gratuitamente, Marketing e publicidade com inteligência artificial. Ads, Google Cloud. Next.js, Web 3.0 e Gemini.'
  };
  
  export default function RootLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="pt-BR">
        <body className="flex min-h-screen w-full flex-col">{children}</body>
      </html>
    );
  }