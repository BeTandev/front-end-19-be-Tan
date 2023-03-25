function findLongestWord(str) {
  const splStrArray = str.split(' ');

  //initialize a variable to store the longest word
  let longestWord = "";
  for(let index = 0; index < splStrArray.length; index++){
    if(splStrArray[index].length > longestWord.length){
         longestWord = splStrArray[index];
     }
  }
 return longestWord
}

let a = findLongestWord('Hoc lap trinh Frontend tai ZendVN')
console.log(a)