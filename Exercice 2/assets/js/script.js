var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "#0000ff"; // le fond bleu
ctx.fillRect(50,50,250,250);


    ctx.beginPath();
    ctx.fillStyle="#FFF";
    ctx.moveTo(140, 180);
    ctx.quadraticCurveTo(175, 80, 210, 180);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle="#e0e1f3";
    ctx.moveTo(100, 180);
    ctx.quadraticCurveTo(175, 130, 250, 180);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle="#e0e1f3";
    ctx.moveTo(100, 180);
    ctx.quadraticCurveTo(175, 220, 250, 180);
    ctx.fill();
