var pageLocation = window.location.href;

if (!pageLocation.includes("index")) {
  document.getElementsByTagName("a")[1].classList.remove("active");
} else if (!pageLocation.includes("explore")) {
  document.getElementsByTagName("a")[2].classList.remove("active");
} else if (!pageLocation.includes("community")) {
  document.getElementsByTagName("a")[3].classList.remove("active");
}

var box = document.getElementById("box");

function rotate() {
  box.classList.toggle("rotate");
  box.classList.toggle("rotated");
  var subInfo = document.querySelector(".sub-info");
  if (box.classList.contains("rotated")) {
    subInfo.style.display = "block";
  } else {
    subInfo.style.display = "none";
  }
}
