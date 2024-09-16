import {
  BadgeCheck,
  BotMessageSquare,
  Chrome,
  Instagram,
  PanelsTopLeft,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/dashboard/tooltip';
import { TMLogo } from '@/components/icons';

import { NavItem } from './nav-item';

export default function DesktopNav() {
    return (
      <>
      <aside className=" inset-x-0 top-0 z-10 hidden  flex-col border-r bg-background sm:flex">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">

        <nav className="flex flex-row items-top gap-4 px-2 sm:py-5">
          <Link
            href="https://themarketing.com.br/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <TMLogo className="h-3 w-3 transition-all group-hover:scale-110" />
            <span className="sr-only">®TM</span>
          </Link>
  
          <NavItem href="/website" label="Site">
            <PanelsTopLeft className="h-5 w-5" />
            
          </NavItem>
  
          <NavItem href="/logotypes" label="Logotipos">
            <BadgeCheck  className="h-5 w-5" />
            
          </NavItem>
  
          <NavItem href="/publicity/ads" label="Ads">
          <Chrome  className="h-5 w-5" />
          
          </NavItem>
  
          <NavItem href="/publicity/meta" label="Meta">
            <Instagram className="h-5 w-5" />
            
          </NavItem>
  
          <NavItem href="/campaign" label="Campanha">
            <TrendingUp className="h-5 w-5" />
        
          </NavItem>
  
         
        
          </nav>
         
        </header>

      </aside>
        <nav className="fixed mt-auto flex flex-row items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/chat"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <BotMessageSquare className="h-5 w-5" />
              <span className="sr-only">Geminis</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Geminis</TooltipContent>
        </Tooltip>
      </nav>
      </>
    );
  }
  