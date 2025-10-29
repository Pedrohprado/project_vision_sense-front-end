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
import { useMutation } from '@tanstack/react-query';
import { signupSchema, type SignupSchemaProps } from '@/zod/signup-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signup } from '@/api/signup';
import { toast } from 'sonner';

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const navigate = useNavigate();
  const mutationSignup = useMutation({
    mutationFn: (data: SignupSchemaProps) => {
      return signup(data);
    },
    onSuccess: async () => {
      toast.success('Usuário criado com sucesso!');
      navigate('/');
    },
    onError: async (error) => {
      const err = error as { message?: string };
      toast.error(err.message ?? 'Erro ao fazer login!');
    },
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupSchemaProps>({
    resolver: zodResolver(signupSchema),
  });

  async function handleSendSignupInformations(data: SignupSchemaProps) {
    if (data.password !== data.confirmPassword) {
      setError('root', {
        type: 'validate',
        message: 'As senhas precisam conheciderem.',
      });
      return;
    }

    await mutationSignup.mutateAsync(data);
  }
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>
          <form
            onSubmit={handleSubmit(handleSendSignupInformations)}
            className='p-6 md:p-8 '
          >
            <FieldGroup className=''>
              <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold'>Crie sua conta</h1>
                <p className='text-muted-foreground text-sm text-balance'>
                  Coloque seu email para criar sua conta
                </p>
              </div>
              <Field>
                <FieldLabel>Nome</FieldLabel>
                <Input {...register('name')} />
                {errors.name?.message && (
                  <FieldDescription className='text-red-900'>
                    insira seu nome.
                  </FieldDescription>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor='email'>Email</FieldLabel>
                <Input {...register('email')} placeholder='m@example.com' />
                {errors.email?.message && (
                  <FieldDescription className='text-red-900'>
                    insira um email válido.
                  </FieldDescription>
                )}
              </Field>
              <Field>
                <Field className='grid grid-cols-2 gap-4'>
                  <Field>
                    <FieldLabel>Senha</FieldLabel>
                    <Input type='password' {...register('password')} />
                    {errors.password?.message && (
                      <FieldDescription className='text-red-900'>
                        insira uma senha.
                      </FieldDescription>
                    )}
                  </Field>
                  <Field>
                    <FieldLabel>Confirme a sua senha</FieldLabel>
                    <Input type='password' {...register('confirmPassword')} />
                    {errors.confirmPassword?.message && (
                      <FieldDescription className='text-red-900'>
                        confirme a senha.
                      </FieldDescription>
                    )}
                  </Field>
                </Field>
              </Field>
              <Field>
                <Button type='submit'>Criar conta</Button>
              </Field>
              {errors.root?.message && (
                <FieldDescription className='text-red-900 w-full text-center'>
                  {errors.root.message}
                </FieldDescription>
              )}
              <FieldDescription className='text-center'>
                Você já tem uma conta? <Link to={'/login'}>Login</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className='relative hidden md:block bg-zinc-400'>
            <img src='/vision_sense_star.png' alt='Image' className=' h-full' />
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
