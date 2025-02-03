import type { FC, PropsWithChildren } from 'hono/jsx'
import { Header } from './Header'

export type LayoutProps = PropsWithChildren<{
  title?: string
  description?: string
}>

export const Layout: FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <script
          async
          src="https://umami.lamberski.com/stats"
          data-website-id="bf823301-f78b-4eef-ab53-4c8774882306"
        />
      </head>
      <body class="container">
        <Header />
        <main class="content">
          {children}
          <script src="/scripts/main.js" />
        </main>
      </body>
    </html>
  )
}
