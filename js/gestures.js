delete Hammer.defaults.cssProps.userSelect
const aside = document.querySelector(".aside-container")


const body = document.getElementById("body")
const hammerjs = new Hammer(body)
hammerjs.on("panleft panright", e => {
    if (e.pointerType === 'touch') {
        if (e.type === 'panright' && e.distance > 100) {
            aside.classList.add("active")
        } else if (e.type === 'panleft' && e.distance > 100) {
            aside.classList.remove("active")
        }
    }
})