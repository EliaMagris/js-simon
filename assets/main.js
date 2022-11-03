let arrayRand = [];
let arrayUser = [];
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
  for (let x = 0; x < 5; x++) {
    let findNumber = parseInt(prompt('indovina i numeri king'));
    arrayUser.push(findNumber);
  }
}

function hideSomthing() {
  document.getElementById('rememberNumber').style.display = 'none';
}

setTimeout(function () {
  hideSomthing();
  hideElement();
}, 5000);

// if(arrayRand.includes(arrayUser)){
//     document.getElementById('Result').innerText = "HAI VINTO"
// }else{
//     document.getElementById('Result').innerText = "HAI PERSO"
// }

console.log(arrayRand);
console.log(arrayUser);
