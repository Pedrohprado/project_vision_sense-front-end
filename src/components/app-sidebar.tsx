import * as React from 'react';

import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Glasses } from 'lucide-react';
import { Link } from 'react-router';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userConfig, setUserConfig] = React.useState<{
    email: string;
    name: string;
  } | null>(null);

  React.useEffect(() => {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');

    if (email && name) setUserConfig({ email, name });
  }, []);
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'
            >
              <Link to={'/'}>
                <Glasses className='!size-5' />
                <span className='text-base font-semibold'>Vision sense</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <NavUser user={userConfig} />
      </SidebarFooter>
    </Sidebar>
  );
}
