const listItem = ['abc','xyz','haha','huhu','hihi']
let btnSortAsc = document.getElementById('btn-sort-asc')
let btnSortDesc = document.getElementById('btn-sort-desc')

let elList = document.getElementById('list')

renderItem(listItem)
function renderItem(item){
    let html = ''
    for(let i = 0; i < item.length; i++){
        html += `<li>${item[i]}</li>`
    }
    elList.innerHTML = html
}

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
//gọi lại hàm
