let btnIncrease = document.getElementById('btn-increase');
let btnDecrease = document.getElementById('btn-decrease');
let btnReset = document.getElementById('btn-reset');
let btnSave = document.getElementById('btn-save');
let elNumber = document.getElementById('number');
let elSavedNumber = document.querySelector('.saved-number');

// đăng ký sự kiện click cho btnIncrease
btnIncrease.addEventListener('click', function () {
  // let number = elNumber.innerText;
  // number = parseInt(number);
  // number++;
  // elNumber.innerText = number;
  changeNumber('+');
});

btnDecrease.addEventListener('click', function () {
  // let number = elNumber.innerText;
  // number = parseInt(number);
  // number--;
  // elNumber.innerText = number;
  changeNumber('-');
});

btnReset.addEventListener('click', function () {
  elNumber.innerText = 0;
});

btnSave.addEventListener('click', function () {
  // let number = elNumber.innerText;
  // let currentContent = elSavedNumber.innerText;
  // let newContent = currentContent + number + '|';
  // elSavedNumber.innerText = newContent;

  // let number = elNumber.innerText;
  // let currentContent = elSavedNumber.innerText;
  // currentContent = currentContent + number + '|';
  // elSavedNumber.innerText = currentContent;

  // let number = elNumber.innerText;
  // let newContent = elSavedNumber.innerText + number + '|';
  // elSavedNumber.innerText = newContent;

  // let number = elNumber.innerText;
  // elSavedNumber.innerText = elSavedNumber.innerText + number + '|';

  // let number = elNumber.innerText;
  // elSavedNumber.innerText += number + '|';

  elSavedNumber.innerText += elNumber.innerText + '|';
});

function changeNumber(operator = '+') {
  let number = elNumber.innerText;
  number = parseInt(number);
  switch (operator) {
    case '+':
      number++;
      break;
    case '-':
      number--;
      break;
  }
  elNumber.innerText = number;
}
