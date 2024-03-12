// #### 1. Задача: Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function sumArray2(arr) {
  if (arr.length == 0) return 0;
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  return sum;
}

function sumArray3(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

console.log(sumArray2([1, 5, 3, 8, 5])); // Output: 22

console.log(sumArray3([2, 2, 2, 2, 2])); // Output: 10
