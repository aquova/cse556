function sign_user_in() {
    clearCookies()
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value

    for(var i = 0; i < users.length; i++){
        if(users[i][0] == user){
            if(pass == users[i][1]){
                setUsername(user)
                return
            }
        }
    }
    alert("Incorrect username or password")
}

