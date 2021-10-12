// variables
const form = document.querySelector('form')
const input = document.querySelector('#txtTaskName')
const btnDeleteAll = document.querySelector('#btnDeleteAll')
const taskList = document.querySelector('#task-list')
const li = document.querySelector('list-group')

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

// add New Item
function addNewItem(e) {

    if(input.value ==''){
        alert('please add new item');
    }
    else{
        // create li
        const li = document.createElement('li')
        li.className = 'list-group-item d-flex justify-content-between align-items-center'
        li.appendChild(document.createTextNode(input.value))
        // create a
        const a = document.createElement('a')
        a.classList = 'delete-item'
        a.setAttribute('herf','#')
        a.innerHTML='<i class="fas fa-trash"></i>'

        
        // add a to li
        li.appendChild(a)
        // add li to ul
        taskList.appendChild(li)
        // clear input
        input.value=''  
    }
    e.preventDefault();
}

// delete an item
function deleteItem(e) {
    if (confirm('Are You Sure?')){
        if(e.target.className==='fas fa-trash'){
            e.target.parentElement.parentElement.remove()
        }
    }
    e.preventDefault();
}

// delete all items
function deleteAllItems(e) {
    
    if (confirm('Are You Sure?')){
        //taskList.innerHTML=''
        taskList.childNodes.forEach(function(item){
            if(item.nodeType===1){
                item.remove()
            }
        })
    }
    e.preventDefault()
}