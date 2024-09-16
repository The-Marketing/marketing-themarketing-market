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

import { singUp } from './auth.action';

export const SignUpFormSchema = z.object({
    name: z.string().min(1, { message: 'O nome é obrigatório' }),
  email: z.string().min(1, { message: 'O e-mail é obrigatório' }),
  password: z.string().min(6, { message: 'A senha é obrigatória e deve conter mais de 6 caracteres ' }),
  confirmPassword: z.string().min(6, { message: 'A senha é obrigatória e deve conter mais de 6 caracteres ' })
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: 'As senhas não conferem',
  path: ['confirmPassword']
});
const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
        name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
    const res = await singUp(values)
    if(res.success) {
      toast.success('Conta criada com sucesso')
      router.push('/dashboard')
    }else {
      toast.error(res.error)
    }
    console.log(values);
  }

  return (
    <Card className='min-w-[500px]'>
      <CardHeader>
        <CardTitle>Registre-se em THE MARKETING</CardTitle>
        <CardDescription>
            Preencha seus dados para se cadastrar GRATUITAMENTE!
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Nome" {...field} />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme sua senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirme sua senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='self-start'>Cadastrar</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
