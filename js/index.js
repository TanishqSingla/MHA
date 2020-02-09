var page = "explore";
var pageLocation = window.location.href;

if (pageLocation.includes(page)) {
  document.getElementsByTagName("a")[1].classList.remove("active");
  document.getElementsByTagName("a")[2].classList.add("active");
}
