let canvas = document.getElementById("gameScreen");
let cxt = canvas.getContext("2d");

cxt.clearRect(0, 0, 900, 600);

cxt.fillStyle = "#00f";
cxt.fillRect(0, 0, 100, 100);

cxt.fillStyle = "#00f";
cxt.fillRect(100, 100, 100, 100);

cxt.filStyle = "#f00";
cxt.fillRect(50, 50, 100, 100);

cxt.filStyle = "#f00";
cxt.fillRect(150, 150, 100, 100);

cxt.filStyle = "#f00";
cxt.fillRect(200, 200, 100, 100);

cxt.filStyle = "#f00";
cxt.fillRect(250, 250, 100, 100);
