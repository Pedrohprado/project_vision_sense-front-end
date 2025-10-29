import {
  getReadingsBydeviceId,
  type ReadingPorcentProps,
  type ReadingsType,
} from '@/api/readings';
import { AppSidebar } from '@/components/app-sidebar';
import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { SectionCards } from '@/components/section-cards';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [dataReadings, setDataReadings] = useState<ReadingsType[]>([]);
  const [dataPorcent, setDataPorcent] = useState<ReadingPorcentProps | null>(
    null
  );

  useEffect(() => {
    const helperFunction = async () => {
      const data = await getReadingsBydeviceId(
        '541773b1-4e67-4317-be4f-14b1adaeb0cb'
      );
      setDataReadings(data.listReadings);
      setDataPorcent(data.porcent);
    };

    setInterval(async () => {
      await helperFunction();
    }, 10000);
  }, []);

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant='inset' />
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-2'>
            <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
              <SectionCards dataPorcent={dataPorcent} />
              <div className='px-4 lg:px-6'>
                <ChartAreaInteractive chartData={dataReadings} />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
