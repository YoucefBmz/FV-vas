
const nav = document.querySelector('.nav-bar');
const txt = document.querySelector('.about_text');
window.onscroll = function () {
    const top = window.scrollY;
  
    if (top >= 380) {
      nav.classList.add('nav-active');
      //txt.classList.add('nav-acive');
    } else {
      nav.classList.remove('nav-active');
      //txt.classList.remove('nav-acive');
      //navLinks.classList.remove('nav-open');
    }
  }

const hamburger = document.querySelector('.hamberger');
const navLinks = document.querySelector('.links');

hamburger.addEventListener('click',function () {
navLinks.classList.toggle('nav-open');
});


function closemenu  () {
    document.querySelector('.hamberger').click();
    console.log("navbtn is clicked !");
}