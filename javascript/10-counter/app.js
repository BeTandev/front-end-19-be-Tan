let btnIncrease = document.querySelector('.btn-increase')
let btnDecrease = document.querySelector('.btn-decrease')
let btnReset = document.querySelector('.btn-reset')
let btnSave = document.querySelector('.btn-save')
let elnumber = document.querySelector('.number')
let elSavedNumber = document.querySelector('.saved-number')
let numberArray = []
let textNumberArray

btnIncrease.addEventListener("click", function(){
    let number = elnumber.innerText;
    number = parseInt(number)
    number++
    elnumber.innerText = number 
})

btnDecrease.addEventListener("click", function(){
    let number = elnumber.innerText;
    number = parseInt(number)
    number--
    elnumber.innerText = number 
})

btnReset.addEventListener("click", function(){
    let number = elnumber.innerText
    number = parseInt(number)
    number = 0
    elnumber.innerText = number
})

btnSave.addEventListener("click", function(){
    let number = elnumber.innerText
    numberArray.push(number)
    textNumberArray = numberArray.join()
    elSavedNumber.innerText = "Save Numbers: " + textNumberArray
})