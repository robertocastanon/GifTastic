// JS

document.addEventListener("DOMContentLoaded", () => {



var topics =['cat','dog','pig','turtle','fish','pangolin'];

function printBtn() {
    //adds container div, and gives it an id name
    var element = document.querySelector("#container");
    // document.body.append(element);
    // element.setAttribute('id', 'container"');
    //using a for loop, creates a button for each value in the 'topics' array
    for (var i = 0; i < topics.length; i++) {
       var btn = document.createElement('button');
       //gives each button text according to the name of the value in the array
       var t = document.createTextNode(topics[i]);
       btn.append(t);
       //appends the buttons inside container div
       element.append(btn);
       //gives each button the same dataset and a topic corresponding to their names
       btn.setAttribute('data-gif', topics[i]);
    }
    //adds a div inside of the container, this will be where the gifs appear
    var output = document.createElement('div');
    element.append(output);
    //givs the div an id
    output.setAttribute('id', 'gifs-here');
}

//calls function in global
printBtn();


document.querySelector('#container').addEventListener('click', function(event) {

    if (event.target.tagName == 'BUTTON') {

        var gif = event.target.dataset.gif;

        var queryURL = `https://api.giphy.com/v1/gifs/search?q="${gif}&api_key=C1f3HAJEWDoZZ7SkLq487LAiHvdOMfgP&limit=10`;

        fetch(queryURL, {
            method: 'GET'
        })

        .then(function(response) { return response.json() })
        .then(function(response) {
            console.log(queryURL);
            console.log(response);

            var results = response.data;

            for (let itme of results) {

                var gifDiv = document.createElement('div');

                var p = document.createElement('p')
                p.innerText = `Rating: ${item.rating}`;

                var gifImage = document.createElement('img');

                gifImage.setAttribute('src', item.images.fixed_height.url);

                gifDiv.appendChild(p);
                gifDiv.appendChild(gifImage);

                let gifContainer = document.querySelector('#gifs-here');
                gifContainer.prepend(gifDiv);
            }
        });
    }
});




});



