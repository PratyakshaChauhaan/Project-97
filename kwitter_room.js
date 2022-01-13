const firebaseConfig = {
      apiKey: "AIzaSyAQLmQv0uMs1_-yvqLkK6wD_01vDpMTjBg",
      authDomain: "kwitter-75411.firebaseapp.com",
      databaseURL: "https://kwitter-75411-default-rtdb.firebaseio.com",
      projectId: "kwitter-75411",
      storageBucket: "kwitter-75411.appspot.com",
      messagingSenderId: "956408160704",
      appId: "1:956408160704:web:db09bab6cb0a70e65be825"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "addind room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location ="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html"; 
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}