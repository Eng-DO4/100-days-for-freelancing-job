const inp = document.querySelector('input');
const div = document.querySelector('div')

function USD_to_LE() {
    let usd = inp.value;
    let le = usd * 24.46;
    div.textContent=`{${usd}} USD Dollar = {${le.toFixed(2)}} Egyptian Pound`
}

inp.onkeyup = USD_to_LE;
inp.onpaste = USD_to_LE;
inp.onchange = USD_to_LE;