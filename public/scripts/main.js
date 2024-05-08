document.addEventListener('DOMContentLoaded', () => {
    attachLinkListeners()

    window.addEventListener('popstate', () => {
        fetchPage(window.location.pathname, false)
    })
})

async function fetchPage(url, addToHistory) {
    try {
        const newHTML = await (await fetch(url)).text()
        const newDocument = new DOMParser().parseFromString(newHTML, 'text/html')

        document.title = newDocument.title
        document.body = newDocument.body
        document.head = newDocument.head

        if (addToHistory) {
            window.history.pushState({ path: url }, '', url)
            window.scrollTo(0, 0)
        }

        attachLinkListeners()
    } catch (error) {
        window.location.href = url
    }
}

function attachLinkListeners() {
    document.querySelectorAll('a').forEach((link) => {
        if (new URL(link.href).origin === window.location.origin) {
            link.removeEventListener('click', handleClick)
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
