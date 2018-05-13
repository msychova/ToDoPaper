let todoArr = []; //array with all todo items
let tdid = 0; //default value of todo id
let newItem = {};
let status = '';

function ToDoItem(todoItem){
	
	var ToDoHistory = [];
	
	var initToDoHistory = function() {
		$.getJSON( "history.json", function(data) {
			console.log(data);	
			ToDoHistory = data.data;
		});
	};
	
	initToDoHistory();
	
	function todoItem (text,completed,id){
		this.text = text;
		this.completed = completed;
		this.id = tdid ++;
	}

//---create new todo item
	
	this.addTodoItem = function(text,completed) {
		let newItem = {};
		newItem = new todoItem(text,completed);
		
		if (!text || completed == null || text === false){
			
			return `Text is required.`;								
		}	
		
		domFunction.addTodoItemDom(newItem);
		todoArr.push(newItem);

		ToDoHistory.push({
			date: (new Date()).toISOString(),
			text: newItem.text,
			completed: newItem.completed,
			id: newItem.id
		});
		
		console.log('todoArr:' + JSON.stringify(todoArr));
		todoitem.viewTodoList(status);
		
		let msg = 'New Item was added.'
		return msg;	
	};

//---view list of todo items
	
	this.viewTodoList = function(itemsType) {
	
		let temp = [];
		status = itemsType;
		
		if (itemsType === 'completed'){				
			temp = todoArr.filter(todoItem => todoItem.completed === true); 
			console.log(temp);
			domFunction.viewTodoListDom(temp);	

		}

		if (itemsType == 'not_completed'){			
			temp = todoArr.filter(todoItem => todoItem.completed === false); 
			console.log(temp);
			domFunction.viewTodoListDom(temp);
		}
		
		if (itemsType == 'all'){
			domFunction.viewTodoListDom(todoArr);
			return todoArr;
		}
};

//---edit todo item text by id---
 	this.editTodoItem = function (todoItemId,newText) {
		let flag = false;
		let msg = '';
		console.log(todoItemId);
		
		if (!newText || todoItemId === false){
			
			return `Please, add text.`;								
		}
		
		for(let i=0; i < todoArr.length; i++){
			if (todoArr[i].id == todoItemId){
				flag = true;
				todoArr[i].text = newText;
				console.log(JSON.stringify(todoArr));
				domFunction.editTodoItemDom(todoArr);
				todoitem.viewTodoList(status);
			}
		} 
		
		flag === false ? msg = `Item with ID: ${todoItemId} doesn\'t exist.`: msg = `Item with ID: ${todoItemId} was updated.`;
		
		return msg;	
	}
	
//--- delete todo item---
	
	this.deleteTodoItem = function (todoItemId) {
		let flag = false;
		let msg = '';
		
		for(let i=0; i < todoArr.length; i++){
			if (todoArr[i].id === todoItemId){
				flag = true;
				todoArr.splice(i,1);
				console.log(JSON.stringify(todoArr));								
				domFunction.deleteTodoItemDom(todoArr);
				todoitem.viewTodoList(status);
				
			}
		} 
		
		
		
		flag === false ? msg = `Item with ID: ${todoItemId} doesn\'t exist.`: msg = `Item with ID: ${todoItemId} was deleted.`;
		
		return msg;	
	}
	
//--- complete todo item
 	this.completeTodoItem = function (todoItemId) {
		let flag = false;
		let msg = '';
		console.log(todoItemId);
		
		for(let i=0; i < todoArr.length; i++){
			if (todoArr[i].id == todoItemId){
				flag = true;
				todoArr[i].completed = true;
				console.log(JSON.stringify(todoArr));
				domFunction.viewTodoListDom(todoArr);
			}
		} 
		
		flag === false ? msg = `Item with ID: ${todoItemId} doesn\'t exist.`: msg = `Status of Item with ID: ${todoItemId} was updated to completed.`;
		
		return msg;	
	}
}

var todoitem = new ToDoItem();


