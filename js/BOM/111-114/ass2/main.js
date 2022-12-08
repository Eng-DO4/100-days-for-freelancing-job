const mail_inp = document.querySelector('#email');
const name_inp = document.querySelector('#name');
const pass_inp = document.querySelector('#pass');
const gend_inp = document.querySelector('#gender');

let email = '';
let userName = '';
let password = '';
let gender = 'male';

mail_inp.addEventListener('change', () => {
    email = mail_inp.value;
    window.sessionStorage['email'] = email;
});

name_inp.addEventListener('change', () => {
    userName = name_inp.value;
    window.sessionStorage.name = userName;
});

pass_inp.addEventListener('change', () => {
    password = pass_inp.value;
    window.sessionStorage.password = password;
});

gend_inp.addEventListener('change', () => {
    gender = gend_inp.value.toLowerCase();
    window.sessionStorage.gender = gender;
});

if (window.sessionStorage.email) mail_inp.value = window.sessionStorage.email;
if (window.sessionStorage.name) name_inp.value = window.sessionStorage.name;
if (window.sessionStorage.password) pass_inp.value = window.sessionStorage.password;
if (window.sessionStorage.gender) gend_inp.value = window.sessionStorage.gender;
