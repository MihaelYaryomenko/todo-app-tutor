import { app } from "./components/app"
import "../sass/main.scss"

const listContainer = document.querySelector('#list-container')
const btn = document.querySelector('button')

btn.addEventListener('click', app.addTask)
listContainer.addEventListener('click', e => {app.checkTask(e)}, false)
app.showTask()