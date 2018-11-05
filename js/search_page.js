// Code for manipulating the search page

function toggleAdvanced() {
    var adv = document.getElementById("advanced")

    if (adv.style.visibility == "hidden") {
        adv.style.visibility = "visible"
    } else {
        adv.style.visibility = "hidden"
    }
}

function showResults(matches) {
    // matches is an array of courses to display
    var results = document.getElementById("searchResults")
    // Delete previous children
    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }

    for (var i = 0; i < matches.length; i++) {
        var res = document.createElement("div")
        // TODO: Make this a nice and pretty div
        var name = document.createElement("p")
        name.innerHTML = matches[i][1] + " " + matches[i][2] + " - " + matches[i][7]
        res.appendChild(name)

        results.appendChild(res)
    }
}

function search() {
    var matches = []
    var school = document.getElementById("washuSchool").value
    var department = document.getElementById("department").value
    // var semester = document.getElementById("semester").value

    for (var i = 0; i < classesDB.length; i++) {
        // Course matches school search
        if ((classesDB[i][0] == school) || (school == "ALL")) {
            if ((classesDB[i][1] == department) || (department == "ALL")) {
                matches.push(classesDB[i])
            }
        }
    }

    showResults(matches)
}

// When the "school" dropdown is changed, the options in the "department" dropdown should change
function populateDepartment() {
    var school = document.getElementById("washuSchool").value
    var departmentNode = document.getElementById("department")
    // Clear previous dropdown
    while (departmentNode.firstChild) {
        departmentNode.removeChild(departmentNode.firstChild);
    }
    // Always have the "All departments" option
    var opt = document.createElement("option")
    opt.value = "ALL"
    opt.innerHTML = "All Departments"
    departmentNode.append(opt)

    if (school == "ALL") {
        // Populate with all keys in map
    } else {
        var dpts = deptMap[school]
        for (var i = 0; i < dpts.length; i++) {
            var opt = document.createElement("option")
            opt.value = dpts[i]
            opt.innerHTML = dpts[i]
            departmentNode.append(opt)
        }
    }
}
