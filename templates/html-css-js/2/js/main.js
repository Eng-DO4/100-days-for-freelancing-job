// calling elements in DOM
const toggle_icon = document.querySelector('.fa-bars');
const menu = document.querySelector('header ul');
const navLinks = document.querySelectorAll('header ul a');
const logo = document.querySelector('header .logo');
const slider_bullets = document.querySelectorAll('.bullets i');
const shuffle = document.querySelectorAll('.shuffle li');

// media query condition
let media = window.matchMedia("(max-width: 799px)")
menu.style.display = media.matches ? 'none' : 'flex';
media.onchange = _ => {
    menu.style.display = media.matches ? 'none' : 'flex';
}

// toggling the menu
let toggle = _ => menu.style.display = (menu.style.display == 'none') ? 'flex' : 'none';
toggle_icon.addEventListener('click', toggle);

// clicking nav links
logo.onclick = _ => {
    navLinks.forEach(aClass => aClass.classList.remove('active'));
    navLinks[0].classList.add('active');
    menu.style.display = media.matches ? 'none' : 'flex';
}
navLinks.forEach(a => {
    a.onclick = _ => {
        navLinks.forEach(aClass => aClass.classList.remove('active'));
        a.classList.add('active');
        menu.style.display = media.matches ? 'none' : 'flex';
    }
})

// sliding by bullets
slider_bullets.forEach(i => {
    i.onclick = _ => {
        menu.style.display = media.matches ? 'none' : 'flex';
        slider_bullets.forEach(iClass => iClass.classList.remove('fa-solid'));
        slider_bullets.forEach(iClass => iClass.classList.add('fa-regular'));
        i.classList.remove('fa-regular')
        i.classList.add('fa-solid')
    }
})

// filtering images on portfolio
shuffle.forEach(li => {
    li.onclick = _ => {
        shuffle.forEach(liClass => liClass.classList.remove('active'));
        li.classList.add('active');
    }
})

// 