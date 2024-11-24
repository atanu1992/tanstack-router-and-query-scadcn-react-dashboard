import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthContext } from '../auth';
import { ThemeProvider } from '@/components/theme/theme-provider';

interface AuthRouteContext {
  auth: AuthContext;
}

export const Route = createRootRouteWithContext<AuthRouteContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='app-ui-theme'>
        <Outlet />
        <TanStackRouterDevtools position='bottom-right' initialIsOpen={false} />
      </ThemeProvider>
    </>
  );
}
