let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
function toDo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const inputDateElement = document.querySelector('.js-input-date');
  const dueDate = inputDateElement.value;
  if(name && dueDate){
  toDoList.push({
    name,
    dueDate,
  });
  }
  else{
    alert('Both fields are required');
  }
  
  renderToDoList();
  inputElement.value ='';
  saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('toDoList',JSON.stringify(toDoList));
  //localStorage.setItem('score',JSON.stringify(score));
  console.log(toDoList);
}

function renderToDoList(){
  let toDoListHTML = '';
  
  for (let i = 0; i < toDoList.length; i++){
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
  }

  console.log(toDoListHTML);
  document.querySelector('.js-toDolistHtml').innerHTML = toDoListHTML; 
}