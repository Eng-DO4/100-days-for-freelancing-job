const imgs = document.querySelectorAll('img');

imgs.forEach((elem) => {
    elem.alt ? elem.alt = 'old' : elem.alt = "Elzero New"
})