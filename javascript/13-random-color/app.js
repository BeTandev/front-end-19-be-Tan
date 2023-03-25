let btn = document.getElementById('btn')
let colorText = document.getElementById('color-text')
let colorBox = document.getElementById('color-box')

btn.addEventListener('click', function(){
    let result = ''
    const letters = 'abcdef0123456789'
    const lettersLength = letters.length
    for(let i = 0; i < 6; i++){
        result += letters.charAt(Math.floor(Math.random()*lettersLength))
    }
    colorText.innerText = "#" + result
    colorBox.style.backgroundColor = "#" + result
})