// #### 9. Задача: Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий только строки, начинающиеся с определенной подстроки.

function filterBySubstring(arr, substring) {
  return arr.filter((str) => str.startsWith(substring));
}

function filterBySubstring2(arr, substring) {
  return arr.filter((str) => {
    for (let i = 0; i < substring.length; i++) {
      if (str[i] !== substring[i]) {
        return false;
      }
    }
    return true;
  });
}

function filterBySubstring3(arr, substring) {
  let result = [];
  for (let str of arr) {
    if (str.slice(0, substring.length) === substring) {
      result.push(str);
    }
  }
  return result;
}

console.log(filterBySubstring(["apple", "banana", "orange", "avocado"], "a")); // Output: ['apple', 'avocado']

console.log(filterBySubstring2(["apple", "auto", "air", "avocado"], "a")); // Output: ['apple', 'auto', 'air', 'avocado']

console.log(filterBySubstring3(["soul", "banana", "glade", "andromeda"], "a")); // Output: ['andromeda']
