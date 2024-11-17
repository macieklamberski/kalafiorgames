import type { FC } from 'hono/jsx'

export type CopyProps = {
  body: string
}

export const Copy: FC<CopyProps> = ({ body }) => {
  // biome-ignore lint/security/noDangerouslySetInnerHtml: No need for that.
  return <div className="copy" dangerouslySetInnerHTML={{ __html: body }} />
}
