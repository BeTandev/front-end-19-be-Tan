let elnumberOne = document.getElementById('number-one')
let elnumberTwo = document.getElementById('number-two')
let elresult = document.getElementById('result')
let btnSum = document.getElementById('btn-sum')
let btnSubtract = document.getElementById('btn-subtract')
let btnMultiply = document.getElementById('btn-multiply')
let btnDivide = document.getElementById('btn-divide')

btnSum.addEventListener('click', function(){
    // let numberOne = elnumberOne.value
    // numberOne = parseInt(numberOne)
    // let numberTwo = elnumberTwo.value
    // numberTwo = parseInt(numberTwo)
    // let Sum = numberOne + numberTwo
    // elresult.innerText = Sum
    changeNumber('+');
})

btnSubtract.addEventListener('click', function(){
    // let numberOne = elnumberOne.value
    // numberOne = parseInt(numberOne)
    // let numberTwo = elnumberTwo.value
    // numberTwo = parseInt(numberTwo)
    // let Subtract = numberOne - numberTwo
    // elresult.innerText = Subtract
    changeNumber('-')
})

btnMultiply.addEventListener('click', function(){
    // let numberOne = elnumberOne.value
    // numberOne = parseInt(numberOne)
    // let numberTwo = elnumberTwo.value
    // numberTwo = parseInt(numberTwo)
    // let Multiply = numberOne * numberTwo
    // elresult.innerText = Multiply
    changeNumber('*')
})

btnDivide.addEventListener('click', function(){
    // let numberOne = elnumberOne.value
    // numberOne = parseInt(numberOne)
    // let numberTwo = elnumberTwo.value
    // numberTwo = parseInt(numberTwo)
    // let Divide = numberOne / numberTwo
    // elresult.innerText = Divide
    changeNumber('/')
})

function changeNumber(operator) {
    let number = 0;
    let numberOne = parseFloat(elnumberOne.value)
    let numberTwo = parseFloat(elnumberTwo.value)
    if (isNaN(numberOne || numberTwo)){
        alert('Vui long nhap du hai so')
    }
    switch (operator) {
      case '+':
        number = numberOne + numberTwo;
        break;
      case '-':
        number = numberOne - numberTwo;
        break;
      case '*':
        number = numberOne * numberTwo;
        break;
      case '/':
        number = numberOne / numberTwo;
        break;
    }
    elresult.innerText = number;
  }