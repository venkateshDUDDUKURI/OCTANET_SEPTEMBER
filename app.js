document.getElementById('add-task-btn').addEventListener('click',function(){
    const taskInput=document.getElementById('input-task');
    const inputText=taskInput.value;
    if(inputText==='')
        return;
    const taskList=document.getElementById('task-list');
    const li=document.createElement('li');
    li.innerHTML=`<input type="checkbox" class="task-checkBox"><span>${inputText}</span><button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>`;
    li.querySelector('.task-checkBox').addEventListener('change',function(){
        if(this.checked)
        li.classList.add('completed');
        else
        li.classList.remove('completed');
    });
    li.querySelector('.delete-btn').addEventListener('click',function(e){
        e.stopPropagation();
        taskList.removeChild(li);
    });
    taskList.appendChild(li);
    taskInput.value="";
});