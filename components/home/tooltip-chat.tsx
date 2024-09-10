"use client"
import React from 'react';

import { BotMessageSquare } from 'lucide-react';
import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function TooltipChat(){
  return (
    <Tooltip>
    <TooltipTrigger asChild>
      <Link
        href="/chat"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
      >
        <BotMessageSquare className="h-5 w-5" />
      </Link>
    </TooltipTrigger>
    <TooltipContent side="bottom">Geminis</TooltipContent>
  </Tooltip>

  )
}

