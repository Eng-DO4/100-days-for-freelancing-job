// calling elements in DOM
const toggle_icon = document.querySelector('.fa-bars');
const menu = document.querySelector('header ul');
const navLinks = document.querySelectorAll('header ul a');
const logo = document.querySelector('header .logo')

// media query condition
let media = window.matchMedia("(max-width: 799px)")
menu.style.display = media.matches ? 'none' : 'flex';
media.onchange = _ => {
    menu.style.display = media.matches ? 'none' : 'flex';
}

// toggling the menu
let toggle = _ => menu.style.display = (menu.style.display == 'none') ? 'flex' : 'none';
toggle_icon.addEventListener('click', toggle);

// hovering on nav links
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
