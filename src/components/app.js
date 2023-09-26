const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

export const app = (() => {
  const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML)
  }
  
  const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data')
  }
  
  const addTask = () => {
    if (inputBox.value === '') {
      alert('Please, enter the text :(')
      return
    }
    const li = document.createElement('li')
    li.innerText = inputBox.value
    listContainer.appendChild(li)
    const span = document.createElement('span')
    span.innerText = '\u00d7'
    li.appendChild(span)
    inputBox.value = ''
    saveData()
  }
  
  const checkTask = (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      saveData()
      return
    }
    if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove()
      saveData()
      return
    }
  }

  return { addTask, showTask, checkTask }
})()