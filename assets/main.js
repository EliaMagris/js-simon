let arrayRand = [];
let arrayUser = [];
let confronto = [];
for (let i = 0; i < 5; i++) {
  let functionRan = randomNumber();

  arrayRand.push(functionRan);
  function randomNumber() {
    let Random = Math.floor(Math.random(1) * 100);
    return Random;
  }
}
// visione dei numeri nel dom
document.getElementById('rememberNumber').innerHTML = `${arrayRand}`;

function hideElement() {
  document.getElementById('rememberNumber').style.display = 'none';
}
function forCicle() {
  for (let x = 0; x < 5; x++) {
    let findNumber = parseInt(prompt('indovina i numeri king'));
    arrayUser.push(findNumber);
  }
  document.getElementById('Result').innerHTML = `i numeri che hai inserito sono: ${arrayUser}`;
  controlCross();
}

setTimeout(hideElement, 5000);
setTimeout(forCicle, 5500);

function controlCross() {
  for (let x = 0; x < arrayRand.length; x++) {
    for (let k = 0; k < arrayUser.length; k++) {
      if (arrayRand[x] == arrayUser[k]) {
        confronto.push(arrayUser[k]);
      }
    }
  }
  let controlStrong = confronto.length;
  document.getElementById(
    'ultraResult'
  ).innerHTML = `i tuoi numeri corretti sono ${controlStrong} su 5, i numeri da indovinare erano: ${arrayRand}`;
}

console.log(arrayRand);
console.log(arrayUser);
