
var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.fillStyle="#8a0908";
ctx.moveTo(20,100);
ctx.quadraticCurveTo(130,-100,200,100);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#aa6522";
ctx.moveTo(20,100);
ctx.lineTo(120,400)
ctx.lineTo(200,100);
ctx.fill();
