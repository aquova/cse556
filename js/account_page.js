// Code for showing/manipulating the user account page

// Tab behavior from here: https://www.w3schools.com/howto/howto_js_tabs.asp
// Calendar view from here: https://javascript.daypilot.org/open-source/
document.addEventListener('DOMContentLoaded', disp, false);

function disp() {

    console.log(decodeURIComponent(document.cookie))

}

function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

function populateSchedule() {
    var dp = new DayPilot.Calendar("dp")
    dp.viewType = "Week"
    dp.dayBeginsHour = 8
    dp.dayEndsHour = 18
    dp.theme = "calendar_transparent"
    dp.eventMoveHandling = "Disabled"
    dp.eventResizeHandling = "Disabled"
    dp.init()
    dp.events.list = processCalendarEvents()
    dp.onEventClicked = function(d) {
        var page = "detail.html?class=" + d.e["data"]["name"]
        window.open(page, '_top')
    }
    dp.update()
}

function processCalendarEvents() {
    var chosen = getWorksheet()
    var output = []

    // Generates the array of classes, which should be an array of dictionaries
    for (var i = 0; i < chosen.length; i++) {
        var allMeetings = calcCalTimes(chosen[i])
        for (var j = 0; j < allMeetings.length; j++) {
            var classInfo = {}
            classInfo["id"] = output.length + 1
            classInfo["text"] = chosen[i][1] + " " + chosen[i][2]
            classInfo["start"] = allMeetings[j][0]
            classInfo["end"] = allMeetings[j][1]
            classInfo["name"] = chosen[i][7]
            output.push(classInfo)
        }
    }

    return output
}

function academicCalendar() {
    var dp = new DayPilot.Month("ac")
    dp.theme = "calendar_transparent"
    dp.eventMoveHandling = "Disabled"
    dp.eventResizeHandling = "Disabled"
    dp.init()
}

// Display 'Current Schedule' tab on page load
document.getElementById("defaultOpen").click()
populateSchedule()
academicCalendar()
