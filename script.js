const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYears = '1 January 2023'

function countDown() {
    const currentDate = new Date()
    const newYearsDate = new Date(newYears)


    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000)
    const minutes = Math.floor(totalSeconds / 60) % 60
    const hours = Math.floor(totalSeconds / 3600) % 24
    const days = Math.floor(totalSeconds / 3600 / 24)
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)

    console.log(seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

//first call
countDown()

setInterval(countDown, 1000)