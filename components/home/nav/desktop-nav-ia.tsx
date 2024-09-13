"use client";
import TooltipChat from '@/components/home/tooltip-chat';
import { ToggleDisplay } from '@/components/toggle/toggle-display';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Separator } from '@/components/ui/separator';

export function DesktopNavIa() {
    return (
      <Menubar>
        <MenubarMenu><MenubarTrigger>
        < TooltipChat />
        </MenubarTrigger> </MenubarMenu>
        < Separator className="my-4" orientation="vertical" />
        <MenubarMenu><MenubarTrigger>
         <  ToggleDisplay />
         </MenubarTrigger>
        </MenubarMenu>
          
      </Menubar>
    )
  }