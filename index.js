
let counthome = 0
let countguest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function add1home() {
    counthome +=1
    homeEl.textContent = counthome
}

function add2home() {
    counthome +=2
    homeEl.textContent = counthome
}

function add3home() {
    counthome +=3
    homeEl.textContent = counthome
}

function add1guest() {
    countguest +=1
    guestEl.textContent = countguest
}

function add2guest() {
    countguest +=2
    guestEl.textContent = countguest
}

function add3guest() {
    countguest +=3
    guestEl.textContent = countguest
}