//!Escribir un programa en JavaScript que lea 3 números y muestre el mayor de ellos.

const arr = [1, 2, 3];
const arr2 = [7, 9, 10000, 11, 25, 20];

function max(arr) {
  let mayor = [0];

  for (let i = 1; i < arr.length; i++) {
    mayor = mayor < arr[i] ? arr[i] : mayor;
  }
  return mayor;
}

console.log(max(arr));
console.log(max(arr2));
