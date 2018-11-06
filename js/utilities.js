// Some useful utility functions

// Converts 24h time (as an int) to 12h AM/PM time (as a string)
function twentyfour2ampm(time) {
    var hour = Math.floor((time / 100))
    var minute = time - (hour * 100)
    hour %= 12
    if (hour == 0) {
        hour = 12
    }
    var ampm = hour + ":" + ("0" + minute).slice(-2) // This way the minute value is always 2 digits
    if (time >= 1200) {
        ampm += "P"
    } else {
        ampm += "A"
    }

    return ampm
}
