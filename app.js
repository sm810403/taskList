//add UI DOM
const form = document.querySelector('.form-box');
const taskInput = document.querySelector('.task-input');
const submitBtn = document.querySelector('.submit-btn');
const filterInput = document.querySelector('.filter-input');
const taskList = document.querySelector('ul');
const clearBtn = document.querySelector('.clear-btn');



//load all events
loadEvents();

//all events
function loadEvents(){
    //submit tasks into lists
    form.addEventListener('submit', addTasks);
    //clear tasks
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks
    filterInput.addEventListener('keyup', filterTasks);
    //delete list
    taskList.addEventListener('click', deleteTasks);
}
//delete tasks
function deleteTasks(e){
    if(e.target.parentElement.classList.contains('link')){
        if(confirm('Are You Sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

//add task into lists
function addTasks(e){
    e.preventDefault();
    const inputValue = taskInput.value;
    if (inputValue !== ''){
        const li = document.createElement('li');
        li.className = 'list';
        li.appendChild(document.createTextNode(inputValue));
        const link = document.createElement('a');
        link.className = 'link';
        link.innerHTML = `<i class="far fa-times-circle"></i>`;
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
//clear tasks
function clearTasks(){
    while(taskList.firstChild){
        taskList.firstChild.remove();
    }
}
//filter Tasks
function filterTasks(e){
    const filterValue = e.target.value.toLowerCase();
    const lists = document.querySelectorAll('.list');
    lists.forEach(list =>{
        const item = list.firstChild.textContent;
        if(item.toLowerCase().indexOf(filterValue) != -1){
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }
    })
}