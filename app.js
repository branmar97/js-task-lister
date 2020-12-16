const addBtn = document.getElementById('add-task-btn');
const clearBtn = document.getElementById('clear-tasks-btn');
const list = document.querySelector('ul.collection');
const delBtns = document.querySelectorAll('.delete-item');

function addItem(e){
    const textBox = document.getElementById('task');
    const value = textBox.value;

    li = document.createElement('li')
    li.className = 'collection-item';
    li.innerText = value;
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);
    list.appendChild(li);
    link.addEventListener('click', deleteItem);
    e.preventDefault();
}