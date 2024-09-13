import Image from 'next/image';
import Link from 'next/link';

import { ToggleDisplay } from '@/components/home/toggle-display';
import TooltipChat from '@/components/home/tooltip-chat';
import Typing from '@/components/home/typing';
import { Input } from '@/components/ui/input';
import { Menubar } from '@/components/ui/menubar';
import { Separator } from '@/components/ui/separator';
import AcmeLogo from '@/components/ui/variants/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import TypingText from '@/components/home/typing-text';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import DesktopNav from '@/components/home/nav/desktop-nav';

export default function Page () {
  return (

       <ResizablePanelGroup
       direction="horizontal"
       className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
     >
       <ResizablePanel defaultSize={70}>
         <div className="flex h-full items-center justify-center p-6">
         <AcmeLogo /> 

             < DesktopNav />
             <h3>BOA..! <br /> O FUTURO COMEÇOU <span>Alura & Gemini</span></h3>
            <p>apaixonados por </p>      <div>< TypingText /></div> 

           
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg  px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
         </div>
       </ResizablePanel>
     
       <ResizablePanel className='border-none'  defaultSize={30}>
         <div className="flex h-full items-center border-none p-6">
             <Menubar className='border-none'>
           <ToggleDisplay    />
           <Separator        className="my-4" orientation="vertical" />
           < TooltipChat />
         <Input
           placeholder="Escribe lo que precices..."
           
           className="max-w-sm border-dotted"
         />
     
           </Menubar>
 
         </div>
       </ResizablePanel>
     </ResizablePanelGroup>
  );
}
