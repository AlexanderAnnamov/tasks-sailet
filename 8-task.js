// #### 8. Задача: Напишите функцию, которая принимает число и возвращает факториал этого числа.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function factorial2(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorial3(n) {
  return Array.from({ length: n }, (v, i) => i + 1).reduce(
    (acc, curr) => acc * curr,
    1
  );
}

console.log(factorial(5)); // Output: 120

console.log(factorial2(10)); // Output: 3628800

console.log(factorial3(15)); // Output: 1307674368000
