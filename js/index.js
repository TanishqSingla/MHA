var pageLocation = window.location.href; //gets the current url

//the if else below changes the active tab on the page
if (!pageLocation.includes("index")) {
  document.getElementsByTagName("a")[1].classList.remove("active");
} else if (!pageLocation.includes("explore")) {
  document.getElementsByTagName("a")[2].classList.remove("active");
} else if (!pageLocation.includes("community")) {
  document.getElementsByTagName("a")[3].classList.remove("active");
}

var box = document.getElementById("box");

//this code changes the display of text from none to block when the box is clicked

box.addEventListener("click", function() {
  //the box.classList.toggle changes the class of box from rotate to rotated and vice-versa
  box.classList.toggle("rotate");
  box.classList.toggle("rotated");

  //this subInfo value is temporary just to get the cast, this variable is subject to change
  var subInfo = document.querySelector(".sub-info");
  //basic if else to change the style of the text from none to block and vice-versa
  if (box.classList.contains("rotated")) {
    subInfo.style.display = "block";
  } else {
    subInfo.style.display = "none";
  }
});
