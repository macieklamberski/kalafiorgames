import type { FC } from 'hono/jsx'
import type { PageData } from 'mikrob'
import { Copy } from './Copy'

export type PostProps = {
  post: PageData
  isList?: boolean
}

export const Post: FC<PostProps> = ({ post, isList }) => {
  const time = new Date(post.published)
  const formattedDate = time.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="spacing">
      {isList ? (
        <h2 className="heading heading--primary">
          <a href={post.path}>{post.title}</a>
        </h2>
      ) : (
        <h1 className="heading heading--primary">{post.title}</h1>
      )}

      <Copy body={post.body} />

      <footer className="minor">
        <a href={post.path}>
          <time>{formattedDate}</time>
        </a>
      </footer>
    </article>
  )
}
