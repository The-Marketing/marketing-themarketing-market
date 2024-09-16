import React from 'react';

import { redirect } from 'next/navigation';

import SignInForm from '@/components/auth/sign-in-form';
import SignUpForm from '@/components/auth/sign-up-form';
import TabSwitcher from '@/components/auth/tab-switcher';
import { getUser } from '@/lib/lucia';

const AuthenticatePage = async () => {

  const user = await getUser()
  if(user) {
    return redirect('/dashboard')
  }
  return (
    <div className="relative flex w-full h-screen bg-background">
        <div className="max-w-3x1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

         < TabSwitcher SignInTab={< SignInForm />} SignUpTab={< SignUpForm />} /> 
        </div>
    </div>
  )
}

export default AuthenticatePage