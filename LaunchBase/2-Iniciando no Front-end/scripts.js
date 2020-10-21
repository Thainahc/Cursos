const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const maximize = document.querySelector('.maximize-modal')
const unmaximize = document.querySelector('.unmaximize-modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const pageId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${pageId}`

        modal.classList.remove('maximized')
        maximize.style.visibility = "visible"
        unmaximize.style.visibility = "hidden"
    })
}

document.querySelector('.maximize-modal').addEventListener("click", function () {
    modal.classList.add('maximized')
    maximize.style.visibility = "hidden"
    unmaximize.style.visibility = "visible"
})

document.querySelector('.unmaximize-modal').addEventListener("click", function () {
    modal.classList.remove('maximized')
    maximize.style.visibility = "visible"
    unmaximize.style.visibility = "hidden"
})

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})