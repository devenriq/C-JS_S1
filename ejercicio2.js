//!Realiza una página para calcular los números primos entre 1 y 100

function primeNumbers() {
  let primos = [];

  for (let i = 2; i <= 6; i++) {
    primos.push(i);
    /* 99
      2 -  98
    */

    for (let j = 2; j <= i - 1; j++) {
      const res = i % j;

      if (res === 0) {
        primos.pop();
        break;
      }
    }
  }

  console.log(primos);
}

primeNumbers();
