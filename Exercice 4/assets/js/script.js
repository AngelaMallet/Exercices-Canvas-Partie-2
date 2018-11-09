function EmplacementPointeur(Evenement){
  if(!document.all){
    CurseurX = Evenement.clientX;
    CurseurY = Evenement.clientY;
  }
  else {
    CurseurX = event.x + document.body.scrollLeft;
    CurseurY = event.y + document.body.scrollTop;
  }
  console.log(CurseurX+' / '+CurseurY);
}

var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
//
 // fond
ctx.strokeRect(0,0,800,500);


// E trait de gauche
ctx.beginPath();
ctx.strokeStyle="#000"
ctx.moveTo(100,150);
ctx.lineTo(100,350);
ctx.closePath();
ctx.lineStyle
ctx.lineWidth = 5;
ctx.stroke();
// E trait haut
ctx.beginPath();
ctx.strokeStyle="#000"
ctx.moveTo(100,150);
ctx.lineTo(180,150);
ctx.closePath();
ctx.lineStyle
ctx.lineWidth = 5;
ctx.stroke();
// E trait bas
ctx.beginPath();
ctx.strokeStyle="#000"
ctx.moveTo(100,350);
ctx.lineTo(180,350);
ctx.closePath();
ctx.lineStyle
ctx.lineWidth = 5;
ctx.stroke();
// E trait milieu
ctx.beginPath();
ctx.strokeStyle="#000"
ctx.moveTo(100,250);
ctx.lineTo(180,250);
ctx.closePath();
ctx.lineStyle
ctx.lineWidth = 5;
ctx.stroke();


// N trait droit
ctx.beginPath();
ctx.strokeStyle="#000"
ctx.moveTo(360,150);
ctx.lineTo(360,350);
ctx.closePath();
ctx.lineStyle
ctx.lineWidth = 5;
ctx.stroke();

// N trait milieu
ctx.beginPath();
ctx.strokeStyle="#000"
ctx.moveTo(360,150);
ctx.lineTo(520,350);
ctx.closePath();
ctx.lineStyle
ctx.lineWidth = 5;
ctx.stroke();

// N trait droit
ctx.beginPath();
ctx.strokeStyle="#000"
ctx.moveTo(520,150);
ctx.lineTo(520,350);
ctx.closePath();
ctx.lineStyle
ctx.lineWidth = 5;
ctx.stroke();

// 2 first boucle
ctx.beginPath();
ctx.strokeStyle ="#ea4e1d";
ctx.moveTo(180,150);
ctx.quadraticCurveTo(560, -30, 145, 410);
ctx.lineStyle
ctx.lineWidth = 15;
ctx.stroke();

// 2 second boucle
ctx.beginPath();
ctx.strokeStyle ="#ea4e1d";
ctx.moveTo(144,410);
ctx.quadraticCurveTo(275, 380, 275, 390);
ctx.lineStyle
ctx.lineWidth = 15;
ctx.stroke();

//texte
ctx.beginPath();
ctx.font="30px serif";
ctx.fillStyle="grey";
ctx.fillText("Ecole du Numérique",350,420);
ctx.fillText("du Noyonnais",350,450);
ctx.stroke();

//forme haut
ctx.beginPath();
ctx.fillStyle="#ebebeb"
ctx.moveTo(587,154);
ctx.lineTo(604,167);
ctx.lineTo(604,194);
ctx.lineTo(587,210);
ctx.lineTo(570,194);
ctx.lineTo(570,167);
ctx.closePath();
ctx.fill();
//forme haut gauche
ctx.beginPath();
ctx.fillStyle="#ebebeb"
ctx.moveTo(568,202);
ctx.lineTo(585,216);
ctx.lineTo(585,243);
ctx.lineTo(568,258);
ctx.lineTo(550,243);
ctx.lineTo(550,216);
ctx.closePath();
ctx.fill();
//forme haut droit
ctx.beginPath();
ctx.fillStyle="#595656"
ctx.moveTo(608,202);
ctx.lineTo(625,216);
ctx.lineTo(625,243);
ctx.lineTo(608,258);
ctx.lineTo(590,243);
ctx.lineTo(590,216);
ctx.closePath();
ctx.fill();
//forme milieu rouge
ctx.beginPath();
ctx.fillStyle="#ea4e1a"
ctx.moveTo(587,250);
ctx.lineTo(604,264);
ctx.lineTo(604,290);
ctx.lineTo(587,304);
ctx.lineTo(570,290);
ctx.lineTo(570,264);
ctx.closePath();
ctx.fill();
// //forme bas gauche
ctx.beginPath();
ctx.fillStyle="#878787"
ctx.moveTo(568,294);
ctx.lineTo(585,308);
ctx.lineTo(585,335);
ctx.lineTo(568,350);
ctx.lineTo(550,335);
ctx.lineTo(550,308);
ctx.closePath();
ctx.fill();

//forme bas droit
ctx.beginPath();
ctx.fillStyle="#595656"
ctx.moveTo(608,294);
ctx.lineTo(625,308);
ctx.lineTo(625,335);
ctx.lineTo(608,350);
ctx.lineTo(590,335);
ctx.lineTo(590,308);
ctx.closePath();
ctx.fill();

//Petite forme gauche
ctx.beginPath();
ctx.fillStyle="#efefef"
ctx.moveTo(634,225);
ctx.lineTo(641,230);
ctx.lineTo(641,240);
ctx.lineTo(634,245);
ctx.lineTo(627,240);
ctx.lineTo(627,230);
ctx.closePath();
ctx.fill();
//Petite forme gris foncé
ctx.beginPath();
ctx.fillStyle="#595656"
ctx.moveTo(642,245);
ctx.lineTo(649,250);
ctx.lineTo(649,260);
ctx.lineTo(642,265);
ctx.lineTo(635,260);
ctx.lineTo(635,250);
ctx.closePath();
ctx.fill();
//Petite forme rouge
ctx.beginPath();
ctx.fillStyle="#ea4e1d"
ctx.moveTo(650,225);
ctx.lineTo(657,230);
ctx.lineTo(657,240);
ctx.lineTo(650,245);
ctx.lineTo(643,240);
ctx.lineTo(643,230);
ctx.closePath();
ctx.fill();
