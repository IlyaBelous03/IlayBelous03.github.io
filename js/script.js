let menu = document.getElementById('menu');
let btn =  document.getElementById('button');
btn.addEventListener('click', function func(){
    btn.classList.toggle('menu-btn-active');
    menu.classList.toggle('menu-active');
})