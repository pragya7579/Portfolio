const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle('sticky', window.scrollY > 0);
});
let menu = document.querySelector('#menu-icon');
let navilist = document.querySelector('.navilist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navilist.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navilist.classList.toggle('active');
};
const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})
sr.reveal('.home-text', {
    delay: 300,
    origin: 'left'
})