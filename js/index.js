function slide() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("slide");
  nav.classList.toggle("slided");
}

function rotate() {
  var box = document.getElementById("box");
  box.classList.toggle("rotate");
  box.classList.toggle("rotated");
}
