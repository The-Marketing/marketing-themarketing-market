'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Argon2id } from 'oslo/password';
import { z } from 'zod';

import { lucia } from '@/lib/lucia';
import { prisma } from '@/lib/prisma';

import { SignInFormSchema } from './sign-in-form';
import { SignUpFormSchema } from './sign-up-form';

export const singUp = async (values: z.infer<typeof SignUpFormSchema>) => {
    try{
        const existingUser = await prisma.user.findUnique({
            where: {
                email: values.email
            }
        })
        if(existingUser) {
            return {error:'Ja existe um usuário com esse e-mail', success: false}
        } 

        const hashedPassword = await new Argon2id().hash(values.password)
        const user = await prisma.user.create({
            data: {
                name: values.name,
                email: values.email.toLowerCase(),
                hashedPassword
            }
        })
        const session = await lucia.createSession(user.id, {})
        const sessionCookie = await lucia.createSessionCookie(session.id)
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        return {success: true}
    } catch(error){
        return{error: 'Database Error;', success: false}
           
    }
}

export const singIn = async (values: z.infer<typeof SignInFormSchema>) => {
    const user = await prisma.user.findUnique({
        where: {
            email: values.email
        }
    })
    if(!user || !user.hashedPassword) {
        return {error:'Usurário não encontrado', success: false}
    }
    const validPassword = await new Argon2id().verify(user.hashedPassword, values.password)
    if(!validPassword) {
        return {error:'Senha inválida', success: false}
    }
    const session = await lucia.createSession(user.id, {})
    const sessionCookie = await lucia.createSessionCookie(session.id)
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    return {success: true}
}

export const logOut = async () => {
    const sessionCookie = await lucia.createBlankSessionCookie()
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
    return redirect('/athenticate')
}   