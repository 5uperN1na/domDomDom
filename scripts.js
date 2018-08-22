window.addEventListener('DOMContentLoaded', function () {

    //Created div container
    let divContainer = document.createElement('div');
    document.body.appendChild(divContainer);

    //Created button
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);

    //Created global variable for id increment.
    let i = 1;

    //Created function to add square (div) each time button is clicked.
    function insertSquare() {
        let div = document.createElement('div');
        let divText = document.createTextNode('Div ID:' + ' ' + i);
        div.className = 'div';
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




        div.addEventListener('moveover', hover);
        div.addEventListener('mouseleave', removeHover);




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



    button.addEventListener('click', insertSquare);



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


    function hover() {
        div.appendChild(divText);
    }

    function removeHover() {
        divText.remove();
    }




});