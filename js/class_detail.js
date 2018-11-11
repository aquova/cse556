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
    var school, dept, num;

    for (var i = 0; i < classesDB.length; i++) {
        // A correct match has its title as a substring
        if (classesDB[i][7] == title) {
            // Matches the school dropdown
            fillDetails(classesDB[i]);
            console.log(classesDB[i]);
            school = classesDB[i][0]
            dept = classesDB[i][1]
            num = classesDB[i][2]

        }
    }

    var count = 0;
    var sum = 0;

    for(var i = 0; i<reviews.length; i++){
        if (reviews[i][0] == school && reviews[i][1] == dept && reviews[i][2] == num){
            fillReviews(reviews[i], document.getElementById("reviews"))
            sum = sum + parseInt(reviews[i][5])
            console.log(sum)
            count = count + 1
        }
    }

    var r = " review"
    if(count > 1){
        r = " reviews"
    }

    var rate = (sum/count).toFixed(2);
    console.log(rate)

    document.getElementById("num_reviews").innerHTML = count + r
    document.getElementById("rating_detail").innerHTML = rate
    document.getElementById("top_num_reviews").innerHTML = count + r

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

function fillReviews( arr , elm){
    var div = document.createElement('div');
    div.className = 'customer-review_wrap';
    var course = arr

    var sp ='';
    if(arr[5] < 3){
        for(var i = 0; i< arr[5]; i++){
            sp = sp + '<span class="customer-rating-red"></span>'
        }
    }else{
        for(var i = 0; i< arr[5]; i++){
            sp = sp + '<span></span>'
        }
    }
    for(var i = 0; i < 5-arr[5]; i++){
        sp = sp + '<span class="round-icon-blank"></span>';
    }

    div.innerHTML =
        '<div class="customer-img">\
        <p>Grade Received</p>\
        <span>'+arr[4]+'</span>\
        </div>\
         <div class="customer-content-wrap">\
             <div class="customer-content">\
             <div class="customer-review">\
             <h6></h6>\
         '+sp+'\
         <div class="customer-rating">'+arr[5]+'</div>\
         </div>\
         <p class="customer-text">'+arr[6]+'</p>\
         </div>\
         </div>\
         <hr>';


    elm.appendChild(div);
}


// <div class="customer-rating">8.0</div>
//     </div>
//     <p class="customer-text">I love the noodles here but it is so rare that I get to come here. Tasty Hand-Pulled Noodles is the best type of whole in the wall restaurant. The staff are really nice, and you should be seated quickly. I usually get the
// hand pulled noodles in a soup. House Special #1 is amazing and the lamb noodles are also great. If you want your noodles a little chewier, get the knife cut noodles, which are also amazing. Their dumplings are great
// dipped in their chili sauce.
// </p>
// <p class="customer-text">I love how you can see into the kitchen and watch them make the noodles and you can definitely tell that this is a family run establishment. The prices are are great with one dish maybe being $9. You just have to remember
// to bring cash.
// </p>
//
// <span>28 people marked this review as helpful</span>
// <a href="#"><span class="icon-like"></span>Helpful</a>
// </div>
// </div>
// <hr>