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

export default function Page () {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
 <AcmeLogo /> 
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
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
        <h3>BOA..! <br /> O FUTURO COMEÇOU <span>Alura & Gemini</span></h3>
            <p>apaixonados por </p>      <div>< TypingText /></div> 

           
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg  px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        
        <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
            <Image
                src="/hero-mobile.png"
                width={560}
                height={620}
                className="block md:hidden"
                alt="Screenshot of the dashboard project showing mobile version"
              />
        </div>
      </div>
    </main>
  );
}
