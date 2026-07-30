
const  todoList = [
    {
      name:'watch tv',
      dueDate : '2026-02-06'
    },
    {
      name:' book train',
      dueDate: '2026-09-07'
    }];

renderTodoList();

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach(function(todoObj, index){
        const {name, dueDate} = todoObj;
        const html = `
            <div>${name}  </div>  
            <div> ${dueDate} </div>
            <button 
            class="js-delete-btn  js-del-todo-btn"
            > Delete </button>
        `;
        todoListHTML += html;
    });
    
        console.log(todoListHTML);

    document.querySelector('.display-array').innerHTML = todoListHTML;

    document.querySelectorAll('.js-del-todo-btn').forEach( (deleteBtn, index) => {
      deleteBtn.addEventListener('click',
        () => {
            todoList.splice(index,1);
              renderTodoList();
        }
      )
    })
    
    
    // addEventListener('click', () => {
    // todoList.splice(index,1);
    //  renderTodoList();
    //  })

}


document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
    addValueToArray()
})  



function addValueToArray(){
  const x =  document.querySelector('.js-todo-list');
  const name = x.value;

  const dateInputElement =  document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todoList.push({ name,dueDate});
  
  console.log(todoList);
  x.value = ' ';
  dateInputElement.value ='';
  renderTodoList();
}


