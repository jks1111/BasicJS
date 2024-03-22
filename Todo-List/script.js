let todoList = [{item:'Buy', dueDate : '22/03/2024'}];
displayItems()
function AddTodo(){
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  
  let dateElement = document.querySelector('#todo-date');
  let todoDate = dateElement.value;

 // console.log(todoItem);
   todoList.push({item: todoItem, dueDate: todoDate});
   inputElement.value = '';
   dateElement.value = '';
   displayItems();
   
}

function displayItems(){
  let ContainerElement = document.querySelector('.todo-container');
 let newHtml = '';
  for(let i = 0 ; i<todoList.length ; i++){
    let {item, dueDate} = todoList[i];
    newHtml+= `
    
       <span>${item} </span>
       <span>${dueDate} </span>
       <button class="btn-delete" onclick="todoList.splice(${i},1);
       displayItems();">Delete</button>
     
    `;
    
  }
  ContainerElement.innerHTML = newHtml;
}