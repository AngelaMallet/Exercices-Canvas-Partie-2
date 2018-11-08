var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "#e0e1f3"; // le fond bleu
ctx.fillRect(0,0,400,400);


// Visage
ctx.beginPath();
ctx.arc(200,50,33,0,Math.PI*2,true);
ctx.fillStyle = "#976f0f";
ctx.fill();

// sourcils gauche
ctx.beginPath();
ctx.strokeStyle ="white";
ctx.moveTo(185,37);
ctx.quadraticCurveTo(190, 33, 195, 37);
ctx.stroke();

// sourcils droit
ctx.beginPath();
ctx.strokeStyle ="white";
ctx.moveTo(206,37);
ctx.quadraticCurveTo(212, 33, 216, 37);
ctx.stroke();

// bouche dessus
ctx.beginPath();
ctx.strokeStyle ="red";
ctx.moveTo(188,60);
ctx.quadraticCurveTo(200, 65, 212, 60);
ctx.stroke();

// bouche dessous
ctx.beginPath();
ctx.strokeStyle ="red";
ctx.moveTo(188,60);
ctx.quadraticCurveTo(200, 73, 212, 60);
ctx.stroke();

// Yeux
ctx.beginPath();
ctx.fillStyle="#FFF";
ctx.arc(190,45,4,0,Math.PI*2,false);
ctx.fill();
ctx.beginPath();
ctx.arc(210,45,4,0,Math.PI*2,false);
ctx.fill();

// bras
//  long bras marron
ctx.beginPath();
ctx.lineCap ="butt";
ctx.strokeStyle="#976f0f";
ctx.moveTo(120,85);
ctx.lineTo(280,85);
ctx.lineWidth = 22;
ctx.stroke();

//main gauche
ctx.beginPath();
ctx.strokeStyle ="red";
ctx.moveTo(120,85);
ctx.quadraticCurveTo(105,85,120,85);
ctx.stroke();
// main droite
ctx.beginPath();
ctx.strokeStyle ="red";
ctx.moveTo(285,85);
ctx.quadraticCurveTo(290,85,280,85);
ctx.stroke();

// corps
ctx.beginPath();
ctx.fillStyle = "#976f0f";
ctx.fillRect(160,90,80,110);
ctx.stroke();

// jambe gauche
ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="#976f0f";
ctx.moveTo(175,190);
ctx.lineTo(175,230);
ctx.lineWidth = 30;
ctx.stroke();

// jambe droite
ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="#976f0f";
ctx.moveTo(225,190);
ctx.lineTo(225,230);
ctx.lineWidth = 30;
ctx.stroke();

// milieu de jambe
ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="#e0e1f3";
ctx.moveTo(200,200);
ctx.lineTo(200,230);
ctx.lineWidth = 20;
ctx.stroke();

// sucre
ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="pink";
ctx.moveTo(210,160);
ctx.lineTo(215,170);
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="green";
ctx.moveTo(180,160);
ctx.lineTo(170,170);
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="orange";
ctx.moveTo(190,90);
ctx.lineTo(180,100);
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="yellow";
ctx.moveTo(220,130);
ctx.lineTo(228,140);
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="lightblue";
ctx.moveTo(170,130);
ctx.lineTo(180,133);
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.lineCap ="round";
ctx.strokeStyle="blue";
ctx.moveTo(203,100);
ctx.lineTo(210,105);
ctx.lineWidth = 3;
ctx.stroke();

// Boutons
ctx.beginPath();
ctx.fillStyle="#7a2976";
ctx.arc(200,130,5,0,Math.PI*2,false);
ctx.fill();
ctx.beginPath();
ctx.arc(200,150,5,0,Math.PI*2,false);
ctx.fill();
