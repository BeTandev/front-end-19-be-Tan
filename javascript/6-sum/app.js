let arr1 = [1, 6, 4, 2, 13]; // true -> 1 + 6 + 4 + 2 = 13
let arr2 = [1, 2, 4, 34, 22]; // false -> 1 + 2 + 4 + 34 = 41 != 22

let i = 0
let sum = 0
let lastItem = arr1[arr1.length - 1]

for(let i = 0; i < arr1.length -1; i++){
  sum += arr1[i]
  console.log(sum)
}
if (lastItem === sum) {
  console.log(true);
} else {
  console.log(false);
}
