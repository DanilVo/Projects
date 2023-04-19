const nav = document.querySelector(".nav");
window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 30) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

function showInput() {
  const inp = document.querySelector("input");
  if (inp.style.display === "none") {
    console.log("work");
    inp.style.display = "block";
  } else {
    inp.style.display = "none";
  }
}

function hoverShow() {
  const hov = document.querySelector("#hover-div");
  if (hov.classList.contains("hidden")) {
    
      hov.classList.remove("hidden");
    hov.classList.add("shown");
  } else {
    
     hov.classList.remove("shown");
    hov.classList.add("hidden");
  }
}

function noHoverShow() {
  const hov = document.getElementById("hover-div");
  if (hov.style.display === "block") {
    hov.style.display = "none";
  }
}

function noRotate() {
  const rotate = document.getElementById("fa-caret-down");
  rotate.style.transform =
    rotate.style.transform === "rotate(0deg)"
      ? "rotate(180deg)"
      : "rotate(0deg)";
}

function rotate() {
  const rotate = document.getElementById("fa-caret-down");
  rotate.style.transform =
    rotate.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
}

var vid = document.querySelector("#trailer");
document.querySelector(".short-description").style.display = "none"
vid.muted = true;
vid.autoplay = true;
vid.load();

function autoPlay() {
  vid.autoplay = true;
  vid.load();
}

function endVid() {
  document.querySelector(".volume").style.display = "none";
  vid.style.display = "none";
  document.getElementById("image-trailer").style.display = "block";
  document.querySelector(".replay").style.display = "block";
  document.querySelector(".short-description").style.display = "block"
}

function replay() {
  vid.autoplay = true;
  vid.muted = true;
  vid.style.display = "block";
  vid.currentTime = 0;
  vid.load();
  document.getElementById("image-trailer").style.display = "none";
  document.querySelector(".replay").style.display = "none";
  document.querySelector(".fa-volume-high").style.display = "block";
  document.querySelector(".fa-volume-xmark").style.display = "none";
  document.querySelector(".volume").style.display = "block";
  document.querySelector(".short-description").style.display = "none"
  console.log("replay");
}

function muted() {
  vid.muted = !vid.muted;

  document.querySelector(".fa-volume-xmark").style.display = vid.muted
    ? "none"
    : "block";
  document.querySelector(".fa-volume-high").style.display = vid.muted
    ? "block"
    : "none";
}
