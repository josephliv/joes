
const mobileMenu = document.querySelector(".mobile-menu"); 
const mainNav = document.querySelector(".main-nav"); 
console.log(mobileMenu, mainNav)
const openMenu = () => {
  mainNav.classList.toggle('is-active');
}


mobileMenu.addEventListener('click', openMenu);

// My attempt to make sure the class is removed if the window is more than 765px width, 
// but it's missing something, I'll come back to this later
if (window.innerWidth > '765' && mainNav.classList.contains('is-active') ) {
  mainNav.classList.remove('is-active');
}