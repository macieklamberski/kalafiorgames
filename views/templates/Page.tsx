import type { PageView } from 'mikrob'
import { Copy } from '../partials/Copy'
import { Layout } from '../partials/Layout'

export const PageTemplate: PageView = ({ page }) => {
  return (
    <Layout title={page.title}>
      <article class="spacing">
        <h1 class="heading heading--primary">{page.title}</h1>
        <Copy body={page.body} />
      </article>
    </Layout>
  )
}

export default PageTemplate
