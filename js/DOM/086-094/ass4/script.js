const div1 = document.querySelector('.one');
const div2 = document.querySelector('.two');

let tempTitle = div2.title;
div2.title = div1.title;
div1.title = tempTitle;

let tempTxt = div1.textContent + 2;
div1.textContent = div2.textContent;
div2.textContent = tempTxt;