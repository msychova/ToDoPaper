let ListDiv = document.getElementById("todo-items");
let EditStatus = document.getElementById("item-status");
let NewItem = document.getElementById("new-item");
let DeleteItem = document.getElementById("delete-item");

function DOM(){
	this.addTodoItemDom = function(todoItem){
		
		let param;
		let label = todoItem.text;
		let id = todoItem.id;

		if(todoItem.completed === false)
		param = `<div id="itemrow">${id}. ${label} <input type="checkbox" id="ToDoItem" value="not_completed" onclick="console.log(domFunction.GetCheckedItemId(${id}))">&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${id}))" title="Delete item">X</button></div>`; 
		
		if(todoItem.completed === true)
		param = `<div>${id}. ${label} <input type="checkbox" name="ToDoItem" value="completed" checked>&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" style="background-color:red" style="text-color:white" onclick="console.log(domFunction.DeleteItemById(${id}) title="Delete item">X</button></div>`; 
		
		ListDiv.innerHTML += param;
		
		console.log(ListDiv);
	}
	this.viewTodoListDom = function(todoItem){
		
		let param = "";
		console.log(todoItem);
		
		for(let i=0;i < todoItem.length;i++){
			let label = todoItem[i].text;
			let id = todoItem[i].id;
			
			if(todoItem[i].completed === false)			

				param += (`<div id="itemrow">${id}. ${label} <input type="checkbox" id="ToDoItem" value="not_completed" onclick="console.log(domFunction.GetCheckedItemId(${id}))">&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${id}))" title="Delete item">X</button></div>`); 
			

			if(todoItem[i].completed === true)
				param += (`<div id="itemrow">${id}. ${label} <input type="checkbox" name="ToDoItem" value="completed" checked disabled>&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${id}))" title="Delete item">X</button></div>`); 
		}
		
		console.log(param);
		ListDiv.innerHTML = param;
	}
	
	this.editTodoItemDom = function(todoItem){
		let param = "";
		
		for(let i=0;i < todoItem.length;i++){
			let label = todoItem[i].text;
			let id = todoItem[i].id;
			
			if(todoItem[i].completed === false)
			param += (`<div id="itemrow">${id}. ${label} <input type="checkbox" id="ToDoItem" value="not_completed" onclick="console.log(domFunction.GetCheckedItemId(${id}))">&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${id}))" title="Delete item">X</button></div>`); 

			if(todoItem[i].completed === true)
			param += (`<div id="itemrow">${id}. ${label} <input type="checkbox" id="ToDoItem" value="completed" checked disabled>&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${id}))" title="Delete item">X</button></div>`); 
		}
		
		ListDiv.innerHTML = param;
		

	}
	this.deleteTodoItemDom = function(todoItem){
		let param = "";
		
		for(let i=0;i < todoItem.length;i++){
			let label = todoItem[i].text;
			let id = todoItem[i].id;
			
			if(todoItem[i].completed === false)
			param += (`<div id="itemrow">${id}. ${label} <input type="checkbox" id="ToDoItem" value="not_completed" onclick="console.log(domFunction.GetCheckedItemId(${id}))">&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${id}))" title="Delete item">X</button></div>`); 
 

			if(todoItem[i].completed === true)
			param += (`<div id="itemrow">${id}. ${label} <input type="checkbox" id="ToDoItem" value="completed" checked disabled>&nbsp;&nbsp;&nbsp;<button style="border-radius:15px" onclick="console.log(domFunction.DeleteItemById(${id}))" title="Delete item">X</button></div>`); 
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
