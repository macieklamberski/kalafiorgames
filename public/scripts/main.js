document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.addEventListener('click', (event) => {
        const link = event.target.closest('a')

        // TODO: Possibly check the content type of the link target instead of relying on download
        // links containing 'download' attribtute.
        if (link && link.host === window.location.host && !link.hasAttribute('download')) {
            event.preventDefault()
            fetchPage(link.getAttribute('href'), true)
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

async function fetchPage(path, isForward) {
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

function updatePage(html, scrollY) {
    const doc = new DOMParser().parseFromString(html, 'text/html')

    document.title = doc.title
    document.body = doc.body
    window.scrollTo(0, scrollY)
}
