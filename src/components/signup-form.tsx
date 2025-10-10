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
import { Link } from 'react-router';

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>
          <form className='p-6 md:p-8'>
            <FieldGroup>
              <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold'>Crie sua conta</h1>
                <p className='text-muted-foreground text-sm text-balance'>
                  Coloque seu email para criar sua conta
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor='email'>Email</FieldLabel>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
                <FieldDescription>error</FieldDescription>
              </Field>
              <Field>
                <Field className='grid grid-cols-2 gap-4'>
                  <Field>
                    <FieldLabel htmlFor='password'>Senha</FieldLabel>
                    <Input id='password' type='password' required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor='confirm-password'>
                      Confirme a sua senha
                    </FieldLabel>
                    <Input id='confirm-password' type='password' required />
                  </Field>
                </Field>
                <FieldDescription>error</FieldDescription>
              </Field>
              <Field>
                <Button type='submit'>Criar conta</Button>
              </Field>

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
