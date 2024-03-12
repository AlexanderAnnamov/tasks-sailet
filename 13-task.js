// #### 13. Задача: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий суммы элементов в каждом подмассиве с фиксированной длиной.

function sumSubarrays(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length - size + 1; i++) {
    result.push(arr.slice(i, i + size).reduce((acc, curr) => acc + curr, 0));
  }

  return result;
}

function sumSubarrays2(arr, size) {
  return Array.from({ length: arr.length - size + 1 }, (_, index) =>
    arr.slice(index, index + size).reduce((acc, curr) => acc + curr, 0)
  );
}

function sumSubarrays3(arr, size, index = 0, result = []) {
  if (index > arr.length - size) {
    return result;
  }
  result.push(
    arr.slice(index, index + size).reduce((acc, curr) => acc + curr, 0)
  );
  return sumSubarrays3(arr, size, index + 1, result);
}

console.log(sumSubarrays([1, 2, 3, 4, 5, 6], 3)); // Output: [6, 9, 12, 15]

console.log(sumSubarrays2([1, 2, 3, 4, 5, 6], 3)); // Output: [6, 9, 12, 15]

console.log(sumSubarrays3([1, 2, 3, 4, 5, 6], 3)); // Output: [6, 9, 12, 15]
