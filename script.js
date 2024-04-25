let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let btn = document.querySelector(".reload");
function onLine(){
    title.innerHTML = "Online Now";
    title.style.color = "cornflowerblue";
    ul.classList.add("hide");
    btn.classList.add("hide");
}
function offLine(){
    title.innerHTML = "Offline Now";
    title.style.color = "#666";
    ul.classList.remove("hide");
    btn.classList.remove("hide");
}
window.onload = function(){
  if(window.navigator.onLine){
    onLine()
  }else{
    offLine()
  }
}
window.addEventListener("online" , ()=>{
  onLine();
});
window.addEventListener("offline" , ()=>{
  offLine();
});
btn.addEventListener("click", ()=>{
  window.location.reload();
});