import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function SectionCards() {
  return (
    <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card gap-4 grid w-full px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3'>
      <Card className='@container/card w-full text-green-800'>
        <CardHeader>
          <CardDescription>
            Nivel de risco{' '}
            <span className=' border-b border-green-700 text-green-900'>
              baixo
            </span>
          </CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            20%
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className='@container/card text-yellow-800'>
        <CardHeader>
          <CardDescription>
            Nível de risco{' '}
            <span className=' border-b border-yellow-700 text-yellow-900'>
              médio
            </span>
          </CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            50%
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className='@container/card text-red-800'>
        <CardHeader>
          <CardDescription>
            Nível de risco{' '}
            <span className=' border-b border-red-700 text-red-900'>alto</span>
          </CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            10%
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
