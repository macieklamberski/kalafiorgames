import type { PageList, PageView } from 'mikrob'
import { Game } from '../partials/Game'
import { Layout } from '../partials/Layout'

export const IndexTemplate: PageView = ({ page, pages }) => {
  const games: PageList = page.games
    .map((path: string) => pages.find((page) => page.path === path))
    .filter(Boolean)

  return (
    <Layout title={page.title}>
      <div class="spacing spacing--double">
        <div class="spacing">
          {games.map((game) => (
            <Game key={game?.path} game={game} />
          ))}
        </div>

        <nav>
          <a href="/archive">Check out archive for older games &rarr;</a>
        </nav>
      </div>
    </Layout>
  )
}

export default IndexTemplate
