
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

// Back to the top button 
 //Get the button
 const mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
   scrollFunction();
 };

 function scrollFunction() {
   if (
     document.body.scrollTop > 80 ||
     document.documentElement.scrollTop > 80
   ) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }