
"use client"

import React from 'react';

import { Mail } from 'lucide-react';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';

function GoogleAuthButton() {
    return (
        
        <Button
            onClick={() => signIn()}
            className="w-full"
        >
            <Mail className="w-4 h-4 mr-2" />
            Sing In Google
        </Button>
    )
}

export default GoogleAuthButton;