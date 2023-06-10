const listItems = [
    {
      id: 1,
      name: 'ipsum dolor sit',
    },
    {
      id: 2,
      name: 'consectetur adipisicing',
    },
    {
      id: 3,
      name: 'aut dolor deserunt',
    },
    {
      id: 4,
      name: 'dolorum voluptatem',
    },
    {
      id: 5,
      name: 'possimus adipisci',
    },
  ];
let btnSortAsc = document.getElementById('btn-sort-asc')
let btnSortDesc = document.getElementById('btn-sort-desc')
let check = document.getElementById('check')
const search = document.getElementById('search')

let elList = document.getElementById('list')
let html = ''
for(let i = 0;  i < listItems.length; i++){
    const item = listItems[i]
    html += `<li>${item.name}</li>`
}
elList.innerHTML = html

function renderItem(item, search = ''){
    let html = ''
    for(let i = 0; i < item.length; i++){
        let name = item[i]
        // if(name.id !== ''){
        //     name = name.id.replaceAll(search, `<mark>${search}</mark>`)
        // }
        html += `<li class='item'>${name.name}</li>`
    }
    elList.innerHTML = html
}

btnSortAsc.addEventListener('click', function(){
  let listItemSorted = listItems.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade)
  console.log(listItemSorted)
  renderItem(listItemSorted)
})
btnSortDesc.addEventListener('click', function(){
  let listItemSorted = listItems.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade).reverse()
  console.log(listItemSorted)
  renderItem(listItemSorted)
})

elList.addEventListener('click', function(evt){
  const el = evt.target
  if (el.classList.contains('item')){
      el.style.color = 'red'
  }
})


