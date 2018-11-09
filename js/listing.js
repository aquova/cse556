document.addEventListener('DOMContentLoaded', parse, false);


function parse() {
    var s = window.location.href
    console.log(s)
    s = s.split("?")[1]
    console.log(s)
    var params = s.split("&")
    console.log(params)
    var textBox = params[0].split("=")[1]
    var school = params[1].split("=")[1]
    var department = params[2].split("=")[1]
    console.log(textBox)
    var list = document.getElementById('listing');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    var count = 0;
    for (var i = 0; i < classesDB.length; i++) {
        // A correct match has its title as a substring
        if (classesDB[i][7].toLowerCase().includes(textBox)) {
            // Matches the school dropdown
            if ((classesDB[i][0] == school) || (school == "ALL")) {
                // Matches the department dropdown
                if ((classesDB[i][1] == department) || (department == "ALL")){
                    //matches.push(classesDB[i])
                    buildListing(list, classesDB[i])
                    count=count+1;
                }
            }
        }
    }
    document.getElementById("search_count").innerHTML = count + " search results"
    var res = ""
    console.log(textBox.length)
    if(textBox === undefined || textBox.length == 0) {
        res = "ALL CLASSES"
    }else {
        console.log(textBox)
        res = textBox;
        if (department.length > 0) {
            res = res + " in " + department
        }
        if (school.length > 0) {
            res = res + " at " + school
        }
    }
    // }else{
    //     res = "ALL CLASSES"
    // }

    document.getElementById("search_field").innerHTML = res
}

function buildListing(elm, arr) {

    var div = document.createElement('div');
    div.id = arr[7];

    div.className = 'featured-place-wrap full';

    div.innerHTML =
        '<span class="featured-rating-orange ">6.5</span>\
        <a href="detail.html?class='+arr[7]+'">\
        <div class="featured-title-box">\
        <h6>'+arr[0] + ' '+ arr[1]+ ' '+ arr[2]+': '+ arr[7] +'</h6></a>\
        <p>'+arr[6]+' </p> <span>• </span>\
        <p>Reviews</p> <span> • </span>\
        <p><span>$$$</span>$$</p>\
        <ul><li><span class="icon-location-pin"></span>\
        <p>'+arr[5] + ' '+arr[3]+'-'+arr[4] +'</p></li>\
        <p>'+arr[9]+'</p></li>\
        <li><span class="icon-link"></span> <p>'+arr[8]+'</p></li>\
        </ul>\
        <div class="bottom-icons">\
        <span class="ti-heart" id="'+arr[7]+'" onclick="likeclass(this)"></span>\
         </div>';


    elm.appendChild(div);


}

function likeclass(elem) {
    console.log(elem.id);
    elem.style.color = 'red';
}
