const todoList=[];


renderTodoList();
function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject,index)=>{
    const { name, dueDate } = todoObject;
    const html =
      `<div>${name}</div> 
      <div>${dueDate}</div>
      <button class="delete-button js-delete-button">Delete</button>`
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton , index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice(index , 1);
    renderTodoList();
  });
});
}
document.querySelector('.js-add-button')
.addEventListener('click',()=>{
  addTodo();
})

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name=inputElement.value;
  const dueDateElement = document.querySelector('.js-due-date-input');
  const dueDate=dueDateElement.value;
  todoList.push({name,dueDate});
  inputElement.value='';
  dueDateElement.value='';
  renderTodoList();
}
