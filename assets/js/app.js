// JS

document.addEventListener("DOMContentLoaded", () => {


var topics = ['cat','dog','pig','turtle','fish','pangolin'];


function printBtn() {
    //var for the div container
    var element = document.querySelector("#container");
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
           //click function for submit button
           document.querySelector("#subBtn").addEventListener('click', function() {
            inputElement = document.querySelector('#inputGif').value.trim();
            //sendings user input into array topics
            topics.push(inputElement);
            console.log(topics)
            //same proccess as making a button above
            var inputBtn = document.createElement('button')
            var inputText = document.createTextNode(inputElement);
            inputBtn.append(inputText);
            element.append(inputBtn);
            inputBtn.setAttribute('data-gif', inputElement);
            
        
        });


}

//calls function in global
printBtn();



//click function for the created buttons
document.querySelector('#container').addEventListener('click', function(event) {

    if (event.target.tagName == 'BUTTON') {
        //gif targets 'data-gif'
        var gif = event.target.dataset.gif;

        var queryURL = `https://api.giphy.com/v1/gifs/search?q="${gif}&api_key=C1f3HAJEWDoZZ7SkLq487LAiHvdOMfgP&limit=10`;

        fetch(queryURL, {
            method: 'GET'
        })

        .then(function(response) { return response.json() })
        .then(function(response) {
            console.log(queryURL);
            console.log(response);
            //sorts through json to get basic gif data
            var results = response.data;

            for (let item of results) {
                //var to contain gif inside div
                var gifDiv = document.createElement('div');
                //var for the rating, create p tag
                var p = document.createElement('p')
                p.innerText = `Rating: ${item.rating}`;

                var gifImage = document.createElement('img');

                gifImage.setAttribute('src', item.images.fixed_height_still.url);
                gifImage.setAttribute('data-still', item.images.fixed_height_still.url);
                gifImage.setAttribute('data-animate', item.images.fixed_height.url);
                gifImage.setAttribute('data-state', 'still');
                gifDiv.appendChild(gifImage);
                gifDiv.appendChild(p);
                

                let gifContainer = document.querySelector('#gifs-here');
                gifContainer.prepend(gifDiv);
                //on click for images
                gifImage.addEventListener('click', function(event) {
                    if (event.target.tagName == 'img'.toUpperCase()) {
                        let currentImg = event.target
                        var state = currentImg.dataset.state

                        if (state === 'still') {
                            currentImg.setAttribute('src', currentImg.dataset.animate)
                            currentImg.setAttribute('data-state', 'animate')

                        } 
                        else {
                            currentImg.setAttribute('src', currentImg.dataset.still)
                            currentImg.setAttribute('data-set', 'still')
                        }

                    }
                
                })

            

            }
        });
    }
});






});



