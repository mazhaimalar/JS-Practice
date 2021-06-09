let menuImgTouch = document.getElementById("NavMain");
let contentList = document.getElementById("contents");

menuImgTouch.addEventListener("click", function (){
  contentList.classList.toggle("active")
})
