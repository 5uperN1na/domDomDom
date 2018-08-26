
//example of add div and appending to div container

window.addEventListener('DOMContentLoaded', function () {



    //Created div container and appended div container to the body
    let divContainer = document.createElement('div');
    document.body.appendChild(divContainer);

    //Created div element
    let divBtn = document.createElement('div');
    //Created button element
    let button = document.createElement('button');
    //Created text for button
    let text = document.createTextNode('Click me');
    //Appended text to the button element.
    button.appendChild(text);
    //Appended button element (with text) to the div
    divBtn.appendChild(button);
    //Apended div to div container
    divContainer.appendChild(divBtn);
   

    //Created function to add square (div) each time button is clicked.
    function insertSquare() {
        let div = document.createElement('div');
        div.className = 'divs';
        divContainer.appendChild(div);
    }

    divBtn.addEventListener('click', insertSquare);








});