let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

homeScore = 0
guestScore = 0

function oneHome() {
    homeScore += 1
    scoreHome.textContent = homeScore
}

function twoHome() {
    homeScore += 2
    scoreHome.textContent = homeScore
}

function threeHome() {
    homeScore += 3
    scoreHome.textContent = homeScore
}

function oneGuest() {
    guestScore += 1
    scoreGuest.textContent = guestScore
}

function twoGuest() {
    guestScore += 2
    scoreGuest.textContent = guestScore
}

function threeGuest() {
    guestScore += 3
    scoreGuest.textContent = guestScore
}