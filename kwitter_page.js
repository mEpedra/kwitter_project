//YOUR FIREBASE LINKS
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
    var username =localStorage.getItem("username")
    var roomname =localStorage.getItem("roomname")
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
Name =message_data["name"]
message =message_data["message"]
like= message_data["like"]
namewithtag ="<h4> "+Name+" <img src='tick.png' class='user_tick'>  </h4>"
messagetag= "<h4 class='message_h4'>"+message+"</h4>" 
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updatelike(this.id)'>";
spantag="<span class='glyphicon glyphicon-thumbs-up' like:"+like+"></span></button>"
row=namewithtag+messagetag+likebutton+spantag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
      function logout(){
            localStorage.removeItem("username")
            localStorage.removeItem("roomname")
            window.location="index.html"
     }
     function send(){
      message =document.getElementById("message").value
      firebase.database().ref(roomname).push({
            name:username, message:message, like:0
      })
     }
getData();
      function updatelike(messageid){
            buttonid=messageid
            likes= document.getElementById(buttonid).value
            updatedlikes=Number(likes)+1
            firebase.database().ref(roomname).child(messageid).update({
                  like:updatelikes
            })
      }
