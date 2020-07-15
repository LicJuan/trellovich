const URL = 'https://my-json-server.typicode.com/LicJuan/trellovich/tasks'
const toDo = document.getElementById("to-do")
const inProgress = document.getElementById("in-progress")
const done = document.getElementById("done")
const crearTask = document.getElementById("crearTask")
// const aside = document.querySelector(".aside-container")

crearTask.addEventListener("click", () => {
    aside.classList.toggle("active")
})

axios.get(URL)
    .then(res => fillTasks(res.data))
    .catch(err => console.log(err))

const fillTasks = data => {
    data.map(task => {
        let newTask = document.createElement('article')
        let taskTitle = document.createElement('H3')
        taskTitle.textContent = task.title
        let taskPerson = document.createElement("P")
        taskPerson.innerHTML = `<span>Responsable: ${task.person}</span>`
        let taskDeadline = document.createElement("P")
        taskDeadline.innerHTML = `<span>Plazo: ${unixToDate(task.deadline)}</span>`

        newTask.appendChild(taskTitle)
        newTask.appendChild(taskPerson)
        newTask.appendChild(taskDeadline)
        switch (task.state) {
            case 'to-do':
                toDo.appendChild(newTask)
                break;
            case 'in-progress':
                inProgress.appendChild(newTask)
                break;
            case 'done':
                done.appendChild(newTask)
                break;
        }
    })
}