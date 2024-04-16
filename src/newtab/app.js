
let el = document.getElementById('curent-date')
let elMyNote = document.getElementById('my-note')
let elShowIcon = document.getElementById('show-icon')
let elHideIcon = document.getElementById('hide-icon')
let elSwitchBtn = document.getElementById('switch-btn') 
// --------------
let curentDate = new Date().toLocaleDateString('fa-IR')
let dayName = new Date().toLocaleDateString('fa-IR', { weekday: 'long' })
el.innerText = `${dayName} ${curentDate}\n${new Date()}`
// --------------
console.log(localStorage.getItem("my-note"))
elMyNote.value = localStorage.getItem("my-note")

elMyNote.addEventListener('input', function (e) {
    localStorage.setItem("my-note", e.target.value);

})
document.addEventListener("visibilitychange", (event) => {
    // TODO
    // let storedText = localStorage.getItem("my-note");
    // elMyNote.value = storedText

    // if (document.visibilityState == "visible") {
    // }
});
// --------------
if (localStorage.getItem("note-state") == 'hidden') {
    elMyNote.classList.add('hidden')
    elHideIcon.classList.add('hidden')
} else {
    elShowIcon.classList.add('hidden')
}

elSwitchBtn.addEventListener('click', function (e) {
    if (localStorage.getItem("note-state") == 'hidden') {
        elHideIcon.classList.remove('hidden')
        elShowIcon.classList.add('hidden')
        elMyNote.classList.remove('hidden')
        localStorage.setItem("note-state", 'visible')
    } else {
        elHideIcon.classList.add('hidden')
        elShowIcon.classList.remove('hidden')
        elMyNote.classList.add('hidden')
        localStorage.setItem("note-state", 'hidden')
    }
})