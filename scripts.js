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
        let div = document.createElement('div');
        let divText = document.createTextNode('Div ID:' + ' ' + i);
        //div.appendChild(divText);
        div.className = 'div';
        divContainer.appendChild(div);
        div.setAttribute('i', i);

        i++;

        //Created event listener when each div is clicked, calls getRandom (color) function.
        div.addEventListener("click", function () {
            div.style.backgroundColor = getRandom();
        });

        div.addEventListener('mouseover', function () {
            div.appendChild(divText);
    
        });
    
        div.addEventListener('mouseleave', function () {
            divText.remove();
        });




    }

    //document.body.appendChild(div);

    button.addEventListener('click', insertSquare);

    //create an array with random colors
    let colors = [
        'pink',
        'blue',
        'orange',
        'black',
        'green',
        'brown',
        'yellow',
        'red',
    ];

    //created a function that take color array and randomly assign color.
    function getRandom() {
        let random = colors[Math.floor(Math.random() * colors.length)];
        return random;

    }





});