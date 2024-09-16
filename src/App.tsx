import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/toaster'

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <HelmetProvider>
        <Helmet titleTemplate="%s | devjackson" />
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </ThemeProvider>
  )
}
