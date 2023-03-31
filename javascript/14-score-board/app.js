let elfirstBtn1 = document.getElementById('first-btn-1')
let elfirstBtn2 = document.getElementById('first-btn-2')
let elfirstBtn3 = document.getElementById('first-btn-3')
let elsecondBtn1 = document.getElementById('second-btn-1')
let elsecondBtn2 = document.getElementById('second-btn-2')
let elsecondBtn3 = document.getElementById('second-btn-3')
let elfirstScore = document.getElementById('first-score')
let elsecondScore = document.getElementById('second-score')
let firstResult = 0
let secondResult = 0

elfirstBtn1.addEventListener('click', function(){
    setValue(elfirstBtn1, elfirstScore)
})
elfirstBtn2.addEventListener('click', function(){
    setValue(elfirstBtn2, elfirstScore)
})
elfirstBtn3.addEventListener('click', function(){
    setValue(elfirstBtn3, elfirstScore)
})

elsecondBtn1.addEventListener('click', function(){
    setValue(elsecondBtn1, elsecondScore)
})
elsecondBtn2.addEventListener('click', function(){
    setValue(elsecondBtn2, elsecondScore)
})
elsecondBtn3.addEventListener('click', function(){
    setValue(elsecondBtn3, elsecondScore)
})

function setValue(btn,box){
    let value = parseInt(btn.innerText)
    let currentValue = parseInt(box.innerText)
    currentValue += value
    if(currentValue < 10){
        currentValue = '0' + currentValue
    }
    box.innerText = currentValue
}


// for (let i = 0; i < btnArray.length; i++) {
//     btnArray[i].addEventListener('click', function () {
//       if (btnArray[i].classList.contains('home')) setValue(btnArray[i], boxScoreHome);
//       if (btnArray[i].classList.contains('away')) setValue(btnArray[i], boxScoreAway);
//     });
//   }
  
//   function setValue(btn, box) {
//     let value = parseInt(btn.innerText);
//     let currentValue = parseInt(box.innerText);
//     currentValue += value;
//     if (currentValue < 10) {
//       currentValue = '0' + currentValue;
//     }
//     box.innerText = currentValue;
//   }
