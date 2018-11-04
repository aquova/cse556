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

    for (var i = 0; i < matches.length; i++) {
        var res = document.createElement("div")
        var name = document.createElement("p")
        name.innerHTML = matches[i][0] + " " + matches[i][1] + " - " + matches[i][6]
        res.appendChild(name)

        results.appendChild(res)
    }
}

// This shouldn't be called until search is input, only here for testing
showResults(classesDB)
