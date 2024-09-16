'use client'
import React from 'react';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

import { singIn } from './auth.action';

export const SignInFormSchema = z.object({
  email: z.string().min(1, { message: 'O e-mail é obrigatório' }),
  password: z.string().min(6, { message: 'A senha é obrigatória e deve conter mais de 6 caracteres ' })
});
const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignInFormSchema>) {
    const res = await singIn(values)
    if(res.success) {
      toast.success('Login efetuado com sucesso')
      router.push('/dashboard')
    }else {
      toast.error(res.error)
    } 
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>BEM-VINDO AO MERCADO</CardTitle>
        <CardDescription>
          OBRIGADO POR ESTAR DE VOLTA! Faça login na sua conta
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="E-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='self-start'>Entrar</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignInForm;
