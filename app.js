const addBtn = document.getElementById('add-task-btn');
const clearBtn = document.getElementById('clear-tasks-btn');
const list = document.querySelector('ul.collection');
const delBtns = document.querySelectorAll('.delete-item');

addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearItems);
delBtns.forEach(btn => btn.addEventListener('click', deleteItem));

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

function deleteItem(e){
   e.target.parentNode.parentNode.remove();
}

function clearItems(e){
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }

    e.preventDefault();
}

