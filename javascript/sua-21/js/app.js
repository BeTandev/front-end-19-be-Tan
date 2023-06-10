const elContent = document.getElementById('content')
const slbLineHeight = document.getElementById('slb-line-height')
const slbTextAlign = document.getElementById('slb-text-align')
const elBackgroundColor = document.getElementById('background-color')
const elFontSize = document.getElementById('font-size')

const fontSize = localStorage.getItem('fontSize')
const backgroundColor = localStorage.getItem('backgroundColor')
const lineHeight = localStorage.getItem('lineHeight')
const textAlign = localStorage.getItem('textAlign')

const settings = JSON.parse(localStorage.getItem('READING_CONFIG')) || {}
for(const key in settings){
    elContent.style[key] = settings[key]
}

slbLineHeight.addEventListener('change', function(){
    const value = slbLineHeight.value
    elContent.style.lineHeight = value
    saveSetting('lineHeight', value)
})

slbTextAlign.addEventListener('change', function(){
    const value = slbTextAlign.value
    elContent.style.textAlign = value
    saveSetting('textAlign', value)
})

elBackgroundColor.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('btn-background')){
        const value = el.dataset.value
        elContent.style.backgroundColor = value
        saveSetting('backgroundColor', value)
    }
})

elFontSize.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('btn-font-size')){
        let fontSize = parseInt(window.getComputedStyle(elContent).getPropertyValue('font-size'))
        if(el.id === 'increase'){
            fontSize++
        }else{
            fontSize--
        }
        elContent.style.fontSize = fontSize + "px"
        saveSetting('fontSize', fontSize + "px")
    }
})

function saveSetting(key, value){
    settings[key] = value
    localStorage.setItem('READING_CONFIG', JSON.stringify(settings))
}