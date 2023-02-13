const launch = new Date()
launch.setDate(1)
launch.setHours(12)
launch.setMinutes(0)
launch.setSeconds(0)
launch.setMonth(launch.getMonth() + 1)

setInterval(() => {
    const dateDiff = (launch - new Date()) / 1000
    let seconds = dateDiff % 60
    let mins = (dateDiff / 60) % 60
    let hours = (dateDiff / (60 * 60)) % 24
    let days = dateDiff / (60 * 60 * 24)

    seconds = Math.round(seconds)
    mins = seconds >= 30 ? Math.round(mins) - 1 : Math.round(mins)
    hours = Math.floor(hours)
    days = Math.floor(days)

    document.getElementById('secs').innerText =
        seconds < 10 ? `0${seconds}` : seconds
    document.getElementById('mins').innerText = mins < 10 ? `0${mins}` : mins
    document.getElementById('hours').innerText =
        hours < 10 ? `0${hours}` : hours
    document.getElementById('days').innerText = days < 10 ? `0${days}` : days
}, 1000)
