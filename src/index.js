import { app } from "./components/app"

const listContainer = document.querySelector('#list-container')
const btn = document.querySelector('button')

btn.addEventListener('click', app.addTask)
listContainer.addEventListener('click', e => {app.checkTask(e)}, false)
app.showTask()