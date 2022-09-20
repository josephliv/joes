
const mobileMenu = document.querySelector(".mobile-menu"); 
const mainNav = document.querySelector(".main-nav"); 
console.log(mobileMenu, mainNav)
const openMenu = () => {
  mainNav.classList.toggle('is-active');

}

mobileMenu.addEventListener('click', openMenu);