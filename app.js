//add UI DOM
const form = document.querySelector('.form-box');
const taskInput = document.querySelector('.task-input');
const submitBtn = document.querySelector('.submit-btn');
const filterInput = document.querySelector('.filter-input');
const taskList = document.querySelector('ul');
const clearBtn = document.querySelector('.clear-btn');



//load all events
loadEventListener();

//all events
function loadEventListener(){
    //submit tasks into lists
    form.addEventListener('submit', addTasks);
    //clear tasks
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks
    filterInput.addEventListener('keyup', filterTasks);
    //delete list
    taskList.addEventListener('click', deleteTasks);
    //load tasks 
    document.addEventListener('DOMContentLoaded', setTasks);
}
//set tasks into UI from storage
function setTasks(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task =>{
        const li = document.createElement('li');
        li.className = 'list';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'link';
        link.innerHTML = `<i class="far fa-times-circle"></i>`;
        li.appendChild(link);
        taskList.appendChild(li);
    })
}

//delete tasks
function deleteTasks(e){
    if(e.target.parentElement.classList.contains('link')){
        if(confirm('Are You Sure?')){
        e.target.parentElement.parentElement.remove();
        //remove tasks from LS
        removeTaskFromLS(e.target.parentElement.parentElement)
        }
    }
}
//remove tasks from LS
function removeTaskFromLS(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task =>{
        tasks.remove(task);
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
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
        storeTaskIntoLocalStorage(inputValue);
        taskInput.value = '';
    }
}
//store tasks into LS
function storeTaskIntoLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//clear tasks
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
        filterInput.value = '';
    }
    clearTasksFromLS();

}
//clear tasks from LS
function clearTasksFromLS(){
    localStorage.clear();
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