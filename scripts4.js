window.addEventListener('DOMContentLoaded', function () {

    //Created div container and appended div container to the body
    let divContainer = document.createElement('div');
    document.body.appendChild(divContainer);

    //Created div element
    let divBtn = document.createElement('div');
    //Created button element
    let button = document.createElement('button');
    //Created text for button
    let text = document.createTextNode('Add Square');
    //Appended text to the button element.
    button.appendChild(text);
    //Appended button element (with text) to the div
    divBtn.appendChild(button);
    //Apended div to div container
    //div.className = 'btn';
    divContainer.appendChild(divBtn);

    //Created global variable for id increment.
    let i = 1;

    //Created function to add square (div) each time button is clicked.
    function insertSquare() {

        let div = document.createElement('div');
        let divText = document.createTextNode('Div ID:' + ' ' + i);
        div.className = 'divs';
        divContainer.appendChild(div);
        div.setAttribute('i', i);
        i++;

        //Created event listener when each div is clicked, calls getRandom (color) function.
        div.addEventListener('click', function () {
            div.style.backgroundColor = getRandom();
        });

        //Created event listener when mouse hovers over div, the id is displayed.
        //div.addEventListener('mouseover', function () {
        //div.appendChild(divText);

        //});

        //Created event listener when mouse leaves the div, the id does not display.
        //div.addEventListener('mouseleave', function () {
        //divText.remove();
        // });

        // div.addEventListener('mouseover', function () {
        //hover(this, divText)
        //});

        //Created event listener and called hover function.
        div.addEventListener('mouseover', function () {
            hover(div, divText)
        });

        //Created event listener and called remove hover function.
        div.addEventListener('mouseout', function () {
            removeHover(divText)
        });

        //Created event listener-double click button to test for even (if so, remove next div) or odd (remove previous div).  
        //If it is even, and there is no square after even square, display an alert.  If it is odd, display an alert if there is not a previous div.
        div.addEventListener('dblclick', function () {

            console.log(div.getAttribute('i'));

            //test for even
            if (div.getAttribute('i') % 2 == 0) {
                console.log('even');
                if (div.nextSibling) {
                    div.nextSibling.remove();
                } else {
                    alert('There are no more boxes!');
                }
            } else {
                console.log("odd");
                if (div.previousSibling.hasAttribute('i')) {
                    div.previousSibling.remove();
                } else {
                    alert('There are no more boxes!');
                }
            }

        });
    }

    //Created event listener for Add Square button that calls insertSquare function.
    divBtn.addEventListener('click', insertSquare);


    //created an array with random colors
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
        return colors[Math.floor(Math.random() * colors.length)];
    }

    //Created function show div id when mouse hovers over div
    // function hover(box, divText) {
    //box.appendChild(divText);
    //}

    //Created function show div id when mouse hovers over div
    function hover(div, divText) {
        div.appendChild(divText);
    }

    //Created function to remove div id when mouse moves away from div
    function removeHover(divText) {
        divText.remove();

    }


});