function helloWorld() {
    document.getElementById("helloWorld").innerHTML = "Hello world!";
}

function biggerImage() {
    document.getElementById("smallImage").src = "https://via.placeholder.com/300x300";
    document.getElementById("smallImage").width = "300";
    document.getElementById("smallImage").height = "300";
}

function textColourChange() {
    var r = Math.floor(Math.random() * 256).toString(16);
    var g = Math.floor(Math.random() * 256).toString(16);
    var b = Math.floor(Math.random() * 256).toString(16);
    document.getElementById("targetText").style.color = "#"+r+g+b;
}

function textSizeChange() {
    document.getElementById("smallText").style.fontSize = "4rem";
    document.getElementById("smallText").style.fontStyle = "italic";
}

function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

function showElement(id) {
    document.getElementById(id).style.display = "block";
}

function outputToHtmlElement(target,output) {
    document.getElementById(target).innerHTML = output.toString();
}