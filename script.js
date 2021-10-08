// variables
const form = document.querySelector('form')
const input = document.querySelector('#txtTaskName')
const btnDeleteAll = document.querySelector('#btnDeleteAll')
const taskList = document.querySelector('#task-list')
const li = document.querySelector('list-group')
eventListeners()

// call event listener
function eventListeners() {
    form.addEventListener('submit', addNewItem)
}

// add New Item
function addNewItem(e) {

    if(input.value ===''){
        alert('please add new item')
    }
    // create li
    const li = document.createElement('li')
    li.className = 'list-group list-group-item-secondary'
    li.appendChild(document.createTextNode(input.value))
    // create a
    const a = document.createElement('a')
    a.classList = 'delete-item'
    a.setAttribute('herf','#')
    a.innerHTML='<i class="fas fa-times"></i>'

    
    // add a to li
    li.appendChild(a)
    // add li to ul
    taskList.appendChild(li)
    // clear input
    input.value=''
    e.preventDefault();
}