
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

for(let i =0; i < todoList.length; i++ ){
    const todoObj = todoList[i];
    const {name, dueDate} = todoObj;
    const html = `
        <div>${name}  </div>  
        <div> ${dueDate} </div>
         <button 
           onclick='
            todoList.splice(${i},1);
            renderTodoList();
           ' class="js-delete-btn"
         > Delete </button>
    `;
    todoListHTML += html;
  }
    console.log(todoListHTML);

  document.querySelector('.display-array').innerHTML = todoListHTML;


}


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


