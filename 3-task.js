// #### 3. Задача: Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только объекты с указанным свойством.

function filterByProperty(arr, property) {
  return arr.filter((obj) => obj.hasOwnProperty(property));
}

function filterByProperty2(arr, property) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty(property)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function filterByProperty3(arr, property) {
  return arr.reduce((result, obj) => {
    if (obj.hasOwnProperty(property)) {
      result.push(obj);
    }
    return result;
  }, []);
}

const data = [
  { name: "John", age: 25 },
  { name: "Alice", country: "USA" },
  { name: "Bob", salary: 3000 },
];

console.log(filterByProperty(data, "age")); // Output: [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }]

console.log(filterByProperty2(data, "country")); //  Output: [{ name: 'Alice', country: 'USA' }]

console.log(filterByProperty3(data, "salary")); //  Output: [{ name: "Bob", salary: 3000 }]
