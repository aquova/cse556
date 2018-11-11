// Things to be stored in cookies:
// Username, courses on registration worksheet
// Username shall be stored verbatim, courses will be stored as "DEPARTMENT COURSE#"

// Cookie functions adapted from here: https://www.w3schools.com/js/js_cookies.asp

function setUsername(name) {
    document.cookie = "username=" + name + "; expires=Tue, 01 Jan 2019 00:00:01 GMT"
    window.location = "pages/account.html"

}

function getUsername() {
    var name = "username="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

function addCourse(course) {
    // If course is not already in cookie, add
    course = course.split(",")
    console.log(course)
    if (!checkCourse(course)) {
        var name = course[1] + " " + course[2] + "=true;"
        document.cookie = name
        console.log(course)

    }
}

function checkCourse(course) {

    var courseName = course[1] + " " + course[2]
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split("; ")
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        var storedName = c.split("=")[0]
        if (courseName == storedName) {
            return true
        }
    }
    return false
}

function removeCourse(course) {
    // If course is in cookie, then remove
    if (checkCourse(course)) {
        // If a cookie is set to a past date, it is automatically destroyed
        var name = course[1] + " " + course[2] + "=true;"
        document.cookie = name + " expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    }
}

function getWorksheet() {
    // Output array of courses from DB in worksheet
    var wkst = []
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split("; ")
    // Iterate through all cookies
    for (var i = 0; i < ca.length; i++) {
        var storedName = ca[i].split("=")
        // Don't want username
        if (storedName != "username") {
            var dept = storedName[0].split(" ")[0]
            var id = storedName[0].split(" ")[1]
            // Go thru all entries in DB, find a department and ID that match our cookie, add to our list
            for (var j = 0; j < classesDB.length; j++) {
                if ((dept == classesDB[j][1]) && (id == classesDB[j][2])) {
                    wkst.push(classesDB[j])
                    break
                }
            }
        }
    }

    return wkst
}
