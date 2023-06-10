3
// let todos = [
//     {
//         id: creatId(),
//         name: 'eating',
//         level: 1,
//         status: 'incompleted',
//     },
//     {
//         id: creatId(),
//         name: 'coding',
//         level: 3,
//         status: 'incompleted',
//     },
//     {
//         id: creatId(),
//         name: 'sleeping',
//         level: 2,
//         status: 'completed',
//     },
//     {
//         id: creatId(),
//         name: 'shopping',
//         level: 2,
//         status: 'completed',
//     },
// ]

let todos = JSON.parse(localStorage.getItem('TODOs'))
console.log(todos);

// localStorage.setItem('TODOs', JSON.stringify(todos))

const elTodos = document.getElementById('todos')
const elFilterStatusWrapper = document.querySelector('.filter-status-wrapper')
const elfilterLevel = document.getElementById('filter-level')
const search = document.getElementById('search')
let formSelect = document.querySelectorAll('.form-select')
const sortBy = document.getElementById('sort-by')
const sortDir = document.getElementById('sort-dir')
let sortDir1 = 'asc'
let sortBy1 = 'name'
const inputName = document.getElementById('name')
const inputLevel = document.getElementById('level')
const btnSave = document.getElementById('btn-save')
let idEdit = null;


renderTodos(todos)

elFilterStatusWrapper.addEventListener('change', function(event){
    if(event.target.name === 'status'){
        const valueFilter = event.target.value
        if(valueFilter !== 'all'){
            const listFiltered = todos.filter((item) => item.status === valueFilter)
            renderTodos(listFiltered)
        }else{
            renderTodos(todos)
        }
    }
})
elfilterLevel.addEventListener('change', function(){
    const value = elfilterLevel.value
    if(value !== 'all'){
        const listFiltered = todos.filter((item) => item.level === parseInt(value))
        renderTodos(listFiltered)
    }      
    else{
        renderTodos(todos)
    }
})
elTodos.addEventListener('click', function(event){
    const el = event.target
    if(el.classList.contains('todo-name')){
        console.log('todo....')
    }
})
search.addEventListener('input', function(){
    let searchValue = search.value.trim()
    
    const newListSearch = todos.filter(function (item){
        // if (item.includes(searchValue) return true)
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    console.log(newListSearch)
    renderTodos(newListSearch, searchValue)
})
elTodos.addEventListener('click', function (event) {
    console.log('123')
    const el = event.target;
    if (el.classList.contains('todo-name')) { 
      const id = el.dataset.id;
      const idx = todos.findIndex((item) => item.id === id);
      const currentStatus = todos[idx].status;
      const newStatus = currentStatus === 'incompleted' ? 'completed' : 'incompleted';
      todos[idx].status = newStatus;
      localStorage.setItem('TODOs', JSON.stringify(todos))
      renderTodos(todos);
    }

    if(el.classList.contains('btn-delete') || el.classList.contains('btn-delete-icon')){
        const id = el.dataset.id
        todos = todos.filter((item) => item.id !== id)
        localStorage.setItem('TODOs', JSON.stringify(todos))
        renderTodos(todos)
    }

    if(el.classList.contains('btn-edit') || el.classList.contains('btn-edit-icon')){
        const id = el.dataset.id
        let newTodos = todos.find((item) => item.id === id)
        inputName.value = newTodos.name
        inputLevel.value = newTodos.level
        btnSave.innerText = 'Cập nhật'
        idEdit = id
    }
  });
sortBy.addEventListener('change', () => {
    sortBy1 = sortBy.value
    sortTodos(sortBy1, sortDir1)
})
sortDir.addEventListener('change', () => {
    sortDir1 = sortDir.value
    sortTodos(sortBy1, sortDir1)
})
btnSave.addEventListener('click', () => {
    let nameValue = inputName.value.trim()
    let levelValue = parseInt(inputLevel.value)
    if(nameValue){
        if(idEdit){
            const idx = todos.findIndex((item) => item.id === idEdit)
            // console.log(idx)
            todos[idx].name = nameValue
            todos[idx].level = levelValue
        }else{
            let newTodo = {
                id: creatId(),
                name: nameValue,
                level: levelValue,
                status: 'incompleted'
            }
            todos.push(newTodo)
        }     
        localStorage.setItem('TODOs', JSON.stringify(todos))
        renderTodos(todos)
        inputName.value = ''
        btnSave.innerText = "Luu"
    }else{
        inputName.value = ''
        alert('Vui long nhap name')
    }  
})


function sortTodos(sortByValue, sortDirValue = 'asc'){
    todos.sort((a, b) => {
        let levelA = a[sortByValue]
        let levelB = b[sortByValue]
        if(sortByValue === 'name'){
            levelA = levelA.toLowerCase()
            levelB = levelB.toLowerCase()
        }
        if(levelA < levelB) return sortDirValue === 'asc' ? -1 : 1 
        if(levelA > levelB) return sortDirValue === 'asc' ? 1 : -1
        
        return 0;
      });
    renderTodos(todos) 
}
function renderTodos(items, search=''){
    let html = ''
    
    for (let i = 0; i < items.length; i++) {
        let name = items[i].name
        if(search != ''){
            const regex = new RegExp(search, "ig")
            name = name.replaceAll(regex, function(match){
                return `<mark>${match}</mark>`
            })
        }
        console.log(items[i]);
        html += `
        <li class="item mb-1">
        <div class="d-flex align-items-center justify-content-between">
            <span role="button" data-id="${items[i].id}" class="todo-name ${cutLine(items[i].status)}">${name}</span>
            ${showLevel(items[i].level)}
            <div class="action">
            <button class="btn btn-sm btn-primary btn-edit" data-id="${items[i].id}"><i class="fa-solid fa-pen btn-edit-icon" data-id="${items[i].id}"></i></button>
            <button class="btn btn-sm btn-danger btn-delete" data-id="${items[i].id}"><i data-id="${items[i].id}" class="btn-delete-icon fa-solid fa-trash"></i></button>
            </div>
         </div>
        </li>
              `
    }
    elTodos.innerHTML = html
}


function creatId(length = 8) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function showLevel(level){
    let levelText = ''
    let levelClass = ''
    switch(level){
        case 1:
            levelText = 'Thap'
            levelClass = 'bg-secondary'
            break;
        case 2:
            levelText = 'Trung binh'
            levelClass = 'bg-info'
            break;
        case 3: 
            levelText = 'Cao'
            levelClass = 'bg-danger'
            break;
    }
    return `<span class="badge ${levelClass}">${levelText}</span>`
}

function cutLine(cutline){
    let check = ''
    if(cutline === 'completed'){
        check = `text-decoration-line-through text-muted`
    }
    return check
}
