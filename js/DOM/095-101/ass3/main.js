const div = document.querySelector('div');
div.classList.add("our-element");
const p = document.querySelector('p');
p.remove();

const div_above = document.createElement('div');
div_above.classList.add("start");
div_above.setAttribute("title", "Start Element");
div_above.setAttribute("data-value", "Start");
div_above.textContent = 'Start';
div.before(div_above);

const div_below = document.createElement('div');
div_below.classList.add("end");
div_below.setAttribute("title", "End Element");
div_below.setAttribute("data-value", "End");
div_below.textContent = 'End';
div.after(div_below)
