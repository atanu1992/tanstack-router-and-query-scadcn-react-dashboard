import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth } from './auth'

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    auth: undefined!
  },
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// eslint-disable-next-line react-refresh/only-export-components
const InnerApp = () => {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ auth }} />
}

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
