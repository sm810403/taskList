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
    filterInput.addEventListener('keyup', filterTasks)

}

//add task into lists
function addTasks(e){
    e.preventDefault();
    const inputValue = taskInput.value;
    if (inputValue !== ''){
        const li = document.createElement('li');
        li.className = 'list';
        li.appendChild(document.createTextNode(inputValue));
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
    const liValue = document.querySelectorAll('.list');
    liValue.forEach(list =>{
        if(filterValue === list{
            taskList.style.display = 'block';
        } else {
            taskList.style.display = 'none';
        }
    })
}