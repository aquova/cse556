function sign_user_in() {
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value

    console.log(user)
    console.log(pass)

    for(var i = 0; i < users.length; i++){
        if(users[i][0] == user){
            if(pass == users[i][1]){
                setUsername(user)
            }
        }
    }
}

