const btn = document.querySelector('div.sidebarBtn')
const sidebar = document.querySelector("div.sidebar")
const content = document.querySelector('div#content')

btn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
    content.classList.toggle("active")
})