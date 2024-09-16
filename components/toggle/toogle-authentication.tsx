"use client"

import * as React from 'react';

import { Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ToggleAuthentication() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only"><Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /></span>
        </Button>
       
       
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">


      </DropdownMenuContent>
    </DropdownMenu>
  )
}
