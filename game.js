
// var start = new Date().getTime();      //time measured when page is loaded

// setTimeout(makeShapeAppear,Math.random() * 2000);       //fnc call after random sec's between 0-2000ms 

makeShapeAppear();

document.getElementById("square").onclick = function () {

    document.getElementById("square").style.top = Math.random() * 150 + "px";

    document.getElementById("square").innerHTML = "";

    document.getElementById("square").style.left = Math.random() * 900 + "px";

    var width = Math.random() * 150 + 50;

    document.getElementById("square").style.width = width + "px";

    document.getElementById("square").style.height = width + "px";

    document.getElementById("square").style.backgroundColor = generateRandomColor();

    if (Math.random() > 0.5) {

        document.getElementById("square").style.borderRadius = "50%";
    }
    else {

        document.getElementById("square").style.borderRadius = "10%";
    }
    document.getElementById("square").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    document.getElementById("time").innerHTML = timeTaken;

    setTimeout(makeShapeAppear, Math.random() * 2000);
}

function makeShapeAppear() {

    document.getElementById("square").style.display = "block";

    start = new Date().getTime();
}

function generateRandomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255                                      //rgb colors
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
