num1 = 10;
num2 = 9;
num3 = 17;
num4 = 26;

function evenOr(num) {
  if (num % 2 == 0) {
    return `El número ${num} es par`;
  } else {
    return `El número ${num} es impar`;
  }
}

console.log(evenOr(num1));
console.log(evenOr(num2));
console.log(evenOr(num3));
console.log(evenOr(num4));
