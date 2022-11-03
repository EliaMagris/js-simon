let arrayRand = [];

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

console.log(arrayRand);
