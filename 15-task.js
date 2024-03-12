// #### 15. Задача: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа Фибоначчи до указанного предела.

function getFibonacciNumbers(limit) {
  const result = [0, 1];
  let current = 1;

  while (current <= limit) {
    current = result[result.length - 1] + result[result.length - 2];
    if (current <= limit) {
      result.push(current);
    }
  }

  return result;
}

function getFibonacciNumbers2(limit, current = 1, prev = 0, result = []) {
  if (current > limit) {
    return result;
  }

  result.push(current);

  return getFibonacciNumbers2(limit, current + prev, current, result);
}

function getFibonacciNumbers3(limit) {
  let fib = [0, 1];

  while (fib[fib.length - 1] < limit) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  return fib.filter((num) => num <= limit);
}

console.log(getFibonacciNumbers(100)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

console.log(getFibonacciNumbers2(100)); // Output: [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

console.log(getFibonacciNumbers3(100)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
