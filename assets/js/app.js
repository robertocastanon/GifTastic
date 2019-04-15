// JS
// document.querySelector("#container").addEventListener("click", function(event) {

//     if (event.target.tagName == "BUTTON") {

//         var gif = event.target.dataset.gif;

//         var queryURL = `https://api.giphy.com/v1/gifs/search?q="${gif}&api_key=C1f3HAJEWDoZZ7SkLq487LAiHvdOMfgP&limit=10`;

//         fetch(queryURL, {
//             method: "GET"
//         })

//         .then(function(response) {return response.json()})
//         .then(function(response) {
//             console.log(queryURL);
//             console.log(response);

//             var results = response.data;

//             for (let item of results) {

//                 var gifDiv = document.createElement("div");

//                 var p = document.createElement("p")
//                 p.innerText = `Rating: ${item.rating}`;

//                 var gifImage = document.createElement("img");

//                 gifImage.setAttribute("src", item.images.fixed_height.url);

//                 gifDiv.appendChild(p);
//                 gifDiv.appendChild(gifImage);

//                 let gifContainer = document.querySelector("#gifs-here");
//                 gifContainer.prepend(gifDiv);
//             }
//         })
//     }
// })

var topics =['cat','dog','pig','turtle','fish', 'pangolin'];

function printBtn() {
    for (var i = 0; i < topics.length; i++) {
       var btn = document.createElement("button");
       var t = document.createTextNode(topics[i]);
       btn.appendChild(t);
       document.body.appendChild(btn);
       btn.setAttribute("id", "gifBtn");

    }
}

printBtn();




