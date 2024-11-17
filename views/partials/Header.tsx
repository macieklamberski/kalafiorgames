import type { FC } from 'hono/jsx'
import { Logo } from './Logo'

export const Header: FC = () => {
  const menu = [
    { href: '/', label: 'Games' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: 'http://facebook.com/kalafiorgames', label: 'Facebook' },
    { href: 'http://x.com/kalafiorgames', label: 'X' },
  ]

  return (
    <header class="header spacing">
      <a href="/" class="header__logo" title="Back to home">
        <Logo />
      </a>

      <nav class="header__menu">
        {menu.map(({ href, label }) => (
          <a href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
