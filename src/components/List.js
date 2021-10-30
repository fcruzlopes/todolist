import React, {useState} from 'react';
import Form from './Form';
import Todo from './Todo';
const Messages = require('../utils/Messages.js');

function List() {
    var textHaveWhiteSpacesRegex = /^\s*$/;
    const [todos, setTodos] = useState([]);
    const addTodo = todo =>{
        if(!todo.text || textHaveWhiteSpacesRegex.test(todo.text)){
            console.log(Messages.emptyTodoException);
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(Messages.newTodoAdded, todo, ...todos);
    };
    const completeTodo = id => {
        let updateTodoById = todos.map((todo) => {
            if(todo.id === id){
                todo.isComplete = false;
                return todo;
            }
        });
        setTodos(updateTodoById);
    };

    return (
        <div>
            <h1>TodoList</h1>
            <Form onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo}/>
        </div>
    )
}

export default List;
