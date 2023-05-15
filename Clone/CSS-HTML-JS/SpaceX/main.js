let triggerIconSideBarOpen = document.querySelector('.fa-bars');
let triggerIconSideBarClose = document.querySelector('.fa-xmark');
let sideBar = document.querySelector('.side-menu');
let wrapper = document.querySelector('.wrapper')

triggerIconSideBarOpen.addEventListener('click', () => {
  sideBar.classList.add('active');
  wrapper.classList.add('opacityFilter')
});

triggerIconSideBarClose.addEventListener('click', () => {
  sideBar.classList.remove('active');
});

sideBar.addEventListener('mouseleave', () =>
  setTimeout(() => sideBar.classList.remove('active'))
);
