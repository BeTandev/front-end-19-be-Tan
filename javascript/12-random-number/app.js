let elminNumber = document.getElementById('min-number')
let elmaxNumber = document.getElementById('max-number')
let result = document.getElementById('result-number')
let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let minNumber = parseInt(elminNumber.value)
    let maxNumber = parseInt(elmaxNumber.value)
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
    result.value = randomNumber
})