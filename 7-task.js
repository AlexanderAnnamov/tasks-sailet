// #### 7. Задача: Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий только элементы, которые присутствуют в обоих массивах.

function getCommonElements(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

function getCommonElements2(arr1, arr2) {
  const set = new Set(arr2);
  return arr1.filter((item) => set.has(item));
}

function getCommonElements3(arr1, arr2) {
  const common = {};
  const result = [];

  for (let item of arr1) {
    common[item] = true;
  }

  for (let item of arr2) {
    if (common[item]) {
      result.push(item);
    }
  }

  return result;
}

console.log(getCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]

console.log(getCommonElements2([1, 2, 13, 4], [3, 34, 5, 6, 13])); // Output: [13]

console.log(getCommonElements3([1, 2, 4], [3, 2])); // Output: [2]
