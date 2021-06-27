var firebaseConfig = {
  apiKey: "AIzaSyDYqFy_M5Xk_prX8i4XxC3ryEIBLPDECJ8",
  authDomain: "kritter-461cc.firebaseapp.com",
  projectId: "kritter-461cc",
  storageBucket: "kritter-461cc.appspot.com",
  messagingSenderId: "565531920672",
  appId: "1:565531920672:web:bafb0bd47c5f9c91baef45",
  measurementId: "G-FMDLQF8L90"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var oop=localStorage.getItem("key");
document.getElementById("nam").innerHTML="Welcome, "+oop+"!";

function logout(){
  window.location="kwit.html";
}
function addroom(){
  var alge=document.getElementById("text").value;
  localStorage.setItem("keyk",alge);
  firebase.database().ref("/").child(alge).update({
    something:"word"
  });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name= "+Room_names);
 var row="<div id="+Room_names+" class='room_name' onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();

function redirect(name){
  console.log(name);
  localStorage.setItem("key0",name);
  window.location="kritter_room.html";
}