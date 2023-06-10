// let element = {
//     font: 16,
//     color: '#f8f9fa',
//     lineheight: 1,
//     textalign: 'left'
// }
const descFont = document.getElementById('desc-font')
const ascFont = document.getElementById('asc-font')
const content = document.getElementById('content')
const backgroundColor = document.getElementById('background-color')
const slbLineHeight = document.getElementById('slb-line-height')
const slbTextAlign = document.getElementById('slb-text-align')
let element = JSON.parse(localStorage.getItem('ELEMENT'))

// localStorage.setItem('ELEMENT', JSON.stringify(element))

renderElement()

descFont.addEventListener('click', function(){
    element.font -= 2
    localStorage.setItem('ELEMENT', JSON.stringify(element))
    let fontEdited = element.font + 'px'
    content.style.fontSize = fontEdited
})
ascFont.addEventListener('click', function(){
    element.font += 2
    localStorage.setItem('ELEMENT', JSON.stringify(element))
    let fontEdited = element.font + 'px'
    content.style.fontSize = fontEdited
})

backgroundColor.addEventListener('click', function(event){
    const el = event.target
    if(el.classList.contains('btn-light') || el.classList.contains('btn-primary') || el.classList.contains('btn-success') || el.classList.contains('btn-danger') || el.classList.contains('btn-warning')){
        element.color = el.dataset.value
        localStorage.setItem('ELEMENT', JSON.stringify(element))
        content.style.backgroundColor = element.color
    }
})

slbLineHeight.addEventListener('change', function(){
    element.lineheight = slbLineHeight.value
    localStorage.setItem('ELEMENT', JSON.stringify(element))
    content.style.lineHeight = element.lineheight
})

slbTextAlign.addEventListener('change', function(){
    element.textalign = slbTextAlign.value
    localStorage.setItem('ELEMENT', JSON.stringify(element))
    content.style.textAlign = element.textalign
})

function renderElement(){
    content.style.fontSize = element.font + 'px'
    content.style.backgroundColor = element.color
    content.style.lineHeight = element.lineheight
    content.style.textAlign = element.textalign
}