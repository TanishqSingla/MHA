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
		subInfo.classList.add("show");
		subInfo.classList.remove("hide");
	} else {
		subInfo.classList.add("hide");
		subInfo.classList.remove("show");
	}
}
