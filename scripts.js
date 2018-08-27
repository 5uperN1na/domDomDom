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

        div.addEventListener('mouseover', function () {
            hover(this, divText)
        });

        div.addEventListener('mouseout', function () {
           removeHover(divText)
       });


        div.addEventListener('dblclick', function () {

            if (this.i % 2 === 0) {
                if (this.nextSibling) {
                    this.nextSibling.remove();
                } else {
                    alert("There are no more boxes!");
                }
            } else {
                if (this.previousSibling) {
                    this.previousSibling.remove();
                } else {
                    alert("There are no more boxes!");
                }
            }

        });


    }


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

   function hover(box, divText) {
        box.appendChild(divText);
   }

    function removeHover(divText) {
        divText.remove();

   }


});