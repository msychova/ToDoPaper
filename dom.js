let ListDiv = document.getElementById("todo-items");
let EditStatus = document.getElementById("item-status");
let NewItem = document.getElementById("new-item");
let DeleteItem = document.getElementById("delete-item");

function DOM(){
	this.addTodoItemDom = function(todoItem){
		
		let param;

		if(todoItem.completed === false)
		param = `<div id="itemrow">${JSON.stringify(todoItem.id)}.${JSON.stringify(todoItem.text)} <input type="checkbox" id="ToDoItem" value="not_completed" onclick="console.log(domFunction.GetCheckedItemId(${JSON.stringify(todoItem.id)}))">&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${JSON.stringify(todoItem.id)}))" title="Delete item">X</button></div>`; 
		
		if(todoItem.completed === true)
		param = `<div>${JSON.stringify(todoItem.id)}.${JSON.stringify(todoItem.text)} <input type="checkbox" name="ToDoItem" value="completed" checked>&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" style="background-color:red" style="text-color:white" onclick="console.log(domFunction.DeleteItemById(${JSON.stringify(todoItem.id)}) title="Delete item">X</button></div>`; 
		
		ListDiv.innerHTML += param;
		
		console.log(ListDiv);
	}
	this.viewTodoListDom = function(todoItem){
		
		let param = "";
		console.log(todoItem);
		
		for(let i=0;i < todoItem.length;i++){
			if(todoItem[i].completed === false)
			param += (`<div id="itemrow">${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" id="ToDoItem" value="not_completed" onclick="console.log(domFunction.GetCheckedItemId(${JSON.stringify(todoItem[i].id)}))">&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${JSON.stringify(todoItem[i].id)}))" title="Delete item">X</button></div>`); 

			if(todoItem[i].completed === true)
			param += (`<div id="itemrow">${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" name="ToDoItem" value="completed" checked disabled>&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${JSON.stringify(todoItem[i].id)}))" title="Delete item">X</button></div>`); 
		}
		
		console.log(param);
		ListDiv.innerHTML = param;
	}
	
	this.editTodoItemDom = function(todoItem){
		let param = "";
		
		for(let i=0;i < todoItem.length;i++){
			if(todoItem[i].completed === false)
			param += (`<div id="itemrow">${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" id="ToDoItem" value="not_completed" onclick="console.log(domFunction.GetCheckedItemId(${JSON.stringify(todoItem[i].id)}))">&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${JSON.stringify(todoItem[i].id)}))" title="Delete item">X</button></div>`); 

			if(todoItem[i].completed === true)
			param += (`<div id="itemrow">${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" id="ToDoItem" value="completed" checked disabled>&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${JSON.stringify(todoItem[i].id)}))" title="Delete item">X</button></div>`); 
		}
		
		ListDiv.innerHTML = param;
		

	}
	this.deleteTodoItemDom = function(todoItem){
		let param = "";
		
		for(let i=0;i < todoItem.length;i++){
			if(todoItem[i].completed === false)
			param += (`<div id="itemrow">${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" id="ToDoItem" value="not_completed" onclick="console.log(domFunction.GetCheckedItemId(${JSON.stringify(todoItem[i].id)}))">&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${JSON.stringify(todoItem[i].id)}))" title="Delete item">X</button></div>`); 

			if(todoItem[i].completed === true)
			param += (`<div id="itemrow">${JSON.stringify(todoItem[i].id)}.${JSON.stringify(todoItem[i].text)} <input type="checkbox" id="ToDoItem" value="completed" checked disabled>&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${JSON.stringify(todoItem[i].id)}))" title="Delete item">X</button></div>`); 
		}
		
		console.log(param);
		ListDiv.innerHTML = param;

	}
	
	this.GetNewItemText = function(){
		let newitemtext = document.getElementById("AddItemText").value;
		NewItem.innerHTML = todoitem.addTodoItem(newitemtext,false);
		DeleteItem.innerHTML = '';
		EditStatus.innerHTML = '';
	}
	
	this.GetEditItemParam = function(){
		let edititemid = document.getElementById("EditItemId").value;
		let edititemtext = document.getElementById("EditItemText").value;
		//console.log(edititemid,edititemtext);
		EditStatus.innerHTML = todoitem.editTodoItem(edititemid, edititemtext);
		DeleteItem.innerHTML = '';
		NewItem.innerHTML = '';
	}
	
	this.GetCheckedItemId = function(itemid){
		console.log(itemid);
		todoitem.completeTodoItem(itemid);
	}
	
	this.DeleteItemById = function(itemid){
		console.log(itemid);
		DeleteItem.innerHTML = todoitem.deleteTodoItem(itemid);
		EditStatus.innerHTML = '';
		NewItem.innerHTML = '';
	}
	
}

var domFunction = new DOM();
