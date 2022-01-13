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


    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag ="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumps-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
 function updatelike(message_id)
 {
 console.log("clicked on the like button"+message_id);
 button_id=message_id;
 likes=document.getElementById(button_id).value;
 updated_like=Number(likes)+1;
 console.log(updated_like);
 firebase.database().ref(room_name).child(message_id).update({
       like:updated_like
 });
 }
 room_name = localStorage.getItem("room_name");
 user_name = localStorage.getItem("user_name");

 function send()
 {
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
      document.getElementById("msg").value="";
 }
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="index.html";
 } 