import { ModeToggle } from '../theme/mode-toggle';
import { SidebarTrigger } from '../ui/sidebar';
import AppHeaderSettings from './app-header-settings';
const AppHeader = () => {
  return (
    <header className='flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4'>
      <div className='grow'>
        <SidebarTrigger />
      </div>
      <div className='flex-none mx-2'>
        <ModeToggle />
      </div>
      <div className='flex-none mx-2'>
        <AppHeaderSettings />
      </div>
    </header>
  );
};

export default AppHeader;
