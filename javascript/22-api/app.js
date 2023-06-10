const elTodos = document.getElementById('todos')
const btnSort = document.getElementById('btn-sort')

btnSort.addEventListener('click', () => {
    const sortBy = document.getElementById('sort-by').value
    const sortDir = document.getElementById('sort-dir').value
    fetch(`https://apiforlearning.zendvn.com/api/v2/todos?sort_by=${sortBy}&sort_dir=${sortDir}`)
    .then((response) => response.json())
    .then((res) => {
        renderTodos(res.data)
    })
})


function renderTodos(data){
    let html = ''
        for(let i = 0; i < data.length; i++){
            html += `<li>${data[i].id} - ${data[i].name} - ${data[i].level} - ${data[i].status}</li>`
        }
        elTodos.innerHTML = html
}