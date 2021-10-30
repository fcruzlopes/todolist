import React, {useState} from 'react';
import Form from './Form';
import Todo from './Todo';
const Messages = require('../utils/Messages.js');

function List() {
    const [todos, setTodos] = useState([]);
    
    /*Regex to evaluate the user text. Returns true
      if there only spaces, and clean more than 1 space
      after a char*/ 
    const textHaveWhiteSpacesRegex = /^\s*$/;

    /*Function to add a todo in the list
      if a a null space is detected then 
      an error is printed to the console*/ 
    const addTodo = todo =>{
        if(!todo.text || textHaveWhiteSpacesRegex.test(todo.text)){
            console.log(Messages.emptyTodoException);
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(Messages.newTodoAdded, todo, ...todos);
    };

    /*Upadted the todo, if a space or invalid value is
      passed then the previous value is keeped*/ 
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || textHaveWhiteSpacesRegex.test(newValue.text)){
            console.log(Messages.emptyTodoException);
            return;
        }

        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
    };

    /*TODO: not working, deploys an error while clicking in the 
      todo*/
    const completeTodo = id => {
        let updateTodoById = todos.map((todo) => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodoById);
    };

    /*Removes the todo in the list*/
    const removeTodo = id => {
        let removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

    return (
        <div className='todo-app'>
            <h1>TodoList</h1>
            <Form onSubmit={addTodo} />
            <Todo todos={todos} 
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}/>
        </div>
    )
}

export default List;
