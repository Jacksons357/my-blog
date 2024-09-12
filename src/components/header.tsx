import { CodeXml } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { NavLink } from 'react-router-dom'

const headerLinks = [
  {
    title: 'Início',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Projetos',
    href: '/projects',
  },
  {
    title: 'Sobre',
    href: '/about',
  },
  {
    title: 'Contato',
    href: '/contact',
  },
]

export function Header() {
  return (
    <header className="flex h-12 items-center border-b">
      <div className="flex flex-row w-[1200px] mx-auto justify-between">
        <div className="flex items-center">
          <a href="/" className="items-center flex gap-2">
            <CodeXml className="w-5 text-secondary-foreground " />
            <span className="text-secondary-foreground font-semibold">
              devjackson
            </span>
          </a>
        </div>

        <nav className="flex gap-5 items-center">
          {headerLinks.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-secondary-foreground text-sm'
                  : 'text-muted-foreground hover:text-secondary-foreground transition-colors text-sm'
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}
