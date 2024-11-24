import { ModeToggle } from '../theme/mode-toggle';
import AppAvatar from './app-avatar';
const AppHeader = () => {
  return (
    <header className='flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4'>
      <div className='grow'></div>
      <div className='flex-none mx-2'>
        <ModeToggle />
      </div>
      <div className='flex-none mx-2'>
        <AppAvatar />
      </div>
    </header>
  );
};

export default AppHeader;
