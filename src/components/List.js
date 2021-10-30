import React, {useState} from 'react';
import Form from './Form';
import Todo from './Todo';
const Messages = require('../utils/Messages.js');

function List() {
    //const textHaveWhiteSpacesRegex = /^\s*$/;
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
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
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodoById);
    };

    const removeTodo = id => {
        let removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

    return (
        <div>
            <h1>TodoList</h1>
            <Form onSubmit={addTodo} />
            <Todo todos={todos} 
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}/>
        </div>
    )
}

export default List;
