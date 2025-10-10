import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import type { ReadingsType } from '@/api/readings';

const chartConfig = {
  distance: {
    label: 'Distância',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

export function ChartAreaInteractive({
  chartData,
}: {
  chartData: ReadingsType[];
}) {
  return (
    <Card className='@container/card'>
      <CardHeader>
        <CardTitle>Movimentação</CardTitle>
        <CardDescription>
          <span className='hidden @[540px]/card:block'>
            Informações de movimentação
          </span>
          <span className='@[540px]/card:hidden'>
            Informações de movimentação
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className='px-2 pt-4 sm:px-6 sm:pt-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto w-full h-[250px]'
        >
          <AreaChart
            data={chartData}
            margin={{ left: 12, right: 12, top: 10, bottom: 10 }}
          >
            <defs>
              <linearGradient id='fillDistance' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='5%'
                  stopColor='var(--primary)'
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor='var(--primary)'
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray='3 3' />

            <XAxis
              dataKey='createdAt'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                if (!value) return '';
                const date = new Date(value);
                if (isNaN(date.getTime())) return '';
                return date.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                });
              }}
            />

            <ChartTooltip
              cursor={{ strokeDasharray: '3 3' }}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleString('pt-BR')
                  }
                  indicator='dot'
                />
              }
            />

            <Area
              type='basis'
              dataKey='distance'
              fill='url(#fillDistance)'
              stroke='var(--primary)'
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
