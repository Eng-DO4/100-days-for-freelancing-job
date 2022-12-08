function createPopup () {

    // creating popup window container
    const div = document.createElement('div');
    div.classList.add('popup');
    
    // creating button for closing the popup window
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    closeBtn.classList.add('close');
    div.appendChild(closeBtn);

    // creating title for the popup window
    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome';
    div.appendChild(h2);

    // creating greeting message as the content of the popup window
    const greetingMsg = 'Welcome To Elzero Web School';
    div.append(greetingMsg);

    // appending the popup window to body after loading 
    document.body.appendChild(div);

    // adding event on close div to enable us close the popup window
    closeBtn.onclick = _ => div.remove();

}
setTimeout(createPopup, 5000)


/* What we should do with DOM in HTML
    <div class="popup">
        <button class="close">x</div>
        <h2>Welcome</h2>
        Welcome To Elzero Web School
    </div>
*/