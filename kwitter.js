function login() {
    username = document.getElementById("usernameinpt").value;
   localStorage.setItem("username",username)
   window.location="kwitter_room.html"
}