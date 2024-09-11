import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <HelmetProvider>
        <Helmet titleTemplate="%s | devjackson" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
