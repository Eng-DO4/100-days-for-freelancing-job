const fontFamily = document.querySelector('#family');
const fontColor = document.querySelector('#color');
const fontSize = document.querySelector('#size');

let family = 'open';
let color = 'red';
let size = '16';

fontFamily.addEventListener('change', () => {
    family = fontFamily.value.toLowerCase();
    window.localStorage['font-family'] = family;
});

fontColor.addEventListener('change', () => {
    color = fontColor.value.toLowerCase();
    window.localStorage['font-color'] = color;
});

fontSize.addEventListener('change', () => {
    size = fontSize.value.toLowerCase();
    window.localStorage['font-size'] = size;
});

if (window.localStorage['font-family']) fontFamily.value = window.localStorage['font-family'];
if (window.localStorage['font-color']) fontColor.value = window.localStorage['font-color'];
if (window.localStorage['font-size']) fontSize.value = window.localStorage['font-size'];
