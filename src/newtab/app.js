
let el = document.getElementById('curent-date')
let elMyNote = document.getElementById('my-note')
let elShowIcon = document.getElementById('show-icon')
let elHideIcon = document.getElementById('hide-icon')
let elSwitchBtn = document.getElementById('switch-btn')
let elLinkList = document.getElementById('link-list')
let elAddLinkBtn = document.getElementById('add-link-btn')

// --------------
let curentDate = new Date().toLocaleDateString('fa-IR')
let dayName = new Date().toLocaleDateString('fa-IR', { weekday: 'long' })
el.innerText = `${dayName} ${curentDate}\n${new Date()}`
// --------------

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
// ----------------
elAddLinkBtn.addEventListener('click', function (e) {
    const linkTitle = prompt('Enter link Title:')
    const link = prompt('Enter the link:')
    const strStoredLinkList = localStorage.getItem('link-list')
    let storedLinkList = []
    if (strStoredLinkList !== null) {
        storedLinkList = JSON.parse(strStoredLinkList)
    }
    storedLinkList.push({
        linkTitle,
        link,
    })
    const newStrStoredLinkList = JSON.stringify(storedLinkList)
    localStorage.setItem('link-list', newStrStoredLinkList)
    // TODO
    location.reload();
})
const linkslist = JSON.parse(localStorage.getItem('link-list')) ?? []
let linklistItems = ''

for (let index = 0; index < linkslist.length; index++) {
    linklistItems += `
    <div class="border group flex rounded-lg px-1 gap-1">
        <a href="${linkslist[index].link}" class="block hover:underline  ">
        ${linkslist[index].linkTitle}
        </a>
        <div class="ci-link-list-item hover:bg-red-500 cursor-pointer hidden group-hover:block" key="${index}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"
                key="${index}">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
    </div>`
}
elLinkList.innerHTML = linklistItems

let elsLinkListItems = document.getElementsByClassName('ci-link-list-item')

Array.prototype.forEach.call(elsLinkListItems, (element) => {
    element.addEventListener('click', (event) => {
        const linkIndex = parseInt(event.target.getAttribute('key'))
        const theLinkslist = JSON.parse(localStorage.getItem('link-list')) ?? []
        theLinkslist.splice(linkIndex, 1)
        localStorage.setItem('link-list', JSON.stringify(theLinkslist))
        // TODO
        location.reload();
    })
})