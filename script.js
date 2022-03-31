const inputText = document.querySelector(".input-text");
const addToListButton = document.querySelector(".add-to-list");
const list = document.querySelector(".list");


addToListButton.addEventListener('click', addToList);
list.addEventListener('click', deleteDone)

function addToList(event) {

    event.preventDefault();

    if (inputText.value == '') return

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("to-do-div");

    const newToDo = document.createElement('li');
    newToDo.classList.add('li');
    newToDo.innerText = inputText.value;
    todoDiv.appendChild(newToDo);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteBtn);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(doneBtn);


    list.appendChild(todoDiv);
    inputText.value = '';
}


function deleteDone(e) {
    const item = e.target
    if (item.classList[0] === "delete-btn") {
        const listItem = item.parentElement;
        listItem.classList.add('fall');
        listItem.addEventListener('transitionend', function(){
            listItem.remove();
        })
    }

    if (item.classList[0] === "done-btn") {
        const listItem = item.parentElement;
        listItem.classList.toggle("completed");
    }

}