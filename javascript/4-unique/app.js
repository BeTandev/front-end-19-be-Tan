let str1 = 'abcdce'; // false
let str2 = 'abcdef'; // true

function checkDuplicate(str){
    for(let i = 0; i <= str.length - 1; i++){
        for(let j = i + 1; j <= str.length - 1; j++){
            if(str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(checkDuplicate(str2));