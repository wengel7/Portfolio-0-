const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu  = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .hamburger .container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',() =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 150){
        header.getElementsByClassName.backgroundcolor = '#2B352F';
    }
    else{
        header.getElementsByClassName.backgroundcolor = 'tranparent';
    }
});