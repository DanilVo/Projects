const nav = document.querySelector('.nav');
window.onscroll = function() {
    var top = window.scrollY;
    if (top >= 30){
        nav.classList.add('active')
    } else {
        nav.classList.remove('active');
    }
}

function showInput() {
    const inp = document.querySelector("input");
    if (inp.style.display === "none") {
        console.log("work")
        inp.style.display = "block"
    } else {
        inp.style.display = "none"
    }
    // inp.style.display ? "block" : "none";

}

function hoverShow() {
    const hov = document.getElementById("hover-div")
    if (hov.style.display === "none") {
        hov.style.display = "block"
    } else {
        hov.style.display = "block"
    }
}

function noHoverShow() {
    const hov = document.getElementById("hover-div")
    if (hov.style.display === "block") {
        hov.style.display = "none"
    } else {
        hov.style.display = "none"
    }
}

function rotate() {
    const rotate = document.getElementById("fa-caret-down")
    rotate.style.transform = rotate.style.transform === "none" ? "rotate(180deg)" : "none";
  }
  
// to (USER SPAN)