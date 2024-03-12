// #### 11. Задача: Напишите функцию, которая принимает число и проверяет, является ли оно простым (имеет только два делителя: 1 и само число).

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function isPrimeNumber2(num) {
  return Array.from(
    { length: Math.floor(Math.sqrt(num)) },
    (_, i) => i + 2
  ).every((i) => num % i !== 0);
}

function isPrimeNumber3(num, testDivisor = 2) {
  if (num < 2) {
    return false;
  }
  if (testDivisor > Math.sqrt(num)) {
    return true;
  }
  if (num % testDivisor === 0) {
    return false;
  }
  return isPrimeNumber3(num, testDivisor + 1);
}

console.log(isPrimeNumber(17)); // Output: true

console.log(isPrimeNumber2(18)); // Output: false

console.log(isPrimeNumber3(20)); // Output: false
