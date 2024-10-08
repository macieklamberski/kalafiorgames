document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('click', (event) => {
        const anchor = event.target.closest('a')
        const isActive = anchor?.host === window.location.host
        const isLink = !anchor?.hasAttribute('download')

        // TODO: Possibly check the content type of the link target instead of relying on download
        // links containing 'download' attribtute.
        if (anchor && isActive && isLink) {
            event.preventDefault()
            fetchPage(anchor.getAttribute('href'), true)
        }
    })

    window.addEventListener('popstate', (event) => {
        const { html = null, scrollY = 0 } = event.state || {}

        if (html) {
            // TODO: We could store cache-related header in the state and only load the HTML from
            // the state if the cache is not expired.
            updatePage(html, scrollY)
        } else {
            fetchPage(window.location.pathname, false)
        }
    })
})

const fetchPage = async (path, isForward) => {
    try {
        const html = await (await fetch(path)).text()

        if (isForward) {
            window.history.pushState({ html, scrollY: window.scrollY }, '', path)
        }

        updatePage(html, 0)
    } catch (error) {
        window.location.href = path
    }
}

const updatePage = (html, scrollY) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')

    document.title = doc.title
    document.body = doc.body
    window.scrollTo(0, scrollY)
}
