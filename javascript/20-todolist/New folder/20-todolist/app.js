// DEFINE
const todos = [
  {
    id: createId(),
    name: 'Eating',
    level: 1,
    status: 'incompleted',
  },
  {
    id: createId(),
    name: 'Coding',
    level: 3,
    status: 'incompleted',
  },
  {
    id: createId(),
    name: 'Sleeping',
    level: 2,
    status: 'incompleted',
  },
  {
    id: createId(),
    name: 'Shopping',
    level: 2,
    status: 'completed',
  },
];

const elTodos = document.getElementById('todos');
const elFilterStatusWrapper = document.querySelector('.filter-status-wrapper');
const elFilterLevel = document.getElementById('filter-level');

renderTodos(todos);

// EVENTS
// event delegation
elFilterStatusWrapper.addEventListener('click', function (event) {
  if (event.target.name === 'status') {
    const valueFilter = event.target.value;
    if (valueFilter !== 'all') {
      const listFiltered = todos.filter((item) => item.status === valueFilter);
      renderTodos(listFiltered);
    } else {
      renderTodos(todos);
    }
  }
});

elFilterLevel.addEventListener('change', function () {
  const value = elFilterLevel.value;
  if (value !== 'all') {
    const listFiltered = todos.filter((item) => item.level === parseInt(value));
    renderTodos(listFiltered);
  } else {
    renderTodos(todos);
  }
});

elTodos.addEventListener('click', function (event) {
  const el = event.target;
  if (el.classList.contains('todo-name')) { 
    const id = el.dataset.id;
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id === id) {
    //     const currentStatus = todos[i].status;
    //     const newStatus = currentStatus === 'incompleted' ? 'completed' : 'incompleted';
    //     todos[i].status = newStatus;
    //     break;
    //   }
    // }
    const idx = todos.findIndex((item) => item.id === id);
    const currentStatus = todos[idx].status;
    const newStatus = currentStatus === 'incompleted' ? 'completed' : 'incompleted';
    todos[idx].status = newStatus;
    renderTodos(todos);
  }
});

// FUNCTIONS
function renderTodos(items) {
  let html = '';
  for (let i = 0; i < items.length; i++) {
    let nameClass = '';
    if (items[i].status === 'completed') nameClass = 'text-decoration-line-through text-muted';

    html += `
    <li class="item mb-1">
      <div class="d-flex align-items-center justify-content-between">
        <span role="button" data-id="${items[i].id}" class="todo-name ${nameClass}">${items[i].name}</span>
        ${showLevel(items[i].level)}
        <div class="action">
          <button class="btn btn-sm btn-primary"><i class="fa-solid fa-pen"></i></button>
          <button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </li>
    `;
  }

  elTodos.innerHTML = html;
}

function showLevel(level) {
  let levelText = '';
  let levelClass = '';

  switch (level) {
    case 1:
      levelText = 'Thấp';
      levelClass = 'bg-secondary';
      break;
    case 2:
      levelText = 'Bình thường';
      levelClass = 'bg-info';
      break;
    case 3:
      levelText = 'Cao';
      levelClass = 'bg-danger';
      break;
  }

  return `<span class="badge ${levelClass}">${levelText}</span>`;
}

function createId(length = 8) {
  // trả về id là một chuỗi ngẫu nhiên bao gồm 8 kí tự, A-Za-z0-9
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
