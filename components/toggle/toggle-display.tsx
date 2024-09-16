"use client"

import * as React from 'react';

import { Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Separator } from '../ui/separator';

export function ToggleDisplay() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only"><Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /></span>
        </Button>
       
       
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
        <span className="sr-only">       
 Luz</span>

        </DropdownMenuItem>
        < Separator className="my-4" orientation="horizontal" />
        <DropdownMenuItem onClick={() => setTheme("dark")}>
        <span className="sr-only"> 
Oscura</span>

        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
