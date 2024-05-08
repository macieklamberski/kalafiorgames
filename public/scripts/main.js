document.addEventListener('DOMContentLoaded', () => {
    attachListeners()

    window.addEventListener('popstate', (event) => {
        const { html, scrollY = 0 } = event.state || {}

        if (html) {
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
    document.head = doc.head
    document.body = doc.body

    window.scrollTo(0, scrollY)

    attachListeners()
}

function attachListeners() {
    document.querySelectorAll('a').forEach((link) => {
        if (link.host === window.location.host) {
            link.addEventListener('click', handleClick)
        }
    })
}

function handleClick(event) {
    if (!this.hasAttribute('download')) {
        event.preventDefault()
        fetchPage(this.getAttribute('href'), true)
    }
}
