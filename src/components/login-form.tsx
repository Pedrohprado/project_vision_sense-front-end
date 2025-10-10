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
import { Glasses } from 'lucide-react';

export function LoginForm({
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
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
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
                <Input id='password' type='password' required />
              </Field>
              <Field>
                <Button type='submit'>Login</Button>
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
        Quando clicar em continuar, você está aceitando{' '}
        <a href='#'>Termos de serviço</a> e{' '}
        <a href='#'>Politicas de privacidade</a>.
      </FieldDescription>
    </div>
  );
}
