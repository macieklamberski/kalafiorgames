import type { PageView } from 'mikrob'
import { Layout } from '../partials/Layout'
import { Post } from '../partials/Post'

export const PostTemplate: PageView = ({ page }) => {
  return (
    <Layout title={page.title}>
      <Post post={page} isList={false} />
    </Layout>
  )
}

export default PostTemplate
