var ulElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');


var toDos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderToDos() {
    ulElement.innerHTML = '';
    for (toDo of toDos) {
        var liElement = document.createElement('li');
        var textLiElement = document.createTextNode(toDo);
        var aLinkElement = document.createElement('a');
        aLinkElement.setAttribute('href', '#');
        var pos = toDos.indexOf(toDo);
        aLinkElement.setAttribute('onclick', 'deleteToDo('+pos+')');
        var aLinkText = document.createTextNode('excluir');
        aLinkElement.appendChild(aLinkText);
        liElement.appendChild(textLiElement);
        liElement.appendChild(aLinkElement);
        ulElement.appendChild(liElement);
    }
}

function addToDo() {
    var todoTask = inputElement.value;
    toDos.push(todoTask);
    inputElement.value = '';
    renderToDos();
    saveToStorage();
}

function deleteToDo(pos) {
    toDos.splice(pos, 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(toDos))
}

renderToDos();

buttonElement.onclick = addToDo;