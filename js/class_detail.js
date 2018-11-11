document.addEventListener('DOMContentLoaded', fillClass, false);

function fillClass() {
    var s = window.location.href
    console.log(s)
    s = s.split("?")[1]
    console.log(s)
    var title = s.split("=")[1]
    console.log(title)
    var c = title.split("%20").length
    for(var i = 0; i< c ; i++){
        title = title.replace("%20"," ")
    }


    console.log(title)
    for (var i = 0; i < classesDB.length; i++) {
        // A correct match has its title as a substring
        if (classesDB[i][7] == title) {
            // Matches the school dropdown
            fillDetails(classesDB[i]);
            console.log(classesDB[i]);

        }
    }

}

function fillDetails(c) {
    document.getElementById("course").id = c
    document.getElementById("class_number").innerHTML = c[7]
    document.getElementById("class_title").innerHTML = c[0] + " " + c[1] + " " + c[2]
    document.title = c[1] + " " + c[2]
    document.getElementById("course_description").innerHTML = c[9]
    document.getElementById("teacher").innerHTML = c[6]
    document.getElementById("class_time").innerHTML = c[5] + " " + twentyfour2ampm(c[3]) + "-" + twentyfour2ampm(c[4])
}
