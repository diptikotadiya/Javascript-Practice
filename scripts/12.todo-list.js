document.querySelector('.js-add-input-button').addEventListener('click',()=>{
  toDo();
});
const toDoList = [];
function toDo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const inputDateElement = document.querySelector('.js-input-date');
  const dueDate = inputDateElement.value;
  toDoList.push({
    name,
    dueDate,
  });
  console.log(toDoList);
  renderToDoList();
  inputElement.value ='';
}
function renderToDoList(){
  let toDoListHTML = '';
  toDoList.forEach((toDoObject,index) =>{
    const {name,dueDate} = toDoObject;
    const HTML = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button class = "delete-button js-delete-todo-button" 
    >Delete</button>
    `;
    toDoListHTML += HTML;
  });
/*  for (let i = 0; i < toDoList.length; i++){
    const toDoObject = toDoList[i];
    //const name = toDoObject.name;
    //const dueDate = toDoObject.dueDate;
    const {name,dueDate} = toDoObject;
    const HTML = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button class = "delete-button" onclick = "
      toDoList.splice(${i},1);
      renderToDoList();
    ">Delete</button>
    `;
    toDoListHTML += HTML;
    
  }*/
    console.log(toDoListHTML);
    document.querySelector('.js-toDolistHtml').innerHTML = toDoListHTML;

 
    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton,index) => {
        deleteButton.addEventListener('click',()=>{
          toDoList.splice(index,1);
            renderToDoList();
          });
          });
    }
  
