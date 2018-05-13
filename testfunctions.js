todoitem.addTodoItem('text0',false);
todoitem.addTodoItem('text1',true);
todoitem.addTodoItem('text2',false);
todoitem.addTodoItem('text3',true);
todoitem.editTodoItem(2,'Updated text');
todoitem.viewTodoList('not_completed');
todoitem.viewTodoList('completed');
todoitem.viewTodoList('all');
todoitem.deleteTodoItem(3);