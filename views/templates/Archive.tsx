import type { PageList, PageView } from 'mikrob'
import { Game } from '../partials/Game'
import { Layout } from '../partials/Layout'

export const ArchiveTemplate: PageView = ({ page, pages }) => {
  const games: PageList = page.games
    .map((path: string) => pages.find((page) => page.path === path))
    .filter(Boolean)

  return (
    <Layout title={page.title}>
      <div class="spacing spacing--double">
        <div class="spacing">
          <h1 class="heading heading--primary">{page.title}</h1>

          <div class="copy">
            <p>{page.description}</p>
          </div>

          {games.map((game) => (
            <Game key={game.path} game={game} />
          ))}
        </div>

        <nav>
          <a href="/">&larr; Return to Home page</a>
        </nav>
      </div>
    </Layout>
  )
}

export default ArchiveTemplate
