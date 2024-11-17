import { Fragment } from 'hono/jsx'
import type { PageView } from 'mikrob'
import { Copy } from '../partials/Copy'
import { Installer } from '../partials/Installer'
import { Layout } from '../partials/Layout'
import { Soundtrack } from '../partials/Soundtrack'

export const PostTemplate: PageView = ({ page }) => {
  return (
    <Layout title={page.title}>
      <article class="spacing spacing--double">
        <div class="spacing">
          <h1 class="heading heading--primary">{page.title}</h1>
          <Copy body={page.body} />
        </div>

        <section id="downloads">
          <h2 class="outline">Downloads</h2>

          <ul class="downloads">
            {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
            {page.downloads.map((download: any) => (
              <li key={download.link}>
                <a href={download.link} download>
                  {download.type === 'installer' && <Installer />}
                  {download.type === 'soundtrack' && <Soundtrack />}
                  <span class="heading heading--secondary">{download.title}</span>
                  <small class="minor">{download.description}</small>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="media">
          <h2 class="outline">Media</h2>

          <ul class="media spacing">
            {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
            {page.media.map((medium: any) => (
              <Fragment key={medium.link}>
                {medium.type === 'image' && (
                  <li class="media__image">
                    <img src={medium.link} alt={medium.alt} />
                  </li>
                )}

                {medium.type === 'video' && (
                  <li class="media__video">
                    <iframe src={medium.link} allowfullscreen title="Video" />
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default PostTemplate
