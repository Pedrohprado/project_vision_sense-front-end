import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router';
import { Glasses, Loader2Icon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginSchemaProps } from '@/zod/login-schema';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/login';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: LoginSchemaProps) => login(data),
    onSuccess: async () => {
      navigate('/');
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaProps>({
    resolver: zodResolver(loginSchema),
  });

  async function handleSendInformations(data: LoginSchemaProps) {
    await mutation.mutateAsync(data);
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>
          <form
            className='p-6 md:p-8'
            onSubmit={handleSubmit(handleSendInformations)}
          >
            <FieldGroup>
              <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold flex items-center gap-2'>
                  <Glasses />
                  Vision Sense
                </h1>
                <p className='text-muted-foreground text-balance'>
                  Faça o login para acessar sua conta
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor='email'>Email</FieldLabel>
                <Input {...register('email')} placeholder='m@example.com' />
                {errors.email?.message && (
                  <FieldDescription className='text-red-900'>
                    você precisa inserir um email válido.
                  </FieldDescription>
                )}
              </Field>
              <Field>
                <div className='flex items-center'>
                  <FieldLabel htmlFor='password'>Senha</FieldLabel>
                  <a
                    href='#'
                    className='ml-auto text-sm underline-offset-2 hover:underline'
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input type='password' {...register('password')} />
                {errors.password?.message && (
                  <FieldDescription className='text-red-900'>
                    você precisa inserir uma senha.
                  </FieldDescription>
                )}
              </Field>
              <Field>
                <Button
                  type='submit'
                  disabled={mutation.isPending}
                  className='flex items-center justify-center gap-3'
                >
                  {mutation.isPending ? (
                    <>
                      Login
                      <Loader2Icon className=' size-3 animate-spin' />
                    </>
                  ) : (
                    'Login'
                  )}
                </Button>
                {mutation.error && (
                  <FieldDescription className='text-red-700 w-full text-center'>
                    {mutation.error.message}
                  </FieldDescription>
                )}
              </Field>
              <FieldDescription className='text-center'>
                Ainda não tem uma conta? <Link to={'/singup'}>Cadastre-se</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className=' relative hidden md:block'>
            <img
              src='vision_sense.png'
              alt='Image'
              className='absolute h-full w-full'
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className='px-6 text-center'>
        Ao clicar em continuar, você está aceitando{' '}
        <a href='#'>Termos de serviço</a> e{' '}
        <a href='#'>Politicas de privacidade</a>.
      </FieldDescription>
    </div>
  );
}
