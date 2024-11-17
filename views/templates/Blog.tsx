import type { PageView } from 'mikrob'
import { Layout } from '../partials/Layout'
import { Post } from '../partials/Post'

export const BlogTemplate: PageView = ({ page, pages }) => {
  const posts = pages.filter((page) => page.path.startsWith('/blog/')).reverse()

  return (
    <Layout title={page.title}>
      <section class="spacing spacing--double">
        {posts.map((post) => (
          <Post key={post.path} post={post} isList={true} />
        ))}
      </section>
    </Layout>
  )
}

export default BlogTemplate
