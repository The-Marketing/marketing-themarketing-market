import {
  BadgeCheck,
  BotMessageSquare,
  Chrome,
  Instagram,
  Package2,
  PanelLeft,
  PanelsTopLeft,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/dashboard/sheet';
import { Button } from '@/components/ui/variants/button';

export default function MobileNav() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Alternar Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="https://themarketing.com.br/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">®TM</span>
            </Link>
            <Link
              href="/website"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <PanelsTopLeft className="h-5 w-5" />
              Site
            </Link>
            <Link
              href="/logotypes"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <BadgeCheck className="h-5 w-5" />
              Logotipos
            </Link>
            <Link
              href="/publicity/ads"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Chrome  className="h-5 w-5" />
              Ads
            </Link>
  
            <Link
              href="/publicity/meta"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              Meta
            </Link>
            <Link
              href="/campaign"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <TrendingUp  className="h-5 w-5" />
              Campanha
            </Link>
            <Link
              href="/chat"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <BotMessageSquare className="h-5 w-5" />
              Chat GPT
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }