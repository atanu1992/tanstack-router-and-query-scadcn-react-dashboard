import AppHeader from '@/components/layout/app-header'
import { AppSidebar } from '@/components/layout/app-sidebar'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div className='flex flex-1 flex-col gap-4 p-4'>
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className='aspect-video h-12 w-full rounded-lg bg-muted/50'
            />
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
