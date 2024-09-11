import { CodeXml } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <CodeXml className="h-8 w-8" />
          <span className="font-semibold">devjackson</span>
        </div>
        <footer className="text-sm">
          Painel de controle do desenvolvedor Jackson -{' '}
          {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
