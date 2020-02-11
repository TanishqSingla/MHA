var pageLocation = window.location.href;

if (!pageLocation.includes("index")) {
	document.getElementsByTagName("a")[1].classList.remove("active");
} else if (!pageLocation.includes("explore")) {
	document.getElementsByTagName("a")[2].classList.remove("active");
} else if (!pageLocation.includes("community")) {
	document.getElementsByTagName("a")[3].classList.remove("active");
}
