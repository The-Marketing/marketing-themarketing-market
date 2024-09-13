'use client';

import { TooltipProvider } from '@/components/dashboard/tooltip';
import { ThemeProvider, useTheme } from 'next-themes'; // Si estás usando next-themes para manejar el tema

export default function Providers({ children }: { children: React.ReactNode }) {
  // Si estás utilizando next-themes
  const { theme } = useTheme();

  return (
    <ThemeProvider    defaultTheme="dark" 
    enableSystem={true} 
    disableTransitionOnChange={true}
    attribute="class">
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
}
