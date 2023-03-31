const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let elresult = document.getElementById('result')
let Length = document.getElementById('length')
let inputLength = document.getElementById('input-length')
let btnGenerate = document.getElementById('btn-generate')
let checkboxNumbers = document.getElementById('checkbox-numbers')
let checkboxLetters = document.getElementById('checkbox-letters')
let checkboxSymbol = document.getElementById('checkbox-symbols')
let character = []


btnGenerate.addEventListener('click', function(){
    let result = ''
    
    if(checkboxNumbers.checked){
        character = character.concat(NUMBERS)
    }
    if(checkboxLetters.checked){
        character = character.concat(LETTERS)
    }
    if(checkboxSymbol.checked){
        character = character.concat(SYMBOLS)
    }

    for(let i = 0; i < inputLength.value; i++){
        let j = Math.floor(Math.random()*character.length)
        result += character[j]
    }
    
    elresult.innerText = result
})



inputLength.addEventListener('change', function(){
    Length.innerText = inputLength.value
})
