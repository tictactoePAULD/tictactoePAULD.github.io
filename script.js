// l'identification des variables globales
var winner = '';
var counter = 1;
var arrX = [];
var arrO = [];
var i = 0;
var z = 0;
var counted = [];
var mauveScore = 0;
var grisScore = 0;
while (i < 9) {
  // remplir les arrays pour être cappable de les vérifiez
  arrX[i] = 'z';
  arrO[i] = 'z';
  i++;
}
while (z < 18) {
  // remplir les arrays pour être cappable de les vérifiez
  counted[z] = 'z';
  z++;
}
function checkforwin() {
  // Appelle a une fonction à chaque fois qu'un checkbox est cliquer

 // counter++; // permet à notre script de garder comte combien de fois que nous l'avons appeller

  var sq1 = document.getElementById('sq1').checked; // à chaque fois que la fonciton est appeller, nous vérifions si boites sont checkés
  var sq2 = document.getElementById('sq2').checked;
  var sq3 = document.getElementById('sq3').checked;
  var sq4 = document.getElementById('sq4').checked;
  var sq5 = document.getElementById('sq5').checked;
  var sq6 = document.getElementById('sq6').checked;
  var sq7 = document.getElementById('sq7').checked;
  var sq8 = document.getElementById('sq8').checked;
  var sq9 = document.getElementById('sq9').checked;

  if (winner != 'X' && winner != 'O') {
    // arrête de changer valeurs des arrays et les couleurs si il y a déjà un gagnant
    if (counter % 2 == 0) {
      // garde les tours un après l'autre
      if (sq1 == true) {
        // si la boite est "checked"
        if (arrX[0].includes('x') == false) {
          // si array est déjà selectionné par l'autre joueur rien ne changerait
          arrO[0] = 'o'; // le array des o's à sa valeur de 0 (case 1) est donné la valeur de O
          document.getElementById('d1').style.backgroundColor = '#BDBEC0'; // nous appleons d1, le div de la case 1 et change les couleurs
          if (counted[0].includes("yes")==false){ //version complèxe d'éviter clicker un case déjà clicker dans son tour
          counter++;
          counted[0] = "yes" // donne counted valeur de yes qui élimine chance que nous changeons de tour, les tours dépendent sur le counter alors ceci est notre solution
          }
        }
      }
      if (sq2 == true) {
        if (arrX[1].includes('x') == false) {
          arrO[1] = 'o';
          document.getElementById('d2').style.backgroundColor = '#BDBEC0';
          if (counted[1].includes("yes")==false){
          counter++;
          counted[1] = "yes"
          }
        }
      }
      if (sq3 == true) {
        if (arrX[2].includes('x') == false) {
          arrO[2] = 'o';
          document.getElementById('d3').style.backgroundColor = '#BDBEC0';
          if (counted[2].includes("yes")==false){
          counter++;
          counted[2] = "yes"
          }
        }
      }
      if (sq4 == true) {
        if (arrX[3].includes('x') == false) {
          arrO[3] = 'o';
          document.getElementById('d4').style.backgroundColor = '#BDBEC0';
          if (counted[3].includes("yes")==false){
          counter++;
          counted[3] = "yes"
          }
        }
      }
      if (sq5 == true) {
        if (arrX[4].includes('x') == false) {
          arrO[4] = 'o';
          document.getElementById('d5').style.backgroundColor = '#BDBEC0';
          if (counted[4].includes("yes")==false){
          counter++;
          counted[4] = "yes"
          }
        }
      }
      if (sq6 == true) {
        if (arrX[5].includes('x') == false) {
          arrO[5] = 'o';
          document.getElementById('d6').style.backgroundColor = '#BDBEC0';
          if (counted[5].includes("yes")==false){
          counter++;
          counted[5] = "yes"
          }
        }
      }
      if (sq7 == true) {
        if (arrX[6].includes('x') == false) {
          arrO[6] = 'o';
          document.getElementById('d7').style.backgroundColor = '#BDBEC0';
          if (counted[6].includes("yes")==false){
          counter++;
          counted[6] = "yes"
          }
        }
      }
      if (sq8 == true) {
        if (arrX[7].includes('x') == false) {
          arrO[7] = 'o';
          document.getElementById('d8').style.backgroundColor = '#BDBEC0';
          if (counted[7].includes("yes")==false){
          counter++;
          counted[7] = "yes"
          }
        }
      }
      if (sq9 == true) {
        if (arrX[8].includes('x') == false) {
          arrO[8] = 'o';
          document.getElementById('d9').style.backgroundColor = '#BDBEC0';
          if (counted[8].includes("yes")==false){
          counter++;
          counted[8] = "yes"
          }
        }
      }
    } else if (counter % 2 != 0) {
      // de tour à rôle c'est le tour de l'autre joueur, à chaque fois que la fonction est appeller.
      if (sq1 == true) {
        if (arrO[0].includes('o') == false) {
          //même pour l'autre, si déjà valeur dans array opposé nous ne changeons pas la valeur
          arrX[0] = 'x';
          document.getElementById('d1').style.backgroundColor = '#564572';
          if (counted[9].includes("yes")==false){
          counter++;
          counted[9] = "yes"
          }
        }
      }
      if (sq2 == true) {
        if (arrO[1].includes('o') == false) {
          arrX[1] = 'x';
          document.getElementById('d2').style.backgroundColor = '#564572';
          if (counted[10].includes("yes")==false){
          counter++;
          counted[10] = "yes"
          }
        }
      }
      if (sq3 == true) {
        if (arrO[2].includes('o') == false) {
          arrX[2] = 'x';
          document.getElementById('d3').style.backgroundColor = '#564572';
          if (counted[11].includes("yes")==false){
          counter++;
          counted[11] = "yes"
          }
        }
      }
      if (sq4 == true) {
        if (arrO[3].includes('o') == false) {
          arrX[3] = 'x';
          document.getElementById('d4').style.backgroundColor = '#564572';
          if (counted[12].includes("yes")==false){
          counter++;
          counted[12] = "yes"
          }
        }
      }
      if (sq5 == true) {
        if (arrO[4].includes('o') == false) {
          arrX[4] = 'x';
          document.getElementById('d5').style.backgroundColor = '#564572';
          if (counted[13].includes("yes")==false){
          counter++;
          counted[13] = "yes"
          }
        }
      }
      if (sq6 == true) {
        if (arrO[5].includes('o') == false) {
          arrX[5] = 'x';
          document.getElementById('d6').style.backgroundColor = '#564572';
          if (counted[14].includes("yes")==false){
          counter++;
          counted[14] = "yes"
          }
        }
      }
      if (sq7 == true) {
        if (arrO[6].includes('o') == false) {
          arrX[6] = 'x';
          document.getElementById('d7').style.backgroundColor = '#564572';
          if (counted[15].includes("yes")==false){
          counter++;
          counted[15] = "yes"
          }
        }
      }
      if (sq8 == true) {
        if (arrO[7].includes('o') == false) {
          arrX[7] = 'x';
          document.getElementById('d8').style.backgroundColor = '#564572';
          if (counted[16].includes("yes")==false){
          counter++;
          counted[16] = "yes"
          }
        }
      }
      if (sq9 == true) {
        if (arrO[8].includes('o') == false) {
          arrX[8] = 'x';
          document.getElementById('d9').style.backgroundColor = '#564572';
          if (counted[17].includes("yes")==false){
          counter++;
          counted[17] = "yes"
          }
        }
      }
    }
  }









  if (winner != 'X' && winner != 'O') {
    // ne change pas le score si il y a déjà un résultat
    //les combinaisons de situations où l'utilisateur mauve/X peut gagner
    //Des lignes droite
    if (arrX[0] == 'x' && arrX[1] == 'x' && arrX[2] == 'x') {
      document.getElementById('winner').innerHTML = 'GAGNANT: MAUVE!'; // texte du div qui démontre gagnant
      document.getElementById('winner').style.color = '#564572';
      winner = 'X'; // voir si il y a un gagnant
      mauveScore++; //pour garder compte du score
    } else if (arrX[3] == 'x' && arrX[4] == 'x' && arrX[5] == 'x') {
      document.getElementById('winner').innerHTML = 'GAGNANT: MAUVE!';
      document.getElementById('winner').style.color = '#564572';
      winner = 'X';
      mauveScore++;
    } else if (arrX[6] == 'x' && arrX[7] == 'x' && arrX[8] == 'x') {
      document.getElementById('winner').innerHTML = 'GAGNANT: MAUVE!';
      document.getElementById('winner').style.color = '#564572';
      winner = 'X';
      mauveScore++;
    } else if (arrX[0] == 'x' && arrX[3] == 'x' && arrX[6] == 'x') {
      document.getElementById('winner').innerHTML = 'GAGNANT: MAUVE!';
      document.getElementById('winner').style.color = '#564572';
      winner = 'X';
      mauveScore++;
    } else if (arrX[1] == 'x' && arrX[4] == 'x' && arrX[7] == 'x') {
      document.getElementById('winner').innerHTML = 'GAGNANT: MAUVE!';
      document.getElementById('winner').style.color = '#564572';
      winner = 'X';
      mauveScore++;
    } else if (arrX[2] == 'x' && arrX[5] == 'x' && arrX[8] == 'x') {
      document.getElementById('winner').innerHTML = 'GAGNANT: MAUVE!';
      document.getElementById('winner').style.color = '#564572';
      winner = 'X';
      mauveScore++;
      //Diagonale de la gauche
    } else if (arrX[0] == 'x' && arrX[4] == 'x' && arrX[8] == 'x') {
      document.getElementById('winner').innerHTML = 'GAGNANT: MAUVE!';
      document.getElementById('winner').style.color = '#564572';
      winner = 'X';
      mauveScore++;
      //Diagonale de la droite
    } else if (arrX[2] == 'x' && arrX[4] == 'x' && arrX[6] == 'x') {
      document.getElementById('winner').innerHTML = 'GAGNANT: MAUVE!';
      document.getElementById('winner').style.color = '#564572';
      winner = 'X';
      mauveScore++;
    }

    //conditions pour O
    else if (arrO[0] == 'o' && arrO[1] == 'o' && arrO[2] == 'o') {
      document.getElementById('winner').innerHTML = 'GAGNANT: GRIS!';
      document.getElementById('winner').style.color = '#BDBEC0';
      winner = 'O';
      grisScore++;
    } else if (arrO[3] == 'o' && arrO[4] == 'o' && arrO[5] == 'o') {
      document.getElementById('winner').innerHTML = 'GAGNANT: GRIS!';
      document.getElementById('winner').style.color = '#BDBEC0';
      winner = 'O';
      grisScore++;
    } else if (arrO[6] == 'o' && arrO[7] == 'o' && arrO[8] == 'o') {
      document.getElementById('winner').innerHTML = 'GAGNANT: GRIS!';
      document.getElementById('winner').style.color = '#BDBEC0';
      winner = 'O';
      grisScore++;
    } else if (arrO[0] == 'o' && arrO[3] == 'o' && arrO[6] == 'o') {
      document.getElementById('winner').innerHTML = 'GAGNANT: GRIS!';
      document.getElementById('winner').style.color = '#BDBEC0';
      winner = 'O';
      grisScore++;
    } else if (arrO[1] == 'o' && arrO[4] == 'o' && arrO[7] == 'o') {
      document.getElementById('winner').innerHTML = 'GAGNANT: GRIS!';
      document.getElementById('winner').style.color = '#BDBEC0';
      winner = 'O';
      grisScore++;
    } else if (arrO[2] == 'o' && arrO[5] == 'o' && arrO[8] == 'o') {
      document.getElementById('winner').innerHTML = 'GAGNANT: GRIS!';
      document.getElementById('winner').style.color = '#BDBEC0';
      winner = 'O';
      grisScore++;
    } else if (arrO[0] == 'o' && arrO[4] == 'o' && arrO[8] == 'o') {
      document.getElementById('winner').innerHTML = 'GAGNANT: GRIS!';
      document.getElementById('winner').style.color = '#BDBEC0';
      winner = 'O';
      grisScore++;
    } else if (arrO[2] == 'o' && arrO[4] == 'o' && arrO[6] == 'o') {
      document.getElementById('winner').innerHTML = 'GAGNANT: GRIS!';
      document.getElementById('winner').style.color = '#BDBEC0';
      winner = 'O';
      grisScore++;
    } else if (
      // égalité (seulement si les cases sont remplis et il n'y a aucun gagnant)
      (arrX[0] == 'x' || arrO[0] == 'o') &&
      (arrX[1] == 'x' || arrO[1] == 'o') &&
      (arrX[2] == 'x' || arrO[2] == 'o') &&
      (arrX[3] == 'x' || arrO[3] == 'o') &&
      (arrX[4] == 'x' || arrO[4] == 'o') &&
      (arrX[5] == 'x' || arrO[5] == 'o') &&
      (arrX[6] == 'x' || arrO[6] == 'o') &&
      (arrX[7] == 'x' || arrO[7] == 'o') &&
      (arrX[8] == 'x' || arrO[8] == 'o')
    ) {
      document.getElementById('winner').innerHTML = 'ÉGALITÉ';
    }
  }

  //Alterner les tours
  if (winner != 'X' && winner != 'O') {
    // arrêter si il y a un gagnant
    if (counter % 2 == 0) {
      //nombre pair
      document.getElementById('turn').innerHTML = 'GRIS';
    } else if (counter % 2 != 0) {
      //nombre impair
      document.getElementById('turn').innerHTML = 'MAUVE';
    }
  }

// à chauqe fois que nous gagnons mauve ou gris score augmente et ceci est l'affichage des résultats
  document.getElementById('scoreX').innerHTML = mauveScore;
  document.getElementById('scoreO').innerHTML = grisScore;
}

