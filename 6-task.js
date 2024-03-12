// #### 6. Задача: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только нечетные числа.

function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function filterOddNumbers2(arr) {
  let result = [];
  for (let num of arr) {
    if (num % 2 !== 0) {
      result.push(num);
    }
  }
  return result;
}

function filterOddNumbers3(arr) {
  return arr.reduce((result, num) => {
    if (num % 2 !== 0) {
      result.push(num);
    }
    return result;
  }, []);
}

console.log(filterOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

console.log(filterOddNumbers2([2, 4, 3, 1, 5])); // Output: [3, 1, 5]

console.log(filterOddNumbers3([6, 4, 2, 3, 5])); // Output: [3, 5]
