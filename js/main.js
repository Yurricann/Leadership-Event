let navlinks = document.querySelectorAll('.nav-item');
let navBar = document.querySelector('.navbar-collapse ');

navlinks.forEach((e)=>{
    e.addEventListener('click',()=>{
        navBar.classList.remove('show')
    })
})