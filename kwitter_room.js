
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAhp3ZCH7GtPEDszf49e038Y8ZsFSb7iEw",
      authDomain: "kwitter-d0cfc.firebaseapp.com",
      databaseURL: "https://kwitter-d0cfc-default-rtdb.firebaseio.com",
      projectId: "kwitter-d0cfc",
      storageBucket: "kwitter-d0cfc.appspot.com",
      messagingSenderId: "358108902003",
      appId: "1:358108902003:web:93b0860568eb028f21b006"
    };
    
    firebase.initializeApp(firebaseConfig)
    var Username =localStorage.getItem("username")
    document.getElementById("username").innerHTML="Hello " + Username
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='roomname' id="+roomname+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function addroom(){
      roomname= document.getElementById("roomname").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding a new room"
      })          
      localStorage.setItem("roomname",roomname)
      window.location="kwitter_page.html"
}
function redirecttoroomname(name) {
      localStorage.setItem("roomname", name)
      window.location="kwitter_page.html"
}
function logout(){
       localStorage.removeItem("username")
       localStorage.removeItem("roomname")
       window.location="index.html"
}