// JS

var topics =['cat','dog','pig','turtle','fish','pangolin'];





function printBtn() {
    //adds container div, and gives it an id name
    var element = document.createElement("div");
    document.body.append(element);
    element.setAttribute("id", "container");
    //using a for loop, creates a button for each value in the 'topics' array
    for (var i = 0; i < topics.length; i++) {
       var btn = document.createElement('button');
       //gives each button text according to the name of the value in the array
       var t = document.createTextNode(topics[i]);
       btn.append(t);
       //appends the buttons inside container div
       element.append(btn);
       //gives each button the same dataset and a topic corresponding to their names
       btn.setAttribute("data-gif", topics[i]);
    }
    //adds a div inside of the container, this will be where the gifs appear
    var output = document.createElement("div");
    element.append(output);
    //givs the div an id
    output.setAttribute("id", "gifs-here");
}

//calls function in global
printBtn();




// var topics =['cat','dog','pig','turtle','fish','pangolin'];

// function printBtn() {
//     for (var i = 0; i < topics.length; i++) {
//        var btn = document.createElement('button');
//        var t = document.createTextNode(topics[i]);
//        btn.appendChild(t);
//        document.body.appendChild(btn);
//        btn.setAttribute("id", "gif");

//     }
// }

// printBtn();











