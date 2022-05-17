function selectionSort(arr) {
  // arr.sort(function(a, b){return a - b});
  // return arr
  let newArr = []

  while (arr.length > 0) {
    let min = Math.min.apply(null, arr)
    newArr.push(min)
    let index = arr.indexOf(min)
    arr.splice(index, 1)
  }

  return newArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// method 1
// have an empty array
// while provided array.len != 0, find the minimum value, push to new array, delete value from provided array

// method 2
// compare values inside of the array and return the values
// you use the sort method here. arr.sort(function(a,b){return a - b})
// Make sure you return the array!
