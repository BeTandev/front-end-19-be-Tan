let str1 = 'abacdefb'; // abcdef
let str2 = 'Loremipsumdolor'; // Loremipsudl

let result = [];
removeUnique = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (result.includes(str[i]) === false) {
          result.push(str[i]);
        }
      }
    return result
}

a = removeUnique(str1)
console.log(a.join(''));