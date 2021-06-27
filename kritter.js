function load(){
    user=document.getElementById("user").value;
    localStorage.setItem("key",user);
    window.location="kwitter.html";
}