function reset() {
  //bouton Nouveau Match
  //uncheck checkboxes
  document.getElementById('sq1').checked = false; 
  document.getElementById('sq2').checked = false;
  document.getElementById('sq3').checked = false;
  document.getElementById('sq4').checked = false;
  document.getElementById('sq5').checked = false;
  document.getElementById('sq6').checked = false;
  document.getElementById('sq7').checked = false;
  document.getElementById('sq8').checked = false;
  document.getElementById('sq9').checked = false;
  document.getElementById('winner').innerHTML = ' '; // reset display du gagnant GAGNANT
  //reset colours
  document.getElementById('d1').style.backgroundColor = 'transparent'; //
  document.getElementById('d2').style.backgroundColor = 'transparent';
  document.getElementById('d3').style.backgroundColor = 'transparent';
  document.getElementById('d4').style.backgroundColor = 'transparent';
  document.getElementById('d5').style.backgroundColor = 'transparent';
  document.getElementById('d6').style.backgroundColor = 'transparent';
  document.getElementById('d7').style.backgroundColor = 'transparent';
  document.getElementById('d8').style.backgroundColor = 'transparent';
  document.getElementById('d9').style.backgroundColor = 'transparent';
  //reset le nom de tour (nous commenceons toujours avec mauve)
  document.getElementById('turn').innerHTML = 'MAUVE';
  // reboot les arrays
  var w = 0;
  while (w < 9) {
    arrX[w] = 'z';
    arrO[w] = 'z';
    w++;
  }
  var z = 0;
  while (z < 18) {
    counted[z] = 'z';
    z++;
  }
  // recommence counter et valeur gagnant
  counter = 1;
  winner = '';
}
