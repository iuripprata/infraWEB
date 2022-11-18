let id_task = 0
let btnAddTask = document.getElementById('task')
let taskBtn = document.getElementById('task-btn')



btnAddTask.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
      AddTask();
    }
}, false);


function AddTask() {
    const taskAdd = document.getElementById('task-add-toast')
    const toastAdd = new bootstrap.Toast(taskAdd)

    let valueTask = document.getElementById("task").value
    if (valueTask != ""){
        let element = document.createElement("div")
        element.setAttribute("id", `${id_task}`)
        element.setAttribute("class", "input-group mt-2")
        element.innerHTML = `
            <input type="text" class="form-control" value="${valueTask}" readonly >
            <button class="btn btn-outline-secondary" onclick="progressTask(${id_task})" 
                type="button"><i class="fa-solid fa-arrow-right"></i></button>
            <button class="btn btn-outline-secondary" onclick="removeTask(${id_task})" 
                type="button" ><i class="fa-solid fa-trash"></i></button>
        `
        document.getElementById("task-todo").appendChild(element)
        id_task++
        toastAdd.show()
    }
}

function removeTask(id_task) {
    let element = document.getElementById(String(id_task))
    element.remove()
}

function progressTask(id_task) {
    let element = document.getElementById(String(id_task))
    let parent = element.parentElement
    
    document.getElementById("task-progress").appendChild(element)
    
    if (parent.attributes.id.nodeValue == 'task-progress') {
        document.getElementById("task-done").appendChild(element)
    }

    checkDone(id_task)
}

function checkDone(id_task) {
    let element = document.getElementById(String(id_task))
    let parent = element.parentElement

    if (parent.attributes.id.nodeValue == 'task-done') {
        element.children[0].style.background = "#008F8C"
        element.children[0].style.color = "white"
        element.children[1].hidden = true

        const taskDone = document.getElementById('task-done-toast')
        const toastDone = new bootstrap.Toast(taskDone)

        toastDone.show()
    }
}

window.addEventListener('resize', function () {
    //var altura = window.innerHeight;
    let largura = window.innerWidth;
    let containerTasks = this.document.getElementById('container-tasks')

    if (largura <= 960) {
        containerTasks.setAttribute('class', 'column')
        containerTasks.removeAttribute('row')
    }else{
        containerTasks.setAttribute('class', 'row')
        containerTasks.removeAttribute('column')
    }
});
