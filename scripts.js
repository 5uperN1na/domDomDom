window.addEventListener('DOMContentLoaded', function () {

    //create div container
    let divContainer = document.createElement('div');
    document.body.appendChild(divContainer);

    //create button
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    let i = 0;
    function insertSquare() {
        let div = document.createElement(div);
        let divText = document.createTextNode('Div ID:' + ' ' + i);
        div.appendChild(divText);
        div.className = 'div';
        divContainer.appendChild(div);
        div.setAttribute('i', i);
        document.body.appendChild(divContainer);
        i++;

    }

    button.addEventListener('click', insertSquare);

});