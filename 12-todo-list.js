let todoList = 
JSON.parse(localStorage.getItem('todoList')) ||
[
{
    name: 'make dinner',
    dueDate: '2022-12-22'
 }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
 }];


renderTodoList();



function renderTodoList() {

    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate} = todoObject;
        const html = `
            <button class="checkbox js-checkbox"></button>
            <div>${name}</div>
            <div>${dueDate}</div> 
            <button class="delete-todo-button js-delete-button">Delete</button>
    `;
        todoListHTML += html;
    })

    saveToStorage();
    const todoListContainer = document.querySelector('.js-todo-list');
    todoListContainer.innerHTML = todoListHTML;
      updateBox();
        document.querySelectorAll('.js-delete-button')
          .forEach((deleteButton, index) => {
            
              deleteButton.addEventListener(
                'click', () => {
                  todoList.splice(index, 1);
                  renderTodoList();
                }
              );
          });

}

  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addTodo();
    })

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    document.querySelectorAll('.js-checkbox').forEach((checklist) =>
    {
      checklist.classList.remove('checkshow')
    })

    todoList.push({
      name,
      dueDate
    });


    inputElement.value = '';

    renderTodoList();
}

  saveToStorage();
function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}


function updateBox(){
  document.querySelectorAll('.js-checkbox').forEach((checklist) => {
    checklist.addEventListener(
      'click', () => {
        console.log('mid')
        if(checklist.classList.contains('checkshow')){
          checklist.classList.remove('checkshow')
          console.log('1')
        } else {
          checklist.classList.add('checkshow')
          console.log('2')
        }
      }
    );
});
}


