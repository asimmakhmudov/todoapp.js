// variables
const form = document.querySelector('form')
const input = document.querySelector('#txtTaskName')
const btnDeleteAll = document.querySelector('#btnDeleteAll')
const taskList = document.querySelector('#task-list')
const li = document.querySelector('list-group')
let items

// load items
loadItems()

// call event listeners
eventListeners()

// call event listener
function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem)
    
    // delete an item
    taskList.addEventListener('click', deleteItem)
    // delete all item
    btnDeleteAll.addEventListener('click', deleteAllItems)
}

// load items
function loadItems() {

    items = getItemsFromLS()

    items.forEach(function(item){
        createItem(item)
    }) 
}

// get items from local storage
function getItemsFromLS() {
    if(localStorage.getItem('items')==null) {
        items = []
    }
    else {
        items = JSON.parse(localStorage.getItem('items'))
    }
    return items
}

// set item to local storage
function setItemToLS(text) {
    items = getItemsFromLS()
    items.push(text)
    localStorage.setItem('items',JSON.stringify(items))
}

// delete items from LS
function deleteItemFromLS(text) {
    items = getItemsFromLS()
    items.forEach(function(item,index){
        if(item === text) {
            items.splice(index,1)
        }
    })
    localStorage.setItem('items',JSON.stringify(items))
}

function createItem(text) {
    // create li
    const li = document.createElement('li')
    li.className = 'list-group-item d-flex justify-content-between align-items-center'
    li.appendChild(document.createTextNode(text))
    // create a
    const a = document.createElement('a')
    a.classList = 'delete-item'
    a.setAttribute('herf','#')
    a.innerHTML='<i class="fas fa-trash"></i>'
    // add a to li
    li.appendChild(a)
    // add li to ul
    taskList.appendChild(li)
}


// add New Item
function addNewItem(e) {
    if(input.value ==''){
        alert('please add new item');
    }
    else {
        // create item
        createItem(input.value)
        
        // save to local storage 
        setItemToLS(input.value)

        // clear input
        input.value=''
    }
    
    

    e.preventDefault();
}

// delete an item
function deleteItem(e) {
    
    if(e.target.className==='fas fa-trash'){
        if (confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove()
            // delete items from LS
            deleteItemFromLS(e.target.parentElement.parentElement.textContent)
        }
    }
    e.preventDefault();
}

// delete all items
function deleteAllItems(e) {

    if (confirm('Are You Sure?')){
        //taskList.innerHTML=''
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild)
        }
        localStorage.clear()
    }
    e.preventDefault()
}