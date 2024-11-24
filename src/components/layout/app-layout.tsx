import { SidebarInset, SidebarProvider } from '../ui/sidebar'
import AppHeader from './app-header'
import { AppSidebar } from './app-sidebar'
import { ReactNode } from 'react'

const AppLayout = ({children}:{children:ReactNode}) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppLayout