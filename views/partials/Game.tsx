import { type FC, Fragment } from 'hono/jsx'
import type { PageData } from 'mikrob'

export type GameProps = {
  game: PageData
}

export const Game: FC<GameProps> = ({ game }) => {
  return (
    <a href={game.path} className="game">
      <img className="game__poster" src={game.thumb} alt="" />

      <h2 className="game__title heading heading--secondary">{game.title}</h2>

      <dl className="game__meta minor">
        {game.meta.map((meta) => (
          <Fragment key={meta.value}>
            <dt className="outline">{meta.label}</dt>
            {Array.isArray(meta.value) ? (
              meta.value.map((value) => <dd key={value}>{value}</dd>)
            ) : (
              <dd>{meta.value}</dd>
            )}
          </Fragment>
        ))}
      </dl>
    </a>
  )
}
