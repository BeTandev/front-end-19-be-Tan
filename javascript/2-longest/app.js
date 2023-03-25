let str = 'Học lập trình Frontend OfflineX tại ZendVN';
// output: Frontend, OfflineX

let words = str.split(' ');
let max = 0;
let result = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > max) {
    max = words[i].length;
    result = [];
    result.push(words[i]);
  } else if (words[i].length === max) {
    result.push(words[i]);
  }
}

console.log('result', result);