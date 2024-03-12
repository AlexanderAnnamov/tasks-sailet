// #### 4. Задача: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные значения.

function getUniqueValues(arr) {
  return [...new Set(arr)];
}

function getUniqueValues2(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

function getUniqueValues3(arr) {
  let unique = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique[arr[i]]) {
      result.push(arr[i]);
      unique[arr[i]] = true;
    }
  }

  return result;
}

console.log(getUniqueValues([1, 2, 3, 2, 4, 1, 5])); // Output: [1, 2, 3, 4, 5]

console.log(getUniqueValues2([1, 2, 3, 2, 4, 4, 3])); // Output: [1, 2, 3, 4, 5]

console.log(getUniqueValues3([0, 2, 3, 2, 4, 1, 3])); // Output: [0, 2, 3, 4, 1]
