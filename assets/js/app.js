// JS

var topics =['cat','dog','pig','turtle','fish','pangolin'];

function printBtn() {
    for (var i = 0; i < topics.length; i++) {
       var btn = document.createElement('button');
       
       var t = document.createTextNode(topics[i]);
       btn.appendChild(t);
       document.body.appendChild(btn);
    //    btn.setAttribute("id", "gif");
       btn.setAttribute("data-gif", topics[i]);

    }
}

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











