const nav = document.querySelector('.nav');
window.onscroll = function () {
  let top = window.scrollY;
  top >= 30 ? nav.classList.add('active') : nav.classList.remove('active');
};

const main = document.querySelector('main');
main.addEventListener('click', () =>
  inp.style.display == 'block'
    ? (inp.style.display = 'none')
    : (inp.style.display = 'none')
);

const inp = document.querySelector('input');
function showInput() {
  inp.style.display == ''
    ? (inp.style.display = 'block')
    : inp.style.display == 'block'
    ? (inp.style.display = 'none')
    : (inp.style.display = 'block');
}

const span = document.querySelector('#hovShow');
const hov = document.querySelector('#hover-div');
function hoverShow() {
  if (hov.classList.contains('hidden')) {
    hov.classList.remove('hidden');
    hov.addEventListener('mouseenter', () => hov.classList.add('shown'));
  } else {
    hov.addEventListener('mouseleave', () => {
      hov.classList.remove('shown');
      hov.classList.add('hidden');
    });
  }
}

span.addEventListener('mouseleave', () =>
  setTimeout(() => hov.classList.add('hidden'), 1000)
);

function noRotate() {
  const rotate = document.getElementById('fa-caret-down');
  rotate.style.transform =
    rotate.style.transform === 'rotate(0deg)'
      ? 'rotate(180deg)'
      : 'rotate(0deg)';
}

function rotate() {
  const rotate = document.getElementById('fa-caret-down');
  rotate.style.transform =
    rotate.style.transform === 'rotate(180deg)'
      ? 'rotate(0deg)'
      : 'rotate(180deg)';
}

var vid = document.querySelector('#trailer');
document.querySelector('.short-description').style.display = 'none';
vid.muted = true;
vid.autoplay = true;
vid.load();

function autoPlay() {
  vid.autoplay = true;
  vid.load();
}

function endVid() {
  document.querySelector('.volume').style.display = 'none';
  vid.style.display = 'none';
  document.getElementById('image-trailer').style.display = 'block';
  document.querySelector('.replay').style.display = 'block';
  document.querySelector('.short-description').style.display = 'block';
}

function replay() {
  vid.autoplay = true;
  vid.muted = true;
  vid.style.display = 'block';
  vid.currentTime = 0;
  vid.load();
  document.getElementById('image-trailer').style.display = 'none';
  document.querySelector('.replay').style.display = 'none';
  document.querySelector('.fa-volume-high').style.display = 'block';
  document.querySelector('.fa-volume-xmark').style.display = 'none';
  document.querySelector('.volume').style.display = 'block';
  document.querySelector('.short-description').style.display = 'none';
  console.log('replay');
}

function muted() {
  vid.muted = !vid.muted;

  document.querySelector('.fa-volume-xmark').style.display = vid.muted
    ? 'none'
    : 'block';
  document.querySelector('.fa-volume-high').style.display = vid.muted
    ? 'block'
    : 'none';
}

const firstList = document.querySelector('#first-list');
const secondList = document.querySelector('#second-list');

function hideShowArrow() {}

function nextList() {
  secondList.classList.add('active');
  firstList.classList.add('active');
}

function previousList() {
  secondList.classList.remove('active');
  firstList.classList.remove('active');
}
