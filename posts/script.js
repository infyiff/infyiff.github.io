// bad code but i speedran this ok

const container = document.getElementById("article-content")
const titleHeader = document.getElementById("title-header")
const dateDisplay = document.getElementById("date-display")

const params = new URLSearchParams(window.location.search)

const view = params.has("v") && params.get("v")

if (view) {
    fetch("posts.json").then(response => response.json()).then(response => {
        const found = response.find((e) => e.id == view)
        if (found.content.length === 0) { found.content = "Tm8gdGV4dCBhdmFpbGFibGUu" }

        container.innerHTML = markdownit().render(atob(found.content))
        titleHeader.innerText = found.title
        dateDisplay.innerText = found.date
        dateDisplay.title = `Post last changed on - ${new Date(found.date).toDateString()}`
    })
}
