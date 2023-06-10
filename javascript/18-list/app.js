const listItem = ['abc','xyz','haha','huhu','hihi']
let btnSortAsc = document.getElementById('btn-sort-asc')
let btnSortDesc = document.getElementById('btn-sort-desc')
const search = document.getElementById('search')

let elList = document.getElementById('list')

renderItem(listItem)

const listLI = document.querySelectorAll('#list li')
for(let i = 0; i < listLI.length; i++){
    listLI[i].addEventListener('click', function(){
        listLI[i].style.color = 'red'
    })
}

function renderItem(item, search = ''){
    let html = ''
    for(let i = 0; i < item.length; i++){
        let name = item[i]
        if(name !== ''){
            name = name.replaceAll(search, `<mark>${search}</mark>`)
        }
        html += `<li class='item'>${name}</li>`
    }
    elList.innerHTML = html
}

elList.addEventListener('click', function(evt){
    const el = evt.target
    if (el.classList.contains('item')){
        el.style.color = 'red'
    }
})
//bắt sự kiện click//
//sắp xếp mảng
btnSortAsc.addEventListener('click', function(){
    let listItemSorted = listItem.sort()
    renderItem(listItemSorted)
})
btnSortDesc.addEventListener('click', function(){
    let listItemSorted = listItem.sort().reverse()
    renderItem(listItemSorted)
})


search.addEventListener('input', function(){
    let searchValue = search.value
    // let listSearch = []
    // for(let i = 0; i < listItem.length; i++){
    //     if(listItem[i].includes(searchValue)){
    //         listSearch.push(listItem[i])
    //     }
    // }

    const newListSearch = listItem.filter(function (item){
        // if (item.includes(searchValue) return true)
        return item.includes(searchValue)
    })

    renderItem(newListSearch, searchValue)
})
