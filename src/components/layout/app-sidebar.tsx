import * as React from 'react';
import {
  BookOpenCheck,
  ChevronRight,
  LogOut,
  Users,
  UsersRound,
} from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

// This is sample data.
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Students',
      url: '/students',
      icon: UsersRound,
      items: [
        {
          title: 'Installation',
          url: '#',
          // isActive: true,
        },
        {
          title: 'Project Structure',
          url: '#',
        },
      ],
    },
    {
      title: 'Teachers',
      url: '/teachers',
      icon: Users,
      items: [
        {
          title: 'Routing',
          url: '#',
        },
        {
          title: 'Data Fetching',
          url: '#',
          isActive: false,
        },
        {
          title: 'Rendering',
          url: '#',
        },
        {
          title: 'Caching',
          url: '#',
        },
        {
          title: 'Styling',
          url: '#',
        },
        {
          title: 'Optimizing',
          url: '#',
        },
        {
          title: 'Configuring',
          url: '#',
        },
        {
          title: 'Testing',
          url: '#',
        },
        {
          title: 'Authentication',
          url: '#',
        },
        {
          title: 'Deploying',
          url: '#',
        },
        {
          title: 'Upgrading',
          url: '#',
        },
        {
          title: 'Examples',
          url: '#',
        },
      ],
    },
    {
      title: 'Exams',
      url: '/exams',
      icon: BookOpenCheck,
      items: [
        {
          title: 'Components',
          url: '#',
        },
        {
          title: 'File Conventions',
          url: '#',
        },
        {
          title: 'Functions',
          url: '#',
        },
        {
          title: 'next.config.js Options',
          url: '#',
        },
        {
          title: 'CLI',
          url: '#',
        },
        {
          title: 'Edge Runtime',
          url: '#',
        },
      ],
    },
    // {
    //   title: 'Architecture',
    //   url: '#',
    //   items: [
    //     {
    //       title: 'Accessibility',
    //       url: '#',
    //     },
    //     {
    //       title: 'Fast Refresh',
    //       url: '#',
    //     },
    //     {
    //       title: 'Next.js Compiler',
    //       url: '#',
    //     },
    //     {
    //       title: 'Supported Browsers',
    //       url: '#',
    //     },
    //     {
    //       title: 'Turbopack',
    //       url: '#',
    //     },
    //   ],
    // },
    // {
    //   title: 'Community',
    //   url: '#',
    //   items: [
    //     {
    //       title: 'Contribution Guide',
    //       url: '#',
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <img
          className='rounded-md h-32 max-w-lg mx-auto'
          src='https://picsum.photos/100'
          alt='sidebar logo'
          width={150}
          height={80}
        />
      </SidebarHeader>
      <SidebarContent className='gap-0'>
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen={false}
            className='group/collapsible'
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className='group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              >
                <CollapsibleTrigger>
                  <item.icon /> <span className='ml-2'>{item.title}</span>{' '}
                  <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent className={cn('mx-4')}>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.isActive ?? false}
                        >
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
      <Separator />
      <div className='flex m-2 p-2'>
        <Button className={cn('grow')}>
          <LogOut /> Logout
        </Button>
      </div>
    </Sidebar>
  );
}
